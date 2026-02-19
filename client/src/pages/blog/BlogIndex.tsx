import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogCard from '@/components/blog/BlogCard';
import { useSEO } from '@/hooks/useSEO';

const BlogIndex: React.FC = () => {
  useSEO({
    title: 'Blog do Electricista - Dicas e Guias para Eletricidade em Trás-os-Montes',
    description: 'Artigos informativos sobre eletricidade, segurança elétrica, manutenção e legislação para residências e empresas na região de Trás-os-Montes.',
    keywords: 'blog electricista, dicas eletricidade, segurança elétrica, manutenção elétrica, Trás-os-Montes'
  });

  // Articles data - à remplacer par API/database plus tard
  const articles = [
    {
      slug: 'como-instalar-candeeiro-teto-seguranca',
      title: 'Como Instalar um Candeeiro de Teto com Segurança: Guia para Iniciantes',
      excerpt: 'Aprenda a instalar um candeeiro de teto de forma segura e correta, seguindo as normas de segurança elétrica. Guia passo a passo para projetos DIY.',
      category: 'Dicas Práticas',
      readTime: '8',
      date: '13 Fev 2026',
      imageUrl: '/images-optimized/blog/instalar-candeeiro.jpg'
    },
    {
      slug: 'poupar-energia-eletrica-dicas',
      title: 'Como Poupar Energia Elétrica em Casa — 10 Dicas Práticas',
      excerpt: 'Descubra 10 dicas práticas para poupar energia elétrica em casa e reduzir a fatura da luz. Guia completo de eficiência energética para Trás-os-Montes.',
      category: 'Eficiência Energética',
      readTime: '10',
      date: '14 Fev 2026',
      imageUrl: '/images-optimized/blog/poupar-energia.jpg'
    },
    {
      slug: 'quando-trocar-instalacao-eletrica',
      title: 'Quando Trocar a Instalação Elétrica? Sinais de Alerta',
      excerpt: 'Descubra os sinais de alerta que indicam que a sua instalação elétrica precisa de ser renovada. Guia completo sobre segurança elétrica em casas antigas.',
      category: 'Segurança Elétrica',
      readTime: '9',
      date: '14 Fev 2026',
      imageUrl: '/images-optimized/blog/instalacao-eletrica.jpg'
    },
    {
      slug: 'quadro-eletrico-disparar-causas',
      title: 'Quadro Elétrico a Disparar Constantemente? 7 Causas Comuns',
      excerpt: 'Descubra as 7 causas mais comuns para um quadro elétrico que dispara constantemente e saiba quando chamar um electricista profissional.',
      category: 'Problemas/Soluções',
      readTime: '6',
      date: '12 Fev 2026',
      imageUrl: '/images-optimized/blog/quadro-eletrico.jpg'
    },
    {
      slug: 'certificacao-energetica-obrigatoria',
      title: 'Certificação Energética em Portugal: É Obrigatório para a sua Casa?',
      excerpt: 'Tudo sobre a certificação energética obrigatória em Portugal: quando é necessária, como obter e quais as penalizações por não cumprir.',
      category: 'Legislação',
      readTime: '10',
      date: '11 Fev 2026',
      imageUrl: '/images-optimized/blog/certificacao-energetica.jpg'
    },
    {
      slug: 'electricista-24h-macedo-cavaleiros',
      title: 'Electricista 24h em Macedo de Cavaleiros: Como Atuamos em Caso de Urgência',
      excerpt: 'Conheça o nosso serviço de electricista 24 horas em Macedo de Cavaleiros e saiba como atuamos em situações de urgência elétrica.',
      category: 'Local',
      readTime: '5',
      date: '10 Fev 2026',
      imageUrl: '/images-optimized/blog/electricista-24h.jpg'
    }
  ];

  return (
    <BlogLayout
      title="Blog do Electricista Profissional"
      description="Dicas, guias e informações úteis sobre eletricidade para residências e empresas em Trás-os-Montes"
    >
      {/* Hero section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Conhecimento que <span className="text-amber-600">Ilumina</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Artigos escritos por electricistas certificados para ajudar proprietários e empresas a entenderem melhor a eletricidade e tomarem decisões informadas.
        </p>
      </div>

      {/* Featured article */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/3">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images-optimized/blog/featured.jpg"
                  alt="Electricista profissional a trabalhar"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <span className="inline-block px-4 py-1 bg-amber-600 text-white font-semibold rounded-full mb-4">
                Artigo em Destaque
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                10 Sinais de que Precisa de um Electricista Urgente
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Descubra os sinais de alerta que indicam problemas elétricos sérios na sua casa ou empresa. 
                Ignorar estes sinais pode levar a situações perigosas ou danos caros.
              </p>
              <a
                href="/blog/10-sinais-electricista-urgente"
                className="inline-flex items-center gap-2 bg-amber-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Ler Artigo Completo
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Últimos Artigos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <BlogCard key={article.slug} {...article} />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Receba Dicas de Eletricidade no seu Email
          </h3>
          <p className="text-gray-700 mb-6">
            Inscreva-se na nossa newsletter e receba mensalmente dicas de segurança elétrica, 
            informações sobre manutenção e promoções exclusivas.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap"
            >
              Inscrever-se
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Respeitamos a sua privacidade. Pode cancelar a qualquer momento.
          </p>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogIndex;