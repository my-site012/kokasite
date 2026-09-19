import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reviews } from "@/data/reviews";
import { Star, MessageSquare, Calendar, User, ShieldCheck } from "lucide-react";

import { SITE_URL } from "@/utils/config";

const Reviews = () => {
    const reviewsUrl = `${SITE_URL.replace(/\/$/, "")}/reviews`;
    const reviewsSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${reviewsUrl}#webpage`,
                "url": reviewsUrl,
                "name": "Verified User Reviews & Ratings | Koka Site",
                "description": "Read authentic reviews and ratings from genuine clients about independent escorts and massage therapists."
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${reviewsUrl}#breadcrumb`,
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
                        "name": "Reviews",
                        "item": reviewsUrl
                    }
                ]
            },
            {
                "@type": "ItemList",
                "@id": `${reviewsUrl}#reviews`,
                "name": "User Reviews",
                "itemListElement": reviews.map((review, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "Review",
                        "author": {
                            "@type": "Person",
                            "name": review.reviewerName
                        },
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": review.rating,
                            "bestRating": "5"
                        },
                        "reviewBody": review.comment,
                        "datePublished": review.date
                    }
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-zinc-900 font-body relative overflow-x-hidden">
            

            <SEO 
                title="Client Reviews & Ratings | Koka Site" 
                description="Read genuine feedback and client reviews for independent companions across major cities." 
                canonical={reviewsUrl}
                schema={reviewsSchema}
            />

            <main className="max-w-[1200px] mx-auto px-4 lg:px-8 py-16">

                {/* Reviews Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
                        <ShieldCheck className="w-4 h-4" /> 100% Verified Feedback
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-zinc-800 tracking-tight mb-4">
                        Community <span className="text-[#d81b60]">Reviews</span>
                    </h1>
                    <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                        Read authentic experiences from real users. Our community-driven feedback system ensures transparency and quality.
                    </p>
                </div>

                {/* Reviews List */}
                <div className="space-y-8 max-w-4xl mx-auto mb-24">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 lg:p-10 shadow-xl shadow-zinc-200/40 relative overflow-hidden group hover:border-[#d81b60]/20 transition-all">
                            <div className="flex flex-col md:flex-row gap-10">
                                {/* Model Image / Label */}
                                <div className="md:w-[200px] shrink-0">
                                    <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-100 relative group-hover:shadow-lg transition-all duration-700">
                                        <img src={review.listingImage} alt={review.listingName} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                                            <span className="text-xs font-bold text-white uppercase tracking-widest">{review.listingName}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Review Content */}
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-zinc-50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 text-[#d81b60]">
                                                <User className="h-5 w-5" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-black text-zinc-800 uppercase tracking-tight">{review.reviewerName}</span>
                                                <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Verified Visit</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 bg-[#d81b60]/5 px-3 py-1.5 rounded-full border border-[#d81b60]/10">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`h-3 w-3 ${i < review.rating ? "text-[#d81b60] fill-[#d81b60]" : "text-zinc-200 fill-zinc-200"}`} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">
                                        <span className="flex items-center gap-2 bg-zinc-50 px-3 py-1.5 rounded-full"><Calendar className="h-3.5 w-3.5 text-zinc-400" /> {review.date}</span>
                                        <span className="flex items-center gap-2 bg-zinc-50 px-3 py-1.5 rounded-full"><MessageSquare className="h-3.5 w-3.5 text-zinc-400" /> Feedback</span>
                                    </div>

                                    <p className="text-zinc-500 text-lg leading-[1.8] italic relative pl-6 border-l-4 border-[#d81b60]/20 font-medium tracking-tight">
                                        "{review.comment}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Footer />
            </main>
        </div>
    );
};

export default Reviews;

