// Configuration for both sites (Norte-Reparos and Staff-Seekers)
// Zone d'intervention : rayon de 100 km autour de Macedo de Cavaleiros, district de Bragança, Portugal
// Sites en portugais uniquement — Tarifs sem IVA

export type SiteId = 'norte-reparos' | 'staff-seekers';

export interface SiteConfig {
  id: SiteId;
  name: string;
  title: string;
  description: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  serviceType: string;
  domain: string;
  
  // Design tokens
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    accent: string;
  };
  
  // Hero section
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ogImage: string;
  };
  
  // Services for calculator
  services: Array<{
    id: string;
    label: string;
    basePrice: number;
  }>;

  // Real Stories (Interventions)
  stories: Array<{
    title: string;
    location: string;
    situation: string;
    emotion: string;
    solution: string;
  }>;

  // Team / Avatars
  team: Array<{
    name: string;
    role: string;
    location: string;
    bio: string;
    quote: string;
    image: string; // path to image
  }>;

  // Pricing Zones
  pricingZones: Array<{
    name: string;
    cities: string;
    price: string;
    time: string;
  }>;
  
  // Testimonials
  testimonials: Array<{
    id: string;
    name: string;
    location: string;
    service: string;
    text: string;
    rating: number;
  }>;
  
  // Company info
  company: {
    fullName: string;
    shortDescription: string;
    longDescription: string;
    coverage: string;
    yearEstablished: string;
  };
  
  // SEO
  seo: {
    keywords: string[];
    ogImage: string;
  };
}

export const siteConfigs: Record<SiteId, SiteConfig> = {
  'norte-reparos': {
    id: 'norte-reparos',
    name: 'Norte Reparos',
    title: 'Canalizador Profissional em Trás-os-Montes | Norte Reparos — Desentupimentos & Reparações 24h',
    description: 'Canalizador profissional em Trás-os-Montes. Desentupimentos, reparação de fugas, instalação de esquentadores. Serviço rápido e orçamento gratuito em Bragança e região.',
    phone: '928 484 451',
    whatsapp: '351928484451',
    whatsappMessage: 'Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?',
    email: 'info@norte-reparos.com',
    serviceType: 'Canalizador',
    domain: 'norte-reparos.com',
    
    colors: {
      primary: '#1e40af', // Blue 700
      primaryDark: '#1e3a8a', // Blue 900
      primaryLight: '#3b82f6', // Blue 500
      accent: '#dc2626', // Red 600 for urgent CTAs
    },
    
    hero: {
      title: 'O Seu Canalizador Local. Sem surpresas.',
      subtitle: 'Fugas, entupimentos e caldeiras. Atendemos aldeias e cidades com o mesmo respeito.',
      backgroundImage: '/images-optimized/hero/hero-plumber-portugal.jpg',
      ogImage: '/images-optimized/hero/hero-plumber-portugal.jpg',
    },
    
    services: [
      { id: 'fuga-agua', label: 'Reparação Fuga Água', basePrice: 80 },
      { id: 'desentupimento', label: 'Desentupimento', basePrice: 60 },
      { id: 'esquentador', label: 'Instalação Esquentador', basePrice: 150 },
      { id: 'substituicao', label: 'Substituição Canalização', basePrice: 120 },
    ],

    stories: [
      {
        title: "La Fuite Silencieuse",
        location: "Chaves",
        situation: "Tache d'humidité qui grandit au plafond du salon.",
        emotion: "Stress des dégâts, peur du coût des travaux.",
        solution: "Détection thermique sans casser le mur. Réparation localisée."
      },
      {
        title: "L'Eau Glacée",
        location: "Miranda do Douro - Hiver",
        situation: "-4°C dehors, la chaudière ne démarre plus. Pas d'eau chaude pour la douche des enfants.",
        emotion: "Urgence vitale, inconfort, culpabilité pour les enfants.",
        solution: "Remplacement thermocouple ou débouchage injecteur pilote. Intervention prioritaire."
      },
      {
        title: "L'Évier Bouché de la Grand-Mère",
        location: "Valpaços",
        situation: "L'eau ne s'écoule plus du tout, odeur nauséabonde.",
        emotion: "Honte, impuissance.",
        solution: "\"Dona Maria, ça arrive à tout le monde. On passe le furet, on nettoie, et c'est fini en 15 min.\""
      },
      {
        title: "Le Robinet qui Goutte la Nuit",
        location: "Mogadouro",
        situation: "Ploc... ploc... ploc... impossible de dormir.",
        emotion: "Irritation, fatigue nerveuse.",
        solution: "Changement des joints céramiques. Silence rétabli."
      }
    ],

    team: [
      {
        name: "João 'O Salvador'",
        role: "Chef d'Équipe Plomberie",
        location: "Miranda do Douro",
        bio: "45 ans. Conduit un 4x4 pour accéder aux fermes isolées. Costaud, rassurant, ne craint pas de se salir. Spécialiste fuites majeures.",
        quote: "\"Não se preocupe dona Maria, a água para já.\"",
        image: "/images/team/joao-plumber.jpg"
      },
      {
        name: "Rui",
        role: "Technicien Chauffage",
        location: "Chaves",
        bio: "34 ans. Spécialiste chauffage et chaudières. Calme, pédagogue, explique tout avant de facturer.",
        quote: "\"Primeiro vemos o que é, depois falamos do preço.\"",
        image: "/images/team/rui-heating.jpg"
      }
    ],

    pricingZones: [
      { name: "Zone 1 (Locale)", cities: "Macedo de Cavaleiros, Azibo", price: "10€", time: "< 30 min" },
      { name: "Zone 2 (Voisins)", cities: "Mirandela, Bragança, Valpaços", price: "20€", time: "< 45 min" },
      { name: "Zone 3 (Frontière)", cities: "Miranda do Douro, Chaves, Vinhais", price: "30€", time: "< 60 min" },
      { name: "Zone 4 (Lointaine)", cities: "Vila Real, Mogadouro, Torre de Moncorvo", price: "35-40€", time: "Sur RDV" }
    ],
    
    testimonials: [
      {
        id: '1',
        name: 'João Silva',
        location: 'Bragança',
        service: 'Reparação Fuga de Água',
        text: 'Tive uma fuga de água grave às 23h e liguei em desespero. Chegaram em 25 minutos! Resolveram o problema rapidamente e o preço foi justo. Profissionais de confiança, recomendo sem hesitar.',
        rating: 5,
      },
      {
        id: '2',
        name: 'Maria Santos',
        location: 'Mirandela',
        service: 'Desentupimento WC',
        text: 'O WC entupiu num domingo e pensei que ia ter de esperar até segunda. Mas eles vieram no próprio dia! Muito simpáticos e eficientes. Deixaram tudo limpo. Excelente serviço!',
        rating: 5,
      },
      {
        id: '3',
        name: 'António Rodrigues',
        location: 'Macedo de Cavaleiros',
        service: 'Instalação Esquentador',
        text: 'Instalaram o esquentador novo com toda a certificação necessária. Explicaram tudo muito bem e deram dicas de manutenção. Trabalho impecável. Já os recomendei a 3 amigos.',
        rating: 5,
      },
    ],
    
    company: {
      fullName: 'Norte Reparos — Canalizador Profissional',
      shortDescription: 'Canalizador profissional ao seu serviço em Trás-os-Montes.',
      longDescription: 'A Norte Reparos presta serviços de canalização profissional em toda a região de Trás-os-Montes. Instalação, assistência e manutenção técnica de canalizações, com deslocação ao domicílio dos clientes, todos os dias do ano, incluindo fins de semana e feriados.',
      coverage: 'Trás-os-Montes — Distrito de Bragança e região',
      yearEstablished: '2015',
    },
    
    seo: {
      keywords: ['canalizador', 'bragança', 'trás-os-montes', 'macedo de cavaleiros', 'desentupimento', 'fuga água', 'esquentador', 'canalizador urgente', 'reparação canalização'],
      ogImage: '/images-optimized/hero/hero-plumber-portugal.jpg',
    },
  },
  
  'staff-seekers': {
    id: 'staff-seekers',
    name: 'Staff Seekers',
    title: 'Eletricista Certificado em Trás-os-Montes | Staff Seekers — Instalação & Reparação Elétrica 24h',
    description: 'Eletricista certificado em Trás-os-Montes. Reparações elétricas, quadros elétricos, certificação CERTIEL. Disponível 24h em Bragança e região.',
    phone: '932 321 892',
    whatsapp: '351932321892',
    whatsappMessage: 'Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?',
    email: 'info@staff-seekers.com',
    serviceType: 'Eletricista',
    domain: 'staff-seekers.com',
    
    colors: {
      primary: '#ea580c', // Orange 600
      primaryDark: '#c2410c', // Orange 700
      primaryLight: '#fb923c', // Orange 400
      accent: '#dc2626', // Red 600 for urgent CTAs
    },
    
    hero: {
      title: 'Electricistas de Confiança em Trás-os-Montes.',
      subtitle: 'De Bragança a Vila Real. Chegamos rápido, resolvemos bem, e o preço é justo.',
      backgroundImage: '/images-optimized/hero/hero-electrician-portugal.jpg',
      ogImage: '/images-optimized/hero/hero-electrician-portugal.jpg',
    },
    
    services: [
      { id: 'quadro-eletrico', label: 'Substituição Quadro Elétrico', basePrice: 200 },
      { id: 'tomadas', label: 'Instalação Tomadas', basePrice: 50 },
      { id: 'curto-circuito', label: 'Reparação Curto-Circuito', basePrice: 90 },
      { id: 'certificacao', label: 'Certificação CERTIEL', basePrice: 180 },
    ],

    stories: [
      {
        title: "La Peur du Feu",
        location: "Macedo de Cavaleiros",
        situation: "Une prise dans la cuisine fait \"Bzzzt\" et une étincelle quand on branche le grille-pain.",
        emotion: "Peur que la maison brûle la nuit.",
        solution: "On change la prise et on vérifie les fils derrière. 20 minutes, 35€ tout inclus."
      },
      {
        title: "Le Four qui Saute",
        location: "Vila Real",
        situation: "Noël approche, Sr. António veut rôtir le chevreau, mais le disjoncteur saute dès que le four chauffe.",
        emotion: "Frustration, peur de gâcher le repas de fête.",
        solution: "Diagnostic puissance compteur vs consommation four. Rééquilibrage du tableau."
      },
      {
        title: "L'Interrupteur Chaud",
        location: "Bragança - Centre Historique",
        situation: "Vieux bâtiment. L'interrupteur du couloir est chaud au toucher.",
        emotion: "Inquiétude diffuse, danger invisible.",
        solution: "Remplacement immédiat du mécanisme défectueux (risque d'incendie réel)."
      },
      {
        title: "Le Noir Total",
        location: "Village isolé près de Vinhais",
        situation: "Orage, tout le village a du courant sauf la maison de Sr. José.",
        emotion: "Isolement total, congélateur plein de viande qui va se perdre.",
        solution: "Intervention 4x4, réparation du disjoncteur différentiel qui a \"grillé\" avec la foudre."
      }
    ],

    team: [
      {
        name: "Sr. Carlos 'L'Ancien'",
        role: "Maître Électricien",
        location: "Bragança",
        bio: "58 ans. 35 ans de métier. Visage buriné par le froid transmontano. Spécialité : mises aux normes, tableaux anciens.",
        quote: "\"O quadro é antigo, mas a gente resolve sem partir a parede toda.\"",
        image: "/images/team/carlos-electrician.jpg"
      },
      {
        name: "Miguel 'Le Jeune Pro'",
        role: "Technicien Domotique",
        location: "Macedo de Cavaleiros",
        bio: "29 ans. Rapide, connecté, propre. Idéal pour les jeunes couples et les installations modernes.",
        quote: "\"Vou deixar isto seguro para os miúdos.\"",
        image: "/images/team/miguel-electrician.jpg"
      }
    ],

    pricingZones: [
      { name: "Zone 1 (Locale)", cities: "Macedo de Cavaleiros, Azibo", price: "10€", time: "< 30 min" },
      { name: "Zone 2 (Voisins)", cities: "Mirandela, Bragança, Valpaços", price: "20€", time: "< 45 min" },
      { name: "Zone 3 (Frontière)", cities: "Miranda do Douro, Chaves, Vinhais", price: "30€", time: "< 60 min" },
      { name: "Zone 4 (Lointaine)", cities: "Vila Real, Mogadouro, Torre de Moncorvo", price: "35-40€", time: "Sur RDV" }
    ],
    
    testimonials: [
      {
        id: '1',
        name: 'Paulo Mendes',
        location: 'Bragança',
        service: 'Substituição Quadro Elétrico',
        text: 'Quadro elétrico antigo com fusíveis. Substituíram por um moderno com diferenciais. Trabalho impecável, tudo certificado. Agora sinto-me muito mais seguro em casa.',
        rating: 5,
      },
      {
        id: '2',
        name: 'Sandra Nunes',
        location: 'Mirandela',
        service: 'Certificação Elétrica CERTIEL',
        text: 'Precisava de certificação para vender a casa. Fizeram inspeção completa, corrigiram pequenos problemas e emitiram certificado em 4 dias. Processo super rápido!',
        rating: 5,
      },
      {
        id: '3',
        name: 'Ricardo Ferreira',
        location: 'Macedo de Cavaleiros',
        service: 'Instalação Iluminação LED',
        text: 'Instalaram iluminação LED em toda a casa. Ficou linda e a conta de luz já baixou 60%! Fizeram projeto de iluminação gratuito. Profissionais excelentes.',
        rating: 5,
      },
    ],
    
    company: {
      fullName: 'Staff Seekers — Eletricista Profissional',
      shortDescription: 'Eletricista certificado ao seu serviço em Trás-os-Montes.',
      longDescription: 'A Staff Seekers presta serviços de eletricidade profissional em toda a região de Trás-os-Montes. Instalação, assistência e manutenção técnica de sistemas elétricos, com deslocação ao domicílio dos clientes, todos os dias do ano, incluindo fins de semana e feriados.',
      coverage: 'Trás-os-Montes — Distrito de Bragança e região',
      yearEstablished: '2015',
    },
    
    seo: {
      keywords: ['eletricista', 'bragança', 'trás-os-montes', 'macedo de cavaleiros', 'quadro elétrico', 'curto-circuito', 'certificação CERTIEL', 'eletricista urgente', 'instalação elétrica'],
      ogImage: '/images-optimized/hero/hero-electrician-portugal.jpg',
    },
  },
};

// Helper function to get current site config based on environment or URL
export function getCurrentSiteConfig(): SiteConfig {
  // Detect site based on hostname
  if (typeof window === 'undefined') {
    // Server-side rendering or build time - return default
    return siteConfigs['staff-seekers'];
  }
  
  const hostname = window.location.hostname;
  
  if (hostname.includes('staff-seekers')) {
    return siteConfigs['staff-seekers'];
  }
  
  if (hostname.includes('norte-reparos')) {
    return siteConfigs['norte-reparos'];
  }
  
  // Default to staff-seekers (primary domain)
  return siteConfigs['staff-seekers'];
}
