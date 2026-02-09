// Design Philosophy: Brutalisme Numérique Fonctionnel
// Team section - simplified and realistic for small artisan business
// - No faces, no excessive details
// - Focus on expertise and certifications
// - Professional but modest presentation

import { useSite } from '@/contexts/SiteContext';
import { Award, Wrench, Clock, Shield } from 'lucide-react';

export default function Equipa() {
  const { config } = useSite();

  const qualities = [
    {
      icon: Award,
      title: 'Formação Contínua',
      description: 'Todos os técnicos recebem formação regular sobre as mais recentes tecnologias e normas de segurança.',
    },
    {
      icon: Wrench,
      title: 'Equipamento Profissional',
      description: 'Utilizamos apenas equipamento de última geração para garantir trabalhos de excelência.',
    },
    {
      icon: Clock,
      title: 'Experiência Comprovada',
      description: 'Mais de 1000 intervenções realizadas com sucesso em toda a região de Trás-os-Montes.',
    },
    {
      icon: Shield,
      title: 'Disponibilidade Total',
      description: 'Equipa disponível 24/7 para responder a qualquer emergência, em qualquer localidade.',
    },
  ];

  return (
    <section id="equipa" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            A Nossa Equipa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Profissionais certificados e experientes, prontos para resolver qualquer problema com eficiência e qualidade.
          </p>
        </div>

        {/* Stats - Simple and credible */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div
            className="text-center p-8 border-4"
            style={{ borderColor: config.colors.primary }}
          >
            <div
              className="text-5xl font-black mb-2"
              style={{ color: config.colors.primary }}
            >
              10+
            </div>
            <div className="text-lg font-bold text-gray-700">
              Anos de Experiência
            </div>
          </div>

          <div
            className="text-center p-8 border-4"
            style={{ borderColor: config.colors.primary }}
          >
            <div
              className="text-5xl font-black mb-2"
              style={{ color: config.colors.primary }}
            >
              1000+
            </div>
            <div className="text-lg font-bold text-gray-700">
              Intervenções Realizadas
            </div>
          </div>

          <div
            className="text-center p-8 border-4"
            style={{ borderColor: config.colors.primary }}
          >
            <div
              className="text-5xl font-black mb-2"
              style={{ color: config.colors.primary }}
            >
              24/7
            </div>
            <div className="text-lg font-bold text-gray-700">
              Disponibilidade Total
            </div>
          </div>
        </div>

        {/* Qualities grid */}
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
          className="text-center p-8 border-4"
          style={{ borderColor: config.colors.primary, backgroundColor: config.colors.primaryLight }}
        >
          <h3 className="text-2xl font-black mb-4">
            Precisa da nossa ajuda?
          </h3>
          <p className="text-lg mb-6">
            Entre em contacto connosco para um orçamento gratuito e sem compromisso.
          </p>
          <a
            href={`tel:${config.phone.replace(/\s/g, '')}`}
            className="inline-block px-8 py-4 font-bold text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            style={{ backgroundColor: config.colors.primary }}
          >
            📞 Ligue: {config.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
