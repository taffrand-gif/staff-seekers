import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const config = ACTIVE_CONFIG;
  const faqs = getFAQs(config.type);

  return (
    <div className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos serviços de {config.name.toLowerCase()} de urgência
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

// Fonction pour obtenir les FAQs selon le type de service
function getFAQs(serviceType: 'plomberie' | 'electricite'): FAQItem[] {
  if (serviceType === 'plomberie') {
    return [
      {
        question: "Quanto custa uma intervenção de urgência?",
        answer: "O custo varia conforme o tipo de problema e a complexidade da reparação. Fazemos sempre uma estimativa sem compromisso antes de iniciar qualquer trabalho. Em caso de urgência, deslocamo-nos imediatamente e apresentamos preços competitivos e transparentes.",
      },
      {
        question: "Atendem urgências 24 horas?",
        answer: "Sim, estamos disponíveis 24 horas por dia, 7 dias por semana, incluindo fins-de-semana e feriados. Basta ligar ou enviar mensagem no WhatsApp.",
      },
      {
        question: "Quanto tempo demoram a chegar?",
        answer: "Normalmente chegamos em 30-40 minutos desde Macedo de Cavaleiros para as principais localidades do distrito de Bragança. O tempo pode variar conforme a distância e as condições de trânsito.",
      },
      {
        question: "Fazem reparações de fugas de água?",
        answer: "Sim, fazemos deteção e reparação de fugas de água em canalizações, torneiras, autoclismos, caldeiras e qualquer outro sistema de canalização. Utilizamos equipamento profissional para localizar fugas ocultas.",
      },
      {
        question: "Têm garantia nos trabalhos realizados?",
        answer: "Sim, todos os nossos trabalhos têm garantia de 12 meses por escrito. Se houver qualquer problema relacionado com a nossa intervenção, voltamos sem custos adicionais.",
      },
      {
        question: "Fazem desentupimentos?",
        answer: "Sim, fazemos desentupimento de WC, pias, ralos, esgotos e canalizações em geral. Utilizamos equipamento profissional como máquinas de desentupimento e câmaras de inspeção.",
      },
      {
        question: "É necessário marcar hora?",
        answer: "Para urgências não é necessário marcar. Atendemos imediatamente. Para trabalhos programados (instalações, remodelações), recomendamos agendar para garantir disponibilidade.",
      },
      {
        question: "Aceitam que formas de pagamento?",
        answer: "Aceitamos dinheiro, transferência bancária e MB Way. O pagamento é feito após a conclusão do trabalho e sua aprovação.",
      },
      {
        question: "Fazem instalação de esquentadores e caldeiras?",
        answer: "Sim, fazemos instalação, manutenção e reparação de esquentadores, caldeiras, termoacumuladores e sistemas de aquecimento central.",
      },
      {
        question: "Atendem em que localidades?",
        answer: "Atendemos em todo o distrito de Bragança, incluindo Bragança, Macedo de Cavaleiros, Mirandela, Miranda do Douro, Vinhais, Mogadouro e todas as vilas e aldeias da região.",
      },
      {
        question: "São certificados?",
        answer: "Sim, somos canalizadores certificados e experientes. Cumprimos todas as normas técnicas e de segurança exigidas.",
      },
      {
        question: "Os preços são competitivos?",
        answer: "Sim, oferecemos preços competitivos e transparentes, sem compromisso. Apresentamos sempre uma estimativa clara antes de iniciar qualquer trabalho.",
      },
      {
        question: "O que fazer em caso de fuga de água grave?",
        answer: "Feche imediatamente a torneira de corte geral da água (normalmente junto ao contador). Depois ligue-nos para intervenção urgente. Se não souber onde fica a torneira de corte, ligue-nos que orientamos por telefone.",
      },
      {
        question: "Fazem manutenção preventiva?",
        answer: "Sim, fazemos manutenção preventiva de sistemas de canalização, caldeiras e esquentadores. A manutenção regular previne avarias e prolonga a vida útil dos equipamentos.",
      },
      {
        question: "Podem ajudar com problemas de pressão de água?",
        answer: "Sim, diagnosticamos e resolvemos problemas de pressão de água baixa ou alta. As causas podem ser diversas: entupimentos, fugas, problemas no sistema de distribuição ou equipamentos defeituosos.",
      },
      {
        question: "Fazem instalação de casas de banho completas?",
        answer: "Sim, fazemos instalação completa de casas de banho, incluindo canalizações, louças sanitárias, torneiras, chuveiros e todos os sistemas de água e esgoto.",
      },
      {
        question: "Trabalham com seguradoras?",
        answer: "Sim, podemos trabalhar diretamente com seguradoras em caso de sinistros cobertos por seguro. Fornecemos toda a documentação necessária.",
      },
      {
        question: "Fazem reparações em prédios e condomínios?",
        answer: "Sim, trabalhamos tanto com particulares como com condomínios, empresas e instituições. Temos experiência em trabalhos de grande dimensão.",
      },
      {
        question: "Como posso prevenir entupimentos?",
        answer: "Evite deitar gorduras, restos de comida, cabelos e objetos sólidos pelo ralo. Use filtros nas pias e ralos. Faça limpeza regular com produtos adequados. Se tiver dúvidas, podemos dar-lhe conselhos personalizados.",
      },
      {
        question: "Fazem substituição de canalização antiga?",
        answer: "Sim, fazemos substituição completa ou parcial de canalizações antigas por tubagens modernas. Avaliamos o estado da canalização e apresentamos as melhores soluções.",
      },
    ];
  } else {
    // FAQs pour électricité
    return [
      {
        question: "Quanto custa uma intervenção de urgência?",
        answer: "O custo varia conforme o tipo de problema e a complexidade da reparação. Fazemos sempre uma estimativa sem compromisso antes de iniciar qualquer trabalho. Em caso de urgência, deslocamo-nos imediatamente e apresentamos preços competitivos e transparentes.",
      },
      {
        question: "Atendem urgências 24 horas?",
        answer: "Sim, estamos disponíveis 24 horas por dia, 7 dias por semana, incluindo fins-de-semana e feriados. Basta ligar ou enviar mensagem no WhatsApp.",
      },
      {
        question: "Quanto tempo demoram a chegar?",
        answer: "Normalmente chegamos em 30-40 minutos desde Macedo de Cavaleiros para as principais localidades do distrito de Bragança. O tempo pode variar conforme a distância e as condições de trânsito.",
      },
      {
        question: "O que fazer em caso de curto-circuito?",
        answer: "Desligue imediatamente o disjuntor geral do quadro elétrico. Não tente mexer em fios ou equipamentos. Ligue-nos para intervenção urgente. Nunca toque em fios expostos ou equipamentos molhados.",
      },
      {
        question: "Têm garantia nos trabalhos realizados?",
        answer: "Sim, todos os nossos trabalhos têm garantia de 12 meses por escrito. Se houver qualquer problema relacionado com a nossa intervenção, voltamos sem custos adicionais.",
      },
      {
        question: "Fazem certificação elétrica?",
        answer: "Sim, fazemos certificação elétrica de instalações novas e existentes. A certificação é obrigatória para ligação à rede elétrica e em caso de venda ou arrendamento de imóveis.",
      },
      {
        question: "É necessário marcar hora?",
        answer: "Para urgências não é necessário marcar. Atendemos imediatamente. Para trabalhos programados (instalações, remodelações), recomendamos agendar para garantir disponibilidade.",
      },
      {
        question: "Aceitam que formas de pagamento?",
        answer: "Aceitamos dinheiro, transferência bancária e MB Way. O pagamento é feito após a conclusão do trabalho e sua aprovação.",
      },
      {
        question: "Fazem instalação de quadros elétricos?",
        answer: "Sim, fazemos instalação, substituição e modernização de quadros elétricos. Utilizamos equipamentos certificados e cumprimos todas as normas de segurança.",
      },
      {
        question: "Atendem em que localidades?",
        answer: "Atendemos em todo o distrito de Bragança, incluindo Bragança, Macedo de Cavaleiros, Mirandela, Miranda do Douro, Vinhais, Mogadouro e todas as vilas e aldeias da região.",
      },
      {
        question: "São certificados?",
        answer: "Sim, somos eletricistas certificados e experientes. Cumprimos todas as normas técnicas e de segurança exigidas, incluindo o RTIEBT (Regulamento Técnico de Instalações Elétricas).",
      },
      {
        question: "Os preços são competitivos?",
        answer: "Sim, oferecemos preços competitivos e transparentes, sem compromisso. Apresentamos sempre uma estimativa clara antes de iniciar qualquer trabalho.",
      },
      {
        question: "Porque é que o disjuntor salta constantemente?",
        answer: "Pode haver várias causas: sobrecarga na instalação, curto-circuito, fuga de corrente, disjuntor defeituoso ou instalação elétrica inadequada. Fazemos diagnóstico completo e resolvemos o problema.",
      },
      {
        question: "Fazem instalação de tomadas e interruptores?",
        answer: "Sim, fazemos instalação, substituição e reparação de tomadas, interruptores, fichas e todo o tipo de pontos elétricos.",
      },
      {
        question: "Podem aumentar a potência elétrica da minha casa?",
        answer: "Sim, fazemos avaliação da instalação e, se necessário, fazemos as alterações para suportar maior potência. Também tratamos dos procedimentos junto da distribuidora de energia.",
      },
      {
        question: "Fazem instalação de iluminação LED?",
        answer: "Sim, fazemos instalação de todo o tipo de iluminação, incluindo LED, focos embutidos, candeeiros, luminárias e sistemas de iluminação inteligente.",
      },
      {
        question: "Trabalham com seguradoras?",
        answer: "Sim, podemos trabalhar diretamente com seguradoras em caso de sinistros cobertos por seguro. Fornecemos toda a documentação necessária.",
      },
      {
        question: "Fazem reparações em prédios e condomínios?",
        answer: "Sim, trabalhamos tanto com particulares como com condomínios, empresas e instituições. Temos experiência em trabalhos de grande dimensão.",
      },
      {
        question: "Como posso prevenir problemas elétricos?",
        answer: "Faça revisões periódicas da instalação, não sobrecarregue tomadas, substitua fios e equipamentos antigos, instale disjuntores diferenciais e evite gambiarras. Podemos fazer uma inspeção preventiva.",
      },
      {
        question: "Fazem instalação elétrica completa?",
        answer: "Sim, fazemos instalação elétrica completa em casas novas, remodelações e ampliações. Desde o projeto até à certificação final.",
      },
    ];
  }
}
