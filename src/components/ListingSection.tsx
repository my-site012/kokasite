"use client";
import { Link } from "react-router-dom";
import type { Listing } from "@/data/listings";
import ListingCard from "./ListingCard";

import { ArrowRight, Gem, Star, Award, Flame } from "lucide-react";

interface ListingSectionProps {
  title: string;
  subtitle?: string;
  icon?: string;
  listings: Listing[];
  hideLocation?: boolean;
}

const tierIconMap: Record<string, { icon: React.ReactNode; accent: string; borderGrad: string }> = {
  "Diamond Collections": {
    icon: <Gem className="w-5 h-5 text-blue-400" />,
    accent: "text-blue-400",
    borderGrad: "from-blue-500/30 to-transparent",
  },
  "Gold Exclusive": {
    icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400/30" />,
    accent: "text-amber-400",
    borderGrad: "from-amber-500/30 to-transparent",
  },
  "Silver Directory": {
    icon: <Award className="w-5 h-5 text-gray-400" />,
    accent: "text-gray-400",
    borderGrad: "from-gray-400/30 to-transparent",
  },
};

const ListingSection = ({ title, subtitle, icon, listings, hideLocation = false }: ListingSectionProps) => {
  if (listings.length === 0) return null;

  const meta = tierIconMap[title];

  return (
    <section>
      {/* Section Header */}
      <div className="flex items-end justify-between mb-8 pb-5 border-b border-pink-100 relative">
        {/* Gradient underline accent */}
        {meta && (
          <div className={`absolute bottom-0 left-0 w-48 h-[1px] bg-gradient-to-r ${meta.borderGrad}`} />
        )}

        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center">
            {icon ? (
              <span className="text-xl">{icon}</span>
            ) : (
              meta?.icon ?? <Flame className="w-5 h-5 text-primary" />
            )}
          </div>

          <div>
            <h2 className={`font-display text-[20px] font-bold tracking-tight ${meta?.accent ?? "text-primary"}`}>
              {title}
            </h2>
            <p className="text-pink-400 text-[11px] mt-0.5 uppercase tracking-[0.12em]">
              {subtitle ?? `${listings.length} exclusive profiles`}
            </p>
          </div>
        </div>

        <Link
          to="/search"
          className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500 hover:text-pink-600 transition-colors border border-pink-200 hover:border-pink-400 px-4 py-2 rounded-full bg-pink-50 hover:bg-pink-100"
        >
          View All
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Cards List — 1 col */}
      <div className="flex flex-col gap-4 max-w-5xl mx-auto w-full">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} layout="horizontal" hideLocation={hideLocation} />
        ))}
      </div>
    </section>
  );
};

export default ListingSection;
