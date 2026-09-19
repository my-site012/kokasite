import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { worldCountries } from "@/data/worldCities";
import { Search, MapPin, ChevronRight, Sparkles } from "lucide-react";
import { SITE_URL } from "@/utils/config";

const ServiceAreas: React.FC = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<'call-girl' | 'massage'>('call-girl');

  const indiaData = useMemo(() => {
    return worldCountries.find((c) => c.slug === "india") || worldCountries[0];
  }, []);

  const filteredRegions = useMemo(() => {
    if (!indiaData) return [];
    const query = search.trim().toLowerCase();
    if (!query) return indiaData.regions;

    return indiaData.regions
      .map((region) => {
        const matchesState = region.name.toLowerCase().includes(query);
        const filteredCities = region.cities.filter(
          (c) => c.name.toLowerCase().includes(query) || matchesState
        );
        return {
          ...region,
          cities: filteredCities,
        };
      })
      .filter((region) => region.cities.length > 0);
  }, [indiaData, search]);

  const totalCitiesCount = useMemo(() => {
    if (!indiaData) return 0;
    return indiaData.regions.reduce((acc, r) => acc + r.cities.length, 0);
  }, [indiaData]);

  const canonicalUrl = `${SITE_URL.replace(/\/$/, "")}/service-areas`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "DirectoryPage",
    "name": "Service Areas - India Escort & Massage Directory",
    "description": "Browse all 1,200+ verified service areas and cities in India for independent call girls, escorts, and body massage services.",
    "url": canonicalUrl,
  };

  const categoryLabel = activeCategory === 'call-girl' ? 'Call Girls' : 'Massage';
  const prefix = activeCategory === 'call-girl' ? 'call-girls' : 'massage';

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <SEO
        title={`Service Areas (${totalCitiesCount}+ Indian Cities) | Koka Site`}
        description={`Explore all ${totalCitiesCount}+ Indian service areas by city and state. Verified independent call girls, escorts, and body massage services.`}
        canonical={canonicalUrl}
        schema={serviceSchema}
      />
      <Header />

      <main className="pt-24 pb-20 max-w-[1400px] mx-auto px-4 lg:px-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-zinc-600" />
          <span className="text-amber-400 font-medium">Service Areas</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Coverage Across All Indian States</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Service Areas Directory
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Browse verified independent companions and wellness services across all <strong className="text-white">{totalCitiesCount}+ cities</strong> in India. Select a city below to view local listings.
          </p>
        </div>

        {/* Controls: Category Toggle & City Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800">
          {/* Category Toggle */}
          <div className="flex bg-zinc-950 p-1 rounded-xl border border-zinc-800 w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory('call-girl')}
              className={`flex-1 sm:flex-none py-2 px-5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'call-girl'
                  ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              💄 Call Girls
            </button>
            <button
              onClick={() => setActiveCategory('massage')}
              className={`flex-1 sm:flex-none py-2 px-5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'massage'
                  ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              💆‍♀️ Body Massage
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search any city or state..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400/50 transition-colors"
            />
          </div>
        </div>

        {/* Cities Grid by Region */}
        <div className="space-y-8">
          {filteredRegions.length === 0 ? (
            <div className="text-center py-16 bg-zinc-900/30 rounded-2xl border border-zinc-800">
              <MapPin className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">No matching service areas found</h3>
              <p className="text-zinc-500 text-xs">Try searching for a different city or state name.</p>
            </div>
          ) : (
            filteredRegions.map((region) => (
              <div
                key={region.slug}
                className="bg-zinc-900/40 rounded-2xl border border-zinc-800/80 p-5 sm:p-6 transition-all hover:border-zinc-700/80"
              >
                {/* State Title */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                  <h2 className="text-base sm:text-lg font-bold text-amber-400 tracking-wide flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{region.name}</span>
                  </h2>
                  <span className="text-xs text-zinc-500 font-mono bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
                    {region.cities.length} {region.cities.length === 1 ? 'City' : 'Cities'}
                  </span>
                </div>

                {/* Cities Formatted as "[City Name] Call Girls" */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                  {region.cities.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/${prefix}/${region.slug}/${city.slug}`}
                      className="group p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 hover:border-amber-400/50 hover:bg-amber-400/5 transition-all text-left flex items-center justify-between"
                    >
                      <span className="text-xs text-zinc-300 group-hover:text-amber-300 font-medium truncate">
                        {city.name} {categoryLabel}
                      </span>
                      <ChevronRight className="w-3 h-3 text-zinc-600 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5 shrink-0 ml-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceAreas;
