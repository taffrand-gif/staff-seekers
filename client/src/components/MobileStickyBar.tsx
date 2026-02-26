// Barre fixe mobile — Ligar + WhatsApp côte à côte
// Visible UNIQUEMENT sur mobile (md:hidden)
// Position fixed bottom, z-index élevé, 56px min height

import { useSite } from '@/contexts/SiteContext';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileStickyBar() {
  const { config } = useSite();
  const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`;

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
        className="flex-1 flex items-center justify-center gap-2 text-white font-bold text-base active:opacity-90 transition-opacity"
        style={{
          backgroundColor: config.colors.primary,
          minHeight: '56px',
          fontSize: '16px',
        }}
        aria-label={`Ligar agora para ${config.phone}`}
      >
        <Phone className="w-5 h-5" />
        <span>📞 Ligar Agora</span>
      </a>

      {/* Bouton WhatsApp — 50% droite */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 text-white font-bold text-base active:opacity-90 transition-opacity"
        style={{
          backgroundColor: '#15803d',
          minHeight: '56px',
          fontSize: '16px',
        }}
        aria-label="Contactar via WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span>💬 WhatsApp</span>
      </a>
    </div>
  );
}
