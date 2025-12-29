#!/bin/bash

# Image Resize & Crop Script for Blog
# Uses ImageMagick (requires: brew install imagemagick)
# Usage: ./scripts/resize-images.sh <input-image> <preset>

INPUT="$1"
PRESET="$2"

if [ -z "$INPUT" ] || [ -z "$PRESET" ]; then
    echo "Usage: $0 <input-image> <preset>"
    echo ""
    echo "Available presets:"
    echo "  social       - 1200x630 (Open Graph/Twitter Card)"
    echo "  thumb        - 400x400 (Square thumbnail)"
    echo "  thumb-lg     - 600x600 (Large square thumbnail)"
    echo "  hero         - 1600x900 (16:9 hero image)"
    echo "  full         - 1200px wide (maintains aspect ratio)"
    echo "  blog         - 900x583 (your current social image size)"
    echo ""
    echo "Examples:"
    echo "  $0 my-image.jpg social"
    echo "  $0 my-image.png thumb"
    exit 1
fi

if [ ! -f "$INPUT" ]; then
    echo "Error: Input file '$INPUT' not found"
    exit 1
fi

# Get filename without extension
BASENAME=$(basename "$INPUT")
FILENAME="${BASENAME%.*}"
EXT="${BASENAME##*.}"

# Create output directory if it doesn't exist
OUTPUT_DIR="./public/media/processed"
mkdir -p "$OUTPUT_DIR"

case "$PRESET" in
    social)
        # 1200x630 - crop to center, fill
        OUTPUT="${OUTPUT_DIR}/${FILENAME}-social.${EXT}"
        magick "$INPUT" -resize 1200x630^ -gravity center -extent 1200x630 "$OUTPUT"
        echo "✓ Created social card: $OUTPUT"
        ;;
    
    thumb)
        # 400x400 square thumbnail
        OUTPUT="${OUTPUT_DIR}/${FILENAME}-thumb.${EXT}"
        magick "$INPUT" -resize 400x400^ -gravity center -extent 400x400 "$OUTPUT"
        echo "✓ Created thumbnail: $OUTPUT"
        ;;
    
    thumb-lg)
        # 600x600 large square thumbnail
        OUTPUT="${OUTPUT_DIR}/${FILENAME}-thumb-lg.${EXT}"
        magick "$INPUT" -resize 600x600^ -gravity center -extent 600x600 "$OUTPUT"
        echo "✓ Created large thumbnail: $OUTPUT"
        ;;
    
    hero)
        # 1600x900 (16:9) hero image
        OUTPUT="${OUTPUT_DIR}/${FILENAME}-hero.${EXT}"
        magick "$INPUT" -resize 1600x900^ -gravity center -extent 1600x900 "$OUTPUT"
        echo "✓ Created hero image: $OUTPUT"
        ;;
    
    full)
        # 1200px wide, maintain aspect ratio
        OUTPUT="${OUTPUT_DIR}/${FILENAME}-full.${EXT}"
        magick "$INPUT" -resize 1200x "$OUTPUT"
        echo "✓ Created full-width image: $OUTPUT"
        ;;
    
    blog)
        # 900x583 - your current blog social image size
        OUTPUT="${OUTPUT_DIR}/${FILENAME}-blog.${EXT}"
        magick "$INPUT" -resize 900x583^ -gravity center -extent 900x583 "$OUTPUT"
        echo "✓ Created blog image: $OUTPUT"
        ;;
    
    *)
        echo "Error: Unknown preset '$PRESET'"
        echo "Run without arguments to see available presets"
        exit 1
        ;;
esac
