// Barre fixe mobile — Ligar + WhatsApp côte à côte
// Visible UNIQUEMENT sur mobile (md:hidden)
// Position fixed bottom, z-index élevé, 56px min height

import { useSite } from '@/contexts/SiteContext';
import { memo } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useLocationContent, usePersonalizedWhatsAppMessage } from '@/hooks/useLocationContent';

function MobileStickyBar() {
  const { config } = useSite();
  const { trackPhoneClick, trackWhatsAppClick } = useAnalytics();
  const { arrivalTime } = useLocationContent();
  const whatsappMessage = usePersonalizedWhatsAppMessage(config.whatsappMessage);
  const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] md:hidden flex"
      style={{ minHeight: '56px' }}
      role="navigation"
      aria-label="Contacto rápido"
    >
      {/* Bouton Ligar Agora — 50% gauche */}
      <a
        href={`tel:+351${config.phone.replace(/\s/g, '')}`}
        onClick={() => trackPhoneClick(config.phone)}
        className="flex-1 flex flex-col items-center justify-center text-white font-bold active:opacity-90 transition-opacity"
        style={{
          backgroundColor: config.colors.primary,
          minHeight: '56px',
        }}
        aria-label={`Ligar agora para ${config.phone}`}
      >
        <div className="flex items-center gap-1">
          <Phone className="w-4 h-4" />
          <span className="text-sm">LIGAR</span>
        </div>
        <span className="text-xs font-normal opacity-90">{arrivalTime.split('-')[0]}</span>
      </a>

      {/* Bouton WhatsApp — 50% droite */}
      <a
        href={whatsappUrl}
        onClick={() => trackWhatsAppClick('MobileStickyBar')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center text-white font-bold active:opacity-90 transition-opacity"
        style={{
          backgroundColor: '#25D366',
          minHeight: '56px',
        }}
        aria-label="Contactar via WhatsApp"
      >
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">WhatsApp</span>
        </div>
        <span className="text-xs font-normal opacity-90">Resposta 5min</span>
      </a>
    </div>
  );
}

export default memo(MobileStickyBar);
