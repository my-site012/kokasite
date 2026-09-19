"use client";
import { useNavigate } from "react-router-dom";
import type { Listing } from "@/data/listings";
import { ShieldCheck, Crown, Phone, MapPin, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

import { SITE_URL } from "@/utils/config";
import { useSettings, getRotatedWhatsappNumber } from "@/context/SettingsContext";

// Use image path directly for local /models/ images
function resolveImage(path: string): string {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/")) return path;
  return `/${path}`;
}

// Sensual position pool
const sensualPositions = [
  { name: "Padmasana (Lotus)", desc: "We intertwine like petals — seated face to face, legs locked, breathing as one. Slow, deep, and incredibly intimate." },
  { name: "Tripadam (Tripod)", desc: "Standing against a wall with one leg lifted — passionate, athletic, and deeply penetrating." },
  { name: "Viparita Rati (Reverse)", desc: "I take full control on top, moving in circles and waves. The ancient art of reversed pleasure — pure ecstasy for both of us." },
  { name: "Janukurpara (Knee & Elbow)", desc: "Face down, arched back, giving you deepest access. Primal, animalistic, and impossibly pleasurable." },
  { name: "Sthitarata (Standing Congress)", desc: "Face to face standing, lifting and pressing — a passionate embrace filled with power and heat." },
  { name: "Dhenuka (Cow Position)", desc: "On all fours — offering maximum depth and wild pleasure." },
  { name: "Utthita (The Raised)", desc: "Legs raised high on your shoulders — deep penetration while gazing into each other's eyes. Intense and beautiful." },
  { name: "Yugmapada (Both Legs Up)", desc: "Both legs pressed together and lifted — tight, incredibly deep, and unforgettably satisfying." },
  { name: "Purushayita (Woman on Top)", desc: "I ride you slowly then wildly, controlling every sensation — the classic woman-dominant position." },
  { name: "Aibha (The Elephant)", desc: "You take me from behind while I lie flat — full body contact, deep pleasure, ancient and raw." },
  { name: "Markata (The Monkey)", desc: "Adventurous, playful, and acrobatic — I wrap around you in a way that creates unbelievable friction and depth." },
  { name: "Sammukha (Facing)", desc: "Missionary but elevated — hips tilted, synchronized breathing, eye contact creating the deepest emotional and physical connection." },
];

function hashCode(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

// Deterministic pick of 3 sensual positions for a given model
function getPositionsForProfile(name: string, city: string) {
  const seed = hashCode(name + city);
  return [
    sensualPositions[seed % sensualPositions.length],
    sensualPositions[(seed + 4) % sensualPositions.length],
    sensualPositions[(seed + 8) % sensualPositions.length],
  ];
}

// Generate a rich ~500-word explicit description
import { generateUltraLongProfileDesc, generateShortExoticSnippet } from "@/utils/textGenerator";
export function generateRichDescription(listing: Listing): string {
  const name = listing.name;
  const city = listing.city.split(" –")[0].split(" -")[0];
  const age = listing.age || 22;
  const svcs = listing.services || [];
  const serviceText = svcs.slice(0, 5).join(", ");
  const positions = getPositionsForProfile(name, city);

  const baseDesc = `Hey there 💋 I'm ${name}, a passionate and sensual ${age}-year-old call girl here in ${city}. If you've been searching for a companion who goes beyond the ordinary — someone who truly knows the art of pleasure — then you've found exactly who you need.

I'm not just a pretty face. I am deeply versed in the ancient Tantric arts and the secrets of deep intimacy. Every session with me is a curated journey through pleasure, not just a meeting. I believe that true satisfaction is an art form, and I have mastered it completely.

💋 My Services: ${serviceText} — performed with passion, patience, and absolute dedication to your pleasure.

🔥 Special Erotic Arts — My Three Signature Positions:

1. ${positions[0].name}: ${positions[0].desc}

2. ${positions[1].name}: ${positions[1].desc}

3. ${positions[2].name}: ${positions[2].desc}

Each of these is performed with full spiritual and physical intention — slow breath, full body contact, and a connection that goes far beyond the physical. When we explore these positions together, you won't just feel pleasure — you'll feel alive.

I am available for Incall and Outcall sessions across ${city}. For Incall, I host at my private, clean, and discreet space. For Outcall, I visit your hotel or home — always on time and always looking stunning.

My photos are 100% real. No fake pictures, no catfishing. When you meet me, you will see exactly the woman in these photos — and trust me, I look even better in person. I'm always perfectly groomed, fragrant, and dressed to make your heart race.

Bookings are by appointment. First-time clients are welcome — please introduce yourself politely via WhatsApp. I value gentlemen who respect my time, and I reward that respect with an unforgettable experience. Starting at ₹${(listing.pricing?.["1hour"] || 5000).toLocaleString()}/hr.

Don't wait. In ${city}, pleasure is just one call away. 💋`;

  return generateUltraLongProfileDesc(name, city, age, baseDesc);
}

interface ListingCardProps {
  listing: Listing;
  layout?: "vertical" | "horizontal";
  hideLocation?: boolean;
}

const ListingCard = ({ listing, layout = "horizontal", hideLocation = false }: ListingCardProps) => {
    const cityShort = listing.city?.split(" –")[0].split(" -")[0] || "";
  const router = useNavigate();
  const { settings } = useSettings();

  const snippet = generateShortExoticSnippet(listing.name, cityShort);

  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        router(`/profile/${listing.id}`);
      }}
      className="group cursor-pointer flex flex-col sm:flex-row bg-white border border-pink-100 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-pink-100/60 hover:border-pink-200 transition-all duration-300 w-full mb-4"
    >
      {/* Image section */}
      <div 
        className="relative w-full sm:w-[260px] h-[180px] sm:h-[260px] shrink-0 bg-zinc-50 overflow-hidden select-none"
        onContextMenu={(e) => e.preventDefault()}
      >
        {listing.image ? (
          <>
            <img
              src={resolveImage(listing.image)}
              alt={`${listing.name} Call Girl in ${cityShort}`}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, 260px"
              className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
              onDragStart={(e) => e.preventDefault()}
            />
            {/* Verified Ribbon - Top Right Corner */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden z-10 pointer-events-none">
              <div className="absolute top-4 -right-5 bg-green-500 text-white text-[9px] font-black uppercase tracking-wider py-1 w-24 text-center rotate-45 shadow-md">
                ✓ Verified
              </div>
            </div>
            {/* Watermark - Header Logo Style */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none z-10 flex items-center gap-1.5 bg-white/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/60">
              <div className="flex items-center justify-center w-5 h-5 rounded-md bg-pink-100/80 border border-pink-300/60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 h-3 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <span className="text-[11px] font-black tracking-tight text-gray-800/80 uppercase">KO<span className="text-pink-500">KA</span></span>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-pink-300 text-sm">Photo</div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 flex flex-col flex-1 bg-white">
        {/* Title Row - Red and Bold as per Request */}
        <h2 className="text-[#D91E18] font-black text-[15px] sm:text-[17px] leading-snug mb-2.5">
          {snippet.title}
        </h2>

        <p className="text-gray-900 font-medium text-[14px] sm:text-[15px] leading-snug mb-4">
          {snippet.desc}
        </p>

        {/* Bottom Details List */}
        <div className="flex flex-col gap-1.5 mt-auto">
          <div className="flex items-center gap-2 text-gray-700 font-bold text-[13px]">
            <span>👩‍🦳</span> {listing.age || 22} Years Old
          </div>
          {!hideLocation && (
            <div className="flex items-center gap-2 text-black font-bold text-[13px]">
              <MapPin className="w-4 h-4 text-pink-500" /> {cityShort}
            </div>
          )}
        </div>

        {/* WhatsApp & Call Buttons */}
        <div className="flex gap-2 mt-4" onClick={e => e.stopPropagation()}>
          <a
            onClick={() => {
                fetch('/api/clicks', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        adId: listing.id, 
                        adName: listing.name, 
                        adCity: listing.city,
                        url: `${SITE_URL}profile/${listing.id}`
                    })
                }).catch(err => console.error("Tracking Error:", err));
            }}
            href={`https://wa.me/${listing.contactWhatsapp || getRotatedWhatsappNumber(settings, listing.id, listing.id?.toLowerCase().includes('boy') || listing.name?.toLowerCase().includes('boy'))}?text=${encodeURIComponent(`I need a call girl. Can you send me a photo? Location: ${listing.city}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#25D366] hover:bg-[#1da851] text-white text-[13px] font-bold rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href={`tel:${listing.contactPhone || listing.contactWhatsapp || settings.phoneNumber}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-[13px] font-bold rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
