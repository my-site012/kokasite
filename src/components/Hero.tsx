"use client";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Star, Users } from "lucide-react";

import LocationSearchBar from "@/components/LocationSearchBar";

const Hero = () => {
    return (
        <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 bg-white dark:bg-[#060608]">
            {/* Premium Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-100/30 via-white/80 to-white dark:from-pink-900/10 dark:via-zinc-950/80 dark:to-[#060608]" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 via-transparent to-purple-50/30 dark:from-pink-900/5 dark:to-purple-900/5" />
                
                {/* Vercel-style Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-12 text-center">
                <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-pink-50 dark:bg-pink-900/10 border border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-400 text-[11px] font-black uppercase tracking-[0.25em] mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-lg shadow-pink-100 dark:shadow-pink-900/10">
                    <span className="text-sm">★</span>
                    The Most Exclusive Directory in India
                    <span className="text-sm">★</span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 text-zinc-900 dark:text-white">
                    Call Girls, Escorts &<br className="sm:hidden" /> <span className="text-pink-500 text-glow">Adult Meetings</span> <br />
                    <span className="text-purple-400 dark:text-purple-300 relative inline-block mt-2">
                        in India
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-purple-300/30 dark:bg-purple-500/20 blur-sm" />
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-zinc-400 font-light mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    Find independent companion classifieds, wellness massage listings, and local service providers across India — Free ad posting
                </p>

                {/* 🔍 Location Search Bar */}
                <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 mb-8">
                    <LocationSearchBar />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400">
                    <Link
                        to="/post-ad"
                        className="px-10 py-4 bg-pink-50 dark:bg-zinc-900 hover:bg-pink-100 dark:hover:bg-zinc-800 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-zinc-800 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-pink-100 dark:shadow-black/20"
                    >
                        <span className="flex items-center gap-2">
                            Post Free Ad <Star className="w-4 h-4 fill-primary" />
                        </span>
                    </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-pink-200 dark:border-zinc-800 pt-12 animate-in fade-in duration-1000 delay-500">
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 rounded-2xl bg-pink-50 dark:bg-pink-900/10 flex items-center justify-center border border-pink-200 dark:border-pink-800 group-hover:border-pink-400 dark:group-hover:border-pink-600 transition-colors">
                            <ShieldCheck className="w-6 h-6 text-pink-500" />
                        </div>
                        <span className="text-gray-800 dark:text-zinc-200 font-bold">Community Moderated</span>
                        <span className="text-pink-400 text-xs uppercase tracking-widest">Safety Guidelines</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-900/10 flex items-center justify-center border border-purple-200 dark:border-purple-800 group-hover:border-purple-400 dark:group-hover:border-purple-600 transition-colors">
                            <Users className="w-6 h-6 text-purple-500" />
                        </div>
                        <span className="text-gray-800 dark:text-zinc-200 font-bold">Pan-India Directory</span>
                        <span className="text-purple-400 text-xs uppercase tracking-widest">Major States & Cities</span>
                    </div>
                    <div className="hidden md:flex flex-col items-center gap-2 group col-span-1">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/10 flex items-center justify-center border border-amber-200 dark:border-amber-800 group-hover:border-amber-400 dark:group-hover:border-amber-600 transition-colors">
                            <Star className="w-6 h-6 text-amber-500 fill-amber-200 dark:fill-amber-500/20" />
                        </div>
                        <span className="text-gray-800 dark:text-zinc-200 font-bold">Direct Communication</span>
                        <span className="text-amber-400 text-xs uppercase tracking-widest">No Hidden Commissions</span>
                    </div>
                </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-200/40 dark:bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
    );
};

export default Hero;
