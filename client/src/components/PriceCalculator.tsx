import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { Loader2, CheckCircle2, Calculator } from "lucide-react";

export function PriceCalculator() {
  const { gradient } = ACTIVE_CONFIG;
  const config = ACTIVE_CONFIG;
  const [service, setService] = useState("");
  const [urgency, setUrgency] = useState("normal");
  const [estimate, setEstimate] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

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
    
    setIsCalculating(true);
    setShowConfirmation(false);
    
    setTimeout(() => {
      let price = selectedService.base;
      if (urgency === 'urgent') price *= 1.3;
      
      setEstimate(Math.round(price));
      setIsCalculating(false);
      setShowConfirmation(true);
      
      setTimeout(() => setShowConfirmation(false), 3000);
    }, 800);
  };

  return (
    <Card className="p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Calculator className="h-8 w-8 " style={{color: gradient.from}} />
        <h3 className="text-2xl font-bold">Calculador de Preços</h3>
      </div>
      <p className="text-gray-600 mb-6">Obtenha uma estimativa rápida do custo do serviço.</p>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-2">Tipo de Serviço</label>
          <select 
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              setEstimate(null);
              setShowConfirmation(false);
            }}
            className="w-full p-3 border rounded-lg transition-all focus:ring-2 focus:ring-primary focus:border-red-500"
            disabled={isCalculating}
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
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                value="normal" 
                checked={urgency === 'normal'}
                onChange={(e) => {
                  setUrgency(e.target.value);
                  setEstimate(null);
                  setShowConfirmation(false);
                }}
                disabled={isCalculating}
                className="w-4 h-4  focus:ring-primary" style={{color: gradient.from}}
              />
              <span>Normal</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                value="urgent" 
                checked={urgency === 'urgent'}
                onChange={(e) => {
                  setUrgency(e.target.value);
                  setEstimate(null);
                  setShowConfirmation(false);
                }}
                disabled={isCalculating}
                className="w-4 h-4  focus:ring-primary" style={{color: gradient.from}}
              />
              <span>Urgente (+30%)</span>
            </label>
          </div>
        </div>

        <Button 
          onClick={calculate}
          disabled={!service || isCalculating}
          className="w-full  hover: text-lg py-6 transition-all" style={{backgroundColor: gradient.from}}
        >
          {isCalculating ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              A calcular...
            </>
          ) : (
            <>
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Preço
            </>
          )}
        </Button>

        {showConfirmation && !isCalculating && (
          <div className="flex items-center gap-2 text-green-700 bg-green-50 p-3 rounded-lg animate-fade-in">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-semibold">Cálculo concluído!</span>
          </div>
        )}

        {estimate !== null && !isCalculating && (
          <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 rounded-lg p-6 text-center animate-slide-up">
            <p className="text-gray-700 mb-2 font-semibold">Estimativa:</p>
            <p className="text-5xl font-bold text-green-700 mb-2">
              {estimate}€
            </p>
            <p className="text-sm text-gray-600">
              *Preço indicativo. Orçamento final após avaliação.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t">
        <p className="text-center text-gray-600 mb-3 font-semibold">
          Quer um orçamento exato?
        </p>
        <a 
          href={`tel:${config.phone}`}
          className="block w-full text-white text-center py-3 rounded-lg font-bold hover:opacity-90 transition-all hover:scale-105 transform" 
          style={{backgroundColor: gradient.from}}
        >
          📞 Ligue: {config.phone.slice(0, 3)} {config.phone.slice(3, 6)} {config.phone.slice(6)}
        </a>
      </div>
    </Card>
  );
}
