import SEO from "@/components/SEO";
import { useState, useEffect } from "react";
import {  useParams, useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    Phone, MapPin, ShieldCheck, Star, ArrowLeft,
    Mail, MessageSquare, MessageCircle, Flag, Camera, ExternalLink,
    Sparkles, ChevronRight, Check
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/utils/config";
import {
    diamondListings, goldListings, silverListings, onlineListings
} from "@/data/listings";
import { indianCityListings } from "@/data/indianCityListings";
// Helper to render local images properly
function resolveImage(path: string): string {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("/")) return path;
    return `/${path}`;
}
import { generateRichDescription } from "@/components/ListingCard";
import { useSettings, getRotatedWhatsappNumber } from "@/context/SettingsContext";

// Combine all listings into one searchable pool
const flattenedIndian = Object.values(indianCityListings).flat();
const allListings = [
    ...diamondListings,
    ...goldListings,
    ...silverListings,
    ...onlineListings,
    ...flattenedIndian
];

export default function ProfilePage() {
    const { id: paramId } = useParams();
    const navigate = useNavigate();
    const listingId = paramId as string;
    const listing = allListings.find(l => l.id === listingId);
    const [activePhoto, setActivePhoto] = useState(0);
    const { settings } = useSettings();

    const [isReportOpen, setIsReportOpen] = useState(false);
    const [reportReason, setReportReason] = useState("");
    const [reportComment, setReportComment] = useState("");
    const [isReporting, setIsReporting] = useState(false);
    const [reportSuccess, setReportSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActivePhoto(0);
    }, [paramId]);

    if (!listing) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center text-foreground p-6">
                <h1 className="text-2xl font-bold mb-4">Profile Not Found</h1>
                <Link to="/" className="text-red-600 hover:underline flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </div>
        );
    }

    const photos = listing.images?.length ? listing.images : [listing.image ?? ""];
    const price = listing.pricing?.["1hour"] || listing.pricing?.["30min"] || 8331;
    const currency = listing.pricing?.currency || "₹";

    const currencyMap: Record<string, string> = {
        "₹": "INR",
        "A$": "AUD",
        "C$": "CAD",
        "¥": listing.city?.toLowerCase().includes("japan") || listing.city?.toLowerCase().includes("tokyo") ? "JPY" : "CNY",
        "€": "EUR",
        "SR": "SAR",
        "R": "ZAR",
        "฿": "THB",
        "£": "GBP"
    };
    const priceCurrency = currencyMap[currency] || "INR";

    const profileUrl = `${SITE_URL.replace(/\/$/, "")}/profile/${listing.id}`;
    const descriptionText = generateRichDescription(listing).replace(/<[^>]*>?/gm, '');
    const absoluteImage = photos[0] ? (photos[0].startsWith("http") ? photos[0] : `${SITE_URL.replace(/\/$/, "")}${photos[0].startsWith("/") ? "" : "/"}${photos[0]}`) : "";

    const profileSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": `${profileUrl}#person`,
                "name": listing.name,
                "gender": "Female",
                "description": descriptionText,
                "image": absoluteImage,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": listing.city,
                    "addressCountry": priceCurrency === "INR" ? "IN" : "Global"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${profileUrl}#breadcrumb`,
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
                        "name": listing.city,
                        "item": `${SITE_URL}call-girls/${listing.city.toLowerCase().replace(/\s+/g, '-')}`
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": listing.name,
                        "item": profileUrl
                    }
                ]
            },
            {
                "@type": "Service",
                "@id": `${profileUrl}#service`,
                "name": `Escort Service by ${listing.name} in ${listing.city}`,
                "provider": {
                    "@type": "Person",
                    "name": listing.name
                },
                "areaServed": {
                    "@type": "City",
                    "name": listing.city
                }
            },
            {
                "@type": "IndividualProduct",
                "@id": `${profileUrl}#product`,
                "name": `${listing.name} - Escort Service in ${listing.city}`,
                "description": descriptionText,
                "image": absoluteImage,
                "offers": {
                    "@type": "Offer",
                    "price": price,
                    "priceCurrency": priceCurrency,
                    "availability": "https://schema.org/InStock"
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-foreground selection:bg-red-600/30 selection:text-foreground">
            <SEO 
                title={`${listing.name}, ${listing.age} - Call Girl in ${listing.city} | Koka Site`} 
                description={`Book ${listing.name}, verified independent companion in ${listing.city}. Age: ${listing.age}. View photos, services, pricing, and contact details directly.`} 
                canonical={profileUrl}
                schema={profileSchema}
                noindex={true}
            />
      <Header />

            <main className="max-w-[1200px] mx-auto px-4 pt-24 md:pt-32 pb-20">
                {/* ── Breadcrumb / Back ── */}
                <div className="mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-zinc-500 hover:text-foreground text-sm transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to {listing.city} {listing.sex || "Escorts"}</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 lg:gap-8">

                    {/* 📸 LEFT COLUMN: IMAGERY */}
                    <div className="space-y-4">
                        {/* Main Display Container - Auto height to prevent cropping */}
                        <div 
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-3xl flex items-center justify-center overflow-hidden relative select-none"
                            onContextMenu={(e) => e.preventDefault()}
                        >
                            {photos[activePhoto] ? (
                                <>
                                    <img
                                        src={resolveImage(photos[activePhoto])}
                                        alt={listing.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-[320px] sm:h-[400px] md:h-[600px] object-contain bg-zinc-50/50 rounded-2xl md:rounded-3xl"
                                        onDragStart={(e) => e.preventDefault()}
                                    />
                                    {/* Verified Ribbon - Top Right Corner */}
                                    <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden z-10 pointer-events-none">
                                        <div className="absolute top-6 -right-6 bg-green-500 text-white text-[11px] font-black uppercase tracking-wider py-1.5 w-32 text-center rotate-45 shadow-md">
                                            ✓ Verified
                                        </div>
                                    </div>
                                    {/* Watermark - Header Logo Style */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-10 flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/60">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-md bg-pink-100/80 border border-pink-300/60">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                                        </div>
                                        <span className="text-[13px] font-black tracking-tight text-gray-800/80 uppercase">Koka Site</span>
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col items-center gap-4 text-zinc-700 aspect-[4/3] justify-center w-full">
                                    <Camera className="w-16 h-16 stroke-[1.5]" />
                                    <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-30">Private Gallery</span>
                                </div>
                            )}
                        </div>
                        {/* Restore Thumbnails */}
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {photos.map((photo, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActivePhoto(index)}
                                    className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                                        activePhoto === index ? "border-red-600 scale-95" : "border-transparent opacity-60 hover:opacity-100"
                                    }`}
                                >
                                    <img src={resolveImage(photo)} className="w-full h-full object-cover" alt="" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white border border-zinc-200 rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 shadow-xl">
                            <div className="space-y-6">

                                {/* Header Info */}
                                <div>
                                    <h1 className="text-[16px] sm:text-[20px] font-black text-[#D91E18] mb-1 uppercase tracking-tight leading-snug">
                                        {listing.name}, {listing.age}
                                    </h1>
                                    <div className="flex items-center gap-2 text-zinc-500">
                                        <MapPin className="w-4 h-4 text-[#D91E18]" />
                                        <span className="text-sm font-bold uppercase">{listing.city}, India</span>
                                    </div>
                                </div>

                                {/* Price Display */}
                                <div className="py-2">
                                    <div className="text-[#f59e0b] text-3xl sm:text-4xl font-black tracking-tight">
                                        {currency}{price.toLocaleString()}
                                    </div>
                                </div>

                                {/* Badges */}
                                <div className="flex flex-wrap gap-2">
                                    {listing.verified && (
                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#10b981] text-white text-[11px] font-bold rounded-full">
                                            <ShieldCheck className="w-3.5 h-3.5" />
                                            Verified
                                        </span>
                                    )}
                                    {(listing.tier === "diamond" || listing.isVip) && (
                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#f59e0b] text-[#121212] text-[11px] font-bold rounded-full">
                                            <Star className="w-3.5 h-3.5 fill-[#121212]" />
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-3 pt-4">
                                    <a
                                        onClick={() => {
                                            fetch('/api/clicks', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({
                                                    adId: listing.id,
                                                    adName: listing.name,
                                                    adCity: listing.city,
                                                    url: typeof window !== 'undefined' ? window.location.href : '',
                                                    source: 'Profile Page'
                                                })
                                            }).catch(err => console.error("Tracking error:", err));
                                        }}
                                        href={`https://wa.me/${listing.contactWhatsapp || getRotatedWhatsappNumber(settings, listing.id, listing.id?.toLowerCase().includes('boy') || listing.name?.toLowerCase().includes('boy'))}?text=${encodeURIComponent(`I need a call girl. Can you send me a photo? Location: ${listing.city}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-3.5 sm:py-4 bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                                    >
                                        <MessageCircle className="w-5 h-5 fill-white" />
                                        WhatsApp
                                    </a>
                                    <a
                                        href={`tel:${listing.contactPhone || listing.contactWhatsapp || settings.phoneNumber}`}
                                        className="w-full py-3.5 sm:py-4 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Report Ad */}
                        <button 
                            onClick={() => setIsReportOpen(true)}
                            className="flex items-center gap-2 text-zinc-600 hover:text-zinc-400 text-xs font-medium ml-4 transition-colors"
                        >
                            <Flag className="w-3.5 h-3.5" />
                            Report this ad
                        </button>
                    </div>
                </div>

                {/* ── LOWER SECTION: CONTENT ── */}
                <div className="mt-10 md:mt-12 max-w-4xl">
                    <div className="bg-white border border-zinc-200 rounded-[24px] sm:rounded-[32px] p-5 sm:p-10 space-y-8 sm:space-y-10 shadow-xl">

                        {/* Physical Details */}
                        <section>
                            <h2 className="text-xl font-black text-[#D91E18] mb-6 uppercase tracking-tight">Physical Details</h2>
                            {(() => {
                                // Deterministic seed for consistent fake data per profile
                                const seed = listing.name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
                                const heights = [152, 155, 157, 160, 162, 165, 167, 170, 172, 175];
                                const weights = [45, 48, 50, 52, 55, 58, 60, 53, 56, 49];
                                const bodyTypes = ["Slim", "Athletic", "Curvy", "Petite", "Hourglass", "Fit"];
                                const hairColors = ["Black", "Dark Brown", "Brown", "Auburn", "Highlighted"];
                                const hairLengths = ["Long", "Medium", "Short", "Very Long"];
                                const eyeColors = ["Brown", "Dark Brown", "Hazel", "Black"];
                                const busts = ["32B", "32C", "34B", "34C", "34D", "36C", "36D", "32D"];
                                const ethnicities = ["Indian", "North Indian", "South Indian", "Indo-Western"];

                                const h = listing.height || heights[seed % heights.length];
                                const w = listing.weight || weights[seed % weights.length];
                                const bt = listing.bodyType || bodyTypes[seed % bodyTypes.length];
                                const hc = listing.hairColor || hairColors[seed % hairColors.length];
                                const hl = listing.hairLength || hairLengths[seed % hairLengths.length];
                                const ec = listing.eyeColor || eyeColors[seed % eyeColors.length];
                                const bust = busts[seed % busts.length];
                                const eth = listing.ethnicity || ethnicities[seed % ethnicities.length];

                                const details = [
                                    { label: "Age", value: `${listing.age || 22} years` },
                                    { label: "Height", value: `${h} cm (${Math.floor(h / 30.48)}'${Math.round((h % 30.48) / 2.54)}")` },
                                    { label: "Weight", value: `${w} kg` },
                                    { label: "Body Type", value: bt },
                                    { label: "Bust Size", value: bust },
                                    { label: "Hair Color", value: hc },
                                    { label: "Hair Length", value: hl },
                                    { label: "Eye Color", value: ec },
                                    { label: "Ethnicity", value: eth },
                                    { label: "Nationality", value: listing.nationality || "Indian" },
                                    { label: "Tattoos", value: listing.tattoos || (seed % 3 === 0 ? "Small" : "None") },
                                    { label: "Smoking", value: listing.smoking || "No" },
                                ];

                                return (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
                                        {details.map(d => (
                                            <div key={d.label} className="flex flex-col">
                                                <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">{d.label}</span>
                                                <span className="text-[15px] font-semibold text-zinc-800">{d.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })()}
                        </section>

                        {/* Services */}
                        <section>
                            <h2 className="text-xl font-black text-[#D91E18] mb-6 uppercase tracking-tight">Services Offered</h2>
                            <div className="flex flex-wrap gap-2">
                                {(() => {
                                    const defaultServices = [
                                        "Blowjob", "Missionary", "Doggy Style", "Cowgirl",
                                        "69 Position", "GFE (Girlfriend Experience)", "Body Massage",
                                        "French Kissing", "Incall", "Outcall",
                                        "Role Play", "Strip-tease", "Oral",
                                        "BDSM (Soft)", "Covered", "Completion",
                                        "Hotel Based", "Duo", "Every Position"
                                    ];
                                    const svcs = listing.services && listing.services.length > 0
                                        ? Array.from(new Set([...listing.services, ...defaultServices.slice(0, 8)]))
                                        : defaultServices;
                                    return svcs.map((svc) => (
                                        <span
                                            key={svc}
                                            className="px-4 py-2 bg-pink-50 border border-pink-200 rounded-full text-pink-700 text-[13px] font-semibold hover:bg-pink-100 hover:border-pink-300 transition-colors"
                                        >
                                            {svc}
                                        </span>
                                    ));
                                })()}
                            </div>
                        </section>

                        {/* Availability */}
                        <section>
                            <h2 className="text-xl font-black text-[#D91E18] mb-6 uppercase tracking-tight">Availability</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
                                {(() => {
                                    const avail = [
                                        { label: "Incall", value: "✅ Available" },
                                        { label: "Outcall", value: "✅ Available" },
                                        { label: "Hotel Visits", value: "✅ Available" },
                                        { label: "Profile Type", value: listing.profileType || "Independent" },
                                        { label: "For", value: (listing.forWhom || ["Men"]).join(", ") },
                                        { label: "Payment", value: "Cash Only" },
                                    ];
                                    return avail.map(d => (
                                        <div key={d.label} className="flex flex-col">
                                            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">{d.label}</span>
                                            <span className="text-[15px] font-semibold text-zinc-800">{d.value}</span>
                                        </div>
                                    ));
                                })()}
                            </div>
                        </section>

                        {/* About */}
                        <section>
                            <h2 className="text-xl font-black text-[#D91E18] mb-6 uppercase tracking-tight">About</h2>
                            <div className="text-zinc-600 leading-relaxed text-[15px] font-medium whitespace-pre-line">
                                {(() => {
                                    const text = generateRichDescription(listing);
                                    if (text.length <= 300) return text;
                                    return text.substring(0, 300).replace(/\s+\S*$/, '...');
                                })()}
                            </div>
                        </section>

                        {/* Related Profiles Section (below About) */}
                        <section className="pt-10 border-t border-zinc-100">
                            <h2 className="text-2xl font-black text-[#D91E18] mb-8 uppercase tracking-tight flex items-center gap-3">
                                <Sparkles className="w-6 h-6" /> Related Profiles in {listing.city}
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                {allListings
                                    .filter(l => {
                                        const baseCity = listing.city.split(' –')[0].split(' -')[0];
                                        return l.city.includes(baseCity) && l.id !== listing.id;
                                    })
                                    .slice(0, 5)
                                    .map(related => (
                                        <Link 
                                            to={`/profile/${related.id}`} 
                                            key={related.id}
                                            className="relative group rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-100"
                                        >
                                            <img 
                                                src={resolveImage(related.image || "")} 
                                                alt={`${related.name} Call Girl in ${related.city}`} 
                                                loading="lazy"
                                                className="w-full h-full object-contain bg-zinc-50 group-hover:scale-105 transition-transform duration-500" 
                                            />
                                            {/* Info at bottom */}
                                            <div className="absolute inset-x-0 bottom-0 p-3 pt-16 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                                                <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 mb-1 drop-shadow-md">
                                                    {related.name}
                                                </h3>
                                                <p className="text-zinc-300 text-[11px] font-medium flex items-center gap-1.5 truncate">
                                                    <span>{related.age} Yrs</span>
                                                    <span>•</span>
                                                    <span className="truncate">{related.city.split(' –')[0]}</span>
                                                </p>
                                            </div>
                                            {/* Hover effect */}
                                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500 rounded-2xl transition-colors duration-300" />
                                        </Link>
                                    ))
                                }
                            </div>
                        </section>
                    </div>
                </div>

                {/* Similar Profiles or CTA */}
                <div className="mt-20 text-center space-y-4">
                    <h2 className="text-xl font-bold text-zinc-800">Ready to book {listing.name}?</h2>
                    <p className="text-zinc-500 text-sm italic">Direct contact, no hidden fees. Verified high-class companions only.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            to="/post-ad"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95"
                        >
                            Post Your Ad <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/search"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-zinc-900 border-2 border-zinc-100 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-zinc-50 transition-all active:scale-95"
                        >
                            Browse More
                        </Link>
                    </div>
                </div>
            </main>

            {/* ── REPORT MODAL ── */}
            {isReportOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsReportOpen(false)}>
                    <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                        <h3 className="text-2xl font-black text-zinc-900 mb-2 uppercase tracking-tight">Report Ad</h3>
                        <p className="text-zinc-500 text-sm mb-6 font-medium">
                            Let us know what's wrong with the ad for <strong className="text-zinc-800">{listing.name}</strong>.
                        </p>
                        
                        {reportSuccess ? (
                            <div className="text-center py-8 space-y-4">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                    <Check className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-zinc-900">Report Sent</h4>
                                <p className="text-zinc-500 text-sm">Thank you for helping us keep the community safe. Our team will review this shortly.</p>
                                <button 
                                    onClick={() => {
                                        setIsReportOpen(false);
                                        setReportSuccess(false);
                                    }}
                                    className="w-full py-3.5 rounded-xl font-bold text-white bg-zinc-900 hover:bg-zinc-800 transition-colors mt-4"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-bold text-zinc-700 mb-2">Reason</label>
                                        <select 
                                            value={reportReason}
                                            onChange={(e) => setReportReason(e.target.value)}
                                            className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:ring-2 focus:ring-[#D91E18] focus:border-transparent outline-none transition-all text-sm font-medium"
                                        >
                                            <option value="" disabled>Select a reason...</option>
                                            <option value="Fake Profile">Fake Profile / Not a real person</option>
                                            <option value="Scam">Scam / Asking for advance payment</option>
                                            <option value="Underage">Underage</option>
                                            <option value="Wrong Category">Wrong Category / Location</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-bold text-zinc-700 mb-2">Additional Details</label>
                                        <textarea 
                                            value={reportComment}
                                            onChange={(e) => setReportComment(e.target.value)}
                                            placeholder="Please provide any other details..."
                                            className="w-full h-32 p-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:ring-2 focus:ring-[#D91E18] focus:border-transparent outline-none transition-all resize-none text-sm font-medium"
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => setIsReportOpen(false)}
                                        disabled={isReporting}
                                        className="flex-1 py-3.5 rounded-xl font-bold text-zinc-600 bg-zinc-100 hover:bg-zinc-200 transition-colors disabled:opacity-50"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        disabled={isReporting || !reportReason}
                                        onClick={async () => {
                                            if (!reportReason) return alert("Please select a reason");
                                            setIsReporting(true);
                                            try {
                                                const response = await fetch('/api/report', {
                                                    method: 'POST',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({
                                                        adId: listing.id,
                                                        adName: listing.name,
                                                        adCity: listing.city,
                                                        reason: reportReason,
                                                        details: reportComment,
                                                        profileUrl: window.location.href,
                                                    }),
                                                });
                                                
                                                if (response.ok) {
                                                    setReportSuccess(true);
                                                    setReportReason("");
                                                    setReportComment("");
                                                } else {
                                                    const err = await response.json();
                                                    alert("Failed to send report: " + (err.details || err.error || "Unknown error"));
                                                }
                                            } catch (error) {
                                                console.error("Report Error:", error);
                                                alert("An error occurred while sending the report. Please try again.");
                                            } finally {
                                                setIsReporting(false);
                                            }
                                        }}
                                        className="flex-1 py-3.5 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        {isReporting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : "Submit Report"}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}



            <Footer />
        </div>
    );
}

