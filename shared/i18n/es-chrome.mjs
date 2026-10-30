/** Spanish UI copy for demo chrome objects (01-exploded-house dir modules). */

export const CHROME_01 = {
  a: {
    title: 'A · La lámina',
    brand: 'Purlin',
    brandSub: 'Casas de madera',
    nav: 'Casas     Taller     Diario',
    cta: 'Empezar una casa',
    kicker: 'Axonométrica · Lámina A-04 · 1:100',
    loader: 'Trazando lámina A-04',
    h1: 'Cómo se<br><em>ensambla</em> una casa.',
    lede: 'Seis capas, hechas en nuestro taller y cerradas en obra en nueve días. Desplaza para ensamblar la casa y entra por la Long Room hasta el desván de roble.',
    spec: [['Casa', 'The Long Room'], ['Superficie', '96 m² + desván'], ['Estructura', 'CLT, alerce, zinc']],
    hint: 'Desplaza para construirla',
  },
  b: {
    title: 'B · La habitación desplegada',
    brand: 'Field',
    brandSub: 'Interiores y carpintería',
    nav: 'Estancias     Carpintería     Estudio',
    cta: 'Reservar visita',
    kicker: 'Alzados desarrollados · Lámina I-02',
    loader: 'Dibujando lámina I-02',
    h1: 'Dibujamos las seis<br>caras de una <em>habitación.</em>',
    lede: 'Suelo, cuatro paredes y techo, desplegados como los dibujamos. Desplaza y la cocina se pliega sola; luego entra.',
    spec: [['Estancia', 'Cocina y comedor'], ['Tamaño', '6,0 × 4,8 m'], ['Altura', '2,90 m']],
    hint: 'Desplaza para plegarla',
  },
  c: {
    title: 'C · Planta a planta',
    brand: 'Storey',
    brandSub: 'Edificios de madera',
    nav: 'Proyectos     Ingeniería     Contacto',
    cta: 'Hablemos',
    kicker: 'Axonométrica exploded · 1:500',
    loader: 'Trazando lámina S-500',
    h1: 'Cuatro plantas de madera.<br><em>Una por semana.</em>',
    lede: 'Planta baja de hormigón y cuatro de madera laminada cruzada sobre pilares de glulam. Desplaza para apilarlas y quédate en la planta 3 mientras baja la 4.',
    spec: [['Edificio', 'Kerbside House'], ['Plantas', '5 + cubierta'], ['Superficie', '1.920 m²']],
    hint: 'Desplaza para apilarla',
  },
};

export const DIR_SWITCH_01 = {
  a: ['01', 'LA LÁMINA'],
  b: ['02', 'HABITACIÓN DESPL'],
  c: ['03', 'PLANTA A PLANTA'],
};

/** @param {[string, string, string] | null} label */
export function trWalkLabel02(label) {
  if (!label) return label;
  const key = label[1];
  const map = {
    'Through the cut': ['±0.00', 'A través del corte', 'Sección A-A, abierta a altura de ojos'],
    'The living room': ['±0.00', 'El salón', '6,40 m de altura, sol bajo de diciembre'],
    'The study': ['+3.20', 'El estudio', 'Libros al norte, luz desde arriba'],
    'The upper lounge': ['+3.20', 'La sala alta', 'Estudio soleado sobre el salón'],
    'Over the living room': ['+3.20', 'Sobre el salón', 'Desde el borde del entrepiso'],
    'The snug': ['-3.20', 'El rincón', 'Chimenea bajo el salón'],
    'The bedroom': ['-3.20', 'El dormitorio', 'Dormir sobre el jardín'],
    'The lower garden': ['-3.20', 'El jardín inferior', 'La casa desde abajo'],
    'Back through the cut': ['±0.00', 'De vuelta al corte', 'La casa se abre otra vez en A-A'],
  };
  return map[key] ?? label;
}
