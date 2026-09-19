export function hashCode(str: string): number {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
}

// ── PROFILE DESCRIPTIONS ────────────────────────────────────────────────────
// 20 diverse chunks ~80-100 words each. We pick 14-16 shuffled by seed for ~1300 unique words per profile.

const profileChunks = [
    "Hi there. I'm not just another face you scroll past. I actually love what I do. Hanging out, getting to know you, having a couple of drinks, and then letting things happen naturally. That's my style. If you want someone who feels like a real date—with the crazy chemistry to match when we finally get behind closed doors—I'm your girl.",
    "Let me be completely honest. I love sex. It's not just a job for me; it's a huge part of who I am. I love the anticipation, the heavy breathing, the feeling of skin on skin. I don't rush. I want you to relax, take a deep breath, and let me literally take care of every single thought in your head until all you can focus on is pleasure.",
    "You know that feeling when you finally get off work and just want the world to leave you alone? I can be your escape. No drama, no weird questions, just a super relaxed vibe. We can chill, watch something, or head straight to the bedroom. I'm open-minded, submissive when I need to be, and always down to try something fun.",
    "Discretion is huge for me. If you’re married, high-profile, or just a very private person, you literally have zero to worry about. What happens in our room stays strictly between us. Beyond that, I guarantee you’ll forget all about the real world once I get my hands on you.",
    "I'm a big believer in chemistry. It makes everything better—especially the sex. That’s why I don’t treat my clients a number. I actually want to connect with you. If we vibe on a personal level, the intimacy goes from 'good' to 'unforgettable'. Bring your fantasies. Let's make them happen.",
    "Look, finding a genuine girl who actually looks like her photos and has a good personality is tough. I know how it is out there. I promise you, I'm exactly what you see. No bait and switch. Just a classy, well-dressed companion who knows how to behave at a nice restaurant, and how to entirely lose her manners once we're in private.",
    "GFE. Everyone says they offer it, but few actually know what it means. I’m naturally affectionate. I like cuddling, holding hands, deep kissing, and making you feel wanted. It's not an act. When we’re together, you’re my boyfriend for the night. Plain and simple.",
    "If you’ve got a crazy fantasy you’ve been too embarrassed to talk about, tell me. Seriously, nothing shocks me. Light bondage, roleplay, threesomes, weird specific kinks—I’m super adventurous. I like pushing my own boundaries just as much as you like pushing yours. Let’s experiment safely.",
    "I love smart men. Having a proper conversation before we get intimate really does it for me. I can dress up, meet you for dinner, talk about business or just life, and let the tension build naturally. By the time we get back to your hotel, the sexual energy is off the charts.",
    "A hot shower with someone else is wildly underrated. I love starting our dates by washing you, taking our time, playing with the water, and letting things escalate. It’s deeply relaxing but also insanely hot. We’ll smell great, feel amazing, and the bed will be waiting for us.",
    "I'm highly visual. I have an entire collection of killer lingerie, heels, and stockings just waiting to be shown off. Teasing you is half the fun. Watching you watch me while I undress... it's a massive turn-on. I’m confident in my body and I know exactly how to use it to drive you crazy.",
    "Nothing feels better than seeing a guy completely lose his mind over what I’m doing to him. I love giving. My oral skills are famous among my regulars for a reason. I take my time, use a lot of eye contact, and I don't stop until you literally can't take it anymore.",
    "Stressed guys are my specialty. Seriously, let me take the wheel. Lay back, close your eyes, and let me unknot your muscles with a full-body massage. Once you're melting into the bed, I’ll slowly transition into something much more intimate. It’s the ultimate reset button after a hard week.",
    "I work independently because I hate agency rules. I want to build real relationships with my regulars. You get to talk straight to me, ask me anything, and know exactly what to expect. No middle man, no rushed timing. Just you and me, doing whatever we agree on.",
    "I'm a kissing fanatic. There, I said it. To me, kissing is the best way to figure out if we’re going to be a good fit in bed. I love long, passionate make-out sessions that make your heart race before clothes even start coming off.",
    "If you're reading this, you’re probably tired of the usual quick, robotic sessions. Let's change the pace. I’m into slow, tantric-style intimacy. We don't have to rush to the finish line. Let's build it up slowly, edge a little, and make the final release an absolute explosion.",
    "I'm pretty athletic, which means I can handle pretty much any position you throw at me. Forget missionary all night. Let's get creative. I love guys who take charge and aren't afraid to handle me. I’ve got the stamina to go a few rounds if you do.",
    "Let’s just have fun. Sex shouldn't be so serious all the time. If things get awkward or clumsy, we’ll laugh about it. That playful, relaxed energy is what makes guys keep coming back. I want you to feel completely comfortable being yourself around me.",
    "My ultimate goal? I want to ruin you for other women. I want to be the one you think about when you're supposed to be paying attention in a boring meeting. I bring everything to the table: looks, brains, and an insane sex drive. Once you try me, you'll be hooked.",
    "I’m young, sweet-looking, but incredibly eager to please. Don't let the innocent face fool you. Behind closed doors, I am completely uninhibited. I love guys who know what they want and aren't afraid to ask for it. Let's create an unforgettable night."
];

const cityFlavors = [
    (city: string) => `This city is wild, but it can be really lonely if you don't know the right people. That's where I come in. I'm an independent girl based right here in ${city}, and I specialize in making sure you never have a boring night again.`,
    (city: string) => `${city} has a lot to offer, but honestly, the best part of this city is what happens behind closed doors. Whether you're a local or just passing through for work, I can show you the kind of hospitality that hotels don't usually advertise.`,
    (city: string) => `I love ${city}. The energy here is insane, but sometimes you just need to unplug from everything. Think of my place (or your hotel room) as your personal VIP sanctuary away from the noise.`,
    (city: string) => `Finding real, verified companionship in ${city} isn't always easy, I know. I've heard the horror stories. I'm here to change your mind. I'm 100% genuine, punctual, and highly discreet.`,
    (city: string) => `I know the best spots in ${city}. If you want to grab drinks at a high-end bar first before we disappear into the night, I'm game. I fit right into the upscale crowd, and I'm even better once the dress comes off.`
];

export function generateUltraLongProfileDesc(name: string, city: string, age: number, baseDesc: string): string {
    const seed = hashCode(name + city);
    const cleanCity = city.split(" –")[0].split(" -")[0].trim();
    
    const cityIntroFn = cityFlavors[seed % cityFlavors.length];
    const cityIntro = cityIntroFn(cleanCity);
    
    let indices = Array.from({length: profileChunks.length}, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = (seed + i) % (i + 1);
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const chunk1 = profileChunks[indices[0]];
    const chunk2 = profileChunks[indices[1]];

    return [
        `Hey there. I'm ${name}, a ${age}-year-old independent girl based in ${cleanCity}.`,
        cityIntro,
        chunk1,
        chunk2,
        baseDesc
    ].filter(Boolean).join("\n\n");
}

const seoTemplates = [
    (city: string, state: string) => `Finding trusted companions in ${city} should be straightforward and discreet. Our directory connects you directly with verified independent companions and escort services across ${city} without agency delays or hidden costs. Profiles feature genuine unedited photos and verified contact numbers for easy booking.`,
    
    (city: string, state: string) => `Whether you prefer youthful college companions, charming models, or sophisticated mature escorts in ${city}, our curated listings offer diverse options to match your personal preferences. Each profile is vetted for safety, hygiene, and genuine hospitality.`,

    (city: string) => `Client privacy is treated with the highest priority. Independent call girls in ${city} operate with complete discretion, ensuring seamless in-call sessions at private apartments or confidential hotel outcalls at prime venues across ${city}.`,

    (city: string) => `Every companion listed here takes pride in offering an attentive, engaging, and memorable experience. You can expect relaxed conversation, genuine warmth, and a stress-free environment from confirmed escort service providers in ${city}.`,

    (city: string) => `Arranging a meeting is simple and transparent. Contact your preferred companion directly via WhatsApp or phone call to verify availability, discuss rates, and agree on hotel outcall or private incall timings anywhere in ${city}.`,

    (city: string) => `From corporate executives visiting on business to discerning locals seeking an evening date, verified companions in ${city} provide polished companionship for dinners, private events, or quiet relaxation.`,

    (city: string) => `Browse our latest photo galleries, compare service options, and get in touch directly. Settle payment comfortably in cash upon arrival, with zero advance transfer or online deposit required for verified ${city} escorts.`,

    (city: string) => `Independent companions manage their own schedules, ensuring focused and unhurried appointments. Enjoy personalized attention from dedicated independent call girls across ${city}.`,

    (city: string) => `Whether you desire a charming dinner companion for an evening out or a relaxing private date, premium companions in ${city} deliver authentic charm, elegance, and complete confidentiality.`,

    (city: string) => `We encourage polite and respectful communication with all advertisers. Mutual respect and clear expectations ensure an unforgettable, world-class escort experience throughout ${city}.`
];

const citySpecificParagraphs: Record<string, string[]> = {
    mumbai: [
        "Mumbai's vibrant social scene offers exceptional nightlife and entertainment. Whether you are staying in Bandra, BKC, or South Mumbai, verified call girls in Mumbai provide discreet outcall services to leading luxury hotels.",
        "Companions here cater to corporate executives and international travelers, delivering sophisticated conversation and genuine hospitality for relaxed evenings."
    ],
    delhi: [
        "Delhi NCR features an extensive directory of independent companions covering Central Delhi, South Extension, Gurgaon DLF corridors, and Noida. Verified call girls in Delhi offer prompt in-call and hotel outcall bookings.",
        "High standards of confidentiality ensure peace of mind for business travelers and private visitors seeking discreet escort services in Delhi."
    ],
    bengaluru: [
        "In India's Silicon Valley, professionals appreciate relaxing companion services after demanding workweeks. Independent call girls in Bengaluru provide intelligent, charming, and unhurried companionship across Koramangala, Indiranagar, and Whitefield.",
        "Enjoy authentic dates with verified escorts in Bengaluru with zero advance deposits and complete privacy."
    ],
    jaipur: [
        "Jaipur combines historic heritage with luxury hospitality. Verified companions in Jaipur are available for visits to boutique resorts and five-star hotels across Malviya Nagar, C-Scheme, and Tonk Road.",
        "Experience warm, respectful hospitality tailored to solo travelers and discerning vacationers in Jaipur."
    ],
    goa: [
        "Goa is India's premier holiday destination. Discerning travelers can connect with verified independent escorts in Goa for beachside villa companionship and hotel visits across Calangute, Baga, and Panaji.",
        "Arrangements are handled with complete discretion, offering relaxed company during your coastal getaway."
    ]
};

export function generateUltraLongCitySeo(cityName: string, stateName: string, isIndia: boolean = true): string {
    const seed = hashCode(cityName + stateName);
    const citySlug = cityName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    let result = `Luxurious & Verified Companion Services in ${cityName}\n\n`;
    result += `Welcome to our premier directory for call girls and escort services in ${cityName}. Whether you are traveling for business, exploring ${cityName} as a visitor, or seeking private relaxation, our verified independent companions offer personalized experiences tailored to your schedule. Sessions range from relaxed dinner dates to private hotel outcalls with complete discretion.\n\n`;

    const categoryDetailsEnglish = [
        `College Companions in ${cityName} (18+ Only)\nCollege companions in ${cityName} are popular among clients who appreciate youthful energy, open conversations, and a contemporary outlook. All profiles are strictly verified 18+ consenting adults who are articulate, stylish, and socially confident. They fit comfortably into casual settings like lounge cafés or private hotel suites, offering friendly, unhurried companionship.`,
        
        `Housewife & Mature Companions in ${cityName}\nMature companions in ${cityName} are admired for their warmth, emotional balance, and calm demeanor. They provide a comfortable, welcoming environment for clients who value sincere connection and stress-free relaxation. Discretion and mutual respect are maintained throughout every meeting.`,
        
        `Model & VIP Escorts in ${cityName}\nVIP model escorts in ${cityName} offer high-level glamour, elegance, and sophisticated social presence. Ideal for executive travelers, upscale events, and luxury five-star hotel stays, these companions possess refined etiquette and impeccable personal presentation.`,
        
        `International & Global Companions in ${cityName}\nInternational companions in ${cityName} offer cosmopolitan charm and global perspectives. Well-traveled and fluent in English, they provide engaging conversation and refined company for private suite appointments and holiday getaways.`,
        
        `Independent Escorts in ${cityName}\nIndependent call girls in ${cityName} manage their own bookings directly, ensuring transparent communication and flexible scheduling. By avoiding agency intermediaries, clients enjoy direct coordination, clear terms, and attentive one-on-one sessions.`
    ];

    result += categoryDetailsEnglish.join("\n\n") + "\n\n";

    // Clean English Booking Guidelines (No Hindi, no raw markdown headers, strictly 2-3 relevant keywords)
    const bookingGuidelines = `Booking Guidelines & Client Safety in ${cityName}\n\n` +
    `Our directory emphasizes complete client security, genuine profiles, and safe practices across all areas in ${cityName}.\n\n` +
    `Key Highlights:\n` +
    `- Zero Advance Deposit: Never transfer online payments beforehand. Settle all fees directly in cash upon meeting your companion.\n` +
    `- Prompt Doorstep Delivery: Outcall companions typically arrive within 30 to 45 minutes at major hotels and private addresses in ${cityName}.\n` +
    `- 100% Verified Profiles: All listings feature verified real photos and direct WhatsApp contact details.\n` +
    `- Strict Confidentiality: Your personal identity and booking details remain private and confidential at all times.\n\n` +
    `How to Book:\n` +
    `1. Browse through verified profiles available in ${cityName}.\n` +
    `2. Choose 2 to 3 companions that match your schedule and preferences.\n` +
    `3. Connect directly via WhatsApp or telephone call to confirm availability.\n` +
    `4. Provide your hotel address or private location.\n` +
    `5. Meet in person and complete cash payment upon arrival.`;

    result += bookingGuidelines + "\n\n";

    const specificParas = citySpecificParagraphs[citySlug];
    if (specificParas) {
        result += specificParas.join("\n\n") + "\n\n";
    }

    let indices = Array.from({length: seoTemplates.length}, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = (seed + i) % (i + 1);
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const selectedIndices = indices.slice(0, 4);
    
    result += selectedIndices.map(idx => {
        const template = seoTemplates[idx];
        if (template.length === 2) {
            return (template as (city: string, state: string) => string)(cityName, stateName || cityName);
        }
        return (template as (city: string) => string)(cityName);
    }).join("\n\n");

    const closings = [
        `\n\nEnjoy quality companionship during your time in ${cityName}. Connect directly with verified call girls in ${cityName} on WhatsApp today and enjoy straightforward cash payment upon meeting.`,
        `\n\nWhether you live in ${cityName} or are visiting for a few days, discover dependable escort services in ${cityName} backed by real photos and complete privacy.`
    ];
    result += closings[seed % closings.length];

    return result;
}

// ── SHORT EXOTIC SNIPPETS ──────────────────────────────────────────────────
// Returns 2-3 lines of clean, high-conversion content for listing cards.
const exoticTemplates = [
    (name: string, city: string) => ({
        title: `Verified Independent Companion in ${city} – Available 24/7`,
        desc: `Genuine photos and verified profile. Available for private hotel outcalls and discreet companion sessions across ${city}.`
    }),
    (name: string, city: string) => ({
        title: `Premium Escort & Companion Services in ${city}`,
        desc: `Connect directly with independent companions across prime localities in ${city} with 100% discretion and cash on delivery.`
    }),
    (name: string, city: string) => ({
        title: `Meet ${name} – Top-Rated Independent Model in ${city}`,
        desc: `Verified photos and attentive service. Available for high-class hotel visits and relaxed private appointments in ${city}.`
    }),
    (name: string, city: string) => ({
        title: `Elegant & Discreet Companionship in ${city}`,
        desc: `I am ${name}, offering a refined experience with zero hassle and guaranteed satisfaction in ${city}.`
    }),
    (name: string, city: string) => ({
        title: `Discreet Companion Just One Call Away in ${city}`,
        desc: `Safe, attentive, and welcoming service. Connect directly with ${name} for unhurried private sessions in ${city}.`
    }),
    (name: string, city: string) => ({
        title: `VIP Companion in ${city} – Educated & Charming`,
        desc: `Looking for authentic companionship with transparent cash payment? Connect with ${name} in ${city} today.`
    }),
    (name: string, city: string) => ({
        title: `Top Rated Independent Companion in ${city} – ${name}`,
        desc: `A warm, elegant companion dedicated to making your evening relaxed and memorable in ${city}.`
    }),
];

export function generateShortExoticSnippet(name: string, city: string): { title: string, desc: string } {
    const seed = hashCode(name + city);
    const template = exoticTemplates[seed % exoticTemplates.length];
    return template(name, city);
}

