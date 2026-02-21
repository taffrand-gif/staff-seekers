#!/usr/bin/env python3
"""Part 1: Define the template and city data"""
import os

BASE = "/Users/admin/projects/staff-seekers/client/public"
BLOG = os.path.join(BASE, "blog")

CORRECT_PRICE_TABLE = '''<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
<h3 style="color:#FF6B35;font-size:22px;margin:0 0 20px;text-align:center">💰 Tabela de Taxas de Deslocação</h3>
<table style="width:100%;border-collapse:collapse;font-size:15px">
<thead>
<tr style="background:#FF6B35;color:white">
<th style="padding:12px;text-align:left;border-radius:8px 0 0 0">Zona</th>
<th style="padding:12px;text-align:left">Cidades</th>
<th style="padding:12px;text-align:center;border-radius:0 8px 0 0">Taxa</th>
</tr>
</thead>
<tbody>
<tr style="background:#fff"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 1</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Macedo de Cavaleiros</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">15€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 2</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Vila Flor, Alfândega da Fé, Mirandela, Carrazeda de Ansiães</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">20€</td></tr>
<tr style="background:#fff"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 3</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Bragança, Vinhais, Vimioso, Torre de Moncorvo, Mogadouro, Freixo de Espada à Cinta</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">30€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 4</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Miranda do Douro, Vila Nova de Foz Côa, São João da Pesqueira, Murça, Valpaços</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">35€</td></tr>
<tr style="background:#fff"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 5</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Peso da Régua, Lamego, Santa Marta de Penaguião, Mesão Frio</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">45€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px"><strong>Zona 6</strong></td><td style="padding:10px">Chaves, Vila Pouca de Aguiar, Boticas, Montalegre, Ribeira de Pena, Mondim de Basto, Moimenta da Beira, Sernancelhe, Penedono</td><td style="padding:10px;text-align:center;font-weight:bold;color:#FF6B35">50€</td></tr>
</tbody>
</table>
<p style="font-size:13px;color:#888;margin:15px 0 0;text-align:center">* Taxa única por deslocação. Orçamento do serviço à parte, gratuito e sem compromisso.</p>
</div>'''

# City data: slug, city_name, zona, price, dist_km, dist_min, zones_served, specialty_title, specialty_desc, specialty_items, problems, review1, rev1_name, review2, rev2_name, keywords
CITIES = [
    {
        "slug": "alfandega-da-fe",
        "city": "Alfândega da Fé",
        "zona": 2, "price": 20, "km": 30, "min": 30,
        "zones": "Centro, Sendim da Serra, Vilar Chão, Sambade",
        "spec_title": "🏛️ Especialista em Casas Tradicionais",
        "spec_desc": "Alfândega da Fé tem um património arquitetónico rico com casas de granito tradicionais. Tenho experiência em:",
        "spec_items": ["Modernização de instalações elétricas em casas de pedra","Certificação elétrica CERTIEL para habitações antigas","Instalação de sistemas de aquecimento elétrico","Iluminação interior e exterior para propriedades rurais"],
        "problems": ["Instalações antigas com cablagem deteriorada","Quadros elétricos desatualizados sem disjuntores diferenciais","Problemas de tensão em zonas rurais","Avarias por tempestades frequentes na região","Necessidade de certificação para venda ou arrendamento"],
        "r1": "Veio rápido e resolveu o problema do quadro elétrico. Muito profissional.", "r1n": "António R., Centro",
        "r2": "Excelente trabalho na instalação elétrica da minha casa antiga. Recomendo!", "r2n": "Fernanda L., Sambade",
    },
    {
        "slug": "carrazeda-de-ansiaes",
        "city": "Carrazeda de Ansiães",
        "zona": 2, "price": 20, "km": 45, "min": 40,
        "zones": "Centro, Linhares, Vilarinho da Castanheira, Pombal",
        "spec_title": "🍇 Especialista em Quintas Vinícolas",
        "spec_desc": "Carrazeda de Ansiães é terra de vinho do Porto e Douro. Tenho experiência em:",
        "spec_items": ["Instalações elétricas para quintas vinícolas e adegas","Sistemas de refrigeração para armazenamento de vinho","Iluminação para caves e armazéns","Painéis solares para propriedades agrícolas"],
        "problems": ["Instalações antigas em quintas centenárias","Sobrecarga elétrica durante a vindima","Sistemas trifásicos para equipamento agrícola","Avarias por humidade em caves e adegas","Certificação elétrica para turismo rural"],
        "r1": "Fez a instalação completa da minha adega. Trabalho impecável.", "r1n": "Manuel P., Linhares",
        "r2": "Profissional de confiança. Resolveu uma avaria urgente no fim de semana.", "r2n": "Rosa M., Centro",
    },
    {
        "slug": "vila-pouca-de-aguiar",
        "city": "Vila Pouca de Aguiar",
        "zona": 6, "price": 50, "km": 95, "min": 70,
        "zones": "Centro, Pedras Salgadas, Telões, Alvão",
        "spec_title": "♨️ Especialista em Termas e Turismo",
        "spec_desc": "Vila Pouca de Aguiar é conhecida pelas Termas de Pedras Salgadas. Tenho experiência em:",
        "spec_items": ["Instalações elétricas para unidades hoteleiras e termais","Sistemas de aquecimento e climatização","Iluminação para espaços turísticos","Certificação elétrica para alojamento local"],
        "problems": ["Sobrecarga em unidades hoteleiras durante época alta","Instalações antigas em edifícios históricos","Sistemas de aquecimento elétrico ineficientes","Avarias por humidade em zonas termais","Quadros elétricos subdimensionados"],
        "r1": "Instalou todo o sistema elétrico do meu alojamento local. Perfeito.", "r1n": "Carlos F., Pedras Salgadas",
        "r2": "Rápido e eficiente. Resolveu o problema da minha casa em Telões.", "r2n": "Ana S., Telões",
    },
    {
        "slug": "boticas",
        "city": "Boticas",
        "zona": 6, "price": 50, "km": 110, "min": 80,
        "zones": "Centro, Ardãos, Beça, Granja",
        "spec_title": "🏔️ Especialista em Zonas de Montanha",
        "spec_desc": "Boticas situa-se no coração do Barroso, zona de montanha. Tenho experiência em:",
        "spec_items": ["Instalações elétricas resistentes a condições climatéricas severas","Sistemas de aquecimento para invernos rigorosos","Proteção contra raios e sobretensões","Painéis solares para propriedades isoladas"],
        "problems": ["Cortes de energia frequentes por tempestades","Instalações danificadas por raios","Problemas de tensão em zonas remotas","Aquecimento elétrico insuficiente","Necessidade de geradores de emergência"],
        "r1": "Instalou proteção contra raios na minha casa. Trabalho excelente.", "r1n": "José M., Ardãos",
        "r2": "Veio mesmo com neve. Profissional dedicado. Muito obrigado!", "r2n": "Teresa R., Centro",
    },
    {
        "slug": "ribeira-de-pena",
        "city": "Ribeira de Pena",
        "zona": 6, "price": 50, "km": 100, "min": 75,
        "zones": "Centro, Cerva, Limões, Salvador",
        "spec_title": "🌊 Especialista em Zonas Ribeirinhas",
        "spec_desc": "Ribeira de Pena é banhada pelo rio Tâmega. Tenho experiência em:",
        "spec_items": ["Instalações elétricas para casas junto ao rio","Proteção contra humidade e inundações","Sistemas para turismo rural e fluvial","Iluminação exterior para propriedades ribeirinhas"],
        "problems": ["Humidade excessiva que danifica instalações","Cortes de energia por cheias sazonais","Instalações antigas em casas de pedra","Quadros elétricos oxidados pela humidade","Necessidade de proteção diferencial reforçada"],
        "r1": "Resolveu o problema de humidade no quadro elétrico. Excelente!", "r1n": "Paulo A., Cerva",
        "r2": "Profissional competente. Fez a certificação da minha casa rapidamente.", "r2n": "Luísa F., Centro",
    },
    {
        "slug": "mondim-de-basto",
        "city": "Mondim de Basto",
        "zona": 6, "price": 50, "km": 105, "min": 80,
        "zones": "Centro, Vilar de Ferreiros, Atei, Campanhó",
        "spec_title": "⛰️ Especialista na Serra do Alvão",
        "spec_desc": "Mondim de Basto é a porta de entrada da Serra do Alvão. Tenho experiência em:",
        "spec_items": ["Instalações para casas de montanha e turismo rural","Sistemas de aquecimento elétrico eficientes","Proteção contra descargas atmosféricas","Painéis solares para propriedades de altitude"],
        "problems": ["Tempestades frequentes com descargas elétricas","Instalações antigas em aldeias de montanha","Problemas de tensão em zonas elevadas","Aquecimento insuficiente no inverno","Necessidade de certificação para turismo rural"],
        "r1": "Instalou o sistema elétrico completo da minha casa de turismo rural.", "r1n": "Ricardo L., Atei",
        "r2": "Muito profissional. Veio de longe mas fez um trabalho impecável.", "r2n": "Marta C., Centro",
    },
    {
        "slug": "moimenta-da-beira",
        "city": "Moimenta da Beira",
        "zona": 6, "price": 50, "km": 120, "min": 90,
        "zones": "Centro, Leomil, Castelo, Peva",
        "spec_title": "🍎 Especialista em Zona Agrícola",
        "spec_desc": "Moimenta da Beira é uma região de tradição agrícola e vinícola. Tenho experiência em:",
        "spec_items": ["Instalações para adegas e armazéns agrícolas","Sistemas de rega automatizada","Iluminação para explorações agrícolas","Quadros elétricos para equipamento trifásico"],
        "problems": ["Instalações antigas em propriedades rurais","Sobrecarga por equipamento agrícola","Avarias em sistemas de rega elétricos","Falta de proteção diferencial adequada","Necessidade de certificação para comércio local"],
        "r1": "Modernizou toda a instalação da minha adega. Trabalho de qualidade.", "r1n": "Joaquim S., Leomil",
        "r2": "Profissional sério e pontual. Recomendo a todos.", "r2n": "Helena P., Centro",
    },
    {
        "slug": "sernancelhe",
        "city": "Sernancelhe",
        "zona": 6, "price": 50, "km": 130, "min": 95,
        "zones": "Centro, Penso, Freixinho, Ferreirim",
        "spec_title": "🌰 Especialista em Património Rural",
        "spec_desc": "Sernancelhe é terra de castanhas e património histórico. Tenho experiência em:",
        "spec_items": ["Modernização elétrica em edifícios históricos","Instalações para secagem e armazenamento de castanha","Iluminação para igrejas e monumentos","Certificação elétrica para turismo rural"],
        "problems": ["Cablagem antiga em casas centenárias","Quadros elétricos obsoletos com fusíveis","Problemas de aterramento em casas de pedra","Instalações subdimensionadas para uso moderno","Avarias por humidade em edifícios antigos"],
        "r1": "Fez a instalação elétrica nova na minha casa antiga. Excelente resultado.", "r1n": "Alberto M., Penso",
        "r2": "Muito competente. Resolveu um problema que outros não conseguiram.", "r2n": "Graça T., Centro",
    },
    {
        "slug": "penedono",
        "city": "Penedono",
        "zona": 6, "price": 50, "km": 135, "min": 100,
        "zones": "Centro, Antas, Castainço, Póvoa de Penela",
        "spec_title": "🏰 Especialista em Castelos e Património",
        "spec_desc": "Penedono é terra do famoso Castelo de Penedono. Tenho experiência em:",
        "spec_items": ["Instalações elétricas em edifícios classificados","Iluminação para monumentos e espaços culturais","Modernização respeitando a arquitetura original","Certificação elétrica para turismo e eventos"],
        "problems": ["Instalações muito antigas em casas de granito","Falta de tomadas e circuitos suficientes","Quadros elétricos com fusíveis antigos","Problemas de isolamento em paredes de pedra","Necessidade de certificação para alojamento local"],
        "r1": "Trabalho cuidadoso na minha casa junto ao castelo. Muito bom.", "r1n": "Fernando G., Centro",
        "r2": "Profissional e respeitador do património. Recomendo!", "r2n": "Isabel N., Antas",
    },
    {
        "slug": "murca",
        "city": "Murça",
        "zona": 4, "price": 35, "km": 65, "min": 55,
        "zones": "Centro, Fiolhoso, Jou, Noura",
        "spec_title": "🐗 Especialista em Zona Vinícola",
        "spec_desc": "Murça é conhecida pela Porca de Murça e pela produção vinícola. Tenho experiência em:",
        "spec_items": ["Instalações para adegas e caves de vinho","Sistemas de climatização para armazenamento","Iluminação para quintas e propriedades rurais","Quadros elétricos para equipamento agrícola"],
        "problems": ["Instalações antigas em quintas vinícolas","Sobrecarga durante a época de vindima","Humidade em caves que afeta instalações","Quadros elétricos desatualizados","Necessidade de certificação para enoturismo"],
        "r1": "Instalou o sistema elétrico da minha adega nova. Perfeito.", "r1n": "Vítor R., Fiolhoso",
        "r2": "Rápido e eficiente. Resolveu a avaria no mesmo dia.", "r2n": "Conceição M., Centro",
    },
    {
        "slug": "tabuaco",
        "city": "Tabuaço",
        "zona": 5, "price": 45, "km": 100, "min": 75,
        "zones": "Centro, Sendim, Valença do Douro, Barcos",
        "spec_title": "🍷 Especialista em Quintas do Douro",
        "spec_desc": "Tabuaço está no coração do Douro Vinhateiro, Património Mundial. Tenho experiência em:",
        "spec_items": ["Instalações para quintas do Douro e enoturismo","Sistemas elétricos para produção vinícola","Iluminação para caves e salas de provas","Painéis solares para propriedades rurais"],
        "problems": ["Instalações antigas em quintas centenárias","Sobrecarga por equipamento de vinificação","Humidade em caves subterrâneas","Acesso difícil a propriedades no Douro","Certificação para alojamento turístico"],
        "r1": "Fez toda a instalação da minha quinta no Douro. Trabalho exemplar.", "r1n": "Duarte P., Valença do Douro",
        "r2": "Profissional competente mesmo em zonas de difícil acesso.", "r2n": "Beatriz S., Centro",
    },
    {
        "slug": "armamar",
        "city": "Armamar",
        "zona": 5, "price": 45, "km": 105, "min": 80,
        "zones": "Centro, Goujoim, Fontelo, Queimada",
        "spec_title": "🍎 Especialista em Zona Frutícola",
        "spec_desc": "Armamar é a capital da maçã de montanha. Tenho experiência em:",
        "spec_items": ["Instalações para câmaras frigoríficas de fruta","Sistemas elétricos para cooperativas agrícolas","Iluminação para armazéns e pomares","Quadros elétricos trifásicos para indústria"],
        "problems": ["Sobrecarga em câmaras frigoríficas","Instalações industriais desatualizadas","Problemas em sistemas trifásicos","Avarias por picos de tensão","Certificação para instalações comerciais"],
        "r1": "Instalou o quadro elétrico do meu armazém de fruta. Excelente.", "r1n": "Rui A., Goujoim",
        "r2": "Trabalho profissional e dentro do prazo. Muito satisfeito.", "r2n": "Carla D., Centro",
    },
    {
        "slug": "santa-marta-de-penaguiao",
        "city": "Santa Marta de Penaguião",
        "zona": 5, "price": 45, "km": 90, "min": 70,
        "zones": "Centro, Fontes, Louredo, Medrões",
        "spec_title": "🍇 Especialista em Viticultura Duriense",
        "spec_desc": "Santa Marta de Penaguião é um dos concelhos mais vinícolas do Douro. Tenho experiência em:",
        "spec_items": ["Instalações para adegas cooperativas","Sistemas de bombeamento para vinificação","Iluminação para caves e armazéns de vinho","Painéis solares para quintas durienses"],
        "problems": ["Instalações antigas em adegas cooperativas","Sobrecarga durante a vindima","Humidade que corrói instalações elétricas","Quadros elétricos subdimensionados","Necessidade de atualização para normas atuais"],
        "r1": "Modernizou a instalação da adega cooperativa. Trabalho sério.", "r1n": "Jorge L., Fontes",
        "r2": "Profissional de confiança. Sempre disponível quando preciso.", "r2n": "Fátima V., Centro",
    },
    {
        "slug": "mesao-frio",
        "city": "Mesão Frio",
        "zona": 5, "price": 45, "km": 85, "min": 65,
        "zones": "Centro, Barqueiros, Oliveira, Vila Marim",
        "spec_title": "🏞️ Especialista em Turismo do Douro",
        "spec_desc": "Mesão Frio é a porta de entrada do Douro Vinhateiro. Tenho experiência em:",
        "spec_items": ["Instalações para hotéis e turismo rural","Sistemas de climatização e aquecimento","Iluminação para espaços turísticos e eventos","Certificação elétrica para alojamento local"],
        "problems": ["Instalações antigas em solares e quintas","Sobrecarga em época turística alta","Sistemas de aquecimento ineficientes","Quadros elétricos obsoletos","Necessidade de certificação para turismo"],
        "r1": "Fez a instalação do meu hotel rural. Trabalho de primeira.", "r1n": "Nuno B., Barqueiros",
        "r2": "Muito profissional e pontual. Recomendo sem hesitar.", "r2n": "Sandra G., Centro",
    },
    {
        "slug": "vimioso",
        "city": "Vimioso",
        "zona": 3, "price": 30, "km": 55, "min": 50,
        "zones": "Centro, Algoso, Angueira, Caçarelhos",
        "spec_title": "🦅 Especialista em Zona Fronteiriça",
        "spec_desc": "Vimioso situa-se junto à fronteira com Espanha, zona de natureza preservada. Tenho experiência em:",
        "spec_items": ["Instalações para casas rurais e turismo de natureza","Sistemas de energia para zonas isoladas","Proteção contra descargas atmosféricas","Painéis solares para propriedades remotas"],
        "problems": ["Rede elétrica instável em zonas rurais","Cortes de energia frequentes","Instalações muito antigas em aldeias","Falta de proteção contra sobretensões","Necessidade de soluções autónomas de energia"],
        "r1": "Instalou painéis solares e proteção contra raios. Excelente trabalho.", "r1n": "Miguel T., Algoso",
        "r2": "Veio rapidamente resolver uma urgência. Muito profissional.", "r2n": "Dina C., Centro",
    },
    {
        "slug": "vila-nova-foz-coa",
        "city": "Vila Nova de Foz Côa",
        "zona": 4, "price": 35, "km": 80, "min": 65,
        "zones": "Centro, Castelo Melhor, Almendra, Muxagata",
        "spec_title": "🎨 Especialista em Zona Património Mundial",
        "spec_desc": "Vila Nova de Foz Côa é famosa pelas gravuras rupestres, Património Mundial UNESCO. Tenho experiência em:",
        "spec_items": ["Instalações para museus e espaços culturais","Iluminação técnica para exposições","Sistemas elétricos para turismo e hotelaria","Certificação elétrica para edifícios públicos"],
        "problems": ["Instalações antigas no centro histórico","Quadros elétricos desatualizados","Problemas de tensão em zonas rurais","Necessidade de iluminação eficiente","Certificação para estabelecimentos turísticos"],
        "r1": "Fez a instalação elétrica do meu restaurante. Trabalho perfeito.", "r1n": "Pedro V., Centro",
        "r2": "Profissional sério. Resolveu o problema rapidamente.", "r2n": "Cristina A., Castelo Melhor",
    },
    {
        "slug": "sao-joao-da-pesqueira",
        "city": "São João da Pesqueira",
        "zona": 4, "price": 35, "km": 90, "min": 70,
        "zones": "Centro, Trevões, Ervedosa do Douro, Vilarouco",
        "spec_title": "🍷 Especialista em Capital do Douro",
        "spec_desc": "São João da Pesqueira é considerada a capital do vinho do Douro. Tenho experiência em:",
        "spec_items": ["Instalações para grandes quintas vinícolas","Sistemas elétricos para lagares modernos","Iluminação para enoturismo e eventos","Painéis solares para propriedades do Douro"],
        "problems": ["Instalações antigas em quintas históricas","Sobrecarga em época de vindima","Sistemas trifásicos para lagares","Humidade em caves subterrâneas","Certificação para turismo e restauração"],
        "r1": "Modernizou a instalação da minha quinta. Trabalho exemplar.", "r1n": "Henrique D., Ervedosa do Douro",
        "r2": "Muito competente e profissional. Recomendo a 100%.", "r2n": "Margarida F., Centro",
    },
    {
        "slug": "peso-da-regua",
        "city": "Peso da Régua",
        "zona": 5, "price": 45, "km": 85, "min": 65,
        "zones": "Centro, Godim, Loureiro, Poiares",
        "spec_title": "🚂 Especialista na Capital do Douro",
        "spec_desc": "Peso da Régua é a capital da Região Demarcada do Douro. Tenho experiência em:",
        "spec_items": ["Instalações para caves de vinho do Porto","Sistemas elétricos para comércio e restauração","Iluminação para museus e espaços culturais","Certificação elétrica para hotelaria"],
        "problems": ["Instalações antigas no centro da cidade","Sobrecarga em estabelecimentos comerciais","Quadros elétricos desatualizados em prédios","Problemas de humidade junto ao rio Douro","Necessidade de certificação para comércio"],
        "r1": "Fez a instalação completa do meu restaurante junto ao rio. Top!", "r1n": "André M., Centro",
        "r2": "Profissional rápido e eficiente. Resolveu tudo num dia.", "r2n": "Patrícia L., Godim",
    },
]

# Also need sabrosa which is 0 bytes
CITIES.append({
    "slug": "sabrosa",
    "city": "Sabrosa",
    "zona": 5, "price": 45, "km": 80, "min": 60,
    "zones": "Centro, Provesende, Parada de Pinhão, Souto Maior",
    "spec_title": "🍇 Especialista em Terra de Fernão de Magalhães",
    "spec_desc": "Sabrosa é a terra natal de Fernão de Magalhães e coração do Douro. Tenho experiência em:",
    "spec_items": ["Instalações para quintas vinícolas do Douro","Sistemas elétricos para enoturismo","Iluminação para caves e salas de provas","Painéis solares para propriedades rurais"],
    "problems": ["Instalações antigas em quintas históricas","Sobrecarga durante a vindima","Humidade em caves de vinho","Quadros elétricos obsoletos","Certificação para alojamento turístico"],
    "r1": "Instalou o sistema elétrico da minha quinta em Provesende. Perfeito.", "r1n": "Tiago R., Provesende",
    "r2": "Muito profissional. Trabalho rápido e de qualidade.", "r2n": "Joana M., Centro",
})

print(f"Loaded {len(CITIES)} cities")
