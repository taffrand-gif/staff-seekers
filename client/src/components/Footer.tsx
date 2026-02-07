import { ACTIVE_CONFIG } from "@shared/serviceConfig";

export default function Footer() {
  const { businessName, phone, name } = ACTIVE_CONFIG;
  const currentYear = new Date().getFullYear();
  
  const formattedPhone = `${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6)}`;

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container">
        {/* Top Section with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {/* Service 24/7 */}
          <div className="bg-red-600 p-4 sm:p-8 rounded-lg text-center">
            <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">🏠</div>
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Assistência 24H</h3>
            <p className="text-xs sm:text-sm opacity-90">Disponível todos os dias do ano</p>
          </div>

          {/* Professional Team */}
          <div className="bg-red-600 p-4 sm:p-8 rounded-lg text-center">
            <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">👨‍🔧</div>
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Equipa Qualificada</h3>
            <p className="text-xs sm:text-sm opacity-90">Técnicos certificados e experientes</p>
          </div>

          {/* Best Prices */}
          <div className="bg-red-600 p-4 sm:p-8 rounded-lg text-center">
            <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">💶</div>
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Preços Competitivos</h3>
            <p className="text-xs sm:text-sm opacity-90">Sem compromisso e totalmente transparentes</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{businessName}</h4>
              <p className="text-gray-400 text-xs sm:text-sm mb-2">
                {name} profissional ao seu serviço 24 horas por dia.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Cobertura em todo o distrito de Bragança.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Links Rápidos</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
                <li><a href="/trabalhos" className="text-gray-400 hover:text-white transition-colors">Trabalhos</a></li>
                <li><a href="/equipa" className="text-gray-400 hover:text-white transition-colors">Equipa</a></li>
                <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/testemunhos" className="text-gray-400 hover:text-white transition-colors">Testemunhos</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="/contactos" className="text-gray-400 hover:text-white transition-colors">Contactos</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contacto</h4>
              <p className="text-gray-400 text-xs sm:text-sm mb-2">
                <strong className="text-white">Telefone:</strong><br />
                {formattedPhone}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mb-2">
                <strong className="text-white">Horário:</strong><br />
                24 horas por dia, 7 dias por semana
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                <strong className="text-white">Zona de Cobertura:</strong><br />
                Distrito de Bragança
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 text-center text-gray-400 text-xs sm:text-sm">
            <p>© {currentYear} {businessName}. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
