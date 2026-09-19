import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { worldCountries } from "@/data/worldCities";
import { SITE_URL } from "@/utils/config";

const SitemapDirectory: React.FC = () => {
    const pageTitle = "HTML Sitemap & Location Directory | Koka Site";
    const pageDescription = "Explore our full location directory of verified call girls, independent escorts, and body massage services across India and international cities.";
    const canonicalUrl = `${SITE_URL}sitemap-directory`;

    return (
        <div className="min-h-screen bg-[#121214] text-gray-200">
            <SEO title={pageTitle} description={pageDescription} canonical={canonicalUrl} />
            <Header />

            <main className="max-w-[1400px] mx-auto px-4 lg:px-12 pt-28 pb-20">
                <div className="mb-10 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
                        India HTML Sitemap & Location Directory
                    </h1>
                    <p className="text-gray-400 text-sm max-w-2xl">
                        Comprehensive index of all available states and cities in India for verified Call Girls, Escort Services, and Body Massage Therapies.
                    </p>
                </div>

                <div className="space-y-12">
                    {worldCountries.map((country) => (
                        <div key={country.slug} className="bg-zinc-900/40 p-6 lg:p-8 rounded-3xl border border-zinc-800 shadow-md">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-zinc-800 pb-3">
                                <span className="text-2xl">{country.emoji}</span>
                                <span>{country.name} Directory</span>
                            </h2>

                            <div className="space-y-8">
                                {country.regions.map((region) => (
                                    <div key={region.slug} className="space-y-4">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h3 className="text-md font-bold text-[#f4b827]">
                                                {region.name}
                                            </h3>
                                            <span className="text-xs text-zinc-500">•</span>
                                            <Link
                                                to={`/call-girls/${region.slug}`}
                                                className="text-xs text-amber-400 hover:underline font-medium"
                                            >
                                                {region.name} Call Girls
                                            </Link>
                                            <span className="text-xs text-zinc-500">•</span>
                                            <Link
                                                to={`/massage/${region.slug}`}
                                                className="text-xs text-emerald-400 hover:underline font-medium"
                                            >
                                                {region.name} Massage
                                            </Link>
                                        </div>

                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                                            {region.cities.map((city) => (
                                                <div key={city.slug} className="bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-850 hover:border-[#f4b827]/40 transition-all text-xs flex flex-col gap-1">
                                                    <span className="font-bold text-white">{city.name}</span>
                                                    <div className="flex items-center gap-2 text-[11px]">
                                                        <Link
                                                            to={`/call-girls/${region.slug}/${city.slug}`}
                                                            className="text-gray-400 hover:text-[#f4b827] hover:underline"
                                                        >
                                                            Escorts
                                                        </Link>
                                                        <span className="text-zinc-700">|</span>
                                                        <Link
                                                            to={`/massage/${region.slug}/${city.slug}`}
                                                            className="text-gray-400 hover:text-emerald-400 hover:underline"
                                                        >
                                                            Massage
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SitemapDirectory;
