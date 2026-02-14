import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import { useSEO } from '@/hooks/useSEO';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

const PouparEnergiaEletricaDicas: React.FC = () => {
  useSEO({
    title: 'Como Poupar Energia Elétrica em Casa — 10 Dicas Práticas | 2026',
    description: 'Descubra 10 dicas práticas para poupar energia elétrica em casa e reduzir a fatura da luz. Guia completo de eficiência energética para Trás-os-Montes.',
    keywords: 'poupar energia, eficiência energética, dicas eletricidade casa, reduzir fatura luz, poupar eletricidade'
  });

  return (
    <BlogLayout
      title="Como Poupar Energia Elétrica em Casa — 10 Dicas Práticas"
      description="Guia completo para reduzir o consumo de eletricidade e poupar na fatura da luz"
    >
      <article className="max-w-4xl mx-auto">
        {/* Meta info */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 font-semibold rounded-full">
              Eficiência Energética
            </span>
            <span>⏱️ 10 min de leitura</span>
            <span>📅 14 Fev 2026</span>
            <span>👁️ 890 visualizações</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como Poupar Energia Elétrica em Casa — 10 Dicas Práticas
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔌</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">João Silva</p>
              <p className="text-gray-600">Eletricista Certificado com 15+ anos de experiência</p>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="mb-10 rounded-2xl overflow-hidden">
          <img
            src="/images-optimized/blog/poupar-energia-detail.jpg"
            alt="Dicas para poupar energia elétrica em casa"
            className="w-full h-96 object-cover"
            loading="lazy"
            width={800}
            height={400}
          />
          <p className="text-sm text-gray-500 text-center mt-2">
            Pequenas mudanças nos hábitos podem reduzir significativamente a fatura da luz
          </p>
        </div>
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-10">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <p className="text-blue-800 font-semibold text-lg">
              💡 Sabia que? Uma família portuguesa gasta em média entre 80€ e 120€ por mês em eletricidade.
              Com as dicas certas, pode reduzir este valor em 20% a 40%.
            </p>
          </div>
          <p className="text-xl text-gray-700 mb-6">
            Com os preços da energia a subir, poupar eletricidade deixou de ser apenas uma questão ambiental — é uma necessidade
            para o orçamento familiar. Neste guia, partilhamos 10 dicas práticas que qualquer pessoa pode aplicar
            imediatamente para reduzir o consumo elétrico em casa, especialmente adaptadas à realidade de Trás-os-Montes.
          </p>
        </div>

        {/* Table of contents */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Neste Artigo</h2>
          <ul className="space-y-2">
            <li><a href="#iluminacao" className="text-amber-600 hover:text-amber-700">1. Trocar para Iluminação LED</a></li>
            <li><a href="#standby" className="text-amber-600 hover:text-amber-700">2. Eliminar o Consumo em Standby</a></li>
            <li><a href="#eletrodomesticos" className="text-amber-600 hover:text-amber-700">3. Usar Eletrodomésticos de Forma Eficiente</a></li>
            <li><a href="#aquecimento" className="text-amber-600 hover:text-amber-700">4. Otimizar o Aquecimento</a></li>
            <li><a href="#horarios" className="text-amber-600 hover:text-amber-700">5. Aproveitar as Tarifas Bi-Horárias</a></li>
            <li><a href="#isolamento" className="text-amber-600 hover:text-amber-700">6-10. Mais Dicas Essenciais</a></li>
            <li><a href="#profissional" className="text-amber-600 hover:text-amber-700">Quando Chamar um Eletricista</a></li>
          </ul>
        </div>
        {/* Content sections */}
        <div className="prose prose-lg max-w-none">
          <section id="iluminacao" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. 💡 Trocar para Iluminação LED</h2>
            <p>A iluminação representa cerca de 15% do consumo elétrico de uma casa. Trocar lâmpadas incandescentes ou halogéneas por LED é a mudança com maior impacto imediato.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Lâmpada Incandescente</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>❌ Consome 60W para 800 lúmens</li>
                  <li>❌ Dura ~1.000 horas</li>
                  <li>❌ Gera muito calor</li>
                  <li>❌ Custo anual: ~15€ por lâmpada</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Lâmpada LED</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Consome 8W para 800 lúmens</li>
                  <li>✅ Dura ~25.000 horas</li>
                  <li>✅ Quase não aquece</li>
                  <li>✅ Custo anual: ~2€ por lâmpada</li>
                </ul>
              </div>
            </div>
            <p>Em Trás-os-Montes, onde os dias de inverno são curtos e a iluminação artificial é usada muitas horas, esta troca pode poupar entre 50€ e 100€ por ano.</p>
          </section>

          <section id="standby" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. 🔴 Eliminar o Consumo em Standby</h2>
            <p>Os aparelhos em standby (luz vermelha ligada) consomem energia 24 horas por dia. Televisões, consolas, carregadores e micro-ondas são os principais culpados.</p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-red-800 text-lg mb-2">O custo invisível do standby:</h3>
              <ul className="text-red-700 space-y-1">
                <li>• Uma TV em standby consome ~5W (cerca de 8€/ano)</li>
                <li>• Um carregador ligado sem telemóvel consome ~0.5W</li>
                <li>• No total, o standby pode representar 10% da fatura</li>
              </ul>
            </div>
            <p>Use extensões com interruptor para desligar vários aparelhos de uma vez. É a forma mais prática de eliminar este consumo fantasma.</p>
          </section>

          <section id="eletrodomesticos" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. 🧺 Usar Eletrodomésticos de Forma Eficiente</h2>
            <p>Pequenas mudanças na forma como usa os eletrodomésticos fazem grande diferença:</p>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold">Máquina de lavar roupa a 30°C</p>
                  <p className="text-gray-600">90% da energia é usada para aquecer a água. Lavar a 30°C em vez de 60°C poupa até 60% de energia por lavagem.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold">Frigorífico bem regulado</p>
                  <p className="text-gray-600">Mantenha entre 3°C e 5°C. Cada grau abaixo aumenta o consumo em 5%. Não coloque alimentos quentes dentro.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold">Forno elétrico com pré-aquecimento curto</p>
                  <p className="text-gray-600">Desligue o forno 10 minutos antes do fim — o calor residual termina a cozedura.</p>
                </div>
              </li>
            </ol>
          </section>
          <section id="aquecimento" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. 🌡️ Otimizar o Aquecimento Elétrico</h2>
            <p>Em Trás-os-Montes, o aquecimento é uma das maiores despesas energéticas devido aos invernos rigorosos. Algumas estratégias eficazes:</p>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
              <h3 className="font-bold text-gray-900 mb-3">Dicas para Aquecimento Eficiente</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">✅ Use termostato programável — reduza 2°C à noite</li>
                <li className="flex items-center gap-2">✅ Aqueça apenas as divisões que usa</li>
                <li className="flex items-center gap-2">✅ Mantenha portas e janelas bem vedadas</li>
                <li className="flex items-center gap-2">✅ Considere bomba de calor (COP 3-4x mais eficiente)</li>
                <li className="flex items-center gap-2">✅ Coloque película refletora atrás dos radiadores</li>
              </ul>
            </div>
          </section>

          <section id="horarios" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. ⏰ Aproveitar as Tarifas Bi-Horárias</h2>
            <p>Se tem contrato bi-horário ou tri-horário, concentre os consumos maiores nas horas de vazio (geralmente das 22h às 8h nos dias úteis e fins de semana completos).</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Horas de Vazio (mais barato)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Máquina de lavar roupa</li>
                  <li>✅ Máquina de lavar loiça</li>
                  <li>✅ Carregar veículo elétrico</li>
                  <li>✅ Aquecer água (termoacumulador)</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Horas de Ponta (mais caro)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>⚠️ Evite ligar aparelhos potentes</li>
                  <li>⚠️ Use apenas iluminação essencial</li>
                  <li>⚠️ Cozinhe com gás se possível</li>
                  <li>⚠️ Desligue aquecimentos desnecessários</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="isolamento" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6-10. 🏠 Mais Dicas Essenciais</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">6. Verificar o Isolamento da Casa</h3>
                <p className="text-gray-700">Janelas com vidro duplo e portas bem vedadas podem reduzir perdas térmicas em 30%. Em casas antigas de Trás-os-Montes, o isolamento é frequentemente insuficiente.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">7. Instalar Temporizadores e Sensores</h3>
                <p className="text-gray-700">Temporizadores para o termoacumulador e sensores de movimento para iluminação exterior evitam desperdícios automáticos.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">8. Rever a Potência Contratada</h3>
                <p className="text-gray-700">Muitas famílias pagam por potência que não usam. Um eletricista pode avaliar se pode reduzir a potência contratada e poupar no termo fixo.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">9. Manter a Instalação Elétrica em Bom Estado</h3>
                <p className="text-gray-700">Fios danificados, ligações soltas e quadros elétricos antigos causam perdas de energia. Uma revisão periódica garante eficiência e segurança.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">10. Considerar Energia Solar</h3>
                <p className="text-gray-700">Trás-os-Montes tem excelente exposição solar. Painéis fotovoltaicos com autoconsumo podem reduzir a fatura em 50% a 70%, com retorno do investimento em 5-7 anos.</p>
              </div>
            </div>
          </section>

          <section id="profissional" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">👨‍🔧 Quando Chamar um Eletricista</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Um eletricista pode ajudar a poupar energia:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">🔍 Auditoria Energética</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Identificar fugas de energia</li>
                    <li>• Avaliar estado da instalação</li>
                    <li>• Recomendar melhorias específicas</li>
                    <li>• Otimizar potência contratada</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">⚡ Instalações Eficientes</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Instalar temporizadores e sensores</li>
                    <li>• Atualizar quadro elétrico</li>
                    <li>• Preparar para painéis solares</li>
                    <li>• Instalar tomadas inteligentes</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl text-gray-900 mb-6">Quer uma avaliação energética da sua casa?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-amber-700 transition-colors">📞 Ligar para Eletricista</a>
                  <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, gostaria de uma avaliação energética da minha casa`} target="_blank" rel="noopener noreferrer" className="bg-white text-amber-700 font-bold text-lg px-8 py-4 rounded-xl border-2 border-amber-600 hover:bg-amber-50 transition-colors">💬 WhatsApp Rápido</a>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ Perguntas Frequentes</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Quanto posso poupar por mês com estas dicas?</h3>
              <p className="text-gray-700">Aplicando todas as dicas, é realista poupar entre 20€ e 50€ por mês, dependendo do consumo atual e do tamanho da casa. As maiores poupanças vêm da iluminação LED, eliminação do standby e otimização do aquecimento.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Vale a pena investir em painéis solares em Trás-os-Montes?</h3>
              <p className="text-gray-700">Sim. Trás-os-Montes tem entre 2.400 e 2.600 horas de sol por ano, o que torna o investimento em painéis solares muito rentável. O retorno do investimento situa-se entre 5 e 7 anos, e existem apoios do Estado que podem cobrir até 50% do custo.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Como sei se a minha potência contratada é adequada?</h3>
              <p className="text-gray-700">Se o disjuntor nunca dispara por excesso de consumo, provavelmente tem potência a mais. Um eletricista pode medir o consumo real e recomendar a potência ideal, poupando no termo fixo da fatura.</p>
            </div>
          </div>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Quanto posso poupar por mês com estas dicas?", "acceptedAnswer": { "@type": "Answer", "text": "Aplicando todas as dicas, é realista poupar entre 20€ e 50€ por mês, dependendo do consumo atual e do tamanho da casa. As maiores poupanças vêm da iluminação LED, eliminação do standby e otimização do aquecimento." } },
                { "@type": "Question", "name": "Vale a pena investir em painéis solares em Trás-os-Montes?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Trás-os-Montes tem entre 2.400 e 2.600 horas de sol por ano, o que torna o investimento em painéis solares muito rentável. O retorno do investimento situa-se entre 5 e 7 anos, e existem apoios do Estado que podem cobrir até 50% do custo." } },
                { "@type": "Question", "name": "Como sei se a minha potência contratada é adequada?", "acceptedAnswer": { "@type": "Answer", "text": "Se o disjuntor nunca dispara por excesso de consumo, provavelmente tem potência a mais. Um eletricista pode medir o consumo real e recomendar a potência ideal, poupando no termo fixo da fatura." } }
              ]
            })}
          </script>
        </section>

        {/* Author bio */}
        <div className="bg-gray-50 rounded-2xl p-8 mt-12">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/4">
              <div className="w-32 h-32 bg-amber-200 rounded-full flex items-center justify-center mx-auto">
                <span className="text-5xl">👨‍🔧</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sobre o Autor</h3>
              <p className="text-gray-700 mb-4">
                <strong>João Silva</strong> é eletricista certificado com mais de 15 anos de experiência em Trás-os-Montes. Especialista em eficiência energética e instalações residenciais, ajuda famílias a reduzir o consumo elétrico e a modernizar as suas instalações.
              </p>
              <p className="text-gray-600">Para questões técnicas ou orçamentos, contacte através do telefone ou WhatsApp acima.</p>
            </div>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
};

export default PouparEnergiaEletricaDicas;
