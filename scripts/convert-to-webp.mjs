import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/models folder 2');

async function convert() {
  const files = await fs.readdir(inputDir);
  let count = 0;

  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(inputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    try {
      await sharp(inputPath).webp().toFile(outputPath);
      // await fs.unlink(inputPath); // user didn't ask to delete old, but maybe we should to clean up? let's not delete just yet or maybe delete to avoid duplicates in dynamic load. Let's delete original to clean up folder.
      await fs.unlink(inputPath);
      console.log(`Converted ${file} to .webp`);
      count++;
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err);
    }
  }

  console.log(`Done! Converted ${count} images.`);
}

convert();
