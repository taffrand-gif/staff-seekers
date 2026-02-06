import FAQSection from "@/components/FAQSection";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";

export default function FAQ() {
  const config = ACTIVE_CONFIG;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header simple */}
      <header className="bg-white shadow-sm">
        <div className="container py-4">
          <a href="/" className="text-2xl font-bold text-gray-900">
            {config.businessName}
          </a>
        </div>
      </header>

      {/* Contenu FAQ */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container text-center">
          <p className="mb-2">
            {config.businessName} - {config.name} 24h
          </p>
          <p className="text-gray-400 text-sm">
            📞 {formatPhone(config.phone)} | 💬 WhatsApp
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © 2024 {config.businessName}. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
}
