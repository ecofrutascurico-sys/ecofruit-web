// All site copy in English. Keep the same structure and order as es.js.

export default {
  nav: { inicio: 'Home', quienes: 'About us', que: 'What we do', contacto: 'Contact' },

  hero: {
    kicker: 'Maule Region · Chile',
    title: 'The fruit that moves',
    titleAccent: 'the industry',
    text: 'We supply Chilean fruit to wholesalers, agro-industry, catering companies and public institutions. Fruit for juice, frozen, sulphited and food service.',
    cta1: 'See what we do',
    cta2: 'Get a quote',
    scroll: 'Scroll',
    image: '',
  },

  chain: {
    kicker: 'What we offer',
    title: 'From the orchard to your plant',
    text: 'We coordinate every step so the fruit arrives with the quality, volume and timing your operation needs.',
    steps: [
      { title: 'Growers', text: 'Fruit from orchards in central Chile.' },
      { title: 'Selection', text: 'Based on each customer’s specification.' },
      { title: 'Processing', text: 'Fruit processed to each customer’s requirements.' },
      { title: 'Logistics', text: 'Scheduled dispatch with full documentation.' },
      { title: 'Your company', text: 'Wholesalers, agro-industry, catering and institutions.' },
    ],
  },

  about: {
    kicker: 'About us',
    title: 'A Maule company connecting the field with the industry',
    paragraphs: [
      'EcoFruit was born in the Maule Region with one mission: bringing quality fruit from the Chilean countryside to those who process it and those who serve it every day. We work directly with local growers, support small farmers and make sure every process is responsible.',
      'We take part in international industry fairs such as Fruit Attraction São Paulo.',
    ],
    stats: [
      { value: '10+', label: 'Fruits we handle' },
      { value: '4', label: 'Customer types' },
      { value: '4', label: 'Supply lines' },
      { value: 'Maule', label: 'Where our fruit comes from' },
    ],
  },

  products: {
    kicker: 'What we do',
    title: 'Our products',
    text: 'We handle every kind of fruit. These are the main ones and their uses.',
    badge: 'Our specialty',
    more: 'Looking for another fruit? We work with every species, just ask.',
    items: [
      { key: 'cereza', name: 'Cherry', text: 'Our main species, with volume throughout the season.', uses: ['Sulphited', 'Frozen', 'Juice'], featured: true, image: '' },
      { key: 'citricos', name: 'Citrus', text: 'Lemon, orange and mandarin', uses: ['Juice', 'Frozen', 'Peel'], image: '' },
      { key: 'uva', name: 'Grape', uses: ['Juice', 'Frozen'], image: '' },
      { key: 'berries', name: 'Berries', uses: ['Frozen'], image: '' },
      { key: 'kiwi', name: 'Kiwi', uses: ['Frozen', 'Food service'], image: '' },
      { key: 'manzana', name: 'Apple', uses: ['Juice', 'Processing', 'Catering'], image: '' },
      { key: 'pera', name: 'Pear', uses: ['Juice', 'Processing', 'Catering'], image: '' },
    ],
  },

  lines: {
    kicker: 'Supply lines',
    title: 'Fruit by end use',
    items: [
      { title: 'Juice', text: 'Processing fruit for juice and concentrate plants.', fruits: 'Citrus · Grape · Cherry · Apple · Pear' },
      { title: 'Frozen', text: 'Raw material for IQF lines and frozen fruit for food service.', fruits: 'Cherry · Citrus · Grape · Berries · Kiwi' },
      { title: 'Sulphited', text: 'Fruit sized and graded to each plant’s requirements.', fruits: 'Cherry' },
      { title: 'Orange peel', text: 'For industrial use, with coordinated pickup and delivery.', fruits: 'Lemon · Orange · Mandarin' },
    ],
    clients: [
      { key: 'may', kicker: 'Wholesalers', title: 'Wholesale distribution', text: 'Steady volume and scheduled dispatch for distributors.' },
      { key: 'agro', kicker: 'Agro-industry', title: 'Processing plants', text: 'Raw material for juice, frozen and sulphited products to specification.' },
      { key: 'cas', kicker: 'Catering', title: 'Institutional catering', text: 'Fresh and frozen fruit for food service companies.' },
      { key: 'est', kicker: 'Public institutions', title: 'Public procurement', text: 'Supply for public institutions and government programs.' },
    ],
  },

  band: { title: 'The best of the Chilean countryside for your operation', cta: 'Request a quote' },

  contact: {
    kicker: 'Contact',
    title: 'Let’s talk',
    text: 'Tell us the fruit, volume and dates you need. We reply with availability and a reference price.',
    phoneLabel: 'Phone / WhatsApp',
    emailLabel: 'Email',
    placeLabel: 'Location',
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      type: 'Customer type',
      types: ['Wholesaler', 'Juice plant', 'Frozen fruit plant', 'Sulphiting plant', 'Orange peel', 'Catering / food service', 'Public institution', 'Other'],
      message: 'Fruit, volume and dates',
      placeholder: 'E.g. 30 tonnes of cherries for sulphiting, delivered to plant, December and January',
      submit: 'Send request',
      sending: 'Sending...',
      ok: 'We received your request. We will get back to you shortly.',
      error: 'It could not be sent. Write to jtoha@ecofruit.cl or call +56 9 9412 9056.',
    },
  },

  footer: {
    tagline: 'Chilean fruit for wholesalers, agro-industry, catering and institutions.',
    contact: 'Contact',
    place: 'Location',
  },
}
