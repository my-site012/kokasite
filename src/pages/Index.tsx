import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ListingSection from "@/components/ListingSection";
import Footer from "@/components/Footer";
import { indianCityListings, Listing } from "@/data/indianCityListings";
import { useWpListings } from "@/hooks/useWpContent";
import DynamicWpContent, { useThemeSettings } from "@/components/DynamicWpContent";
import { SITE_URL } from "@/utils/config";
import { ChevronRight } from "lucide-react";

const HomeSeoContent = lazy(() => import("@/components/HomeSeoContent"));

// Helper to shuffle array
const shuffle = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

// Static content for fallback
const allListingsStatic = Object.values(indianCityListings).flat();
const diamondStatic = shuffle(allListingsStatic.filter(l => l.tier === "diamond"));
const goldStatic = shuffle(allListingsStatic.filter(l => l.tier === "gold"));
const silverStatic = shuffle(allListingsStatic.filter(l => l.tier === "silver"));

const Index = () => {
  const { listings: wpListings } = useWpListings();
  const themeSettings = useThemeSettings();
  const [visibleCount, setVisibleCount] = useState(8);
  const [activeCategory, setActiveCategory] = useState<'call-girl' | 'massage'>('call-girl');

  const mapWpToListing = (wp: any): Listing => ({
    id: wp.id.toString(),
    name: wp.title.rendered,
    age: parseInt(wp.listing_age || "20"),
    city: wp.listing_city || "Mumbai",
    tier: (wp.listing_tier || "silver") as any,
    emoji: "👩",
    image: wp._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/placeholder.jpg",
    description: wp.excerpt.rendered.replace(/<[^>]*>?/gm, ''),
    pricing: { "1hour": parseInt(wp.listing_price || "3000"), currency: "₹" },
    verified: true
  });

  // Build final lists
  const diamondListings = wpListings.filter(l => l.listing_tier === 'diamond').map(mapWpToListing).concat(diamondStatic);
  const goldListings = wpListings.filter(l => l.listing_tier === 'gold').map(mapWpToListing).concat(goldStatic);
  const silverListings = wpListings.filter(l => l.listing_tier === 'silver').map(mapWpToListing).concat(silverStatic);

  const hasMore = visibleCount < diamondListings.length || visibleCount < goldListings.length || visibleCount < silverListings.length;

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        "url": SITE_URL,
        "name": "Koka Site",
        "description": "Independent Adult Classifieds & Body Massage Services Directory",
        "publisher": {
          "@id": `${SITE_URL}#organization`
        }
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        "name": "Koka Site",
        "url": SITE_URL,
        "logo": `${SITE_URL}logo.png`,
        "sameAs": [
          "https://twitter.com/kokasite"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_URL
          }
        ]
      }
    ]
  };

  const getCityUrl = (_countrySlug: string, stateSlug: string, citySlug: string) => {
    const prefix = activeCategory === 'call-girl' ? 'call-girls' : 'massage';
    return `/${prefix}/${stateSlug}/${citySlug}`;
  };

  return (
    <div className="min-h-screen bg-[#121214] text-gray-100 font-body relative overflow-x-hidden selection:bg-[#f4b827]/20 transition-colors duration-500">
      <SEO 
        title="Koka Site - Premium Call Girl & Massage Services Directory" 
        description="Book verified call girls, escorts and independent body massage services globally." 
        canonical={SITE_URL}
        schema={homeSchema}
      />
      <Header />
      
      {themeSettings?.home_template_id ? (
        <DynamicWpContent templateId={themeSettings.home_template_id} />
      ) : (
        <>
          <Hero />

          {/* ── Category Selector Tabs ── */}
          <section className="pt-24 pb-8 max-w-[1400px] mx-auto px-4 lg:px-12 relative z-10">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Find Your Perfect Companion or Service
              </h2>
              <p className="text-gray-400 max-w-lg text-sm">
                Select your desired category below to explore verified listings near your location.
              </p>
            </div>
            
            <div className="flex justify-center gap-4 max-w-md mx-auto p-1.5 bg-zinc-900 border border-zinc-800 rounded-full shadow-lg">
              <button
                onClick={() => setActiveCategory('call-girl')}
                className={`flex-1 py-3 px-6 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === 'call-girl'
                    ? 'bg-[#f4b827] text-black shadow-md shadow-[#f4b827]/25'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                💄 Call Girls / Escorts
              </button>
              <button
                onClick={() => setActiveCategory('massage')}
                className={`flex-1 py-3 px-6 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === 'massage'
                    ? 'bg-[#f4b827] text-black shadow-md shadow-[#f4b827]/25'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                💆‍♀️ Body Massage
              </button>
            </div>
          </section>

          {/* ── Top Featured Cities & Service Areas CTA ── */}
          <section className="py-12 bg-zinc-950/80 border-y border-zinc-900">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-12 relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    🗺️ Top Service Areas & Cities
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">Select a popular location or view all 1,200+ verified service areas in India.</p>
                </div>
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-md shadow-amber-400/10 shrink-0"
                >
                  <span>View All Service Areas</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 8-9 Top Cities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: "Mumbai", stateSlug: "maharashtra", citySlug: "mumbai" },
                  { name: "Delhi", stateSlug: "delhi-ncr", citySlug: "delhi" },
                  { name: "Bangalore", stateSlug: "karnataka", citySlug: "bengaluru" },
                  { name: "Goa", stateSlug: "goa", citySlug: "panaji" },
                  { name: "Pune", stateSlug: "maharashtra", citySlug: "pune" },
                  { name: "Hyderabad", stateSlug: "telangana", citySlug: "hyderabad" },
                  { name: "Kolkata", stateSlug: "west-bengal", citySlug: "kolkata" },
                  { name: "Chennai", stateSlug: "tamil-nadu", citySlug: "chennai" },
                  { name: "Jaipur", stateSlug: "rajasthan", citySlug: "jaipur" },
                ].map((city) => (
                  <Link
                    key={city.citySlug}
                    to={`/${activeCategory === 'call-girl' ? 'call-girls' : 'massage'}/${city.stateSlug}/${city.citySlug}`}
                    className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/60 hover:bg-zinc-900 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">
                        📍
                      </div>
                      <span className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        {city.name} {activeCategory === 'call-girl' ? 'Call Girls' : 'Massage'}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>

              {/* Bottom CTA Banner */}
              <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
                <Link
                  to="/service-areas"
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Looking for another city? Browse All 1,200+ Indian Service Areas</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>
          {/* ── Main Content Section ── */}
          <main className="relative z-10 pb-24 bg-zinc-950/20">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-12 pt-20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                <div className="bg-zinc-900/60 p-8 rounded-[32px] border border-zinc-800 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-[#f4b827] text-2xl mb-6">💎</div>
                  <h3 className="text-lg font-bold text-white mb-3">Diamond Collection</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Our most elite and verified companions. Exceptional service for the most discerning clients.</p>
                </div>
                <div className="bg-zinc-900/60 p-8 rounded-[32px] border border-zinc-800 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-[#f4b827] text-2xl mb-6">⭐</div>
                  <h3 className="text-lg font-bold text-white mb-3">Gold Exclusive</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Highly rated professional escorts and massage therapists with consistent positive feedback and proven quality.</p>
                </div>
                <div className="bg-zinc-900/60 p-8 rounded-[32px] border border-zinc-800 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-[#f4b827] text-2xl mb-6">✨</div>
                  <h3 className="text-lg font-bold text-white mb-3">Silver Directory</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">A diverse selection of independent companions offering high-quality intimate and massage experiences.</p>
                </div>
              </div>

              <div className="space-y-32">
                <ListingSection
                  title="India Diamond Elite"
                  listings={diamondListings.slice(0, visibleCount)}
                />

                <ListingSection
                  title="Shuffled Gold Selections"
                  listings={goldListings.slice(0, visibleCount)}
                />

                <ListingSection
                  title="Recent Silver Updates"
                  listings={silverListings.slice(0, visibleCount)}
                />
              </div>

              <section className="mt-32 p-10 lg:p-16 rounded-[40px] bg-gradient-to-br from-zinc-900 to-zinc-950 text-white relative overflow-hidden shadow-2xl border border-zinc-800">
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(244,184,39,0.05),transparent)] pointer-events-none" />
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                      <div>
                          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Our Commitment to <span className="text-[#f4b827]">Safety &amp; Transparency</span></h2>
                          <p className="text-gray-300 text-base mb-8 leading-relaxed">We provide a transparent, moderated platform for independent companion and massage classifieds across India, prioritizing user privacy and clear communication.</p>
                          <div className="grid grid-cols-2 gap-6">
                              <div>
                                  <div className="text-2xl font-bold text-[#f4b827] mb-1">Direct</div>
                                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Provider Contact</div>
                              </div>
                              <div>
                                  <div className="text-2xl font-bold text-[#f4b827] mb-1">Discreet</div>
                                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">User Privacy</div>
                              </div>
                          </div>
                      </div>
                      <div className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800">
                          <h3 className="text-lg font-bold mb-4">Platform Guidelines</h3>
                          <ul className="space-y-4">
                              {[
                                  "Independent advertisers and therapists",
                                  "Direct contact with zero middlemen",
                                  "Advisory against sending online advance fees",
                                  "Active ad moderation and reporting tools"
                              ].map(item => (
                                  <li key={item} className="flex items-start gap-3 text-sm text-gray-200">
                                      <span className="text-[#f4b827]">✓</span>
                                      {item}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </section>

              {hasMore && (
                <div className="mt-24 flex flex-col items-center justify-center gap-6 pb-20">
                  <p className="text-[#f4b827] text-sm font-medium tracking-widest uppercase">Continue your discovery</p>
                  <button 
                    onClick={() => setVisibleCount(v => v + 15)}
                    className="group relative bg-zinc-900 hover:bg-zinc-850 text-zinc-300 px-20 py-5 rounded-full text-[13px] font-bold uppercase tracking-[0.2em] transition-all border border-zinc-800 hover:border-[#f4b827] overflow-hidden shadow-xl"
                  >
                    <span className="relative z-10">Load More Listings</span>
                    <div className="absolute inset-0 bg-[#f4b827]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </button>
                </div>
              )}
            </div>
          </main>
        </>
      )}

      <Suspense fallback={null}>
        <HomeSeoContent />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
