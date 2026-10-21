
import { getCityFromSlug } from '../data/worldCities';

const exoticBlogChunks = [
    "Agar aap pehli baar visit kar rahe hain, toh aapko realise hoga ki yahan ki nightlife ka koi muqabla nahi hai. Par asal romance aur thrill crowded clubs me nahi, balki band kamre ke private sukoon me milta hai. Genuine Call Girls in [CITY] se milna aaj kal stylish logon aur smart travelers ka favorite tareeqa ban chuka hai unwind karne ka. Ek pyari si smile, seductive look aur pure luxury ka combination aapki poori thakan mita deta hai.",
    
    "Aksar log sochte hain ki bina kisi tension ya scam ke ek sexy aur caring companion kaise milti hai. Seedhi baat hai—aapko sahi jagah par dhoondhna aana chahiye. Ek top-tier Escort Service [CITY] choose karne ka matlab hai shady street corners ko ignore karke seedhe verified, independent beauties se connect hona. Unke paas na koi fake photos hote hain, na koi hidden fees—sirf genuine connection aur khula romantic andaaz.",
    
    "Sach kahein toh kabhi-kabhi dil karta hai saare rules aur daily stress bhool kar bas kisi haseena ke sath kho jayein. Din bhar ka work pressure ho ya dil me dabi koi wild fantasy, Independent Call Girls [CITY] aapke liye sabse pyara aur safe option hain. Kyunki ye bina kisi agency interference ke freely kaam karti hain, isliye inka vibe super friendly, relaxed aur seductive hota hai. Inke sath bitaya har lamha ek intoxicating dream jaisa lagta hai.",
    
    "Sochiye zara—aap apne luxury hotel room me enter karte hain, dim ambient lights hain, aur wahan ek behad khubsurat aur sexy ladki aapka intezar kar rahi ho. Yahi toh jaadu hai jab aap invite karte hain ek Call Girl in [CITY]. Dating apps ki awkward baaton ko skip karke seedhe sizzling chemistry aur gentle romance par aana. Ek passionate gaze, warm hug aur bina kisi digital trail ke sirf ek shandaar, memorable raat.",
    
    "Romantic dates ka sabse bada secret hai aapas ki understanding aur sweet communication. Jab aap pehle se hi respectfully apni expectations, timing aur boundaries discuss kar lete hain, toh date me ek alag hi comfort aur warmth aa jaati hai. Jab dono taraf mutual comfort ho, toh shaam bilkul butter ki tarah smooth, sensual aur exciting guzarne lagti hai.",
    
    "Aaj kal mature women aur unke passionate andaaz ki demand exponentially badh rahi hai. Young models toh charming hoti hi hain, lekin Housewife Call girls [CITY] ki baat hi alag hoti hai. Unke paas romance ka gehra experience, caring nature aur ek aisi sensual warmth hoti hai jo younger girls me milna mushkil hai. Unka har touch itna loving aur electrifying hota hai ki aap unke deewane ho jayenge.",
    
    "Privacy aur safety hamesha sabse pehle aati hai. Internet par fake profiles dekh kar mood kharab na ho, isiliye ek trusted aur verified [CITY] Call Girls Number par contact karna sabse smart decision hai. Jab platform verified ho, tab aapko 100% certainty hoti hai ki wahi haseena aapke darwaze par dastak degi jise dekh kar aapka dil dhadka tha. Class, elegance aur hygiene inka golden rule hai.",
    
    "Ek perfect romantic date aakhir shuru kaise hoti hai? Sabse pehle thodi soft music, do glass drink, aur dil khol kar haseen guftagu. Agar aapne book ki hain Real Call Girls [CITY], toh wahan koi jaldbazi ya mechanical vibe nahi hoti. Pehle ek sweet relaxing sensual massage jo aapki har tension ko nikal de, aur phir dheere-dheere badhti hui sizzling chemistry jo raat ko memorable bana deti hai.",
    
    "Yahan ki diversity dekh kar aapka dil khush ho jayega. Chahe aapko ek tall, confident modern diva pasand ho ya phir ek soft-spoken, curvy desi Indian beauty—har tarah ka roop yahan readily available hai. Itni zabardast variety of [CITY] Call Girls ke rehte aap har baar ek naya, thrilling aur romantic avatar explore kar sakte hain.",
    
    "Rates aur budget ki baat karein toh simple si reality hai: luxury aur class ki hamesha ek value hoti hai. Kisi cheap option me sirf formalities milti hain, lekin agar aapko chahiye deep romantic connection, passionate cuddling, seductive conversations aur genuine girlfriend experience, toh elite Call Girls [CITY] choose karna har tareeqe se worth it hai. Inka time har ek second memorable bana deta hai.",
    
    "Bahut se logon ko lagta hai ki aisi gorgeous companions ke sath date sirf ameer ya celebrities ke liye hoti hai. Yeh bilkul galat hai! Beshak ultra-high VIP escorts bhi hoti hain, lekin kaafi aisi sweet, friendly aur seductive girl-next-door beauties bhi hain jo reasonable rates par behad loving aur passionate time offer karti hain. Bas tameez se baat karein aur respectful gentleman banein, pyari shaam aapki hogi.",
    
    "Kisi high-end party, fine-dining dinner ya private event me ek ravishing model ko apna partner bana kar le jaana alag hi confidence deta hai. Log companions ko sirf band kamre ke liye nahi, balki apni luxury life me glamour add karne ke liye bhi invite karte hain. Jab aapki arm par ek gorgeous Call Girls in [CITY] hoti hai, toh har nazar aap par thehar jaati hai.",
    
    "Agar aap kisi business trip par [CITY] aaye hain, toh direct hotel outcall booking sabse convenient aur discreet hoti hai. Boring meetings aur presentations ke baad akele room service order karne ke bajay, verified [CITY] Call Girls Number par text kijiye. Ek ghante ke andar aapka thaka-hara din ek sensual aur relaxing romance me tabdeel ho jayega.",
    
    "Pehli baar booking karne me bilkul bhi jhijhakne ki zaroorat nahi hai. Professional Escort Service [CITY] providers daily is tarah ke arrangements handle karti hain. Bas ek polite WhatsApp message bhejiye—apna location, meeting duration aur apni preference clear bataiye. Five minutes ke andar aapki pyari date fix ho jayegi bina kisi headache ke.",
    
    "Independent companions ke sath sabse achhi baat hoti hai unki flexibility aur freedom. Chahe aapko bas ek short dinner date aur romantic stroll chahiye, ya phir poori raat saath bitane ke liye ek caring aur sensual beauty, clear coordination se sab kuch effortlessly set ho jata hai bina kisi hassle ke.",
    
    "High-class independent models ne yahan ke premium dating landscape ko naya roop diya hai. Yeh educated, adventurous aur open-minded hoti hain. Agar aapne abhi tak kisi top-tier companion ke sath deep eye-contact aur gentle romantic touch feel nahi kiya, toh aap city ke sabse khoobsurat ehsaas se mehroom hain.",
    
    "Agar aap apni fantasy ko ek step aage le jana chahte hain, toh duo experience ke baare me sochiye. Do Real Call Girls [CITY] ek sath aapko attention de rahi hon, aapke sath hass rahi hon aur dono taraf se romance baras raha ho—yeh ek aisi magical feeling hai jise har koi apni life me kam se kam ek baar zaroor experience karna chahta hai.",
    
    "Discretion aur respect dono taraf se chalti hai. Jaise aap chahte hain ki aapki privacy safe rahe, waise hi in beauties ko bhi safety aur izzat pasand hoti hai. Jab aap Call Girl in [CITY] se respectfully baat karte hain, proper payment clear karte hain aur gentleman bante hain, toh wo aapke liye dil se khul jaati hain aur aapko apna best affectionate side dikhati hain.",
    
    "Romantic fantasies har kisi ke dil me hoti hain, bas ek samajhne wale partner ki kami hoti hai. Jahan regular dating me log judge karte hain, wahi best Call Girls [CITY] aapko fully comfort zone deti hain. Unke saamne aap bina kisi sharm ke apni pasand share kar sakte hain, aur wo badi khushi se aapki shaam ko dream come true bana deti hain.",
    
    "Bottom line yehi hai: Zindagi bohot choti hai bore hone ya lonely raatein bitane ke liye. Ek haseen muskuraahat, narm ehsaas aur thrilling company bas ek click ki doori par hai with top-tier Escort Service [CITY]. Directory open kijiye, jis profile ne aapka dil chhoo liya use select kijiye, aur banaiye apni aaj ki raat ko bepanah sexy aur romantic."
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
    url: `https://kokasite.com/call-girls/${loc.stateSlug}/${loc.citySlug}`
}));

function getCanonicalLocationUrl(keywordOrSlug: string): string {
    const clean = keywordOrSlug.toLowerCase().trim().replace(/\s+/g, '-');
    const cityData = getCityFromSlug(clean);
    if (cityData) {
        return `https://kokasite.com/call-girls/${cityData.state.slug}/${cityData.city.slug}`;
    }
    const stateData = getStateFromSlug(clean);
    if (stateData) {
        return `https://kokasite.com/call-girls/${stateData.slug}`;
    }
    return `https://kokasite.com/service-areas`;
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
        ? `https://kokasite.com/call-girls/${cityData.state.slug}/${citySlug}`
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
        contentString += `\n\nAgar aap kisi doosre shahar me travel kar rahe hain aur aisi hi gorgeous companions dhund rahe hain, toh hamari verified independent directories zaroor check karein: ${linkList}.`;
    }

    const titleTemplates = [
        `${cleanCity} Nightlife & Romance: Why Late Nights Are Magical with ${modelName}`,
        `The Insider's Romantic Guide to Elite Escorts in ${cleanCity}`,
        `An Unforgettable Evening with ${modelName}: The Ultimate ${cleanCity} Escort Guide`,
        `How to Find a Sexy, Sweet & Reliable Companion in ${cleanCity} Tonight`,
        `${cleanCity} Companion Diaries: Romantic Chemistry & Uncensored Moments with ${modelName}`,
        `Luxury, Romance & Passion: Elite Escorts in ${cleanCity}`,
        `Late Night Desires & Sweet Fantasies with a ${cleanCity} Escort like ${modelName}`
    ];

    const title = titleTemplates[seed % titleTemplates.length];
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    return {
        id: `blog_${seed}`,
        slug,
        title,
        excerpt: `${cleanCity} ki romantic nights aur sexy companion vibes! Jaaniye kaise aap ${modelName} jaisi gorgeous aur passionate beauties ke sath private dates, sweet intimacy aur unforgettable moments enjoy kar sakte hain.`,
        content: contentString,
        image,
        author: "Koka Romance Editor",
        date: new Date(Date.now() - seed * 3600000).toISOString().split('T')[0],
        category: "Sensual Spotlights",
        tags: [cleanCity, "Romantic", "Call Girl", "Escort", modelName],
        featuredCitySlug: citySlug
    };
}
