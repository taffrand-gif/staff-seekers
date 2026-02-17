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
        title: "A Fuga Silenciosa",
        location: "Chaves",
        situation: "Mancha de humidade a crescer no teto da sala.",
        emotion: "Stress com os danos, medo do custo das obras.",
        solution: "Deteção térmica sem partir a parede. Reparação localizada."
      },
      {
        title: "A Água Gelada",
        location: "Miranda do Douro - Inverno",
        situation: "-4°C lá fora, o esquentador não arranca. Sem água quente para o banho dos miúdos.",
        emotion: "Urgência vital, desconforto, culpa pelos filhos.",
        solution: "Substituição do termopar ou desentupimento do injetor piloto. Intervenção prioritária."
      },
      {
        title: "O Lava-Loiça Entupido da Avó",
        location: "Valpaços",
        situation: "A água não escoa de todo, cheiro nauseabundo.",
        emotion: "Vergonha, impotência.",
        solution: "\"Dona Maria, acontece a toda a gente. Passamos o furet, limpamos, e fica resolvido em 15 min.\""
      },
      {
        title: "A Torneira que Pinga à Noite",
        location: "Mogadouro",
        situation: "Ploc... ploc... ploc... impossível dormir.",
        emotion: "Irritação, cansaço nervoso.",
        solution: "Troca das juntas cerâmicas. Silêncio restabelecido."
      }
    ],

    team: [
      {
        name: "João 'O Salvador'",
        role: "Chefe de Equipa Canalização",
        location: "Miranda do Douro",
        bio: "45 anos. Conduz um 4x4 para chegar às quintas isoladas. Forte, tranquilizador, não tem medo de se sujar. Especialista em fugas graves.",
        quote: "\"Não se preocupe dona Maria, a água para já.\"",
        image: "/images/team/joao-plumber.jpg"
      },
      {
        name: "Rui",
        role: "Técnico de Aquecimento",
        location: "Chaves",
        bio: "34 anos. Especialista em aquecimento e caldeiras. Calmo, pedagógico, explica tudo antes de faturar.",
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
    name: 'Eletricista Profissional',
    title: 'Eletricista Certificado em Trás-os-Montes | Eletricista Profissional — Instalação & Reparação Elétrica 24h',
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
        title: "O Medo do Fogo",
        location: "Macedo de Cavaleiros",
        situation: "Uma tomada na cozinha faz \"Bzzzt\" e solta faísca quando se liga a torradeira.",
        emotion: "Medo de que a casa pegue fogo à noite.",
        solution: "Trocamos a tomada e verificamos os fios por trás. 20 minutos, 35€ tudo incluído."
      },
      {
        title: "O Forno que Dispara",
        location: "Vila Real",
        situation: "O Natal aproxima-se, o Sr. António quer assar o cabrito, mas o disjuntor dispara assim que o forno aquece.",
        emotion: "Frustração, medo de estragar a ceia de Natal.",
        solution: "Diagnóstico potência contador vs consumo forno. Reequilíbrio do quadro."
      },
      {
        title: "O Interruptor Quente",
        location: "Bragança - Centro Histórico",
        situation: "Edifício antigo. O interruptor do corredor está quente ao toque.",
        emotion: "Preocupação difusa, perigo invisível.",
        solution: "Substituição imediata do mecanismo defeituoso (risco real de incêndio)."
      },
      {
        title: "O Apagão Total",
        location: "Aldeia isolada perto de Vinhais",
        situation: "Trovoada, toda a aldeia tem luz menos a casa do Sr. José.",
        emotion: "Isolamento total, arca cheia de carne que se vai estragar.",
        solution: "Intervenção 4x4, reparação do disjuntor diferencial que \"queimou\" com o raio."
      }
    ],

    team: [
      {
        name: "Sr. Carlos 'O Mestre'",
        role: "Mestre Eletricista",
        location: "Bragança",
        bio: "58 anos. 35 anos de profissão. Rosto marcado pelo frio transmontano. Especialidade: colocação às normas, quadros antigos.",
        quote: "\"O quadro é antigo, mas a gente resolve sem partir a parede toda.\"",
        image: "/images/team/carlos-electrician.jpg"
      },
      {
        name: "Miguel 'O Jovem Pro'",
        role: "Técnico Domótica",
        location: "Macedo de Cavaleiros",
        bio: "29 anos. Rápido, conectado, limpo. Ideal para casais jovens e instalações modernas.",
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
      fullName: 'Eletricista Profissional — Eletricista Profissional',
      shortDescription: 'Eletricista certificado ao seu serviço em Trás-os-Montes.',
      longDescription: 'A Eletricista Profissional presta serviços de eletricidade profissional em toda a região de Trás-os-Montes. Instalação, assistência e manutenção técnica de sistemas elétricos, com deslocação ao domicílio dos clientes, todos os dias do ano, incluindo fins de semana e feriados.',
      coverage: 'Trás-os-Montes — Distrito de Bragança e região',
      yearEstablished: '2015',
    },
    
    seo: {
      keywords: [
        'eletricista bragança', 'eletricista mirandela', 'eletricista macedo de cavaleiros',
        'eletricista urgente bragança', 'eletricista 24 horas mirandela', 'eletricista chaves',
        'eletricista vila real', 'eletricista vinhais', 'eletricista miranda do douro',
        'eletricista mogadouro', 'eletricista torre de moncorvo', 'eletricista trás-os-montes',
        'quadro elétrico bragança', 'quadro elétrico mirandela', 'certificação certiel bragança',
        'certificação certiel mirandela', 'curto circuito bragança', 'avaria elétrica mirandela',
        'disjuntor a disparar', 'tomada não funciona', 'eletricista urgente 24h',
        'eletricista profissional', 'certificação elétrica trás-os-montes'
      ],
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
