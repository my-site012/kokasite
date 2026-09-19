import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { citySEOData, stateSEOData } from "@/data/seoContent";
import { getCityListings, getStateListings } from "@/data/indianCityListings";
import { getCityFromSlug, getStateFromSlug, isIndiaLocation } from "@/data/worldCities";
import type { Listing } from "@/data/listings";
import { SITE_URL } from "@/utils/config";
import {
    ChevronRight, Filter, Search, Flame, ArrowRight
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { generateUltraLongCitySeo } from "@/utils/textGenerator";

// ── City tier label map ──────────────────────────────────────────────────────
const cityTierMap: Record<string, { label: string; emoji: string; description: string }> = {
    mumbai: { label: "Tier-1 Metro", emoji: "🏙️", description: "India's financial capital. Highest demand, premium escorts." },
    "delhi-ncr": { label: "Tier-1 Metro", emoji: "🏛️", description: "Capital region covering Delhi, Gurgaon and Noida." },
    delhi: { label: "Tier-1 Metro", emoji: "🏛️", description: "India's capital with everything from luxury companionship to elite meets." },
    bengaluru: { label: "Tier-1 Metro", emoji: "💻", description: "India's Silicon Valley. Tech-savvy, educated companions and premium models." },
    kolkata: { label: "Tier-1 Metro", emoji: "🎭", description: "Cultural capital with a long-established adult scene." },
    hyderabad: { label: "Tier-1 Metro", emoji: "🌶️", description: "Tech hub and culture with elite escorts." },
    chennai: { label: "Tier-1 Metro", emoji: "🌊", description: "South India's IT corridor, corporate travelers welcome." },
    pune: { label: "Tier-2 Growing", emoji: "📈", description: "Youth-driven city. Growing nightlife and IT demand." },
    goa: { label: "Tourist Hot Spot", emoji: "🏖️", description: "India's party capital. International and domestic companions." },
    panaji: { label: "Tourist Hot Spot", emoji: "🏖️", description: "Goa's capital. Beach resorts and luxury companionship." },
    calangute: { label: "Tourist Hot Spot", emoji: "🌴", description: "North Goa's busiest beach belt." },
    ahmedabad: { label: "Tier-2 Growing", emoji: "🏗️", description: "Business hub, discreet market." },
    jaipur: { label: "Tourist / Tier-2", emoji: "🏰", description: "Pink City luxury. Heritage hotel companions and premium escorts." },
    chandigarh: { label: "Tier-2 Growing", emoji: "🌳", description: "Punjab's affluent social culture drives premium demand." },
    nagpur: { label: "Tier-2 Growing", emoji: "🍊", description: "Central India hub, fast growing." },
    manali: { label: "Tourist Destination", emoji: "🏔️", description: "Mountain resort town. Adventure and companionship." },
    shimla: { label: "Tourist Destination", emoji: "❄️", description: "Heritage hill station. Weekend getaway companions." },
    udaipur: { label: "Luxury / Romantic", emoji: "🛶", description: "Lake city. Palace hotel meets and romantic overnights." },
    lucknow: { label: "Tier-2 Growing", emoji: "🕌", description: "City of Nawabs. Refined companionship with a cultural twist." },
    varanasi: { label: "Tourist Destination", emoji: "🕯️", description: "Spiritual city with a vibrant underground scene." },
    agra: { label: "Tourist Destination", emoji: "🏯", description: "City of the Taj Mahal. Luxury hotel companions." },
    bhopal: { label: "Tier-2 Growing", emoji: "🏞️", description: "City of Lakes. Fast growing escort market in MP." },
    indore: { label: "Tier-2 Growing", emoji: "🏙️", description: "MP's commercial capital with premium escorts." },
    kochi: { label: "Tier-2 Growing", emoji: "🌴", description: "Kerala's commercial hub with verified companions." },
    noida: { label: "NCR Suburb", emoji: "🏢", description: "Delhi's IT satellite city. Corporate escort market." },
    gurgaon: { label: "NCR Premium", emoji: "💼", description: "DLF towers and luxury escorts. Premium clientele." },
    dehradun: { label: "Tourist Destination", emoji: "🌲", description: "Uttarakhand's capital. Gateway to Himalayas." },
};

const citySeoTitles = [
    "Verified Call Girls in {City} | Independent Escort Directory",
    "{City} Call Girls | Verified Companions & VIP Escorts",
    "Independent Escorts in {City} - Call Girls Directory - Koka Site",
    "Book Call Girls in {City} | 100% Cash on Delivery & 24/7 Service",
    "VIP Escorts & Call Girls in {City} | Direct WhatsApp Booking"
];

const citySeoDescriptions = [
    "Looking for verified call girls in {City}? Koka Site features genuine independent escorts and companion services with instant WhatsApp booking and zero advance.",
    "Book premium call girls and VIP escorts in {City}. Browse verified profiles with real photos, transparent rates, and convenient cash on delivery.",
    "Discover verified independent call girls and escort services across {City}. Enjoy discreet meetings, prompt hotel outcalls, and 24/7 availability.",
    "Connect directly with independent companions in {City}. Vetted profiles, genuine unedited photos, and hand-to-hand cash payment upon meeting."
];

const massageSeoTitles = [
    "Best Body Massage in {City} | Verified Massage Services",
    "{City} Massage | Professional Massage Parlors in {City}",
    "{City} Body to Body Massage | B2B Massage {City} - Koka Site",
    "Independent Massage Therapists in {City} - Nuru Massage",
    "Book Premium Body Massage in {City} 24/7 Cash Payment",
    "{City} Spa and Massage Services | Relaxation Therapy",
    "Full Body Massage in {City} | Book Your Relaxation Session"
];

const massageSeoDescriptions = [
    "Looking for the best body massage services in {City}? Koka Site lists verified massage therapists, Nuru massage, and body to body (B2B) massage sessions.",
    "Book premium full body massage in {City}. Enjoy professional, relaxing therapies from independent therapists at the best prices with zero advance payment.",
    "Relax and refresh with Nuru and body to body massage services in {City}. Connect directly with certified therapists nearby on Koka Site."
];

const getIndexFromSeed = (seedStr: string, max: number) => {
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
        hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % max;
};

interface CitySEOPageProps {
    categoryType?: 'call-girl' | 'massage';
}

const CitySEOPage: React.FC<CitySEOPageProps> = ({ categoryType = 'call-girl' }) => {
    const { stateSlug, slug } = useParams<{ stateSlug?: string; slug?: string }>();
    
    const [filter, setFilter] = useState<"all" | "diamond" | "gold" | "silver">("all");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const isSpecialIndiaPath = stateSlug === "india";
    const isIndia = useMemo(() => isIndiaLocation(stateSlug, slug), [stateSlug, slug]);
    
    // Redirect single-level city URLs (e.g. /call-girls/mumbai) to state/city path
    // OR redirect mismatched state/city URLs (e.g. /call-girls/andhra-pradesh/jaipur) to correct state/city path
    const cityRedirect = useMemo(() => {
        const prefix = categoryType === 'call-girl' ? 'call-girls' : 'massage';
        if (stateSlug && !slug && !isSpecialIndiaPath) {
            const cityData = getCityFromSlug(stateSlug);
            if (cityData) {
                return `/${prefix}/${cityData.state.slug}/${cityData.city.slug}`;
            }
        } else if (stateSlug && slug) {
            const cityData = getCityFromSlug(slug);
            if (cityData && cityData.state.slug !== stateSlug) {
                return `/${prefix}/${cityData.state.slug}/${cityData.city.slug}`;
            }
        }
        return null;
    }, [stateSlug, slug, isSpecialIndiaPath, categoryType]);

    // Reset page if filter/search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [filter, search]);

    if (isSpecialIndiaPath && slug) {
        return <Navigate to={`/call-girls/${slug}`} replace />;
    }
    if (isSpecialIndiaPath && !slug) {
        return <Navigate to="/" replace />;
    }
    if (cityRedirect) {
        return <Navigate to={cityRedirect} replace />;
    }

    const itemsPerPage = 20;
    const isState = !slug;
    const citySlug = slug ?? "";
    const pageData = citySEOData[citySlug];
    
    let allListings: Listing[] = [];
    let dynamicCityName = "";
    let dynamicStateName = "";
    let currencySymbol = "₹";

    if (isState) {
        const stateInfo = getStateFromSlug(stateSlug || "");
        if (!stateInfo) {
            return <Navigate to="/" replace />;
        }
        dynamicCityName = stateInfo.name;
        dynamicStateName = "";
        allListings = getStateListings(stateSlug || "");
    } else {
        const cityInfo = getCityFromSlug(citySlug);
        if (!cityInfo) {
            return <Navigate to="/" replace />;
        }
        dynamicCityName = cityInfo.city.name;
        dynamicStateName = cityInfo.state.name;
        allListings = getCityListings(citySlug) as Listing[];
        currencySymbol = "₹";
    }

    const cityMeta = isState ? null : cityTierMap[citySlug];

    const filtered = allListings.filter(l => {
        if (filter !== "all" && l.tier !== filter) return false;
        if (search && !l.name.toLowerCase().includes(search.toLowerCase()) && !l.city.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });

    // Pagination
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

    const totalCount = allListings.length;
    const cityName = dynamicCityName;
    const stateData = isState ? stateSEOData[stateSlug || ""] : null;

    // Generate dynamic SEO Title and Meta description
    const titleIndex = getIndexFromSeed(citySlug || stateSlug || "default", citySeoTitles.length);
    const descIndex = getIndexFromSeed((citySlug || stateSlug || "default") + "desc", citySeoDescriptions.length);
    
    let generatedTitle = "";
    let generatedDesc = "";

    if (categoryType === 'massage') {
        const mTitleIndex = getIndexFromSeed(citySlug || stateSlug || "default", massageSeoTitles.length);
        const mDescIndex = getIndexFromSeed((citySlug || stateSlug || "default") + "desc", massageSeoDescriptions.length);
        generatedTitle = massageSeoTitles[mTitleIndex].replace(/{City}/g, dynamicCityName);
        generatedDesc = massageSeoDescriptions[mDescIndex].replace(/{City}/g, dynamicCityName);
    } else {
        generatedTitle = citySeoTitles[titleIndex].replace(/{City}/g, dynamicCityName);
        generatedDesc = citySeoDescriptions[descIndex].replace(/{City}/g, dynamicCityName);
    }

    const effectivePageData = isState 
    ? (stateData ? {
        title: stateData.title,
        metaDesc: stateData.metaDesc,
        h1: stateData.h1,
        intro: stateData.intro,
    } : {
        title: categoryType === 'massage' 
            ? `Verified ${dynamicCityName} Massage Services & Spa | Koka Site` 
            : `Verified ${dynamicCityName} Escorts and Call Girls | Koka Site`,
        metaDesc: categoryType === 'massage'
            ? `Discover verified body massage services and wellness spas in ${dynamicCityName} on Koka Site.`
            : `Discover verified call girls and premium ${dynamicCityName} escorts. Find the best independent providers on Koka Site.`,
        h1: categoryType === 'massage' ? `${dynamicCityName} Massage Services` : `${dynamicCityName} Escorts & Call Girls`,
        intro: categoryType === 'massage'
            ? `Explore our comprehensive directory of verified massage services and wellness centers in ${dynamicCityName}. Find affordable and premium massage on Koka Site.`
            : `Explore our comprehensive directory of verified call girls and high-end escorts in ${dynamicCityName}. Find affordable and premium companions on Koka Site.`,
    })
    : {
        title: generatedTitle.replace(/&/g, "and"),
        metaDesc: generatedDesc.replace(/&/g, "and"),
        h1: generatedTitle.replace(/&/g, "and"),
        content: pageData ? pageData.content : undefined,
        intro: categoryType === 'massage'
            ? `Welcome to Koka Site's ${dynamicCityName} massage directory — your destination for verified body massage and therapy. Browse our curated listings.`
            : `Welcome to Koka Site's ${dynamicCityName} call girl directory — your destination for premium, verified companions. Browse our curated listings.`,
    };

    const prefixPath = categoryType === 'call-girl' ? 'call-girls' : 'massage';
    const currentUrl = isState 
        ? `${SITE_URL}${prefixPath}/${stateSlug}`
        : `${SITE_URL}${prefixPath}/${stateSlug || 'india'}/${citySlug}`;

    // Get cities for the state if it's a state page
    const stateObj = isState ? getStateFromSlug(stateSlug || "") : null;
    const citiesInState = stateObj?.cities || [];

    const seoSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${currentUrl}#webpage`,
                "url": currentUrl,
                "name": effectivePageData.title,
                "description": effectivePageData.metaDesc,
                "isPartOf": {
                    "@type": "WebSite",
                    "@id": `${SITE_URL}#website`,
                    "name": "Koka Site",
                    "url": SITE_URL
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${currentUrl}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": SITE_URL
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Search",
                        "item": `${SITE_URL}search`
                    },
                    ...(dynamicStateName ? [{
                        "@type": "ListItem",
                        "position": 3,
                        "name": dynamicStateName,
                        "item": `${SITE_URL}${prefixPath}/${stateSlug}`
                    }] : []),
                    {
                        "@type": "ListItem",
                        "position": dynamicStateName ? 4 : 3,
                        "name": cityName,
                        "item": currentUrl
                    }
                ]
            },
            {
                "@type": "Service",
                "@id": `${currentUrl}#service`,
                "name": `${cityName} ${categoryType === 'massage' ? 'Massage' : 'Escort'} Service`,
                "provider": {
                    "@type": "Organization",
                    "name": "Koka Site",
                    "url": SITE_URL
                },
                "areaServed": {
                    "@type": "City",
                    "name": cityName
                },
                "serviceType": categoryType === 'massage' ? "Body Massage Directory" : "Escort Classifieds Directory"
            },
            {
                "@type": "FAQPage",
                "@id": `${currentUrl}#faq`,
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": categoryType === 'massage' ? `How to book body massage in ${cityName}?` : `How to book call girls in ${cityName}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": categoryType === 'massage'
                                ? `To book a body massage service in ${cityName}, browse the verified listings on Koka Site, select a therapist, and click the Call or WhatsApp button to connect directly.`
                                : `To book verified call girls in ${cityName}, browse the listings on Koka Site, select a profile, and click the Call or WhatsApp button to connect directly.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": categoryType === 'massage' ? `What are the rates of body massage in ${cityName}?` : `What are the rates of escort services in ${cityName}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": categoryType === 'massage'
                                ? `Massage rates in ${cityName} start from ${currencySymbol}1,500 to ${currencySymbol}3,000 per hour depending on Nuru, Swedish, or B2B session types.`
                                : `Escort rates in ${cityName} start from ${currencySymbol}2,999 per hour depending on Diamond, Gold, or Silver collections.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `Is advance payment required before meeting in ${cityName}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `No advance payment is required. We strictly enforce 100% cash payment hand-to-hand upon meeting your selected companion in ${cityName}.`
                        }
                    }
                ]
            }
        ]
    };

    const servicesList = categoryType === 'massage' 
        ? [
            "B2B (Body to Body) Massage",
            "Nuru Gel Massage",
            "Swedish Relaxation Therapy",
            "Deep Tissue Deep Muscle Relief",
            "Traditional Thai Stretching Massage",
            "Aromatherapy Essential Oil Massage",
            "Lomi Lomi Hawaiian Massage",
            "Sensual Oil Massage",
            "Four Hands Double Therapy",
            "Balinese Traditional Ritual",
            "Jacuzzi Spa & Bath Relaxer",
            "Foot Reflexology Pressure Therapy"
          ]
        : [
            "VIP Companionship",
            "Dinner & Event Dates",
            "Hotel Outcall Service",
            "Private Incall Sessions",
            "Overnight Companionship",
            "Romantic Evening Dates",
            "Social & Travel Companion",
            "Sensual Relaxation",
            "Weekend Getaways",
            "Discreet & Confidential"
          ];

    const popularTags = categoryType === 'massage'
        ? [
            `Body Massage in ${cityName}`,
            `B2B Massage ${cityName}`,
            `Nuru Massage in ${cityName}`,
            `Spa & Wellness ${cityName}`,
            `Massage Therapists ${cityName}`
          ]
        : [
            `Call Girls in ${cityName}`,
            `Independent Escorts ${cityName}`,
            `VIP Companions ${cityName}`,
            `College Call Girls ${cityName}`,
            `Housewife Escorts ${cityName}`,
            `Doorstep Delivery ${cityName}`
          ];

    return (
        <div className="min-h-screen bg-[#121214] text-gray-200">
            <SEO title={effectivePageData.title} description={effectivePageData.metaDesc} canonical={currentUrl} schema={seoSchema} />
            <Header />
            
            <div className="min-h-screen pt-28">
                {/* ── City Hero Banner ── */}
                <div className="relative pb-16 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,184,39,0.06),transparent_60%)] pointer-events-none" />

                    <div className="relative max-w-[1400px] mx-auto px-4 lg:px-12">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#f4b827] mb-8">
                            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
                            <ChevronRight className="w-3 h-3 text-zinc-700" />
                            <Link to="/search" className="hover:text-amber-400 transition-colors">Search</Link>
                            {dynamicStateName && (
                                <>
                                    <ChevronRight className="w-3 h-3 text-zinc-700" />
                                    <Link to={`/${prefixPath}/${stateSlug}`} className="hover:text-amber-400 transition-colors">{dynamicStateName}</Link>
                                </>
                            )}
                            <ChevronRight className="w-3 h-3 text-zinc-700" />
                            <span className="text-white font-extrabold">{cityName}</span>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                            <div>
                                {cityMeta && (
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#f4b827] text-[11px] font-bold uppercase tracking-widest mb-4">
                                        <span>{cityMeta.emoji}</span>
                                        {cityMeta.label}
                                    </div>
                                )}

                                <h1 className="text-3xl lg:text-5xl font-display font-bold text-white leading-tight mb-4 lowercase first-letter:uppercase">
                                    {effectivePageData.h1}
                                </h1>

                                {cityMeta && (
                                    <p className="text-gray-400 text-sm max-w-xl leading-relaxed">{cityMeta.description}</p>
                                )}
                            </div>

                            {/* Stats */}
                            <div className="flex items-center gap-6 flex-shrink-0">
                                <div className="text-center">
                                    <div className="text-2xl font-display font-bold text-white">{totalCount * 47}+</div>
                                    <div className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Active Listings</div>
                                </div>
                                <div className="w-[1px] h-10 bg-zinc-800" />
                                <div className="text-center">
                                    <div className="text-2xl font-display font-bold text-[#f4b827]">{Math.round(totalCount * 0.85 * 47)}+</div>
                                    <div className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Verified</div>
                                </div>
                                <div className="w-[1px] h-10 bg-zinc-800" />
                                <div className="text-center">
                                    <div className="text-2xl font-display font-bold text-amber-500">{Math.round(totalCount * 0.3 * 47)}+</div>
                                    <div className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Online Now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Filter bar ── */}
                <div className="sticky top-[60px] z-50 bg-zinc-950/95 backdrop-blur-xl border-y border-zinc-900 shadow-sm">
                    <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-3 flex flex-col sm:flex-row items-center gap-3">
                        {/* Search */}
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-550" />
                            <input
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder={`Search in ${cityName}...`}
                                className="w-full bg-zinc-900 border border-zinc-850 rounded-xl pl-9 pr-4 py-2.5 text-[13px] text-white placeholder-zinc-500 focus:outline-none focus:border-[#f4b827] transition-colors"
                            />
                        </div>

                        {/* Tier filters */}
                        <div className="flex items-center gap-2">
                            <Filter className="w-4 h-4 text-[#f4b827]" />
                            {(["all", "diamond", "gold", "silver"] as const).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setFilter(t)}
                                    className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wide transition-all border ${filter === t
                                        ? "bg-[#f4b827] text-black border-[#f4b827] shadow-[0_0_15px_rgba(244,184,39,0.2)]"
                                        : "bg-zinc-900 text-gray-400 border-zinc-800 hover:border-zinc-700 hover:text-white"
                                        }`}
                                >
                                    {t === "all" ? "All" : t === "diamond" ? "💎 Diamond" : t === "gold" ? "⭐ Gold" : "🥈 Silver"}
                                </button>
                            ))}

                            <span className="text-zinc-500 text-[12px] ml-2 font-medium">
                                {filtered.length} listings
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── Listings Grid ── */}
                <main className="max-w-[1400px] mx-auto px-4 lg:px-12 py-10">
                    {paginated.length > 0 ? (
                        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
                            {paginated.map(listing => (
                                <ListingCard key={listing.id} listing={listing} layout="horizontal" hideLocation={!isState} />
                            ))}

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="mt-12 flex flex-wrap justify-center items-center gap-2">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-gray-300 font-bold text-sm hover:border-[#f4b827] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Previous
                                    </button>
                                    
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                                        <button
                                            key={p}
                                            onClick={() => setCurrentPage(p)}
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                                                currentPage === p 
                                                ? "bg-[#f4b827] text-black shadow-lg shadow-[#f4b827]/10" 
                                                : "bg-zinc-900 border border-zinc-800 text-gray-300 hover:border-[#f4b827]"
                                            }`}
                                        >
                                            {p}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-gray-300 font-bold text-sm hover:border-[#f4b827] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-32 border border-zinc-800 rounded-3xl bg-zinc-900/30">
                            <Flame className="w-12 h-12 text-[#f4b827] mx-auto mb-6 opacity-60" />
                            <h2 className="text-xl font-display font-bold text-white mb-2">No profiles match your filter</h2>
                            <p className="text-gray-500 mb-8">Try selecting a different tier or clearing your search.</p>
                            <button
                                onClick={() => { setFilter("all"); setSearch(""); }}
                                className="px-8 py-3 bg-[#f4b827] text-black rounded-full font-bold hover:bg-amber-400 transition-all"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}

                    {/* Post Ad CTA */}
                    <div className="mt-16 relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900/40 p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                        <div className="relative">
                            <h3 className="font-display text-xl font-bold text-white mb-1">Are you in {cityName}?</h3>
                            <p className="text-gray-400 text-sm">Post your ad in minutes. Reach thousands of verified clients.</p>
                        </div>
                        <Link
                            to="/post-ad"
                            className="flex-shrink-0 flex items-center gap-2 px-8 py-4 bg-[#f4b827] text-black rounded-full font-bold uppercase tracking-widest text-sm hover:bg-amber-400 transition-all shadow-lg active:scale-95"
                        >
                            Post Your Ad
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* State Page City Navigation */}
                    {isState && citiesInState.length > 0 && (
                        <div className="mt-16 bg-zinc-900/20 p-8 lg:p-12 rounded-[32px] border border-zinc-800 shadow-sm">
                            <h2 className="text-xl font-display font-bold text-white mb-6">
                                Major Cities in {cityName}
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {citiesInState.map(city => (
                                    <Link
                                        key={city.slug}
                                        to={stateSlug === 'india' ? `/call-girls/${city.slug}` : `/call-girls/${stateSlug}/${city.slug}`}
                                        className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-850 hover:border-[#f4b827]/40 transition-all group"
                                    >
                                        <span className="text-sm font-bold text-gray-300 group-hover:text-[#f4b827] truncate">{city.name}</span>
                                        <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-[#f4b827] group-hover:translate-x-1 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── Dynamic City SEO Content ── */}
                    <div className="mt-16 bg-zinc-900/30 p-8 lg:p-12 rounded-[32px] border border-zinc-800 text-gray-300 shadow-lg">
                        <h2 className="text-2xl font-display font-bold text-white mb-6">
                            Best {categoryType === 'massage' ? 'Body Massage' : 'Call Girls'} in {cityName} – Premium Guide
                        </h2>

                        {/* Custom content from document when available */}
                        {("content" in effectivePageData && (effectivePageData as {content:string}).content) && (() => {
                            const customParas = (effectivePageData as {content:string}).content.split("\n\n").filter(p => p.trim());
                            return customParas.map((para, idx) => (
                                <p key={`custom-${idx}`} className="mb-5 leading-relaxed text-[14px] text-gray-400"
                                   dangerouslySetInnerHTML={{ __html: para.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }} />
                            ));
                        })()}

                        {/* Custom intro for state pages */}
                        {("intro" in effectivePageData && (effectivePageData as {intro:string}).intro) && (() => {
                            const introParas = (effectivePageData as {intro:string}).intro.split("\n\n").filter(p => p.trim());
                            return introParas.map((para, idx) => (
                                <p key={`intro-${idx}`} className="mb-5 leading-relaxed text-[14px] text-gray-400"
                                   dangerouslySetInnerHTML={{ __html: para }} />
                            ));
                        })()}

                        {/* Auto-generated bulk SEO content */}
                        {(() => {
                            const raw = generateUltraLongCitySeo(cityName, dynamicStateName || "", isIndia);
                            const paragraphs = raw.split("\n\n").filter(p => p.trim());
                            const h2Headings = categoryType === 'massage'
                                ? [
                                    `Why Choose Our ${cityName} Massage Directory?`,
                                    `Premium Body Massage Services in ${cityName}`,
                                    `Safe and Discreet Massage Booking in ${cityName}`,
                                    `Types of Therapies Available in ${cityName}`,
                                    `How to Book Professional Massage in ${cityName}`,
                                  ]
                                : [
                                    `Why Choose Our ${cityName} Escort Directory?`,
                                    `Premium Call Girl Services in ${cityName}`,
                                    `Safe and Discreet Escort Booking in ${cityName}`,
                                    `Types of Companions Available in ${cityName}`,
                                    `How to Book Call Girls in ${cityName}`,
                                  ];
                            const formatParagraph = (text: string) => text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
                            let h2Index = 0;
                            return paragraphs.map((para, idx) => {
                                const elements: React.ReactNode[] = [];
                                if (idx > 0 && idx % 2 === 0 && h2Index < h2Headings.length) {
                                    elements.push(<h2 key={`h2-${idx}`} className="text-xl font-display font-bold text-white mt-10 mb-4">{h2Headings[h2Index]}</h2>);
                                    h2Index++;
                                }
                                elements.push(<p key={`p-${idx}`} className="mb-5 leading-relaxed text-[14px] text-gray-400" dangerouslySetInnerHTML={{ __html: formatParagraph(para) }} />);
                                return elements;
                            });
                        })()}

                        <h3 className="text-xl font-display font-bold text-white mt-10 mb-6 uppercase tracking-wider text-sm">Available Services</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8 text-[14px]">
                            {servicesList.map(svc => (
                                <div key={svc} className="flex items-center gap-3 border-b border-zinc-800 pb-2 border-dashed">
                                    <span className="text-[#f4b827]">★</span>
                                    <span className="font-medium text-gray-300">{svc}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-lg font-display font-bold text-white mt-10 mb-4 border-t border-zinc-800 pt-8">
                            Popular Searches for {cityName}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-10">
                            {popularTags.map(tag => (
                                <span key={tag} className="bg-zinc-900 px-3 py-1.5 rounded-md border border-zinc-800 hover:border-[#f4b827] hover:text-white transition-colors cursor-default shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-emerald-950 to-zinc-900 border border-emerald-500/20 rounded-2xl p-8 text-center mt-8 relative overflow-hidden shadow-lg">
                            <h3 className="text-[#f4b827] text-xl md:text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                                💬 WhatsApp Now to Book!
                            </h3>
                            <p className="font-bold text-gray-450 flex flex-wrap items-center justify-center gap-2 gap-y-4 tracking-widest uppercase text-xs">
                                <span>Available 24/7</span>
                                <span className="text-zinc-700 hidden sm:inline">|</span>
                                <span>Cash Only</span>
                                <span className="text-zinc-700 hidden sm:inline">|</span>
                                <span>100% Genuine Sessions</span>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default CitySEOPage;
