import { Heart } from "lucide-react";

interface AdBannerProps {
    height?: string;
    label?: string;
}

const AdBanner = ({ height = "h-32", label = "Your Banner Here" }: AdBannerProps) => (
    <div className={`w-full ${height} bg-[#1a1a20] rounded-xl border border-white/5 flex flex-col items-center justify-center text-center p-4 hover:border-[#e91e63]/30 transition-all cursor-pointer group shadow-lg mb-4`}>
        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <Heart className="h-5 w-5 text-zinc-600 group-hover:text-[#e91e63]" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300">{label}</p>
        <p className="text-[9px] text-zinc-700 mt-1 uppercase font-bold">Contact Support</p>
    </div>
);

export default AdBanner;
