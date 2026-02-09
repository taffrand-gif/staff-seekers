// Design Philosophy: Brutalisme Numérique Fonctionnel
// Blog section with SEO-optimized articles
// - Grid layout with article cards
// - Bold titles and clear CTAs
// - Relevant content for local SEO

import { useSite } from '@/contexts/SiteContext';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const { config } = useSite();

  const articles = [
    {
      title: `5 Sinais de que Precisa de um ${config.serviceType} Urgente`,
      excerpt: `Descubra os principais sinais de alerta que indicam a necessidade de chamar um ${config.serviceType.toLowerCase()} profissional imediatamente.`,
      date: '15 Jan 2026',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
    },
    {
      title: 'Como Escolher um Profissional Certificado',
      excerpt: 'Guia completo para escolher um profissional qualificado e evitar problemas futuros com certificações e garantias.',
      date: '10 Jan 2026',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
    },
    {
      title: 'Manutenção Preventiva: Poupe Dinheiro',
      excerpt: 'Saiba como a manutenção preventiva pode evitar avarias graves e poupar centenas de euros em reparações urgentes.',
      date: '5 Jan 2026',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Blog & Dicas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conselhos profissionais, guias práticos e dicas para manter tudo em perfeito funcionamento.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white border-4 overflow-hidden shadow-[6px_6px_0_0_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
              style={{ borderColor: config.colors.primary }}
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <span>•</span>
                  <span>{article.readTime} leitura</span>
                </div>

                {/* Title */}
                <h3 className="font-black text-xl mb-3 leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* CTA */}
                <button
                  className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all"
                  style={{ color: config.colors.primary }}
                >
                  Ler Artigo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            className="inline-flex items-center gap-2 px-8 py-4 font-bold border-4 bg-white shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            style={{ borderColor: config.colors.primary, color: config.colors.primary }}
          >
            Ver Todos os Artigos
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
