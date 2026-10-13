// Todos los textos del sitio en español.
// Para cambiar un texto, edítalo aquí. La versión en inglés está en en.js (mismo orden).
// Fotos: deja el archivo en /public/img y escribe su nombre en "image", por ejemplo image: '/img/cereza.jpg'

export default {
  nav: { inicio: 'Inicio', nosotros: 'Nosotros', que: 'Qué hacemos', contacto: 'Contacto' },

  hero: {
    kicker: 'Región del Maule · Chile',
    title: 'La fruta que mueve',
    titleAccent: 'la industria',
    text: 'Abastecemos de fruta chilena a mayoristas, agroindustrias, casinos e instituciones del Estado. Fruta para jugo, congelado, sulfitado, confitado y food service.',
    cta1: 'Conoce lo que hacemos',
    cta2: 'Cotizar',
    scroll: 'Desliza',
    image: '', // ej: '/img/hero.jpg'
  },

  chain: {
    kicker: 'Lo que ofrecemos',
    title: 'Del huerto a su planta',
    text: 'Coordinamos cada etapa para que la fruta llegue con la calidad, el volumen y en la fecha que su operación necesita.',
    steps: [
      { title: 'Productores', text: 'Fruta de huertos de la zona central.' },
      { title: 'Selección', text: 'Según la especificación de cada cliente.' },
      { title: 'Proceso', text: 'Proceso de la fruta según los requerimientos de cada cliente.' },
      { title: 'Logística', text: 'Despacho programado con documentación al día.' },
      { title: 'Su empresa', text: 'Mayoristas, agroindustria, casinos e instituciones.' },
    ],
  },

  about: {
    kicker: 'Quiénes somos',
    title: 'Una empresa del Maule que conecta el campo con la industria',
    paragraphs: [
      'Con más de 7 años de experiencia, EcoFruit nace en la Región del Maule con la misión de acercar fruta de calidad del campo chileno a quienes la transforman y a quienes la sirven todos los días. Trabajamos directo con productores locales, apoyamos a pequeños agricultores y cuidamos que cada proceso sea responsable.',
    ],
    more: 'Conoce nuestra misión, visión y valores',
    stats: [
      { value: '+10', label: 'Frutas que trabajamos' },
      { value: '4', label: 'Tipos de cliente' },
      { value: '4', label: 'Líneas de abastecimiento' },
      { value: '+7', label: 'Años de experiencia' },
    ],
  },

  products: {
    kicker: 'Qué hacemos',
    title: 'Nuestros productos',
    text: 'Trabajamos todas las frutas. Estas son las principales y su destino.',
    badge: 'Nuestro fuerte',
    more: '¿Busca otra fruta? Trabajamos todas las especies, consúltenos.',
    items: [
      { key: 'cereza', name: 'Cereza', text: 'Nuestra especie principal, con volumen durante toda la temporada.', uses: ['Sulfitado', 'Congelado', 'Jugo'], featured: true, image: '' },
      { key: 'citricos', name: 'Cítricos', text: 'Limón, naranja y mandarina', uses: ['Jugo', 'Congelado', 'Sulfitado', 'Confitado'], image: '' },
      { key: 'uva', name: 'Uva', uses: ['Jugo', 'Congelado'], image: '' },
      { key: 'berries', name: 'Berries', uses: ['Congelado'], image: '' },
      { key: 'kiwi', name: 'Kiwi', uses: ['Congelado', 'Food service'], image: '' },
      { key: 'manzana', name: 'Manzana', uses: ['Jugo', 'Proceso', 'Casinos'], image: '' },
      { key: 'pera', name: 'Pera', uses: ['Jugo', 'Proceso', 'Casinos'], image: '' },
    ],
  },

  lines: {
    kicker: 'Líneas de abastecimiento',
    title: 'Fruta según su destino',
    items: [
      { title: 'Jugo', text: 'Fruta de proceso para plantas de jugo y concentrado.', fruits: 'Cítricos · Uva · Cereza · Manzana · Pera' },
      { title: 'Congelado', text: 'Materia prima para líneas IQF y congelado para food service.', fruits: 'Cereza · Cítricos · Uva · Berries · Kiwi' },
      { title: 'Sulfitado y confitado', text: 'Fruta según el calibre y estado que pide cada planta.', fruits: 'Cereza · Naranja · Limón · Mandarina' },
      { title: 'Otros', text: 'Cáscara de naranja y otros productos según el requerimiento de cada cliente.', fruits: 'Consúltenos' },
    ],
    clients: [
      { key: 'may', kicker: 'Mayoristas', title: 'Distribución mayorista', text: 'Volumen constante y despacho programado para distribuidores.' },
      { key: 'agro', kicker: 'Agroindustria', title: 'Plantas de proceso', text: 'Materia prima para jugo, congelado, sulfitado y confitado según especificación.' },
      { key: 'cas', kicker: 'Casinos', title: 'Alimentación colectiva', text: 'Fruta fresca y congelada para empresas de servicios de alimentación.' },
      { key: 'est', kicker: 'Instituciones del Estado', title: 'Compras públicas', text: 'Abastecimiento para instituciones y programas estatales.' },
    ],
  },

  // Página "Nosotros" (ecofruit.cl/nosotros)
  nosotros: {
    kicker: 'Nosotros',
    title: 'Más de 7 años conectando el campo chileno con la industria',
    intro: 'EcoFruit es una empresa de la Región del Maule que abastece de fruta a mayoristas, agroindustrias, casinos e instituciones del Estado. Trabajamos directo con productores locales y coordinamos cada etapa, desde el huerto hasta la planta o bodega de nuestros clientes.',
    missionTitle: 'Nuestra misión',
    mission: 'Abastecer fruta de calidad del campo chileno a la agroindustria, la alimentación colectiva y el comercio mayorista, conectando a productores locales con nuestros clientes mediante procesos eficientes, trazabilidad, cumplimiento de estándares y relaciones comerciales de largo plazo.',
    visionTitle: 'Nuestra visión',
    vision: 'Ser un proveedor de fruta referente en Chile, reconocido por su confiabilidad, su conocimiento del rubro y su capacidad de adaptarse a las necesidades de cada cliente industrial, institucional y comercial.',
    valuesTitle: 'Nuestros valores',
    valuesText: 'Los principios que definen nuestra forma de trabajar',
    values: [
      { title: 'Calidad', text: 'Trabajamos bajo estándares exigentes que aseguran el cumplimiento técnico y sanitario que pide cada cliente.' },
      { title: 'Confiabilidad', text: 'Cumplimos lo que comprometemos, priorizando relaciones comerciales basadas en la transparencia y la continuidad.' },
      { title: 'Compromiso', text: 'Nos involucramos activamente en cada etapa del proceso, desde el origen hasta la entrega final.' },
      { title: 'Cercanía con el productor', text: 'Trabajamos directo con agricultores de la zona central y apoyamos a los pequeños productores.' },
    ],
    cta: 'Solicitar cotización',
    back: 'Volver al inicio',
  },

  band: { title: 'Lo mejor del campo chileno para su operación', cta: 'Solicitar cotización' },

  contact: {
    kicker: 'Contacto',
    title: 'Hablemos',
    text: 'Cuéntenos qué especie, volumen y fechas necesita. Respondemos con disponibilidad y precio referencial.',
    phoneLabel: 'Teléfono / WhatsApp',
    emailLabel: 'Correo',
    placeLabel: 'Ubicación',
    mapLink: 'Ver en Google Maps',
    form: {
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo',
      phone: 'Teléfono',
      type: 'Tipo de cliente',
      types: ['Mayorista', 'Planta de jugos', 'Planta de congelado', 'Planta de sulfitado / confitado', 'Cáscara de naranja', 'Casino / food service', 'Institución del Estado', 'Otro'],
      message: 'Especie, volumen y fechas',
      placeholder: 'Ej: 30 toneladas de cereza para sulfitado, entrega en planta, diciembre y enero',
      submit: 'Enviar solicitud',
      sending: 'Enviando...',
      ok: 'Recibimos su solicitud. Le responderemos a la brevedad.',
      error: 'No se pudo enviar. Escríbanos a jtoha@ecofruit.cl o al +56 9 9412 9056.',
    },
  },

  footer: {
    tagline: 'Fruta chilena para mayoristas, agroindustria, casinos e instituciones.',
    contact: 'Contacto',
    place: 'Ubicación',
  },
}
