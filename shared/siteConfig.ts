// Configuration for both sites (Norte-Reparos and Staff-Seekers)
// Design Philosophy: Brutalisme Numérique Fonctionnel
// - Bold typography with Poppins ExtraBold for headings
// - Saturated primary colors (blue for plumbing, orange for electrical)
// - Asymmetric grid layouts with intentional negative space
// - Hard shadows and thick borders
// - Fast, direct interactions (<200ms)

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
    name: 'Canalizador de Trás-os-Montes',
    title: 'Plomberie Urgence Porto | Norte Reparos - Dépannage & Installation 24/7',
    description: 'Plombier urgentiste à Porto. Fuites, chauffe-eau, canalisation. Intervention rapide 30min, garantie 2 ans, prix transparent.',
    phone: '928 484 451',
    whatsapp: '928484451',
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
      title: 'Canalizador Urgente em Trás-os-Montes | Norte Reparos - Desentupimento & Reparação 24/7',
      backgroundImage: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/Izku0oEj2BefVqflrj5wPT-img-1_1770602182000_na1fn_cGx1bWJlci1oZXJvLXByb2Zlc3Npb25hbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L0l6a3Uwb0VqMkJlZlZxZmxyajV3UFQtaW1nLTFfMTc3MDYwMjE4MjAwMF9uYTFmbl9jR3gxYldKbGNpMW9aWEp2TFhCeWIyWmxjM05wYjI1aGJBLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vV8Oha9xbxKqQybnE68jpC15Ef3ciQJtqs2JA~K1ggoLpCF~Sd4sdNEXYOIjYqtq83~p0-cFNzUdgQr4i3dJiifwlV8wSPjkweevNXmKxW3WrP4gv-SgVVh7nwI1xwhHTu0S0mBLozkIbCHB9mHoKpsZrgAywle2G~RzNI~FgxWgtR~QEmRkelPFzoxkgH~7MhZ70kOkaMI-U-mZ9wQupTneUI8Ej39XGFpdMnQoxyQxP4GR1BvT2H6LRg6ujC1PudT3olsxqLjh00Lt-mrUWgvv79bdBmJelrJft7PxZQxM6JvD2MAn3nhdQ3YkW27zZYKyurblXCG5N2aedm85Kg__',
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
      fullName: 'Canalizador de Trás-os-Montes',
      shortDescription: 'Canalizador profissional ao seu serviço 24 horas por dia.',
      longDescription: 'A empresa Canalizador de Trás-os-Montes, reconhecida nesta área de atuação há vários anos, presta serviços de instalação, assistência e manutenção técnica de canalizações, efetuando deslocações ao domicílio dos clientes, 24 horas por dia, todos os dias do ano, incluindo fins de semana e feriados.',
      coverage: 'Distrito de Bragança',
      yearEstablished: '2015',
    },
    
    seo: {
      keywords: ['canalizador', 'bragança', 'trás-os-montes', 'urgências', '24h', 'fuga água', 'desentupimento', 'esquentador'],
      ogImage: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/Zd5MIfeKcoQdjH54bmsaCu-img-3_1770593723000_na1fn_cGx1bWJpbmctc2VydmljZS1kZXRhaWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L1pkNU1JZmVLY29RZGpINTRibXNhQ3UtaW1nLTNfMTc3MDU5MzcyMzAwMF9uYTFmbl9jR3gxYldKcGJtY3RjMlZ5ZG1salpTMWtaWFJoYVd3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qqEqPeBj3ETSegRpgvowHSLBgHks-NWOTpyVTJJ0n-eXP4KxCAagMKqf~wFAXnhze9wr-FcCRuaUoJtrVEecQzex0eLk5NA8HTxlD81nQ~ix8Uxvw~VxeQYGbEETVebcO38Z2U8GyBUFfb19dfJ7E8xxNOYQKlYaqQFPLhHrBL1MoKKrBIhrl-QD8slv~ow82pbE98GyZmKBxkfB2DMBaRZ9-MoO81sdhGCcuuskRFoQMccLVUs3S3eIs5SF3VsJHtq6LrbG5zhUs1G644lbceB7l4tB0CD56rnFiPPl3lahQkyKezqG~p0Z~pKcTbkrJrWVAPiXehRd~S4r4w__',
    },
  },
  
  'staff-seekers': {
    id: 'staff-seekers',
    name: 'Eletricista de Trás-os-Montes',
    title: 'Électricité Professionnelle Porto | Staff Seekers - Installation & Dépannage 24/7',
    description: 'Électricien professionnel à Porto. Interventions urgentes 24h/24, installations neuves, rénovations. Certifié, devis gratuit.',
    phone: '932 321 892',
    whatsapp: '932321892',
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
      title: 'Eletricista Profissional em Trás-os-Montes | Staff Seekers - Instalação & Reparação 24/7',
      backgroundImage: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/Izku0oEj2BefVqflrj5wPT-img-2_1770602176000_na1fn_ZWxlY3RyaWNpYW4taGVyby1wcm9mZXNzaW9uYWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L0l6a3Uwb0VqMkJlZlZxZmxyajV3UFQtaW1nLTJfMTc3MDYwMjE3NjAwMF9uYTFmbl9aV3hsWTNSeWFXTnBZVzR0YUdWeWJ5MXdjbTltWlhOemFXOXVZV3cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RdqWRDvRLZW7LF2HY4jZAMf5ABpAcnVcMPdr-ZyFJOxdPFq9wbo~vUcCQFfjPD7nL17yHaOHpij6FlwEOgoQatRvVPf2JcIyGjs223YrHEFvBS9hXbtk6Wt2~yd~7gXfzqnc~E6S6jXupt97mg5rBH-KIA5-zZzTJ0DKGeOWe~52eU-RueX8fU5Eh-i-HBErkGVB0o6ITBsCD~1Tvz3SHqHcrtbSaPJDCOibthv~OHRZhIixKsYlgqw~gTwv4m-BY4-OsfBkK8X9MZRt-E3yOdt-w3-b1-OpU1UoWdZOtRhG4D2c5x~-qUN6cQc81bKC89EAGVFbsQ1JcCH8WBuppQ__',
    },
    
    services: [
      { id: 'quadro-eletrico', label: 'Substituição Quadro Elétrico', basePrice: 200 },
      { id: 'tomadas', label: 'Instalação Tomadas', basePrice: 50 },
      { id: 'curto-circuito', label: 'Reparação Curto-Circuito', basePrice: 90 },
      { id: 'certificacao', label: 'Certificação DGEG', basePrice: 180 },
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
        service: 'Certificação Elétrica DGEG',
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
      fullName: 'Eletricista de Trás-os-Montes',
      shortDescription: 'Eletricista profissional ao seu serviço 24 horas por dia.',
      longDescription: 'A empresa Eletricista de Trás-os-Montes, reconhecida nesta área de atuação há vários anos, presta serviços de instalação, assistência e manutenção técnica de sistemas elétricos, efetuando deslocações ao domicílio dos clientes, 24 horas por dia, todos os dias do ano, incluindo fins de semana e feriados.',
      coverage: 'Distrito de Bragança',
      yearEstablished: '2015',
    },
    
    seo: {
      keywords: ['eletricista', 'bragança', 'trás-os-montes', 'urgências', '24h', 'quadro elétrico', 'curto-circuito', 'certificação DGEG'],
      ogImage: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/Zd5MIfeKcoQdjH54bmsaCu-img-4_1770593735000_na1fn_ZWxlY3RyaWNhbC1zZXJ2aWNlLWRldGFpbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L1pkNU1JZmVLY29RZGpINTRibXNhQ3UtaW1nLTRfMTc3MDU5MzczNTAwMF9uYTFmbl9aV3hsWTNSeWFXTmhiQzF6WlhKMmFXTmxMV1JsZEdGcGJBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IXv9867bBLpvhRqgE6FZlzZjaDVpWaLhMHn86iDiwnqZx6ux-08L2aMxTGdGvdVLIGu0arnxSVoGGK5B-SErOWbjS-yfbEiBzjRjWcvBek3qX7Y6iUrILKRq8ExuG1dlQbI11m5bRFQA74Y87awrhLwmsz4BtNG8whuzowLosbHyNVIWHNGbJkKr9rJPMFVunsooCW9Xxq2d7rzm~utLlLoOlpPSOdbcKatHXeYXKuIKRTd2ddK~zGFQmHBIYk363ZVhiJh7~C9c47k4JvLhMHhgKKvUcY-h-fjXvU23tMJEtHscLx41DbZI8HgpZrrtzB60ePmaD0FrEx-dUiY3sA__',
    },
  },
};

// Helper function to get current site config based on environment or URL
export function getCurrentSiteConfig(): SiteConfig {
  // Detect site based on hostname
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  
  if (hostname.includes('staff-seekers')) {
    return siteConfigs['staff-seekers'];
  }
  
  // Default to norte-reparos
  return siteConfigs['norte-reparos'];
}
