import SEO from "@/components/SEO";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { diamondListings, silverListings } from "@/data/listings";
import { Search, MapPin, Filter } from "lucide-react";
import { SITE_URL } from "@/utils/config";

const Map = () => {
    const allListings = [...diamondListings, ...silverListings];
    const mapUrl = `${SITE_URL.replace(/\/$/, "")}/map`;

    const mapSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Place",
                "@id": `${mapUrl}#map`,
                "name": "Interactive Escort & Service Location Map",
                "description": "Interactive map search for independent call girls, VIP escorts, and body massage providers."
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${mapUrl}#breadcrumb`,
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
                        "name": "Interactive Map",
                        "item": mapUrl
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-[#07070a] text-zinc-100 font-body relative overflow-x-hidden">
            <SEO 
                title="Interactive Escort Location Map | Koka Site" 
                description="Explore nearby independent escorts and massage therapists on our interactive city map." 
                canonical={mapUrl}
                schema={mapSchema}
            />
            <Header />

            <div className="max-w-[1400px] mx-auto px-4 lg:px-12 min-h-screen flex flex-col pt-24 pb-16">
                {/* Main Content Area */}
                <div className="flex-1 min-w-0 flex flex-col">
                    {/* Page Title & Filter Bar (Dual Tier) */}
                    <div className="mt-8 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h2 className="text-[32px] lg:text-[40px] font-sans font-black tracking-tighter text-white uppercase leading-none">
                            Interactive <span className="text-[#e91e63]">Map</span>
                        </h2>

                        <div className="flex items-center gap-3">
                            <div className="relative group flex-1 md:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-[#e91e63] transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search location..."
                                    className="w-full bg-[#111116] border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-[#e91e63]/50 transition-all"
                                />
                            </div>
                            <button className="bg-[#111116] border border-white/10 p-2.5 rounded-xl hover:text-[#e91e63] transition-colors">
                                <Filter className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Map Layout: Listings Sidebar + Map Area */}
                    <div className="flex flex-col lg:flex-row gap-6 flex-1 mb-20 min-h-[600px]">
                        {/* Map Listings Mini-Sidebar */}
                        <div className="w-full lg:w-[320px] bg-[#111116] border border-white/5 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
                            <div className="p-4 border-b border-white/5 bg-black/20 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Providers in Area</span>
                                <span className="text-[10px] font-black text-[#e91e63] bg-[#e91e63]/10 px-2 py-0.5 rounded-full">{allListings.length}</span>
                            </div>
                            <div className="flex-1 overflow-y-auto max-h-[600px] custom-scrollbar">
                                {allListings.map((listing) => (
                                    <div key={listing.id} className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-black/40 border border-white/10 grow-0 shrink-0">
                                                <img src={listing.image} alt={listing.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h4 className="text-xs font-black text-white group-hover:text-[#e91e63] transition-colors truncate">{listing.name}</h4>
                                                    <span className="text-[10px] text-zinc-500 font-bold">{listing.age}y</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                                                    <MapPin className="w-3 h-3 text-[#e91e63]" />
                                                    <span className="truncate">{listing.city}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Map Visual Mock */}
                        <div className="flex-1 bg-[#111116] border border-white/5 rounded-3xl overflow-hidden relative shadow-2xl min-h-[400px]">
                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                <div className="w-16 h-16 rounded-full bg-[#e91e63]/10 border border-[#e91e63]/20 flex items-center justify-center text-[#e91e63] mb-4 animate-pulse">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Interactive Location Map</h3>
                                <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                                    Select a city or area to view verified independent companions and body massage providers near you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Map;
