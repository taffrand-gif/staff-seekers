import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { NORTE_REPAROS_FAQ, STAFF_SEEKERS_FAQ, FAQ_CATEGORIES, type FAQItem } from "@/data/faqData";

export default function FAQSection() {
  const { gradient } = ACTIVE_CONFIG;
  const config = ACTIVE_CONFIG;
  const isStaffSeekers = config.type === 'electricite';
  const allFAQs = isStaffSeekers ? STAFF_SEEKERS_FAQ : NORTE_REPAROS_FAQ;
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  // Filtrer les FAQs
  const faqs = allFAQs.filter((faq) => {
    const safeToLowerCase = (str: any) => typeof str === 'string' ? str.toLowerCase() : String(str).toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      safeToLowerCase(faq.question).includes(safeToLowerCase(searchQuery)) ||
      safeToLowerCase(faq.answer).includes(safeToLowerCase(searchQuery));
    
    const matchesCategory =
      selectedCategory === "Todos" || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos serviços de {(typeof config.name === 'string' ? config.name : String(config.name)).toLowerCase()} de urgência
        </p>

        {/* Search and Filters */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Pesquisar perguntas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {FAQ_CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <p className="text-sm text-gray-500">
              {faqs.length} {faqs.length === 1 ? "pergunta" : "perguntas"}
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Nenhuma pergunta encontrada</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Todos");
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={`item-${faq.id}`}
                  className="border rounded-lg px-4 bg-gray-50"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                    <div className="flex items-start gap-3 pr-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs" style={{backgroundColor: `${ACTIVE_CONFIG.gradient.from}20`, color: gradient.from}}>
                        {faq.id}
                      </span>
                      <div>
                        <p className="text-gray-900">{faq.question}</p>
                        <span className="text-xs text-gray-500 bg-white px-2 py-0.5 rounded mt-1 inline-block">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 pl-9 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </div>
  );
}


