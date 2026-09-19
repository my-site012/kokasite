import SEO from "@/components/SEO";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

import {
    Camera, X, Plus, ChevronRight, ChevronLeft,
    User, Check, DollarSign, Phone, Clock,
    CheckCircle, Heart as HeartIcon, Sparkles
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/utils/config";

const ALL_SERVICES = [
    "GFE (Girlfriend Experience)", "Massage sensoriel", "69", "Anal (active)", "Anal (passive)",
    "BDSM (soft)", "BDSM (hard)", "Bondage", "Domination (soft)", "Domination (hard)",
    "Submission / slave", "Lingerie show", "Strip-tease", "To kiss", "Kamasutra",
    "Foot Dynamics", "Role-playing games", "Sex in different positions", "Masturbate",
    "Erotic massage", "Full body sensual massage", "DUO", "Sex outdoors", "Squirting",
    "Prostate massage", "Private photos", "Private videos", "Sex show on cam",
    "Golden shower (active)", "Golden shower (passive)", "Fingering", "Fist (active)",
    "Ejaculation in mouth", "Ejaculation on body", "Facial ejaculation",
    "Sucking with condom", "Sucking without condom", "Dynamics", "Body massage with foam"
];

const DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

const TABS = [
    { id: "media", label: "Media", icon: Camera },
    { id: "basic", label: "Basic", icon: User },
    { id: "physical", label: "Physical", icon: HeartIcon },
    { id: "services", label: "Services", icon: Check },
    { id: "pricing", label: "Rates", icon: DollarSign },
    { id: "hours", label: "Hours", icon: Clock },
    { id: "contact", label: "Contact", icon: Phone },
];

const CreateProfile = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("media");
    const [_saved, setSaved] = useState(false);

    // Media
    const [photos, setPhotos] = useState<{ file: File; preview: string }[]>([]);
    const [_video, setVideo] = useState<{ file: File; preview: string } | null>(null);
    const photoRef = useRef<HTMLInputElement>(null);
    const _videoRef = useRef<HTMLInputElement>(null);

    // Form State
    const [form, setForm] = useState({
        stageName: "", age: "", city: "", slogan: "", bio: "",
        nationality: "", sex: "Woman", hairColor: "", hairLength: "",
        eyeColor: "", height: "", weight: "", bodyType: "", tattoos: "No",
        piercings: "No", pubicHair: "", smoking: "No", alcohol: "No",
        sexual: "", ethnicity: "", profileType: "Alone", outcall: "",
        clothingSize: "", available: "", forWhom: [] as string[],
        languages: "",
        price30: "", price1h: "", price2h: "", priceDinner: "", priceNight: "",
        contactPhone: "", contactWhatsapp: "", contactEmail: "",
        hours: Object.fromEntries(DAYS.map(d => [d, ""])) as Record<string, string>,
        services: [] as string[],
    });

    const set = (key: string, val: string) => setForm(p => ({ ...p, [key]: val }));

    const handlePhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const toAdd = files.slice(0, 10 - photos.length).map(file => ({
            file, preview: URL.createObjectURL(file),
        }));
        setPhotos(p => [...p, ...toAdd]);
        e.target.value = "";
    };

    const removePhoto = (idx: number) => {
        URL.revokeObjectURL(photos[idx].preview);
        setPhotos(p => p.filter((_, i) => i !== idx));
    };

    const toggleService = (svc: string) => {
        setForm(p => ({
            ...p,
            services: p.services.includes(svc) ? p.services.filter(s => s !== svc) : [...p.services, svc],
        }));
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => navigate("/dashboard"), 2000);
    };

    const tabIdx = TABS.findIndex(t => t.id === activeTab);

    // Form Components
    const Input = ({ label, id, type = "text", placeholder = "" }: { label: string; id: string; type?: string; placeholder?: string }) => (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">{label}</label>
            <input
                type={type}
                value={(form as any)[id] || ""}
                onChange={e => set(id, e.target.value)}
                placeholder={placeholder}
                min={id === "age" ? "18" : undefined}
                max={id === "age" ? "55" : undefined}
                className="w-full h-14 px-5 rounded-2xl bg-zinc-50 border border-zinc-100 focus:bg-white focus:border-[#d81b60]/30 focus:ring-4 focus:ring-[#d81b60]/5 text-zinc-800 text-sm placeholder:text-zinc-300 outline-none transition-all"
            />
        </div>
    );

    const Select = ({ label, id, options }: { label: string; id: string; options: string[] }) => (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">{label}</label>
            <select
                value={(form as any)[id] || ""}
                onChange={e => set(id, e.target.value)}
                className="w-full h-14 px-5 rounded-2xl bg-zinc-50 border border-zinc-100 focus:bg-white focus:border-[#d81b60]/30 text-zinc-800 text-sm outline-none transition-all appearance-none"
            >
                <option value="">Choose Option</option>
                {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
        </div>
    );

    const createProfileUrl = `${SITE_URL.replace(/\/$/, "")}/create-profile`;
    const createProfileSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${createProfileUrl}#webpage`,
                "url": createProfileUrl,
                "name": "Create Companion Profile | Koka Site",
                "description": "Create and publish your independent escort profile on Koka Site."
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${createProfileUrl}#breadcrumb`,
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
                        "name": "Create Profile",
                        "item": createProfileUrl
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-zinc-900 font-sans">
            <SEO 
                title="Create Companion Profile | Koka Site" 
                description="List your independent companion profile, upload photos, set rates, and reach thousands of clients." 
                canonical={createProfileUrl}
                schema={createProfileSchema}
            />
            <Header />

            <main className="max-w-[1200px] mx-auto px-6 py-12 lg:py-20">
                {/* Hero Section */}
                <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="flex-1 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d81b60]/5 border border-[#d81b60]/10 text-[#d81b60] text-[10px] font-black uppercase tracking-widest mb-6">
                            <Sparkles className="w-4 h-4" /> Profile Creation
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 tracking-tighter mb-4">
                            Build Your <span className="text-[#d81b60]">Legacy.</span>
                        </h1>
                        <p className="text-zinc-500 text-lg font-medium">
                            Complete your professional profile to start receiving bookings. Premium profiles get 10x more visibility.
                        </p>
                    </div>
                    <button
                        onClick={handleSave}
                        className="px-10 py-5 rounded-2xl bg-[#d81b60] text-white font-bold text-lg shadow-2xl shadow-[#d81b60]/20 hover:bg-[#c2185b] transition-all flex items-center gap-3 shrink-0"
                    >
                        <CheckCircle className="w-6 h-6" /> Publish Now
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Nav */}
                    <aside className="lg:w-64 shrink-0">
                        <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                            {TABS.map((tab, i) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all whitespace-nowrap min-w-[160px] lg:min-w-0 ${activeTab === tab.id
                                        ? "bg-[#d81b60] text-white shadow-xl shadow-[#d81b60]/20"
                                        : i < tabIdx
                                            ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                            : "bg-zinc-50 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600"
                                        }`}
                                >
                                    {i < tabIdx ? <Check className="w-4 h-4" /> : <tab.icon className="w-4 h-4 shrink-0" />}
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Form Content */}
                    <div className="flex-1 bg-white border border-zinc-100 rounded-[3rem] p-8 lg:p-12 shadow-2xl shadow-zinc-200/50 relative overflow-hidden">
                        {activeTab === "media" && (
                            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-900 mb-2">Photos & Visuals</h2>
                                    <p className="text-zinc-400 font-medium">Upload high-quality photos. Verified accounts must have clear facial shots.</p>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {photos.map((p, i) => (
                                        <div key={i} className="relative aspect-[3/4] rounded-3xl overflow-hidden group border border-zinc-100 shadow-lg">
                                            <img src={p.preview} alt="" className="w-full h-full object-cover" />
                                            {i === 0 && <span className="absolute top-4 left-4 bg-[#d81b60] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase">Cover</span>}
                                            <button onClick={() => removePhoto(i)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center hover:bg-[#d81b60]"><X className="w-4 h-4" /></button>
                                        </div>
                                    ))}
                                    {photos.length < 10 && (
                                        <button onClick={() => photoRef.current?.click()} className="aspect-[3/4] rounded-3xl border-2 border-dashed border-zinc-100 bg-zinc-50 flex flex-col items-center justify-center gap-3 text-zinc-400 hover:border-[#d81b60]/40 hover:text-[#d81b60] transition-all group">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"><Plus className="w-7 h-7" /></div>
                                            <span className="text-[10px] font-black uppercase tracking-widest">Add Photo</span>
                                        </button>
                                    )}
                                </div>
                                <input ref={photoRef} type="file" multiple className="hidden" onChange={handlePhotos} />
                            </div>
                        )}

                        {activeTab === "basic" && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <Input label="Stage Name" id="stageName" placeholder="e.g. Elena" />
                                    <Input label="Age" id="age" type="number" placeholder="18-55 years" />
                                    <Input label="Base City" id="city" placeholder="e.g. Paris" />
                                    <Select label="Profile Type" id="profileType" options={["Independent", "Agency"]} />
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">About Your Presentation</label>
                                        <textarea
                                            value={form.bio}
                                            onChange={e => set("bio", e.target.value)}
                                            rows={6}
                                            placeholder="Write your professional bio here..."
                                            className="w-full p-6 rounded-[2rem] bg-zinc-50 border border-zinc-100 focus:bg-white focus:border-[#d81b60]/30 outline-none transition-all placeholder:text-zinc-300 text-zinc-800 text-base font-medium"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "physical" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <Select label="Nationality" id="nationality" options={["French", "Brazilian", "Spanish", "Asian", "Other"]} />
                                <Select label="Sexual Orientation" id="sexual" options={["Straight", "Bisexual", "Gay"]} />
                                <Input label="Height (cm)" id="height" type="number" placeholder="170" />
                                <Input label="Weight (kg)" id="weight" type="number" placeholder="55" />
                                <Select label="Body Type" id="bodyType" options={["Slim", "Athletic", "Curvy", "Full Figured"]} />
                                <Select label="Hair Color" id="hairColor" options={["Blonde", "Brunette", "Black", "Red"]} />
                                <Select label="Tattoos" id="tattoos" options={["No", "Yes", "Visible"]} />
                                <Select label="Piercings" id="piercings" options={["No", "Yes", "Intimate"]} />
                                <div className="md:col-span-2">
                                    <Input label="Languages" id="languages" placeholder="e.g. French, English, Spanish" />
                                </div>
                            </div>
                        )}

                        {activeTab === "services" && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {ALL_SERVICES.map(svc => (
                                        <button
                                            key={svc}
                                            onClick={() => toggleService(svc)}
                                            className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${form.services.includes(svc)
                                                ? "bg-[#d81b60]/5 border-[#d81b60]/20 text-zinc-800 shadow-sm"
                                                : "bg-white border-zinc-50 text-zinc-400 hover:bg-zinc-50"
                                                }`}
                                        >
                                            <span className="text-sm font-bold">{svc}</span>
                                            <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${form.services.includes(svc) ? "bg-[#d81b60] border-[#d81b60]" : "border-zinc-100"}`}>
                                                {form.services.includes(svc) && <Check className="w-3 h-3 text-white" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Pagination Footer */}
                        <div className="mt-16 flex items-center justify-between pt-8 border-t border-zinc-50">
                            <button
                                onClick={() => { if (tabIdx > 0) setActiveTab(TABS[tabIdx - 1].id); }}
                                disabled={tabIdx === 0}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl text-zinc-400 hover:text-zinc-800 disabled:opacity-30 font-bold"
                            >
                                <ChevronLeft className="w-5 h-5" /> Previous
                            </button>
                            {tabIdx < TABS.length - 1 ? (
                                <button
                                    onClick={() => setActiveTab(TABS[tabIdx + 1].id)}
                                    className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-zinc-900 text-white font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/10"
                                >
                                    Next Step <ChevronRight className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    onClick={handleSave}
                                    className="px-10 py-4 rounded-2xl bg-[#d81b60] text-white font-bold hover:bg-[#c2185b] transition-all"
                                >
                                    Finalize & Publish
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CreateProfile;
