import SEO from "@/components/SEO";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { infoPages } from "@/data/seoContent";
import { fetchPageBySlug } from "@/services/wordpress";
import { SITE_URL } from "@/utils/config";

const InfoPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [wpPage, setWpPage] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const fallbackData = slug && infoPages[slug] ? infoPages[slug] : null;

    useEffect(() => {
        const loadPage = async () => {
            if (!slug) return;
            setLoading(true);
            try {
                const page = await fetchPageBySlug(slug);
                setWpPage(page);
            } catch (error) {
                console.error("Error fetching page from WordPress:", error);
            } finally {
                setLoading(false);
            }
        };
        loadPage();
    }, [slug]);

    const displayData = wpPage ? {
        title: wpPage.title.rendered,
        content: wpPage.content.rendered,
        metaDesc: wpPage.excerpt?.rendered?.replace(/<[^>]*>/g, '') || ""
    } : fallbackData;

    const infoUrl = `${SITE_URL.replace(/\/$/, "")}/info/${slug || ""}`;
    const infoSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "AboutPage",
                "@id": `${infoUrl}#about`,
                "url": infoUrl,
                "name": displayData?.title || "Information | Koka Site",
                "description": displayData?.metaDesc || "Koka Site information and policies."
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${infoUrl}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": SITE_URL
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": displayData?.title || "Info",
                        "item": infoUrl
                    }
                ]
            }
        ]
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#07070a] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#e91e63] border-t-transparent animate-spin rounded-full"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#07070a] text-zinc-100 font-body relative overflow-x-hidden">
            <SEO 
                title={displayData?.title ? `${displayData.title} | Koka Site` : "Information | Koka Site"} 
                description={displayData?.metaDesc || "Information and policies on Koka Site."} 
                canonical={infoUrl}
                schema={infoSchema}
            />
            <Header />

            <div className="max-w-[1000px] mx-auto px-4 lg:px-6 min-h-screen flex flex-col pt-24 pb-16">
                <main className="flex-1 w-full py-8 md:py-16">
                    {!displayData ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                            <p className="text-zinc-400 mb-8">The legal or info page you're looking for doesn't exist.</p>
                            <Link to="/" className="bg-[#e91e63] text-white px-6 py-3 rounded-full font-bold hover:bg-[#ff4081] transition-colors">
                                Go Home
                            </Link>
                        </div>
                    ) : (
                        <div className="bg-[#111116] border border-white/5 rounded-2xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                            <h1 className="text-3xl md:text-4xl font-sans font-black text-white mb-8 border-b border-white/5 pb-6 uppercase tracking-tighter">{displayData.title}</h1>

                            <div
                                className="prose prose-invert prose-red max-w-none 
                                    prose-headings:font-sans prose-headings:font-black prose-headings:text-white uppercase prose-headings:tracking-tighter
                                    prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-0
                                    prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:mb-6 prose-p:font-bold
                                    prose-ul:text-zinc-400 prose-li:mb-2
                                    prose-strong:text-zinc-200"
                                dangerouslySetInnerHTML={{
                                    __html: wpPage
                                        ? displayData.content
                                        : displayData.content.replace(/\n\n/g, '<br/><br/>').replace(/## (.*)/g, '<h2>$1</h2>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                }}
                            />
                        </div>
                    )}
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default InfoPage;
