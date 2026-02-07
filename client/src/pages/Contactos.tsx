import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function Contactos() {
  const config = ACTIVE_CONFIG;
  const formattedPhone = `${config.phone.slice(0, 3)} ${config.phone.slice(3, 6)} ${config.phone.slice(6)}`;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useSEO({
    title: `Contactos | ${config.businessName}`,
    description: `Entre em contacto connosco. ${config.name} profissional disponível 24h/dia. Ligue ${formattedPhone}`,
    canonical: `https://${config.domain}/contactos`,
  });

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': `${config.googleAdsId}/${config.googleAdsConversionLabel}`,
        'event_callback': () => {
          window.location.href = `tel:${config.phone}`;
        }
      });
    } else {
      window.location.href = `tel:${config.phone}`;
    }
  };

  const sendMessage = trpc.contact.sendMessage.useMutation({
    onSuccess: () => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contacto em breve.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: () => {
      toast.error("Erro ao enviar mensagem. Por favor, ligue-nos diretamente.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage.mutate(formData);
  };

  return (
    <>
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contactos
            </h1>
            <p className="text-xl text-gray-700">
              Estamos disponíveis 24 horas por dia, 7 dias por semana
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Informações de Contacto
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📞</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Telefone</h3>
                      <button
                        onClick={handlePhoneClick}
                        className="text-red-600 hover:text-red-700 font-semibold text-xl"
                      >
                        {formattedPhone}
                      </button>
                      <p className="text-gray-700 mt-1">Disponível 24h/dia, 7 dias por semana</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💬</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">WhatsApp</h3>
                      <p className="text-gray-700">
                        Envie-nos uma mensagem via WhatsApp para atendimento rápido
                      </p>
                      <button
                        onClick={() => {
                          const message = encodeURIComponent("Olá! Preciso de assistência.");
                          window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
                        }}
                        className="mt-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
                      >
                        Abrir WhatsApp
                      </button>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Zona de Cobertura</h3>
                      <p className="text-gray-700">
                        Todo o distrito de Bragança<br />
                        Base: Macedo de Cavaleiros
                      </p>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">⏰</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Horário</h3>
                      <p className="text-gray-700">
                        <strong>Urgências:</strong> 24 horas por dia<br />
                        <strong>Incluindo:</strong> Fins de semana e feriados
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="mt-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Precisa de assistência urgente?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Ligue agora e teremos um técnico a caminho em minutos!
                  </p>
                  <button
                    onClick={handlePhoneClick}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition-colors w-full"
                  >
                    📞 LIGUE AGORA: {formattedPhone}
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Envie-nos uma Mensagem
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="O seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="o.seu.email@exemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="912 345 678"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Descreva o seu problema ou pedido..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sendMessage.isPending}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sendMessage.isPending ? "A enviar..." : "Enviar Mensagem"}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Campos obrigatórios
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Nossa Localização
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Base em Macedo de Cavaleiros, com cobertura em todo o distrito de Bragança
            </p>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-600">
                📍 Macedo de Cavaleiros, Bragança
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
