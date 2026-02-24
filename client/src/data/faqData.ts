/**
 * FAQ Data for Staff-Seekers (Eletricista)
 * 
 * 20 questions optimisées SEO
 * Ciblant les mots-clés longue traîne les plus recherchés
 */

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const STAFF_SEEKERS_FAQ: FAQItem[] = [
  {
    id: 1,
    question: "Quanto custa chamar um eletricista em Bragança?",
    answer: "O custo de chamar um eletricista em Bragança varia consoante o tipo de intervenção. Para uma visita de diagnóstico, o preço médio é de 40€ a 55€. Intervenções simples como substituição de tomadas ou interruptores começam em 45€, enquanto reparações de curtos-circuitos podem variar entre 65€ e 150€ dependendo da complexidade. Substituição de quadros elétricos custa entre 350€ e 800€ (materiais incluídos). Certificação CERTIEL completa varia entre 180€ e 350€. Trabalhamos com orçamentos gratuitos e transparentes - contacte-nos para um orçamento personalizado sem compromisso.",
    category: "Preços"
  },
  {
    id: 2,
    question: "Como identificar um curto-circuito?",
    answer: "Sinais comuns de curto-circuito incluem: disjuntores que saltam frequentemente, cheiro a queimado nas tomadas ou interruptores, tomadas ou interruptores quentes ao toque, luzes que piscam ou diminuem de intensidade, faíscas visíveis ao ligar aparelhos, ou fusíveis queimados repetidamente. Se detetar algum destes sinais, desligue imediatamente o disjuntor geral e contacte um eletricista certificado. Não tente reparar sozinho - a eletricidade mal reparada pode causar incêndios ou choques elétricos graves. Utilizamos equipamento de diagnóstico profissional (multímetros, detetores de tensão) para identificar a origem exata do problema.",
    category: "Diagnóstico"
  },
  {
    id: 3,
    question: "O que fazer em caso de avaria elétrica urgente?",
    answer: "Em caso de avaria elétrica urgente, siga estes passos imediatamente: 1) Desligue o disjuntor geral no quadro elétrico, 2) Desligue todos os aparelhos elétricos das tomadas, 3) Se houver cheiro a queimado ou fumo, evacue a casa e ligue para os bombeiros (112), 4) Contacte-nos imediatamente pelo 932 321 892 ou WhatsApp - estamos disponíveis 24/7 para emergências. Tempo médio de resposta: 15-30 minutos em Bragança e arredores. Nunca tente reparar problemas elétricos sozinho sem formação adequada - a eletricidade pode ser fatal mesmo com tensões aparentemente baixas.",
    category: "Emergências"
  },
  {
    id: 4,
    question: "Quanto tempo demora a substituição de um quadro elétrico?",
    answer: "A substituição completa de um quadro elétrico demora entre 4 a 8 horas, dependendo da complexidade da instalação e do número de circuitos. Quadros simples (6-8 circuitos) podem ser substituídos em 4-5 horas, enquanto quadros mais complexos (12-16 circuitos) podem levar 6-8 horas. O processo inclui: desmontagem do quadro antigo, verificação de todos os circuitos, instalação do novo quadro com disjuntores diferenciais, teste de todos os circuitos, e certificação final. Durante a intervenção, a eletricidade fica desligada - recomendamos planear para um período sem energia. Trabalhamos de forma eficiente para minimizar o tempo de interrupção.",
    category: "Serviços"
  },
  {
    id: 5,
    question: "Como prevenir problemas elétricos?",
    answer: "Para prevenir problemas elétricos, siga estas práticas: não sobrecarregue as tomadas com múltiplos adaptadores, verifique regularmente se os cabos estão em bom estado (sem fios expostos ou danificados), faça manutenção anual do quadro elétrico por profissional certificado, substitua tomadas e interruptores com mais de 15 anos, instale disjuntores diferenciais em todos os circuitos, evite usar extensões como solução permanente, e certifique-se que a potência contratada é adequada ao consumo real. Em casas com mais de 25 anos, recomendamos inspeção completa a cada 5 anos. Estas medidas reduzem em 80% o risco de avarias graves.",
    category: "Manutenção"
  },
  {
    id: 6,
    question: "Qual a vida útil de uma instalação elétrica?",
    answer: "A vida útil média de uma instalação elétrica é de 25 a 40 anos, dependendo da qualidade dos materiais, da execução inicial e da manutenção realizada. Instalações antigas (anteriores a 1990) geralmente precisam de renovação devido a normas de segurança desatualizadas. Sinais de que precisa renovar: instalação com mais de 30 anos, tomadas de 2 pinos (sem terra), quadro com fusíveis em vez de disjuntores, fiação de alumínio (em vez de cobre), ou avarias frequentes. Renovação completa garante segurança e permite instalar mais tomadas e circuitos para aparelhos modernos. Oferecemos diagnóstico gratuito para avaliar o estado da sua instalação.",
    category: "Equipamentos"
  },
  {
    id: 7,
    question: "É obrigatório ter certificação CERTIEL?",
    answer: "A certificação CERTIEL é obrigatória em Portugal para: novas instalações elétricas, alterações significativas em instalações existentes, venda de imóveis (o certificado deve ser entregue ao comprador), e para efeitos de seguro (muitas seguradoras exigem certificado válido). O certificado atesta que a instalação cumpre as normas de segurança em vigor (Regulamento de Segurança de Instalações de Utilização de Energia Elétrica). Sem certificado válido, pode ter dificuldades em vender a casa, o seguro pode recusar cobertura em caso de sinistro, e arrisca multas em caso de inspeção. Emitimos certificados CERTIEL válidos em todo o território nacional.",
    category: "Legal"
  },
  {
    id: 8,
    question: "Porque é que o disjuntor salta frequentemente?",
    answer: "Um disjuntor que salta frequentemente indica normalmente: sobrecarga no circuito (muitos aparelhos ligados simultaneamente), curto-circuito em algum ponto da instalação, disjuntor defeituoso, ou fiação danificada. Para diagnosticar, desligue todos os aparelhos do circuito afetado e tente religar o disjuntor. Se não saltar, vá ligando os aparelhos um a um até identificar qual causa o problema. Se saltar mesmo com tudo desligado, há provavelmente um curto na instalação. Não substitua o disjuntor por um de amperagem maior sem verificar a causa - isso pode sobrecarregar a fiação e causar incêndio. Contacte-nos para diagnóstico profissional.",
    category: "Problemas Comuns"
  },
  {
    id: 9,
    question: "Quanto custa instalar iluminação LED?",
    answer: "O custo de instalar iluminação LED varia conforme o tipo e número de pontos de luz. Para substituição simples de lâmpadas (sem alteração de instalação), o custo é apenas das lâmpadas (5€-20€ cada). Instalação de novos pontos de luz: spots embutidos 35€-50€ cada, pendentes 45€-70€ cada, apliques 40€-60€ cada, fita LED 25€-40€ por metro. Projeto completo de iluminação (casa média 100m²) custa entre 800€ e 2000€ incluindo materiais e mão-de-obra. A poupança energética com LED é de 70%-85% comparado com halogéneo ou incandescente, com retorno do investimento em 1-2 anos. Oferecemos projeto de iluminação gratuito com orçamento.",
    category: "Preços"
  },
  {
    id: 10,
    question: "Como aumentar a potência contratada?",
    answer: "Para aumentar a potência contratada, é necessário: 1) Verificar se o contador e quadro elétrico suportam a nova potência, 2) Solicitar aumento à distribuidora (EDP Distribuição), 3) Pagar os custos de aumento (variam consoante o aumento), 4) Aguardar a visita técnica da distribuidora. O processo completo demora 2-4 semanas. Custos: aumento de 3.45kVA para 6.9kVA custa aproximadamente 150€-200€, de 6.9kVA para 10.35kVA custa 250€-350€. Se o quadro atual não suportar a nova potência, precisa de substituição (350€-800€). Aconselhamos antes analisar o consumo real - muitas vezes otimizar a instalação existente resolve o problema sem necessidade de aumento.",
    category: "Serviços"
  },
  {
    id: 11,
    question: "É seguro fazer obras com eletricidade ligada?",
    answer: "NUNCA faça obras (furos em paredes, demolições, pintura) sem antes verificar a localização exata dos cabos elétricos. Cabos elétricos enterrados em paredes podem ser atingidos por brocas ou martelos, causando curtos-circuitos, incêndios ou choques elétricos fatais. Antes de qualquer obra: desligue a eletricidade no quadro geral, utilize detetor de cabos profissional para mapear a instalação, ou consulte os planos da casa se existirem. Em casas antigas, os cabos podem não seguir percursos lógicos. Oferecemos serviço de deteção de cabos antes de obras - identificamos todos os cabos elétricos, de água e gás, garantindo segurança total durante as intervenções.",
    category: "Segurança"
  },
  {
    id: 12,
    question: "Qual a diferença entre disjuntor e diferencial?",
    answer: "Disjuntor (magnético-térmico) protege contra sobrecargas e curtos-circuitos - desliga quando a corrente excede o valor nominal do circuito. Diferencial (disjuntor diferencial) protege contra choques elétricos - desliga quando deteta fuga de corrente para terra (por exemplo, se alguém tocar num fio desencapado). Uma instalação segura deve ter: disjuntores em todos os circuitos (iluminação, tomadas, etc.) E diferenciais (normalmente 2-3 para dividir a instalação). Instalações antigas podem não ter diferenciais, o que é extremamente perigoso. Na substituição de quadros, instalamos sempre ambos os tipos de proteção, cumprindo as normas mais recentes de segurança.",
    category: "Técnico"
  },
  {
    id: 13,
    question: "Como economizar na fatura da luz?",
    answer: "Para economizar na fatura da luz: substitua todas as lâmpadas por LED (poupança 70%-85%), desligue completamente os aparelhos em standby (usam 5%-15% do consumo), utilize programadores para aquecimento e ar condicionado, instale tomadas com temporizador para equipamentos menos usados, escolha eletrodomésticos classe A+++ (poupança 30%-50%), faça manutenção regular do quadro elétrico (mau contacto aumenta consumo), e analise a potência contratada (muitas casas pagam por potência superior à necessária). Uma casa média pode economizar 200€-400€/ano com estas medidas. Oferecemos auditoria energética gratuita que identifica as maiores oportunidades de poupança na sua casa.",
    category: "Economia"
  },
  {
    id: 14,
    question: "Quando trocar as tomadas e interruptores?",
    answer: "Deve trocar tomadas e interruptores quando: têm mais de 15-20 anos, estão soltos ou não fixam bem as fichas, apresentam fissuras ou descoloração, estão quentes ao toque durante uso, faíscam ao ligar aparelhos, ou não têm tomada de terra (apenas 2 pinos). Tomadas antigas podem causar maus contactos que aumentam consumo, sobreaquecem e podem causar incêndios. A substituição é rápida (15-30 minutos por ponto) e relativamente económica (45€-65€ por tomada/interruptor incluindo material). Recomendamos substituição completa em casas com mais de 20 anos, optando por modelos modernos com maior segurança e design atualizado.",
    category: "Manutenção"
  },
  {
    id: 15,
    question: "É possível ter tomadas USB na parede?",
    answer: "Sim, é perfeitamente possível e recomendável instalar tomadas com portas USB integradas. Estas tomadas substituem as tomadas normais e permitem carregar telemóveis, tablets e outros dispositivos diretamente sem adaptadores. Vantagens: mais conveniente (não ocupa a tomada normal), carregamento mais rápido que muitos adaptadores, estética mais limpa (sem cabos de carregador visíveis), e segurança (proteção integrada contra sobrecarga). Custo: 25€-40€ por tomada USB (material) mais 45€-65€ de mão-de-obra por ponto. Ideal para quartos, salas de estar, escritórios e zonas de convívio. Oferecemos instalação com garantia de 2 anos.",
    category: "Modernização"
  },
  {
    id: 16,
    question: "Como funciona a domótica básica?",
    answer: "Domótica básica permite controlar a iluminação, tomadas, aquecimento e persianas através do telemóvel ou comandos de voz. Sistema mínimo inclui: interruptores inteligentes (substituem os normais), tomadas inteligentes (controlam aparelhos), e hub central (conecta tudo à internet). Vantagens: poupança energética (desliga automaticamente quando não está ninguém), conveniência (controlo à distância), segurança (simula presença quando está fora), e conforto (cenários de iluminação pré-programados). Custo para casa média: 800€-1500€. Comece com sistema básico (iluminação da sala e quarto) por 300€-500€ e expanda gradualmente. Instalamos sistemas compatíveis com Alexa, Google Home e Apple HomeKit.",
    category: "Modernização"
  },
  {
    id: 17,
    question: "Quais os sinais de fiação defeituosa?",
    answer: "Sinais de fiação defeituosa incluem: luzes que piscam ou diminuem de intensidade, tomadas ou interruptores quentes ao toque, cheiro a queimado (especialmente plástico queimado), disjuntores que saltam sem motivo aparente, tomadas que não funcionam intermitentemente, zumbidos ou estalidos nas tomadas/paredes, ou choques leves ao tocar em aparelhos metálicos. Estes sinais indicam normalmente: fios desencapados, conexões soltas, sobrecarga crónica, ou isolamento degradado. Fiação defeituosa é a principal causa de incêndios elétricos em Portugal. Se detetar algum destes sinais, desligue a eletricidade no quadro geral e contacte-nos imediatamente para inspeção.",
    category: "Diagnóstico"
  },
  {
    id: 18,
    question: "É necessário aterramento em todas as tomadas?",
    answer: "Sim, desde 2004 todas as tomadas novas em Portugal devem ter ligação de terra (aterramento). O fio de terra (verde/amarelo) desvia correntes de fuga para o solo, protegendo contra choques elétricos. Tomadas sem terra (apenas 2 pinos) são perigosas especialmente em casas de banho, cozinhas e zonas exteriores. Se a sua casa tem tomadas antigas sem terra, deve: instalar tomadas com terra (mesmo que a instalação ainda não tenha fio de terra - prepara para futura renovação), ou melhor, renovar completamente a instalação para incluir circuito de terra em todas as tomadas. Em casas com mais de 20 anos, recomendamos estudo completo para avaliar a necessidade de renovação da instalação de terra.",
    category: "Segurança"
  },
  {
    id: 19,
    question: "Como escolher um eletricista certificado?",
    answer: "Para escolher um eletricista certificado, verifique: 1) Certificação CERTIEL ativa (pode verificar