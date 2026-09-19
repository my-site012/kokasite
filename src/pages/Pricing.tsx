import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Sparkles, Crown, Zap, ShieldCheck } from "lucide-react";
import { SITE_URL } from "@/utils/config";

const Pricing = () => {
    const plans = [
        {
            name: "Silver",
            price: "49€",
            period: "/month",
            icon: <Zap className="h-8 w-8 text-zinc-400" />,
            features: ["Basic Listing", "Verified Badge", "10 Photos", "Standard Support"],
            color: "border-zinc-200",
            button: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
        },
        {
            name: "Diamond",
            price: "199€",
            period: "/month",
            icon: <Crown className="h-10 w-10 text-[#d81b60] fill-[#d81b60]/10" />,
            features: [
                "Priority Placement",
                "Top Home Slot",
                "Gallery Slider",
                "Video Support",
                "WhatsApp Button",
                "24/7 VIP Support"
            ],
            color: "border-[#d81b60] shadow-xl",
            popular: true,
            button: "bg-[#d81b60] text-white hover:bg-[#c2185b] shadow-lg shadow-[#d81b60]/20"
        },
        {
            name: "Gold",
            price: "99€",
            period: "/month",
            icon: <Sparkles className="h-8 w-8 text-amber-500" />,
            features: ["Featured Listing", "Verified Badge", "20 Photos", "Social Links", "Priority Support"],
            color: "border-amber-200",
            button: "bg-amber-50 text-amber-700 hover:bg-amber-100"
        },
        {
            name: "PPC Boost",
            price: "1$",
            period: "/click",
            icon: <Zap className="h-8 w-8 text-blue-500" />,
            features: [
                "Instant Traffic Boost",
                "Pay Only for Clicks",
                "Top Row Visibility",
                "Real-time Analytics",
                "No Monthly Fees",
                "Budget Control"
            ],
            color: "border-blue-200 shadow-lg shadow-blue-500/5",
            button: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20"
        }
    ];

    const pricingUrl = `${SITE_URL.replace(/\/$/, "")}/pricing`;
    const pricingSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${pricingUrl}#webpage`,
                "url": pricingUrl,
                "name": "Advertiser Membership Plans & Pricing | Koka Site",
                "description": "Choose your activation plan to start receiving verified client calls and WhatsApp bookings on Koka Site."
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${pricingUrl}#breadcrumb`,
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
                        "name": "Pricing",
                        "item": pricingUrl
                    }
                ]
            },
            {
                "@type": "OfferCatalog",
                "@id": `${pricingUrl}#catalog`,
                "name": "Koka Site Advertising Plans",
                "itemListElement": plans.map((plan, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "Offer",
                        "name": plan.name,
                        "price": plan.price.replace(/[^0-9]/g, '') || "1000",
                        "priceCurrency": plan.price.includes('€') ? 'EUR' : 'INR',
                        "description": plan.features.join(", ")
                    }
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-zinc-900 font-body relative overflow-x-hidden">
            <SEO 
                title="Advertiser Pricing Plans & Packages | Koka Site" 
                description="Promote your independent escort profile or agency listings. Diamond, Gold, and Silver bump plans with 24/7 client traffic." 
                canonical={pricingUrl}
                schema={pricingSchema}
            />
            <Header />

            <main className="max-w-[1500px] mx-auto px-4 lg:px-8 py-20 pb-20">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d81b60]/5 border border-[#d81b60]/10 text-[#d81b60] text-xs font-bold uppercase tracking-widest mb-6">
                        <ShieldCheck className="w-4 h-4" /> Trusted by 10k+ Professionals
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-zinc-800 tracking-tight mb-6">
                        Choose Your <span className="text-[#d81b60]">Activation Plan</span>
                    </h1>
                    <p className="text-zinc-500 text-lg leading-relaxed">
                        To activate your account and start receiving clients, please choose one of our membership tiers or our performance-based PPC model.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 relative isolate">
                    {/* Decorative Background Blob */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d81b60]/5 rounded-full blur-[120px] pointer-events-none" />

                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative bg-white border-2 ${plan.color} rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-8px] group`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d81b60] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-20">
                                    Most Popular Choice
                                </div>
                            )}

                            <div className={`mb-8 p-6 rounded-2xl ${plan.popular ? 'bg-[#d81b60]/5' : (plan.name === 'PPC Boost' ? 'bg-blue-50' : 'bg-zinc-50')} transition-transform duration-500 group-hover:scale-110`}>
                                {plan.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-zinc-800 uppercase tracking-tight mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-5xl font-bold text-zinc-900 tracking-tighter">{plan.price}</span>
                                <span className="text-zinc-400 font-semibold uppercase text-[11px] tracking-widest">{plan.period}</span>
                            </div>

                            <div className="w-full space-y-4 mb-12 text-left">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
                                            <Check className="h-3.5 w-3.5 text-[#d81b60]" />
                                        </div>
                                        <span className="text-zinc-600 text-sm font-medium tracking-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/create-profile"
                                className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-[12px] transition-all mt-auto flex items-center justify-center gap-2 ${plan.button}`}
                            >
                                Select {plan.name}
                            </Link>

                            <p className="mt-4 text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                                Secure Payment with Stripe/Paypal
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-zinc-800 mb-4">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
                        <div>
                            <h4 className="font-bold text-zinc-800 mb-2">Can I change plans later?</h4>
                            <p className="text-sm text-zinc-500">Yes, you can upgrade or downgrade your plan at any time through your dashboard. Adjustments will take effect on your next billing cycle.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-zinc-800 mb-2">What payment methods are supported?</h4>
                            <p className="text-sm text-zinc-500">We support all major Credit Cards, PayPal, and Bitcoin for 100% discreet and secure transactions.</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Pricing;
