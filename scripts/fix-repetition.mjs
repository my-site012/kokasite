import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indianCityListingsFile = path.join(__dirname, '../src/data/indianCityListings.ts');

async function fixRepetition() {
  let content = await fs.readFile(indianCityListingsFile, 'utf8');
  
  // Replace the explicit rawProfiles entirely with an empty object
  content = content.replace(/const rawProfiles: Record<string, RawProfile\[\]> = \{[\s\S]*?\};\r?\n/m, "const rawProfiles: Record<string, RawProfile[]> = {};\n");
  
  // Replace the generation loop logic
  const newGenerationLogic = `
const genericFirstNames = ["Aarti", "Aayushi", "Aditi", "Alia", "Ananya", "Anjali", "Anushka", "Avani", "Bhavya", "Bhumika", "Chahat", "Deepa", "Deepika", "Disha", "Divya", "Esha", "Gargi", "Gauri", "Geeta", "Heena", "Isha", "Ishita", "Jahnvi", "Jaya", "Jyoti", "Kajal", "Kavya", "Khushi", "Kirti", "Komal", "Kritika", "Lakshmi", "Lata", "Madhu", "Mahi", "Malini", "Manasi", "Meera", "Megha", "Monika", "Nandini", "Neha", "Nidhi", "Nikita", "Nisha", "Palak", "Pallavi", "Payal", "Pooja", "Poonam", "Prachi", "Preeti", "Priya", "Priyanka", "Radhika", "Rakhi", "Rashmi", "Raveena", "Ridhi", "Riya", "Roshni", "Ruchi", "Rupal", "Sakshi", "Saloni", "Samiksha", "Sana", "Sanika", "Sanjana", "Sapna", "Sarika", "Seema", "Shalini", "Shikha", "Shilpa", "Shivani", "Shraddha", "Shreya", "Shruti", "Simran", "Smriti", "Sneha", "Sonal", "Sonali", "Soniya", "Srishti", "Suman", "Sunita", "Sushma", "Swati", "Tamanna", "Tanisha", "Tanya", "Tara", "Tejaswini", "Trisha", "Urvashi", "Vaishnavi", "Vandana", "Vanshika", "Vidya", "Aarohi", "Meher", "Niharika", "Kareena", "Katrina", "Zoya", "Ruhi", "Myra", "Kiara"];
const genericLastNames = ["Sharma", "Verma", "Gupta", "Singh", "Patil", "Desai", "Joshi", "Kumari", "Das", "Chauhan", "Rajput", "Kaur", "Iyer", "Nair", "Reddy", "Rao", "Gowda", "Jain", "Mehta", "Bhatia", "Kapoor", "Khan", "Malik", "Yadav", "Pandey", "Mishra", "Dubey", "Tiwari", "Soni"];
const genericAreas = ["Central Area", "Downtown", "Luxury District", "IT Park", "Tourist Hub", "VIP Sector", "Heritage Zone"];

// Helper to shuffle array
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

Object.entries(rawProfiles).forEach(([citySlug, profiles]) => {
    indianCityListings[citySlug] = [...profiles];
});

indiaStates.forEach(state => {
    state.cities.forEach(city => {
        const citySlug = city.slug;
        const capitalizedCity = city.name;
        const cityAreas = city.areas && city.areas.length > 0 ? city.areas : genericAreas;

        let paddedProfiles = indianCityListings[citySlug] || [];
        const targetCount = 24 - paddedProfiles.length;
        
        if (targetCount > 0) {
            const shuffledPhotos = shuffleArray(indianModelPhotos).slice(0, targetCount);
            
            // Generate full names dynamically
            let shuffledNames = [];
            while(shuffledNames.length < targetCount) {
                const fn = genericFirstNames[Math.floor(Math.random() * genericFirstNames.length)];
                const ln = genericLastNames[Math.floor(Math.random() * genericLastNames.length)];
                const fullName = fn + " " + ln;
                if(!shuffledNames.includes(fullName)) shuffledNames.push(fullName);
            }
            
            for(let i=0; i<targetCount; i++) {
                const newName = shuffledNames[i];
                const newPhoto = shuffledPhotos[i];
                const randomArea = cityAreas[i % cityAreas.length];
                const shortDesc = \`Here for unforgettable moments! I am \${newName}, an elite companion from \${capitalizedCity}.\`;

                // Override px logic directly to assign exact photo
                paddedProfiles.push({
                    name: newName, 
                    age: 21 + (i % 8), 
                    city: \`\${capitalizedCity} – \${randomArea}\`, 
                    description: shortDesc,
                    services: [svcPool.blowjob, svcPool.doggystyle, svcPool.everyposition, svcPool.massage, svcPool.gfe],
                    pricing: { "1hour": 4000 + (i % 4) * 500, "30min": Math.round((4000 + (i % 4) * 500) * 0.6), currency: "₹" },
                    tier: i % 4 === 0 ? "diamond" : i % 3 === 0 ? "gold" : "silver",
                    verified: true, emoji: "💋",
                    image: newPhoto,
                    images: [newPhoto, ...shuffleArray(indianModelPhotos).slice(0, 3)],
                    nationality: "Indian",
                    isNew: i % 5 === 0
                });
            }
        }

        indianCityListings[citySlug] = paddedProfiles.map((p, i) => ({
            ...p,
            id: \`\${citySlug}-\${i + 1}\`,
        }));
    });
});
`;

  content = content.replace(/Object\.entries\(rawProfiles\)\.forEach\(\[\(\[citySlug, profiles\]\) => \{[\s\S]*?\n\}\);/m, "");
  content = content.replace(/const genericNames = \[[\s\S]*?\}\);/m, newGenerationLogic.trim());
  
  await fs.writeFile(indianCityListingsFile, content);
  console.log('Fixed repetition and names');
}

fixRepetition();
