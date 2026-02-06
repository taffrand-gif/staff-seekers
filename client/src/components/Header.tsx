import { Link } from "wouter";
import { ACTIVE_CONFIG } from "@shared/serviceConfig";

export default function Header() {
  const { phone, accentColor, businessName } = ACTIVE_CONFIG;
  
  const formattedPhone = `${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6)}`;
  
  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': `${ACTIVE_CONFIG.googleAdsId}/${ACTIVE_CONFIG.googleAdsConversionLabel}`,
        'event_callback': () => {
          window.location.href = `tel:${phone}`;
        }
      });
    } else {
      window.location.href = `tel:${phone}`;
    }
  };

  return (
    <>
      {/* Top Bar with Phone */}
      <div className="bg-red-600 text-white py-3 px-4">
        <div className="container flex items-center justify-between">
          <button
            onClick={handlePhoneClick}
            className="flex items-center gap-2 text-lg font-bold hover:opacity-90 transition-opacity"
          >
            <span>📞 LIGUE AGORA:</span>
            <span className="text-xl">{formattedPhone}</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-red-600">{businessName}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                HOME
              </Link>
              <Link href="/servicos" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                SERVIÇOS
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/dicas" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                DICAS
              </Link>
              <Link href="/galeria" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                GALERIA
              </Link>
              <Link href="/testemunhos" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                TESTEMUNHOS
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                BLOG
              </Link>
              <Link href="/contactos" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                CONTACTOS
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
