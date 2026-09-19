"use client";
import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";

import { indiaStates } from "@/data/indiaCities";

// Flatten all Indian cities into a single list with mock counts
const POPULAR_CITY_SLUGS = [
    "mumbai", "delhi", "bengaluru", "hyderabad", "ahmedabad", 
    "chennai", "kolkata", "surat", "pune", "jaipur", 
    "lucknow", "kanpur", "nagpur", "indore", "thane", 
    "bhopal", "patna", "vadodara", "ghaziabad", "ludhiana", 
    "agra", "nashik", "faridabad", "meerut", "rajkot", 
    "varanasi", "srinagar", "amritsar", "navi-mumbai", "ranchi"
];

const allCities = indiaStates.flatMap(state =>
    state.cities
        .filter(city => POPULAR_CITY_SLUGS.includes(city.slug))
        .map(city => {
            const hash = city.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
            return {
                name: city.name,
                slug: city.slug,
                stateSlug: state.slug,
                count: 2000 + (hash % 1000)
            };
        })
).sort((a, b) => b.count - a.count);

const CityCarousel = () => {
    const topCities = allCities; // Already filtered to popular ones

    return (
        <div className="w-full relative pt-16 pb-12 bg-white border-b border-zinc-200 overflow-hidden">
            {/* Section Label */}
            <div className="w-full px-6 lg:px-16 mb-8 pt-4">
                <h2 className="text-[#1A1A1A] font-serif italic text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                    Browse by City
                </h2>
                <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-[0.1em]">
                    {allCities.length} CITIES AVAILABLE
                </p>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-16 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-6">
                    {topCities.map((city) => (
                        <Link
                            key={city.slug}
                            to={`/call-girls/${city.stateSlug}/${city.slug}`}
                            className="group/item flex items-center justify-between transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center border border-red-200 group-hover/item:bg-red-600 transition-all">
                                    <MapPin className="w-3.5 h-3.5 text-red-600 group-hover/item:text-white" />
                                </div>
                                <span className="text-[14px] font-bold text-[#444] group-hover/item:text-black transition-colors truncate">
                                    {city.name}
                                </span>
                            </div>
                            <span className="text-[11px] font-bold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-md min-w-[35px] text-center shrink-0">
                                {city.count}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Explore All Cities CTA */}
                <div className="mt-12 flex justify-center lg:justify-start">
                    <Link
                        to="/map"
                        className="group flex items-center gap-3 text-red-600 hover:text-red-700 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-red-600/20">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                        <span className="text-[12px] font-black uppercase tracking-[0.2em]">
                            Explore All {allCities.length} Cities
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CityCarousel;
