import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/models folder 2');
const listingsFile = path.join(__dirname, '../src/data/listings.ts');

async function update() {
  const files = await fs.readdir(inputDir);
  const webpFiles = files.filter(f => f.endsWith('.webp'));
  
  const arrayString = 'export const indianModelPhotos = [\n' + webpFiles.map(f => `  "/models folder 2/${f}",`).join('\n') + '\n];\n';

  let listingsContent = await fs.readFile(listingsFile, 'utf8');
  
  // Replace the old indianModelPhotos array
  listingsContent = listingsContent.replace(/const indianModelPhotos = \[[\s\S]*?\];/m, arrayString);
  
  // Ensure we export it so that in the replace it works, or we just keep it as const
  listingsContent = listingsContent.replace('export const indianModelPhotos', 'const indianModelPhotos');
  
  // also we can dynamically generate profiles.
  let dynamicListings = '';
  
  for (let i = 0; i < webpFiles.length; i++) {
    const isDiamond = i < 50;
    const isGold = i >= 50 && i < 120;
    const tier = isDiamond ? 'diamond' : isGold ? 'gold' : 'silver';
    
    dynamicListings += `  {
    id: "dyn_${i}", name: "Model ${i + 1}", age: ${18 + (i % 10)}, city: "Delhi", tier: "${tier}",
    emoji: "👩", image: indianModelPhotos[${i}],
    images: [indianModelPhotos[${i}]],
    rating: 5, reviewCount: ${i % 20}, isNew: true, verified: true,
    pricing: { "1hour": 5000, currency: "₹" }
  },
`;
  }
  
  listingsContent = listingsContent.replace(/export const diamondListings: Listing\[\] = \[[\s\S]*?\];/m, `export const diamondListings: Listing[] = [\n${dynamicListings}\n];`);
  
  // Since we replaced all with dynamic into diamondListings for simplicity, let's just leave gold and silver empty or clear them out.
  listingsContent = listingsContent.replace(/export const goldListings: Listing\[\] = \[[\s\S]*?\];/m, `export const goldListings: Listing[] = [];`);
  listingsContent = listingsContent.replace(/export const silverListings: Listing\[\] = \[[\s\S]*?\];/m, `export const silverListings: Listing[] = [];`);

  await fs.writeFile(listingsFile, listingsContent);
  console.log('Listings updated.');
}

update();
