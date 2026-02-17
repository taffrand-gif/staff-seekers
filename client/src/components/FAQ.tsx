// Secção FAQ - perguntas frequentes adaptadas ao site ativo
import { useSite } from '@/contexts/SiteContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const { config } = useSite();
  const isPlumber = config.id === 'norte-reparos';

  const plumbFaqs = [
    {
      question: 'Qual é o horário de atendimento do canalizador?',
      answer: 'Estamos disponíveis 24 horas por dia, 7 dias por semana, incluindo fins de semana e feriados. Temos piquetes de urgência sempre prontos para intervir em Trás-os-Montes.',
    },
    {
      question: 'Quanto tempo demora a chegar em caso de urgência?',
      answer: 'Em situações de urgência, o nosso tempo médio de resposta é de 30 a 45 minutos na zona de Bragança e Macedo de Cavaleiros. Para outras localidades de Trás-os-Montes, pode variar entre 45 minutos a 1 hora.',
    },
    {
      question: 'Quanto custa um desentupimento?',
      answer: 'O preço de um desentupimento simples varia entre 50€ e 80€ (sem IVA), dependendo da complexidade. Para um orçamento exato, contacte-nos diretamente.',
    },
    {
      question: 'Os técnicos são certificados?',
      answer: 'Sim, todos os nossos canalizadores são profissionais experientes com formação técnica adequada. Trabalhamos de acordo com todas as normas de segurança e qualidade exigidas.',
    },
    {
      question: 'Fazem instalação de esquentadores?',
      answer: 'Sim, fazemos instalação e substituição de esquentadores a gás com toda a certificação necessária. O preço varia entre 100€ e 200€ (sem IVA), dependendo do modelo e complexidade.',
    },
    {
      question: 'Qual é a zona de cobertura?',
      answer: 'Cobrimos toda a região de Trás-os-Montes num raio de 100 km, incluindo Bragança, Macedo de Cavaleiros, Mirandela, Miranda do Douro, Vinhais, Mogadouro e todas as localidades da região.',
    },
    {
      question: 'Emitem fatura?',
      answer: 'Sim, emitimos fatura com IVA para todos os serviços prestados. Aceitamos pagamento em dinheiro, multibanco, transferência bancária e MB WAY.',
    },
    {
      question: 'O orçamento é gratuito?',
      answer: 'Sim, o orçamento é gratuito e sem compromisso. Contacte-nos por telefone ou WhatsApp para descrever o seu problema e receber uma estimativa.',
    },
  ];

  const electricFaqs = [
    {
      question: 'Qual é o horário de atendimento do eletricista?',
      answer: 'Estamos disponíveis 24 horas por dia, 7 dias por semana, incluindo fins de semana e feriados. Temos piquetes de urgência sempre prontos para intervir em Trás-os-Montes.',
    },
    {
      question: 'Quanto tempo demora a chegar em caso de urgência?',
      answer: 'Em situações de urgência, o nosso tempo médio de resposta é de 30 a 45 minutos na zona de Bragança e Macedo de Cavaleiros. Para outras localidades de Trás-os-Montes, pode variar entre 45 minutos a 1 hora.',
    },
    {
      question: 'Quanto custa a certificação elétrica CERTIEL?',
      answer: 'O preço da certificação CERTIEL varia entre 150€ e 300€ (sem IVA), dependendo da dimensão da instalação e das eventuais correções necessárias.',
    },
    {
      question: 'Os técnicos são certificados?',
      answer: 'Sim, todos os nossos eletricistas são certificados e credenciados, com vasta experiência na área. Estamos habilitados para emitir certificados CERTIEL.',
    },
    {
      question: 'Fazem substituição de quadros elétricos?',
      answer: 'Sim, fazemos substituição e modernização de quadros elétricos. O preço varia entre 250€ e 450€ (sem IVA), incluindo quadro novo, disjuntores diferenciais e certificação.',
    },
    {
      question: 'Qual é a zona de cobertura?',
      answer: 'Cobrimos toda a região de Trás-os-Montes num raio de 100 km, incluindo Bragança, Macedo de Cavaleiros, Mirandela, Miranda do Douro, Vinhais, Mogadouro e todas as localidades da região.',
    },
    {
      question: 'Emitem fatura?',
      answer: 'Sim, emitimos fatura com IVA para todos os serviços prestados. Aceitamos pagamento em dinheiro, multibanco, transferência bancária e MB WAY.',
    },
    {
      question: 'O orçamento é gratuito?',
      answer: 'Sim, o orçamento é gratuito e sem compromisso. Contacte-nos por telefone ou WhatsApp para descrever o seu problema e receber uma estimativa.',
    },
  ];

  const faqs = isPlumber ? plumbFaqs : electricFaqs;

  return (
    <section id="faq" className="py-0">
      <div className="max-w-4xl mx-auto">
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
            Entre em contacto connosco. A meu trabalho está pronta para esclarecer todas as suas dúvidas.
          </p>
          <a
            href={`tel:${config.phone.replace(/\s/g, '')}`}
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
