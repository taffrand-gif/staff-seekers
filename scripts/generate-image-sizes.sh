#!/bin/bash

# Script de génération automatique des variantes d'images
# Génère les tailles: 320w, 640w, 1024w, 1920w
# Formats: WebP + JPG/PNG

set -e

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Vérifier si ImageMagick est installé
if ! command -v convert &> /dev/null; then
    echo -e "${RED}❌ ImageMagick n'est pas installé${NC}"
    echo "Installation:"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "  CentOS/RHEL: sudo yum install imagemagick"
    exit 1
fi

# Vérifier si cwebp est installé (pour WebP)
if ! command -v cwebp &> /dev/null; then
    echo -e "${YELLOW}⚠️  cwebp n'est pas installé (optionnel pour WebP)${NC}"
    echo "Installation:"
    echo "  macOS: brew install webp"
    echo "  Ubuntu/Debian: sudo apt-get install webp"
    echo "  CentOS/RHEL: sudo yum install libwebp-tools"
    echo ""
    echo "Continuer sans WebP? (y/n)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        exit 1
    fi
    WEBP_AVAILABLE=false
else
    WEBP_AVAILABLE=true
fi

# Dossiers
SOURCE_DIR="client/public/images"
OUTPUT_DIR="client/public/images-optimized"

# Tailles à générer
SIZES=(320 640 1024 1920)

# Qualité
JPG_QUALITY=85
WEBP_QUALITY=80

echo -e "${GREEN}🖼️  Génération des variantes d'images${NC}"
echo "Source: $SOURCE_DIR"
echo "Destination: $OUTPUT_DIR"
echo ""

# Créer le dossier de sortie s'il n'existe pas
mkdir -p "$OUTPUT_DIR"

# Compteurs
total_images=0
processed_images=0
skipped_images=0

# Fonction pour traiter une image
process_image() {
    local input_file="$1"
    local relative_path="${input_file#$SOURCE_DIR/}"
    local output_base="$OUTPUT_DIR/${relative_path%.*}"
    local extension="${input_file##*.}"

    # Créer le dossier de sortie
    mkdir -p "$(dirname "$output_base")"

    echo -e "${YELLOW}📸 Traitement: $relative_path${NC}"

    # Obtenir les dimensions originales
    original_width=$(identify -format "%w" "$input_file")
    original_height=$(identify -format "%h" "$input_file")

    echo "   Dimensions originales: ${original_width}x${original_height}"

    # Générer les différentes tailles
    for size in "${SIZES[@]}"; do
        # Ne pas upscaler
        if [ "$original_width" -lt "$size" ]; then
            echo "   ⏭️  Taille $size ignorée (image trop petite)"
            continue
        fi

        # Calculer la hauteur proportionnelle
        new_height=$((original_height * size / original_width))

        # Générer JPG/PNG
        output_file="${output_base}-${size}w.${extension}"
        if [ ! -f "$output_file" ]; then
            convert "$input_file" \
                -resize "${size}x${new_height}" \
                -quality $JPG_QUALITY \
                -strip \
                "$output_file"
            echo "   ✅ Créé: ${output_file##*/}"
        else
            echo "   ⏭️  Existe déjà: ${output_file##*/}"
        fi

        # Générer WebP
        if [ "$WEBP_AVAILABLE" = true ]; then
            output_webp="${output_base}-${size}w.webp"
            if [ ! -f "$output_webp" ]; then
                cwebp -q $WEBP_QUALITY "$output_file" -o "$output_webp" 2>/dev/null
                echo "   ✅ Créé: ${output_webp##*/}"
            else
                echo "   ⏭️  Existe déjà: ${output_webp##*/}"
            fi
        fi
    done

    # Copier l'original optimisé
    output_original="${output_base}.${extension}"
    if [ ! -f "$output_original" ]; then
        convert "$input_file" \
            -quality $JPG_QUALITY \
            -strip \
            "$output_original"
        echo "   ✅ Original optimisé: ${output_original##*/}"
    fi

    # Générer WebP de l'original
    if [ "$WEBP_AVAILABLE" = true ]; then
        output_original_webp="${output_base}.webp"
        if [ ! -f "$output_original_webp" ]; then
            cwebp -q $WEBP_QUALITY "$output_original" -o "$output_original_webp" 2>/dev/null
            echo "   ✅ Original WebP: ${output_original_webp##*/}"
        fi
    fi

    echo ""
    ((processed_images++))
}

# Trouver toutes les images
echo "🔍 Recherche des images..."
while IFS= read -r -d '' file; do
    ((total_images++))

    # Ignorer les fichiers déjà dans images-optimized
    if [[ "$file" == *"/images-optimized/"* ]]; then
        ((skipped_images++))
        continue
    fi

    process_image "$file"
done < <(find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)

# Résumé
echo -e "${GREEN}✅ Traitement terminé${NC}"
echo "Images trouvées: $total_images"
echo "Images traitées: $processed_images"
echo "Images ignorées: $skipped_images"
echo ""
echo "Les images optimisées sont dans: $OUTPUT_DIR"
echo ""
echo -e "${YELLOW}💡 Prochaines étapes:${NC}"
echo "1. Vérifier les images générées dans $OUTPUT_DIR"
echo "2. Utiliser le composant OptimizedImage dans vos composants React"
echo "3. Tester les performances avec Lighthouse"
