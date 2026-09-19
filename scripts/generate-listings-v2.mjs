import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/models folder 2');
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

async function update() {
  const files = await fs.readdir(inputDir);
  const webpFiles = files.filter(f => f.endsWith('.webp'));
  
  // Shuffle files to ensure randomness
  const shuffledFiles = webpFiles.sort(() => 0.5 - Math.random());
  
  const arrayString = 'const indianModelPhotos = [\n' + shuffledFiles.map(f => `  "/models folder 2/${f}",`).join('\n') + '\n];\n';

  let listingsContent = await fs.readFile(listingsFile, 'utf8');
  
  listingsContent = listingsContent.replace(/const indianModelPhotos = \[[\s\S]*?\];/m, arrayString);
  
  let dynamicListings = '';
  
  const generatedNames = new Set();
  
  for (let i = 0; i < shuffledFiles.length; i++) {
    const isDiamond = i < 50;
    const isGold = i >= 50 && i < 150;
    const tier = isDiamond ? 'diamond' : isGold ? 'gold' : 'silver';
    
    // Distribute cities round-robin
    const city = cities[i % cities.length];
    
    // Generate unique name
    let fn = firstNames[Math.floor(Math.random() * firstNames.length)];
    let ln = lastNames[Math.floor(Math.random() * lastNames.length)];
    let fullName = `${fn} ${ln}`;
    while (generatedNames.has(fullName)) {
      fn = firstNames[Math.floor(Math.random() * firstNames.length)];
      ln = lastNames[Math.floor(Math.random() * lastNames.length)];
      fullName = `${fn} ${ln}`;
    }
    generatedNames.add(fullName);
    
    dynamicListings += `  {
    id: "dyn_v2_${i}", name: "${fullName}", age: ${18 + (i % 10)}, city: "${city}", tier: "${tier}",
    emoji: "👩", image: indianModelPhotos[${i}],
    images: [indianModelPhotos[${i}]],
    rating: 5, reviewCount: ${i % 25}, isNew: true, verified: true,
    pricing: { "1hour": ${3000 + (100 * (i % 20))}, currency: "₹" },
    description: "Available in ${city}. 100% genuine and verified. Message for details."
  },
`;
  }
  
  listingsContent = listingsContent.replace(/export const diamondListings: Listing\[\] = \[[\s\S]*?\];/m, `export const diamondListings: Listing[] = [\n${dynamicListings}\n];`);
  
  await fs.writeFile(listingsFile, listingsContent);
  console.log('Listings updated accurately.');
}

update();
