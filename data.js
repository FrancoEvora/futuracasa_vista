// Futura Casa Pro v2.0 — dados demonstrativos
const FC_LOTS = [
  {
    "id": "sol-H14",
    "quadra": "H",
    "number": "14",
    "area": 456.05,
    "dims": "aprox. 15 x 30 m",
    "price": 478000,
    "status": "available",
    "x": 51.8,
    "y": 21.7,
    "street": "Alameda de Grumari",
    "profile": "Localização privilegiada",
    "lat": -18.72852376,
    "lng": -47.52405936
  },
  {
    "id": "sol-A39",
    "quadra": "A",
    "number": "39",
    "area": 580.11,
    "dims": "aprox. 18 x 32 m",
    "price": 592000,
    "status": "available",
    "x": 54.8,
    "y": 47.2,
    "street": "Alameda dos Cajueiros",
    "profile": "Lote amplo, próximo ao verde",
    "lat": -18.73086484,
    "lng": -47.52674825
  },
  {
    "id": "sol-A12",
    "quadra": "A",
    "number": "12",
    "area": 504.83,
    "dims": "aprox. 16 x 31 m",
    "price": 518000,
    "status": "reserved",
    "x": 43.0,
    "y": 54.0,
    "street": "Alameda de Maresias",
    "profile": "Reserva em análise",
    "lat": -18.73064894,
    "lng": -47.52498916
  },
  {
    "id": "sol-B08",
    "quadra": "B",
    "number": "08",
    "area": 450.07,
    "dims": "aprox. 15 x 30 m",
    "price": 464000,
    "status": "available",
    "x": 52.5,
    "y": 67.8,
    "street": "Alameda dos Cajueiros",
    "profile": "Boa implantação",
    "lat": -18.73238612,
    "lng": -47.52423413
  },
  {
    "id": "sol-C18",
    "quadra": "C",
    "number": "18",
    "area": 360.0,
    "dims": "aprox. 12 x 30 m",
    "price": 374000,
    "status": "sold",
    "x": 60.5,
    "y": 87.0,
    "street": "Alameda de Castelhanos",
    "profile": "Vendido",
    "lat": -18.73340601,
    "lng": -47.52455298
  },
  {
    "id": "sol-D07",
    "quadra": "D",
    "number": "07",
    "area": 487.92,
    "dims": "aprox. 16 x 30 m",
    "price": 496000,
    "status": "available",
    "x": 61.2,
    "y": 70.4,
    "street": "Alameda do Farol",
    "profile": "Equilibrado",
    "lat": -18.73186089,
    "lng": -47.52336923
  },
  {
    "id": "sol-E20",
    "quadra": "E",
    "number": "20",
    "area": 454.61,
    "dims": "aprox. 15 x 30 m",
    "price": 459000,
    "status": "available",
    "x": 69.8,
    "y": 67.0,
    "street": "Alameda da Enseada",
    "profile": "Perfil residencial",
    "lat": -18.73237952,
    "lng": -47.52247551
  },
  {
    "id": "sol-F09",
    "quadra": "F",
    "number": "09",
    "area": 787.73,
    "dims": "aprox. irregular",
    "price": 740000,
    "status": "reserved",
    "x": 67.2,
    "y": 38.4,
    "street": "Alameda do Farol",
    "profile": "Esquina premium",
    "lat": -18.7303042,
    "lng": -47.52280864
  }
];

const FC_HOUSES = [
  {
    id:'essenza',
    name:'Casa Essenza',
    tier:'Premium',
    area:124,
    bedrooms:3,
    suites:1,
    price:490000,
    style:'Contemporânea',
    description:'Residência térrea com integração social, varanda gourmet e planta eficiente.'
  },
  {
    id:'harmonia',
    name:'Casa Harmonia',
    tier:'Família',
    area:152,
    bedrooms:3,
    suites:2,
    price:640000,
    style:'Natural',
    description:'Projeto com ambientes amplos, conforto térmico e forte conexão com o jardim.'
  },
  {
    id:'vista',
    name:'Casa Vista',
    tier:'Alto padrão',
    area:188,
    bedrooms:4,
    suites:2,
    price:820000,
    style:'Assinada',
    description:'Projeto com fachada marcante, suíte master e experiência de lazer integrada.'
  }
];

const FC_BUILD_STAGES = [
  {id:'projeto', label:'Projeto aprovado', status:'done'},
  {id:'fundacao', label:'Fundação', status:'done'},
  {id:'estrutura', label:'Estrutura', status:'active'},
  {id:'acabamento', label:'Acabamento', status:'pending'},
  {id:'entrega', label:'Entrega', status:'pending'}
];

const FC_STORAGE = {
  reservations:'fcpro_reservations_v2',
  occurrences:'fcpro_occurrences_v2',
  services:'fcpro_services_v2',
  checklist:'fcpro_checklist_v2',
  salesState:'fcpro_sales_state_v2'
};