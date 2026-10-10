import type { Listing } from "./listings";
export type { Listing };
import { worldCountries, getStateFromSlug, getCityFromSlug } from "./worldCities";
import { generateUltraLongProfileDesc } from "@/utils/textGenerator";

// ── Shared service pool ──────────────────────────────────────────────────────
const svcPool = {
    gfe: "GFE (Girlfriend Experience)",
    massage: "Body Massage",
    bbbj: "Bareback Blowjob (BBBJ)",
    blowjob: "Blowjob (BJ)",
    doggystyle: "Doggy Style",
    everyposition: "Every Position",
    duo: "Duo Threesome",
    outcall: "Outcall Service",
    incall: "Incall Service",
    roleplay: "Role Play",
    bdsm: "BDSM (Soft)",
    strip: "Strip-tease",
    oral: "Oral Sex",
    bbw: "BBW",
    covered: "Covered Blowjob",
    anal: "Anal Sex",
    camshow: "Cam Show",
    completion: "Oral to Completion",
    daty: "Dinner At The Y (DATY)",
    hotelbased: "Hotel Based Meets",
};

const namesByCountry: Record<string, { firstNames: string[]; lastNames: string[] }> = {
    IN: {
        firstNames: ["Aarti", "Aayushi", "Aditi", "Alia", "Ananya", "Anjali", "Anushka", "Avani", "Bhavya", "Bhumika", "Chahat", "Deepa", "Deepika", "Disha", "Divya", "Esha", "Gargi", "Gauri", "Geeta", "Heena", "Isha", "Ishita", "Jahnvi", "Jaya", "Jyoti", "Kajal", "Kavya", "Khushi", "Kirti", "Komal", "Kritika", "Lakshmi", "Lata", "Madhu", "Mahi", "Malini", "Manasi", "Meera", "Megha", "Monika", "Nandini", "Neha", "Nidhi", "Nikita", "Nisha", "Palak", "Pallavi", "Payal", "Pooja", "Poonam", "Prachi", "Preeti", "Priya", "Priyanka", "Radhika", "Rakhi", "Rashmi", "Raveena", "Ridhima", "Riya", "Roshni", "Ruchi", "Rupal", "Sakshi", "Saloni", "Samiksha", "Sana", "Sanika", "Sanjana", "Sapna", "Sarika", "Seema", "Shalini", "Shikha", "Shilpa", "Shivani", "Shraddha", "Shreya", "Shruti", "Simran", "Smriti", "Sneha", "Sonal", "Sonali", "Soniya", "Srishti", "Suman", "Sunita", "Sushma", "Swati", "Tamanna", "Tanisha", "Tanya", "Tara", "Tejaswini", "Trisha", "Urvashi", "Vaishnavi", "Vandana", "Vanshika", "Vidya"],
        lastNames: ["Sharma", "Verma", "Gupta", "Singh", "Patil", "Desai", "Joshi", "Kumari", "Das", "Chauhan", "Rajput", "Kaur", "Iyer", "Nair", "Reddy", "Rao", "Gowda", "Jain", "Mehta", "Bhatia", "Kapoor", "Khan", "Malik", "Yadav", "Pandey", "Mishra", "Dubey", "Tiwari", "Soni"]
    },
    AU: {
        firstNames: ["Chloe", "Emily", "Olivia", "Charlotte", "Amelia", "Isla", "Mia", "Ava", "Grace", "Harper", "Lily", "Evie", "Ella", "Sophie", "Zoe", "Ruby"],
        lastNames: ["Smith", "Jones", "Williams", "Brown", "Wilson", "Taylor", "Morton", "White", "Martin", "Anderson", "Thompson", "Walker", "Harris"]
    },
    CA: {
        firstNames: ["Emma", "Olivia", "Emily", "Sophia", "Aria", "Chloe", "Abigail", "Ella", "Maya", "Hannah", "Nora", "Lily", "Layla", "Milana"],
        lastNames: ["Smith", "Tremblay", "Martin", "Roy", "Gagnon", "Lee", "Brown", "Wilson", "Campbell", "Johnson", "MacDonald", "Taylor", "Jones"]
    },
    CN: {
        firstNames: ["Mei", "Ling", "Yan", "Xiu", "Lili", "Fang", "Jing", "Hua", "Min", "Li", "Qing", "Wei", "Xia", "Ying", "Lan", "Zhen"],
        lastNames: ["Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou", "Xu", "Sun", "Ma", "Zhu", "Hu", "Lin"]
    },
    FR: {
        firstNames: ["Chloé", "Léa", "Manon", "Camille", "Sarah", "Emma", "Inès", "Clara", "Alice", "Zoé", "Louise", "Lola", "Eva", "Mathilde", "Lucie"],
        lastNames: ["Martin", "Bernard", "Thomas", "Petit", "Robert", "Richard", "Durand", "Dubois", "Moreau", "Laurent", "Simon", "Michel", "Garcia"]
    },
    DE: {
        firstNames: ["Emma", "Mia", "Sofia", "Hannah", "Emilia", "Anna", "Marie", "Mila", "Lina", "Lea", "Lena", "Leni", "Clara", "Amelie"],
        lastNames: ["Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Schäfer", "Koch"]
    },
    JP: {
        firstNames: ["Sakura", "Haruka", "Yui", "Mio", "Hina", "Mei", "Aoi", "Rin", "Himari", "Yua", "Ichika", "Kanna", "Sara", "Rio", "Yuna"],
        lastNames: ["Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato", "Yoshida", "Yamada"]
    },
    SA: {
        firstNames: ["Fatimah", "Aisha", "Layla", "Mariam", "Amira", "Yasmin", "Reem", "Sara", "Noura", "Huda", "Maha", "Hana", "Lina", "Farah", "Salma"],
        lastNames: ["Al-Farsi", "Al-Harbi", "Al-Saud", "Al-Otaibi", "Al-Ghamdi", "Al-Zahrani", "Al-Dossari", "Al-Mutairi", "Al-Shahrani"]
    },
    ZA: {
        firstNames: ["Zama", "Lerato", "Thandi", "Naledi", "Nomvula", "Sibongile", "Bontle", "Refilwe", "Jessica", "Sarah", "Nicole", "Elize"],
        lastNames: ["Ndlovu", "Botha", "van der Merwe", "Dlamini", "Khumalo", "Mokoena", "Smit", "Zulu", "Pretorius", "Naidoo", "Pillay"]
    },
    ES: {
        firstNames: ["María", "Lucía", "Sofía", "Martina", "Paula", "Julia", "Valeria", "Alba", "Emma", "Carla", "Sara", "Noa", "Carmen", "Ana", "Elena"],
        lastNames: ["García", "Rodríguez", "González", "Fernández", "López", "Martínez", "Sánchez", "Pérez", "Gómez", "Martín", "Ruiz", "Díaz"]
    },
    TH: {
        firstNames: ["Som", "Ploy", "Fon", "Karn", "Jane", "May", "Nan", "Bow", "Cherry", "Nok", "Gie", "Mod", "Pang", "Ning", "Kae", "Bua"],
        lastNames: ["Somdee", "Saetang", "Charoen", "Suksamran", "Thongdee", "Prasert", "Srisai", "Jaiyen", "Wongsuwan", "Chaisri"]
    },
    GB: {
        firstNames: ["Olivia", "Amelia", "Isla", "Ava", "Mia", "Ivy", "Lily", "Freya", "Florence", "Evie", "Emily", "Poppy", "Daisy", "Alice", "Phoebe"],
        lastNames: ["Smith", "Jones", "Taylor", "Brown", "Williams", "Wilson", "Johnson", "Davies", "Robinson", "Wright", "Thompson", "Evans"]
    }
};

const pricingByCountry: Record<string, { rate: number; currency: string }> = {
    IN: { rate: 4000, currency: "₹" },
    AU: { rate: 250, currency: "A$" },
    CA: { rate: 220, currency: "C$" },
    CN: { rate: 1000, currency: "¥" },
    FR: { rate: 180, currency: "€" },
    DE: { rate: 180, currency: "€" },
    JP: { rate: 25000, currency: "¥" },
    SA: { rate: 800, currency: "SR" },
    ZA: { rate: 1500, currency: "R" },
    ES: { rate: 150, currency: "€" },
    TH: { rate: 3000, currency: "฿" },
    GB: { rate: 150, currency: "£" }
};

const genericAreas = ["Central Area", "Downtown", "Luxury District", "IT Park", "Tourist Hub", "VIP Sector", "Heritage Zone", "Old City", "Civil Lines", "Cantonment", "Railway Station Area", "Airport Zone"];

// Pool of popular Indian cities for cross-city availability mixing
const popularIndiaCities = [
    "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",
    "Jaipur", "Lucknow", "Chandigarh", "Goa", "Indore", "Bhopal", "Nagpur", "Kochi",
    "Surat", "Vadodara", "Agra", "Varanasi", "Patna", "Dehradun", "Guwahati", "Raipur",
    "Bhubaneswar", "Coimbatore", "Visakhapatnam", "Mangalore", "Mysuru", "Udaipur",
    "Jodhpur", "Amritsar", "Shimla", "Manali", "Noida", "Gurgaon", "Faridabad"
];

const indianModelPhotos = [
  "/models/202512-09-182608_KZ-0.webp",
  "/models/Goa-Call-Girls - Copy.webp",
  "/models/imageye___-_imgi_10_kho-63890990859307-2103213618.webp",
  "/models/imageye___-_imgi_10_kho-63895522050652-2103213618.webp",
  "/models/imageye___-_imgi_11_kho-63887663558331-2103213618.webp",
  "/models/imageye___-_imgi_11_kho-63893140292902-2103213618.webp",
  "/models/imageye___-_imgi_11_kho-63895522016613-2103213618.webp",
  "/models/imageye___-_imgi_11_kho-63900032726581-2103213618.webp",
  "/models/imageye___-_imgi_12_kho-63883631619394-2103213618.webp",
  "/models/imageye___-_imgi_12_kho-63887302132768-2103213618.webp",
  "/models/imageye___-_imgi_13_jiya-patel-kolkata-kolkata-myself-jiya-pc-1764491434-1.webp",
  "/models/imageye___-_imgi_13_kho-63890682968191-2103213618.webp",
  "/models/imageye___-_imgi_13_kho-63892748872658-2103213618.webp",
  "/models/imageye___-_imgi_13_kho-63895514152488-2103213618.webp",
  "/models/imageye___-_imgi_14_kho-63883612435209-2103213618.webp",
  "/models/imageye___-_imgi_14_kho-63887126712213-2103213618.webp",
  "/models/imageye___-_imgi_14_kho-63890674611730-2103213618.webp",
  "/models/imageye___-_imgi_14_kho-63892697861066-2103213618.webp",
  "/models/imageye___-_imgi_14_kho-63895277278591-2103213618.webp",
  "/models/imageye___-_imgi_14_monika-want-to-meeting-pc-1755835927-1.webp",
  "/models/imageye___-_imgi_14_riya-call-girl-service-independent-my-self-pc-1764416913-1.webp",
  "/models/imageye___-_imgi_15_kajal-roy-hii-call-me-pc-1764520779-1.webp",
  "/models/imageye___-_imgi_15_kho-63887046177734-2103213618.webp",
  "/models/imageye___-_imgi_15_kho-63892594338143-2103213618.webp",
  "/models/imageye___-_imgi_15_kho-63895126356241-2103213618.webp",
  "/models/imageye___-_imgi_15_riya-kolkata-call-pc-1758475721-1.webp",
  "/models/imageye___-_imgi_15_sweta-singh-low-price-only-pc-1755777285-1.webp",
  "/models/imageye___-_imgi_16_kho-63883538397143-2103213618.webp",
  "/models/imageye___-_imgi_16_kho-63886796000826-2103213618.webp",
  "/models/imageye___-_imgi_16_kho-63890350410835-2103213618.webp",
  "/models/imageye___-_imgi_16_kho-63892428821262-2103213618.webp",
  "/models/imageye___-_imgi_16_kho-63894243736199-2103213618.webp",
  "/models/imageye___-_imgi_16_monika-want-to-meeting-pc-1754795290-1.webp",
  "/models/imageye___-_imgi_16_neha-kumari-kolkata-call-girl-pc-1757904380-1.webp",
  "/models/imageye___-_imgi_17_kho-63883360870433-2103213618.webp",
  "/models/imageye___-_imgi_17_kho-63886712570219-2103213618.webp",
  "/models/imageye___-_imgi_17_kho-63892414349779-2103213618.webp",
  "/models/imageye___-_imgi_17_kho-63893916760080-2103213618.webp",
  "/models/imageye___-_imgi_17_kolkata-low-price-9065298724vip-pc-1758222592-1.webp",
  "/models/imageye___-_imgi_17_sonali-independent-no-online-payment-pc-1763838625-1.webp",
  "/models/imageye___-_imgi_18_kho-63883276216331-2103213618.webp",
  "/models/imageye___-_imgi_18_kho-63886696907602-2103213618.webp",
  "/models/imageye___-_imgi_18_kho-63889980333588-2103213618.webp",
  "/models/imageye___-_imgi_18_kho-63892149671738-2103213618.webp",
  "/models/imageye___-_imgi_18_shamya-kolkata-call-girl-pc-1758569548-1.webp",
  "/models/imageye___-_imgi_18_suman-post-date-23-pc-1753517670-1.webp",
  "/models/imageye___-_imgi_18_udaipur-available-now-trusted-pc-1763800178-1.webp",
  "/models/imageye___-_imgi_19_kajal-kumari-udaipur-2hr-pc-1763719782-1.webp",
  "/models/imageye___-_imgi_19_kho-63883240432830-2103213618.webp",
  "/models/imageye___-_imgi_19_kho-63886374368408-2103213618.webp",
  "/models/imageye___-_imgi_19_kho-63892085442835-2103213618.webp",
  "/models/imageye___-_imgi_20_anjali-kumari-only-sil-pack-pc-1752648457-1.webp",
  "/models/imageye___-_imgi_20_anu-kumari-full-cash-pc-1763019110-1.webp",
  "/models/imageye___-_imgi_20_kho-63886004491372-2103213618.webp",
  "/models/imageye___-_imgi_20_kho-63889514060909-2103213618.webp",
  "/models/imageye___-_imgi_20_kho-63892084039545-2103213618.webp",
  "/models/imageye___-_imgi_20_kho-63895536292352-2103213618.webp",
  "/models/imageye___-_imgi_20_puja-kolkata-vip-escort-pc-1765189004-1.webp",
  "/models/imageye___-_imgi_21_kho-63882767052155-2103213618.webp",
  "/models/imageye___-_imgi_21_kho-63885797875406-2103213618.webp",
  "/models/imageye___-_imgi_21_kho-63889499807447-2103213618.webp",
  "/models/imageye___-_imgi_21_kho-63892067881573-2103213618.webp",
  "/models/imageye___-_imgi_21_kho-63896819981354-2103213618.webp",
  "/models/imageye___-_imgi_21_muskan-8340641975-call-girl-pc-1762688157-1.webp",
  "/models/imageye___-_imgi_22_jyoti-full-cash-payment-pc-1762330899-1.webp",
  "/models/imageye___-_imgi_22_kajal-please-whatsapp-reply-pc-1751447230-1.webp",
];

const countryImages: Record<string, string[]> = {
    IN: indianModelPhotos,
    AU: ["/models/au_1.webp", "/models/au_2.webp", "/models/au_3.webp"],
    CA: ["/models/ca_1.webp", "/models/ca_2.webp", "/models/ca_3.webp"],
    CN: ["/models/cn_1.webp", "/models/cn_2.webp", "/models/cn_3.webp"],
    FR: ["/models/fr_1.webp", "/models/fr_2.webp", "/models/fr_3.webp"],
    DE: ["/models/de_1.webp", "/models/de_2.webp", "/models/de_3.webp"],
    JP: ["/models/jp_1.webp", "/models/jp_2.webp", "/models/jp_3.webp"],
    SA: ["/models/sa_1.webp", "/models/sa_2.webp", "/models/sa_3.webp"],
    ZA: ["/models/za_1.webp", "/models/za_2.webp", "/models/za_3.webp"],
    ES: ["/models/es_1.webp", "/models/es_2.webp", "/models/es_3.webp"],
    TH: ["/models/th_1.webp", "/models/th_2.webp", "/models/th_3.webp"],
    GB: ["/models/uk_1.webp", "/models/uk_2.webp", "/models/uk_3.webp"]
};

function hashStr(str: string): number {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
}

export const indianCityListings: Record<string, Listing[]> = {};

// Helper to generate dynamic listings for any city in the world
function generateListingsForCity(citySlug: string): Listing[] {
    const cityInfo = getCityFromSlug(citySlug);
    if (!cityInfo) return [];

    const countryCode = cityInfo.country.code;
    const countryData = namesByCountry[countryCode] || namesByCountry.IN;
    const pricing = pricingByCountry[countryCode] || pricingByCountry.IN;
    const rawImages = countryImages[countryCode] || countryImages.IN;
    const capitalizedCity = cityInfo.city.name;
    const cityAreas = cityInfo.city.areas && cityInfo.city.areas.length > 0 ? cityInfo.city.areas : genericAreas;

    const profiles: Listing[] = [];
    for (let i = 0; i < 24; i++) {
        const seedStr = citySlug + i;
        const seed = hashStr(seedStr);
        const fn = countryData.firstNames[seed % countryData.firstNames.length];
        const ln = countryData.lastNames[(seed + 1) % countryData.lastNames.length];
        const fullName = fn + " " + ln;
        const area = cityAreas[seed % cityAreas.length];
        const age = 21 + (seed % 8);

        // Cross-city availability: pick 2-3 nearby cities from pool (excluding current city)
        const availableCitiesPool = popularIndiaCities.filter(
            c => c.toLowerCase() !== capitalizedCity.toLowerCase()
        );
        const crossCity1 = availableCitiesPool[(seed + 3) % availableCitiesPool.length];
        const crossCity2 = availableCitiesPool[(seed + 7) % availableCitiesPool.length];
        const crossCityStr = crossCity1 !== crossCity2
            ? `${crossCity1} & ${crossCity2}`
            : crossCity1;

        const fullDescription = generateUltraLongProfileDesc(
            fullName, 
            capitalizedCity, 
            age, 
            `I am a premium companion based in ${capitalizedCity}, also available for outcalls in ${crossCityStr}. I offer high-class escort and relaxation services customized to your needs.`
        );

        const titles = [
            `${capitalizedCity.toUpperCase()} BEST 💯 VIP SAFE AND SECURE GENUINE SERVICE CALL ME`,
            `PREMIUM ${capitalizedCity.toUpperCase()} INDEPENDENT COMPANION 💋 100% GENUINE PHOTOS`,
            `HIGH PROFILE ${capitalizedCity.toUpperCase()} SERVICES – DOORSTEP SERVICE AVAILABLE`,
            `GENUINE ${capitalizedCity.toUpperCase()} MODEL 🔥 24/7 AVAILABLE – ALSO IN ${crossCity1.toUpperCase()}`,
            `ELITE COMPANION IN ${capitalizedCity.toUpperCase()} 🌟 OUTCALL TO ${crossCity1.toUpperCase()} AVAILABLE`
        ];
        const catchyTitle = titles[seed % titles.length];

        const rate = pricing.rate + (seed % 4) * Math.round(pricing.rate * 0.1);
        const currency = pricing.currency;

        const mainImage = rawImages[seed % rawImages.length];
        const secondaryImage = rawImages[(seed + 1) % rawImages.length];
        const tertiaryImage = rawImages[(seed + 2) % rawImages.length];

        profiles.push({
            id: `${citySlug}-${i + 1}`,
            name: catchyTitle,
            age: age,
            city: `${capitalizedCity} – ${area}`,
            description: fullDescription,
            services: [svcPool.blowjob, svcPool.doggystyle, svcPool.everyposition, svcPool.massage, svcPool.gfe, svcPool.roleplay, svcPool.anal, svcPool.oral],
            pricing: { 
                "1hour": rate, 
                "30min": Math.round(rate * 0.6), 
                currency 
            },
            tier: i % 4 === 0 ? "diamond" : i % 3 === 0 ? "gold" : "silver",
            verified: true, 
            emoji: "💋",
            image: mainImage,
            images: [mainImage, secondaryImage, tertiaryImage],
            nationality: cityInfo.country.name,
            isNew: i % 5 === 0
        });
    }

    return profiles;
}

// Generate listings for ALL cities in the world
worldCountries.forEach(country => {
    country.regions.forEach(region => {
        region.cities.forEach(city => {
            indianCityListings[city.slug] = generateListingsForCity(city.slug);
        });
    });
});

export function getCityListings(slug: string): Listing[] {
    return indianCityListings[slug] || [];
}

export function getStateListings(stateSlug: string): Listing[] {
    const region = getStateFromSlug(stateSlug);
    if (!region) return [];
    let all: Listing[] = [];
    region.cities.forEach(city => {
        if (indianCityListings[city.slug]) {
            all.push(...indianCityListings[city.slug]);
        }
    });
    return all;
}
