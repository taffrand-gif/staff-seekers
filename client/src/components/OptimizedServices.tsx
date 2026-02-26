import React from 'react';
import { useSite } from '@/contexts/SiteContext';

// Images de services pour électricité — utiliser les fichiers .jpg disponibles
const electricServiceImages: Record<string, string> = {
  'Instalação Elétrica Completa': 'service-instalacao.jpg',
  'Reparação de Avarias Elétricas': 'service-urgencia.jpg',
  'Quadros Elétricos Modernos': 'service-quadro-eletrico.jpg',
  'Iluminação Interior/Exterior': 'service-iluminacao.jpg',
  'Certificação CERTIEL': 'service-certificacao.jpg',
  'Urgências 24h': 'service-urgencia.jpg',
};

// Images de services pour plomberie
const plumbServiceImages: Record<string, string> = {
  'Desentupimentos': 'service-desentupimentos.jpg',
  'Reparação de Fugas de Água': 'service-sala-banho.jpg',
  'Instalação Sanitários': 'service-instalacao.jpg',
  'Aquecimento Central': 'service-aquecimento.jpg',
  'Canalização Nova': 'service-instalacao.jpg',
  'Urgências 24h': 'service-urgencia.jpg',
};

// Descriptions pour électricité
const electricDescriptions: Record<string, string> = {
  'Instalação Elétrica Completa': 'Instalação elétrica residencial e comercial completa, desde o quadro principal até às tomadas finais, com materiais de qualidade e cumprimento das normas de segurança.',
  'Reparação de Avarias Elétricas': 'Diagnóstico e reparação rápida de avarias elétricas, curtos-circuitos, disjuntores que disparam, falhas de iluminação e outros problemas elétricos.',
  'Quadros Elétricos Modernos': 'Substituição e modernização de quadros elétricos antigos, instalação de disjuntores diferenciais, organização e identificação de circuitos.',
  'Iluminação Interior/Exterior': 'Projeto e instalação de sistemas de iluminação interior e exterior, spots LED, iluminação decorativa, sensores de movimento e automatização.',
  'Certificação CERTIEL': 'Inspeção e certificação elétrica obrigatória para venda e arrendamento de imóveis, com emissão de certificado válido e registado na CERTIEL.',
  'Urgências 24h': 'Atendimento de urgências elétricas 24 horas por dia, 7 dias por semana, para situações de perigo ou falta de energia.',
};

// Descriptions pour plomberie
const plumbDescriptions: Record<string, string> = {
  'Desentupimentos': 'Desentupimento profissional de canalizações, WC, pias, ralos e redes de esgotos com equipamento especializado.',
  'Reparação de Fugas de Água': 'Deteção e reparação de fugas de água em canalizações, torneiras, autoclismos e tubagens, com intervenção rápida e eficaz.',
  'Instalação Sanitários': 'Instalação completa de equipamentos sanitários: sanitas, lavatórios, banheiras, bases de duche e acessórios de casa de banho.',
  'Aquecimento Central': 'Instalação e manutenção de sistemas de aquecimento central, caldeiras, radiadores e sistemas de água quente.',
  'Canalização Nova': 'Instalação de canalização nova para construções, remodelações e ampliações, com materiais certificados.',
  'Urgências 24h': 'Atendimento de urgências de canalização 24 horas por dia, 7 dias por semana, para fugas graves e entupimentos.',
};

// Features pour électricité
const electricFeatures: Record<string, string[]> = {
  'Instalação Elétrica Completa': [
    'Materiais certificados (Schneider, Legrand)',
    'Cumprimento normativo RCCTE',
    'Garantia na instalação'
  ],
  'Reparação de Avarias Elétricas': [
    'Diagnóstico no local',
    'Reparação rápida',
    'Peças originais com garantia'
  ],
  'Quadros Elétricos Modernos': [
    'Quadros modulares com disjuntores diferenciais',
    'Identificação clara dos circuitos',
    'Certificação incluída'
  ],
  'Iluminação Interior/Exterior': [
    'Projeto luminotécnico',
    'LED de alta eficiência',
    'Automação com sensores'
  ],
  'Certificação CERTIEL': [
    'Inspeção completa com relatório',
    'Certificado válido para venda/arrendamento',
    'Registo na plataforma CERTIEL'
  ],
  'Urgências 24h': [
    'Resposta rápida',
    'Técnicos equipados para emergências',
    'Orçamento no local'
  ]
};

// Features pour plomberie
const plumbFeatures: Record<string, string[]> = {
  'Desentupimentos': [
    'Equipamento profissional',
    'Desentupimento sem danos',
    'Limpeza completa'
  ],
  'Reparação de Fugas de Água': [
    'Deteção precisa de fugas',
    'Reparação definitiva',
    'Garantia no serviço'
  ],
  'Instalação Sanitários': [
    'Materiais de qualidade',
    'Instalação profissional',
    'Acabamentos perfeitos'
  ],
  'Aquecimento Central': [
    'Caldeiras certificadas',
    'Instalação completa',
    'Manutenção incluída'
  ],
  'Canalização Nova': [
    'Materiais certificados',
    'Projeto personalizado',
    'Garantia na instalação'
  ],
  'Urgências 24h': [
    'Resposta rápida',
    'Técnicos equipados',
    'Disponível todos os dias'
  ]
};

const OptimizedServices: React.FC = () => {
  const { config } = useSite();
  const isPlumber = config.id === 'norte-reparos';

  const serviceImages = isPlumber ? plumbServiceImages : electricServiceImages;
  const serviceDescriptions = isPlumber ? plumbDescriptions : electricDescriptions;
  const serviceFeatures = isPlumber ? plumbFeatures : electricFeatures;

  // Construire la liste des services à partir de serviceConfig
  const services = isPlumber
    ? ['Desentupimentos', 'Reparação de Fugas de Água', 'Instalação Sanitários', 'Aquecimento Central', 'Canalização Nova', 'Urgências 24h']
    : ['Instalação Elétrica Completa', 'Reparação de Avarias Elétricas', 'Quadros Elétricos Modernos', 'Iluminação Interior/Exterior', 'Certificação CERTIEL', 'Urgências 24h'];

  const sectionTitle = isPlumber ? 'Canalização' : 'Eletricidade';
  const accentColor = isPlumber ? 'text-blue-600' : 'text-amber-600';
  const hoverBorder = isPlumber ? 'hover:border-blue-500' : 'hover:border-amber-500';
  const iconColor = isPlumber ? 'text-blue-600' : 'text-amber-600';
  const btnBg = isPlumber ? 'bg-blue-600 hover:bg-blue-700' : 'bg-amber-700 hover:bg-amber-800';
  const serviceEmoji = isPlumber ? '🔧' : '⚡';
  const otherSiteLink = isPlumber
    ? { text: 'Precisa de um eletricista?', url: 'https://staff-seekers.com', label: 'staff-seekers.com' }
    : { text: 'Precisa de um canalizador?', url: 'https://norte-reparos.com', label: 'norte-reparos.com' };

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da secção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços de <span className={accentColor}>{sectionTitle}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serviços profissionais completos para residências, comércios e indústrias em toda a região de Trás-os-Montes.
          </p>
        </div>

        {/* Grelha de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const imageName = serviceImages[service] || 'service-instalacao.jpg';
            const description = serviceDescriptions[service] || 'Serviço profissional de qualidade.';
            const features = serviceFeatures[service] || ['Materiais de qualidade', 'Técnicos certificados', 'Garantia no serviço'];

            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 ${hoverBorder}`}
              >
                {/* Imagem do serviço */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={`/images-optimized/services/${imageName}`}
                    alt={`Serviço de ${service.toLowerCase()} em Trás-os-Montes`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                  />
                </div>

                {/* Conteúdo do serviço */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`text-2xl ${iconColor}`}>{serviceEmoji}</div>
                    <h3 className="text-xl font-bold text-gray-900">{service}</h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {description}
                  </p>

                  <div className="space-y-3">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${config.whatsapp || '351932321892'}?text=${encodeURIComponent(config.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center justify-center gap-2 ${btnBg} text-white font-semibold px-6 py-3 rounded-lg w-full transition-colors duration-300`}
                  >
                    <span>Pedir Orçamento</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secção adicional */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-blue-50 rounded-2xl p-8 border border-amber-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Porque escolher a <span className={accentColor}>{config.name}</span>?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-amber-100 text-amber-600 p-2 rounded-full">🏆</div>
                  <span className="text-gray-700">Mais de 10 anos de experiência na região</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-amber-100 text-amber-600 p-2 rounded-full">🔧</div>
                  <span className="text-gray-700">Equipamento moderno e tecnologia atualizada</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-amber-100 text-amber-600 p-2 rounded-full">📋</div>
                  <span className="text-gray-700">Certificação e documentação completa</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-amber-100 text-amber-600 p-2 rounded-full">💰</div>
                  <span className="text-gray-700">Preços transparentes sem surpresas</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Áreas de Atuação</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Bragança', 'Macedo de Cavaleiros', 'Mirandela', 'Miranda do Douro', 'Vinhais', 'Mogadouro', 'Vila Flor', 'Valpaços', 'Torre de Moncorvo', 'Alfândega da Fé'].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-gray-700">
                    <span className={iconColor}>📍</span>
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Servimos toda a região de Trás-os-Montes num raio de 100 km.
              </p>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 font-semibold">
                  {otherSiteLink.text} Recomendamos: <a href={otherSiteLink.url} className="underline">{otherSiteLink.label}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedServices;
