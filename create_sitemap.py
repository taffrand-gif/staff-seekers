#!/usr/bin/env python3
import os
from datetime import datetime

PUBLIC_DIR = "/Users/admin/.openclaw/workspace/sites/staff-seekers/main/client/public"
SITEMAP_PATH = os.path.join(PUBLIC_DIR, "sitemap.xml")
BASE_URL = "https://staff-seekers.com"
TODAY = datetime.now().strftime("%Y-%m-%d")

# Toutes les villes (10 existantes + 24 nouvelles)
ALL_CITIES = [
    # Existantes
    "braganca", "chaves", "freixo-espada-cinta", "macedo-cavaleiros", 
    "miranda-douro", "mirandela", "mogadouro", "torre-moncorvo", 
    "vila-real", "vinhais",
    # Nouvelles
    "alfandega-da-fe", "alijo", "armamar", "boticas", "carrazeda-de-ansiaes",
    "lamego", "mesao-frio", "moimenta-da-beira", "mondim-de-basto", "montalegre",
    "murca", "penedono", "peso-da-regua", "ribeira-de-pena", "sabrosa",
    "santa-marta-de-penaguiao", "sao-joao-da-pesqueira", "sernancelhe", "tabuaco",
    "vila-flor", "vila-nova-foz-coa", "vila-pouca-de-aguiar", "vimioso", "valpacos"
]

# Autres pages importantes
OTHER_PAGES = [
    "",  # homepage
    "servicos",
    "galeria",
    "blog",
    "blog/como-escolher-eletricista-certificado",
    "blog/quanto-custa-instalacao-eletrica-completa",
    "blog/problemas-eletricos-inverno",
    "certificacao-eletrica-braganca",
    "certificacao-eletrica-vila-real",
    "quadros-eletricos-braganca",
    "quadros-eletricos-vila-real",
    "iluminacao-led-vila-real",
    "aquecimento-eletrico-vila-real",
    "electricista-urgente-braganca"
]

print("🗺️ Création d'un nouveau sitemap.xml complet...")

# Générer le contenu du sitemap
sitemap_content = '''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://staff-seekers.com/</loc>
    <lastmod>''' + TODAY + '''</lastmod>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  
  <!-- Services -->
  <url>
    <loc>https://staff-seekers.com/servicos</loc>
    <lastmod>''' + TODAY + '''</lastmod>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  
  <!-- Galerie -->
  <url>
    <loc>https://staff-seekers.com/galeria</loc>
    <lastmod>''' + TODAY + '''</lastmod>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>
  
  <!-- Blog -->
  <url>
    <loc>https://staff-seekers.com/blog</loc>
    <lastmod>''' + TODAY + '''</lastmod>
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
  </url>
  
  <!-- Pages villes (34 villes) -->\n'''

# Ajouter toutes les villes
for city in ALL_CITIES:
    sitemap_content += f'''  <url>
    <loc>{BASE_URL}/eletricista-{city}</loc>
    <lastmod>{TODAY}</lastmod>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>\n'''

# Ajouter les autres pages
sitemap_content += '''  
  <!-- Autres pages importantes -->\n'''

for page in OTHER_PAGES[4:]:  # Skip les premières déjà ajoutées
    if page:  # Skip empty string (homepage déjà ajoutée)
        sitemap_content += f'''  <url>
    <loc>{BASE_URL}/{page}</loc>
    <lastmod>{TODAY}</lastmod>
    <priority>0.6</priority>
    <changefreq>monthly</changefreq>
  </url>\n'''

sitemap_content += '''</urlset>'''

# Écrire le nouveau sitemap
with open(SITEMAP_PATH, 'w', encoding='utf-8') as f:
    f.write(sitemap_content)

print(f"✅ Nouveau sitemap créé avec {len(ALL_CITIES)} villes et {len(OTHER_PAGES)} autres pages")
print(f"📊 Total URLs: {len(ALL_CITIES) + len(OTHER_PAGES)}")

# Créer aussi un vercel.json si nécessaire
VERCEL_PATH = os.path.join(PUBLIC_DIR, "../vercel.json")
if not os.path.exists(VERCEL_PATH):
    vercel_config = '''{
  "rewrites": [
    {
      "source": "/eletricista-:city",
      "destination": "/eletricista-:city.html"
    },
    {
      "source": "/blog/:slug",
      "destination": "/blog/:slug.html"
    },
    {
      "source": "/servicos",
      "destination": "/servicos.html"
    },
    {
      "source": "/galeria",
      "destination": "/galeria.html"
    }
  ]
}'''
    
    with open(VERCEL_PATH, 'w', encoding='utf-8') as f:
        f.write(vercel_config)
    print("✅ vercel.json créé avec les rewrites nécessaires")

print("🎉 Sitemap et configuration terminés!")