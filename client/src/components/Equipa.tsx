// Secção Equipa - apresentação profissional e credível
import { useSite } from '@/contexts/SiteContext';
import { Award, Wrench, Clock, Shield } from 'lucide-react';

export default function Equipa() {
  const { config } = useSite();
  const isPlumber = config.id === 'norte-reparos';

  const qualities = isPlumber
    ? [
        {
          icon: Award,
          title: 'Formação Contínua',
          description: 'Os nossos técnicos recebem formação regular sobre as mais recentes técnicas de canalização e normas de segurança.',
        },
        {
          icon: Wrench,
          title: 'Equipamento Profissional',
          description: 'Utilizamos equipamento de deteção de fugas, câmaras de inspeção e ferramentas especializadas para cada tipo de intervenção.',
        },
        {
          icon: Clock,
          title: 'Experiência Comprovada',
          description: 'Mais de 10 anos de experiência em canalizações, com centenas de intervenções realizadas com sucesso em Trás-os-Montes.',
        },
        {
          icon: Shield,
          title: 'Disponibilidade Total',
          description: 'Equipa disponível 24/7 para responder a qualquer emergência de canalização, em qualquer localidade da região.',
        },
      ]
    : [
        {
          icon: Award,
          title: 'Formação Contínua',
          description: 'Os nossos técnicos recebem formação regular sobre as mais recentes tecnologias elétricas e normas de segurança.',
        },
        {
          icon: Wrench,
          title: 'Equipamento Profissional',
          description: 'Utilizamos multímetros digitais, câmaras termográficas e ferramentas especializadas para diagnósticos precisos.',
        },
        {
          icon: Clock,
          title: 'Experiência Comprovada',
          description: 'Mais de 10 anos de experiência em instalações elétricas, com centenas de intervenções realizadas com sucesso em Trás-os-Montes.',
        },
        {
          icon: Shield,
          title: 'Certificação CERTIEL',
          description: 'Técnicos certificados para emissão de certificados elétricos obrigatórios para venda e arrendamento de imóveis.',
        },
      ];

  const statsData = isPlumber
    ? [
        { value: '10+', label: 'Anos de Experiência' },
        { value: '500+', label: 'Clientes Satisfeitos' },
        { value: '24/7', label: 'Disponibilidade Total' },
      ]
    : [
        { value: '10+', label: 'Anos de Experiência' },
        { value: '300+', label: 'Clientes Satisfeitos' },
        { value: '24/7', label: 'Disponibilidade Total' },
      ];

  return (
    <section id="equipa" className="py-20 bg-white">
      <div className="container">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            A Nossa Equipa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Profissionais certificados e experientes em Trás-os-Montes, prontos para resolver qualquer problema com eficiência e qualidade.
          </p>
        </div>

        {/* Estatísticas credíveis */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 border-4"
              style={{ borderColor: config.colors.primary }}
            >
              <div
                className="text-5xl font-black mb-2"
                style={{ color: config.colors.primary }}
              >
                {stat.value}
              </div>
              <div className="text-lg font-bold text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Qualidades da equipa */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {qualities.map((quality, index) => {
            const Icon = quality.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-6 bg-gray-50 border-4"
                style={{ borderColor: config.colors.primary }}
              >
                <div
                  className="w-16 h-16 flex-shrink-0 flex items-center justify-center text-white"
                  style={{ backgroundColor: config.colors.primary }}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">{quality.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {quality.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="text-center p-8 border-4 bg-gray-50"
          style={{ borderColor: config.colors.primary }}
        >
          <h3 className="text-2xl font-black mb-4">
            Precisa da nossa ajuda?
          </h3>
          <p className="text-lg mb-6 text-gray-700">
            Entre em contacto connosco para um orçamento gratuito e sem compromisso.
          </p>
          <a
            href={`tel:${config.phone.replace(/\s/g, '')}`}
            className="inline-block px-8 py-4 font-bold text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            style={{ backgroundColor: config.colors.primary }}
          >
            Ligue: {config.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
