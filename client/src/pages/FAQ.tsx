// Page FAQ dédiée - Staff Seekers (Eletricista)
// 18-20 questions en portugais PT-PT avec Schema.org FAQPage JSON-LD
// Design accordéon avec useState pour open/close

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { useSite } from '@/contexts/SiteContext';
import { ChevronDown, ChevronUp, Phone, MessageCircle, Zap, Shield } from 'lucide-react';
import { Link } from 'wouter';

export default function FAQPage() {
  const { config } = useSite();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 20 questions para eletricista (Staff-Seekers)
  const faqs = [
    {
      question: "Quanto custa um eletricista em Trás-os-Montes?",
      answer: "Os preços variam conforme o serviço: instalação de tomada a partir de 35€, reparação de avaria elétrica a partir de 60€, quadro elétrico novo a partir de 450€. Oferecemos orçamento gratuito sem compromisso. Contacte-nos para uma avaliação precisa."
    },
    {
      question: "Como funciona o orçamento gratuito?",
      answer: "Contacte-nos por telefone, WhatsApp ou formulário online. Deslocamo-nos gratuitamente para avaliar o problema, apresentamos um orçamento detalhado com preços transparentes e só avançamos após sua aprovação. Sem surpresas."
    },
    {
      question: "Tem eletricista urgente disponível 24h?",
      answer: "Sim! Serviço de urgência 24 horas por dia, 7 dias por semana, incluindo fins de semana e feriados. Em caso de falta de luz, curto-circuito ou avaria elétrica perigosa, ligue +351 932 321 892 para intervenção imediata."
    },
    {
      question: "Quanto tempo demora a chegar em caso de urgência?",
      answer: "Na zona de Macedo de Cavaleiros e arredores (até 20km): 30-45 minutos. Para outras localidades do distrito: 45 minutos a 1 hora. Temos veículos equipados com ferramentas e material para deslocações rápidas."
    },
    {
      question: "Atendem urgências à noite ou fim de semana?",
      answer: "Sim, trabalhamos 24/7. Não importa se é meia-noite, domingo ou feriado - temos equipas de piquete sempre disponíveis para emergências elétricas. O preço de urgência aplica-se fora do horário comercial."
    },
    {
      question: "Quais os serviços elétricos que oferecem?",
      answer: "Instalação elétrica completa, reparação de avarias, quadros elétricos novos, certificação CERTIEL, painéis solares, iluminação interior/exterior, tomadas e interruptores, automação residencial, instalação de ar condicionado, urgências elétricas."
    },
    {
      question: "Fazem certificação elétrica CERTIEL?",
      answer: "Sim, somos eletricistas certificados para emitir certificados CERTIEL obrigatórios para venda/arrendamento de imóveis. Fazemos a vistoria completa, emissão do certificado e registo no sistema oficial."
    },
    {
      question: "Instalam painéis solares na região?",
      answer: "Sim, somos especialistas em instalação de painéis solares fotovoltaicos para autoconsumo. Fazemos estudo gratuito de viabilidade, projeto, instalação, legalização e manutenção. Ajudamos a reduzir a fatura da luz em até 70%."
    },
    {
      question: "Quais cidades servem no distrito de Bragança?",
      answer: "Servimos todo o distrito: Bragança, Mirandela, Macedo de Cavaleiros, Chaves, Vila Real, Vinhais, Miranda do Douro, Mogadouro, Torre de Moncorvo, Alfândega da Fé, Freixo de Espada à Cinta, e todas as aldeias circundantes."
    },
    {
      question: "Qual é o raio de ação máximo?",
      answer: "Atendemos num raio de 100km a partir de Macedo de Cavaleiros. Para localidades mais distantes, aplicamos uma taxa de deslocação adicional (consultar). Cobrimos praticamente todo o Nordeste Transmontano."
    },
    {
      question: "Quanto tempo demora uma instalação elétrica nova?",
      answer: "Uma instalação completa numa casa média (T3) leva 3-5 dias. Instalação de quadro elétrico: 1 dia. Reparação de avaria simples: 1-2 horas. Projetos complexos (painéis solares, automação) podem levar 1-2 semanas."
    },
    {
      question: "Dão garantia no trabalho realizado?",
      answer: "Sim, damos garantia de 24 meses em todos os trabalhos realizados. A garantia cobre mão de obra e materiais fornecidos por nós. Em caso de problema relacionado, voltamos gratuitamente para resolver."
    },
    {
      question: "Quais métodos de pagamento aceitam?",
      answer: "Aceitamos dinheiro, multibanco, transferência bancária, MB WAY e cheque. Para serviços superiores a 500€, podemos acordar pagamento faseado. Emitimos fatura-recibo com IVA à taxa legal."
    },
    {
      question: "Quando devo trocar o quadro elétrico antigo?",
      answer: "Se tem fusíveis de rosca (ainda funcionam), disjuntores antigos (mais de 25 anos), falta de diferencial, ou avarias frequentes. Um quadro novo aumenta a segurança, evita incêndios e é obrigatório para certificação."
    },
    {
      question: "Quais são os sinais de perigo elétrico?",
      answer: "Cheiro a queimado, disjuntores que saltam frequentemente, tomadas/interruptores quentes, luzes que piscam, faíscas nas tomadas, choques leves ao tocar em eletrodomésticos, fusíveis queimados repetidamente."
    },
    {
      question: "Quando devo chamar um eletricista?",
      answer: "Ao primeiro sinal de problema: falta de luz parcial/total, disjuntores que saltam, cheiro a queimado, tomadas quentes. Não tente reparar sozinho - riscos de eletrocussão e incêndio são reais."
    },
    {
      question: "Usam equipamento profissional?",
      answer: "Sim, trabalhamos com equipamento de última geração: analisadores de redes Fluke, detetores de cabos, câmaras térmicas FLIR, ferramentas isoladas 1000V, testadores de continuidade, máquinas de furar profissionais."
    },
    {
      question: "São eletricistas certificados?",
      answer: "Sim, temos certificação profissional (curso de eletricista de instalações) e formação contínua. Trabalhamos de acordo com as normas NP EN 60364 (instalações elétricas) e legislação portuguesa. Todos os técnicos têm habilitações legais."
    },
    {
      question: "Fazem serviços para empresas e indústrias?",
      answer: "Sim, atendemos particulares, empresas, comércios, restaurantes, armazéns e pequenas indústrias. Para empresas, oferecemos contratos de manutenção preventiva com inspeções periódicas e desconto em intervenções."
    },
    {
      question: "Como posso poupar energia elétrica?",
      answer: "Trocar para LED, instalar painéis solares, usar termoacumulador com horário bi-horário, desligar standby dos aparelhos, escolher eletrodomésticos classe A+++, isolar bem a casa, usar cortinas térmicas no inverno."
    }
  ];

  // Schema.org FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEOHead 
        title="Perguntas Frequentes | Staff Seekers | Eletricista Trás-os-Montes"
        description="Respostas às 20 perguntas mais comuns sobre serviços elétricos: preços, urgências 24h, certificação CERTIEL, painéis solares, zonas servidas. Eletricista certificado em Bragança."
        canonical="/faq"
      />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Zap size={48} className="text-yellow-300" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Perguntas Frequentes sobre <span className="text-yellow-300">Serviços Elétricos</span>
              </h1>
              <p className="text-xl mb-8">
                Encontre respostas para as 20 dúvidas mais comuns sobre os nossos serviços de eletricista em Trás-os-Montes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:+351${config.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  <Phone size={20} />
                  Ligar: {config.phone}
                </a>
                <a
                  href={`https://wa.me/351932321892`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Warning */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <div className="container mx-auto px-4">
            <div className="flex items-start">
              <Shield className="text-yellow-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <p className="font-bold text-yellow-800">⚠️ Segurança Elétrica Primeiro!</p>
                <p className="text-yellow-700">
                  Nunca tente reparar problemas elétricos sozinho. Risco de eletrocussão e incêndio. 
                  Contacte sempre um eletricista certificado para qualquer intervenção.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  20 Perguntas sobre Serviços Elétricos
                </h2>
                <p className="text-gray-600">
                  Clique em cada pergunta para ver a resposta detalhada
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg font-semibold text-gray-900 pr-4">
                        <span className="text-orange-600 mr-2">{index + 1}.</span>
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0">
                        {openIndex === index ? (
                          <ChevronUp className="text-orange-600" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-400" size={24} />
                        )}
                      </span>
                    </button>
                    
                    {openIndex === index && (
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Internal Links Section */}
              <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Mais Informações Úteis
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">📍 Serviços por Cidade</h4>
                    <ul className="space-y-2">
                      <li><Link href="/eletricista-vila-real" className="text-orange-600 hover:underline">Eletricista Vila Real</Link></li>
                      <li><Link href="/eletricista-braganca" className="text-orange-600 hover:underline">Eletricista Bragança</Link></li>
                      <li><Link href="/eletricista-mirandela" className="text-orange-600 hover:underline">Eletricista Mirandela</Link></li>
                      <li><Link href="/eletricista-macedo-cavaleiros" className="text-orange-600 hover:underline">Eletricista Macedo de Cavaleiros</Link></li>
                      <li><Link href="/eletricista-chaves" className="text-orange-600 hover:underline">Eletricista Chaves</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">⚡ Nossos Serviços</h4>
                    <ul className="space-y-2">
                      <li><Link href="/servicos" className="text-orange-600 hover:underline">Todos os Serviços</Link></li>
                      <li><Link href="/blog/custo-eletricista-tras-os-montes-precos" className="text-orange-600 hover:underline">Preços Eletricista</Link></li>
                      <li><Link href="/blog/certificacao-eletrica-certiel-guia" className="text-orange-600 hover:underline">Certificação CERTIEL</Link></li>
                      <li><Link href="/blog/paineis-solares-tras-os-montes-guia" className="text-orange-600 hover:underline">Painéis Solares</Link></li>
                      <li><Link href="/blog" className="text-orange-600 hover:underline">Blog com Dicas</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl shadow-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Zap size={32} className="text-yellow-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Ainda tem dúvidas? Fale connosco!
                </h3>
                <p className="mb-6 text-orange-100">
                  Estamos disponíveis 24 horas por dia para esclarecer todas as suas questões sobre eletricidade
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:+351${config.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <Phone size={20} />
                    Ligar Agora: {config.phone}
                  </a>
                  <a
                    href={`https://wa.me/351932321892`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Urgente
                  </a>
                </div>
                <p className="mt-6 text-sm text-orange-200">
                  Resposta em menos de 5 minutos durante o dia • Urgências 24/7 • Eletricista Certificado
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
