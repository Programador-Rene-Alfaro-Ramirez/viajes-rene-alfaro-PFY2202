export const agenciaInfo = {
  nombre: 'TWA a la Chilena',
  slogan: 'Vuelos y estadías desde Santiago al mundo, sin letra chica.',
  moneda: 'CLP',
};

export const destinos = [
  {
    id: 'tokio',
    ciudad: 'Tokio',
    pais: 'Japón',
    region: 'Asia',
    descripcion: 'Metrópoli futurista que mezcla templos milenarios, barrios iluminados y gastronomía increíble.',
    imagen: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80',
    actividadesPopulares: [
      'Cruce de Shibuya y recorrido por Harajuku',
      'Visita al templo Senso-ji en Asakusa',
      'Ruta gastronómica nocturna por Shinjuku',
    ],
  },
  {
    id: 'paris',
    ciudad: 'París',
    pais: 'Francia',
    region: 'Europa',
    descripcion: 'Arte, historia y arquitectura icónica en cada esquina, ideal para caminar junto al Sena.',
    imagen: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80',
    actividadesPopulares: [
      'Mirador de la Torre Eiffel',
      'Recorrido por el Museo del Louvre',
      'Crucero al atardecer por el río Sena',
    ],
  },
  {
    id: 'rio',
    ciudad: 'Río de Janeiro',
    pais: 'Brasil',
    region: 'Sudamérica',
    descripcion: 'Playas legendarias, música en vivo y vistas panorámicas únicas entre el mar y los morros.',
    imagen: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=80',
    actividadesPopulares: [
      'Subida al Cristo Redentor en el Corcovado',
      'Teleférico al Pan de Azúcar',
      'Tarde en las playas de Copacabana e Ipanema',
    ],
  },
  {
    id: 'nueva-york',
    ciudad: 'Nueva York',
    pais: 'Estados Unidos',
    region: 'Norteamérica',
    descripcion: 'Rascacielos emblemáticos, musicales de Broadway, museos de clase mundial y parques icónicos.',
    imagen: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=900&q=80',
    actividadesPopulares: [
      'Caminata por Central Park',
      'Mirador del Empire State Building',
      'Espectáculo en Broadway y paseo por Times Square',
    ],
  },
  {
    id: 'barcelona',
    ciudad: 'Barcelona',
    pais: 'España',
    region: 'Europa',
    descripcion: 'Arquitectura modernista de Gaudí, playas mediterráneas y una escena culinaria imperdible.',
    imagen: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=900&q=80',
    actividadesPopulares: [
      'Visita a la Basílica de la Sagrada Familia',
      'Recorrido por el Park Güell',
      'Paseo por el Barrio Gótico y La Barceloneta',
    ],
  },
  {
    id: 'san-pedro',
    ciudad: 'San Pedro de Atacama',
    pais: 'Chile',
    region: 'Sudamérica',
    descripcion: 'El desierto más árido del mundo: cielos estrellados, géiseres, salares y paisajes de otro planeta.',
    imagen: './san-pedro.jpg',
    actividadesPopulares: [
      'Atardecer en el Valle de la Luna',
      'Excursión a los Géiseres del Tatio',
      'Tour astronómico nocturno en el desierto',
    ],
  },
];

export const vuelosPorDestino = {
  tokio: [
    { id: 'v-tk-1', aerolinea: 'LATAM / Japan Airlines', origen: 'Santiago (SCL)', fechaSalida: '2027-03-10', fechaRegreso: '2027-03-22', precio: 1390000, disponible: true, escalas: '1 escala' },
    { id: 'v-tk-2', aerolinea: 'ANA Airways', origen: 'Santiago (SCL)', fechaSalida: '2027-04-05', fechaRegreso: '2027-04-18', precio: 1260000, disponible: true, escalas: '1 escala' },
    { id: 'v-tk-3', aerolinea: 'United Airlines', origen: 'Santiago (SCL)', fechaSalida: '2027-05-01', fechaRegreso: '2027-05-14', precio: 1180000, disponible: false, escalas: '2 escalas' },
  ],
  paris: [
    { id: 'v-pa-1', aerolinea: 'Air France', origen: 'Santiago (SCL)', fechaSalida: '2027-03-15', fechaRegreso: '2027-03-25', precio: 1050000, disponible: true, escalas: 'Directo' },
    { id: 'v-pa-2', aerolinea: 'Iberia', origen: 'Santiago (SCL)', fechaSalida: '2027-04-10', fechaRegreso: '2027-04-20', precio: 920000, disponible: true, escalas: '1 escala' },
    { id: 'v-pa-3', aerolinea: 'KLM', origen: 'Santiago (SCL)', fechaSalida: '2027-05-06', fechaRegreso: '2027-05-16', precio: 985000, disponible: false, escalas: '1 escala' },
  ],
  rio: [
    { id: 'v-rj-1', aerolinea: 'SKY Airline', origen: 'Santiago (SCL)', fechaSalida: '2027-02-12', fechaRegreso: '2027-02-19', precio: 295000, disponible: true, escalas: 'Directo' },
    { id: 'v-rj-2', aerolinea: 'JetSMART', origen: 'Santiago (SCL)', fechaSalida: '2027-02-20', fechaRegreso: '2027-02-27', precio: 270000, disponible: true, escalas: 'Directo' },
    { id: 'v-rj-3', aerolinea: 'LATAM', origen: 'Santiago (SCL)', fechaSalida: '2027-03-02', fechaRegreso: '2027-03-09', precio: 360000, disponible: false, escalas: 'Directo' },
  ],
  'nueva-york': [
    { id: 'v-ny-1', aerolinea: 'Delta Air Lines', origen: 'Santiago (SCL)', fechaSalida: '2027-03-18', fechaRegreso: '2027-03-27', precio: 840000, disponible: true, escalas: 'Directo' },
    { id: 'v-ny-2', aerolinea: 'American Airlines', origen: 'Santiago (SCL)', fechaSalida: '2027-04-08', fechaRegreso: '2027-04-16', precio: 765000, disponible: true, escalas: '1 escala' },
  ],
  barcelona: [
    { id: 'v-bc-1', aerolinea: 'LEVEL', origen: 'Santiago (SCL)', fechaSalida: '2027-04-02', fechaRegreso: '2027-04-14', precio: 870000, disponible: true, escalas: 'Directo' },
    { id: 'v-bc-2', aerolinea: 'Iberia', origen: 'Santiago (SCL)', fechaSalida: '2027-05-11', fechaRegreso: '2027-05-23', precio: 930000, disponible: true, escalas: '1 escala' },
  ],
  'san-pedro': [
    { id: 'v-sp-1', aerolinea: 'SKY Airline (vía Calama)', origen: 'Santiago (SCL)', fechaSalida: '2027-03-05', fechaRegreso: '2027-03-10', precio: 115000, disponible: true, escalas: 'Directo a CJC' },
    { id: 'v-sp-2', aerolinea: 'LATAM (vía Calama)', origen: 'Santiago (SCL)', fechaSalida: '2027-04-14', fechaRegreso: '2027-04-19', precio: 138000, disponible: true, escalas: 'Directo a CJC' },
    { id: 'v-sp-3', aerolinea: 'JetSMART (vía Calama)', origen: 'Santiago (SCL)', fechaSalida: '2027-05-08', fechaRegreso: '2027-05-13', precio: 98000, disponible: false, escalas: 'Directo a CJC' },
  ],
};

export const hotelesPorDestino = {
  tokio: [
    { id: 'h-tk-1', nombre: 'Shinjuku Granbell Hotel', estrellas: 4, fechaCheckIn: '2027-03-11', fechaCheckOut: '2027-03-21', precioNoche: 135000, disponible: true, ubicacion: 'Shinjuku' },
    { id: 'h-tk-2', nombre: 'Park Hotel Tokyo', estrellas: 5, fechaCheckIn: '2027-04-06', fechaCheckOut: '2027-04-17', precioNoche: 215000, disponible: true, ubicacion: 'Minato' },
    { id: 'h-tk-3', nombre: 'Asakusa Ryokan Stay', estrellas: 3, fechaCheckIn: '2027-05-02', fechaCheckOut: '2027-05-13', precioNoche: 98000, disponible: false, ubicacion: 'Asakusa' },
  ],
  paris: [
    { id: 'h-pa-1', nombre: 'Hôtel Eiffel Seine', estrellas: 4, fechaCheckIn: '2027-03-16', fechaCheckOut: '2027-03-25', precioNoche: 175000, disponible: true, ubicacion: 'Distrito 15' },
    { id: 'h-pa-2', nombre: 'Le Marais Boutique Stay', estrellas: 3, fechaCheckIn: '2027-04-11', fechaCheckOut: '2027-04-20', precioNoche: 125000, disponible: true, ubicacion: 'Le Marais' },
  ],
  rio: [
    { id: 'h-rj-1', nombre: 'Copacabana Ocean View', estrellas: 4, fechaCheckIn: '2027-02-12', fechaCheckOut: '2027-02-19', precioNoche: 105000, disponible: true, ubicacion: 'Copacabana' },
    { id: 'h-rj-2', nombre: 'Ipanema Plaza Resort', estrellas: 5, fechaCheckIn: '2027-02-20', fechaCheckOut: '2027-02-27', precioNoche: 170000, disponible: true, ubicacion: 'Ipanema' },
  ],
  'nueva-york': [
    { id: 'h-ny-1', nombre: 'Midtown Manhattan Suites', estrellas: 4, fechaCheckIn: '2027-03-18', fechaCheckOut: '2027-03-27', precioNoche: 195000, disponible: true, ubicacion: 'Midtown' },
    { id: 'h-ny-2', nombre: 'Brooklyn Bridge Loft Hotel', estrellas: 3, fechaCheckIn: '2027-04-08', fechaCheckOut: '2027-04-16', precioNoche: 142000, disponible: true, ubicacion: 'Brooklyn' },
  ],
  barcelona: [
    { id: 'h-bc-1', nombre: 'Hotel Gaudí Eixample', estrellas: 4, fechaCheckIn: '2027-04-03', fechaCheckOut: '2027-04-14', precioNoche: 148000, disponible: true, ubicacion: 'Eixample' },
    { id: 'h-bc-2', nombre: 'Barceloneta Sea Suites', estrellas: 5, fechaCheckIn: '2027-05-12', fechaCheckOut: '2027-05-23', precioNoche: 210000, disponible: false, ubicacion: 'La Barceloneta' },
  ],
  'san-pedro': [
    { id: 'h-sp-1', nombre: 'Lodge Desierto Estrellado', estrellas: 4, fechaCheckIn: '2027-03-05', fechaCheckOut: '2027-03-10', precioNoche: 118000, disponible: true, ubicacion: 'Calle Caracoles' },
    { id: 'h-sp-2', nombre: 'Hostal Oasis de Atacama', estrellas: 3, fechaCheckIn: '2027-04-14', fechaCheckOut: '2027-04-19', precioNoche: 74000, disponible: true, ubicacion: 'Ayllu de Solor' },
  ],
};