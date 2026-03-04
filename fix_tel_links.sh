#!/bin/bash

# Fix all tel: links to include +351 prefix

# Pattern 1: tel:${config.phone.replace -> tel:+351${config.phone.replace
find client/src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/tel:\${config\.phone\.replace/tel:+351${config.phone.replace/g' {} +

# Pattern 2: tel:${config.phone} -> tel:+351${config.phone.replace(/\s/g, '')}
find client/src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/tel:\${config\.phone}/tel:+351${config.phone.replace(\/\\s\/g, "")}/g' {} +

echo "✅ All tel: links fixed to include +351 prefix"
