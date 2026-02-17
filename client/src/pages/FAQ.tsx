import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";

export default function FAQ() {
  const config = ACTIVE_CONFIG;

  useSEO({
    title: `Perguntas Frequentes (FAQ) | ${config.businessName}`,
    description: `Encontre respostas às perguntas mais frequentes sobre serviços de ${config.name.toLowerCase()}. Disponíveis 24h/dia em Bragança.`,
    canonical: `https://${config.domain}/faq`,
  });

  return (
    <>
      <Header />
{/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-gray-700">
              Encontre respostas às dúvidas mais comuns sobre os nossos serviços
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <FAQSection />

      <Footer />
    </>
  );
}
