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
    "{City} Call Girls & Escorts Directory | Koka Site",
    "Independent Escorts in {City} | Call Girls Directory - Koka Site",
    "Verified Companions & Escorts in {City} | Koka Site",
    "{City} Escort Services & Independent Call Girls | Koka Site",
];

const citySeoDescriptions = [
    "Explore independent call girls and companion advertisements across {City} on Koka Site. Browse profiles, contact details, and local directory listings.",
    "Find independent escorts and companion services in {City}. Browse profiles with photos and transparent service details on Koka Site.",
    "Discover independent call girls and escort directory listings in {City}. Connect directly with independent advertisers across prime localities on Koka Site.",
];

const massageSeoTitles = [
    "{City} Body Massage & Wellness Spa Directory | Koka Site",
    "Body Massage Services in {City} | Professional Therapists - Koka Site",
    "Full Body Massage & Spa in {City} | Koka Site Directory",
    "{City} Massage Therapists & Wellness Centers | Koka Site",
];

const massageSeoDescriptions = [
    "Browse independent body massage therapists and wellness spa listings in {City} on Koka Site. Connect directly with local service providers.",
    "Find relaxing body massage and wellness services in {City}. Explore local therapist advertisements and therapy details on Koka Site.",
    "Discover body massage therapists and spa centers across {City}. Contact independent practitioners directly for appointments on Koka Site.",
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
            return (
                <div className="min-h-screen bg-[#121214] text-gray-100 font-body">
                    <SEO 
                        title="Region Not Found | Koka Site" 
                        description="The requested state or region directory was not found on Koka Site." 
                        noindex={true}
                    />
                    <Header />
                    <main className="pt-36 pb-24 max-w-[800px] mx-auto px-4 text-center">
                        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/80 border border-zinc-800">
                            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Location Not Found</h1>
                            <p className="text-gray-400 text-sm sm:text-base mb-8">
                                The requested region or state directory could not be located in our directory. Please browse our active service areas across India.
                            </p>
                            <div className="flex justify-center gap-4 flex-wrap">
                                <Link to="/service-areas" className="px-6 py-3 bg-[#f4b827] text-black font-bold rounded-xl text-sm hover:bg-amber-400 transition-all">
                                    Browse All Service Areas
                                </Link>
                                <Link to="/" className="px-6 py-3 bg-zinc-800 text-white font-bold rounded-xl text-sm hover:bg-zinc-700 transition-all">
                                    Return to Home
                                </Link>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        }
        dynamicCityName = stateInfo.name;
        dynamicStateName = "";
        allListings = getStateListings(stateSlug || "");
    } else {
        const cityInfo = getCityFromSlug(citySlug);
        if (!cityInfo) {
            return (
                <div className="min-h-screen bg-[#121214] text-gray-100 font-body">
                    <SEO 
                        title="City Not Found | Koka Site" 
                        description="The requested city directory was not found on Koka Site." 
                        noindex={true}
                    />
                    <Header />
                    <main className="pt-36 pb-24 max-w-[800px] mx-auto px-4 text-center">
                        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/80 border border-zinc-800">
                            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">City Not Found</h1>
                            <p className="text-gray-400 text-sm sm:text-base mb-8">
                                The city directory you are looking for does not exist or has moved. Please explore our verified locations by state.
                            </p>
                            <div className="flex justify-center gap-4 flex-wrap">
                                <Link to="/service-areas" className="px-6 py-3 bg-[#f4b827] text-black font-bold rounded-xl text-sm hover:bg-amber-400 transition-all">
                                    Browse All Service Areas
                                </Link>
                                <Link to="/" className="px-6 py-3 bg-zinc-800 text-white font-bold rounded-xl text-sm hover:bg-zinc-700 transition-all">
                                    Return to Home
                                </Link>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            );
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
            ? `${dynamicCityName} Massage Services & Spa Directory | Koka Site` 
            : `${dynamicCityName} Escorts and Call Girls Directory | Koka Site`,
        metaDesc: categoryType === 'massage'
            ? `Discover body massage services and wellness spas in ${dynamicCityName} on Koka Site.`
            : `Discover call girls and independent ${dynamicCityName} escorts. Find service listings on Koka Site.`,
        h1: categoryType === 'massage' ? `${dynamicCityName} Massage Services` : `${dynamicCityName} Escorts & Call Girls`,
        intro: categoryType === 'massage'
            ? `Explore our directory of massage services and wellness centers in ${dynamicCityName}. Find independent practitioner listings on Koka Site.`
            : `Explore our directory of independent call girls and escorts in ${dynamicCityName}. Find verified companion listings on Koka Site.`,
    })
    : {
        title: generatedTitle.replace(/&/g, "and"),
        metaDesc: generatedDesc.replace(/&/g, "and"),
        h1: generatedTitle.replace(/&/g, "and"),
        content: pageData ? pageData.content : undefined,
        intro: categoryType === 'massage'
            ? `Welcome to Koka Site's ${dynamicCityName} massage directory — browse local body massage and therapy listings.`
            : `Welcome to Koka Site's ${dynamicCityName} companion directory — browse independent companion and escort listings.`,
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
                        "name": "Service Areas",
                        "item": `${SITE_URL}service-areas`
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
                                    <div className="text-2xl font-display font-bold text-white">{totalCount}+</div>
                                    <div className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Directory Profiles</div>
                                </div>
                                <div className="w-[1px] h-10 bg-zinc-800" />
                                <div className="text-center">
                                    <div className="text-2xl font-display font-bold text-[#f4b827]">Direct</div>
                                    <div className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Contact</div>
                                </div>
                                <div className="w-[1px] h-10 bg-zinc-800" />
                                <div className="text-center">
                                    <div className="text-2xl font-display font-bold text-amber-500">18+</div>
                                    <div className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Adult Only</div>
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

                        <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 text-center mt-8 relative overflow-hidden shadow-lg">
                            <h3 className="text-[#f4b827] text-xl font-bold mb-3 flex items-center justify-center gap-3">
                                🛡️ Safety &amp; Directory Advisory
                            </h3>
                            <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed mb-4">
                                Koka Site is an independent adult classified advertising directory. We advise all users to verify details directly with independent advertisers and never transfer online advances or booking deposits before meeting in person.
                            </p>
                            <p className="font-semibold text-gray-500 flex flex-wrap items-center justify-center gap-2 gap-y-2 tracking-wider uppercase text-xs">
                                <span>Independent Listings</span>
                                <span className="text-zinc-700 hidden sm:inline">•</span>
                                <span>No Online Deposits</span>
                                <span className="text-zinc-700 hidden sm:inline">•</span>
                                <span>18+ Consenting Adults</span>
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
