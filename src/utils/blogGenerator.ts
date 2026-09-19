
import { getCityFromSlug } from '../data/worldCities';

const exoticBlogChunks = [
    "If you're visiting for the first time, you'll quickly realize that the nightlife here is unmatched. But the real fun happens away from the crowded bars. Meeting genuine Call Girls in [CITY] has become the go-to way for businessmen and travelers to unwind. The discretion and absolute luxury of these private encounters are what make this place so famous.",
    
    "People always ask me how to find reliable companionship without getting scammed. It's simple: you have to know where to look. Finding a top-tier Escort Service [CITY] means skipping the shady street corners and going straight to verified, independent providers. They don't mess around with fake photos or hidden fees.",
    
    "Let's be real—sometimes you just want to completely let go. Whether you're dealing with stress from work or just want to explore a wild fantasy, the Independent Call Girls [CITY] are your safest bet. Because they work for themselves without agency interference, they are way more open-minded, relaxed, and genuinely enthusiastic about making sure you have a killer time.",
    
    "There's something incredibly hot about arriving at your luxury hotel room and finding a gorgeous woman waiting for you. That's the beauty of hiring a Call Girl in [CITY]. You skip all the awkward small talk of dating apps and get straight to the chemistry. Plus, it's 100% confidential. No digital trail, just cash and a great night.",
    
    "We recently caught up with one of the top girls in the area, [MODEL], and asked her what guys actually want. Her answer? 'They want to feel like they aren't being judged.' That's exactly why guys keep booking her. A session with [MODEL] is a judgment-free zone where you can ask for exactly what you want—whether that's a sweet, romantic experience or something significantly much wilder.",
    
    "One trend we are seeing massive growth in is the demand for mature women. Young models are great, but there is an undeniable appeal to Housewife Call girls [CITY]. They bring a level of passion, experience, and raw hunger to the bedroom that younger girls simply haven't learned yet. It's a completely different vibe that leaves guys totally speechless.",
    
    "Safety is always the number one priority. You hear stories about fake profiles all the time. That's why dialing a verified [CITY] Call Girls Number is so crucial. When you use a trusted platform, you know exactly who is going to show up at your door. Professionalism and hygiene are non-negotiable for these high-end providers.",
    
    "What does a standard booking actually look like? Most sessions start with a couple of drinks and a relaxed chat. If you've booked Real Call Girls [CITY], there's no rushed, mechanical vibe. You take your time. Maybe a relaxing sensual massage to loosen you up, followed by a slow build-up of tension until neither of you can take it anymore.",
    
    "Diversity is huge here. If you want a tall, athletic European model, you can find her. If you want a curvy, traditional Indian beauty, she's definitely available. The sheer variety of [CITY] Call Girls means you could literally hire a different type of girl every single week and never run out of amazing options to explore.",
    
    "Let's talk about rates because people always want to know. You get what you pay for. A budget girl might give you a quick hour of fun, but if you want the ultimate girlfriend experience with deep kissing, zero rush, and an actual connection, investing in premium Call Girls [CITY] is the only way to go. The elite girls are worth every single penny.",
    
    "A lot of guys think you have to be super rich or famous to enjoy this lifestyle. You don't. Yes, there are VIP escorts that cost a fortune, but there are also plenty of beautiful, girl-next-door types who offer incredibly passionate sessions for standard rates. It's all about knowing what you want and communicating clearly.",
    
    "Having a plus-one who looks like a supermodel is the ultimate flex. Many clients don't just hire these girls for the bedroom; they hire them for business dinners, private parties, and VIP events. Arriving with one of the most stunning Call Girls in [CITY] on your arm immediately elevates your status in any room.",
    
    "For guys visiting on business, an outcall directly to your hotel is usually the best move. It's fast, incredibly discreet, and highly convenient. The second you finish your last meeting, you text a verified [CITY] Call Girls Number and within an hour, your evening goes from boring room service to an unforgettable experience.",
    
    "Sometimes, men are intimidated by the booking process. Don't be. Professional Escort Service [CITY] providers handle this every single day. Send a polite WhatsApp message stating your location, how long you want to meet, and what you're looking for. Keep it simple and respectful, and you'll have an incredible date set up in less than five minutes.",
    
    "One of our favorites, [MODEL], shared her craziest story with us recently. 'I had a guy book me for 12 hours just so we could explore every single room in his penthouse,' she laughed. That's the beauty of Independent Call Girls [CITY]. There are absolutely no rules other than the ones you agree on together.",
    
    "High-class independent models have completely taken over the premium scene here, and for good reason. They are stunning, adventurous, and incredibly professional. If you haven't experienced the passionate energy of a top-tier beauty, you are seriously missing out on one of the greatest pleasures available in this city.",
    
    "If you want to try something really wild, ask about booking a duo session. Two Real Call Girls [CITY] paying attention to you at the exact same time is a fantasy most guys only dream of. Yes, it costs double, but the absolutely insane sensory overload is an experience every guy should try at least once in his life.",
    
    "Discretion goes both ways. Just as you want your privacy protected, the girls want to feel safe. When booking a Call Girl in [CITY], providing clear details, treating her with respect, and paying upfront without making things weird is the easiest way to ensure she goes absolutely wild for you behind closed doors.",
    
    "The 'exotic' label gets thrown around a lot, but what does it actually mean? It means stepping entirely outside your comfort zone. It means trying things you'd never ask a vanilla partner to do. The best Call Girls [CITY] has to offer are highly skilled in drawing out your deepest fantasies and making them a reality without an ounce of judgment.",
    
    "Bottom line: life is way too short to spend your evenings alone in a hotel room. The companionship, the thrill, and the incredible physical release offered by a top-tier Escort Service [CITY] are just a few clicks away. Browse the directories, find a girl whose photos make your heart skip a beat, and go have the best night of your week."
];

const keywordUrlMap: Record<string, string> = {
  "coimbatore": "https://in.kokasite.com/call-girls/coimbatore",
  "jaipur": "https://in.kokasite.com/call-girls/jaipur",
  "kerala": "https://in.kokasite.com/call-girls/state/kerala",
  "varanasi": "https://in.kokasite.com/call-girls/varanasi",
  "tamil-nadu": "https://in.kokasite.com/call-girls/state/tamil-nadu",
  "tamil nadu": "https://in.kokasite.com/call-girls/state/tamil-nadu",
  "digha": "https://in.kokasite.com/call-girls/digha",
  "shimoga": "https://in.kokasite.com/call-girls/shimoga",
  "salem": "https://in.kokasite.com/call-girls/salem",
  "delhi": "https://in.kokasite.com/call-girls/delhi",
  "hassan": "https://in.kokasite.com/call-girls/hassan",
  "guntur": "https://in.kokasite.com/call-girls/guntur",
  "vijayawada": "https://in.kokasite.com/call-girls/vijayawada",
  "ooty": "https://in.kokasite.com/call-girls/ooty",
  "tumkur": "https://in.kokasite.com/call-girls/tumkur",
  "mathura": "https://in.kokasite.com/call-girls/mathura",
  "ujjain": "https://in.kokasite.com/call-girls/ujjain",
  "assam": "https://in.kokasite.com/call-girls/state/assam",
  "ghaziabad": "https://in.kokasite.com/call-girls/ghaziabad",
  "home": "https://in.kokasite.com/",
  "kumbakonam": "https://in.kokasite.com/call-girls/kumbakonam",
  "kalaburagi": "https://in.kokasite.com/call-girls/kalaburagi",
  "surat": "https://in.kokasite.com/call-girls/surat",
  "tiruppur": "https://in.kokasite.com/call-girls/tiruppur",
  "trichy": "https://in.kokasite.com/call-girls/trichy",
  "manipal": "https://in.kokasite.com/call-girls/manipal",
  "bareilly": "https://in.kokasite.com/call-girls/bareilly",
  "nellore": "https://in.kokasite.com/call-girls/nellore",
  "tirupati": "https://in.kokasite.com/call-girls/tirupati",
  "bihar": "https://in.kokasite.com/call-girls/state/bihar",
  "ahmedabad": "https://in.kokasite.com/call-girls/ahmedabad",
  "bengaluru": "https://in.kokasite.com/call-girls/bengaluru",
  "bangalore": "https://in.kokasite.com/call-girls/bengaluru",
  "hyderabad": "https://in.kokasite.com/call-girls/hyderabad",
  "karnataka": "https://in.kokasite.com/call-girls/state/karnataka",
  "kannur": "https://in.kokasite.com/call-girls/kannur",
  "vellore": "https://in.kokasite.com/call-girls/vellore",
  "ludhiana": "https://in.kokasite.com/call-girls/ludhiana",
  "chennai": "https://in.kokasite.com/call-girls/chennai",
  "andhra-pradesh": "https://in.kokasite.com/call-girls/state/andhra-pradesh-locations",
  "andhra pradesh": "https://in.kokasite.com/call-girls/state/andhra-pradesh-locations",
  "kalyan": "https://in.kokasite.com/call-girls/kalyan",
  "muzaffarpur": "https://in.kokasite.com/call-girls/muzaffarpur",
  "dharwad": "https://in.kokasite.com/call-girls/dharwad",
  "siliguri": "https://in.kokasite.com/call-girls/siliguri",
  "allahabad": "https://in.kokasite.com/call-girls/allahabad",
  "kottakkal": "https://in.kokasite.com/call-girls/kottakkal",
  "nagercoil": "https://in.kokasite.com/call-girls/nagercoil",
  "bhilwara": "https://in.kokasite.com/call-girls/bhilwara",
  "jhansi": "https://in.kokasite.com/call-girls/jhansi",
  "dehradun": "https://in.kokasite.com/call-girls/dehradun",
  "anantapur": "https://in.kokasite.com/call-girls/anantapur",
  "agra": "https://in.kokasite.com/call-girls/agra",
  "pratapgarh": "https://in.kokasite.com/call-girls/pratapgarh",
  "mysuru": "https://in.kokasite.com/call-girls/mysuru",
  "mysore": "https://in.kokasite.com/call-girls/mysuru",
  "kadapa": "https://in.kokasite.com/call-girls/kadapa",
  "pune": "https://in.kokasite.com/call-girls/pune",
  "neemrana": "https://in.kokasite.com/call-girls/neemrana",
  "west-bengal": "https://in.kokasite.com/call-girls/west-bengal",
  "west bengal": "https://in.kokasite.com/call-girls/west-bengal",
  "vadodara": "https://in.kokasite.com/call-girls/vadodara",
  "chittorgarh": "https://in.kokasite.com/call-girls/chittorgarh",
  "angul": "https://in.kokasite.com/call-girls/angul",
  "aluva": "https://in.kokasite.com/call-girls/aluva",
  "muzaffarnagar": "https://in.kokasite.com/call-girls/muzaffarnagar",
  "ambikapur": "https://in.kokasite.com/call-girls/ambikapur",
  "keonjhar": "https://in.kokasite.com/call-girls/keonjhar",
  "kendrapara": "https://in.kokasite.com/call-girls/kendrapara",
  "kollam": "https://in.kokasite.com/call-girls/kollam",
  "patna": "https://in.kokasite.com/call-girls/patna",
  "nabarangpur": "https://in.kokasite.com/call-girls/nabarangpur",
  "navi-mumbai": "https://in.kokasite.com/call-girls/navi-mumbai",
  "navi mumbai": "https://in.kokasite.com/call-girls/navi-mumbai",
  "dankuni": "https://in.kokasite.com/call-girls/dankuni",
  "muvattupuzha": "https://in.kokasite.com/call-girls/muvattupuzha",
  "nayagarh": "https://in.kokasite.com/call-girls/nayagarh",
  "kolkata": "https://in.kokasite.com/call-girls/kolkata",
  "nagaur": "https://in.kokasite.com/call-girls/nagaur",
  "paschim-medinipur": "https://in.kokasite.com/call-girls/paschim-medinipur",
  "paschim medinipur": "https://in.kokasite.com/call-girls/paschim-medinipur",
  "hoshiarpur": "https://in.kokasite.com/call-girls/hoshiarpur",
  "himachal-pradesh": "https://in.kokasite.com/call-girls/state/himachal-pradesh",
  "himachal pradesh": "https://in.kokasite.com/call-girls/state/himachal-pradesh",
  "kurnool": "https://in.kokasite.com/call-girls/kurnool",
  "rajasthan": "https://in.kokasite.com/call-girls/state/rajasthan-locations",
  "bettiah": "https://in.kokasite.com/call-girls/bettiah",
  "rewari": "https://in.kokasite.com/call-girls/rewari",
  "thiruvallur": "https://in.kokasite.com/call-girls/thiruvallur",
  "hojai": "https://in.kokasite.com/call-girls/hojai",
  "kokrajhar": "https://in.kokasite.com/call-girls/kokrajhar",
  "gandhinagar": "https://in.kokasite.com/call-girls/gandhinagar",
  "jodhpur": "https://in.kokasite.com/call-girls/jodhpur",
  "kangra": "https://in.kokasite.com/call-girls/kangra",
  "kamrej": "https://in.kokasite.com/call-girls/kamrej",
  "rayagada": "https://in.kokasite.com/call-girls/rayagada",
  "jammu-and-kashmir": "https://in.kokasite.com/call-girls/state/jammu-and-kashmir",
  "jammu and kashmir": "https://in.kokasite.com/call-girls/state/jammu-and-kashmir",
  "chiplun": "https://in.kokasite.com/call-girls/chiplun",
  "ranebennur": "https://in.kokasite.com/call-girls/ranebennur",
  "kadiri": "https://in.kokasite.com/call-girls/kadiri",
  "khagaria": "https://in.kokasite.com/call-girls/khagaria",
  "hubli": "https://in.kokasite.com/call-girls/hubli",
  "buxar": "https://in.kokasite.com/call-girls/buxar",
  "ramanagara": "https://in.kokasite.com/call-girls/ramanagara",
  "north-delhi": "https://in.kokasite.com/call-girls/north-delhi",
  "north delhi": "https://in.kokasite.com/call-girls/north-delhi",
  "west-delhi": "https://in.kokasite.com/call-girls/west-delhi",
  "west delhi": "https://in.kokasite.com/call-girls/west-delhi",
  "matheran": "https://in.kokasite.com/call-girls/matheran",
  "thalassery": "https://in.kokasite.com/call-girls/thalassery",
  "wardha": "https://in.kokasite.com/call-girls/wardha",
  "solapur": "https://in.kokasite.com/call-girls/solapur",
  "dibrugarh": "https://in.kokasite.com/call-girls/dibrugarh",
  "meerut": "https://in.kokasite.com/call-girls/meerut",
  "damoh": "https://in.kokasite.com/call-girls/damoh",
  "bijapur": "https://in.kokasite.com/massage/bijapur",
  "jharkhand": "https://in.kokasite.com/call-girls/state/jharkhand-locations",
  "lakhisarai": "https://in.kokasite.com/call-girls/lakhisarai"
};

const topLocationsList = Object.entries(keywordUrlMap)
    .filter(([name]) => name !== "home" && !name.includes(" "))
    .map(([name, url]) => ({
        name: name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        url
    }));

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

    // Resolve clean link URL from map or fallback
    const lookupKey = cleanCity.toLowerCase().trim();
    const targetUrl = keywordUrlMap[lookupKey] || `https://in.kokasite.com/call-girls/${citySlug}`;

    // Resolve kokasite.com city page URL
    const cityData = getCityFromSlug(citySlug);
    const kokaCityUrl = cityData 
        ? `https://in.kokasite.com/call-girls/${cityData.state.slug}/${citySlug}`
        : `https://in.kokasite.com/call-girls/india/${citySlug}`;

    // Add up to 3-4 internal links for SEO to boost interlinking
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
        if (contentString.includes(kw) && linkCount < 4) {
            const url = (i % 2 === 0) ? targetUrl : kokaCityUrl;
            const linkHtml = `<a href="${url}" class="text-pink-600 font-bold hover:text-pink-800 underline decoration-pink-300 underline-offset-2 transition-colors">${kw}</a>`;
            contentString = contentString.replace(kw, linkHtml);
            linkCount++;
        }
    }

    // Select 3 random locations to cross-link
    const cleanLookup = cleanCity.toLowerCase().trim();
    const otherLocations = topLocationsList.filter(loc => loc.name.toLowerCase() !== cleanLookup);
    
    const selectedLocs: typeof topLocationsList = [];
    let tempLocs = [...otherLocations];
    for (let i = 0; i < 3 && tempLocs.length > 0; i++) {
        const idx = (seed + i) % tempLocs.length;
        selectedLocs.push(tempLocs[idx]);
        tempLocs.splice(idx, 1);
    }

    if (selectedLocs.length > 0) {
        const linkList = selectedLocs.map(loc => `<a href="${loc.url}" class="text-pink-600 hover:text-pink-800 underline decoration-pink-300 transition-colors font-bold">${loc.name}</a>`).join(", ");
        contentString += `\n\nAlso, if you plan to visit other destinations, don't miss our premium independent directories for ${linkList}.`;
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
