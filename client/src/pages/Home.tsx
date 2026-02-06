import HeroUrgence from "@/components/HeroUrgence";
import RecentCalls from "@/components/RecentCalls";
import CookieConsent from "@/components/CookieConsent";
import FAQSection from "@/components/FAQSection";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO, generateSEOTitle, generateMetaDescription, generateLocalBusinessSchema } from "@/hooks/useSEO";

export default function Home() {
  const config = ACTIVE_CONFIG;
  const gradientClass = config.type === 'plomberie' ? 'gradient-bg-plomberie' : 'gradient-bg-electricite';

  // SEO
  useSEO({
    title: generateSEOTitle(),
    description: generateMetaDescription(),
    canonical: `https://${config.domain}`,
    schema: generateLocalBusinessSchema(),
  });

  return (
    <>
      {/* Section Hero avec gradient de fond */}
      <div className={`min-h-screen flex items-center justify-center p-5 ${gradientClass}`}>
        <div className="w-full max-w-2xl">
          <HeroUrgence />
          <RecentCalls />
          
          {/* Footer note */}
          <p className="text-center text-white text-sm mt-5 opacity-90">
            {config.businessName} • Macedo de Cavaleiros<br />
            Cobertura: Bragança, Sé, Santa Maria e todo o concelho
          </p>
        </div>
      </div>

      {/* Section FAQ */}
      <FAQSection />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </>
  );
}
