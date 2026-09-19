import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modelsDir = path.join(__dirname, '../public/models');
const indianCityListingsFile = path.join(__dirname, '../src/data/indianCityListings.ts');

async function update() {
  const files = await fs.readdir(modelsDir);
  const rawPhotos = files.filter(f => f.endsWith('.webp')).map(f => `/models/${f}`);
  
  let cityListingsContent = await fs.readFile(indianCityListingsFile, 'utf8');
  
  // Completely rewrite the generation loop
  cityListingsContent = cityListingsContent.replace(/export const indianCityListings: Record<string, Listing\[\]> = \{[\s\S]*?(?=\nexport function getCityListings)/, `export const indianCityListings: Record<string, Listing[]> = {};

const genericFirstNames = ["Aarti", "Aayushi", "Aditi", "Alia", "Ananya", "Anjali", "Anushka", "Avani", "Bhavya", "Bhumika", "Chahat", "Deepa", "Deepika", "Disha", "Divya", "Esha", "Gargi", "Gauri", "Geeta", "Heena", "Isha", "Ishita", "Jahnvi", "Jaya", "Jyoti", "Kajal", "Kavya", "Khushi", "Kirti", "Komal", "Kritika", "Lakshmi", "Lata", "Madhu", "Mahi", "Malini", "Manasi", "Meera", "Megha", "Monika", "Nandini", "Neha", "Nidhi", "Nikita", "Nisha", "Palak", "Pallavi", "Payal", "Pooja", "Poonam", "Prachi", "Preeti", "Priya", "Priyanka", "Radhika", "Rakhi", "Rashmi", "Raveena", "Ridhi", "Riya", "Roshni", "Ruchi", "Rupal", "Sakshi", "Saloni", "Samiksha", "Sana", "Sanika", "Sanjana", "Sapna", "Sarika", "Seema", "Shalini", "Shikha", "Shilpa", "Shivani", "Shraddha", "Shreya", "Shruti", "Simran", "Smriti", "Sneha", "Sonal", "Sonali", "Soniya", "Srishti", "Suman", "Sunita", "Sushma", "Swati", "Tamanna", "Tanisha", "Tanya", "Tara", "Tejaswini", "Trisha", "Urvashi", "Vaishnavi", "Vandana", "Vanshika", "Vidya", "Aarohi", "Meher", "Niharika", "Kareena", "Katrina", "Zoya", "Ruhi", "Myra", "Kiara"];
const genericLastNames = ["Sharma", "Verma", "Gupta", "Singh", "Patil", "Desai", "Joshi", "Kumari", "Das", "Chauhan", "Rajput", "Kaur", "Iyer", "Nair", "Reddy", "Rao", "Gowda", "Jain", "Mehta", "Bhatia", "Kapoor", "Khan", "Malik", "Yadav", "Pandey", "Mishra", "Dubey", "Tiwari", "Soni"];
const genericAreas = ["Central Area", "Downtown", "Luxury District", "IT Park", "Tourist Hub", "VIP Sector", "Heritage Zone"];

function hashStr(str: string) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    return Math.abs(h);
}

const photoPool: string[] = ${JSON.stringify(rawPhotos)};

function getShuffledPhotos(seedStr: string) {
    const arr = [...photoPool];
    let seed = hashStr(seedStr);
    for (let i = arr.length - 1; i > 0; i--) {
        const j = (seed + i) % (i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

indiaStates.forEach(state => {
    state.cities.forEach((city, cityIdx) => {
        const citySlug = city.slug;
        const capitalizedCity = city.name;
        const cityAreas = city.areas && city.areas.length > 0 ? city.areas : genericAreas;
        
        let profiles = [];
        const photoArray = getShuffledPhotos(citySlug);
        
        // Generate 24 profiles per city deterministically
        for(let i=0; i<24; i++) {
            const seedStr = citySlug + i;
            const seed = hashStr(seedStr);
            const fn = genericFirstNames[seed % genericFirstNames.length];
            const ln = genericLastNames[(seed + 1) % genericLastNames.length];
            const fullName = fn + " " + ln;
            const area = cityAreas[seed % cityAreas.length];
            
            profiles.push({
                id: \`\${citySlug}-\${i + 1}\`,
                name: fullName, 
                age: 21 + (seed % 8), 
                city: \`\${capitalizedCity} – \${area}\`, 
                description: \`Here for unforgettable moments! I am \${fullName}, an elite companion from \${capitalizedCity}.\`,
                services: [svcPool.blowjob, svcPool.doggystyle, svcPool.everyposition, svcPool.massage, svcPool.gfe],
                pricing: { "1hour": 4000 + (seed % 4) * 500, "30min": Math.round((4000 + (seed % 4) * 500) * 0.6), currency: "₹" },
                tier: i % 4 === 0 ? "diamond" : i % 3 === 0 ? "gold" : "silver",
                verified: true, emoji: "💋",
                image: photoArray[i],
                images: [photoArray[i], photoArray[(i+24) % photoArray.length], photoArray[(i+48) % photoArray.length]],
                nationality: "Indian",
                isNew: i % 5 === 0
            });
        }
        
        indianCityListings[citySlug] = profiles;
    });
});
`);
  
  await fs.writeFile(indianCityListingsFile, cityListingsContent);
  console.log("Rebuilt city listings successfully with deterministically shuffled photos.");
}

update();
