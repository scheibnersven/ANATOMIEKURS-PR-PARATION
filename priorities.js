/* Testat 2: priority and confidence are independent; only confidence is browser-local. */
(() => {
  'use strict';
  const data=window.PREP_TESTAT2, key='prepmeister-testat2-priorities-v1';
  const labels={unknown:'Keine Ahnung',heard:'Schon gehört',can:'Können'};
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const byId=new Map(data.items.map(item=>[item.id,item]));
  let ratings={};
  try {const saved=JSON.parse(localStorage.getItem(key));if(saved&&typeof saved==='object'&&!Array.isArray(saved))for(const [id,state] of Object.entries(saved))if(byId.has(id)&&Object.hasOwn(labels,state))ratings[id]=state;} catch {}
  const filters={query:'',section:'all',priority:'all',state:'all'};
  let round=null,storageFailed=false;
  const stars=priority=>`<span class="lp-stars" aria-label="Priorität: ${priority} ${priority===1?'Stern':'Sterne'}"><span aria-hidden="true">${'★'.repeat(priority)}</span></span>`;
  function save(){try{localStorage.setItem(key,JSON.stringify(ratings));storageFailed=false;}catch{storageFailed=true;}}
  function matches(){
    const q=filters.query.trim().toLocaleLowerCase('de');
    return data.items.filter(item=>(filters.section==='all'||item.section===filters.section)&&(filters.priority==='all'||item.priority===Number(filters.priority))&&(filters.state==='all'||(filters.state==='open'?!ratings[item.id]:ratings[item.id]===filters.state))&&(!q||`${item.title} ${item.section} ${item.prompt}`.toLocaleLowerCase('de').includes(q)));
  }
  function counts(items=data.items){const result={open:0,unknown:0,heard:0,can:0};items.forEach(item=>result[ratings[item.id]||'open']++);return result;}
  function statusButtons(item,quiz=false){return `<div class="lp-rating" role="group" aria-label="Lernstand: ${esc(item.title)}">${Object.entries(labels).map(([state,label])=>`<button type="button" data-lp-rate="${item.id}" data-lp-value="${state}" ${quiz?'data-lp-advance="true"':''} aria-pressed="${ratings[item.id]===state}"><span class="lp-state-dot ${state}" aria-hidden="true"></span>${label}</button>`).join('')}</div>`;}
  function summary(){
    const n=counts(),assessed=data.items.length-n.open;
    return `<div class="lp-progress-heading"><span><strong>${assessed}</strong> / ${data.items.length} Themen eingeschätzt</span><span>${n.can} davon auf „Können“</span></div><div class="lp-progress-track" role="progressbar" aria-label="Eingeschätzte Themen" aria-valuemin="0" aria-valuemax="${data.items.length}" aria-valuenow="${assessed}"><span style="width:${assessed/data.items.length*100}%"></span></div><div class="lp-stats">${[['open','Noch offen'],...Object.entries(labels)].map(([state,label])=>`<button type="button" data-lp-state="${state}" aria-pressed="${filters.state===state}"><span class="lp-stat-count">${n[state]}</span><span>${label}</span></button>`).join('')}</div>`;
  }
  function list(){
    const items=matches(),filtered=filters.query.trim()||filters.section!=='all'||filters.priority!=='all'||filters.state!=='all';
    if(!items.length)return '<div class="lp-no-results"><h3>Hier ist gerade alles frei.</h3><p>Für diese Auswahl gibt es keine Themen. Ändere die Filter oder setze sie zurück.</p><button class="tool-button" type="button" data-lp-command="clear">Filter zurücksetzen</button></div>';
    return data.sections.map((section,index)=>{
      const group=items.filter(item=>item.section===section).sort((a,b)=>b.priority-a.priority);
      if(!group.length)return '';
      const done=group.filter(item=>ratings[item.id]==='can').length;
      return `<details class="lp-section" data-lp-section="${esc(section)}" ${filtered||index===0?'open':''}><summary><span><span class="lp-section-index">${String(index+1).padStart(2,'0')}</span>${esc(section)}</span><span class="lp-section-count">${done} / ${group.length} können <span class="lp-plus" aria-hidden="true">+</span></span></summary><div>${group.map(item=>`<article class="lp-topic" data-lp-topic="${item.id}"><div class="lp-topic-copy"><div class="lp-topic-heading"><h3>${esc(item.title)}</h3>${stars(item.priority)}</div><p>${esc(item.prompt)}</p></div>${statusButtons(item)}</article>`).join('')}</div></details>`;
    }).join('');
  }
  function selectOptions(values,selected){return values.map(([value,label])=>`<option value="${esc(value)}" ${selected===String(value)?'selected':''}>${esc(label)}</option>`).join('');}
  function render(){
    const selection=matches();
    return `<section class="priorities-widget" aria-label="Lernprioritäten Kopf, Hals und Thorax"><div class="widget-heading"><div><h2>Lernprioritäten fürs Testat.</h2><p>Kopf, Hals &amp; Thorax · Erklären. Einschätzen. Gezielt wiederholen.</p></div><button type="button" class="button accent" data-lp-command="start" id="lpStart" ${selection.length?'':'disabled'}>${round?'Neu starten':'Selbsttest starten'} <span class="arrow" aria-hidden="true">↗</span></button></div>${round?roundPanel():`<div class="lp-overview"><div class="lp-overview-copy"><span class="eyebrow">DEIN PERSÖNLICHER LERNSTAND</span><h3>Ein klarer Blick.<br><em>Dein nächster Schritt.</em></h3><p>Schätze jedes Thema selbst ein. Die Sterne zeigen die Priorität aus deiner Checkliste – unabhängig davon, wie sicher du dich fühlst.</p><div class="lp-legend" aria-label="Prioritäten aus der Checkliste"><span><b>★★★</b> Rot</span><span><b>★★</b> Gelb</span><span><b>★</b> Grün</span></div></div><div id="lpSummary">${summary()}</div></div><div class="lp-filter-heading"><h3>Deine Themen.</h3><button type="button" class="text-link" data-lp-command="clear">Filter zurücksetzen ↺</button></div><div class="lp-filters"><label><span>Suchen</span><input type="search" data-lp-filter="query" value="${esc(filters.query)}" placeholder="Thema oder Struktur suchen …"></label><label><span>Themengebiet</span><select aria-label="Themengebiet" data-lp-filter="section">${selectOptions([['all','Alle Themengebiete'],...data.sections.map(s=>[s,s])],filters.section)}</select></label><label><span>Priorität</span><select aria-label="Priorität" data-lp-filter="priority">${selectOptions([['all','Alle Prioritäten'],['3','★★★ · Drei Sterne'],['2','★★ · Zwei Sterne'],['1','★ · Ein Stern']],filters.priority)}</select></label><label><span>Lernstand</span><select aria-label="Lernstand" data-lp-filter="state">${selectOptions([['all','Alle Lernstände'],['open','Noch offen'],...Object.entries(labels)],filters.state)}</select></label></div><div class="lp-list-caption"><span id="lpMatchCount" role="status">${selection.length} von ${data.items.length} Themen</span><span>Im Selbsttest: hohe Priorität &amp; unsichere Themen zuerst.</span></div><div id="lpResults">${list()}</div>`}<p class="lp-local-note" id="lpStorageNote" role="status">${storageFailed?'Deine Auswahl ist aktuell nur für diese geöffnete Seite verfügbar. Der Browser blockiert das Speichern.':'Dein Lernstand bleibt in diesem Browser gespeichert. Die Sterne stammen aus der eingereichten Checkliste; die Lernimpulse sind kurz neu formuliert.'}</p></section>`;
  }
  function roundPanel(){
    const items=round.ids.map(id=>byId.get(id));
    if(round.index>=items.length){
      const n=counts(items),assessed=items.length-n.open;
      return `<div class="lp-round lp-complete"><span class="eyebrow">DEIN DURCHGANG</span><h3 tabindex="-1" id="lpQuestionTitle">Ein guter Überblick.<br><em>Und ein klarer Fokus.</em></h3><p>${assessed} von ${items.length} Themen sind eingeschätzt. Davon: ${n.can} × „Können“, ${n.heard} × „Schon gehört“ und ${n.unknown} × „Keine Ahnung“. ${n.open?`${n.open===1?'Ein Thema ist':n.open+' Themen sind'} noch offen.`:''}</p><div class="lp-round-actions">${n.can<items.length?'<button class="button accent" type="button" data-lp-command="repeat">Unsichere Themen wiederholen ↗</button>':''}<button type="button" class="tool-button" data-lp-command="overview">Zur Themenübersicht</button></div></div>`;
    }
    const item=items[round.index];
    return `<div class="lp-round"><div class="lp-round-top"><span class="eyebrow">SELBSTTEST · ${round.index+1} / ${items.length}</span><button type="button" class="text-link" data-lp-command="overview">Zur Übersicht ×</button></div><div class="lp-progress-track" role="progressbar" aria-label="Fortschritt im Durchgang" aria-valuemin="0" aria-valuemax="${items.length}" aria-valuenow="${round.index}"><span style="width:${round.index/items.length*100}%"></span></div><div class="lp-question"><div class="lp-question-meta"><span>${esc(item.section)}</span>${stars(item.priority)}</div><h3 id="lpQuestionTitle" tabindex="-1">${esc(item.title)}</h3><p>${esc(item.prompt)}</p><span class="lp-question-instruction">Erkläre es laut oder in Gedanken. Wie sicher bist du?</span>${statusButtons(item,true)}<p class="lp-auto-next">Deine Auswahl wird gespeichert. Danach öffnet sich das nächste Thema.</p></div><div class="lp-round-footer"><button type="button" class="tool-button" data-lp-command="previous" ${round.index?'':'disabled'}>← Zurück</button><span>${ratings[item.id]?`Bisher: ${labels[ratings[item.id]]}`:'Noch nicht eingeschätzt'}</span><button type="button" class="text-link" data-lp-command="skip">Überspringen →</button></div></div>`;
  }
  function replace(focus=true){
    const root=document.querySelector('.priorities-widget');if(!root)return;
    root.outerHTML=render();
    if(focus){const target=document.querySelector('#lpQuestionTitle')||document.querySelector('.priorities-widget h2');target?.setAttribute('tabindex','-1');target?.focus({preventScroll:true});}
  }
  function refreshList(focusId,state){
    const result=document.querySelector('#lpResults');if(!result)return;
    const openSections=[...result.querySelectorAll('details[open]')].map(el=>el.dataset.lpSection);
    result.innerHTML=list();
    result.querySelectorAll('details').forEach(el=>{if(openSections.includes(el.dataset.lpSection))el.open=true;});
    document.querySelector('#lpSummary').innerHTML=summary();
    const count=matches().length;document.querySelector('#lpMatchCount').textContent=`${count} von ${data.items.length} Themen`;
    document.querySelector('#lpStart').disabled=!count;
    const stateSelect=document.querySelector('[data-lp-filter=state]');if(stateSelect)stateSelect.value=filters.state;
    const note=document.querySelector('#lpStorageNote');if(storageFailed&&note)note.textContent='Deine Auswahl ist aktuell nur für diese geöffnete Seite verfügbar. Der Browser blockiert das Speichern.';
    if(focusId){const target=result.querySelector(`[data-lp-rate="${focusId}"][data-lp-value="${state}"]`)||result.querySelector('summary')||result.querySelector('button');target?.focus({preventScroll:true});}
  }
  function start(items){
    const ordered=[...items].sort((a,b)=>b.priority-a.priority||({unknown:0,heard:1,can:2}[ratings[a.id]]??0)-({unknown:0,heard:1,can:2}[ratings[b.id]]??0));
    if(!ordered.length)return;round={ids:ordered.map(item=>item.id),index:0};replace();
    document.querySelector('.priorities-widget')?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest('.priorities-widget button');if(!button)return;
    if(button.dataset.lpRate){const {lpRate:id,lpValue:state}=button.dataset;if(!byId.has(id)||!Object.hasOwn(labels,state))return;ratings[id]=state;save();if(button.dataset.lpAdvance&&round){round.index++;replace();}else refreshList(id,state);return;}
    if(button.dataset.lpState){filters.state=filters.state===button.dataset.lpState?'all':button.dataset.lpState;refreshList();document.querySelector(`[data-lp-state="${button.dataset.lpState}"]`)?.focus({preventScroll:true});return;}
    switch(button.dataset.lpCommand){
      case 'start':start(matches());break;
      case 'overview':round=null;replace();break;
      case 'previous':if(round){round.index=Math.max(0,round.index-1);replace();}break;
      case 'skip':if(round){round.index++;replace();}break;
      case 'repeat':start(round.ids.map(id=>byId.get(id)).filter(item=>ratings[item.id]!=='can'));break;
      case 'clear':Object.assign(filters,{query:'',section:'all',priority:'all',state:'all'});round=null;replace(false);document.querySelector('[data-lp-filter=query]')?.focus({preventScroll:true});break;
    }
  });
  document.addEventListener('input',event=>{if(event.target.matches('.priorities-widget [data-lp-filter=query]')){filters.query=event.target.value;refreshList();}});
  document.addEventListener('change',event=>{const name=event.target.dataset.lpFilter;if(name&&name!=='query'&&Object.hasOwn(filters,name)){filters[name]=event.target.value;refreshList();}});
  window.PREP_PRIORITIES=Object.freeze({render});
})();
