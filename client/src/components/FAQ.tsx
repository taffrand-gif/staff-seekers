// Secção FAQ - perguntas frequentes adaptadas ao site ativo
// Utiliza dados partilhados de faqData.ts (primeiras 8 perguntas)
import { useSite } from '@/contexts/SiteContext';
import { memo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { electricFaqs, plumberFaqs } from '@/data/faqData';

function FAQ() {
  const { config } = useSite();
  const isPlumber = config.id === 'norte-reparos';

  // Utiliza as primeiras 8 perguntas das FAQs partilhadas
  const faqs = (isPlumber ? plumberFaqs : electricFaqs).slice(0, 8);

  return (
    <section id="faq" className="py-0">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Encontre respostas às perguntas mais comuns sobre os nossos serviços em Trás-os-Montes.
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
            Entre em contacto connosco. A nosso trabalho está pronta para esclarecer todas as suas dúvidas.
          </p>
          <a
            href={`tel:+351${config.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            style={{ backgroundColor: config.colors.primary }}
          >
            Ligue: {config.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(FAQ);
