#!/bin/bash

# Batch Image Resize Script
# Process multiple images at once
# Usage: ./scripts/batch-resize.sh <directory> <preset>

DIR="$1"
PRESET="$2"

if [ -z "$DIR" ] || [ -z "$PRESET" ]; then
    echo "Usage: $0 <directory> <preset>"
    echo ""
    echo "Processes all .jpg, .jpeg, .png, and .webp files in the directory"
    echo "See resize-images.sh for available presets"
    exit 1
fi

if [ ! -d "$DIR" ]; then
    echo "Error: Directory '$DIR' not found"
    exit 1
fi

# Find all image files
COUNT=0
for img in "$DIR"/*.{jpg,jpeg,png,webp} "$DIR"/*.{JPG,JPEG,PNG,WEBP}; do
    # Skip if glob didn't match
    [ -f "$img" ] || continue
    
    echo "Processing: $(basename "$img")"
    ./scripts/resize-images.sh "$img" "$PRESET"
    ((COUNT++))
done

echo ""
echo "✓ Processed $COUNT images"
