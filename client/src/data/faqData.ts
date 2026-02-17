/**
 * FAQ Data for Norte-Reparos and Staff-Seekers
 * 
 * 40 questions optimisées SEO (20 par site)
 * Ciblant les mots-clés longue traîne les plus recherchés
 */

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const NORTE_REPAROS_FAQ: FAQItem[] = [
  {
    id: 1,
    question: "Quanto custa chamar um canalizador em Bragança?",
    answer: "O custo de chamar um canalizador em Bragança varia consoante o tipo de intervenção. Para uma visita de diagnóstico, o preço médio é de 45€ a 60€. Intervenções simples como desentupimentos começam em 65€, enquanto reparações de fugas podem variar entre 80€ e 200€ dependendo da complexidade. Instalações de esquentadores custam entre 150€ e 400€ (sem incluir o equipamento). Trabalhamos com orçamentos gratuitos e transparentes - contacte-nos para um orçamento personalizado sem compromisso.",
    category: "Preços"
  },
  {
    id: 2,
    question: "Como detetar uma fuga de água escondida?",
    answer: "Existem vários sinais que indicam uma fuga de água escondida: aumento inexplicável na fatura da água (mais de 20% sem mudança de hábitos), manchas de humidade nas paredes ou tetos, som de água a correr quando todas as torneiras estão fechadas, cheiro a mofo persistente, ou contador de água que continua a girar mesmo com tudo fechado. Para confirmar, feche todas as torneiras e registe o contador. Após 2 horas sem usar água, verifique novamente - se o contador mudou, há uma fuga. Utilizamos equipamento termográfico profissional para detetar fugas sem partir paredes, poupando tempo e dinheiro na reparação.",
    category: "Diagnóstico"
  },
  {
    id: 3,
    question: "O que fazer em caso de fuga de água urgente?",
    answer: "Em caso de fuga urgente, siga estes passos imediatamente: 1) Feche a torneira de corte geral da água (normalmente junto ao contador), 2) Desligue a eletricidade se a água estiver perto de tomadas ou quadro elétrico, 3) Coloque baldes ou toalhas para conter a água, 4) Contacte-nos imediatamente pelo 928 484 451 ou WhatsApp - estamos disponíveis 24/7 para emergências. Tempo médio de resposta: 15-30 minutos em Bragança e arredores. Não tente reparações provisórias com fita adesiva ou cola, pois podem agravar o problema e dificultar a reparação definitiva.",
    category: "Emergências"
  },
  {
    id: 4,
    question: "Quanto tempo demora um desentupimento?",
    answer: "O tempo de desentupimento varia conforme a gravidade e localização da obstrução. Desentupimentos simples de sanitas ou lavatórios levam entre 30 a 60 minutos. Obstruções em canalizações principais podem demorar 1 a 3 horas. Casos complexos que requerem equipamento especializado (câmara de inspeção, máquina de desentupimento de alta pressão) podem levar até 4 horas. Na maioria dos casos (85%), resolvemos o problema na primeira visita. Utilizamos equipamento profissional que garante desentupimento completo e duradouro, evitando que o problema volte em poucos dias.",
    category: "Serviços"
  },
  {
    id: 5,
    question: "Como prevenir entupimentos nas canalizações?",
    answer: "Para prevenir entupimentos, siga estas práticas: nunca deite gordura pelo ralo (deixe solidificar e deite no lixo), use ralos com rede para apanhar cabelos e resíduos, evite deitar restos de comida pela pia, não deite produtos de higiene ou toalhitas pela sanita (mesmo as ditas 'biodegradáveis'), faça limpeza preventiva mensal com água a ferver e bicarbonato de sódio, e realize manutenção profissional anual das canalizações. Em cozinhas de restaurantes ou casas com uso intensivo, recomendamos limpeza profissional trimestral. Estas medidas reduzem em 90% o risco de entupimentos graves.",
    category: "Manutenção"
  },
  {
    id: 6,
    question: "Qual a vida útil de um esquentador?",
    answer: "A vida útil média de um esquentador é de 10 a 15 anos, dependendo da qualidade do equipamento, frequência de uso e manutenção realizada. Esquentadores a gás tendem a durar mais (12-15 anos) que os elétricos (8-12 anos). Sinais de que precisa substituir: idade superior a 12 anos, reparações frequentes (mais de 2 por ano), água que não aquece uniformemente, ruídos estranhos, consumo de gás ou eletricidade aumentado, ou fugas de água recorrentes. Manutenção anual profissional pode prolongar a vida útil em 3-5 anos. Oferecemos serviço de manutenção preventiva que inclui limpeza, verificação de segurança e ajustes.",
    category: "Equipamentos"
  },
  {
    id: 7,
    question: "Esquentador a gás ou elétrico - qual escolher?",
    answer: "A escolha depende das suas necessidades e instalação existente. Esquentador a gás: mais económico no uso diário (60% menos custos energéticos), aquece água instantaneamente, ideal para famílias numerosas, requer ventilação adequada e manutenção anual obrigatória. Esquentador elétrico: instalação mais simples e barata, não requer ventilação especial, manutenção mínima, mas custos de eletricidade mais elevados (especialmente com tarifa simples). Para uma família de 4 pessoas em Bragança, o esquentador a gás amortiza o investimento inicial em 2-3 anos. Analisamos a sua situação específica e recomendamos a melhor opção sem compromisso.",
    category: "Equipamentos"
  },
  {
    id: 8,
    question: "Como economizar água em casa?",
    answer: "Pode reduzir o consumo de água em 30-50% com estas medidas: instale redutores de caudal nas torneiras (economia de 40%), substitua autoclismos antigos por modelos de dupla descarga (economia de 60% no autoclismo), repare fugas imediatamente (uma torneira a pingar desperdiça 25 litros/dia), tome duches em vez de banhos de imersão (economia de 100 litros por banho), instale torneiras termostáticas (evitam desperdício enquanto espera pela temperatura ideal), e reutilize água da chuva para rega. Uma família média em Bragança pode poupar 50-80€/ano na fatura da água com estas medidas simples. Fazemos auditorias gratuitas de consumo de água.",
    category: "Poupança"
  },
  {
    id: 9,
    question: "O que fazer se a água sai amarela ou castanha?",
    answer: "Água amarela ou castanha geralmente indica ferrugem nas canalizações. Causas comuns: canalizações antigas de ferro (mais de 30 anos), trabalhos na rede pública que revolveram sedimentos, ou corrosão acelerada por água muito ácida. Primeiro, deixe a água correr 5-10 minutos - se clarear, o problema é temporário da rede pública. Se persistir, o problema está nas suas canalizações. Água com ferrugem não é tóxica mas mancha roupa e louça, e indica que as canalizações precisam substituição em breve. Recomendamos análise profissional e orçamento para substituição gradual das canalizações mais afetadas. Ignorar o problema pode levar a fugas graves.",
    category: "Problemas Comuns"
  },
  {
    id: 10,
    question: "Como aumentar a pressão da água?",
    answer: "Baixa pressão de água pode ter várias causas: calcário acumulado em torneiras e chuveiros (limpe com vinagre), válvula de corte parcialmente fechada (verifique se está totalmente aberta), canalizações entupidas ou com diâmetro inadequado, ou pressão baixa da rede pública. Soluções: limpeza de arejadores e chuveiros, substituição de canalizações antigas por diâmetros maiores, ou instalação de bomba pressurizadora (150-400€). Em Bragança, algumas zonas altas têm pressão naturalmente baixa - nesses casos, uma bomba pressurizadora resolve definitivamente. Fazemos diagnóstico gratuito e recomendamos a solução mais económica para o seu caso específico.",
    category: "Problemas Comuns"
  },
  {
    id: 11,
    question: "Preciso de licença para trocar o esquentador?",
    answer: "Sim, a substituição de esquentador a gás requer certificação obrigatória por técnico certificado. Após a instalação, emitimos certificado de conformidade que deve ser enviado à Câmara Municipal no prazo de 30 dias. Para esquentadores elétricos, não é obrigatória licença mas recomendamos sempre instalação profissional por questões de segurança e garantia. Trabalhamos apenas com técnicos certificados e tratamos de toda a documentação sem custos adicionais. A falta de certificação pode invalidar seguros e causar problemas na venda do imóvel. Instalação completa com certificação: a partir de 180€ (sem equipamento).",
    category: "Legislação"
  },
  {
    id: 12,
    question: "O que é uma válvula de segurança e para que serve?",
    answer: "A válvula de segurança (ou válvula de alívio) é um dispositivo obrigatório em esquentadores e termoacumuladores que evita explosões por excesso de pressão. Funciona libertando água automaticamente quando a pressão interna ultrapassa o limite seguro. É normal ver algumas gotas a pingar ocasionalmente - significa que está a funcionar corretamente. Sinais de problema: gotejamento constante (válvula danificada), nenhum gotejamento em meses (válvula entupida ou bloqueada), ou ruídos de assobio. Válvulas defeituosas são perigosas e devem ser substituídas imediatamente. Verificamos e substituímos válvulas de segurança por 35-50€. Nunca bloqueie ou remova uma válvula de segurança.",
    category: "Segurança"
  },
  {
    id: 13,
    question: "Como saber se tenho calcário nas canalizações?",
    answer: "Sinais de calcário acumulado: manchas brancas em torneiras e chuveiros, pressão de água reduzida progressivamente, água quente demora mais a chegar, ruídos no esquentador ao aquecer, consumo de gás aumentado, ou resistências de termoacumuladores que queimam frequentemente. Bragança tem água moderadamente dura (150-200 mg/L de calcário), o que causa acumulação em 8-12 anos. Soluções: descalcificação química das canalizações (200-400€), instalação de sistema anti-calcário (300-600€), ou substituição de troços mais afetados. Prevenção: manutenção anual do esquentador e limpeza regular de arejadores. Fazemos análise gratuita e recomendamos a solução mais adequada.",
    category: "Manutenção"
  },
  {
    id: 14,
    question: "Quanto custa trocar canalizações antigas?",
    answer: "O custo de substituição de canalizações varia muito conforme a extensão e acessibilidade. Valores médios em Bragança: canalização de casa de banho completa (3-4 metros): 400-800€, cozinha completa: 350-600€, apartamento T2 completo: 2.000-4.000€, moradia T3: 4.000-8.000€. Fatores que influenciam: necessidade de partir paredes, tipo de material (PPR, PEX ou cobre), número de pontos de água, e dificuldade de acesso. Podemos fazer substituição faseada para distribuir o investimento. Canalizações modernas em PPR ou PEX duram 50+ anos sem problemas. Orçamento gratuito e detalhado sem compromisso.",
    category: "Preços"
  },
  {
    id: 15,
    question: "O que fazer se o autoclismo não para de correr?",
    answer: "Autoclismo que não para de correr desperdiça 200-400 litros de água por dia (60-120€/ano na fatura). Causas comuns: boia desregulada ou furada, válvula de descarga gasta, corrente ou haste partida, ou calcário na válvula. Soluções imediatas: ajuste a boia para nível mais baixo, limpe a válvula com vinagre, ou substitua a borracha da válvula (5€ em qualquer loja). Se o problema persistir, pode precisar de kit completo de autoclismo (25-40€ + instalação 40-60€). Reparamos 90% dos casos em 30 minutos. Autoclismos com mais de 15 anos devem ser substituídos por modelos de dupla descarga que poupam 60% de água.",
    category: "Reparações"
  },
  {
    id: 16,
    question: "Como descongelar canos no inverno?",
    answer: "Em Bragança, temperaturas abaixo de -5°C podem congelar canalizações exteriores ou em zonas não aquecidas. Sinais: torneira não sai água ou sai apenas um fio. Nunca use maçarico ou água a ferver - pode partir o cano. Método seguro: abra a torneira, aqueça gradualmente com secador de cabelo ou toalhas quentes, começando pela torneira e avançando para trás, ou use aquecedor ambiente na divisão. Prevenção: isole canalizações exteriores com espuma térmica (5€/metro), deixe torneiras a pingar levemente em noites muito frias, e mantenha aquecimento mínimo em divisões com canalizações. Instalamos isolamento térmico profissional: 15-25€/metro linear.",
    category: "Inverno"
  },
  {
    id: 17,
    question: "Preciso de certificação para instalação de gás?",
    answer: "Sim, qualquer instalação ou alteração de gás (canalizado ou botija) requer obrigatoriamente técnico certificado e emissão de certificado de conformidade. Isto inclui: instalação de esquentador a gás, caldeira, fogão, ou alteração de tubagens de gás. O certificado deve ser enviado à entidade distribuidora (se gás canalizado) ou guardado para inspeções. Instalações sem certificação são ilegais, perigosas, e invalidam seguros. Todos os o meu serviço são certificados e emitimos certificação incluída no preço do serviço. Penalizações por instalação ilegal: multas de 250€ a 3.740€ + responsabilidade civil em caso de acidente. Regularizamos instalações antigas sem certificação.",
    category: "Legislação"
  },
  {
    id: 18,
    question: "O que é uma bomba pressurizadora?",
    answer: "Bomba pressurizadora é um equipamento que aumenta a pressão da água em casas com pressão insuficiente (comum em zonas altas de Bragança). Funciona automaticamente quando abre uma torneira, aumentando a pressão para níveis confortáveis (2-3 bar). Indicações: chuveiro com pouca pressão, máquina de lavar que não enche adequadamente, ou água que não chega ao 2º andar. Tipos: bomba simples (150-250€), bomba com depósito acumulador (300-500€), ou sistema completo com pressostato (400-700€). Instalação: 100-200€. Consumo elétrico: 50-100W quando ativa. Silenciosas e duráveis (10-15 anos). Analisamos a sua situação e recomendamos o modelo adequado.",
    category: "Equipamentos"
  },
  {
    id: 19,
    question: "Como escolher um esquentador adequado?",
    answer: "A escolha do esquentador depende de: número de pessoas (1-2 pessoas: 11L/min, 3-4 pessoas: 14L/min, 5+ pessoas: 17L/min), número de casas de banho (2+ casas de banho: mínimo 14L/min), tipo de energia disponível (gás natural, butano/propano, ou elétrico), e espaço de instalação (ventilação adequada para gás). Em Bragança, para uma família de 4 pessoas, recomendamos esquentador a gás de 14L/min (300-600€). Marcas recomendadas: Vulcano, Junkers, Roca (boa relação qualidade/preço). Evite modelos muito baratos (<200€) - duram metade e consomem mais. Fazemos análise gratuita das suas necessidades e recomendamos o modelo ideal.",
    category: "Equipamentos"
  },
  {
    id: 20,
    question: "Quanto custa instalar uma casa de banho nova?",
    answer: "Instalação completa de casa de banho nova em Bragança: casa de banho simples (3m²): 2.500-4.000€, casa de banho média (5m²): 4.000-7.000€, casa de banho premium (7m²): 7.000-12.000€. Inclui: canalizações de água e esgoto, louças sanitárias (sanita, lavatório, base de duche), torneiras, azulejos e pavimento, iluminação básica. Não inclui: equipamentos premium (banheira hidromassagem, móveis por medida), demolição de casa de banho existente (+500-1.000€), ou alterações estruturais. Prazo: 2-3 semanas. Trabalhamos com orçamentos detalhados e transparentes. Possibilidade de pagamento faseado. Garantia de 2 anos em mão de obra.",
    category: "Projetos"
  }
];

export const STAFF_SEEKERS_FAQ: FAQItem[] = [
  {
    id: 1,
    question: "Quanto custa chamar um eletricista em Bragança?",
    answer: "O custo de chamar um eletricista em Bragança varia conforme o tipo de intervenção. Para uma visita de diagnóstico, o preço médio é de 40€ a 55€. Reparações simples como substituição de tomadas ou interruptores começam em 35€, enquanto instalações de quadros elétricos variam entre 200€ e 600€ dependendo da complexidade. Certificações elétricas DGEG custam entre 150€ e 400€ conforme o tipo de instalação. Trabalhamos com orçamentos gratuitos e transparentes - contacte-nos para um orçamento personalizado sem compromisso. Urgências 24/7 disponíveis com acréscimo de 30% em horário noturno.",
    category: "Preços"
  },
  {
    id: 2,
    question: "Quanto tempo demora uma certificação elétrica?",
    answer: "Uma certificação elétrica DGEG demora entre 3 a 10 dias úteis, dependendo da complexidade da instalação. O processo inclui: inspeção técnica da instalação (2-3 horas), elaboração do termo de responsabilidade e esquemas elétricos (1-2 dias), submissão na plataforma DGEG (imediato), e emissão do certificado pela DGEG (2-5 dias úteis). Para instalações simples (apartamentos T1-T2), conseguimos certificação em 3-4 dias. Instalações complexas (moradias, comércio) podem demorar 7-10 dias. Urgências: mediante disponibilidade, podemos acelerar para 48 horas com acréscimo de 50%. Todos os o meu serviço são certificados DGEG.",
    category: "Certificações"
  },
  {
    id: 3,
    question: "Como saber se preciso de um novo quadro elétrico?",
    answer: "Sinais de que precisa substituir o quadro elétrico: idade superior a 20 anos, disjuntores que desarmam frequentemente (mais de 2 vezes por mês), ausência de diferencial (obrigatório desde 1980), cheiro a queimado ou plástico derretido, faíscas ou ruídos estranhos, quadro com ferrugem ou humidade, ou potência insuficiente para os equipamentos atuais. Em Bragança, muitas casas antigas ainda têm quadros sem diferencial ou com fusíveis - extremamente perigosos. Um quadro moderno custa 200-600€ instalado e garante segurança total. Fazemos inspeção gratuita e relatório de conformidade. Quadros antigos são a principal causa de incêndios elétricos (40% dos casos).",
    category: "Segurança"
  },
  {
    id: 4,
    question: "Qual a diferença entre disjuntor e diferencial?",
    answer: "Disjuntor e diferencial protegem de formas diferentes: Disjuntor (térmico ou magnetotérmico) protege contra sobrecarga e curto-circuito, desligando quando a corrente ultrapassa o limite (ex: 16A, 20A, 32A). Diferencial protege pessoas contra choques elétricos, detetando fugas de corrente para a terra (sensibilidade 30mA) e desligando em 0,03 segundos. Ambos são obrigatórios em instalações modernas. Quadro típico tem: 1 diferencial geral (40A ou 63A) + vários disjuntores por circuito (iluminação 10A, tomadas 16A, cozinha 20A, etc.). Diferencial deve ser testado mensalmente (botão TEST). Se não desarmar ao testar, está avariado e deve ser substituído imediatamente - risco de eletrocussão.",
    category: "Segurança"
  },
  {
    id: 5,
    question: "Posso instalar iluminação LED eu mesmo?",
    answer: "Substituir lâmpadas por LED é seguro e pode fazer você mesmo - basta desligar o interruptor e trocar. No entanto, instalar novos pontos de luz, focos embutidos, ou fitas LED requer conhecimentos elétricos e deve ser feito por profissional certificado. Riscos de instalação incorreta: choque elétrico, incêndio, ou danificar os LEDs. Iluminação LED bem instalada poupa 80% de energia vs lâmpadas tradicionais e dura 15-25 anos. Instalamos iluminação LED completa: sala (4-6 focos): 180-300€, cozinha com fita LED: 200-350€, moradia completa: 800-1.500€. Incluímos projeto de iluminação gratuito para otimizar conforto e poupança.",
    category: "Iluminação"
  },
  {
    id: 6,
    question: "Como detetar um curto-circuito?",
    answer: "Curto-circuito ocorre quando fase e neutro se tocam diretamente, causando descarga de corrente muito alta. Sinais: disjuntor que desarma imediatamente ao ligar, faíscas visíveis, cheiro a queimado, ou equipamento que não liga. Causas comuns: fios descarnados que se tocam, água em tomadas ou caixas de ligação, equipamento com fio partido internamente, ou roedores que roeram cabos. Nunca force o disjuntor a ficar ligado - risco de incêndio. Diagnóstico profissional: testamos circuito por circuito com multímetro e megóhmetro para localizar exatamente onde está o curto. Reparação: 60-200€ conforme acessibilidade. Urgências 24/7 disponíveis.",
    category: "Problemas Comuns"
  },
  {
    id: 7,
    question: "Quanto custa uma certificação DGEG?",
    answer: "Certificação elétrica DGEG em Bragança: apartamento T1-T2: 150-250€, apartamento T3-T4: 250-350€, moradia até 150m²: 350-500€, moradia >150m²: 500-800€, comércio/escritório: 300-600€, indústria: orçamento específico. Inclui: inspeção completa, termo de responsabilidade, esquemas elétricos, submissão DGEG, e certificado oficial. Não inclui: reparações necessárias para conformidade (orçamentadas separadamente). Certificação é obrigatória para: instalações novas, alterações significativas, venda de imóvel (desde 2021), ou pedido de aumento de potência. Validade: indefinida se instalação não for alterada. Prazo: 3-10 dias úteis. Urgências: 48h com acréscimo de 50%.",
    category: "Certificações"
  },
  {
    id: 8,
    question: "Preciso de certificação para vender a casa?",
    answer: "Sim, desde janeiro de 2021 é obrigatória certificação elétrica para venda de imóveis com instalação elétrica anterior a 1980, ou se houve alterações significativas não certificadas. A certificação deve ser apresentada na escritura. Sem certificação, a venda pode ser bloqueada ou o comprador pode exigir desconto significativo. Processo: contacte-nos, fazemos inspeção (1-2 horas), identificamos não-conformidades, orçamentamos reparações necessárias, executamos correções, e emitimos certificação DGEG. Custo total típico: 400-1.200€ (certificação + pequenas correções). Prazo: 1-2 semanas. Muitos compradores exigem certificação mesmo quando não obrigatória - valoriza o imóvel e dá segurança.",
    category: "Legislação"
  },
  {
    id: 9,
    question: "O que fazer em caso de choque elétrico?",
    answer: "Prevenção de choques: nunca mexa em instalações com corrente ligada, use chinelos em zonas húmidas, não sobrecarregue tomadas, e instale diferencial de 30mA (obrigatório). Se alguém levar choque e ficar agarrado: NÃO toque diretamente na pessoa, desligue o quadro elétrico imediatamente, ou use material isolante (madeira seca, plástico) para afastar a pessoa da corrente. Chame 112 mesmo que a pessoa pareça bem - choque pode causar arritmia cardíaca horas depois. Sinais graves: perda de consciência, queimaduras, ou dificuldade respiratória. Instalações com diferencial de 30mA desligam em 0,03 segundos, evitando choques fatais. Verificamos e instalamos diferenciais: 60-120€.",
    category: "Segurança"
  },
  {
    id: 10,
    question: "Como economizar na conta de luz?",
    answer: "Poupança de energia elétrica: substitua todas as lâmpadas por LED (poupança 80%, investimento recuperado em 1 ano), desligue equipamentos em standby (TV, computador, micro-ondas - desperdiçam 10% da fatura), use máquina de lavar roupa em horário económico (depois das 22h ou fim de semana), instale termostato programável no aquecimento (poupança 30%), e isole bem a casa (reduz necessidade de aquecimento). Família média em Bragança pode poupar 30-50€/mês (360-600€/ano) com estas medidas. Fazemos auditorias energéticas gratuitas e recomendamos melhorias com cálculo de retorno de investimento. Instalação de painéis solares: consulte-nos para orçamento.",
    category: "Poupança"
  },
  {
    id: 11,
    question: "Qual a vida útil de um quadro elétrico?",
    answer: "Quadro elétrico moderno dura 25-30 anos se bem mantido. Componentes têm vidas úteis diferentes: disjuntores (15-20 anos ou 10.000 operações), diferencial (10-15 anos), cablagem interna (30+ anos). Sinais de fim de vida: disjuntores que desarmam sem razão aparente, diferencial que não testa corretamente, plástico amarelado ou quebradiço, ou ferrugem nos componentes metálicos. Quadros com mais de 25 anos devem ser inspecionados anualmente. Substituição preventiva evita avarias inesperadas e garante segurança. Quadro moderno completo: 200-600€ instalado. Manutenção recomendada: inspeção visual anual (gratuita), teste de diferencial mensal (você mesmo), e inspeção profissional a cada 5 anos (60-100€).",
    category: "Manutenção"
  },
  {
    id: 12,
    question: "Posso aumentar a potência contratada?",
    answer: "Sim, pode aumentar a potência contratada contactando o seu fornecedor de energia (EDP, Endesa, Galp, etc.). Processo: 1) Verifique se a instalação suporta a nova potência (quadro e cablagem adequados), 2) Solicite aumento ao fornecedor, 3) Fornecedor pode exigir certificação elétrica atualizada, 4) Instalação de novo contador (se necessário), 5) Ativação da nova potência. Potências típicas: T1-T2: 3,45 kVA ou 6,9 kVA, T3-T4: 6,9 kVA ou 10,35 kVA, Moradia: 10,35 kVA ou 13,8 kVA. Custo: taxa de fornecedor (50-150€) + eventual adaptação da instalação (100-400€). Analisamos a sua instalação e tratamos de todo o processo de certificação se necessário.",
    category: "Potência"
  },
  {
    id: 13,
    question: "O que é uma instalação elétrica monofásica vs trifásica?",
    answer: "Monofásica (230V): instalação doméstica padrão, uma fase + neutro + terra, adequada para consumos até 13,8 kVA (maioria das casas). Trifásica (400V): três fases + neutro + terra, para consumos elevados ou equipamentos industriais (motores trifásicos, fornos industriais, etc.). Em Bragança, 95% das habitações são monofásicas. Trifásica só compensa se: consumo superior a 20 kVA, equipamentos trifásicos obrigatórios, ou necessidade de distribuir carga por várias fases. Conversão monofásica→trifásica: 800-2.000€ (novo quadro, cablagem, contador). Conversão trifásica→monofásica: 400-800€. Analisamos as suas necessidades e recomendamos a solução mais económica.",
    category: "Instalações"
  },
  {
    id: 14,
    question: "Como escolher lâmpadas LED?",
    answer: "Escolha de lâmpadas LED: Potência: LED de 10W = incandescente de 60W, LED de 15W = incandescente de 100W. Temperatura de cor: 2700K (quente, relaxante, ideal para quartos), 4000K (neutra, ideal para cozinha e casas de banho), 6000K (fria, ideal para garagem e exterior). Índice de reprodução cromática (CRI): mínimo 80, ideal >90 (cores mais naturais). Ângulo de abertura: 120° para iluminação geral, 38° para focos direcionais. Dimável: se quer regular intensidade, compre LED dimável + dimmer compatível. Marcas recomendadas: Philips, Osram, Ledvance (evite marcas muito baratas - duram menos). Preço: 3-15€ por lâmpada. Duração: 15.000-25.000 horas (15-25 anos em uso normal).",
    category: "Iluminação"
  },
  {
    id: 15,
    question: "Preciso de licença para obras elétricas?",
    answer: "Obras elétricas em Portugal: Não precisa licença prévia para obras elétricas, mas precisa certificação DGEG após conclusão se: instalação nova, alteração significativa (novo quadro, aumento de potência, divisão nova), ou imóvel para venda. Obras que requerem certificação: novo quadro elétrico, aumento de potência, instalação de ar condicionado trifásico, ou alteração de mais de 30% dos circuitos. Obras que não requerem: substituição de tomadas/interruptores, lâmpadas, ou pequenas reparações. Todas as obras devem ser executadas por eletricista certificado para garantir segurança e conformidade. Multas por instalação não certificada: 250€ a 3.740€. Certificamos todas as instalações incluído no preço.",
    category: "Legislação"
  },
  {
    id: 16,
    question: "O que fazer se o disjuntor desarma sempre?",
    answer: "Disjuntor que desarma frequentemente indica: sobrecarga (demasiados equipamentos no mesmo circuito), curto-circuito (fios que se tocam), ou disjuntor subdimensionado/avariado. Diagnóstico: 1) Desligue todos os equipamentos, 2) Ligue o disjuntor, 3) Ligue equipamentos um a um até identificar o culpado. Se desarmar sem nada ligado: curto-circuito na instalação. Se desarmar com equipamentos normais: sobrecarga ou disjuntor avariado. Soluções: redistribuir equipamentos por outros circuitos, criar circuito novo dedicado (ex: ar condicionado), ou substituir disjuntor. Nunca force o disjuntor ou use fio para bloquear - risco de incêndio. Diagnóstico profissional: 40-60€. Reparação: 60-300€ conforme complexidade.",
    category: "Problemas Comuns"
  },
  {
    id: 17,
    question: "Como proteger aparelhos de sobretensão?",
    answer: "Sobretensões (picos de tensão) danificam equipamentos eletrónicos sensíveis (TV, computador, eletrodomésticos). Causas: trovoadas, falhas na rede elétrica, ou arranque de motores potentes. Proteções: Nível 1 (quadro elétrico): protetor de sobretensão tipo 1+2 (150-300€ instalado), protege toda a casa. Nível 2 (tomadas): réguas com proteção de sobretensão (20-50€), protegem equipamentos específicos. Nível 3 (equipamentos críticos): UPS/No-break (80-300€), protege contra sobretensões e falhas de corrente. Em Bragança, trovoadas de verão causam muitos danos - proteção no quadro é investimento que se paga rapidamente. Instalamos proteção completa: 200-400€. Garantia contra sobretensões após instalação.",
    category: "Proteção"
  },
  {
    id: 18,
    question: "Qual a diferença entre 110V e 220V?",
    answer: "Em Portugal, a tensão padrão é 230V (anteriormente 220V, mudou em 2003 para harmonização europeia). 110V é padrão americano e alguns países da América do Sul. Equipamentos 110V não funcionam diretamente em 230V - queimam instantaneamente. Soluções: transformador de tensão (30-100€ conforme potência), ou comprar versão 230V do equipamento. Alguns equipamentos modernos são bivolt (110-240V) - verifique na etiqueta. Tomadas: Portugal usa tipo F (Schuko) ou tipo C (europeia). Equipamentos americanos precisam adaptador de tomada + transformador de tensão. Instalação de circuito 110V em casa: possível mas não recomendado (complexo e caro). Melhor solução: transformador portátil para equipamentos específicos.",
    category: "Voltagem"
  },
  {
    id: 19,
    question: "Como saber se minha instalação está segura?",
    answer: "Sinais de instalação insegura: idade superior a 30 anos sem renovação, ausência de diferencial (obrigatório), fios expostos ou emendas visíveis, tomadas ou interruptores que aquecem, cheiro a queimado, quadro com fusíveis (obsoleto), ou choques ao tocar em eletrodomésticos. Inspeção profissional inclui: teste de diferencial, medição de resistência de terra, verificação de aperto de ligações, teste de isolamento de circuitos, e conformidade com normas atuais. Fazemos inspeção completa: 60-100€ com relatório detalhado. Se encontrarmos problemas graves, orçamentamos reparações. Instalações antigas são responsáveis por 40% dos incêndios domésticos. Inspeção recomendada a cada 10 anos ou antes de comprar/vender imóvel.",
    category: "Segurança"
  },
  {
    id: 20,
    question: "Quanto custa instalar tomadas extra?",
    answer: "Instalação de tomadas em Bragança: tomada simples (próxima de outra): 35-50€, tomada em parede nova (precisa rasgos): 60-90€, tomada exterior estanque: 50-70€, tomada USB integrada: 45-65€, tomada tripla/quádrupla: 50-80€. Inclui: material (tomada, caixa, cabo), mão de obra, e teste. Não inclui: reparação de parede após rasgos (pintor), ou se precisar criar circuito novo no quadro (+80-150€). Recomendações: cozinha moderna precisa mínimo 6 tomadas, sala 4-6 tomadas, quarto 3-4 tomadas. Tomadas USB são práticas mas ficam obsoletas (melhor usar adaptador). Instalamos várias tomadas com desconto: 5 tomadas: 200-300€. Orçamento gratuito.",
    category: "Instalações"
  }
];

// Catégories pour filtrage
export const FAQ_CATEGORIES = [
  "Todos",
  "Preços",
  "Segurança",
  "Certificações",
  "Instalações",
  "Manutenção",
  "Equipamentos",
  "Problemas Comuns",
  "Legislação",
  "Poupança",
  "Emergências",
  "Serviços",
  "Diagnóstico",
  "Reparações",
  "Projetos",
  "Inverno",
  "Iluminação",
  "Potência",
  "Proteção",
  "Voltagem"
];
