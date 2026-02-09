import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSite } from '@/contexts/SiteContext';

interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export function ServicesSlider() {
  const { config } = useSite();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const isPlumbing = config.name === 'norte-reparos';

  const services: Service[] = isPlumbing ? [
    {
      icon: '🔧',
      title: 'Equipamento Profissional',
      description: 'Ferramentas Hilti e Bosch de última geração',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/cGarJCzSXRwXZJiJ3R4476-img-1_1770610680000_na1fn_c2xpZGVyLXBsdW1iaW5nLXRvb2xzLWJyYW5kcw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L2NHYXJKQ3pTWFJ3WFpKaUozUjQ0NzYtaW1nLTFfMTc3MDYxMDY4MDAwMF9uYTFmbl9jMnhwWkdWeUxYQnNkVzFpYVc1bkxYUnZiMnh6TFdKeVlXNWtjdy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uXdTqO9wS~NhFt-BesqHtZWIDH8AufG8SOUHMzcw-~UKCBX5zIP~Y7tS5x-JrzpJwsLS1NaFVEaBuYgJK6Iwt5X4gLlhK8zim~poC5Bx-vOZVMjJ3QBT31giM5y0WFlTpz2Mhl3tlLBycHFq16N5qLeiuBaHj7XW-2kBKNZ~QUbDuuLHu9tK0B7vjndEGeiVtUvS48lJGTZg42ahbDtgrDXRP4x94RXY6CFM0YDJrpa5UVmTRF7-j4rnPsy-lzj6x93iCCjGkBvtMu~DXhdT1eoAlsu2eBf-slpK24pVnrUQH-qriQdYsPrN3Vx0P8HUuW5hGkBn3DUE7VDm9DVzuA__'
    },
    {
      icon: '👷',
      title: 'Técnicos Especializados',
      description: 'Profissionais certificados com equipamento Bosch e Hilti',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/cGarJCzSXRwXZJiJ3R4476-img-4_1770610659000_na1fn_c2xpZGVyLXRlY2gtd29ya2luZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L2NHYXJKQ3pTWFJ3WFpKaUozUjQ0NzYtaW1nLTRfMTc3MDYxMDY1OTAwMF9uYTFmbl9jMnhwWkdWeUxYUmxZMmd0ZDI5eWEybHVady5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=viyBkACiAXjsKJh877p9QMXwrKnVabP4jILvsg2T790GByr0o~1uUSHx6PiCIqMpPPEIWN~Ee6isDAgYpQVuOY5zT5GwCrIciXFXnUOukyQ4le0P4XMgw-NkiD40vZorY4RMsBogpVM2dpMzDSsLC75UFsBLkkxV~WyUjMfHzWSd3MSXG1aUa4HX-222gBcNPWFG3n1KpD9gNkWzNtxp-iGUL01gkd1wcWk61Q7e3DcUz-xxyuykF-yog5KPvVaNg-JuEFNVN5UiORDuUDSeU2I4zn3-vrybOGCvIbP2X0zliSiiYxHEqL2zHYdH2m0xEn7bXrpaRvyuu442HFWkGw__'
    },
    {
      icon: '🚐',
      title: 'Frota Equipada',
      description: 'Viaturas com todo o material necessário para qualquer intervenção',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/cGarJCzSXRwXZJiJ3R4476-img-3_1770610657000_na1fn_c2xpZGVyLXNlcnZpY2UtdmFu.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L2NHYXJKQ3pTWFJ3WFpKaUozUjQ0NzYtaW1nLTNfMTc3MDYxMDY1NzAwMF9uYTFmbl9jMnhwWkdWeUxYTmxjblpwWTJVdGRtRnUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OE-sZzCVjZp579aEUVBI2sfgOy15pwwxWAxhggWBeZUMzlgncXX~x-s3NjAi2eTuO-iI0M7B~dtjTFyvjajEnmb7K6WVNsxYE~X3y6WbZriVWVAUgOfVY9Yk5DCbRHF4-yPaF5DFF2VVURrrfdVTYQkydV9hJwjHWMLeijqTxEA9xCXMECpdSzc0N7tLN-VDo1P7sySWRuuxVeI1mylg74So2RixfLlf1478SCo4j7BjI7ZW52Is7C-vCb3vDeYFogWQZJ3dkQhjRBu5Q3oKfiEUl2cjEkcKXLhF~dELxuAHuc5ogrZkQN9YG7~Fsq7gGvCz3CDHkXkEOKMiXSsOTA__'
    },
    {
      icon: '⚡',
      title: 'Resposta Rápida 24/7',
      description: 'Chegamos em média 25 minutos após o seu contacto',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80'
    }
  ] : [
    {
      icon: '⚡',
      title: 'Equipamento Fluke',
      description: 'Multímetros e testadores Fluke profissionais',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/cGarJCzSXRwXZJiJ3R4476-img-2_1770610666000_na1fn_c2xpZGVyLWVsZWN0cmljYWwtZmx1a2U.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L2NHYXJKQ3pTWFJ3WFpKaUozUjQ0NzYtaW1nLTJfMTc3MDYxMDY2NjAwMF9uYTFmbl9jMnhwWkdWeUxXVnNaV04wY21sallXd3RabXgxYTJVLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fqRuW~w-rZ4effYafa0WCHscHJakKQk8dvoSs6tp2uuqVjbT~3v44nXdNnbBq1w1CYYEPsvd0~da0kdXnsWqLQWdlZ7KFJVrjPuIlflK0wmA-3H~RqVXu8O5yjUl0t-dT1WcO-h-U~cTeSCoHyB1-Acpxp4thgIwux0eHjRTJeqocpKNPV-1flk-nF3Hz-tO94xBJdnCOcqeZz~ne-Sq2r5EuQ5veb37I6ZXHYx92QQrcSjBYwHoz2I10MQ8VzPBTPX4FdzEAFS~q5YC5jqh8Vy~GJlfa6pOw~7goj0am1rBTcN8Y~SIAsrcgqujDoqlGV1Wt6YIyVXZxx9SQ61VBQ__'
    },
    {
      icon: '👷',
      title: 'Eletricistas Certificados',
      description: 'Profissionais qualificados com certificação DGEG',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80'
    },
    {
      icon: '🚐',
      title: 'Frota Equipada',
      description: 'Viaturas com todo o material necessário para qualquer intervenção',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/cGarJCzSXRwXZJiJ3R4476-img-3_1770610657000_na1fn_c2xpZGVyLXNlcnZpY2UtdmFu.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L2NHYXJKQ3pTWFJ3WFpKaUozUjQ0NzYtaW1nLTNfMTc3MDYxMDY1NzAwMF9uYTFmbl9jMnhwWkdWeUxYTmxjblpwWTJVdGRtRnUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OE-sZzCVjZp579aEUVBI2sfgOy15pwwxWAxhggWBeZUMzlgncXX~x-s3NjAi2eTuO-iI0M7B~dtjTFyvjajEnmb7K6WVNsxYE~X3y6WbZriVWVAUgOfVY9Yk5DCbRHF4-yPaF5DFF2VVURrrfdVTYQkydV9hJwjHWMLeijqTxEA9xCXMECpdSzc0N7tLN-VDo1P7sySWRuuxVeI1mylg74So2RixfLlf1478SCo4j7BjI7ZW52Is7C-vCb3vDeYFogWQZJ3dkQhjRBu5Q3oKfiEUl2cjEkcKXLhF~dELxuAHuc5ogrZkQN9YG7~Fsq7gGvCz3CDHkXkEOKMiXSsOTA__'
    },
    {
      icon: '🔌',
      title: 'Resposta Rápida 24/7',
      description: 'Chegamos em média 25 minutos após o seu contacto',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80'
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
