import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/models');
const indianCityListingsFile = path.join(__dirname, '../src/data/indianCityListings.ts');

async function update() {
  const files = await fs.readdir(inputDir);
  const webpFiles = files.filter(f => f.endsWith('.webp'));
  
  // Shuffle files to ensure randomness
  const shuffledFiles = webpFiles.sort(() => 0.5 - Math.random());
  
  const arrayString = 'const indianModelPhotos = [\n' + shuffledFiles.map(f => `  "/models/${f}",`).join('\n') + '\n];';

  let listingsContent = await fs.readFile(indianCityListingsFile, 'utf8');
  
  // Replace the old array
  listingsContent = listingsContent.replace(/const indianModelPhotos = \[[\s\S]*?\];/m, arrayString);
  
  await fs.writeFile(indianCityListingsFile, listingsContent);
  console.log('indianCityListings updated with real images.');
}

update();
