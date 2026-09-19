import SEO from "@/components/SEO";
import { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import {  useSearchParams, useNavigate  } from "react-router-dom";
import Header from "@/components/Header";
import ListingSection from "@/components/ListingSection";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import { diamondListings, goldListings, silverListings, onlineListings } from "@/data/listings";
import { indianCityListings } from "@/data/indianCityListings";
import { Search, ChevronRight } from "lucide-react";
import { useSettings } from "@/context/SettingsContext";
import { SITE_URL } from "@/utils/config";

const flatIndian = Object.values(indianCityListings).flat();
const allListings = [...diamondListings, ...goldListings, ...silverListings, ...onlineListings, ...flatIndian];

const SearchPageContent = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get("q") || "";
    // We add an internal state to make input typing smooth instead of waiting for routing
    const [inputValue, setInputValue] = useState(query);
    const [results, setResults] = useState(allListings.slice(0, 50));
    const { settings } = useSettings();

    // Sync input value with query param when it changes externally
    useEffect(() => {
        setInputValue(query);
    }, [query]);

    useEffect(() => {
        if (!query.trim()) {
            setResults(allListings.slice(0, 50));
            return;
        }
        
        const lowerQuery = query.toLowerCase().trim();
        const queryWords = lowerQuery.split(/\s+/).filter(word => (word as string).length > 1);
        
        const scored = allListings.map(listing => {
            const cityLower = listing.city.toLowerCase();
            const nameLower = listing.name.toLowerCase();
            let score = 0;
            
            if (cityLower.includes(lowerQuery)) score += 100;
            if (nameLower.includes(lowerQuery)) score += 80;
            
            queryWords.forEach(word => {
                if (cityLower.includes(word)) score += 30;
                if (nameLower.includes(word)) score += 20;
            });
            
            return { listing, score };
        });
        
        const matched = scored
            .filter(s => s.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(s => s.listing);
        
        const uniqueResults = Array.from(new Map(matched.map(item => [item.id, item])).values());
            setResults(uniqueResults.slice(0, 60));
        }, [query]);

    const searchUrl = `${SITE_URL.replace(/\/$/, "")}/search`;
    const searchSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SearchResultsPage",
                "@id": `${searchUrl}#searchresults`,
                "url": searchUrl,
                "name": "Search Independent Companions & Escorts | Koka Site",
                "description": "Search verified call girls, model escorts, and body massage services across all locations."
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${searchUrl}#breadcrumb`,
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
                        "item": searchUrl
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-zinc-900 font-sans">
            <SEO 
                title="Search Escorts & Call Girls by City | Koka Site" 
                description="Find independent call girls, VIP models, and body massage services by location, category, or keyword on Koka Site." 
                canonical={searchUrl}
                schema={searchSchema}
            />
      <Header />

            <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 min-h-[60vh]">
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">
                        <Link to="/" className="hover:text-zinc-900 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-[#d81b60]">Search Results</span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 tracking-tighter mb-4">
                                Search <span className="text-[#d81b60]">Results.</span>
                            </h1>
                            <p className="text-zinc-400 text-lg font-medium">
                                Showing {results.length} verified listings {query ? `matching "${query}"` : "for you"}.
                            </p>
                        </div>
                        
                        <div className="w-full max-w-md relative group">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setInputValue(val);
                                    if (val) navigate(`/search?q=${val}`, { replace: true });
                                    else navigate(`/search`, { replace: true });
                                }}
                                placeholder="Search by name, city, or service..."
                                className="w-full h-16 pl-14 pr-6 bg-zinc-50 border-2 border-zinc-100 rounded-2xl text-[15px] font-medium outline-none focus:border-[#d81b60]/30 focus:bg-white transition-all shadow-lg shadow-zinc-200/20"
                            />
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300 group-focus-within:text-[#d81b60] transition-colors" />
                        </div>
                    </div>
                </div>

                {results.length > 0 ? (
                    <div className="space-y-24">
                        <ListingSection title="Found Models" icon="🔍" listings={results} />
                    </div>
                ) : (
                    <div className="text-center py-32 bg-zinc-50 border border-zinc-100 rounded-[3rem] px-8 shadow-xl shadow-zinc-200/40 animate-in fade-in zoom-in-95 duration-500">
                        <div className="h-20 w-20 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-8 text-zinc-400">
                            <Search className="w-10 h-10" />
                        </div>
                        <h2 className="text-3xl font-bold text-zinc-900 mb-2 tracking-tighter">No exact matches found.</h2>
                        <p className="text-zinc-400 font-medium max-w-sm mx-auto mb-10">Try searching for other cities or names, or browse our featured categories.</p>
                        <Link to="/" className="px-10 py-4 rounded-2xl bg-[#d81b60] text-white font-bold hover:bg-[#c2185b] transition-all shadow-xl shadow-[#d81b60]/20">
                            Back to Home
                        </Link>
                    </div>
                )}

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AdBanner height="h-32" />
                    <AdBanner height="h-32" />
                    <AdBanner height="h-32" />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="p-8 text-center text-zinc-500">Loading search...</div>}>
            <SearchPageContent />
        </Suspense>
    );
}

