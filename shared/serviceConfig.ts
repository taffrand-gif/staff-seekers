/**
 * Configuração do serviço (Eletricidade)
 * Modificar estas variáveis para personalizar o site
 */

export type ServiceType = 'electricite';

export interface ServiceConfig {
  type: ServiceType;
  name: string;
  businessName: string;
  phone: string;
  whatsappNumber: string;
  domain: string;
  googleAdsId: string;
  googleAdsConversionLabel: string;
  
  // Cores e design
  gradient: {
    from: string;
    to: string;
  };
  accentColor: string;
  
  // Conteúdo
  heroTitle: string;
  heroSubtitle: string;
  heroEmoji: string;
  serviceEmoji: string;
  
  // Serviços oferecidos
  services: string[];
  
  // Problemas típicos (para geração dinâmica)
  commonProblems: string[];
}

// Configuração Eletricidade (Electricista Profissional)
export const electriciteConfig: ServiceConfig = {
  type: 'electricite',
  name: 'Eletricista',
  businessName: 'Eletricista Profissional 24h',
  phone: '+351932321892',
  whatsappNumber: '351932321892',
  domain: 'staff-seekers.com',
  googleAdsId: 'AW-17915870228',
  googleAdsConversionLabel: '+Lk1CO3R64gZEKvwk8c9',
  
  // Cores: ÂMBAR (#FFA000) + azul escuro (#1A237E) + branco
  gradient: {
    from: '#FFA000',
    to: '#FF8F00',
  },
  accentColor: '#1A237E',
  
  heroTitle: 'Eletricista Certificado em Trás-os-Montes',
  heroSubtitle: 'Instalações, reparações elétricas e certificação CERTIEL — segurança garantida em Bragança e região',
  heroEmoji: '⚡',
  serviceEmoji: '🔌',
  
  services: [
    'Instalação Elétrica Completa',
    'Reparação de Avarias Elétricas',
    'Quadros Elétricos Modernos',
    'Iluminação Interior/Exterior',
    'Certificação CERTIEL',
    'Urgências 24h',
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

// Configuração fixa para Staff-Seekers (Eletricidade)
export const ACTIVE_CONFIG = electriciteConfig;

// Lista das cidades prioritárias
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
  // Villages de Mirandela (14)
  { name: 'Aguieiras', slug: 'aguieiras', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Alvites', slug: 'alvites', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Avantos', slug: 'avantos', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Carvalhais', slug: 'carvalhais', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Cedães', slug: 'cedaes', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Cobro', slug: 'cobro', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Fradizela', slug: 'fradizela', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Mascarenhas', slug: 'mascarenhas', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Múrias', slug: 'murias', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Passos', slug: 'passos', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Torre de Dona Chama', slug: 'torre-de-dona-chama', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Vale de Gouvinhas', slug: 'vale-de-gouvinhas', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Vale de Salgueiro', slug: 'vale-de-salgueiro', district: 'Bragança', parentCity: 'Mirandela' },
  { name: 'Vale de Telhas', slug: 'vale-de-telhas', district: 'Bragança', parentCity: 'Mirandela' },
  // Villages de Bragança (8)
  { name: 'Izeda', slug: 'izeda', district: 'Bragança', parentCity: 'Bragança' },
  { name: 'Coelhoso', slug: 'coelhoso', district: 'Bragança', parentCity: 'Bragança' },
  { name: 'Parada', slug: 'parada', district: 'Bragança', parentCity: 'Bragança' },
  { name: 'Castro de Avelãs', slug: 'castro-de-avelas', district: 'Bragança', parentCity: 'Bragança' },
  { name: 'Gostei', slug: 'gostei', district: 'Bragança', parentCity: 'Bragança' },
  { name: 'Grijó de Parada', slug: 'grijo-de-parada', district: 'Bragança', parentCity: 'Bragança' },
  { name: 'Macedo do Mato', slug: 'macedo-do-mato', district: 'Bragança', parentCity: 'Bragança' },
  { name: 'Salsas', slug: 'salsas', district: 'Bragança', parentCity: 'Bragança' },
  // Villages de Vinhais (4)
  { name: 'Agrochão', slug: 'agrochao', district: 'Bragança', parentCity: 'Vinhais' },
  { name: 'Ervedosa', slug: 'ervedosa', district: 'Bragança', parentCity: 'Vinhais' },
  { name: 'Santalha', slug: 'santalha', district: 'Bragança', parentCity: 'Vinhais' },
  { name: 'Vale de Janeiro', slug: 'vale-de-janeiro', district: 'Bragança', parentCity: 'Vinhais' },
  // Villages de Alfândega da Fé (6)
  { name: 'Agrobom', slug: 'agrobom', district: 'Bragança', parentCity: 'Alfândega da Fé' },
  { name: 'Cerejais', slug: 'cerejais', district: 'Bragança', parentCity: 'Alfândega da Fé' },
  { name: 'Gebelim', slug: 'gebelim', district: 'Bragança', parentCity: 'Alfândega da Fé' },
  { name: 'Sambade', slug: 'sambade', district: 'Bragança', parentCity: 'Alfândega da Fé' },
  { name: 'Sendim da Serra', slug: 'sendim-da-serra', district: 'Bragança', parentCity: 'Alfândega da Fé' },
  { name: 'Vilarelhos', slug: 'vilarelhos', district: 'Bragança', parentCity: 'Alfândega da Fé' },
  // Villages de Vila Flor (6)
  { name: 'Benlhevai', slug: 'benlhevai', district: 'Bragança', parentCity: 'Vila Flor' },
  { name: 'Candoso', slug: 'candoso', district: 'Bragança', parentCity: 'Vila Flor' },
  { name: 'Freixiel', slug: 'freixiel', district: 'Bragança', parentCity: 'Vila Flor' },
  { name: 'Samões', slug: 'samoes', district: 'Bragança', parentCity: 'Vila Flor' },
  { name: 'Sampaio', slug: 'sampaio', district: 'Bragança', parentCity: 'Vila Flor' },
  { name: 'Valtorno', slug: 'valtorno', district: 'Bragança', parentCity: 'Vila Flor' },
  // Villages de Mogadouro (13)
  { name: 'Azinhoso', slug: 'azinhoso', district: 'Bragança', parentCity: 'Mogadouro' },
  { name: 'Bemposta', slug: 'bemposta', district: 'Bragança', parentCity: 'Mogadouro' },
  { name: 'Bruçó', slug: 'bruco', district: 'Bragança', parentCity: 'Mogadouro' },
  { name: 'Castelo Branco', slug: 'castelo-branco', district: 'Bragança', parentCity: 'Mogadouro' },
  { name: 'Meirinhos', slug: 'meirinhos', district: 'Bragança', parentCity: 'Mogadouro' },
  { name: 'Paradela', slug: 'paradela', district: 'Bragança', parentCity: 'Mogadouro' },
  { name: 'Penas Roias', slug: 'penas-roias', district: 'Bragança', parentCity: 'Mogadouro' },
  { name: 'Peredo da Bemposta', slug: 'peredo-da-bemposta', district: 'Bragança', parentCity: 'Mogadouro' },
  { name: 'Saldanha', slug: 'saldanha', district: 'Bragança', parentCity: 'Mogadouro' },
  { name: 'Sendim', slug: 'sendim', district: 'Bragança', parentCity: 'Mogadouro' },
  { name: 'Soutelo', slug: 'soutelo', district: 'Bragança', parentCity: 'Mogadouro' },
  { name: 'Vale de Porco', slug: 'vale-de-porco', district: 'Bragança', parentCity: 'Mogadouro' },
  { name: 'Variz', slug: 'variz', district: 'Bragança', parentCity: 'Mogadouro' },
  // Villages de Vimioso (6)
  { name: 'Algoso', slug: 'algoso', district: 'Bragança', parentCity: 'Vimioso' },
  { name: 'Angueira', slug: 'angueira', district: 'Bragança', parentCity: 'Vimioso' },
  { name: 'Argozelo', slug: 'argozelo', district: 'Bragança', parentCity: 'Vimioso' },
  { name: 'Carção', slug: 'carcao', district: 'Bragança', parentCity: 'Vimioso' },
  { name: 'Matela', slug: 'matela', district: 'Bragança', parentCity: 'Vimioso' },
  { name: 'Santulhão', slug: 'santulhao', district: 'Bragança', parentCity: 'Vimioso' },
  // Villages de Torre de Moncorvo (6)
  { name: 'Adeganha', slug: 'adeganha', district: 'Bragança', parentCity: 'Torre de Moncorvo' },
  { name: 'Cabeça Boa', slug: 'cabeca-boa', district: 'Bragança', parentCity: 'Torre de Moncorvo' },
  { name: 'Cardanha', slug: 'cardanha', district: 'Bragança', parentCity: 'Torre de Moncorvo' },
  { name: 'Larinho', slug: 'larinho', district: 'Bragança', parentCity: 'Torre de Moncorvo' },
  { name: 'Mós', slug: 'mos', district: 'Bragança', parentCity: 'Torre de Moncorvo' },
  { name: 'Peredo dos Castelhanos', slug: 'peredo-dos-castelhanos', district: 'Bragança', parentCity: 'Torre de Moncorvo' },
  // Villages de Carrazeda de Ansiães (5)
  { name: 'Belver', slug: 'belver', district: 'Bragança', parentCity: 'Carrazeda de Ansiães' },
  { name: 'Lavandeira', slug: 'lavandeira', district: 'Bragança', parentCity: 'Carrazeda de Ansiães' },
  { name: 'Linhares', slug: 'linhares', district: 'Bragança', parentCity: 'Carrazeda de Ansiães' },
  { name: 'Parambos', slug: 'parambos', district: 'Bragança', parentCity: 'Carrazeda de Ansiães' },
  { name: 'Seixo de Ansiães', slug: 'seixo-de-ansiaes', district: 'Bragança', parentCity: 'Carrazeda de Ansiães' },
  // Novas cidades principais
  { name: 'Valpaços', slug: 'valpacos', district: 'Vila Real' },
  { name: 'Murça', slug: 'murca', district: 'Vila Real' },
  { name: 'Vila Nova de Foz Côa', slug: 'vila-nova-de-foz-coa', district: 'Guarda' },
  // Villages de Valpaços (6)
  { name: 'Carrazedo de Montenegro', slug: 'carrazedo-de-montenegro', district: 'Vila Real', parentCity: 'Valpaços' },
  { name: 'Jou', slug: 'jou', district: 'Vila Real', parentCity: 'Valpaços' },
  { name: 'Possacos', slug: 'possacos', district: 'Vila Real', parentCity: 'Valpaços' },
  { name: 'Santa Valha', slug: 'santa-valha', district: 'Vila Real', parentCity: 'Valpaços' },
  { name: 'Vassal', slug: 'vassal', district: 'Vila Real', parentCity: 'Valpaços' },
  { name: 'Vales', slug: 'vales', district: 'Vila Real', parentCity: 'Valpaços' },
  // Villages de Murça (3)
  { name: 'Candedo', slug: 'candedo', district: 'Vila Real', parentCity: 'Murça' },
  { name: 'Noura', slug: 'noura', district: 'Vila Real', parentCity: 'Murça' },
  { name: 'Palheiros', slug: 'palheiros', district: 'Vila Real', parentCity: 'Murça' },
  // Villages de Vila Nova de Foz Côa (6)
  { name: 'Almendra', slug: 'almendra', district: 'Guarda', parentCity: 'Vila Nova de Foz Côa' },
  { name: 'Castelo Melhor', slug: 'castelo-melhor', district: 'Guarda', parentCity: 'Vila Nova de Foz Côa' },
  { name: 'Cedovim', slug: 'cedovim', district: 'Guarda', parentCity: 'Vila Nova de Foz Côa' },
  { name: 'Horta', slug: 'horta', district: 'Guarda', parentCity: 'Vila Nova de Foz Côa' },
  { name: 'Muxagata', slug: 'muxagata', district: 'Guarda', parentCity: 'Vila Nova de Foz Côa' },
  { name: 'Touça', slug: 'touca', district: 'Guarda', parentCity: 'Vila Nova de Foz Côa' },
];
