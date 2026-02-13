import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import { useSEO } from '@/hooks/useSEO';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

const ComoInstalarCandeeiroTeto: React.FC = () => {
  useSEO({
    title: 'Como Instalar um Candeeiro de Teto com Segurança: Guia Completo 2026',
    description: 'Guia passo a passo para instalar um candeeiro de teto de forma segura. Aprenda as normas de segurança, ferramentas necessárias e quando chamar um profissional.',
    keywords: 'instalar candeeiro teto, como ligar fios, eletricista DIY, segurança elétrica, instalação luminária'
  });

  return (
    <BlogLayout
      title="Como Instalar um Candeeiro de Teto com Segurança"
      description="Guia completo para instalação segura de candeeiros de teto - passo a passo com imagens e dicas de segurança"
    >
      <article className="max-w-4xl mx-auto">
        {/* Meta info */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 font-semibold rounded-full">
              Dicas Práticas
            </span>
            <span>⏱️ 8 min de leitura</span>
            <span>📅 13 Fev 2026</span>
            <span>👁️ 1.2K visualizações</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como Instalar um Candeeiro de Teto com Segurança: Guia para Iniciantes
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
            src="/images-optimized/blog/instalar-candeeiro-detail.jpg"
            alt="Pessoa instalando candeeiro de teto com segurança"
            className="w-full h-96 object-cover"
            loading="lazy"
            width={800}
            height={400}
          />
          <p className="text-sm text-gray-500 text-center mt-2">
            Instalação segura requer ferramentas adequadas e conhecimento das normas
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-10">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <p className="text-blue-800 font-semibold text-lg">
              ⚠️ Aviso Importante: Este guia é para projetos DIY simples. Para instalações complexas, 
              quadros elétricos antigos ou qualquer dúvida sobre segurança, contate sempre um eletricista certificado.
            </p>
          </div>

          <p className="text-xl text-gray-700 mb-6">
            Instalar um candeeiro de teto pode parecer uma tarefa simples, mas envolve riscos elétricos sérios 
            se não for feito corretamente. Neste guia completo, vamos percorrer cada passo da instalação, 
            desde a preparação até ao teste final, sempre com foco na segurança.
          </p>
        </div>

        {/* Table of contents */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Neste Artigo</h2>
          <ul className="space-y-2">
            <li><a href="#ferramentas" className="text-amber-600 hover:text-amber-700">1. Ferramentas e Materiais Necessários</a></li>
            <li><a href="#seguranca" className="text-amber-600 hover:text-amber-700">2. Medidas de Segurança Essenciais</a></li>
            <li><a href="#passo-a-passo" className="text-amber-600 hover:text-amber-700">3. Passo a Passo da Instalação</a></li>
            <li><a href="#testes" className="text-amber-600 hover:text-amber-700">4. Testes e Verificações Finais</a></li>
            <li><a href="#quando-profissional" className="text-amber-600 hover:text-amber-700">5. Quando Chamar um Profissional</a></li>
          </ul>
        </div>

        {/* Content sections */}
        <div className="prose prose-lg max-w-none">
          <section id="ferramentas" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. 🛠️ Ferramentas e Materiais Necessários</h2>
            <p>Antes de começar, certifique-se de ter todas as ferramentas necessárias:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Ferramentas Básicas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">✅ Chave de fendas isolada</li>
                  <li className="flex items-center gap-2">✅ Alicate de eletricista</li>
                  <li className="flex items-center gap-2">✅ Detetor de tensão</li>
                  <li className="flex items-center gap-2">✅ Fita isoladora</li>
                  <li className="flex items-center gap-2">✅ Escada estável</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Materiais</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">✅ Candeeiro novo</li>
                  <li className="flex items-center gap-2">✅ Suporte de teto (se necessário)</li>
                  <li className="flex items-center gap-2">✅ Bornes de ligação</li>
                  <li className="flex items-center gap-2">✅ Parafusos adequados</li>
                  <li className="flex items-center gap-2">✅ Luvas de proteção</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="seguranca" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. ⚡ Medidas de Segurança Essenciais</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-red-800 text-lg mb-2">NUNCA FAÇA ISTO:</h3>
              <ul className="text-red-700 space-y-1">
                <li>• Trabalhar com as mãos molhadas ou em piso húmido</li>
                <li>• Ignorar o desligamento do quadro elétrico</li>
                <li>• Usar ferramentas não isoladas</li>
                <li>• Forçar conexões que não encaixam bem</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Passos de Segurança Obrigatórios:</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold">Desligue a energia no quadro elétrico</p>
                  <p className="text-gray-600">Desligue o disjuntor correspondente ao circuito onde vai trabalhar. Se não tem certeza, desligue o disjuntor geral.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold">Verifique com detetor de tensão</p>
                  <p className="text-gray-600">Use um detetor de tensão para confirmar que não há corrente nos fios antes de tocar neles.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold">Use equipamento de proteção</p>
                  <p className="text-gray-600">Luvas isoladas e sapatos com sola de borracha são essenciais, mesmo com a energia desligada.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* Continue with other sections... */}

          <section id="quando-profissional" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. 👨‍🔧 Quando Chamar um Eletricista Profissional</h2>
            
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Situações que Requerem um Profissional:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">🚨 Urgências</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cheiro a queimado na instalação</li>
                    <li>• Faíscas ou curtos-circuitos</li>
                    <li>• Quadro elétrico a disparar frequentemente</li>
                    <li>• Fios expostos ou danificados</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">🏠 Instalações Complexas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Casas com mais de 30 anos</li>
                    <li>• Quadros elétricos antigos com fusíveis</li>
                    <li>• Instalação de spots múltiplos</li>
                    <li>• Sistemas de dimerização</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-xl text-gray-900 mb-6">
                  Na dúvida, é sempre mais seguro chamar um eletricista certificado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${ACTIVE_CONFIG.phone}`}
                    className="bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-amber-700 transition-colors"
                  >
                    📞 Ligar para Eletricista
                  </a>
                  <a
                    href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, preciso de ajuda com instalação elétrica`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-amber-700 font-bold text-lg px-8 py-4 rounded-xl border-2 border-amber-600 hover:bg-amber-50 transition-colors"
                  >
                    💬 WhatsApp Rápido
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Posso instalar um candeeiro se não tenho experiência?</h3>
                <p className="text-gray-700">
                  Para instalações simples em casas com instalação elétrica moderna e em bom estado, sim. 
                  Mas sempre seguindo rigorosamente as medidas de segurança. Se tem dúvidas ou a casa tem mais de 20 anos, 
                  recomenda-se chamar um profissional.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Quanto custa a instalação por um eletricista?</h3>
                <p className="text-gray-700">
                  Em Trás-os-Montes, o preço médio para instalação de um candeeiro simples varia entre 25€ e 50€, 
                  dependendo da complexidade e deslocação. Para instalações múltiplas ou sistemas complexos, 
                  o preço pode ser superior.
                </p>
              </div>
            </div>
          </section>
        </div>

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
                <strong>João Silva</strong> é eletricista certificado com mais de 15 anos de experiência em Trás-os-Montes. 
                Especialista em instalações residenciais e comerciais, já realizou mais de 500 intervenções na região. 
                Acredita na importância da educação sobre segurança elétrica para prevenir acidentes domésticos.
              </p>
              <p className="text-gray-600">
                Para questões técnicas ou orçamentos, contacte através do telefone ou WhatsApp acima.
              </p>
            </div>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
};

export default ComoInstalarCandeeiroTeto;