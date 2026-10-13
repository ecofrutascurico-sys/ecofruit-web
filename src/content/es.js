// Todos los textos del sitio en español.
// Para cambiar un texto, edítalo aquí. La versión en inglés está en en.js (mismo orden).
// Fotos: deja el archivo en /public/img y escribe su nombre en "image", por ejemplo image: '/img/cereza.jpg'

export default {
  nav: { inicio: 'Inicio', quienes: 'Quiénes somos', que: 'Qué hacemos', contacto: 'Contacto' },

  hero: {
    kicker: 'Región del Maule · Chile',
    title: 'La fruta que mueve',
    titleAccent: 'la industria',
    text: 'Abastecemos de fruta chilena a mayoristas, agroindustrias, casinos e instituciones del Estado. Fruta para jugo, congelado, sulfitado y food service.',
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
      'EcoFruit nace en la Región del Maule con la misión de acercar fruta de calidad del campo chileno a quienes la transforman y a quienes la sirven todos los días. Trabajamos directo con productores locales, apoyamos a pequeños agricultores y cuidamos que cada proceso sea responsable.',
      'Participamos en ferias internacionales del sector, como Fruit Attraction São Paulo.',
    ],
    stats: [
      { value: '+10', label: 'Frutas que trabajamos' },
      { value: '4', label: 'Tipos de cliente' },
      { value: '4', label: 'Líneas de abastecimiento' },
      { value: 'Maule', label: 'Origen de nuestra fruta' },
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
      { key: 'citricos', name: 'Cítricos', text: 'Limón, naranja y mandarina', uses: ['Jugo', 'Congelado', 'Cáscara'], image: '' },
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
      { title: 'Sulfitado', text: 'Fruta según el calibre y estado que pide cada planta.', fruits: 'Cereza' },
      { title: 'Cáscara de naranja', text: 'Para uso industrial, con retiro y despacho coordinado.', fruits: 'Limón · Naranja · Mandarina' },
    ],
    clients: [
      { key: 'may', kicker: 'Mayoristas', title: 'Distribución mayorista', text: 'Volumen constante y despacho programado para distribuidores.' },
      { key: 'agro', kicker: 'Agroindustria', title: 'Plantas de proceso', text: 'Materia prima para jugo, congelado y sulfitado según especificación.' },
      { key: 'cas', kicker: 'Casinos', title: 'Alimentación colectiva', text: 'Fruta fresca y congelada para empresas de servicios de alimentación.' },
      { key: 'est', kicker: 'Instituciones del Estado', title: 'Compras públicas', text: 'Abastecimiento para instituciones y programas estatales.' },
    ],
  },

  band: { title: 'Lo mejor del campo chileno para su operación', cta: 'Solicitar cotización' },

  contact: {
    kicker: 'Contacto',
    title: 'Hablemos',
    text: 'Cuéntenos qué especie, volumen y fechas necesita. Respondemos con disponibilidad y precio referencial.',
    phoneLabel: 'Teléfono / WhatsApp',
    emailLabel: 'Correo',
    placeLabel: 'Ubicación',
    form: {
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo',
      phone: 'Teléfono',
      type: 'Tipo de cliente',
      types: ['Mayorista', 'Planta de jugos', 'Planta de congelado', 'Planta de sulfitado', 'Cáscara de naranja', 'Casino / food service', 'Institución del Estado', 'Otro'],
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
