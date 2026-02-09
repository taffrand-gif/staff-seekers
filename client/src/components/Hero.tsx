// Design Philosophy: Brutalisme Numérique Fonctionnel
// - Massive title with ExtraBold Poppins
// - Full-width hero with overlay
// - Oversized CTA button with hard shadow
// - Three value badges with thick borders

import { useSite } from '@/contexts/SiteContext';
import { Phone, Home, Wrench, Euro } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  const { config } = useSite();

  return (
    <section 
      id="home"
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${config.hero.backgroundImage})`,
      }}
    >
      <div className="container py-20 text-center text-white">
        {/* Value badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: Home, text: 'ASSISTÊNCIA TÉCNICA 24H' },
            { icon: Wrench, text: 'EQUIPA QUALIFICADA' },
            { icon: Euro, text: 'PREÇOS COMPETITIVOS' },
          ].map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 px-6 py-4 border-4 border-white bg-black/30 backdrop-blur-sm"
              style={{ borderRadius: '0.25rem' }}
            >
              <badge.icon className="w-8 h-8" />
              <span className="text-xs font-bold tracking-wide">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Main title - Brutalist massive heading */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none">
          {config.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-medium mb-12 max-w-3xl mx-auto">
          {config.hero.subtitle}
        </p>

        {/* Oversized CTA button with hard shadow */}
        <Button
          onClick={() => window.location.href = `tel:${config.phone.replace(/\s/g, '')}`}
          className="text-xl md:text-2xl px-12 py-8 font-black tracking-wide shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          style={{
            backgroundColor: config.colors.primary,
            borderRadius: '0.25rem',
          }}
        >
          <Phone className="w-6 h-6 mr-3" />
          LIGUE AGORA: {config.phone}
        </Button>
      </div>
    </section>
  );
}
