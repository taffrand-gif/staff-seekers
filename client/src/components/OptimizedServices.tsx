import React from 'react';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

const serviceImages = {
  'Instalação Elétrica Completa': 'service-quadro-eletrico.jpg',
  'Reparação de Avarias Elétricas': 'service-certificacao.jpg',
  'Quadros Elétricos Modernos': 'service-quadro-eletrico.jpg',
  'Iluminação Interior/Exterior': 'service-iluminacao.jpg',
  'Certificação Elétrica': 'service-certificacao.jpg',
  'Urgências 24h': 'service-instalacao.jpg',
};

const serviceDescriptions = {
  'Instalação Elétrica Completa': 'Instalação elétrica residencial e comercial completa, desde o quadro principal até às tomadas finais, com materiais de qualidade e cumprimento das normas de segurança.',
  'Reparação de Avarias Elétricas': 'Diagnóstico e reparação rápida de avarias elétricas, curtos-circuitos, disjuntores que disparam, falhas de iluminação e outros problemas elétricos.',
  'Quadros Elétricos Modernos': 'Substituição e modernização de quadros elétricos antigos, instalação de disjuntores diferenciais, organização e identificação de circuitos.',
  'Iluminação Interior/Exterior': 'Projeto e instalação de sistemas de iluminação interior e exterior, spots LED, iluminação decorativa, sensores de movimento e automatização.',
  'Certificação Elétrica': 'Inspeção e certificação elétrica obrigatória para venda e arrendamento de imóveis, com emissão de certificado válido e registado.',
  'Urgências 24h': 'Atendimento de urgências elétricas 24 horas por dia, 7 dias por semana, para situações de perigo ou falta de energia.',
};

const OptimizedServices: React.FC = () => {
  const { config } = useSite();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços de <span className="text-amber-600">Eletricidade</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serviços elétricos completos para residências, comércios e indústrias em toda a região de Trás-os-Montes.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.services.map((service, index) => {
            const imageName = service in serviceImages ? serviceImages[service as keyof typeof serviceImages] : 'service-quadro-eletrico.png';
            const description = service in serviceDescriptions ? serviceDescriptions[service as keyof typeof serviceDescriptions] : 'Serviço profissional de qualidade.';

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-amber-500"
              >
                {/* Image du service */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={`/images/services/${imageName.replace('.jpg', '.png')}`}
                    alt={`Serviço de ${(typeof service === 'string' ? service : service.label).toLowerCase()} em Trás-os-Montes`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>

                {/* Contenu du service */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl text-amber-600">⚡</div>
                    <h3 className="text-xl font-bold text-gray-900">{service.label}</h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✓</span>
                      <span>Materiais de primeira qualidade</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✓</span>
                      <span>Técnicos certificados</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✓</span>
                      <span>Garantia no serviço</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, gostaria de mais informações sobre o serviço de ${service}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg w-full transition-colors duration-300"
                  >
                    <span>Pedir Orçamento</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section supplémentaire */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-blue-50 rounded-2xl p-8 border border-amber-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Porque escolher a <span className="text-amber-600">Staff Seekers</span>?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-amber-100 text-amber-600 p-2 rounded-full">🏆</div>
                  <span className="text-gray-700">Mais de 15 anos de experiência em eletricidade</span>
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
                {['Vila Real', 'Bragança', 'Chaves', 'Mirandela', 'Macedo de Cavaleiros', 'Lamego', 'Régua', 'Montalegre', 'Valpaços', 'Mogadouro'].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-gray-700">
                    <span className="text-amber-600">📍</span>
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Servimos toda a região de Trás-os-Montes e arredores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedServices;