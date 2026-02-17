// Design: Professional Service Layout
// - Massive title with ExtraBold Poppins
// - Full-width hero with overlay
// - Oversized CTA button with hard shadow
// - Three value badges with thick borders

import { useSite } from '@/contexts/SiteContext';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { ServicesSlider } from './ServicesSlider';

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
        {/* Services Slider */}
        <div className="mb-12">
          <ServicesSlider />
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
