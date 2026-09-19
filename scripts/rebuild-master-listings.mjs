import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/models');
const listingsFile = path.join(__dirname, '../src/data/listings.ts');

const firstNames = [
  "Aarti", "Aayushi", "Aditi", "Alia", "Ananya", "Anjali", "Anushka", "Avani", "Bhavya", "Bhumika",
  "Chahat", "Deepa", "Deepika", "Disha", "Divya", "Esha", "Gargi", "Gauri", "Geeta", "Heena",
  "Isha", "Ishita", "Jahnvi", "Jaya", "Jyoti", "Kajal", "Kavya", "Khushi", "Kirti", "Komal",
  "Kritika", "Lakshmi", "Lata", "Madhu", "Mahi", "Malini", "Manasi", "Meera", "Megha", "Monika",
  "Nandini", "Neha", "Nidhi", "Nikita", "Nisha", "Palak", "Pallavi", "Payal", "Pooja", "Poonam",
  "Prachi", "Preeti", "Priya", "Priyanka", "Radhika", "Rakhi", "Rashmi", "Raveena", "Ridhi", "Riya",
  "Roshni", "Ruchi", "Rupal", "Sakshi", "Saloni", "Samiksha", "Sana", "Sanika", "Sanjana", "Sapna",
  "Sarika", "Seema", "Shalini", "Shikha", "Shilpa", "Shivani", "Shraddha", "Shreya", "Shruti", "Simran",
  "Smriti", "Sneha", "Sonal", "Sonali", "Soniya", "Srishti", "Suman", "Sunita", "Sushma", "Swati",
  "Tamanna", "Tanisha", "Tanya", "Tara", "Tejaswini", "Trisha", "Urvashi", "Vaishnavi", "Vandana", "Vanshika",
  "Vidya", "Aarohi", "Meher", "Niharika", "Kareena", "Katrina", "Zoya", "Ruhi", "Myra", "Kiara"
];

const lastNames = [
  "Sharma", "Verma", "Gupta", "Singh", "Patil", "Desai", "Joshi", "Kumari", "Das", "Chauhan",
  "Rajput", "Kaur", "Iyer", "Nair", "Reddy", "Rao", "Gowda", "Jain", "Mehta", "Bhatia",
  "Kapoor", "Khan", "Malik", "Yadav", "Pandey", "Mishra", "Dubey", "Tiwari", "Soni"
];

const cities = [
  "Mumbai", "Delhi / NCR", "Bengaluru", "Kolkata", "Hyderabad", "Chennai",
  "Pune", "Goa", "Ahmedabad", "Jaipur", "Chandigarh", "Nagpur",
  "Manali", "Shimla", "Udaipur", "Lucknow", "Surat", "Bhopal", 
  "Indore", "Patna", "Bhubaneswar", "Coimbatore", "Kochi", "Visakhapatnam", 
  "Amritsar", "Varanasi", "Meerut", "Agra"
];

// Use a deterministic pseudo random to ensure consistency OR just random and rewrite it
function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}
const rand = mulberry32(12345);

async function update() {
  const files = await fs.readdir(inputDir);
  const webpFiles = files.filter(f => f.endsWith('.webp'));
  
  // Shuffle files
  const shuffledFiles = webpFiles.sort(() => 0.5 - rand());
  
  const arrayString = 'export const indianModelPhotos = [\n' + shuffledFiles.map(f => `  "/models/${f}",`).join('\n') + '\n];\n';

  let listingsContent = await fs.readFile(listingsFile, 'utf8');
  
  // Replace indianModelPhotos
  listingsContent = listingsContent.replace(/export const indianModelPhotos = \[[\s\S]*?\];/m, arrayString);
  
  const generatedNames = new Set();
  
  // Break into tier counts (Diamond 20%, Gold 30%, Silver 50%)
  const diamondCount = Math.floor(shuffledFiles.length * 0.2);
  const goldCount = Math.floor(shuffledFiles.length * 0.3);
  const silverCount = shuffledFiles.length - diamondCount - goldCount;

  let diamondListings = '';
  let goldListings = '';
  let silverListings = '';
  
  for (let i = 0; i < shuffledFiles.length; i++) {
    const isDiamond = i < diamondCount;
    const isGold = i >= diamondCount && i < (diamondCount + goldCount);
    const tier = isDiamond ? 'diamond' : isGold ? 'gold' : 'silver';
    
    // Distribute cities across home page shuffled
    // Pick city randomly so that home page has "different location girls" evenly shuffled
    const city = cities[Math.floor(rand() * cities.length)];
    
    // Generate unique name
    let fn = firstNames[Math.floor(rand() * firstNames.length)];
    let ln = lastNames[Math.floor(rand() * lastNames.length)];
    let fullName = `${fn} ${ln}`;
    while (generatedNames.has(fullName)) {
      fn = firstNames[Math.floor(rand() * firstNames.length)];
      ln = lastNames[Math.floor(rand() * lastNames.length)];
      fullName = `${fn} ${ln}`;
    }
    generatedNames.add(fullName);
    
    const objStr = `  {
    id: "dyn_v3_${i}", name: "${fullName}", age: ${18 + (i % 10)}, city: "${city}", tier: "${tier}",
    emoji: "👩", image: indianModelPhotos[${i}],
    images: [indianModelPhotos[${i}]],
    rating: 5, reviewCount: ${15 + Math.floor(rand() * 40)}, isNew: ${rand() > 0.8}, verified: true,
    pricing: { "1hour": ${3000 + (Math.floor(rand() * 10) * 500)}, currency: "₹" },
    description: "Available in ${city}. 100% genuine and verified. Message for details."
  },
`;
    if (isDiamond) diamondListings += objStr;
    else if (isGold) goldListings += objStr;
    else silverListings += objStr;
  }
  
  listingsContent = listingsContent.replace(/export const diamondListings: Listing\[\] = \[[\s\S]*?\];/m, `export const diamondListings: Listing[] = [\n${diamondListings}\n];`);
  listingsContent = listingsContent.replace(/export const goldListings: Listing\[\] = \[[\s\S]*?\];/m, `export const goldListings: Listing[] = [\n${goldListings}\n];`);
  listingsContent = listingsContent.replace(/export const silverListings: Listing\[\] = \[[\s\S]*?\];/m, `export const silverListings: Listing[] = [\n${silverListings}\n];`);
  
  await fs.writeFile(listingsFile, listingsContent);
  console.log(`Rebuilt with ${shuffledFiles.length} models completely shuffled across cities.`);
}

update();
