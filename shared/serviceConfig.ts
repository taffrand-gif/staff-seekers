/**
 * Configuration du service (Plomberie ou Électricité)
 * Modifier ces variables pour personnaliser le site
 */

export type ServiceType = 'plomberie' | 'electricite';

export interface ServiceConfig {
  type: ServiceType;
  name: string;
  businessName: string;
  phone: string;
  whatsappNumber: string;
  domain: string;
  googleAdsId: string;
  googleAdsConversionLabel: string;
  
  // Couleurs et design
  gradient: {
    from: string;
    to: string;
  };
  accentColor: string;
  
  // Contenu
  heroTitle: string;
  heroSubtitle: string;
  heroEmoji: string;
  serviceEmoji: string;
  
  // Services offerts
  services: string[];
  
  // Problèmes typiques (pour génération dynamique)
  commonProblems: string[];
}

// Configuration Plomberie (Norte Reparos)
export const plumberieConfig: ServiceConfig = {
  type: 'plomberie',
  name: 'Canalizador',
  businessName: 'Norte Reparos',
  phone: '928484451',
  whatsappNumber: '351928484451',
  domain: 'norte-reparos.com',
  googleAdsId: 'AW-17915870228',
  googleAdsConversionLabel: '+Lk1CO3R64gZEKvwk8c9',
  
  gradient: {
    from: '#667eea',
    to: '#764ba2',
  },
  accentColor: '#22c55e',
  
  heroTitle: 'Canalizador Urgência',
  heroSubtitle: 'Fuga de água? Entupimento? Emergência?',
  heroEmoji: '🚨',
  serviceEmoji: '🔧',
  
  services: [
    'Reparação de fugas de água',
    'Desentupimento de canalizações',
    'Instalação de torneiras e autoclismos',
    'Reparação de caldeiras',
    'Instalação de esquentadores',
    'Manutenção preventiva',
  ],
  
  commonProblems: [
    'fuga de água',
    'entupimento WC',
    'torneira quebrada',
    'cano rebentado',
    'autoclismo avariado',
    'fuga cozinha',
    'entupimento pia',
    'caldeira sem água quente',
    'fuga casa de banho',
    'canalização entupida',
    'torneira a pingar',
    'fuga no teto',
    'entupimento ralo',
    'esquentador avariado',
    'fuga tubagem',
  ],
};

// Configuration Électricité (Staff Seekers)
export const electriciteConfig: ServiceConfig = {
  type: 'electricite',
  name: 'Eletricista',
  businessName: 'Staff Seekers',
  phone: '932321892',
  whatsappNumber: '351932321892',
  domain: 'staff-seekers.com',
  googleAdsId: 'AW-17915870228',
  googleAdsConversionLabel: '+Lk1CO3R64gZEKvwk8c9',
  
  gradient: {
    from: '#f093fb',
    to: '#f5576c',
  },
  accentColor: '#22c55e',
  
  heroTitle: 'Eletricista Urgência',
  heroSubtitle: 'Curto-circuito? Disjuntor a saltar? Emergência?',
  heroEmoji: '🚨',
  serviceEmoji: '🔌',
  
  services: [
    'Reparação de curto-circuitos',
    'Instalação de quadros elétricos',
    'Reparação de disjuntores',
    'Instalação de tomadas e interruptores',
    'Deteção de avarias elétricas',
    'Certificação elétrica',
  ],
  
  commonProblems: [
    'curto-circuito',
    'disjuntor salta',
    'sem luz',
    'quadro avariado',
    'tomada com problemas',
    'fiação defeituosa',
    'interruptor não funciona',
    'curto na cozinha',
    'tomada a aquecer',
    'fiação exposta',
    'falha elétrica geral',
    'curto no chuveiro',
    'disjuntor não arma',
    'fiação a cheirar a queimado',
    'tomada sem energia',
  ],
};

// Sélectionner la configuration active (à modifier selon le site)
// Pour plomberie: export const ACTIVE_CONFIG = plumberieConfig;
// Pour électricité: export const ACTIVE_CONFIG = electriciteConfig;
export const ACTIVE_CONFIG = plumberieConfig;

// Liste des 12 villes prioritaires
export const CITIES = [
  {
    name: 'Alfândega da Fé',
    slug: 'alfandega-da-fe',
    district: 'Bragança',
  },
  {
    name: 'Bragança',
    slug: 'braganca',
    district: 'Bragança',
  },
  {
    name: 'Carrazeda de Ansiães',
    slug: 'carrazeda-de-ansiaes',
    district: 'Bragança',
  },
  {
    name: 'Freixo de Espada à Cinta',
    slug: 'freixo-de-espada-a-cinta',
    district: 'Bragança',
  },
  {
    name: 'Macedo de Cavaleiros',
    slug: 'macedo-de-cavaleiros',
    district: 'Bragança',
  },
  {
    name: 'Miranda do Douro',
    slug: 'miranda-do-douro',
    district: 'Bragança',
  },
  {
    name: 'Mirandela',
    slug: 'mirandela',
    district: 'Bragança',
  },
  {
    name: 'Mogadouro',
    slug: 'mogadouro',
    district: 'Bragança',
  },
  {
    name: 'Torre de Moncorvo',
    slug: 'torre-de-moncorvo',
    district: 'Bragança',
  },
  {
    name: 'Vila Flor',
    slug: 'vila-flor',
    district: 'Bragança',
  },
  {
    name: 'Vimioso',
    slug: 'vimioso',
    district: 'Bragança',
  },
  {
    name: 'Vinhais',
    slug: 'vinhais',
    district: 'Bragança',
  },
];
