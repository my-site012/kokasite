import SEO from "@/components/SEO";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
    Heart, Mail, Lock, User, Building, UserCircle2, Eye, EyeOff,
    MapPin, ArrowRight, CheckCircle, Phone, Calendar,
    ArrowLeft, Check, Sparkles
} from "lucide-react";
import { SITE_URL } from "@/utils/config";

type AccountType = "escort" | "agency" | "member";

const roleCards = [
    {
        id: "escort" as AccountType,
        badge: "HOT",
        title: "Independent Escort",
        subtitle: "List your personal profile",
        image: "/images/portrait_neon_1772046577948.png",
        color: "from-[#d81b60] to-[#ec407a]",
        accentText: "text-[#d81b60]",
        features: ["Premium Profile", "Direct Contacts", "Photo Gallery", "Direct Clicks"],
    },
    {
        id: "agency" as AccountType,
        badge: "TOP",
        title: "Escort Agency",
        subtitle: "Manage multiple models",
        image: "/images/portrait_agency.png",
        color: "from-blue-600 to-cyan-500",
        accentText: "text-blue-600",
        features: ["Multiple Models", "Agency Dashboard", "Featured Slots", "PPC Options"],
    },
    {
        id: "member" as AccountType,
        badge: "FREE",
        title: "Regular Member",
        subtitle: "Browse & connect",
        image: "/images/portrait_purple_1772046877354.png",
        color: "from-purple-600 to-pink-500",
        accentText: "text-purple-600",
        features: ["Access all profiles", "Save Favorites", "Private Chat", "Review System"],
    },
];

interface FormField {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    icon: typeof User;
    required?: boolean;
}

const fieldsByType: Record<AccountType, FormField[]> = {
    escort: [
        { id: "stageName", label: "Stage Name", type: "text", placeholder: "Your display name", icon: UserCircle2, required: true },
        { id: "age", label: "Age", type: "number", placeholder: "18 to 55 years", icon: Calendar, required: true },
        { id: "city", label: "City", type: "text", placeholder: "Your primary location", icon: MapPin, required: true },
        { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com", icon: Mail, required: true },
        { id: "password", label: "Password", type: "password", placeholder: "Choose a strong password", icon: Lock, required: true },
        { id: "confirm", label: "Confirm Password", type: "password", placeholder: "Repeat password", icon: Lock, required: true },
    ],
    agency: [
        { id: "agencyName", label: "Agency Name", type: "text", placeholder: "Agency display name", icon: Building, required: true },
        { id: "contactName", label: "Owner Name", type: "text", placeholder: "Full name", icon: User, required: true },
        { id: "phone", label: "Business Phone", type: "tel", placeholder: "+33 6 ...", icon: Phone, required: true },
        { id: "email", label: "Agency Email", type: "email", placeholder: "agency@example.com", icon: Mail, required: true },
        { id: "password", label: "Password", type: "password", placeholder: "Min. 8 characters", icon: Lock, required: true },
        { id: "confirm", label: "Confirm Password", type: "password", placeholder: "Repeat password", icon: Lock, required: true },
    ],
    member: [
        { id: "username", label: "Username", type: "text", placeholder: "Unique username", icon: User, required: true },
        { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com", icon: Mail, required: true },
        { id: "password", label: "Password", type: "password", placeholder: "Password", icon: Lock, required: true },
        { id: "confirm", label: "Confirm Password", type: "password", placeholder: "Confirm", icon: Lock, required: true },
    ],
};

const Register = () => {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [accountType, setAccountType] = useState<AccountType>("escort");
    const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({});
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    const togglePassword = (id: string) =>
        setShowPasswords(prev => ({ ...prev, [id]: !prev[id] }));

    const handleCardSelect = (roleId: AccountType) => {
        setAccountType(roleId);
        setStep(2);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStep(3);
        const destination = accountType === "member" ? "/dashboard" : "/pricing";
        setTimeout(() => navigate(destination), 2500);
    };

    const registerUrl = `${SITE_URL.replace(/\/$/, "")}/register`;
    const registerSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${registerUrl}#webpage`,
                "url": registerUrl,
                "name": "Register Account | Koka Site",
                "description": "Create an independent escort, agency, or client account on Koka Site."
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${registerUrl}#breadcrumb`,
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
                        "name": "Register",
                        "item": registerUrl
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col relative overflow-hidden font-sans">
            <SEO 
                title="Create Account & Register | Koka Site" 
                description="Register your independent profile or agency account on Koka Site." 
                canonical={registerUrl}
                schema={registerSchema}
                noindex={true} 
            />

            {/* Ambient Background */}
            <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#d81b60]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <header className="w-full z-20 p-6 flex justify-between items-center bg-white border-b border-zinc-100">
                <Link to="/" className="flex items-center gap-2 group">
                    <Heart className="h-6 w-6 text-[#d81b60] fill-[#d81b60]/10" />
                    <h1 className="text-xl font-bold tracking-tight text-zinc-800 uppercase italic">Koka Site</h1>
                </Link>
                <Link to="/login" className="flex items-center gap-1.5 text-zinc-400 hover:text-[#d81b60] transition-colors text-sm font-bold">
                    Already a member? Sign in
                </Link>
            </header>

            <main className="flex-1 flex flex-col items-center p-6 py-12 lg:py-16 z-10 w-full max-w-[1400px] mx-auto">
                {step === 1 && (
                    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center mb-12 max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-100 text-[#d81b60] text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                                <Sparkles className="w-4 h-4" /> Start Your Journey Today
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
                                Post Your <span className="text-[#d81b60]">Ad Now</span>
                            </h2>
                            <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                                Choose your ad type to get started. Reach thousands of clients instantly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {roleCards.map((role) => (
                                <div
                                    key={role.id}
                                    className="group relative bg-white border border-zinc-100 rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl shadow-lg shadow-zinc-200/50"
                                    onClick={() => handleCardSelect(role.id)}
                                >
                                    <div className="relative h-64 lg:h-80 overflow-hidden">
                                        <img
                                            src={role.image}
                                            alt={role.title}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                                        <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest text-white shadow-lg bg-gradient-to-r ${role.color}`}>
                                            {role.badge}
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-[#d81b60] transition-colors">
                                                {role.title}
                                            </h3>
                                            <p className="text-zinc-400 text-sm font-medium mt-1">
                                                {role.subtitle}
                                            </p>
                                        </div>

                                        <ul className="space-y-3">
                                            {role.features.map((f) => (
                                                <li key={f} className="flex items-center gap-3 text-zinc-500 text-sm font-medium">
                                                    <div className="h-5 w-5 rounded-full bg-zinc-50 flex items-center justify-center shrink-0 border border-zinc-100">
                                                        <Check className={`w-3 h-3 ${role.accentText}`} />
                                                    </div>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>

                                        <button className={`w-full py-4 rounded-2xl bg-zinc-50 text-zinc-900 border border-zinc-100 group-hover:bg-[#d81b60] group-hover:text-white group-hover:border-transparent font-bold text-sm uppercase tracking-widest transition-all`}>
                                            Choose Plan
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="w-full max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white border border-zinc-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden">
                            <div className="flex items-center gap-4 mb-10 pb-8 border-b border-zinc-50">
                                <button onClick={() => setStep(1)} className="h-10 w-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-all">
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <div className="flex-1">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#d81b60]">Step 02/03</span>
                                    <h2 className="text-2xl font-bold text-zinc-900">
                                        Account Details
                                    </h2>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {fieldsByType[accountType].map((field) => {
                                    const isPassword = field.type === "password";
                                    const isVisible = showPasswords[field.id];
                                    const inputType = isPassword ? (isVisible ? "text" : "password") : field.type;

                                    return (
                                        <div key={field.id} className="space-y-2">
                                            <label htmlFor={field.id} className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">
                                                {field.label} {field.required && <span className="text-[#d81b60]">*</span>}
                                            </label>
                                            <div className="relative group">
                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-[#d81b60] transition-colors pointer-events-none">
                                                    <field.icon className="w-4 h-4" />
                                                </div>
                                                <input
                                                    type={inputType}
                                                    id={field.id}
                                                    name={field.id}
                                                    required={field.required}
                                                    placeholder={field.placeholder}
                                                    min={field.id === "age" ? "18" : undefined}
                                                    max={field.id === "age" ? "55" : undefined}
                                                    className="w-full h-14 pl-12 pr-12 rounded-2xl bg-zinc-50 border-2 border-zinc-50 focus:bg-white focus:border-[#d81b60]/20 text-zinc-900 text-sm placeholder:text-zinc-300 outline-none transition-all"
                                                />
                                                {isPassword && (
                                                    <button type="button" onClick={() => togglePassword(field.id)} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-zinc-600">
                                                        {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}

                                <label className="flex items-start gap-4 cursor-pointer group py-4">
                                    <div
                                        onClick={() => setAgreed(!agreed)}
                                        className={`w-6 h-6 rounded-lg border-2 transition-all shrink-0 mt-0.5 flex items-center justify-center ${agreed ? "bg-[#d81b60] border-[#d81b60]" : "border-zinc-100 bg-zinc-50"}`}
                                    >
                                        {agreed && <Check className="w-4 h-4 text-white" />}
                                    </div>
                                    <span className="text-sm text-zinc-500 font-medium leading-relaxed">
                                        I confirm I am 18+ and I agree to the <a href="#" className="text-zinc-900 font-bold hover:text-[#d81b60]">Terms</a> & <a href="#" className="text-zinc-900 font-bold hover:text-[#d81b60]">Privacy Policy</a>.
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    disabled={!agreed}
                                    className={`w-full py-5 rounded-2xl font-bold text-white text-base shadow-xl flex items-center justify-center gap-3 transition-all ${agreed ? "bg-[#d81b60] hover:bg-[#c2185b] shadow-[#d81b60]/20" : "bg-zinc-200 text-zinc-400 cursor-not-allowed shadow-none"}`}
                                >
                                    Create Account <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="text-center py-20 w-full max-w-lg space-y-10 animate-in fade-in zoom-in-95 duration-500">
                        <div className="relative mx-auto w-32 h-32">
                            <div className="absolute inset-0 bg-[#d81b60]/10 rounded-full blur-3xl" />
                            <div className="relative w-32 h-32 bg-white border border-zinc-100 shadow-2xl rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle className="w-16 h-16 text-[#d81b60]" strokeWidth={1.5} />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">Success! 🥂</h2>
                            <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                                Your account is ready. <br />
                                {accountType !== "member" ? "Now let's choose a plan to activate your visibility..." : "Redirecting to your dashboard..."}
                            </p>
                        </div>
                        <div className="w-24 h-1.5 bg-zinc-100 rounded-full mx-auto overflow-hidden">
                            <div className="h-full bg-[#d81b60] rounded-full animate-progress" />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Register;
