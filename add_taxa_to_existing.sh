#!/bin/bash

# Configuration
PUBLIC_DIR="/Users/admin/.openclaw/workspace/sites/staff-seekers/main/client/public"

# Villes existantes avec leurs zones
declare -A ZONES
ZONES["braganca"]="3:25€"
ZONES["chaves"]="6:40€"
ZONES["freixo-espada-cinta"]="3:25€"
ZONES["macedo-cavaleiros"]="1:10€"
ZONES["miranda-douro"]="4:30€"
ZONES["mirandela"]="2:15€"
ZONES["mogadouro"]="3:25€"
ZONES["torre-moncorvo"]="3:25€"
ZONES["vila-real"]="5:35€"
ZONES["vinhais"]="3:25€"

echo "🚀 Ajout de la section Taxa de Deslocação aux 10 pages existantes..."

for slug in "${!ZONES[@]}"; do
    IFS=':' read -r zone prix <<< "${ZONES[$slug]}"
    file="$PUBLIC_DIR/eletricista-$slug.html"
    
    if [[ -f "$file" ]]; then
        echo "📝 Mise à jour de: $slug (Zone $zone - $prix)"
        
        # Lire le contenu du fichier
        content=$(cat "$file")
        
        # Trouver la position après le distance-box
        if [[ $content =~ \<div\ class=\"distance-box\"[^>]*\>.*?\<\/div\> ]]; then
            distance_box="${BASH_REMATCH[0]}"
            after_distance="${content#*$distance_box}"
            
            # Créer la section taxa-box
            taxa_section="<div class=\"taxa-box\">
<h3>💰 Taxa de Deslocação para $(echo $slug | tr '-' ' ' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1')</h3>
<p style=\"font-size: 18px; line-height: 1.8;\">
<strong>Zona $zone:</strong> $(echo $slug | tr '-' ' ' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1') está na Zona $zone do nosso sistema de deslocação.<br>
<strong>Taxa de deslocação:</strong> $prix (inclui deslocação desde Macedo de Cavaleiros)
</p>
<p style=\"font-size: 14px; color: #666; margin-top: 10px;\">
📌 <em>A taxa de deslocação é aplicável a todas as intervenções em $(echo $slug | tr '-' ' ' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1') e cobre os custos de transporte desde a nossa base em Macedo de Cavaleiros.</em>
</p>
</div>"
            
            # Remplacer le contenu
            new_content="${content/$distance_box/$distance_box$taxa_section}"
            
            # Écrire le fichier mis à jour
            echo "$new_content" > "$file"
            echo "✅ Page mise à jour: eletricista-$slug.html"
        else
            echo "⚠️ Distance-box non trouvé dans: $slug"
        fi
    else
        echo "❌ Fichier non trouvé: $file"
    fi
done

echo "🎉 Mise à jour terminée! 10 pages existantes ont été mises à jour."