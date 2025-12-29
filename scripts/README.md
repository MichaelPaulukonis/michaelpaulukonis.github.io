# Image Processing Scripts

Scripts for resizing and cropping images for the blog.

## Installation

### ImageMagick (for bash scripts)

```bash
brew install imagemagick
```

### Sharp (for Node.js script)

```bash
npm install sharp
# or
pnpm add sharp
```

## Usage

### Single Image Processing

**Bash/ImageMagick:**

```bash
chmod +x scripts/*.sh  # Make scripts executable
./scripts/resize-images.sh path/to/image.jpg social
```

**Node.js/Sharp:**

```bash
node scripts/resize-images.js path/to/image.jpg social
```

### Batch Processing

Process all images in a directory:

```bash
./scripts/batch-resize.sh ./public/media/blog/duo-chrome social
```

## Available Presets

| Preset | Dimensions | Description |
|--------|-----------|-------------|
| `social` | 1200x630 | Open Graph/Twitter Card |
| `thumb` | 400x400 | Square thumbnail |
| `thumb-lg` | 600x600 | Large square thumbnail |
| `hero` | 1600x900 | 16:9 hero image |
| `full` | 1200px wide | Maintains aspect ratio |
| `blog` | 900x583 | Current blog social image size |

## Examples

```bash
# Create a social media card
./scripts/resize-images.sh ./input/photo.jpg social
# Output: ./public/media/processed/photo-social.jpg

# Create square thumbnail
node scripts/resize-images.js ./input/screenshot.png thumb

# Process all images in a folder to hero size
./scripts/batch-resize.sh ./public/media/blog/duo-chrome hero
```

## Custom Presets

### Adding to Bash Script

Edit `resize-images.sh` and add a new case:

```bash
mypreset)
    OUTPUT="${OUTPUT_DIR}/${FILENAME}-mypreset.${EXT}"
    convert "$INPUT" -resize WIDTHxHEIGHT^ -gravity center -extent WIDTHxHEIGHT "$OUTPUT"
    echo "✓ Created my preset: $OUTPUT"
    ;;
```

### Adding to Node.js Script

Edit `resize-images.js` and add to the `presets` object:

```javascript
mypreset: { 
  width: WIDTH, 
  height: HEIGHT, 
  fit: 'cover', 
  description: 'My custom preset' 
}
```

## Output Directory

All processed images are saved to:

```
./public/media/processed/
```

Images are named: `{original-name}-{preset}.{ext}`

## Notes

- ImageMagick uses `^` after dimensions to crop (fill), without it maintains aspect ratio
- Sharp's `fit: 'cover'` crops to fill, `fit: 'inside'` maintains aspect ratio
- Both scripts preserve the original image format
- Gravity/position is set to `center` for cropping
