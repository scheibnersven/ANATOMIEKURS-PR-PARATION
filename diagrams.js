/* Prepmeister — original, schematic SVG illustrations. No third-party assets. */
(() => {
  const baseStyle = `<style>
    .anatomy-zone { cursor: pointer; outline: none; }
    .anatomy-zone .zone-fill { transition: fill .3s ease, opacity .3s ease; }
    .anatomy-zone:hover .zone-fill, .anatomy-zone:focus-visible .zone-fill { fill: #efb5a4; opacity: .8; }
    .anatomy-zone:focus-visible { filter: drop-shadow(0 0 4px #dc7157); }
    .anatomy-line { fill: none; stroke: #847c72; stroke-width: 1.05; stroke-linecap: round; stroke-linejoin: round; }
    .anatomy-fine { fill: none; stroke: #a69b8c; stroke-width: .65; stroke-linecap: round; }
    .diagram-label { fill: #8b8175; font: 9px ui-sans-serif, system-ui, sans-serif; letter-spacing: 1.4px; }
    .foramen-dot { fill: #dc7157; stroke: #fff7ef; stroke-width: 2; transition: r .25s ease, fill .25s ease; }
    .foramen:hover .foramen-dot, .foramen:focus-visible .foramen-dot, .foramen.active .foramen-dot { fill: #a7432f; r: 6; }
    .foramen { cursor: pointer; outline: none; }
    .foramen:focus-visible { filter: drop-shadow(0 0 4px #dc7157); }
    @media (prefers-reduced-motion: reduce) { .anatomy-zone .zone-fill, .foramen-dot { transition: none; } }
  </style>`;

  function body() {
    return `<svg class="anatomy-svg body-diagram" viewBox="0 0 360 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pm-body-title pm-body-desc">
      <title id="pm-body-title">Präparationsgebiete des Bewegungsapparats</title>
      <desc id="pm-body-desc">Schematische Vorderansicht. Hals, Arm und Hand, Bauch und Glutealregion sowie Bein und Fuß sind auswählbar. Die Darstellung dient der Navigation.</desc>
      ${baseStyle}
      <defs>
        <linearGradient id="pm-skin" x1="0" x2="1"><stop stop-color="#c4b6a3"/><stop offset=".25" stop-color="#eee4d5"/><stop offset=".52" stop-color="#f7efe4"/><stop offset=".8" stop-color="#d8cbb8"/><stop offset="1" stop-color="#b6a996"/></linearGradient>
        <linearGradient id="pm-muscle" x1="0" x2="1"><stop stop-color="#bba693"/><stop offset=".5" stop-color="#dfcbbc"/><stop offset="1" stop-color="#bba693"/></linearGradient>
        <radialGradient id="pm-body-shadow"><stop stop-color="#6b5b49" stop-opacity=".15"/><stop offset="1" stop-color="#6b5b49" stop-opacity="0"/></radialGradient>
      </defs>
      <ellipse cx="180" cy="576" rx="92" ry="13" fill="url(#pm-body-shadow)"/>
      <path d="M180 18c-20 0-31 14-30 37 0 10 4 22 10 30l1 20-26 10c-12 4-24 9-31 20-9 17-13 45-17 64l-13 42-11 45-6 25-10 16-2 14 4 4 6-10-2 22 5 3 6-20-1 23 5 1 5-22 1 19 5 0 2-28 5-13-2-16 16-50 18-41 9-28 4 45-5 41-5 24 6 37 8 29 7 55 11 59 1 35-5 26 1 24-4 24-10 19 3 10 35-1 6-9-3-19 2-24 3-25-1-34 6-51 6-56 7-38 7 38 6 56 6 51-1 34 3 25 2 24-3 19 6 9 35 1 3-10-10-19-4-24 1-24-5-26 1-35 11-59 7-55 8-29 6-37-5-24-5-41 4-45 9 28 18 41 16 50-2 16 5 13 2 28 5 0 1-19 5 22 5-1-1-23 6 20 5-3-2-22 6 10 4-4-2-14-10-16-6-25-11-45-13-42c-4-19-8-47-17-64-7-11-19-16-31-20l-26-10 1-20c6-8 10-20 10-30 1-23-10-37-30-37Z" fill="url(#pm-skin)" stroke="#928573" stroke-width="1.1"/>
      <path d="M155 46c5-15 16-18 25-18s20 3 25 18M158 57l10-2m24 0 10 2m-22-1-4 15 7 1m-12 8c6 4 13 4 19 0m-35-20 3 14m44-14-3 14" class="anatomy-fine"/>
      <path d="M169 91l11 4 11-4m-19 4 1 15m14-15-1 15" class="anatomy-fine"/>
      <g class="anatomy-zone" data-area="hals" role="button" tabindex="0" aria-label="Hals auswählen">
        <title>Hals</title>
        <path class="zone-fill" d="m161 91 8 7 11 13 11-13 8-7-1 14 20 8-23 15h-30l-23-15 20-8Z" fill="#d6b7a5" opacity=".65"/>
        <path d="m163 93 11 31m23-31-11 31m-22-10 16 9 16-9m-26-9 10 10 10-10" class="anatomy-line"/>
      </g>
      <path d="M180 126v97m-45-103c17 2 26 7 39 6m51-6c-17 2-26 7-39 6M180 145c-11-16-29-22-48-12-8 4-11 15-10 26 15 11 34 17 54 9m4-23c11-16 29-22 48-12 8 4 11 15 10 26-15 11-34 17-54 9" fill="url(#pm-muscle)" stroke="#a18c7b" stroke-width=".9"/>
      <path d="m134 139 35 12m-39-6 41 11m-42-4 43 9m54-22-35 12m39-6-41 11m42-4-43 9M127 170l22 16m-20-7 19 15m-18-6 17 14m86-32-22 16m20-7-19 15m18-6-17 14" class="anatomy-fine"/>
      <g class="anatomy-zone" data-area="arm" role="button" tabindex="0" aria-label="Arm und Hand auswählen">
        <title>Arm und Hand</title>
        <path class="zone-fill" d="M129 119c-15-3-25 13-29 27l-15 59-12 42-11 51-10 25-6 16 5 0 9-12-4 27 6 0 6-21-1 24 5-1 5-25 1 23 5-2 2-26 5-16-1-17 17-51 17-40 7-39 5-26Zm102 0c15-3 25 13 29 27l15 59 12 42 11 51 10 25 6 16-5 0-9-12 4 27-6 0-6-21 1 24-5-1-5-25-1 23-5-2-2-26-5-16 1-17-17-51-17-40-7-39-5-26Z" fill="#d7bba8" opacity=".42"/>
        <path d="M126 125c-12 3-20 12-22 26l14 13m-3-13c-9 14-12 36-12 52m13-33c2 17-2 35-10 49m-8-13c-9 23-15 51-23 74m28-61c-3 22-15 48-22 69m-9-12 5 23-9 24m0-21 7 8m156-187c12 3 20 12 22 26l-14 13m3-13c9 14 12 36 12 52m-13-33c-2 17 2 35 10 49m8-13c9 23 15 51 23 74m-28-61c3 22 15 48 22 69m9-12-5 23 9 24m0-21-7 8" class="anatomy-line"/>
        <path d="m109 158-9 39m9-17-13 46m-12 20-8 33m175-121 9 39m-9-17 13 46m12 20 8 33" class="anatomy-fine"/>
      </g>
      <g class="anatomy-zone" data-area="bauch" role="button" tabindex="0" aria-label="Bauch und Regio glutea auswählen">
        <title>Bauch und Regio glutea</title>
        <path class="zone-fill" d="M127 171c9 9 15 24 15 37l-6 30-3 24 13 38 17 20 17-6 17 6 17-20 13-38-3-24-6-30c0-13 6-28 15-37-15 12-31 15-48 13-4 0-6 3-6 7s-2 7-6 7-6-3-6-7-2-7-6-7c-17 2-33-1-48-13Z" fill="#dbc1ad" opacity=".55"/>
        <path d="M180 178v101m-5-95-14 1-3 22 17-2m10-21 14 1 3 22-17-2m-10 7-17 1 1 20 16 0m10-21 17 1-1 20-16 0m-10 6-16 1 3 21 13 4m10-26 16 1-3 21-13 4m-35-65-12 26 14 36 24 23m34-85 12 26-14 36-24 23M142 271l21 23 17 15 17-15 21-23" class="anatomy-line"/>
        <path d="m143 215 11 12m-14-1 15 12m-17-1 18 12m61-34-11 12m14-1-15 12m17-1-18 12m-38 33 14 9 14-9" class="anatomy-fine"/>
        <ellipse cx="180" cy="256" rx="2" ry="3" fill="#9f8d7a"/>
      </g>
      <g class="anatomy-zone" data-area="bein" role="button" tabindex="0" aria-label="Bein und Fuß auswählen">
        <title>Bein und Fuß</title>
        <path class="zone-fill" d="m143 294 20 20 17-4-9 45-6 60-7 48 2 33-2 24-1 25 2 19-5 7-33 1-2-8 10-20 4-24-1-24 5-26-1-35-11-59-7-55Zm74 0-20 20-17-4 9 45 6 60 7 48-2 33 2 24 1 25-2 19 5 7 33 1 2-8-10-20-4-24 1-24-5-26 1-35 11-59 7-55Z" fill="#d6bda8" opacity=".46"/>
        <path d="M144 299c-4 29 4 67 10 96m7-79c3 21-2 53-7 79m-17-68 7 58 1 26m21-76-5 44-7 28m-11 4c-8 6-10 17-4 23l8 3 9-5 2-12-8-9Zm73-112c4 29-4 67-10 96m-7-79c-3 21 2 53 7 79m17-68-7 58-1 26m-21-76 5 44 7 28m11 4c8 6 10 17 4 23l-8 3-9-5-2-12 8-9Z" class="anatomy-line"/>
        <path d="M139 442c8 14 7 35 2 53l-2 40m11-93 0 47-6 45m77-92c-8 14-7 35-2 53l2 40m-11-93 0 47 6 45m-76 6-8 22m11-16-1 24m77-30 8 22m-11-16 1 24m-84-3 3 10m4-10 2 10m5-10 1 10m62-10-3 10m-4-10-2 10m-5-10-1 10" class="anatomy-fine"/>
      </g>
      <g fill="#dc7157"><circle cx="181" cy="111" r="3"/><circle cx="107" cy="195" r="3"/><circle cx="180" cy="239" r="3"/><circle cx="210" cy="371" r="3"/></g>
      <g class="anatomy-fine" stroke-dasharray="2 4"><path d="M187 111h88M103 195H40M186 239h99M216 371h65"/></g>
      <g class="diagram-label"><text x="281" y="114">01</text><text x="21" y="198">02</text><text x="290" y="242">03</text><text x="286" y="374">04</text></g>
    </svg>`;
  }

  function thorax() {
    const leftRibs = Array.from({length:9}, (_,i) => {
      const y = 221 + i * 15;
      const w = 63 + Math.sin(i / 8 * Math.PI) * 23;
      return `<path d="M197 ${y}C${184-w*.25} ${y-21} ${193-w} ${y-16} ${193-w} ${y+7}C${193-w} ${y+22} 169 ${y+26} 195 ${y+22}"/>`;
    }).join('');
    const rightRibs = Array.from({length:9}, (_,i) => {
      const y = 221 + i * 15;
      const w = 63 + Math.sin(i / 8 * Math.PI) * 23;
      return `<path d="M203 ${y}C${216+w*.25} ${y-21} ${207+w} ${y-16} ${207+w} ${y+7}C${207+w} ${y+22} 231 ${y+26} 205 ${y+22}"/>`;
    }).join('');
    return `<svg class="anatomy-svg thorax-diagram" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pm-thorax-title pm-thorax-desc">
      <title id="pm-thorax-title">Kopf, Hals und Thorax in anatomischen Ebenen</title>
      <desc id="pm-thorax-desc">Schematische anatomische Ebenen. Kopf, Brustkorb, Herz und Lungen sind einzeln auswählbar. Beim Erkunden können die Ebenen auseinandergezogen werden.</desc>
      ${baseStyle}
      <defs>
        <linearGradient id="pm-bone" x1="0" x2="1"><stop stop-color="#bdb09c"/><stop offset=".3" stop-color="#f5ead9"/><stop offset=".65" stop-color="#e8dcc7"/><stop offset="1" stop-color="#baac94"/></linearGradient>
        <linearGradient id="pm-lung" x1="0" x2="1"><stop stop-color="#d7c5ba"/><stop offset=".5" stop-color="#eee1d9"/><stop offset="1" stop-color="#c4afa3"/></linearGradient>
        <linearGradient id="pm-heart" x1="0" x2="1" y2="1"><stop stop-color="#e6a08b"/><stop offset=".6" stop-color="#c87964"/><stop offset="1" stop-color="#a45847"/></linearGradient>
      </defs>
      <path d="M155 167 108 186c-27 15-43 50-45 94l8 133 36 49h186l36-49 8-133c-2-44-18-79-45-94l-47-19" fill="#e9e0d3" opacity=".35" stroke="#c5b7a2" stroke-width=".8"/>
      <path d="M200 163v282" stroke="#b8aa94" stroke-width="13" stroke-linecap="round" opacity=".55"/>
      <g class="head-left anatomy-zone" data-area="head" role="button" tabindex="0" aria-label="Kopf und Hals auswählen">
        <title>Kopf und Hals — linke Hälfte</title>
        <path class="zone-fill" d="M199 34c-27-3-47 16-49 47-1 11 3 22 9 29l2 22 15 19 4 19-26 12 45 23Z" fill="url(#pm-bone)" stroke="#a49784" stroke-width="1"/>
        <path d="M196 44c-26 1-37 18-37 38m35-10-23 1-10 14 7 12 23-5m2 4-8 17 11 4m-30-13 5 22 16 14m-7-16 14 2m-25-18 2 16 21 15m-9 17 8 29m-17-19 10 25" class="anatomy-line"/>
        <path d="m168 77 11-2 9 5-4 9-13 2-5-6Z" fill="#9e8e77" opacity=".6"/>
        <path d="m182 132 12 2m-10 2 10 2m-8 3 8 1" class="anatomy-fine"/>
      </g>
      <g class="head-right anatomy-zone" data-area="head" role="button" tabindex="0" aria-label="Kopf und Hals auswählen">
        <title>Kopf und Hals — rechte Hälfte</title>
        <path class="zone-fill" d="M201 34c27-3 47 16 49 47 1 11-3 22-9 29l-2 22-15 19-4 19 26 12-45 23Z" fill="url(#pm-bone)" stroke="#a49784" stroke-width="1"/>
        <path d="M204 44c26 1 37 18 37 38m-35-10 23 1 10 14-7 12-23-5m-2 4 8 17-11 4m30-13-5 22-16 14m7-16-14 2m25-18-2 16-21 15m9 17-8 29m17-19-10 25" class="anatomy-line"/>
        <path d="m232 77-11-2-9 5 4 9 13 2 5-6Z" fill="#9e8e77" opacity=".6"/>
        <path d="m218 132-12 2m10 2-10 2m8 3-8 1" class="anatomy-fine"/>
      </g>
      <path d="M200 167v76" stroke="#c7baa6" stroke-width="13" stroke-linecap="round"/>
      <path d="M194 177h12m-12 8h12m-12 8h12m-12 8h12m-12 8h12m-12 8h12m-12 8h12m-6 16-27 24m27-24 27 24" stroke="#998d7b" fill="none" stroke-width="1.5"/>
      <g class="lung-left anatomy-zone" data-area="lungs" role="button" tabindex="0" aria-label="Lungen auswählen">
        <title>Rechte Lunge, aus Betrachterperspektive links</title>
        <path class="zone-fill" d="M179 216c-21 3-43 25-53 50-12 28-14 62-12 97 11 21 38 28 65 19l12-32-3-53 3-46-6-29Z" fill="url(#pm-lung)" stroke="#b19b8c" stroke-width="1.2"/>
        <path d="m179 248-25 29-12 38m23-50-16 2m5 10 14 25m-19-15-17 10m10 17-11 22m21-48 21 24m-5 5-14 19m-34-28 58 17m-63 28 64-10m-14-79-4-25" class="anatomy-fine"/>
        <path d="M126 308c17 11 38 15 58 13m-59 40 53-40" class="anatomy-line" opacity=".55"/>
      </g>
      <g class="lung-right anatomy-zone" data-area="lungs" role="button" tabindex="0" aria-label="Lungen auswählen">
        <title>Linke Lunge, aus Betrachterperspektive rechts</title>
        <path class="zone-fill" d="M221 216c21 3 43 25 53 50 12 28 14 62 12 97-11 21-38 28-65 19l-8-30 15-23-13-32-6-46 6-29Z" fill="url(#pm-lung)" stroke="#b19b8c" stroke-width="1.2"/>
        <path d="m221 248 25 29 12 38m-23-50 16 2m-5 10-14 25m19-15 17 10m-10 17 11 22m-21-48-21 24m5 5 14 19m34-28-51 16m56 29-58-8m8-78 4-25" class="anatomy-fine"/>
        <path d="m278 300-49 62" class="anatomy-line" opacity=".55"/>
      </g>
      <g class="heart anatomy-zone" data-area="heart" role="button" tabindex="0" aria-label="Herz auswählen">
        <title>Herz</title>
        <path d="m204 277-6-27c-3-16 5-27 16-26 12 1 15 11 10 21l-7 13" fill="none" stroke="#b77a65" stroke-width="11" stroke-linecap="round"/>
        <path d="m210 229 2-12m7 16 6-11m-21 9-3-12" stroke="#b77a65" stroke-width="5" stroke-linecap="round"/>
        <path d="m192 268-8-22m32 18 18-15" fill="none" stroke="#a29a94" stroke-width="9" stroke-linecap="round"/>
        <path class="zone-fill" d="M197 261c-18-9-32 8-29 26 2 17 17 27 25 39 9 14 19 28 27 30 8-13 20-42 18-61-1-22-13-39-28-32l-7 9Z" fill="url(#pm-heart)" stroke="#a5604f" stroke-width="1.2"/>
        <path d="M207 274c-9 22-4 52 13 75m-16-54-15 9-8 0m23 5 13 4 10 18m-26-44-12-4-12 4m32 5 16-6" fill="none" stroke="#efd1b2" stroke-width="1.6" stroke-linecap="round"/>
      </g>
      <g class="ribs anatomy-zone" data-area="thorax" role="button" tabindex="0" aria-label="Thorax und Rippen auswählen">
        <title>Thorax — Rippen und Sternum</title>
        <g fill="none" stroke="#cabba2" stroke-width="7" stroke-linecap="round" opacity=".88">${leftRibs}${rightRibs}</g>
        <g fill="none" stroke="#f9f1e4" stroke-width="2.4" stroke-linecap="round" opacity=".85">${leftRibs}${rightRibs}</g>
        <path class="zone-fill" d="m191 207 18 0-3 27-1 64-5 17-5-17-1-64Z" fill="url(#pm-bone)" stroke="#a99a84" stroke-width=".9"/>
        <path d="M192 209c-29-15-49-20-68-14m84 14c29-15 49-20 68-14" fill="none" stroke="#dacbb4" stroke-width="9" stroke-linecap="round"/>
        <path d="M192 207c-29-15-49-20-68-14m84 14c29-15 49-20 68-14" fill="none" stroke="#fcf3e3" stroke-width="2.5" stroke-linecap="round"/>
        <path d="m123 203-14 23-4 42m172-65 14 23 4 42" fill="none" stroke="#b9aa91" stroke-width="5" stroke-linecap="round"/>
      </g>
      <path d="M104 421h55m82 0h55" class="anatomy-fine" stroke-dasharray="2 4"/>
      <circle cx="200" cy="421" r="3" fill="#dc7157"/>
      <text x="200" y="458" text-anchor="middle" class="diagram-label">KOPF · HALS · THORAX</text>
    </svg>`;
  }

  function skull() {
    const markers = [
      ['cribriforme',200,110,'Lamina cribrosa'],
      ['opticus',166,163,'Canalis opticus'],
      ['orbitalis',142,183,'Fissura orbitalis superior'],
      ['rotundum',137,210,'Foramen rotundum'],
      ['ovale',123,235,'Foramen ovale'],
      ['spinosum',105,247,'Foramen spinosum'],
      ['acusticus',151,255,'Meatus acusticus internus'],
      ['jugulare',143,283,'Foramen jugulare'],
      ['hypoglossi',174,292,'Canalis nervi hypoglossi'],
      ['magnum',200,313,'Foramen magnum']
    ];
    const dots = markers.map(([id,x,y,name], i) => `<g class="foramen" data-foramen="${id}" role="button" tabindex="0" aria-label="${name} auswählen"><title>${name}</title><circle cx="${x}" cy="${y}" r="12" fill="transparent"/><circle class="foramen-dot" cx="${x}" cy="${y}" r="4"/><text x="${x-15}" y="${y+3}" font-family="ui-sans-serif,system-ui,sans-serif" font-size="8" fill="#965341">${i+1}</text></g>`).join('');
    return `<svg class="anatomy-svg skull-diagram" viewBox="0 0 400 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pm-skull-title pm-skull-desc">
      <title id="pm-skull-title">Schädelbasis — schematische Innenansicht</title>
      <desc id="pm-skull-desc">Vereinfachte Orientierungsskizze mit zehn auswählbaren Durchtrittsstellen. Die genaue Form, Lage und Größe sind schematisch und ersetzen keinen Anatomieatlas.</desc>
      ${baseStyle}
      <defs>
        <radialGradient id="pm-skull-bone"><stop stop-color="#eee1ce"/><stop offset=".7" stop-color="#e3d4bc"/><stop offset="1" stop-color="#c0ad90"/></radialGradient>
        <radialGradient id="pm-skull-floor"><stop stop-color="#fff9ed"/><stop offset="1" stop-color="#decdb4"/></radialGradient>
      </defs>
      <path d="M200 35C129 30 67 78 52 151c-9 38-7 90 9 126 9 22 26 43 36 62 18 39 54 62 103 62s85-23 103-62c10-19 27-40 36-62 16-36 18-88 9-126C333 78 271 30 200 35Z" fill="url(#pm-skull-bone)" stroke="#ad9778" stroke-width="1.5"/>
      <path d="M200 48C137 43 81 88 66 154c-8 35-5 83 9 116 9 22 28 42 36 61 16 34 46 56 89 56s73-22 89-56c8-19 27-39 36-61 14-33 17-81 9-116C319 88 263 43 200 48Z" fill="url(#pm-skull-floor)" stroke="#c1ad8d" stroke-width="1.1"/>
      <path d="M199 64v88m-7-76c-20-8-44 2-50 18-7 20 5 38 15 48m51-66c20-8 44 2 50 18 7 20-5 38-15 48M92 136c10 16 26 28 45 31m171-31c-10 16-26 28-45 31" class="anatomy-fine"/>
      <path d="M184 88c-5 15-5 40 0 57l15 13 17-13c5-17 5-42 0-57-6 3-10 8-16 8s-10-5-16-8Z" fill="#d3bda0" stroke="#b8a07e" stroke-width=".8"/>
      <path d="m197 87-2 58m9-58 2 58" class="anatomy-line"/>
      <path d="M188 150c-18-9-37-6-51 6-14 13-36 22-57 17 7 23 18 39 38 49l29-11 27-25 18-10m20-26c18-9 37-6 51 6 14 13 36 22 57 17-7 23-18 39-38 49l-29-11-27-25-18-10" fill="#d4c09e" stroke="#b19b78" stroke-width="1"/>
      <path d="m179 162-18 3-8 8 14 5 12-7Zm42 0 18 3 8 8-14 5-12-7Z" fill="#95866e"/>
      <path d="m149 178-18 10-5 9 16-4 13-10Zm102 0 18 10 5 9-16-4-13-10Z" fill="#ab9678"/>
      <path d="m187 177-4 19 9 16h16l9-16-4-19Z" fill="#c8b18e" stroke="#a98f6b"/>
      <path d="M190 182c4-4 16-4 20 0l-3 15h-14Z" fill="#eedfc6" stroke="#b69b75" stroke-width=".8"/>
      <path d="M89 214c21 0 48 8 72 25l26 17-4 16c-34-11-69-20-104-20m232-38c-21 0-48 8-72 25l-26 17 4 16c34-11 69-20 104-20" fill="#c9b18c" stroke="#ae9470" stroke-width="1.2"/>
      <path d="M89 217c21 2 46 9 69 25l25 17m128-42c-21 2-46 9-69 25l-25 17" fill="none" stroke="#faf0dd" stroke-width="3"/>
      <path d="M188 213c-4 15-4 32 0 42l12 15 12-15c4-10 4-27 0-42Z" fill="#e1cfb1" stroke="#bca17c"/>
      <path d="M200 274c-16 0-29 14-29 35 0 22 12 38 29 38s29-16 29-38c0-21-13-35-29-35Z" fill="#9e8a6e" stroke="#b69a73" stroke-width="2"/>
      <path d="M200 281c-12 0-23 12-23 29 0 17 10 30 23 30s23-13 23-30c0-17-11-29-23-29Z" fill="#c3af90"/>
      <g fill="#a69274" stroke="#f5e7d0" stroke-width="1">
        <ellipse cx="137" cy="211" rx="4" ry="5"/><ellipse cx="263" cy="211" rx="4" ry="5"/>
        <ellipse cx="123" cy="235" rx="7" ry="5" transform="rotate(-28 123 235)"/><ellipse cx="277" cy="235" rx="7" ry="5" transform="rotate(28 277 235)"/>
        <circle cx="105" cy="247" r="3"/><circle cx="295" cy="247" r="3"/>
        <ellipse cx="151" cy="255" rx="6" ry="4" transform="rotate(30 151 255)"/><ellipse cx="249" cy="255" rx="6" ry="4" transform="rotate(-30 249 255)"/>
        <path d="m136 276 11 1 7 8-9 6-11-5Zm128 0-11 1-7 8 9 6 11-5Z"/>
        <ellipse cx="174" cy="292" rx="4" ry="3"/><ellipse cx="226" cy="292" rx="4" ry="3"/>
      </g>
      <path d="m114 287 10 23 24 15m138-38-10 23-24 15m-137-1 18 23 23 9m116-32-18 23-23 9M91 190l13 16m-9 2 13 10m197-28-13 16m9 2-13 10M200 350v31m-4-30-6 21m14-21 6 21M101 326c15 28 44 40 82 38m116-38c-15 28-44 40-82 38" class="anatomy-fine"/>
      ${dots}
      <text x="200" y="24" text-anchor="middle" class="diagram-label">ANTERIOR</text>
      <text x="200" y="425" text-anchor="middle" class="diagram-label">SCHEMATISCHE INNENANSICHT</text>
    </svg>`;
  }

  window.PREP_DIAGRAMS = { body, thorax, skull };
})();
