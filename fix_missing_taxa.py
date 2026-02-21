#!/usr/bin/env python3
import os
import re

PUBLIC_DIR = "/Users/admin/.openclaw/workspace/sites/staff-seekers/main/client/public"

# Pages à corriger manuellement
PAGES_TO_FIX = [
    ("macedo-cavaleiros", "Macedo de Cavaleiros", 1, "10€"),
    ("mogadouro", "Mogadouro", 3, "25€"),
    ("torre-moncorvo", "Torre de Moncorvo", 3, "25€"),
    ("vinhais", "Vinhais", 3, "25€")
]

print("🔧 Correction des pages manquantes...")

for slug, nom, zone, prix in PAGES_TO_FIX:
    file_path = os.path.join(PUBLIC_DIR, f"eletricista-{slug}.html")
    
    if os.path.exists(file_path):
        print(f"📝 Correction de: {slug}")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Créer la section taxa-box
        taxa_section = f'''<div class="taxa-box">
<h3>💰 Taxa de Deslocação para {nom}</h3>
<p style="font-size: 18px; line-height: 1.8;">
<strong>Zona {zone}:</strong> {nom} está na Zona {zone} du nosso sistema de deslocação.<br>
<strong>Taxa de deslocação:</strong> {prix} (inclui deslocação desde Macedo de Cavaleiros)
</p>
<p style="font-size: 14px; color: #666; margin-top: 10px;">
📌 <em>A taxa de deslocação é aplicável a todas as intervenções em {nom} e cobre os custos de transporte desde a nossa base em Macedo de Cavaleiros.</em>
</p>
</div>'''
        
        # Pour Macedo, la page a déjà un tableau complet, on peut juste ajouter une petite note
        if slug == "macedo-cavaleiros":
            # Chercher le tableau et ajouter une note avant
            if '<table style="width:100%;border-collapse:collapse;font-size:15px">' in content:
                # La page a déjà le tableau complet, c'est bon
                print(f"✅ {nom} a déjà le tableau complet des zones")
                continue
        
        # Pour les autres pages, chercher après le titre h1
        pattern = r'<h1[^>]*>.*?</h1>'
        match = re.search(pattern, content, re.DOTALL)
        
        if match:
            h1_tag = match.group(0)
            # Insérer après le h1
            new_content = content.replace(h1_tag, h1_tag + taxa_section)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✅ Page corrigée: eletricista-{slug}.html")
        else:
            print(f"⚠️ Titre h1 non trouvé dans: {slug}")
    else:
        print(f"❌ Fichier non trouvé: {file_path}")

print("🎉 Correction terminée!")