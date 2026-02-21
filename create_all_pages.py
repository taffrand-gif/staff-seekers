#!/usr/bin/env python3
import os
import json
from datetime import datetime

# Configuration
PUBLIC_DIR = "/Users/admin/.openclaw/workspace/sites/staff-seekers/main/client/public"
TELEPHONE = "+351 932 321 892"
WHATSAPP = "https://wa.me/351932321892"
COLOR = "#FF6B35"
BASE_URL = "https://staff-seekers.com"

# Système de zones
ZONES = {
    1: {"prix": "10€", "villes": ["Macedo de Cavaleiros"]},
    2: {"prix": "15€", "villes": ["Vila Flor", "Alfândega da Fé", "Mirandela", "Carrazeda de Ansiães"]},
    3: {"prix": "25€", "villes": ["Bragança", "Vinhais", "Vimioso", "Torre de Moncorvo", "Mogadouro", "Freixo de Espada à Cinta"]},
    4: {"prix": "30€", "villes": ["Miranda do Douro", "Vila Nova de Foz Côa", "São João da Pesqueira", "Murça", "Valpaços"]},
    5: {"prix": "35€", "villes": ["Vila Real", "Alijó", "Sabrosa", "Tabuaço", "Armamar", "Peso da Régua", "Lamego", "Santa Marta de Penaguião", "Mesão Frio"]},
    6: {"prix": "40€", "villes": ["Chaves", "Vila Pouca de Aguiar", "Boticas", "Montalegre", "Ribeira de Pena", "Mondim de Basto", "Moimenta da Beira", "Sernancelhe", "Penedono"]}
}

# Villes avec slugs et informations
VILLES = [
    # Zone 1
    {"slug": "macedo-cavaleiros", "nom": "Macedo de Cavaleiros", "zone": 1, "distance": "0 km", "temps": "0 min"},
    
    # Zone 2
    {"slug": "vila-flor", "nom": "Vila Flor", "zone": 2, "distance": "25 km", "temps": "25 min"},
    {"slug": "alfandega-da-fe", "nom": "Alfândega da Fé", "zone": 2, "distance": "30 km", "temps": "30 min"},
    {"slug": "mirandela", "nom": "Mirandela", "zone": 2, "distance": "37 km", "temps": "35 min"},
    {"slug": "carrazeda-de-ansiaes", "nom": "Carrazeda de Ansiães", "zone": 2, "distance": "45 km", "temps": "40 min"},
    
    # Zone 3
    {"slug": "braganca", "nom": "Bragança", "zone": 3, "distance": "27 km", "temps": "25 min"},
    {"slug": "vinhais", "nom": "Vinhais", "zone": 3, "distance": "40 km", "temps": "40 min"},
    {"slug": "vimioso", "nom": "Vimioso", "zone": 3, "distance": "50 km", "temps": "50 min"},
    {"slug": "torre-moncorvo", "nom": "Torre de Moncorvo", "zone": 3, "distance": "55 km", "temps": "55 min"},
    {"slug": "mogadouro", "nom": "Mogadouro", "zone": 3, "distance": "60 km", "temps": "60 min"},
    {"slug": "freixo-espada-cinta", "nom": "Freixo de Espada à Cinta", "zone": 3, "distance": "70 km", "temps": "70 min"},
    
    # Zone 4
    {"slug": "miranda-douro", "nom": "Miranda do Douro", "zone": 4, "distance": "75 km", "temps": "75 min"},
    {"slug": "vila-nova-foz-coa", "nom": "Vila Nova de Foz Côa", "zone": 4, "distance": "80 km", "temps": "80 min"},
    {"slug": "sao-joao-da-pesqueira", "nom": "São João da Pesqueira", "zone": 4, "distance": "85 km", "temps": "85 min"},
    {"slug": "murca", "nom": "Murça", "zone": 4, "distance": "65 km", "temps": "65 min"},
    {"slug": "valpacos", "nom": "Valpaços", "zone": 4, "distance": "70 km", "temps": "70 min"},
    
    # Zone 5
    {"slug": "vila-real", "nom": "Vila Real", "zone": 5, "distance": "90 km", "temps": "90 min"},
    {"slug": "alijo", "nom": "Alijó", "zone": 5, "distance": "85 km", "temps": "85 min"},
    {"slug": "sabrosa", "nom": "Sabrosa", "zone": 5, "distance": "95 km", "temps": "95 min"},
    {"slug": "tabuaco", "nom": "Tabuaço", "zone": 5, "distance": "100 km", "temps": "100 min"},
    {"slug": "armamar", "nom": "Armamar", "zone": 5, "distance": "105 km", "temps": "105 min"},
    {"slug": "peso-da-regua", "nom": "Peso da Régua", "zone": 5, "distance": "110 km", "temps": "110 min"},
    {"slug": "lamego", "nom": "Lamego", "zone": 5, "distance": "115 km", "temps": "115 min"},
    {"slug": "santa-marta-de-penaguiao", "nom": "Santa Marta de Penaguião", "zone": 5, "distance": "100 km", "temps": "100 min"},
    {"slug": "mesao-frio", "nom": "Mesão Frio", "zone": 5, "distance": "105 km", "temps": "105 min"},
    
    # Zone 6
    {"slug": "chaves", "nom": "Chaves", "zone": 6, "distance": "120 km", "temps": "120 min"},
    {"slug": "vila-pouca-de-aguiar", "nom": "Vila Pouca de Aguiar", "zone": 6, "distance": "125 km", "temps": "125 min"},
    {"slug": "boticas", "nom": "Boticas", "zone": 6, "distance": "130 km", "temps": "130 min"},
    {"slug": "montalegre", "nom": "Montalegre", "zone": 6, "distance": "135 km", "temps": "135 min"},
    {"slug": "ribeira-de-pena", "nom": "Ribeira de Pena", "zone": 6, "distance": "140 km", "temps": "140 min"},
    {"slug": "mondim-de-basto", "nom": "Mondim de Basto", "zone": 6, "distance": "145 km", "temps": "145 min"},
    {"slug": "moimenta-da-beira", "nom": "Moimenta da Beira", "zone": 6, "distance": "150 km", "temps": "150 min"},
    {"slug": "sernancelhe", "nom": "Sernancelhe", "zone": 6, "distance": "155 km", "temps": "155 min"},
    {"slug": "penedono", "nom": "Penedono", "zone": 6, "distance": "160 km", "temps": "160 min"},
]

def get_zone_for_city(city_name):
    """Retourne la zone pour une ville donnée"""
    for zone_num, zone_info in ZONES.items():
        if city_name in zone_info["villes"]:
            return zone_num, zone_info["prix"]
    return None, None

def get_city_info(slug):
    """Retourne les informations d'une ville par son slug"""
    for ville in VILLES:
        if ville["slug"] == slug:
            return ville
    return None

def generate_city_page(ville_info):
    """Génère une page HTML pour une ville"""
    slug = ville_info["slug"]
    nom = ville_info["nom"]
    zone_num, prix = get_zone_for_city(nom)
    distance = ville_info["distance"]
    temps = ville_info["temps"]
    
    # Contenu spécifique par ville
    if nom == "Lamego":
        zones_servies = "Centro histórico, Sé, Penude, Ferreirim, Cambres"
        specialites = "vinícolas e turismo religioso"
        faq_items = [
            {"q": "Precisa de eletricista para adegas em Lamego?", "a": "Sim, sou especialista em instalações elétricas para adegas e produção vinícola em Lamego."},
            {"q": "Como funciona a certificação elétrica em edifícios históricos?", "a": "Realizo certificação CERTIEL adaptada às necessidades dos edifícios históricos de Lamego."},
            {"q": "Quanto custa uma instalação elétrica nova em Lamego?", "a": "O preço varia conforme o tamanho da propriedade. Contacte para um orçamento gratuito."},
            {"q": "Atende urgências nos fins-de-semana em Lamego?", "a": "Sim, atendimento 24h/7d, incluindo fins-de-semana e feriados em Lamego."}
        ]
    elif nom == "Vila Real":
        zones_servies = "Centro, Mateus, Lordelo, Vila Marim, Parada de Cunhos"
        specialites = "universitárias e comerciais"
        faq_items = [
            {"q": "Eletricista para residências universitárias em Vila Real?", "a": "Sim, tenho experiência em instalações para residências estudantis e apartamentos em Vila Real."},
            {"q": "Precisa de certificação elétrica para alugar em Vila Real?", "a": "A certificação CERTIEL é obrigatória para arrendamento. Emito certificados válidos."},
            {"q": "Quanto custa instalar ar condicionado em Vila Real?", "a": "O preço inclui instalação elétrica específica para ar condicionado. Contacte para orçamento."},
            {"q": "Atende urgências 24h em Vila Real?", "a": "Sim, atendimento urgente 24 horas por dia em toda a área de Vila Real."}
        ]
    elif nom == "Chaves":
        zones_servies = "Centro histórico, Madalena, Santa Maria Maior, Vidago"
        specialites = "termal e turismo de saúde"
        faq_items = [
            {"q": "Eletricista para hotéis termais em Chaves?", "a": "Sim, especialista em instalações para estabelecimentos termais e hoteleiros em Chaves."},
            {"q": "Como modernizar instalações elétricas antigas em Chaves?", "a": "Realizo modernização completa preservando a arquitetura histórica de Chaves."},
            {"q": "Precisa de eletricista para piscinas aquecidas?", "a": "Sim, instalação e manutenção de sistemas elétricos para piscinas aquecidas."},
            {"q": "Atende urgências em Vidago?", "a": "Sim, atendimento em toda a região de Chaves, incluindo Vidago e arredores."}
        ]
    else:
        zones_servies = "Centro histórico, Zona comercial, Bairros residenciais, Zona industrial"
        specialites = "residenciais, comerciais e industriais"
        faq_items = [
            {"q": f"Precisa de eletricista urgente em {nom}?", "a": f"Sim, atendimento urgente 24h em {nom}. Chego em {temps} desde Macedo de Cavaleiros."},
            {"q": f"Como funciona a taxa de deslocação para {nom}?", "a": f"A taxa de {prix} cobre a deslocação desde Macedo de Cavaleiros até {nom}."},
            {"q": f"Quanto custa uma instalação elétrica nova em {nom}?", "a": f"O preço varia conforme o projeto. Contacte para um orçamento gratuito em {nom}."},
            {"q": f"Atende urgências 24h em {nom}?", "a": f"Sim, atendimento 24 horas por dia, 7 dias por semana em {nom} e arredores."}
        ]
    
    # Générer le HTML
    html = f'''<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Eletricista {nom} | Urgências 24h</title>
<meta name="description" content="Eletricista profissional em {nom}, Trás-os-Montes. Serviço 24h/7d. Telefone: {TELEPHONE}" />
<meta property="og:title" content="Eletricista {nom} | Urgências 24h" />
<meta property="og:description" content="Eletricista profissional em {nom}. Quadros elétricos, certificação CERTIEL, urgências 24h. Ligue {TELEPHONE}" />
<meta property="og:url" content="{BASE_URL}/eletricista-{slug}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_PT" />
<meta property="og:site_name" content="Staff Seekers - Eletricista Profissional" />
<meta name="keywords" content="eletricista {nom.lower()}, eletricista urgente {nom.lower()}, eletricista 24 horas {nom.lower()}, eletricista urgente, curto circuito urgente, reparação elétrica, quadro elétrico, certificação elétrica, eletricista 24 horas, {nom.lower()}" />
<link rel="canonical" href="{BASE_URL}/eletricista-{slug}">

<style>
body {{ margin: 0; font-family: 'Arial', sans-serif; color: #333; }}
a {{ text-decoration: none; }}
.header {{ background: #1a1a1a; color: white; padding: 20px; text-align: center; }}
.content {{ padding: 40px 20px; max-width: 1200px; margin: 0 auto; }}
h1 {{ color: {COLOR}; font-size: 36px; margin-bottom: 10px; }}
h2 {{ color: #333; font-size: 24px; margin-top: 30px; }}
h3 {{ color: {COLOR}; font-size: 20px; margin-top: 20px; }}
.distance-box {{ background: #fff3e0; padding: 20px; border-left: 4px solid {COLOR}; margin: 20px 0; }}
.urgence-box {{ background: #f5f5f5; padding: 30px; border-radius: 10px; margin: 30px 0; text-align: center; }}
.urgence-box h2 {{ color: #333; font-size: 28px; margin: 0 0 15px 0; }}
.urgence-box p {{ font-size: 24px; color: {COLOR}; font-weight: bold; margin: 0; }}
.advantages {{ background: {COLOR}; color: white; padding: 30px; border-radius: 10px; margin: 40px 0; }}
.local-section {{ background: #fafafa; padding: 25px; border-radius: 8px; margin: 25px 0; }}
.cta-center {{ text-align: center; padding: 30px; }}
.cta-btn {{ display: inline-block; background: {COLOR}; color: white; padding: 20px 40px; border-radius: 50px; font-size: 24px; font-weight: bold; min-height: 44px; min-width: 44px; }}
.footer {{ background: #1a1a1a; color: white; padding: 30px; text-align: center; }}
.footer p {{ font-size: 14px; opacity: 0.7; margin: 5px 0; }}
.taxa-box {{ background: #e8f5e9; padding: 25px; border-radius: 10px; border-left: 4px solid #4CAF50; margin: 30px 0; }}
.taxa-box h3 {{ color: #2E7D32; margin-top: 0; }}
.faq-section {{ background: #f0f8ff; padding: 25px; border-radius: 10px; margin: 30px 0; }}
.faq-item {{ margin-bottom: 20px; }}
.faq-question {{ font-weight: bold; color: {COLOR}; margin-bottom: 5px; }}
.faq-answer {{ color: #555; }}
</style>
    
<script type="application/ld+