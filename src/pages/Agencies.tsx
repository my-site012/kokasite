import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { agencies } from "@/data/agencies";
import { Search, MapPin, Calendar, Twitter, ChevronRight, Users, Heart } from "lucide-react";

import { SITE_URL } from "@/utils/config";

const Agencies = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [cityFilter, setCityFilter] = useState("");

    const filteredAgencies = agencies.filter(agency =>
        agency.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        agency.location.toLowerCase().includes(cityFilter.toLowerCase())
    );

    const agenciesUrl = `${SITE_URL.replace(/\/$/, "")}/agencies`;
    const agenciesSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ItemList",
                "@id": `${agenciesUrl}#itemlist`,
                "name": "Escort Agencies Directory",
                "description": "Curated selection of top-tier escort agencies across major cities.",
                "itemListElement": agencies.map((agency, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "Organization",
                        "name": agency.name,
                        "url": `${agenciesUrl.replace("/agencies", "")}/agency/${agency.slug}`,
                        "address": agency.location
                    }
                }))
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${agenciesUrl}#breadcrumb`,
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
                        "name": "Agencies",
                        "item": agenciesUrl
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-zinc-900 font-body relative overflow-x-hidden">
            <SEO 
                title="Top Escort Agencies Directory | Koka Site" 
                description="Browse verified escort agencies, VIP model partners, and companion agencies across major cities." 
                canonical={agenciesUrl}
                schema={agenciesSchema}
            />
            <Header />

            <main className="pt-32">
                <div className="max-w-[1200px] mx-auto px-4 lg:px-8 pb-16">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
                            <Users className="w-4 h-4" /> Global Network
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-zinc-800 tracking-tight mb-4">
                            Agencies <span className="text-[#d81b60]">Directory</span>
                        </h1>
                        <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                            Explore our curated selection of top-tier escort agencies providing professional management and elite companions worldwide.
                        </p>
                    </div>

                    {/* Filter Bar - Modern Light Style */}
                    <div className="bg-zinc-50 border border-zinc-100 rounded-[2rem] p-8 shadow-xl shadow-zinc-200/50 mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                            <div className="md:col-span-5 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Agency Name</label>
                                <div className="relative group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-300 group-focus-within:text-[#d81b60] transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Search by name..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-white border border-zinc-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-[#d81b60]/50 transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-4 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Location</label>
                                <div className="relative group">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-300 group-focus-within:text-[#d81b60] transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Filter by city..."
                                        value={cityFilter}
                                        onChange={(e) => setCityFilter(e.target.value)}
                                        className="w-full bg-white border border-zinc-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-[#d81b60]/50 transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-3">
                                <button className="w-full bg-[#d81b60] text-white font-bold uppercase tracking-widest text-[11px] py-4 rounded-2xl hover:bg-[#c2185b] shadow-lg shadow-[#d81b60]/20 transition-all">
                                    Filter Results
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 mb-20">
                        {filteredAgencies.map((agency) => (
                            <div key={agency.id} className="bg-white border border-zinc-100 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 shadow-2xl shadow-zinc-200/30 relative overflow-hidden group hover:border-[#d81b60]/20 transition-all">
                                <div className="flex flex-col lg:flex-row gap-10">
                                    {/* Left: 2x2 Image Grid */}
                                    <div className="grid grid-cols-2 gap-3 w-full lg:w-[320px] shrink-0">
                                        {agency.images.slice(0, 4).map((img, idx) => (
                                            <div key={idx} className="aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-100 relative group-hover:shadow-lg transition-all duration-700">
                                                <img
                                                    src={img}
                                                    alt={`${agency.name} model`}
                                                    className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-1000"
                                                />
                                            </div>
                                        ))}
                                        {agency.images.length > 4 && (
                                            <div className="absolute top-4 left-4 bg-[#d81b60] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg z-10">
                                                +{agency.images.length - 4} MORE
                                            </div>
                                        )}
                                    </div>

                                    {/* Right: Info */}
                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="mb-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <h3 className="text-3xl font-bold text-zinc-900 hover:text-[#d81b60] transition-colors cursor-pointer tracking-tight">
                                                    {agency.name}
                                                </h3>
                                                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                                    <Heart className="h-3 w-3 text-blue-500 fill-blue-500" />
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-6 text-[11px] font-black text-zinc-400 uppercase tracking-widest">
                                                <span className="flex items-center gap-2 bg-zinc-50 px-3 py-1.5 rounded-full"><Calendar className="h-3.5 w-3.5 text-[#d81b60]" /> Joined {agency.registeredDate}</span>
                                                <span className="flex items-center gap-2 bg-zinc-50 px-3 py-1.5 rounded-full"><MapPin className="h-3.5 w-3.5 text-[#d81b60]" /> {agency.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-zinc-500 text-base leading-relaxed mb-8 font-medium">
                                            {agency.description}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between border-t border-zinc-50 pt-8">
                                            <Link
                                                to={`/agency/${agency.slug}`}
                                                className="flex items-center gap-3 bg-zinc-900 hover:bg-[#d81b60] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-4 rounded-2xl transition-all group/btn shadow-xl shadow-zinc-900/10"
                                            >
                                                Explore Agency <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                            <div className="flex items-center gap-4">
                                                <button className="h-12 w-12 rounded-2xl border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-[#d81b60] hover:bg-[#d81b60]/5 transition-all">
                                                    <Twitter className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <Footer />
            </main>
        </div>
    );
};

export default Agencies;
