import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const services: Service[] = [
    {
      icon: '🚨',
      title: 'Assistência 24/7',
      description: 'Disponíveis a qualquer hora, incluindo fins de semana e feriados',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80'
    },
    {
      icon: '⚡',
      title: 'Resposta Rápida',
      description: 'Chegamos em média 25 minutos após o seu contacto',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80'
    },
    {
      icon: '✅',
      title: 'Técnicos Certificados',
      description: 'Profissionais qualificados com certificação DGEG',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80'
    },
    {
      icon: '💰',
      title: 'Preços Transparentes',
      description: 'Orçamento gratuito sem compromisso antes de qualquer intervenção',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80'
    }
  ];

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slider Container */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {services.map((service, index) => (
            <div key={index} className="min-w-full relative">
              {/* Background Image with Overlay */}
              <div className="relative h-80 md:h-96">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-lg text-white/90 max-w-2xl">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-3 bg-primary'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
