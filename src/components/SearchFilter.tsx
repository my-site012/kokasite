import { ChevronDown, Search, MapPin } from "lucide-react";
import { cities } from "@/data/listings";

const SearchFilter = () => {
    return (
        <div className="w-full bg-[#fdf2f8]/50 border-y border-zinc-100 p-8 lg:p-12 mb-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Profile Type */}
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">Profile type</label>
                        <div className="flex border border-zinc-200 rounded overflow-hidden">
                            <button className="flex-1 py-2 px-4 bg-[#fdf2f8] text-[#d81b60] font-bold text-sm">Girls</button>
                        </div>
                    </div>

                    {/* City Selection - REPLACED ETHNICITY */}
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">Location / City</label>
                        <div className="relative">
                            <select className="w-full p-2.5 bg-white border border-zinc-200 rounded text-sm appearance-none outline-none focus:border-[#d81b60]/50 transition-colors cursor-pointer pr-10">
                                <option value="">- All Cities -</option>
                                {cities.map(city => (
                                    <option key={city.name} value={city.name.toLowerCase()}>{city.name}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Age */}
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">Age</label>
                        <div className="flex gap-2">
                            <input type="text" placeholder="18" className="w-full p-2.5 bg-white border border-zinc-200 rounded text-sm outline-none focus:border-[#d81b60]/50" />
                            <input type="text" placeholder="55" className="w-full p-2.5 bg-white border border-zinc-200 rounded text-sm outline-none focus:border-[#d81b60]/50" />
                        </div>
                    </div>

                    {/* Height */}
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">Height</label>
                        <div className="flex gap-2">
                            <input type="text" placeholder="from" className="w-full p-2.5 bg-white border border-zinc-200 rounded text-sm outline-none focus:border-[#d81b60]/50" />
                            <input type="text" placeholder="to" className="w-full p-2.5 bg-white border border-zinc-200 rounded text-sm outline-none focus:border-[#d81b60]/50" />
                            <div className="relative">
                                <select className="p-2.5 bg-white border border-zinc-200 rounded text-sm appearance-none outline-none pr-8">
                                    <option>Unit</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-zinc-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Nationality */}
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">Nationality</label>
                        <div className="relative">
                            <select className="w-full p-2.5 bg-white border border-zinc-200 rounded text-sm appearance-none outline-none focus:border-[#d81b60]/50">
                                <option>- Any -</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Sexuality */}
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">Sexuality</label>
                        <div className="relative">
                            <select className="w-full p-2.5 bg-white border border-zinc-200 rounded text-sm appearance-none outline-none focus:border-[#d81b60]/50">
                                <option>- Any -</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">Availability</label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <select className="w-full p-2.5 bg-white border border-zinc-200 rounded text-sm appearance-none outline-none">
                                    <option>- Any -</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
                            </div>
                            <div className="relative flex-1">
                                <select className="w-full p-2.5 bg-white border border-zinc-200 rounded text-sm appearance-none outline-none">
                                    <option>- Any -</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="flex items-end">
                        <button className="w-full h-[41px] bg-[#d81b60] hover:bg-[#c2185b] text-white font-bold uppercase tracking-widest rounded flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
                            <Search className="h-4 w-4" />
                            Search Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchFilter;
