// Design Philosophy: Brutalisme Numérique Fonctionnel
// - Cards with thick borders and hard shadows
// - Bold rating badge
// - Clear visual hierarchy
// - Testimonial cards in grid layout

import { useSite } from '@/contexts/SiteContext';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export default function Testimonials() {
  const { config } = useSite();

  return (
    <section id="testemunhos" className="py-20 bg-white">
      <div className="container">
        {/* Header with rating badge */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-6 py-3 mb-6 font-black text-white text-lg shadow-[4px_4px_0_0_rgba(0,0,0,0.2)]"
            style={{ 
              backgroundColor: config.colors.accent,
              borderRadius: '999px',
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2">5.0/5</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            O Que Dizem os Nossos Clientes
          </h2>
          <p className="text-lg text-gray-600">
            Mais de 15 clientes satisfeitos confiam nos nossos serviços
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {config.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 border-4 border-gray-200 shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.08)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-current" 
                    style={{ color: config.colors.primary }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 flex items-center justify-center font-black text-2xl text-white"
                  style={{ 
                    backgroundColor: config.colors.primary,
                    borderRadius: '0.25rem',
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location} • {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            className="font-bold border-2 shadow-[3px_3px_0_0_rgba(0,0,0,0.1)]"
            style={{ borderColor: config.colors.primary }}
          >
            Ver Todos os Testemunhos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
