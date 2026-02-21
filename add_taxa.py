#!/usr/bin/env python3
import os
import re

PUBLIC_DIR = "/Users/admin/.openclaw/workspace/sites/staff-seekers/main/client/public"

# Villes existantes avec leurs zones
ZONES = {
    "braganca": {"zone": 3, "prix": "25€", "nom": "Bragança"},
    "chaves": {"zone": 6, "prix": "40€", "nom": "Chaves"},
    "freixo-espada-cinta": {"zone": 3, "prix": "25€", "nom": "Freixo de Espada à Cinta"},
    "macedo-cavaleiros": {"zone": 1, "prix": "10€", "nom": "Macedo de Cavaleiros"},
    "miranda-douro": {"zone": 4, "prix": "30€", "nom": "Miranda do Douro"},
    "mirandela": {"zone": 2, "prix": "15€", "nom": "Mirandela"},
    "mogadouro": {"zone": 3, "prix": "25€", "nom": "Mogadouro"},
    "torre-moncorvo": {"zone": 3, "prix": "25€", "nom": "Torre de Moncorvo"},
    "vila-real": {"zone": 5, "prix": "35€", "nom": "Vila Real"},
    "vinhais": {"zone": 3, "prix": "25€", "nom": "Vinhais"}
}

print("🚀 Ajout de la section Taxa de Deslocação aux 10 pages existantes...")

for slug, info in ZONES.items():
    zone = info["zone"]
    prix = info["prix"]
    nom = info["nom"]
    file_path = os.path.join(PUBLIC_DIR, f"eletricista-{slug}.html")
    
    if os.path.exists(file_path):
        print(f"📝 Mise à jour de: {slug} (Zone {zone} - {prix})")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Créer la section taxa-box
        taxa_section = f'''<div class="taxa-box">
<h3>💰 Taxa de Deslocação para {nom}</h3>
<p style="font-size: 18px; line-height: 1.8;">
<strong>Zona {zone}:</strong> {nom} está na Zona {zone} do nosso sistema de deslocação.<br>
<strong>Taxa de deslocação:</strong> {prix} (inclui deslocação desde Macedo de Cavaleiros)
</p>
<p style="font-size: 14px; color: #666; margin-top: 10px;">
📌 <em>A taxa de deslocação é aplicável a todas as intervenções em {nom} e cobre os custos de transporte desde a nossa base em Macedo de Cavaleiros.</em>
</p>
</div>'''
        
        # Trouver le distance-box et insérer après
        pattern = r'<div class="distance-box"[^>]*>.*?</div>'
        match = re.search(pattern, content, re.DOTALL)
        
        if match:
            distance_box = match.group(0)
            # Insérer la taxa-box après le distance-box
            new_content = content.replace(distance_box, distance_box + taxa_section)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✅ Page mise à jour: eletricista-{slug}.html")
        else:
            print(f"⚠️ Distance-box non trouvé dans: {slug}")
    else:
        print(f"❌ Fichier non trouvé: {file_path}")

print("🎉 Mise à jour terminée! 10 pages existantes ont été mises à jour.")