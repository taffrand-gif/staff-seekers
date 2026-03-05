import { useState, useEffect, memo } from 'react';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useAnalytics } from '@/hooks/useAnalytics';

function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { trackExitPopupShown, trackExitPopupConversion } = useAnalytics();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves viewport from top (user closing tab/window)
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        trackExitPopupShown();
      }
    };

    // Also trigger after 30 seconds if user hasn't interacted
    const timer = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
        trackExitPopupShown();
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown, trackExitPopupShown]);

  if (!showPopup) return null;

  const isPlumber = ACTIVE_CONFIG.type === 'plomberie';
  const accentColor = isPlumber ? '#0e7490' : '#FF6B35';
  const serviceName = isPlumber ? 'Canalizador' : 'Eletricista';

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-fade-in"
        onClick={() => setShowPopup(false)}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 animate-scale-in">
        <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
          {/* Close button */}
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            aria-label="Fechar"
          >
            ×
          </button>

          {/* Content */}
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Espere! Não Vá Embora
            </h2>
            <p className="text-gray-600 mb-6">
              Precisa de um {serviceName.toLowerCase()} urgente? Respondemos em <strong>menos de 1 hora</strong>.
            </p>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Orçamento gratuito por WhatsApp</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Resposta em menos de 1 hora</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Disponível 24h/7d incluindo feriados</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Sem compromisso, sem surpresas</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! Vi o vosso site e preciso de um orçamento urgente. Podem ajudar?')}`}
                className="block w-full text-center text-white font-bold px-6 py-4 rounded-xl text-lg transition-all hover:scale-105"
                style={{ backgroundColor: '#25D366' }}
                onClick={() => {
                  trackExitPopupConversion('WhatsApp');
                  setShowPopup(false);
                }}
              >
                💬 Pedir Orçamento no WhatsApp
              </a>
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="block w-full text-center font-bold px-6 py-4 rounded-xl text-lg border-2 transition-all hover:scale-105"
                style={{ borderColor: accentColor, color: accentColor }}
                onClick={() => {
                  trackExitPopupConversion('Phone');
                  setShowPopup(false);
                }}
              >
                📞 Ligar Agora: {ACTIVE_CONFIG.phone}
              </a>
            </div>

            {/* Trust indicator */}
            <p className="text-xs text-gray-500 mt-4">
              🔒 Mais de 500 clientes satisfeitos em Trás-os-Montes
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default memo(ExitIntentPopup);
