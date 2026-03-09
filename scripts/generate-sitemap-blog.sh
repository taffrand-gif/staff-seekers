#!/bin/bash

# Script pour régénérer sitemaps avec nouveaux articles blog
# Sites: staff-seekers (eletricista-norte-reparos.pt)

SITE_URL="https://eletricista-norte-reparos.pt"
TODAY=$(date +%Y-%m-%d)

echo "Génération sitemap blog avec 60 articles..."

cat > public/sitemap-blog.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://eletricista-norte-reparos.pt/blog/</loc><lastmod>2026-03-09</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
EOF

# Ajouter tous les articles blog
for file in content/blog/*.md; do
  filename=$(basename "$file" .md)
  echo "<url><loc>https://eletricista-norte-reparos.pt/blog/${filename}.html</loc><lastmod>2026-03-09</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>" >> public/sitemap-blog.xml
done

echo "</urlset>" >> public/sitemap-blog.xml

echo "✓ Sitemap blog généré avec $(grep -c '<url>' public/sitemap-blog.xml) URLs"
