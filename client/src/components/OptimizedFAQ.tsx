import React, { useState } from 'react';

const faqItems = [
  {
    question: "Quanto custa uma instalação elétrica completa?",
    answer: "O custo varia conforme a dimensão do projeto. Fazemos orçamento gratuito e sem compromisso após visita ao local. Para uma casa média, o valor pode variar entre €800 e €2.500, dependendo da complexidade e materiais necessários."
  },
  {
    question: "Fazem certificação elétrica para venda de imóvel?",
    answer: "Sim, realizamos inspeções e emitimos certificações elétricas obrigatórias para venda e arrendamento de imóveis. O certificado é válido e registado, cumprindo todas as normas de segurança portuguesas."
  },
  {
    question: "Como sei se o meu quadro elétrico precisa de ser substituído?",
    answer: "Se tem disjuntores que disparam frequentemente, fusíveis antigos, o quadro tem mais de 20 anos, ou apresenta sinais de sobreaquecimento, é aconselhável uma inspeção. Podemos avaliar e recomendar a substituição se necessário."
  },
  {
    question: "Fazem urgências elétricas?",
    answer: "Sim, estamos disponíveis para urgências elétricas 24 horas por dia, 7 dias por semana, em toda a região de Trás-os-Montes. Atendemos curtos-circuitos, falta de energia, disjuntores que não armam e outras emergências."
  },
  {
    question: "Quais são as zonas que servem?",
    answer: "Servimos toda a região de Trás-os-Montes: Vila Real, Bragança, Chaves, Mirandela, Macedo de Cavaleiros, Lamego, Régua, Montalegre, Valpaços, Mogadouro, Torre de Moncorvo, Alfândega da Fé e arredores."
  }
];

const OptimizedFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white"
          itemScope
          itemType="https://schema.org/Question"
        >
          <button
            className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <h3 
              className="text-lg font-semibold text-gray-900"
              itemProp="name"
            >
              {item.question}
            </h3>
            <span className="text-amber-600 text-xl">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          
          {openIndex === index && (
            <div 
              className="px-6 pb-6 pt-2 border-t border-gray-100"
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <div 
                className="text-gray-600 leading-relaxed"
                itemProp="text"
              >
                {item.answer}
              </div>
              
              {/* Informations supplémentaires */}
              {index === 0 && (
                <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800">
                    <strong>💡 Dica:</strong> Para orçamento preciso, agende uma visita gratuita. Trabalhamos com marcas como Schneider, Legrand e Siemens.
                  </p>
                </div>
              )}
              
              {index === 3 && (
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-800">
                    <strong>⚠️ Emergência:</strong> Em caso de cheiro a queimado, faíscas ou choques elétricos, desligue o quadro geral e ligue-nos imediatamente.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
      
      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
      
      {/* Section contact supplémentaire */}
      <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-white rounded-2xl border border-amber-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Não encontrou resposta para sua dúvida?
        </h3>
        <p className="text-gray-600 mb-4">
          Entre em contacto connosco. Respondemos em menos de 30 minutos durante o horário comercial.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:[TÉLÉPHONE]"
            className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <span>📞</span>
            <span>Ligar Agora</span>
          </a>
          <a
            href="https://wa.me/[WHATSAPP]"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OptimizedFAQ;