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
      title: 'Canalizador Profissional em Trás-os-Montes',
      subtitle: 'Desentupimentos, reparação de fugas, instalação de esquentadores. Serviço rápido em Bragança, Macedo de Cavaleiros e toda a região.',
      backgroundImage: '/images-optimized/hero/hero-plumber-portugal.jpg',
      ogImage: '/images-optimized/hero/hero-plumber-portugal.jpg',
    },
    
    services: [
      { id: 'fuga-agua', label: 'Reparação Fuga Água', basePrice: 80 },
      { id: 'desentupimento', label: 'Desentupimento', basePrice: 60 },
      { id: 'esquentador', label: 'Instalação Esquentador', basePrice: 150 },
      { id: 'substituicao', label: 'Substituição Canalização', basePrice: 120 },
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
      title: 'Eletricista Certificado em Trás-os-Montes',
      subtitle: 'Instalações, reparações elétricas e certificação CERTIEL. Segurança garantida em Bragança, Macedo de Cavaleiros e toda a região.',
      backgroundImage: '/images-optimized/hero/hero-electrician-portugal.jpg',
      ogImage: '/images-optimized/hero/hero-electrician-portugal.jpg',
    },
    
    services: [
      { id: 'quadro-eletrico', label: 'Substituição Quadro Elétrico', basePrice: 200 },
      { id: 'tomadas', label: 'Instalação Tomadas', basePrice: 50 },
      { id: 'curto-circuito', label: 'Reparação Curto-Circuito', basePrice: 90 },
      { id: 'certificacao', label: 'Certificação CERTIEL', basePrice: 180 },
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
