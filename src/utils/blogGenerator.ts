
import { getCityFromSlug } from '../data/worldCities';

const exoticBlogChunks = [
    "If you're visiting for the first time, you'll quickly realize that the nightlife here is unmatched. But the real fun happens away from the crowded bars. Meeting genuine Call Girls in [CITY] has become the go-to way for businessmen and travelers to unwind. The discretion and absolute luxury of these private encounters are what make this place so famous.",
    
    "People always ask me how to find reliable companionship without getting scammed. It's simple: you have to know where to look. Finding a top-tier Escort Service [CITY] means skipping the shady street corners and going straight to verified, independent providers. They don't mess around with fake photos or hidden fees.",
    
    "Let's be real—sometimes you just want to completely let go. Whether you're dealing with stress from work or just want to explore a wild fantasy, the Independent Call Girls [CITY] are your safest bet. Because they work for themselves without agency interference, they are way more open-minded, relaxed, and genuinely enthusiastic about making sure you have a killer time.",
    
    "There's something incredibly hot about arriving at your luxury hotel room and finding a gorgeous woman waiting for you. That's the beauty of hiring a Call Girl in [CITY]. You skip all the awkward small talk of dating apps and get straight to the chemistry. Plus, it's 100% confidential. No digital trail, just cash and a great night.",
    
    "Communication is essential when arranging companionship. Clearly discussing boundaries, expectations, and timing before confirming an appointment ensures both parties feel comfortable and respected. When expectations are aligned, dates flow smoothly and comfortably.",
    
    "One trend we are seeing massive growth in is the demand for mature women. Young models are great, but there is an undeniable appeal to Housewife Call girls [CITY]. They bring a level of passion, experience, and raw hunger to the bedroom that younger girls simply haven't learned yet. It's a completely different vibe that leaves guys totally speechless.",
    
    "Safety is always the number one priority. You hear stories about fake profiles all the time. That's why dialing a verified [CITY] Call Girls Number is so crucial. When you use a trusted platform, you know exactly who is going to show up at your door. Professionalism and hygiene are non-negotiable for these high-end providers.",
    
    "What does a standard booking actually look like? Most sessions start with a couple of drinks and a relaxed chat. If you've booked Real Call Girls [CITY], there's no rushed, mechanical vibe. You take your time. Maybe a relaxing sensual massage to loosen you up, followed by a slow build-up of tension until neither of you can take it anymore.",
    
    "Diversity is huge here. If you want a tall, athletic European model, you can find her. If you want a curvy, traditional Indian beauty, she's definitely available. The sheer variety of [CITY] Call Girls means you could literally hire a different type of girl every single week and never run out of amazing options to explore.",
    
    "Let's talk about rates because people always want to know. You get what you pay for. A budget girl might give you a quick hour of fun, but if you want the ultimate girlfriend experience with deep kissing, zero rush, and an actual connection, investing in premium Call Girls [CITY] is the only way to go. The elite girls are worth every single penny.",
    
    "A lot of guys think you have to be super rich or famous to enjoy this lifestyle. You don't. Yes, there are VIP escorts that cost a fortune, but there are also plenty of beautiful, girl-next-door types who offer incredibly passionate sessions for standard rates. It's all about knowing what you want and communicating clearly.",
    
    "Having a plus-one who looks like a supermodel is the ultimate flex. Many clients don't just hire these girls for the bedroom; they hire them for business dinners, private parties, and VIP events. Arriving with one of the most stunning Call Girls in [CITY] on your arm immediately elevates your status in any room.",
    
    "For guys visiting on business, an outcall directly to your hotel is usually the best move. It's fast, incredibly discreet, and highly convenient. The second you finish your last meeting, you text a verified [CITY] Call Girls Number and within an hour, your evening goes from boring room service to an unforgettable experience.",
    
    "Sometimes, men are intimidated by the booking process. Don't be. Professional Escort Service [CITY] providers handle this every single day. Send a polite WhatsApp message stating your location, how long you want to meet, and what you're looking for. Keep it simple and respectful, and you'll have an incredible date set up in less than five minutes.",
    
    "Flexibility in scheduling is a key benefit of independent companionship. Whether clients need short-term companionship for a dinner or extended overnight coordination for business travel, clear communication regarding schedule and terms helps ensure a pleasant, stress-free engagement.",
    
    "High-class independent models have completely taken over the premium scene here, and for good reason. They are stunning, adventurous, and incredibly professional. If you haven't experienced the passionate energy of a top-tier beauty, you are seriously missing out on one of the greatest pleasures available in this city.",
    
    "If you want to try something really wild, ask about booking a duo session. Two Real Call Girls [CITY] paying attention to you at the exact same time is a fantasy most guys only dream of. Yes, it costs double, but the absolutely insane sensory overload is an experience every guy should try at least once in his life.",
    
    "Discretion goes both ways. Just as you want your privacy protected, the girls want to feel safe. When booking a Call Girl in [CITY], providing clear details, treating her with respect, and paying upfront without making things weird is the easiest way to ensure she goes absolutely wild for you behind closed doors.",
    
    "The 'exotic' label gets thrown around a lot, but what does it actually mean? It means stepping entirely outside your comfort zone. It means trying things you'd never ask a vanilla partner to do. The best Call Girls [CITY] has to offer are highly skilled in drawing out your deepest fantasies and making them a reality without an ounce of judgment.",
    
    "Bottom line: life is way too short to spend your evenings alone in a hotel room. The companionship, the thrill, and the incredible physical release offered by a top-tier Escort Service [CITY] are just a few clicks away. Browse the directories, find a girl whose photos make your heart skip a beat, and go have the best night of your week."
];

import { getCityFromSlug, getStateFromSlug } from '../data/worldCities';

const featuredLocations = [
    { name: "Mumbai", stateSlug: "maharashtra", citySlug: "mumbai" },
    { name: "Delhi", stateSlug: "delhi-ncr", citySlug: "delhi" },
    { name: "Bengaluru", stateSlug: "karnataka", citySlug: "bengaluru" },
    { name: "Kolkata", stateSlug: "west-bengal", citySlug: "kolkata" },
    { name: "Hyderabad", stateSlug: "telangana", citySlug: "hyderabad" },
    { name: "Chennai", stateSlug: "tamil-nadu", citySlug: "chennai" },
    { name: "Pune", stateSlug: "maharashtra", citySlug: "pune" },
    { name: "Ahmedabad", stateSlug: "gujarat", citySlug: "ahmedabad" },
    { name: "Jaipur", stateSlug: "rajasthan", citySlug: "jaipur" },
    { name: "Goa (Panaji)", stateSlug: "goa", citySlug: "panaji" },
    { name: "Chandigarh", stateSlug: "punjab", citySlug: "chandigarh" },
    { name: "Lucknow", stateSlug: "uttar-pradesh", citySlug: "lucknow" },
    { name: "Kochi", stateSlug: "kerala", citySlug: "kochi" },
    { name: "Patna", stateSlug: "bihar", citySlug: "patna" },
    { name: "Indore", stateSlug: "madhya-pradesh", citySlug: "indore" },
    { name: "Surat", stateSlug: "gujarat", citySlug: "surat" },
    { name: "Nagpur", stateSlug: "maharashtra", citySlug: "nagpur" },
    { name: "Varanasi", stateSlug: "uttar-pradesh", citySlug: "varanasi" },
    { name: "Coimbatore", stateSlug: "tamil-nadu", citySlug: "coimbatore" },
    { name: "Dehradun", stateSlug: "uttarakhand", citySlug: "dehradun" },
].map(loc => ({
    name: loc.name,
    url: `https://in.kokasite.com/call-girls/${loc.stateSlug}/${loc.citySlug}`
}));

function getCanonicalLocationUrl(keywordOrSlug: string): string {
    const clean = keywordOrSlug.toLowerCase().trim().replace(/\s+/g, '-');
    const cityData = getCityFromSlug(clean);
    if (cityData) {
        return `https://in.kokasite.com/call-girls/${cityData.state.slug}/${cityData.city.slug}`;
    }
    const stateData = getStateFromSlug(clean);
    if (stateData) {
        return `https://in.kokasite.com/call-girls/${stateData.slug}`;
    }
    return `https://in.kokasite.com/service-areas`;
}

export function generateMegaBlogPost(seed: number, city: string, modelName: string, image: string): any {
    const cleanCity = city.split(" –")[0].split(" -")[0].trim();
    const citySlug = cleanCity.toLowerCase().replace(/\s+/g, '-');
    
    // Choose unique chunks to reach a solid blog-length
    let indices = Array.from({length: exoticBlogChunks.length}, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = (seed + i) % (i + 1);
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const selectedChunks = indices.slice(0, 16).map(idx => {
        return exoticBlogChunks[idx]
            .replace(/\[CITY\]/g, cleanCity)
            .replace(/\[MODEL\]/g, modelName);
    });

    let contentString = selectedChunks.join("\n\n");

    // Resolve canonical city page URL
    const cityData = getCityFromSlug(citySlug);
    const kokaCityUrl = cityData 
        ? `https://in.kokasite.com/call-girls/${cityData.state.slug}/${citySlug}`
        : getCanonicalLocationUrl(cleanCity);

    // Add internal links pointing strictly to canonical URLs
    const possibleKeywords = [
        `Call Girls in ${cleanCity}`,
        `Escort Service ${cleanCity}`,
        `Independent Call Girls ${cleanCity}`,
        `Real Call Girls ${cleanCity}`,
        `Call Girls ${cleanCity}`,
        `${cleanCity} Call Girls Number`
    ];

    let linkCount = 0;
    for (let i = 0; i < possibleKeywords.length; i++) {
        const kw = possibleKeywords[i];
        if (contentString.includes(kw) && linkCount < 3) {
            const linkHtml = `<a href="${kokaCityUrl}" class="text-pink-600 font-bold hover:text-pink-800 underline decoration-pink-300 underline-offset-2 transition-colors">${kw}</a>`;
            contentString = contentString.replace(kw, linkHtml);
            linkCount++;
        }
    }

    // Select 3 random locations to cross-link
    const cleanLookup = cleanCity.toLowerCase().trim();
    const otherLocations = featuredLocations.filter(loc => loc.name.toLowerCase() !== cleanLookup);
    
    const selectedLocs: typeof featuredLocations = [];
    let tempLocs = [...otherLocations];
    for (let i = 0; i < 3 && tempLocs.length > 0; i++) {
        const idx = (seed + i) % tempLocs.length;
        selectedLocs.push(tempLocs[idx]);
        tempLocs.splice(idx, 1);
    }

    if (selectedLocs.length > 0) {
        const linkList = selectedLocs.map(loc => `<a href="${loc.url}" class="text-pink-600 hover:text-pink-800 underline decoration-pink-300 transition-colors font-bold">${loc.name}</a>`).join(", ");
        contentString += `\n\nAlso, if you plan to visit other destinations, don't miss our independent directories for ${linkList}.`;
    }

    const titleTemplates = [
        `${cleanCity} Escort Experience: Why Nightlife is Better with ${modelName}`,
        `The Insider's Guide to Hiring a ${cleanCity} Escort`,
        `An Evening with ${modelName}: The Ultimate ${cleanCity} Escort Guide`,
        `How to Find a Reliable ${cleanCity} Escort Tonight`,
        `${cleanCity} Escort Reviews: Uncensored Details About ${modelName}`,
        `The Real Cost of Hiring a Premium ${cleanCity} Escort`,
        `Exploring Deep Fantasies with a ${cleanCity} Escort like ${modelName}`
    ];

    const title = titleTemplates[seed % titleTemplates.length];
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    return {
        id: `blog_${seed}`,
        slug,
        title,
        excerpt: `Curious about the escort scene in ${cleanCity}? We dive into the reality of hiring elite companions like ${modelName}, covering rates, safety, and ultimate discretion.`,
        content: contentString,
        image,
        author: "Koka Site Editor",
        date: new Date(Date.now() - seed * 3600000).toISOString().split('T')[0],
        category: "Exotic Spotlights",
        tags: [cleanCity, "Exotic", "Call Girl", "Escort", modelName],
        featuredCitySlug: citySlug
    };
}
