#!/usr/bin/env python3
import os
import json

# Mapping des villes avec leurs zones et informations
VILLES = [
    # Zone 1
    {"slug": "macedo-cavaleiros", "nom": "Macedo de Cavaleiros", "zone": 1, "prix": "10€", "distance": "0 km", "temps": "0 min"},
    
    # Zone 2
    {"slug": "vila-flor", "nom": "Vila Flor", "zone": 2, "prix": "15€", "distance": "25 km", "temps": "25 min"},
    {"slug": "alfandega-da-fe", "nom": "Alfândega da Fé", "zone": 2, "prix": "15€", "distance": "30 km", "temps": "30 min"},
    {"slug": "mirandela", "nom": "Mirandela", "zone": 2, "prix": "15€", "distance": "37 km", "temps": "35 min"},
    {"slug": "carrazeda-de-ansiaes", "nom": "Carrazeda de Ansiães", "zone": 2, "prix": "15€", "distance": "45 km", "temps": "40 min"},
    
    # Zone 3
    {"slug": "braganca", "nom": "Bragança", "zone": 3, "prix": "25€", "distance": "27 km", "temps": "25 min"},
    {"slug": "vinhais", "nom": "Vinhais", "zone": 3, "prix": "25€", "distance": "40 km", "temps": "40 min"},
    {"slug": "vimioso", "nom": "Vimioso", "zone": 3, "prix": "25€", "distance": "50 km", "temps": "50 min"},
    {"slug": "torre-moncorvo", "nom": "Torre de Moncorvo", "zone": 3, "prix": "25€", "distance": "55 km", "temps": "55 min"},
    {"slug": "mogadouro", "nom": "Mogadouro", "zone": 3, "prix": "25€", "distance": "60 km", "temps": "60 min"},
    {"slug": "freixo-espada-cinta", "nom": "Freixo de Espada à Cinta", "zone": 3, "prix": "25€", "distance": "70 km", "temps": "70 min"},
    
    # Zone 4
    {"slug": "miranda-douro", "nom": "Miranda do Douro", "zone": 4, "prix": "30€", "distance": "75 km", "temps": "75 min"},
    {"slug": "vila-nova-foz-coa", "nom": "Vila Nova de Foz Côa", "zone": 4, "prix": "30€", "distance": "80 km", "temps": "80 min"},
    {"slug": "sao-joao-da-pesqueira", "nom": "São João da Pesqueira", "zone": 4, "prix": "30€", "distance": "85 km", "temps": "85 min"},
    {"slug": "murca", "nom": "Murça", "zone": 4, "prix": "30€", "distance": "65 km", "temps": "65 min"},
    {"slug": "valpacos", "nom": "Valpaços", "zone": 4, "prix": "30€", "distance": "70 km", "temps": "70 min"},
    
    # Zone 5
    {"slug": "vila-real", "nom": "Vila Real", "zone": 5, "prix": "35€", "distance": "90 km", "temps": "90 min"},
    {"slug": "alijo", "nom": "Alijó", "zone": 5, "prix": "35€", "distance": "85 km", "temps": "85 min"},
    {"slug": "sabrosa", "nom": "Sabrosa", "zone": 5, "prix": "35€", "distance": "95 km", "temps": "95 min"},
    {"slug": "tabuaco", "nom": "Tabuaço", "zone": 5, "prix": "35€", "distance": "100 km", "temps": "100 min"},
    {"slug": "armamar", "nom": "Armamar", "zone": 5, "prix": "35€", "distance": "105 km", "temps": "105 min"},
    {"slug": "peso-da-regua", "nom": "Peso da Régua", "zone": 5, "prix": "35€", "distance": "110 km", "temps": "110 min"},
    {"slug": "lamego", "nom": "Lamego", "zone": 5, "prix": "35€", "distance": "115 km", "temps": "115 min"},
    {"slug": "santa-marta-de-penaguiao", "nom": "Santa Marta de Penaguião", "zone": 5, "prix": "35€", "distance": "100 km", "temps": "100 min"},
    {"slug": "mesao-frio", "nom": "Mesão Frio", "zone": 5, "prix": "35€", "distance": "105 km", "temps": "105 min"},
    
    # Zone 6
    {"slug": "chaves", "nom": "Chaves", "zone": 6, "prix": "40€", "distance": "120 km", "temps": "120 min"},
    {"slug": "vila-pouca-de-aguiar", "nom": "Vila Pouca de Aguiar", "zone": 6, "prix": "40€", "distance": "125 km", "temps": "125 min"},
    {"slug": "boticas", "nom": "Boticas", "zone": 6, "prix": "40€", "distance": "130 km", "temps": "130 min"},
    {"slug": "montalegre", "nom": "Montalegre", "zone": 6, "prix": "40€", "distance": "135 km", "temps": "135 min"},
    {"slug": "ribeira-de-pena", "nom": "Ribeira de Pena", "zone": 6, "prix": "40€", "distance": "140 km", "temps": "140 min"},
    {"slug": "mondim-de-basto", "nom": "Mondim de Basto", "zone": 6, "prix": "40€", "distance": "145 km", "temps": "145 min"},
    {"slug": "moimenta-da-beira", "nom": "Moimenta da Beira", "zone": 6, "prix": "40€", "distance": "150 km", "temps": "150 min"},
    {"slug": "sernancelhe", "nom": "Sernancelhe", "zone": 6, "prix": "40€", "distance": "155 km", "temps": "155 min"},
    {"slug": "penedono", "nom": "Penedono", "zone": 6, "prix": "40€", "distance": "160 km", "temps": "160 min"},
]

# Villes existantes (10)
VILLES_EXISTANTES = [
    "braganca", "chaves", "freixo-espada-cinta", "macedo-cavaleiros", 
    "miranda-douro", "mirandela", "mogadouro", "torre-moncorvo", 
    "vila-real", "vinhais"
]

# Villes à créer (24)
VILLES_A_CREER = [
    "alfandega-da-fe", "alijo", "armamar", "boticas", "carrazeda-de-ansiaes", 
    "lamego", "mesao-frio", "moimenta-da-beira", "mondim-de-basto", 
    "montalegre", "murca", "penedono", "peso-da-regua", "ribeira-de-pena", 
    "sabrosa", "santa-marta-de-penaguiao", "sao-joao-da-pesqueira", 
    "sernancelhe", "tabuaco", "vila-flor", "vila-nova-foz-coa", 
    "vila-pouca-de-aguiar", "vimioso", "valpacos"
]

def get_ville_info(slug):
    """Retourne les informations d'une ville par son slug"""
    for ville in VILLES:
        if ville["slug"] == slug:
            return ville
    return None

def generate_html_template(ville_info):
    """Génère le template HTML pour une ville"""
    nom = ville_info["nom"]
    slug = ville_info["slug"]
    zone = ville_info["zone"]
    prix = ville_info["prix"]
    distance = ville_info["distance"]
    temps = ville_info["temps"]
    
    # Template HTML
    template = f'''<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Eletricista {nom} | Urgências 24h</title>
<meta name="description" content="Eletricista profissional em {nom}, Trás-os-Montes. Serviço 24h/7d. Telefone: +351 932 321 892" />
    <meta property="og:title" content="Eletricista {nom} | Urgências 24h" />
    <meta property="og:description" content="Eletricista profissional em {nom}. Quadros elétricos, certificação CERTIEL, urgências 24h. Ligue +351 932 321 892" />
    <meta property="og:url" content="https://staff-seekers.com/eletricista-{slug}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_PT" />
    <meta property="og:site_name" content="Staff Seekers - Eletricista Profissional" />
<meta name="keywords" content="eletricista {nom.lower()}, eletricista urgente {nom.lower()}, eletricista 24 horas {nom.lower()}, eletricista urgente, curto circuito urgente, reparação elétrica, quadro elétrico, certificação elétrica, eletricista 24 horas, {nom.lower()}, distrito {nom.lower()}" />
<link rel="canonical" href="https://staff-seekers.com/eletricista-{slug}">

<style>
body {{ margin: 0; font-family: 'Arial', sans-serif; color: #333; }}
a {{ text-decoration: none; }}
.header {{ background: #1a1a1a; color: white; padding: 20px; text-align: center; }}
.content {{ padding: 40px 20px; max-width: 1200px; margin: 0 auto; }}
h1 {{ color: #FF6B35; font-size: 36px; margin-bottom: 10px; }}
h2 {{ color: #333; font-size: 24px; margin-top: 30px; }}
h3 {{ color: #FF6B35; font-size: 20px; margin-top: 20px; }}
.distance-box {{ background: #fff3e0; padding: 20px; border-left: 4px solid #FF6B35; margin: 20px 0; }}
.urgence-box {{ background: #f5f5f5; padding: 30px; border-radius: 10px; margin: 30px 0; text-align: center; }}
.urgence-box h2 {{ color: #333; font-size: 28px; margin: 0 0 15px 0; }}
.urgence-box p {{ font-size: 24px; color: #FF6B35; font-weight: bold; margin: 0; }}
.advantages {{ background: #FF6B35; color: white; padding: 30px; border-radius: 10px; margin: 40px 0; }}
.local-section {{ background: #fafafa; padding: 25px; border-radius: 8px; margin: 25px 0; }}
.cta-center {{ text-align: center; padding: 30px; }}
.cta-btn {{ display: inline-block; background: #FF6B35; color: white; padding: 20px 40px; border-radius: 50px; font-size: 24px; font-weight: bold; }}
.footer {{ background: #1a1a1a; color: white; padding: 30px; text-align: center; }}
.footer p {{ font-size: 14px; opacity: 0.7; margin: 5px 0; }}
.taxa-box {{ background: #e8f5e9; padding: 25px; border-radius: 10px; border-left: 4px solid #4CAF50; margin: 30px 0; }}
.taxa-box h3 {{ color: #2E7D32; margin-top: 0; }}
</style>
    
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "Eletricista Profissional Trás-os-Montes",
  "telephone": "+351 932 321 892",
  "url": "https://staff-seekers.com/eletricista-{slug}",
  "address": {{
    "@type": "PostalAddress",
    "addressLocality": "{nom}",
    "addressRegion": "Trás-os-Montes",
    "addressCountry": "PT"
  }},
  "areaServed": {{
    "@type": "City",
    "name": "{nom}"
  }},
  "description": "Eletricista em {nom}, Trás-os-Montes",
  "@id": "https://staff-seekers.com/eletricista-{slug}"
}}
</script>
</head>
<body>
<header class="header">
<h1>Eletricista 24h Trás-os-Montes</h1>
<p style="margin: 5px 0; font-size: 16px;">Eletricista Profissional em Trás-os-Montes</p>
</header>

<section class="content">
<h1>Eletricista em {nom} - Disponível 24h</h1>

<div class="distance-box">
<p style="font-size: 16px; color: #555; margin: 0; line-height: 1.8;">
⚡ <strong>Distância desde Macedo de Cavaleiros:</strong> {distance} (aproximadamente {temps})<br>
🏙️ <strong>Zonas servidas em {nom}:</strong> Centro histórico, Zona comercial, Bairros residenciais, Zona industrial
</p>
</div>

<div class="taxa-box">
<h3>💰 Taxa de Deslocação para {nom}</h3>
<p style="font-size: 18px; line-height: 1.8;">
<strong>Zona {zone}:</strong> {nom} está na Zona {zone} do nosso sistema de deslocação.<br>
<strong>Taxa de deslocação:</strong> {prix} (inclui deslocação desde Macedo de Cavaleiros)
</p>
<p style="font-size: 14px; color: #666; margin-top: 10px;">
📌 <em>A taxa de deslocação é aplicável a todas as intervenções em {nom} e cobre os custos de transporte desde a nossa base em Macedo de Cavaleiros.</em>
</p>
</div>

<div class="urgence-box">
<h2>📞 URGÊNCIA ELÉTRICA EM {nom.upper()}? LIGUE JÁ!</h2>
<p><a href="tel:+351932321892" style="color: #FF6B35">+351 932 321 892</a></p>
<p style="font-size: 16px; margin-top: 10px;">
ou <a href="https://wa.me/351932321892?text=Olá,%20preciso%20eletricista%20{nom}" style="color: #25D366; font-weight: bold;">WhatsApp 💬</a>
</p>
</div>

<h2>Eletricista Certificado em {nom}</h2>
<p style="font-size: 18px; line-height: 1.8;">
Precisa de um <strong>eletricista urgente em {nom}</strong>? Garantimos intervenção rápida em <strong>{temps}</strong> desde Macedo de Cavaleiros. Sou especialista em <strong>instalações residenciais, comerciais e industriais</strong> na região de {nom}.
</p>

<div class="local-section">
<h3>🏠 Serviços Especializados em {nom}</h3>
<p style="font-size: 16px; line-height: 1.8; color: #555;">
Ofereço serviços completos de eletricidade para {nom} e arredores:
</p>
<ul style="font-size: 16px; line-height: 2; color: #555;">
<li><strong>Instalações elétricas novas</strong> em residências e comércio</li>
<li><strong>Reparação de avarias elétricas</strong> urgent