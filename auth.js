/* The original browser-only course gate; the existing course password is unchanged. */
(() => {
  'use strict';
  const passwordHash = 'aec2ee5f332c075bf6704d6256742fa198f2f1ce15abb32007c5375a51100553';
  const authKey = 'anatomiekurs-auth-ok';
  const persistentAuthKey = 'anatomiekurs-auth-remembered';
  const dialog = document.querySelector('#authDialog');
  const form = document.querySelector('#authForm');
  const input = document.querySelector('#authPassword');
  const remember = document.querySelector('#rememberPassword');
  const error = document.querySelector('#authError');
  const button = form.querySelector('button[type=submit]');
  let checking = false;
  function setBackgroundLocked(locked) {
    document.body.classList.toggle('access-locked',locked);
    document.querySelectorAll('.site-header, main, .site-footer').forEach(el=>el.inert=locked);
  }
  function unlock(rememberAccess=false,save=true) {
    if(save) {
      try {
        sessionStorage.setItem(authKey,'1');
        if(rememberAccess)localStorage.setItem(persistentAuthKey,'1');
        else localStorage.removeItem(persistentAuthKey);
      } catch { /* Access remains available for this page if storage is blocked. */ }
    }
    input.value='';
    error.textContent='';
    input.removeAttribute('aria-invalid');
    setBackgroundLocked(false);
    if(dialog.open)dialog.close();
    const title=document.querySelector('main h1');
    if(title){title.setAttribute('tabindex','-1');title.focus({preventScroll:true});}
  }
  function lock() {
    try { sessionStorage.removeItem(authKey); } catch {}
    try { localStorage.removeItem(persistentAuthKey); } catch {}
    for(const selector of ['#menuDialog','#detailDialog']){
      const popup=document.querySelector(selector);if(popup?.open)popup.close();
    }
    input.value='';remember.checked=false;error.textContent='';
    input.removeAttribute('aria-invalid');
    setBackgroundLocked(true);
    if(!dialog.open)dialog.showModal();
    input.focus();
  }
  dialog.addEventListener('cancel',event=>event.preventDefault());
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    if(checking)return;
    checking=true;button.disabled=true;error.textContent='';
    try {
      if(!window.crypto?.subtle)throw new Error('secure-context');
      const hash=await window.crypto.subtle.digest('SHA-256',new TextEncoder().encode(input.value));
      const digest=Array.from(new Uint8Array(hash),byte=>byte.toString(16).padStart(2,'0')).join('');
      if(digest===passwordHash)unlock(remember.checked);
      else {error.textContent='Das Kennwort stimmt nicht. Bitte versuche es erneut.';input.setAttribute('aria-invalid','true');input.select();}
    } catch {error.textContent='Die Kennwortprüfung ist hier nicht verfügbar. Bitte öffne die Seite über HTTPS oder einen lokalen Webserver.';}
    finally {checking=false;button.disabled=false;}
  });
  window.PREP_AUTH = Object.freeze({lock});
  let remembered=false;
  try {remembered=localStorage.getItem(persistentAuthKey)==='1'||sessionStorage.getItem(authKey)==='1';} catch {}
  if(remembered)unlock(false,false);
  else {setBackgroundLocked(true);dialog.showModal();}
})();
