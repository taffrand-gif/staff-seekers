// Hero innovant avec effets modernes : parallax, gradients animés, particules
import React, { useEffect, useRef } from 'react';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

const InnovativeHero: React.FC = () => {
  const { config } = useSite();
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Effet parallax au scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    // Créer des particules animées
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      particlesRef.current.innerHTML = '';
      const particleCount = 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full';
        
        // Taille aléatoire
        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Position aléatoire
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Couleur selon le site
        particle.style.backgroundColor = i % 2 === 0 ? 'rgba(255, 160, 0, 0.3)' : 'rgba(26, 35, 126, 0.2)';
        
        // Animation
        particle.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesRef.current.appendChild(particle);
      }
    };

    window.addEventListener('scroll', handleScroll);
    createParticles();

    // Gradient animé
    const gradientInterval = setInterval(() => {
      if (heroRef.current) {
        const hue = (Date.now() / 10000) % 360;
        heroRef.current.style.background = `
          linear-gradient(
            135deg,
            hsl(${hue}, 100%, 40%) 0%,
            hsl(${hue + 30}, 100%, 30%) 50%,
            hsl(${hue + 60}, 100%, 20%) 100%
          )
        `;
      }
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(gradientInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background avec effet parallax */}
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-700 to-blue-900 transition-all duration-1000"
        style={{
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #1e40af 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay avec dégradé animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-blue-900/60" />
      
      {/* Particules animées */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden" />
      
      {/* Contenu principal */}
      <div className="container relative z-10 mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge professionnel */}
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full px-8 py-4 mb-10 shadow-2xl">
            <span className="text-3xl">⚡</span>
            <span className="text-white font-bold text-xl tracking-wide">
              ELETRICISTA CERTIFICADO EM TRÁS-OS-MONTES
            </span>
          </div>
          
          {/* Titre avec effet de découpe */}
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
                {ACTIVE_CONFIG.heroTitle}
              </span>
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-blue-500/20 blur-2xl -z-10" />
          </div>
          
          {/* Sous-titre avec animation de frappe */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {ACTIVE_CONFIG.heroSubtitle}
          </p>
          
          {/* Boutons CTA avec effets hover avancés */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <a
              href={`tel:${ACTIVE_CONFIG.phone.replace(/\s/g, '')}`}
              className="group relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 min-w-[280px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                <span className="text-2xl group-hover:animate-ring">📞</span>
                <span className="text-xl">PEDIR ORÇAMENTO</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </a>
            
            <a
              href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white hover:bg-gray-50 text-blue-900 font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 min-w-[280px] border-2 border-amber-500"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                <span className="text-2xl group-hover:animate-bounce">💬</span>
                <span className="text-xl">CONTACTAR TÉCNICO</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </a>
          </div>
          
          {/* Stats animées */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: '🏆', value: '10+', label: 'Anos Experiência' },
              { icon: '👨‍🔧', value: '200+', label: 'Clientes Satisfeitos' },
              { icon: '🚨', value: '24h', label: 'Urgências' },
              { icon: '💰', value: '0€', label: 'Orçamento Grátis' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-amber-400 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-3 animate-pulse">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Flèche de scroll animée */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white text-3xl">↓</div>
      </div>
      
      {/* Styles d'animation inline */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes ring {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-ring {
          animation: ring 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default InnovativeHero;