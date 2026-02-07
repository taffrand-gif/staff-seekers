import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";

export function PriceCalculator() {
  const config = ACTIVE_CONFIG;
  const [service, setService] = useState("");
  const [urgency, setUrgency] = useState("normal");
  const [estimate, setEstimate] = useState<number | null>(null);

  const services = config.type === 'plomberie' ? [
    { id: 'fuga', name: 'Reparação Fuga Água', base: 60 },
    { id: 'desentupimento', name: 'Desentupimento', base: 70 },
    { id: 'esquentador', name: 'Instalação Esquentador', base: 150 },
    { id: 'canalizacao', name: 'Substituição Canalização', base: 200 },
  ] : [
    { id: 'quadro', name: 'Substituição Quadro Elétrico', base: 450 },
    { id: 'tomadas', name: 'Instalação Tomadas', base: 80 },
    { id: 'curto', name: 'Reparação Curto-Circuito', base: 90 },
    { id: 'certificacao', name: 'Certificação DGEG', base: 120 },
  ];

  const calculate = () => {
    const selectedService = services.find(s => s.id === service);
    if (!selectedService) return;
    
    let price = selectedService.base;
    if (urgency === 'urgent') price *= 1.3;
    
    setEstimate(Math.round(price));
  };

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4">Calculador de Preços</h3>
      <p className="text-gray-600 mb-6">Obtenha uma estimativa rápida do custo do serviço.</p>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-2">Tipo de Serviço</label>
          <select 
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Selecione...</option>
            {services.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">Urgência</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input 
                type="radio" 
                value="normal" 
                checked={urgency === 'normal'}
                onChange={(e) => setUrgency(e.target.value)}
              />
              Normal
            </label>
            <label className="flex items-center gap-2">
              <input 
                type="radio" 
                value="urgent" 
                checked={urgency === 'urgent'}
                onChange={(e) => setUrgency(e.target.value)}
              />
              Urgente (+30%)
            </label>
          </div>
        </div>

        <Button 
          onClick={calculate}
          disabled={!service}
          className="w-full bg-red-600 hover:bg-red-700"
        >
          Calcular Preço
        </Button>

        {estimate !== null && (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
            <p className="text-gray-700 mb-2">Estimativa:</p>
            <p className="text-4xl font-bold text-green-700">
              {estimate}€
            </p>
            <p className="text-sm text-gray-600 mt-2">
              *Preço indicativo. Orçamento final após avaliação.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t">
        <p className="text-center text-gray-600 mb-3">
          Quer um orçamento exato?
        </p>
        <a 
          href={`tel:${config.phone}`}
          className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-bold hover:bg-red-700"
        >
          📞 Ligue: {config.phone}
        </a>
      </div>
    </Card>
  );
}
