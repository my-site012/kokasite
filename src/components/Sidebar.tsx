"use client";
import { Link } from "react-router-dom";
import { Crown } from "lucide-react";

import AdBanner from "./AdBanner";

const Sidebar = () => {
    return (
        <aside className="hidden lg:flex flex-col w-[280px] shrink-0 font-body relative z-20 pb-10">
            {/* Brand/Logo Section */}
            <div className="bg-[#111116] rounded-2xl border border-white/5 p-6 mb-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e91e63]/20 to-transparent"></div>

                <Link to="/" className="flex flex-col items-center gap-3 relative z-10">
                    <img src="/logo.png" alt="Logo" className="h-16 w-auto object-contain" />
                    <div className="text-center">
                        <p className="text-[10px] font-bold text-zinc-500 tracking-[0.4em] uppercase mt-1.5 ml-1">Premium Directory</p>
                    </div>
                </Link>
            </div>

            {/* Main Ad Banner */}
            <AdBanner height="h-48" />

            {/* Section Header */}
            <div className="flex items-center gap-3 mb-4 px-2">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Featured Ads</span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
            </div>

            {/* List of Ads */}
            <AdBanner />
            <AdBanner />
            <AdBanner />
            <AdBanner />

            {/* Mini Footer/Legal */}
            <div className="mt-auto px-4 py-6 text-center border-t border-white/5">
                <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-wider mb-2">© 2026 Koka Site Network</p>
                <div className="flex justify-center gap-3">
                    <Link to="/info/privacy-policy" className="text-[9px] text-zinc-500 hover:text-white transition-colors uppercase font-black underline">Privacy</Link>
                    <Link to="/info/terms-of-use" className="text-[9px] text-zinc-500 hover:text-white transition-colors uppercase font-black underline">Terms</Link>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
