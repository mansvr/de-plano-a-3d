/** @typedef {'en' | 'es'} Lang */

/** @returns {Lang} */
export function getLang() {
  const q = new URLSearchParams(location.search);
  if (q.get('lang') === 'es') return 'es';
  try {
    if (window.parent !== window && window.parent.location.pathname.includes('/v2')) return 'es';
  } catch {
    /* cross-origin iframe */
  }
  return 'en';
}

/** @param {string | null | undefined} text */
export function tr(text) {
  if (!text || getLang() !== 'es') return text;
  return HINT_MAP[text] ?? text;
}

/** Preserve lang=es on in-demo query links (?dir=a, etc.). */
export function patchQueryLinks() {
  if (getLang() !== 'es') return;
  document.querySelectorAll('a[href^="?"]').forEach((a) => {
    const u = new URL(a.getAttribute('href'), location.href);
    u.searchParams.set('lang', 'es');
    a.setAttribute('href', u.pathname + u.search);
  });
}

/** @param {string} path relative to site root, e.g. 01-exploded-house/index.html?dir=a */
export function withLang(path) {
  const u = new URL(path, location.origin + '/');
  if (getLang() === 'es') u.searchParams.set('lang', 'es');
  const rel = path.split('?')[0];
  const qs = u.searchParams.toString();
  return rel.replace(/^\//, '') + (qs ? `?${qs}` : '');
}

/** @type {Record<string, string>} */
export const HINT_MAP = {
  'Scroll to build it': 'Desplaza para construirla',
  'Scroll to walk inside': 'Desplaza para entrar',
  'Scroll through the house': 'Desplaza para recorrer la casa',
  'Scroll to fold it up': 'Desplaza para plegarla',
  'Scroll to go in': 'Desplaza para entrar',
  'Scroll to stack it': 'Desplaza para apilarla',
  'Scroll to bring level 4 down': 'Desplaza para bajar la planta 4',
  'Scroll across the studio floor': 'Desplaza por el estudio',
  'Scroll to open the lens': 'Desplaza para abrir el objetivo',
  'Scroll to shrink': 'Desplaza para encoger',
  'Scroll to walk in': 'Desplaza para entrar a pie',
  'Scroll to break ground': 'Desplaza para iniciar la obra',
  'Scroll': 'Desplaza',
  'Section perspective': 'Sección en perspectiva',
  'Section A-A': 'Sección A-A',
  'Not to scale': 'Sin escala',
  'Scale 1:100': 'Escala 1:100',
  'Every bar is a part of the house. Scroll or drag the schedule to build it.': 'Cada barra es una parte de la casa. Desplaza o arrastra el programa para construirla.',
};
