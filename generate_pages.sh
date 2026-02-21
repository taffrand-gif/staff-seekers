#!/bin/bash

# Configuration
PUBLIC_DIR="/Users/admin/.openclaw/workspace/sites/staff-seekers/main/client/public"
TELEPHONE="+351 932 321 892"
WHATSAPP="https://wa.me/351932321892"
COLOR="#FF6B35"
BASE_URL="https://staff-seekers.com"

# Villes à créer (24 villes)
VILLES=(
    "alfandega-da-fe:Alfândega da Fé:2:30 km:30 min"
    "alijo:Alijó:5:85 km:85 min"
    "armamar:Armamar:5:105 km:105 min"
    "boticas:Boticas:6:130 km:130 min"
    "carrazeda-de-ansiaes:Carrazeda de Ansiães:2:45 km:40 min"
    "lamego:Lamego:5:115 km:115 min"
    "mesao-frio:Mesão Frio:5:105 km:105 min"
    "moimenta-da-beira:Moimenta da Beira:6:150 km:150 min"
    "mondim-de-basto:Mondim de Basto:6:145 km:145 min"
    "montalegre:Montalegre:6:135 km:135 min"
    "murca:Murça:4:65 km:65 min"
    "penedono:Penedono:6:160 km:160 min"
    "peso-da-regua:Peso da Régua:5:110 km:110 min"
    "ribeira-de-pena:Ribeira de Pena:6:140 km:140 min"
    "sabrosa:Sabrosa:5:95 km:95 min"
    "santa-marta-de-penaguiao:Santa Marta de Penaguião:5:100 km:100 min"
    "sao-joao-da-pesqueira:São João da Pesqueira:4:85 km:85 min"
    "sernancelhe:Sernancelhe:6:155 km:155 min"
    "tabuaco:Tabuaço:5:100 km:100 min"
    "vila-flor:Vila Flor:2:25 km:25 min"
    "vila-nova-foz-coa:Vila Nova de Foz Côa:4:80 km:80 min"
    "vila-pouca-de-aguiar:Vila Pouca de Aguiar:6:125 km:125 min"
    "vimioso:Vimioso:3:50 km:50 min"
    "valpacos:Valpaços:4:70 km:70 min"
)

# Prix par zone
declare -A ZONE_PRICES
ZONE_PRICES[1]="10€"
ZONE_PRICES[2]="15€"
ZONE_PRICES[3]="25€"
ZONE_PRICES[4]="30€"
ZONE_PRICES[5]="35€"
ZONE_PRICES[6]="40€"

echo "🚀 Début de la génération des 24 pages villes..."

for ville_info in "${VILLES[@]}"; do
    IFS=':' read -r slug nom zone distance temps <<< "$ville_info"
    prix=${ZONE_PRICES[$zone]}
    
    echo "📝 Création de la page pour: $nom (Zone $zone - $prix)"
    
    # Créer le fichier HTML
    cat > "$PUBLIC_DIR/eletricista-$slug.html" << EOF
<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Eletricista $nom | Urgências 24h</title>
<meta name="description" content="Eletricista profissional em $nom, Trás-os-Montes. Serviço 24h/7d. Telefone: $TELEPHONE" />
<meta property="og:title" content="Eletricista $nom | Urgências 24h" />
<meta property="og:description" content="Eletricista profissional em $nom. Quadros elétricos, certificação CERTIEL, urgências 24h. Ligue $TELEPHONE" />
<meta property="og:url" content="$BASE_URL/eletricista-$slug" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_PT" />
<meta property="og:site_name" content="Staff Seekers - Eletricista Profissional" />
<meta name="keywords" content="eletricista ${nom,,}, eletricista urgente ${nom,,}, eletricista 24 horas ${nom,,}, eletricista urgente, curto circuito urgente, reparação elétrica, quadro elétrico, certificação elétrica, eletricista 24 horas, ${nom,,}" />
<link rel="canonical" href="$BASE_URL/eletricista-$slug">

<style>
body { margin: 0; font-family: 'Arial', sans-serif; color: #333; }
a { text-decoration: none; }
.header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
.content { padding: 40px 20px; max-width: 1200px; margin: 0 auto; }
h1 { color: $COLOR; font-size: 36px; margin-bottom: 10px; }
h2 { color: #333; font-size: 24px; margin-top: 30px; }
h3 { color: $COLOR; font-size: 20px; margin-top: 20px; }
.distance-box { background: #fff3e0; padding: 20px; border-left: 4px solid $COLOR; margin: 20px 0; }
.urgence-box { background: #f5f5f5; padding: 30px; border-radius: 10px; margin: 30px 0; text-align: center; }
.urgence-box h2 { color: #333; font-size: 28px; margin: 0 0 15px 0; }
.urgence-box p { font-size: 24px; color: $COLOR; font-weight: bold; margin: 0; }
.advantages { background: $COLOR; color: white; padding: 30px; border-radius: 10px; margin: 40px 0; }
.local-section { background: #fafafa; padding: 25px; border-radius: 8px; margin: 25px 0; }
.cta-center { text-align: center; padding: 30px; }
.cta-btn { display: inline-block; background: $COLOR; color: white; padding: 20px 40px; border-radius: 50px; font-size: 24px; font-weight: bold; min-height: 44px; min-width: 44px; }
.footer { background: #1a1a1a; color: white; padding: 30px; text-align: center; }
.footer p { font-size: 14px; opacity: 0.7; margin: 5px 0; }
.taxa-box { background: #e8f5e9; padding: 25px; border-radius: 10px; border-left: 4px solid #4CAF50; margin: 30px 0; }
.taxa-box h3 { color: #2E7D32; margin-top: 0; }
.faq-section { background: #f0f8ff; padding: 25px; border-radius: 10px; margin: 30px 0; }
.faq-item { margin-bottom: 20px; }
.faq-question { font-weight: bold; color: $COLOR; margin-bottom: 5px; }
.faq-answer { color: #555; }
</style>
    
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "Eletricista Profissional Trás-os-Montes",
  "telephone": "$TELEPHONE",
  "url": "$BASE_URL/eletricista-$slug",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "$nom",
    "addressRegion": "Trás-os-Montes",
    "addressCountry": "PT"
  },
  "areaServed": {
    "@type": "City",
    "name": "$nom"
  },
  "description": "Eletricista em $nom, Trás-os-Montes",
  "@id": "$BASE_URL/eletricista-$slug"
}
</script>
</head>
<body>
<header class="header">
<h1>Eletricista 24h Trás-os-Montes</h1>
<p style="margin: 5px 0; font-size: 16px;">Eletricista Profissional em Trás-os-Montes</p>
</header>

<section class="content">
<h1>Eletricista em $nom - Disponível 24h</h1>

<div class="distance-box">
<p style="font-size: 16px; color: #555; margin: 0; line-height: 1.8;">
⚡ <strong>Distância desde Macedo de Cavaleiros:</strong> $distance (aproximadamente $temps)<br>
🏙️ <strong>Zonas servidas em $nom:</strong> Centro histórico, Zona comercial, Bairros residenciais, Zona industrial
</p>
</div>

<div class="taxa-box">
<h3>💰 Taxa de Deslocação para $nom</h3>
<p style="font-size: 18px; line-height: 1.8;">
<strong>Zona $zone:</strong> $nom está na Zona $zone do nosso sistema de deslocação.<br>
<strong>Taxa de deslocação:</strong> $prix (inclui deslocação desde Macedo de Cavaleiros)
</p>
<p style="font-size: 14px; color: #666; margin-top: 10px;">
📌 <em>A taxa de deslocação é aplicável a todas as intervenções em $nom e cobre os custos de transporte desde a nossa base em Macedo de Cavaleiros.</em>
</p>
</div>

<div class="urgence-box">
<h2>📞 URGÊNCIA ELÉTRICA EM ${nom^^}? LIGUE JÁ!</h2>
<p><a href="tel:$TELEPHONE" style="color: $COLOR">$TELEPHONE</a></p>
<p style="font-size: 16px; margin-top: 10px;">
ou <a href="$WHATSAPP?text=Olá,%20preciso%20eletricista%20$nom" style="color: #25D366; font-weight: bold;">WhatsApp 💬</a>
</p>
</div>

<h2>Eletricista Certificado em $nom</h2>
<p style="font-size: 18px; line-height: 1.8;">
Precisa de um <strong>eletricista urgente em $nom</strong>? Garantimos intervenção rápida em <strong>$temps</strong> desde Macedo de Cavaleiros. Sou especialista em <strong>instalações residenciais, comerciais e industriais</strong> na região de $nom.
</p>

<div class="local-section">
<h3>🏠 Serviços Especializados em $nom</h3>
<p style="font-size: 16px; line-height: 1.8; color: #555;">
Ofereço serviços completos de eletricidade para $nom e arredores:
</p>
<ul style="font-size: 16px; line-height: 2; color: #555;">
<li><strong>Instalações elétricas novas</strong> em residências e comércio</li>
<li><strong>Reparação de avarias elétricas</strong> urgentes</li>
<li><strong>Quadros elétricos</strong> modernos e seguros</li>
<li><strong>Certificação CERTIEL</strong> obrigatória</li>
<li><strong>Iluminação LED</strong> interior e exterior</li>
<li><strong>Sistemas de segurança</strong> e videovigilância</li>
<li><strong>Carregadores para veículos elétricos</strong></li>
<li><strong>Painéis solares</strong> e energias renováveis</li>
</ul>
</div>

<div class="advantages">
<h3>⚡ Porquê escolher-me em $nom?</h3>
<ul style="font-size: 18px; line-height: 2;">
<li>✅ Chegada em $temps desde Macedo de Cavaleiros</li>
<li>✅ Equipamento profissional Ridgid & Fluke</li>
<li>✅ Certificação CERTIEL garantida</li>
<li>✅ Disponíveis 24h/7d (inclusive fins-de-semana)</li>
<li>✅ Orçamento gratuito sem compromisso</li>
<li>✅ Garantia em todos os trabalhos</li>
<li>✅ Preços transparentes sem surpresas</li>
</ul>
</div>

<div class="faq-section">
<h3>❓ Perguntas Frequentes sobre Eletricista em $nom</h3>
<div class="faq-item">
<div class="faq-question">Precisa de eletricista urgente em $nom?</div>
<div class="faq-answer">Sim, atendimento urgente 24h em $nom. Chego em $temps desde Macedo de Cavaleiros.</div>
</div>
<div class="faq-item">
<div class="faq-question">Como funciona a taxa de deslocação para $nom?</div>
<div class="faq-answer">A taxa de $prix cobre a deslocação desde Macedo de Cavaleiros até $nom.</div>
</div>
<div class="faq-item">
<div class="faq-question">Quanto custa uma instalação elétrica nova em $nom?</div>
<div class="faq-answer">O preço varia conforme o projeto. Contacte para um orçamento gratuito em $nom.</div>
</div>
<div class="faq-item">
<div class="faq-question">Atende urgências 24h em $nom?</div>
<div class="faq-answer">Sim, atendimento 24 horas por dia, 7 dias por semana em $nom e arredores.</div>
</div>
</div>

<div class="cta-center">
<h2 style="color: #333; font-size: 28px; margin: 0 0 20px;">Não perca tempo! Ligue agora</h2>
<a href="tel:$TELEPHONE" class="cta-btn" style="margin: 10px;">📞 $TELEPHONE</a>
<br><br>
<a href="$WHATSAPP?text=Olá,%20preciso%20eletricista%20$nom" style="display: inline-block; background: #25D366; color: white; padding: 20px 40px; border-radius: 50px; font-size: 24px; font-weight: bold; text-decoration: none; margin: 10px; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3); min-height: 44px; min-width: 44px;">💬 WhatsApp</a>
</div>
</section>

<footer class="footer">
<p><strong>Eletricista Profissional Certificado em Trás-os-Montes</strong></p>
<p style="font-size: 14px; opacity: 0.7; margin-top: 10px;">⚡ Equipamento Ridgid & Fluke | 💯 Certificado CERTIEL | 📞 24h/7d</p>
<p style="font-size: 12px; opacity: 0.6; margin-top: 10px;">Macedo de Cavaleiros • $nom • Trás-os-Montes</p>

<div style="margin-top: 40px; padding: 25px; background: #f5f5f5; border-radius: 10px">
<h3 style="color: #333; margin-top: 0;">🏙️ Eletricista Noutras Cidades</h3>
<p style="font-size: 15px; line-height: 2">
<a href="/eletricista-braganca" style="color: $COLOR; text-decoration: none">Bragança</a> • <a href="/eletricista-chaves" style="color: $COLOR; text-decoration: none">Chaves</a> • <a href="/eletricista-macedo-cavaleiros" style="color: $COLOR; text-decoration: none">Macedo</a> • <a href="/eletricista-mirandela" style="color: $COLOR; text-decoration: none">Mirandela</a> • <a href="/eletricista-vila-real" style="color: $COLOR; text-decoration: none">Vila Real</a>
</p>
<p style="text-align: center; margin-top: 15px"><a href="/" style="color: $COLOR; font-weight: 700; text-decoration: none">← Página Inicial</a></p>
</div>
</footer>
</body>
</html>
EOF
    
    echo "✅ Page créée: eletricista-$slug.html"
done

echo "🎉 Génération terminée! 24 pages créées dans $PUBLIC_DIR"