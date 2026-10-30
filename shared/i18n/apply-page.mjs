import { getLang, tr } from '../lang.mjs';
import { CHROME_01, DIR_SWITCH_01, trWalkLabel02 } from './es-chrome.mjs';

/** @param {object} C chrome from dir-*.js */
export function applyChrome01(C, dir) {
  const o = CHROME_01[dir];
  if (!o) return;
  Object.assign(C, o);
}

export function paintChrome01Dom(C) {
  const $ = (id) => document.getElementById(id);
  if ($('brand')) $('brand').textContent = C.brand;
  if ($('brandSub')) $('brandSub').textContent = C.brandSub;
  if ($('nav')) $('nav').textContent = C.nav;
  if ($('cta')) $('cta').textContent = C.cta;
  if ($('kicker')) $('kicker').textContent = C.kicker;
  if ($('lede')) $('lede').textContent = C.lede;
  if ($('hint')) $('hint').textContent = C.hint;
  if ($('h1') && C.h1) {
    $('h1').innerHTML = C.h1.split('<br>').map((l) => `<span class="ln"><span>${l}</span></span>`).join('');
  }
  if ($('spec') && C.spec) {
    $('spec').innerHTML = C.spec.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join('');
  }
  if (C.title) document.title = C.title;
}

export function patchDirSwitch01() {
  document.querySelectorAll('#dirSwitch a').forEach((a) => {
    const d = a.dataset.dir;
    const pair = DIR_SWITCH_01[d];
    if (!pair) return;
    const b = a.querySelector('b');
    const s = a.querySelector('span');
    if (b) b.textContent = pair[0];
    if (s) s.textContent = pair[1];
  });
}

function setText(sel, text) {
  document.querySelectorAll(sel).forEach((el) => { el.textContent = text; });
}
function setHtml(sel, html) {
  document.querySelectorAll(sel).forEach((el) => { el.innerHTML = html; });
}

/** Static HTML patches per demo when lang=es. */
export function patchStaticPage(demoId) {
  if (getLang() !== 'es') return;

  if (demoId === '02') {
    setText('.cta', 'Empezar un proyecto');
    setHtml('.head', '<span class="ln"><span>La casa</span></span><span class="ln"><span><em>en sección.</em></span></span>');
    setText('.sub', 'Una casa en pendiente, abierta en A-A. Desplaza y entra a pie por el corte.');
    setText('.hint', 'Desplaza para abrir el objetivo');
    setHtml('.end h2', '<span class="ln"><span>Primero la dibujamos.</span></span><span class="ln"><span><em>Luego la construimos.</em></span></span>');
    setText('.end .sub2', 'Cota es un estudio pequeño para casas en terrenos difíciles. Cada proyecto empieza con una sección como esta.');
    setText('.end .btn', 'Empezar un proyecto');
    setText('#tb .t1', 'Sección A-A');
    setText('#tb .rows .scale', 'Escala 1:100');
    setText('#lcap div:first-child', 'Sección A-A');
    setText('#lcap div:last-child', 'Cargando ');
  }

  if (demoId === '03') {
    setText('.mark span', 'ARQUITECTOS · PALMA');
    setText('.dirs a[data-dir="a"] i', ' · Abrir el objetivo');
    setText('.dirs a[data-dir="c"] i', ' · Bajar la escalera');
    setHtml('.hero h1', '<span class="line"><span>El <em>corte</em> es</span></span><span class="line"><span>la casa.</span></span>');
    setText('.hero p.line span', 'Tres niveles en pendiente sobre el mar, unidos por una escalera. Entra en la sección.');
    setText('.hint', 'Desplaza para abrir el objetivo');
    setHtml('.cta p', 'Empieza por<br>una sección.');
    setText('header .btn', 'Empezar un proyecto');
    document.querySelectorAll('#cad-key .ck-nav button').forEach((btn, i) => {
      const names = ['Escalera', 'Cocina', 'Patio', 'Salón', 'Piscina'];
      if (names[i]) btn.innerHTML = `${String(i + 1).padStart(2, '0')}<br>${names[i]}`;
    });
  }

  if (demoId === '04') {
    setText('header .brand', 'Sequence');
    setText('header .cta', 'Reservar visita de obra');
    setHtml('h1.hero', '<span class="ln"><span>Treinta y ocho semanas,</span></span> <span class="ln"><span><em>un scroll.</em></span></span>');
    setText('#sheet .sub', 'Secuencia de obra // Residencia en ladera // Lámina A-901');
    setHtml('h1.close', '<span class="ln"><span>Tu casa,</span></span> <span class="ln"><span><em>semana a semana.</em></span></span>');
    setText('.sub2', 'Diseñamos y construimos viviendas en terrenos inclinados. Cada fase está calculada y programada antes de excavar.');
    setText('.bigcta', 'Reservar visita de obra');
    setHtml('#hint', '<i>&darr;</i>Desplaza para iniciar la obra');
  }

  if (demoId === '06') {
    setText('.top .brand', 'Atelier 1:100');
    setText('.top .cta', 'Empezar un proyecto');
    setHtml('.hero h1', '<span class="ln"><span>Empieza</span></span><span class="ln accent"><span>en el escritorio.</span></span>');
    setText('.hero .sub', 'Una casa en pendiente, recortada en cartulina a 1:100. Baja hasta la figura a escala.');
    setText('.hint b', 'Desplaza para encoger');
    setHtml('.drift', 'Un centímetro de cartulina <em>es un metro de casa.</em>');
    setHtml('.end h2', '<span class="ln"><span>Cada casa que hacemos</span></span><span class="ln accent"><span>empieza en este escritorio.</span></span>');
    setText('.end .lede', 'Envíanos el solar y lo que necesitas. Empezamos en cartulina, bajo una lámpara, y el modelo se queda en el escritorio hasta que la casa esté hecha.');
    setText('.end .btn', 'Empezar un proyecto');
    setText('.end .btn.ghost', 'Ver las casas');
  }

  if (demoId === '07a') {
    setText('.loader p.soft', 'Trazando alzado frontal 1:50 ');
    setText('.pill', 'Reservar visita');
    setHtml('.hero h1', '<span class="mask"><span>Seis metros de calle.</span></span><span class="mask"><span>Una <em>puerta.</em></span></span>');
    setText('.hint', 'Desplaza ');
  }
  if (demoId === '07b') {
    setHtml('.hero h1', '<span class="mask"><span>Seis portales.</span></span><span class="mask"><span>Dos aún <em>abiertas.</em></span></span>');
  }
  if (demoId === '07c') {
    setHtml('.hero h1', '<span class="mask"><span>La sombra</span></span><span class="mask"><span>es el <em>producto.</em></span></span>');
  }
}

/** Translate 02 walk key labels after walkKeys() built. */
export function translateWalkKeys02(WK) {
  if (getLang() !== 'es') return;
  WK.forEach((k) => {
    if (k.label) k.label = trWalkLabel02(k.label);
  });
}

/** Programme rows for demo 04 (classic script). */
export function programmeEs() {
  return {
    PROG: [
      ['Excavación', 0, 3], ['Cimentación', 3, 6], ['Planta inferior', 6, 9], ['Losas', 9, 11],
      ['Muros, entrepiso', 11, 16], ['Cubierta', 16, 21], ['Acristalamiento', 21, 25], ['Acabados, jardín', 25, 38],
    ],
    TILES: [
      { n: '01', name: 'Excavación, cimentación', w0: 0, w1: 6 },
      { n: '02', name: 'Planta inferior', w0: 6, w1: 9 },
      { n: '03', name: 'Losas', w0: 9, w1: 11 },
      { n: '04', name: 'Muros, entrepiso', w0: 11, w1: 16 },
      { n: '05', name: 'Cubierta', w0: 16, w1: 21 },
      { n: '06', name: 'Cristales, acabados', w0: 21, w1: 38 },
    ],
    foot: 'A-901 &nbsp;//&nbsp; Programa &nbsp;//&nbsp; 38 semanas',
  };
}

export { tr };
