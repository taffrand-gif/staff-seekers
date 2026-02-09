// Design Philosophy: Brutalisme Numérique Fonctionnel
// FAQ section with accordion for questions/answers
// - Bold headings with thick borders
// - Accordion with clear expand/collapse
// - SEO-optimized Q&A content

import { useSite } from '@/contexts/SiteContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const { config } = useSite();

  const faqs = [
    {
      question: `Qual é o horário de atendimento do ${config.serviceType}?`,
      answer: `Estamos disponíveis 24 horas por dia, 7 dias por semana, incluindo fins de semana e feriados. Temos piquetes de urgência sempre prontos para intervir a qualquer momento.`,
    },
    {
      question: 'Quanto tempo demora a chegar em caso de urgência?',
      answer: 'Em situações de urgência, o nosso tempo médio de resposta é de 30 a 45 minutos na zona de Bragança e arredores. Para outras localidades do distrito, pode variar entre 45 minutos a 1 hora.',
    },
    {
      question: 'Como é calculado o preço do serviço?',
      answer: 'O preço depende do tipo de serviço, da complexidade da intervenção e se é uma situação de urgência. Pode usar o nosso calculador de preços para obter uma estimativa. Para um orçamento exato, contacte-nos diretamente.',
    },
    {
      question: 'Os técnicos são certificados?',
      answer: 'Sim, todos os nossos técnicos são certificados e credenciados, com vasta experiência na área. Trabalhamos de acordo com todas as normas de segurança e qualidade exigidas.',
    },
    {
      question: 'Fazem intervenções em empresas e condomínios?',
      answer: 'Sim, prestamos serviços tanto a particulares como a empresas, incluindo restaurantes, comércios, escolas, ginásios, hotéis, hospitais e condomínios de qualquer dimensão.',
    },
    {
      question: 'Emitem certificado após a intervenção?',
      answer: 'Sim, emitimos todos os certificados necessários conforme a legislação em vigor, incluindo certificações DGEG quando aplicável.',
    },
    {
      question: 'Qual é a zona de cobertura?',
      answer: `Cobrimos todo o ${config.company.coverage}, incluindo Bragança, Mirandela, Macedo de Cavaleiros, Miranda do Douro, Vinhais, e todas as localidades da região de Trás-os-Montes.`,
    },
    {
      question: 'Aceitam pagamento com cartão?',
      answer: 'Sim, aceitamos pagamento em dinheiro, multibanco e transferência bancária. Para sua comodidade, também aceitamos pagamento por MB WAY.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600">
              Respostas às dúvidas mais comuns sobre os nossos serviços
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-4 bg-white px-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]"
                style={{ borderColor: config.colors.primary }}
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="mt-12 text-center p-8 border-4 bg-white" style={{ borderColor: config.colors.primary }}>
            <p className="text-lg font-bold mb-4">Não encontrou a resposta que procurava?</p>
            <p className="text-gray-600 mb-6">
              Entre em contacto connosco. A nossa equipa está pronta para esclarecer todas as suas dúvidas.
            </p>
            <a
              href={`tel:${config.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              style={{ backgroundColor: config.colors.primary }}
            >
              📞 Ligue: {config.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
