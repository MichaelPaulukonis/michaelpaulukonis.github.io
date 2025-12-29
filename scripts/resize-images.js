#!/usr/bin/env node

/**
 * Image Resize & Crop Script for Blog (Node.js version)
 * Uses sharp library
 * 
 * Install: npm install sharp
 * Usage: node scripts/resize-images.js <input-image> <preset>
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const presets = {
  social: { width: 1200, height: 630, fit: 'cover', description: 'Open Graph/Twitter Card' },
  thumb: { width: 400, height: 400, fit: 'cover', description: 'Square thumbnail' },
  'thumb-lg': { width: 600, height: 600, fit: 'cover', description: 'Large square thumbnail' },
  hero: { width: 1600, height: 900, fit: 'cover', description: '16:9 hero image' },
  full: { width: 1200, height: null, fit: 'inside', description: '1200px wide (maintains aspect)' },
  blog: { width: 900, height: 583, fit: 'cover', description: 'Blog social image' },
};

async function resizeImage(inputPath, presetName) {
  const preset = presets[presetName];
  
  if (!preset) {
    console.error(`Error: Unknown preset '${presetName}'`);
    showUsage();
    process.exit(1);
  }

  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Input file '${inputPath}' not found`);
    process.exit(1);
  }

  const ext = path.extname(inputPath);
  const basename = path.basename(inputPath, ext);
  const outputDir = './public/media/processed';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, `${basename}-${presetName}${ext}`);

  try {
    const sharpInstance = sharp(inputPath);
    
    if (preset.height) {
      // Fixed dimensions with crop
      await sharpInstance
        .resize(preset.width, preset.height, {
          fit: preset.fit,
          position: 'center',
        })
        .toFile(outputPath);
    } else {
      // Width only, maintain aspect ratio
      await sharpInstance
        .resize(preset.width, null, {
          fit: preset.fit,
        })
        .toFile(outputPath);
    }

    console.log(`✓ Created ${preset.description}: ${outputPath}`);
  } catch (error) {
    console.error(`Error processing image: ${error.message}`);
    process.exit(1);
  }
}

function showUsage() {
  console.log('Usage: node scripts/resize-images.js <input-image> <preset>');
  console.log('');
  console.log('Available presets:');
  Object.entries(presets).forEach(([name, config]) => {
    const size = config.height 
      ? `${config.width}x${config.height}`
      : `${config.width}px wide`;
    console.log(`  ${name.padEnd(12)} - ${size} (${config.description})`);
  });
  console.log('');
  console.log('Examples:');
  console.log('  node scripts/resize-images.js my-image.jpg social');
  console.log('  node scripts/resize-images.js my-image.png thumb');
}

// Main execution
const args = process.argv.slice(2);

if (args.length !== 2) {
  showUsage();
  process.exit(1);
}

const [inputPath, preset] = args;
resizeImage(inputPath, preset);
