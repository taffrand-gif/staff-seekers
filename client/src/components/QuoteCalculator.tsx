import { useState } from 'react';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function QuoteCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState('');
  const [urgency, setUrgency] = useState('normal');
  const [estimatedPrice, setEstimatedPrice] = useState<string | null>(null);
  const { trackQuoteCalculated, trackQuoteSentWhatsApp } = useAnalytics();

  const isPlumber = ACTIVE_CONFIG.type === 'plomberie';
  const accentColor = isPlumber ? '#0e7490' : '#FF6B35';

  const services = isPlumber ? [
    { id: 'fuga', name: 'Reparação de Fuga de Água', base: 80, urgent: 120 },
    { id: 'desentupimento', name: 'Desentupimento', base: 60, urgent: 90 },
    { id: 'esquentador', name: 'Reparação Esquentador', base: 90, urgent: 130 },
    { id: 'torneira', name: 'Substituição Torneira', base: 50, urgent: 75 },
    { id: 'sanita', name: 'Reparação Sanita', base: 70, urgent: 100 },
    { id: 'canalizacao', name: 'Instalação Canalização Nova', base: 150, urgent: 200 },
  ] : [
    { id: 'quadro', name: 'Reparação Quadro Elétrico', base: 100, urgent: 150 },
    { id: 'tomada', name: 'Instalação Tomada/Interruptor', base: 40, urgent: 60 },
    { id: 'iluminacao', name: 'Instalação Iluminação', base: 60, urgent: 90 },
    { id: 'avaria', name: 'Reparação Avaria Urgente', base: 80, urgent: 120 },
    { id: 'certificacao', name: 'Certificação CERTIEL', base: 120, urgent: 180 },
    { id: 'instalacao', name: 'Instalação Elétrica Nova', base: 200, urgent: 280 },
  ];

  const calculatePrice = () => {
    const selectedService = services.find(s => s.id === service);
    if (!selectedService) return;

    const basePrice = urgency === 'urgent' ? selectedService.urgent : selectedService.base;
    const minPrice = Math.floor(basePrice * 0.9);
    const maxPrice = Math.ceil(basePrice * 1.3);

    const priceRange = `${minPrice}€ - ${maxPrice}€`;
    setEstimatedPrice(priceRange);

    trackQuoteCalculated(selectedService.name, urgency, priceRange);
  };

  const sendWhatsApp = () => {
    const selectedService = services.find(s => s.id === service);
    const urgencyText = urgency === 'urgent' ? 'URGENTE' : 'normal';
    const message = `Olá! Vi o calculador no vosso site e preciso de:\n\nServiço: ${selectedService?.name}\nUrgência: ${urgencyText}\nOrçamento estimado: ${estimatedPrice}\n\nPode confirmar o preço exato?`;

    trackQuoteSentWhatsApp(selectedService?.name || service);
    window.open(`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 text-white font-bold px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-2"
        style={{ backgroundColor: accentColor }}
        aria-label="Abrir calculador de orçamento"
      >
        <span className="text-2xl">💰</span>
        <span className="hidden md:inline">Calcular Preço</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 w-[calc(100%-2rem)] md:w-96 bg-white rounded-2xl shadow-2xl animate-slide-up">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">
            💰 Calcular Orçamento
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 text-2xl"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Que serviço precisa?
            </label>
            <select
              value={service}
              onChange={(e) => {
                setService(e.target.value);
                setEstimatedPrice(null);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50"
              style={{ focusRingColor: accentColor }}
            >
              <option value="">Selecione um serviço...</option>
              {services.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          {/* Urgency Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Urgência
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setUrgency('normal');
                  setEstimatedPrice(null);
                }}
                className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                  urgency === 'normal'
                    ? 'border-current text-white'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
                style={urgency === 'normal' ? { backgroundColor: accentColor, borderColor: accentColor } : {}}
              >
                Normal
              </button>
              <button
                onClick={() => {
                  setUrgency('urgent');
                  setEstimatedPrice(null);
                }}
                className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                  urgency === 'urgent'
                    ? 'border-current text-white'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
                style={urgency === 'urgent' ? { backgroundColor: '#ef4444', borderColor: '#ef4444' } : {}}
              >
                🚨 Urgente
              </button>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculatePrice}
            disabled={!service}
            className="w-full text-white font-bold px-6 py-4 rounded-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{ backgroundColor: accentColor }}
          >
            Calcular Preço Estimado
          </button>

          {/* Result */}
          {estimatedPrice && (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 animate-fade-in">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Preço Estimado:</p>
                <p className="text-3xl font-bold text-green-600 mb-3">
                  {estimatedPrice}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  * Preço final pode variar conforme complexidade
                </p>
                <button
                  onClick={sendWhatsApp}
                  className="w-full bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105"
                >
                  💬 Confirmar no WhatsApp
                </button>
              </div>
            </div>
          )}

          {/* Trust Indicators */}
          <div className="text-center text-xs text-gray-500 space-y-1">
            <p>✓ Orçamento gratuito e sem compromisso</p>
            <p>✓ Resposta em menos de 1 hora</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
