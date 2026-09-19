import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import {  useParams, redirect  } from "react-router-dom";
import { useMemo } from "react";

import Header from "@/components/Header";
import ListingSection from "@/components/ListingSection";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import { diamondListings, silverListings, cities } from "@/data/listings";
import { getCityListings, getStateListings } from "@/data/indianCityListings";
import { indiaStates } from "@/data/indiaCities";
import { MapPin, Search, ChevronRight } from "lucide-react";

import { SITE_URL } from "@/utils/config";
import { useSettings } from "@/context/SettingsContext";

const CategoryPage = () => {
    const params = useParams();
    const category = Array.isArray(params?.category) ? params.category[0] : params?.category;
    const { settings } = useSettings();
    const categoryLower = category?.toLowerCase() || "";

    // IMPORTANT: If category is a city or state, redirect to SEO route
    // This fixed the user's issue: "category pages me city/state kyu aa rhe hai"
    // City names shouldn't be under /category/ - they should be in SEO structure
    const redirectUrl = useMemo(() => {
        if (!categoryLower) return null;
        
        // Check states first
        const state = indiaStates.find(s => s.slug === categoryLower);
        if (state) return `/call-girls/${state.slug}`;

        // Check cities
        for (const s of indiaStates) {
            const city = s.cities?.find(c => c.slug === categoryLower);
            if (city) return `/call-girls/${s.slug}/${city.slug}`;
        }
        return null;
    }, [categoryLower]);

    if (redirectUrl) {
        redirect(redirectUrl);
    }

    const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : "";

    // Simple filter for fallback categories (independent, girls, etc.)
    const filteredDiamond = useMemo(() => {
        if (categoryLower === "girls" || categoryLower === "independent") return diamondListings;
        return diamondListings.filter(l => l.city?.toLowerCase().includes(categoryLower));
    }, [categoryLower]);

    const filteredSilver = useMemo(() => {
        if (categoryLower === "girls" || categoryLower === "independent") return silverListings;
        return silverListings.filter(l => l.city?.toLowerCase().includes(categoryLower));
    }, [categoryLower]);

    const categoryUrl = `${SITE_URL.replace(/\/$/, "")}/category/${categoryLower}`;
    const categorySchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": `${categoryUrl}#collection`,
                "url": categoryUrl,
                "name": `${formattedCategory} Escorts & Companions | Koka Site`,
                "description": `Browse independent verified ${formattedCategory} escorts and call girls on Koka Site.`
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${categoryUrl}#breadcrumb`,
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
                        "name": formattedCategory,
                        "item": categoryUrl
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-zinc-900 font-sans">
            
            <SEO 
                title={`${formattedCategory} Escorts & Call Girls | Koka Site`} 
                description={`Discover verified independent companions and escorts in ${formattedCategory} category. Real photos, 100% cash payment on delivery.`} 
                canonical={categoryUrl}
                schema={categorySchema}
            />
      <Header />

            <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">

                {/* Hero / Header Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">
                        <Link to="/" className="hover:text-zinc-900 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-[#d81b60]">{formattedCategory}</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 tracking-tighter mb-4">
                        {formattedCategory}<span className="text-[#d81b60]">.</span>
                    </h1>
                    <p className="text-zinc-400 text-lg font-medium max-w-2xl">
                        Discover the most refined selection of independent companions in {formattedCategory}. Verified profiles with 100% real photography.
                    </p>
                </div>

                {/* City Quick Links */}
                <div className="bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-8 lg:p-12 mb-16 shadow-xl shadow-zinc-200/40">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-[#d81b60]" /> Nearby Locations
                        </h3>
                        <Link to="/search" className="h-10 px-5 rounded-full bg-white border border-zinc-100 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-[#d81b60] transition-all">
                            <Search className="w-3.5 h-3.5" /> All Cities
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {cities.slice(0, 18).map((city) => (
                            <Link to={`/category/${city.name.toLowerCase()}`} key={city.name} className="flex flex-col group">
                                <span className="text-sm font-bold text-zinc-900 group-hover:text-[#d81b60] transition-colors mb-1">{city.name}</span>
                                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{city.count} Profiles</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="space-y-24">
                    <section>
                        <ListingSection title={`Featured in ${formattedCategory}`} icon="💎" listings={filteredDiamond} />
                    </section>

                    <section className="pt-16 border-t border-zinc-50">
                        <ListingSection title="Standard Results" icon="⚡" listings={filteredSilver} />
                    </section>
                </div>

                {/* Ads Section */}
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

export default CategoryPage;

