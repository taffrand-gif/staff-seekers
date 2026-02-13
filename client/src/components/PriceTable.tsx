// PriceTable.tsx - Tabela de preços para ambos os sites
// Preços indicativos sem IVA, adaptados ao site ativo

import { Euro, Clock, Shield, Check } from 'lucide-react';
import { useSite } from '@/contexts/SiteContext';

export default function PriceTable() {
  const { config } = useSite();
  const isPlumber = config.id === 'norte-reparos';

  // Tabela de preços para eletricidade (sem IVA)
  const electricPrices = [
    {
      service: "Deslocação e Diagnóstico",
      description: "Visita ao local para avaliação do problema",
      price: "25€ - 40€",
      details: ["Análise inicial", "Identificação do problema", "Orçamento detalhado"],
      icon: <Clock className="w-6 h-6" />,
      color: "bg-blue-50 border-blue-200",
    },
    {
      service: "Mão de obra (hora)",
      description: "Trabalho do técnico certificado",
      price: "20€ - 40€/hora",
      details: ["Técnico certificado", "Equipamento profissional", "Segurança garantida"],
      icon: <Euro className="w-6 h-6" />,
      color: "bg-green-50 border-green-200",
    },
    {
      service: "Reparação de curto-circuito",
      description: "Identificação e reparação de curtos-circuitos",
      price: "70€ - 120€",
      details: ["Localização do defeito", "Substituição de componentes", "Testes de segurança"],
      icon: <Shield className="w-6 h-6" />,
      color: "bg-amber-50 border-amber-200",
    },
    {
      service: "Instalação de tomada ou interruptor",
      description: "Instalação ou substituição de pontos elétricos",
      price: "35€ - 55€",
      details: ["Material incluído", "Instalação segura", "Testes funcionais"],
      icon: <Check className="w-6 h-6" />,
      color: "bg-purple-50 border-purple-200",
    },
    {
      service: "Substituição de quadro elétrico",
      description: "Instalação completa de novo quadro elétrico",
      price: "250€ - 450€",
      details: ["Quadro novo", "Disjuntores diferenciais", "Instalação completa", "Certificação"],
      icon: <Shield className="w-6 h-6" />,
      color: "bg-red-50 border-red-200",
    },
    {
      service: "Certificação CERTIEL",
      description: "Certificado de instalações elétricas",
      price: "150€ - 300€",
      details: ["Inspeção completa", "Documentação oficial", "Validade legal"],
      icon: <Check className="w-6 h-6" />,
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      service: "Instalação de ponto de luz",
      description: "Instalação de iluminação interior ou exterior",
      price: "30€ - 50€",
      details: ["Instalação segura", "Testes de funcionamento", "Ajustes finais"],
      icon: <Clock className="w-6 h-6" />,
      color: "bg-teal-50 border-teal-200",
    },
  ];

  // Tabela de preços para canalização (sem IVA)
  const plumbPrices = [
    {
      service: "Deslocação e Diagnóstico",
      description: "Visita ao local para avaliação do problema",
      price: "25€ - 40€",
      details: ["Análise inicial", "Identificação do problema", "Orçamento detalhado"],
      icon: <Clock className="w-6 h-6" />,
      color: "bg-blue-50 border-blue-200",
    },
    {
      service: "Mão de obra (hora)",
      description: "Trabalho do técnico profissional",
      price: "20€ - 35€/hora",
      details: ["Técnico experiente", "Equipamento profissional", "Trabalho garantido"],
      icon: <Euro className="w-6 h-6" />,
      color: "bg-green-50 border-green-200",
    },
    {
      service: "Desentupimento simples",
      description: "Desentupimento de canalizações, WC e pias",
      price: "50€ - 80€",
      details: ["Equipamento especializado", "Limpeza completa", "Sem danos"],
      icon: <Shield className="w-6 h-6" />,
      color: "bg-amber-50 border-amber-200",
    },
    {
      service: "Reparação de fuga de água",
      description: "Deteção e reparação de fugas",
      price: "60€ - 100€",
      details: ["Deteção precisa", "Reparação definitiva", "Testes de estanquidade"],
      icon: <Check className="w-6 h-6" />,
      color: "bg-purple-50 border-purple-200",
    },
    {
      service: "Instalação de torneira",
      description: "Instalação ou substituição de torneira",
      price: "40€ - 60€",
      details: ["Instalação profissional", "Material não incluído", "Testes de funcionamento"],
      icon: <Clock className="w-6 h-6" />,
      color: "bg-teal-50 border-teal-200",
    },
    {
      service: "Instalação de esquentador",
      description: "Instalação completa de esquentador a gás",
      price: "100€ - 200€",
      details: ["Instalação certificada", "Ligação de gás e água", "Testes de segurança"],
      icon: <Shield className="w-6 h-6" />,
      color: "bg-red-50 border-red-200",
    },
    {
      service: "Substituição de autoclismo",
      description: "Substituição completa de autoclismo",
      price: "70€ - 120€",
      details: ["Remoção do antigo", "Instalação do novo", "Testes de funcionamento"],
      icon: <Check className="w-6 h-6" />,
      color: "bg-indigo-50 border-indigo-200",
    },
  ];

  const prices = isPlumber ? plumbPrices : electricPrices;
  const accentColor = isPlumber ? 'text-blue-600' : 'text-amber-600';
  const iconAccent = isPlumber ? 'text-blue-600' : 'text-amber-600';
  const serviceLabel = isPlumber ? 'canalização' : 'eletricidade';

  return (
    <section id="precos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Preços <span className={accentColor}>Transparentes</span> e Justos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Consulte a nossa tabela de preços indicativos para serviços de {serviceLabel} em Trás-os-Montes.
            Trabalhamos com honestidade e transparência.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-amber-50 border-2 border-amber-200 px-6 py-3 rounded-full">
            <Shield className="w-6 h-6 text-amber-600" />
            <span className="font-bold text-amber-800">
              Técnicos Certificados • Garantia nos Serviços • Orçamento Gratuito
            </span>
          </div>
        </div>

        {/* Tabela de preços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {prices.map((item, index) => (
            <div
              key={index}
              className={`${item.color} border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Cabeçalho com ícone e título */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <div className={iconAccent}>
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {item.service}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Preço */}
              <div className="mb-6">
                <div className="text-3xl font-black text-gray-900 mb-1">
                  {item.price}
                </div>
                <div className="text-sm text-gray-500">
                  Preço indicativo (sem IVA)
                </div>
              </div>

              {/* Detalhes incluídos */}
              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-gray-700">Inclui:</p>
                {item.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Nota */}
              <div className="text-xs text-gray-500 border-t pt-3">
                * Preço final pode variar conforme complexidade e materiais
              </div>
            </div>
          ))}
        </div>

        {/* Aviso importante */}
        <div className="max-w-4xl mx-auto bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4">
              <div className="bg-amber-100 p-4 rounded-lg inline-block">
                <Shield className="w-12 h-12 text-amber-600" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Informação Importante sobre os Preços
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Os preços apresentados são indicativos e não incluem IVA.</strong> O valor final poderá variar consoante:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>A complexidade do trabalho específico</li>
                  <li>Os materiais necessários</li>
                  <li>A distância de deslocação (para localidades mais afastadas)</li>
                  <li>A urgência do serviço (emergências fora do horário normal)</li>
                </ul>
                <p className="pt-2">
                  <strong>Contacte-nos para um orçamento exato e gratuito,</strong> adaptado às suas necessidades específicas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-6 rounded-2xl shadow-xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Orçamento Gratuito e Sem Compromisso</h3>
              <p className="text-amber-100">
                Descreva o seu problema e receba um orçamento detalhado em menos de 24h
              </p>
            </div>
            <a
              href={`tel:${config.phone.replace(/\s/g, '')}`}
              className="px-8 py-3 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Ligar Agora: {config.phone}
            </a>
          </div>
          
          <p className="text-gray-600 mt-6">
            Disponível 24/7 para emergências • Serviço em toda a região de Trás-os-Montes
          </p>
        </div>
      </div>
    </section>
  );
}
