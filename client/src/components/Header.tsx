import { Link } from "wouter";
import { ACTIVE_CONFIG } from "@shared/serviceConfig";
import { useState } from "react";

export default function Header() {
  const { gradient } = ACTIVE_CONFIG;
  const { phone, accentColor, businessName } = ACTIVE_CONFIG;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/servicos", label: "SERVIÇOS" },
    { href: "/faq", label: "FAQ" },
    { href: "/trabalhos", label: "TRABALHOS" },
    { href: "/equipa", label: "EQUIPA" },
    { href: "/testemunhos", label: "TESTEMUNHOS" },
    { href: "/blog", label: "BLOG" },
    { href: "/contactos", label: "CONTACTOS" },
  ];

  return (
    <>
      {/* Top Bar with Phone */}
      <div className=" text-white py-2 sm:py-3 px-4" style={{backgroundColor: gradient.from}}>
        <div className="container flex items-center justify-between">
          <button
            onClick={handlePhoneClick}
            className="flex items-center gap-1 sm:gap-2 text-sm sm:text-lg font-bold hover:opacity-90 transition-opacity"
          >
            <span className="hidden sm:inline">📞 LIGUE AGORA:</span>
            <span className="sm:hidden">📞</span>
            <span className="text-base sm:text-xl">{formattedPhone}</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg sm:text-2xl font-bold " style={{color: gradient.from}}>{businessName}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover: font-medium transition-colors text-sm lg:text-base" style={{color: gradient.from}}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover: transition-colors" style={{color: gradient.from}}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 bg-white">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-700 hover: font-medium transition-colors px-4 py-2 hover:bg-red-50 rounded" style={{color: gradient.from}}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
