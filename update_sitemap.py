#!/usr/bin/env python3
import os
from datetime import datetime

PUBLIC_DIR = "/Users/admin/.openclaw/workspace/sites/staff-seekers/main/client/public"
SITEMAP_PATH = os.path.join(PUBLIC_DIR, "sitemap.xml")
BASE_URL = "https://staff-seekers.com"
TODAY = datetime.now().strftime("%Y-%m-%d")

# 24 nouvelles villes
NEW_CITIES = [
    "alfandega-da-fe", "alijo", "armamar", "boticas", "carrazeda-de-ansiaes",
    "lamego", "mesao-frio", "moimenta-da-beira", "mondim-de-basto", "montalegre",
    "murca", "penedono", "peso-da-regua", "ribeira-de-pena", "sabrosa",
    "santa-marta-de-penaguiao", "sao-joao-da-pesqueira", "sernancelhe", "tabuaco",
    "vila-flor", "vila-nova-foz-coa", "vila-pouca-de-aguiar", "vimioso", "valpacos"
]

print("🗺️ Mise à jour du sitemap.xml avec les 24 nouvelles villes...")

# Lire le sitemap existant
with open(SITEMAP_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Trouver la fin de la section des villes existantes
# Nous allons ajouter après la dernière ville existante
marker = '<!-- Pages villes -->'
if marker in content:
    # Trouver la position après la dernière URL de ville
    # Nous allons insérer après la dernière </url> avant <!-- Services spéciaux -->
    services_marker = '<!-- Services spéciaux -->'
    
    if services_marker in content:
        before_services = content.split(services_marker)[0]
        after_services = services_marker + content.split(services_marker)[1]
        
        # Générer les nouvelles entrées
        new_entries = []
        for city in NEW_CITIES:
            entry = f'''  <url>
    <loc>{BASE_URL}/eletricista-{city}</loc>
    <lastmod>{TODAY}</lastmod>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>'''
            new_entries.append(entry)
        
        # Insérer les nouvelles entrées
        updated_before = before_services + '\n' + '\n'.join(new_entries) + '\n'
        new_content = updated_before + after_services
        
        # Écrire le nouveau sitemap
        with open(SITEMAP_PATH, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"✅ Sitemap mis à jour avec {len(NEW_CITIES)} nouvelles villes")
    else:
        print("⚠️ Marker '<!-- Services spéciaux -->' non trouvé")
else:
    print("⚠️ Marker '<!-- Pages villes -->' non trouvé")

# Vérifier aussi vercel.json pour les rewrites
VERCEL_PATH = os.path.join(PUBLIC_DIR, "../vercel.json")
if os.path.exists(VERCEL_PATH):
    print("📝 Vérification de vercel.json...")
    with open(VERCEL_PATH, 'r', encoding='utf-8') as f:
        vercel_config = f.read()
    
    # Vérifier si nous avons besoin d'ajouter des rewrites
    # Pour l'instant, nous allons juste noter qu'il faut le vérifier manuellement
    print("ℹ️ Vérifiez manuellement vercel.json pour ajouter les rewrites des nouvelles villes")
else:
    print("ℹ️ vercel.json non trouvé, création recommandée pour les rewrites")

print("🎉 Mise à jour du sitemap terminée!")