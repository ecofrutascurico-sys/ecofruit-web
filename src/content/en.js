// All site copy in English. Keep the same structure and order as es.js.

export default {
  nav: { inicio: 'Home', nosotros: 'About us', que: 'What we do', contacto: 'Contact' },

  hero: {
    kicker: 'Maule Region · Chile',
    title: 'The fruit that moves',
    titleAccent: 'the industry',
    text: 'We supply Chilean fruit to wholesalers, agro-industry, catering companies and public institutions. Fruit for juice, frozen, sulphited, candied and food service.',
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
      'With more than 7 years of experience, EcoFruit was born in the Maule Region with one mission: bringing quality fruit from the Chilean countryside to those who process it and those who serve it every day. We work directly with local growers, support small farmers and make sure every process is responsible.',
    ],
    more: 'Our mission, vision and values',
    stats: [
      { value: '10+', label: 'Fruits we handle' },
      { value: '4', label: 'Customer types' },
      { value: '4', label: 'Supply lines' },
      { value: '7+', label: 'Years of experience' },
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
      { key: 'citricos', name: 'Citrus', text: 'Lemon, orange and mandarin', uses: ['Juice', 'Frozen', 'Sulphited', 'Candied'], image: '' },
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
      { title: 'Sulphited and candied', text: 'Fruit sized and graded to each plant’s requirements.', fruits: 'Cherry · Orange · Lemon · Mandarin' },
      { title: 'Other', text: 'Orange peel and other products to each customer’s requirements.', fruits: 'Ask us' },
    ],
    clients: [
      { key: 'may', kicker: 'Wholesalers', title: 'Wholesale distribution', text: 'Supermarkets, produce markets and distributors, with steady volume and scheduled dispatch.' },
      { key: 'agro', kicker: 'Agro-industry', title: 'Processing plants', text: 'Raw material for juice, frozen, sulphited and candied products to specification.' },
      { key: 'cas', kicker: 'Catering', title: 'Institutional catering', text: 'Fresh and frozen fruit for food service companies.' },
      { key: 'est', kicker: 'Public institutions', title: 'Public procurement', text: 'Supply for public institutions and government programs.' },
    ],
  },

  nosotros: {
    kicker: 'About us',
    title: 'Over 7 years connecting the Chilean countryside with the industry',
    intro: 'EcoFruit is a company from the Maule Region that supplies fruit to wholesalers, agro-industry, catering companies and public institutions. We work directly with local growers and coordinate every step, from the orchard to our customers’ plants and warehouses.',
    missionTitle: 'Our mission',
    mission: 'To supply quality fruit from the Chilean countryside to agro-industry, institutional catering and wholesale trade, connecting local growers with our customers through efficient processes, traceability, compliance with standards and long-term business relationships.',
    visionTitle: 'Our vision',
    vision: 'To be a leading fruit supplier in Chile, recognized for our reliability, industry knowledge and ability to adapt to the needs of each industrial, institutional and commercial customer.',
    valuesTitle: 'Our values',
    valuesText: 'The principles that define how we work',
    values: [
      { title: 'Quality', text: 'We work to demanding standards that meet the technical and sanitary requirements of each customer.' },
      { title: 'Reliability', text: 'We deliver on our commitments, building business relationships based on transparency and continuity.' },
      { title: 'Commitment', text: 'We are actively involved in every step of the process, from origin to final delivery.' },
      { title: 'Close to growers', text: 'We work directly with farmers in central Chile and support small growers.' },
    ],
    cta: 'Request a quote',
    back: 'Back to home',
  },

  band: { title: 'The best of the Chilean countryside for your operation', cta: 'Request a quote' },

  contact: {
    kicker: 'Contact',
    title: 'Let’s talk',
    text: 'Tell us the fruit, volume and dates you need. We reply with availability and a reference price.',
    phoneLabel: 'Phone / WhatsApp',
    emailLabel: 'Email',
    placeLabel: 'Location',
    mapLink: 'Open in Google Maps',
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      type: 'Customer type',
      types: ['Wholesaler / supermarket / market', 'Juice plant', 'Frozen fruit plant', 'Sulphiting / candying plant', 'Orange peel', 'Catering / food service', 'Public institution', 'Other'],
      message: 'Fruit, volume and dates',
      placeholder: 'E.g. 30 tonnes of cherries for sulphiting, delivered to plant, December and January',
      submit: 'Send request',
      sending: 'Sending...',
      ok: 'We received your request. We will get back to you shortly.',
      error: 'It could not be sent. Write to jtoha@ecofruit.cl or call +56 9 8758 8459.',
    },
  },

  footer: {
    tagline: 'Chilean fruit for wholesalers, agro-industry, catering and institutions.',
    contact: 'Contact',
    place: 'Location',
  },
}
