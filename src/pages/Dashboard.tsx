import SEO from "@/components/SEO";
import { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import {  useSearchParams  } from "react-router-dom";
import {
    LayoutDashboard, MessageCircle, MessageSquare,
    Heart, Megaphone, HelpCircle, Settings, LogOut,
    Bell, Pencil, ChevronDown, ChevronRight,
    User, History, Star, Zap, Menu, X, Shield,
    ArrowRight, Sparkles, CheckCircle, TrendingUp, Eye
} from "lucide-react";

const sideNav = [
    { id: "dashboard", label: "Overview", icon: LayoutDashboard },
    { id: "dm", label: "Messages", icon: MessageCircle, badge: 2 },
    { id: "comments", label: "Reviews Feed", icon: MessageSquare, badge: 2 },
    { id: "favorites", label: "Saved Listings", icon: Heart, badge: 18 },
    { id: "campaigns", label: "Marketing", icon: Megaphone },
    { id: "support", label: "Assistance", icon: HelpCircle },
    { id: "settings", label: "Configuration", icon: Settings },
];

const StatCard = ({ label, value, trend, icon: Icon, color }: { label: string; value: string; trend: string; icon: any; color: string }) => (
    <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-xl shadow-zinc-200/40 relative overflow-hidden group hover:border-[#d81b60]/20 transition-all">
        <div className={`absolute top-0 right-0 w-32 h-32 ${color}/5 rounded-full -mr-10 -mt-10 blur-2xl group-hover:scale-125 transition-transform duration-700`} />
        <div className="flex items-start justify-between relative z-10">
            <div className={`p-4 rounded-2xl ${color}/10 ${color.replace('bg-', 'text-')}`}>
                <Icon className="w-6 h-6" />
            </div>
            <span className="text-emerald-500 text-xs font-black bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> {trend}
            </span>
        </div>
        <div className="mt-6 relative z-10">
            <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-1">{label}</p>
            <h3 className="text-4xl font-black text-zinc-900 tracking-tighter">{value}</h3>
        </div>
    </div>
);

const DashboardHome = ({ onNavigate }: { onNavigate: (id: string) => void }) => (
    <div className="space-y-10 animate-in fade-in duration-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#d81b60] rounded-[2.5rem] p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl shadow-[#d81b60]/20">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -mr-20 -mt-20" />
            <div className="relative z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                    <Sparkles className="w-4 h-4" /> Welcome Back, Melanie
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-4">You're Looking <br /> Great Today.</h2>
                <p className="text-white/70 text-lg font-medium max-w-md">Your profile is currently <span className="text-white font-bold">Boosting</span> at 140% efficiency. Expect more hits tonight.</p>
            </div>
            <div className="flex flex-col gap-4 relative z-10 shrink-0 w-full md:w-auto">
                <button
                    onClick={() => onNavigate("settings")}
                    className="px-8 py-4 rounded-2xl bg-white text-zinc-900 font-bold hover:bg-zinc-100 transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/10"
                >
                    <Pencil className="w-4 h-4" /> Edit Profile <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard label="Profile Views" value="4,281" trend="+12%" icon={Eye} color="bg-blue-500" />
            <StatCard label="Direct Hits" value="184" trend="+34%" icon={Zap} color="bg-yellow-500" />
            <StatCard label="Total Rating" value="4.9" trend="NEW" icon={Star} color="bg-[#d81b60]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-10 shadow-xl shadow-zinc-200/30">
                <h3 className="text-xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#d81b60]" /> Management
                </h3>
                <div className="space-y-4">
                    {[
                        { icon: MessageCircle, label: "Unread Messages", value: "2 chats", color: "bg-[#d81b60]/5 text-[#d81b60]", id: "dm" },
                        { icon: Heart, label: "Total Saves", value: "18 profiles", color: "bg-blue-50 text-blue-600", id: "favorites" },
                        { icon: Shield, label: "Account Security", value: "Healthy", color: "bg-emerald-50 text-emerald-600", id: "settings" },
                    ].map((item, i) => (
                        <button
                            key={i}
                            onClick={() => onNavigate(item.id)}
                            className="w-full flex items-center justify-between p-6 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:border-[#d81b60]/20 hover:bg-white transition-all group"
                        >
                            <div className="flex items-center gap-4 text-left">
                                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${item.color}`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                                    <p className="text-base font-bold text-zinc-800">{item.value}</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-zinc-200 group-hover:text-[#d81b60] group-hover:translate-x-1 transition-all" />
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-10 shadow-xl shadow-zinc-200/30">
                <h3 className="text-xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#d81b60]" /> Active Campaigns
                </h3>
                <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="h-20 w-20 rounded-full bg-[#d81b60]/5 text-[#d81b60] flex items-center justify-center mb-6">
                        <Megaphone className="w-10 h-10" />
                    </div>
                    <p className="text-zinc-500 font-medium mb-8 max-w-[240px]">You don't have any active campaigns right now. Boost your visibility today.</p>
                    <button
                        onClick={() => onNavigate("campaigns")}
                        className="px-8 py-4 rounded-2xl border-2 border-[#d81b60] text-[#d81b60] font-bold hover:bg-[#d81b60] hover:text-white transition-all shadow-lg shadow-[#d81b60]/10"
                    >
                        Create Campaign
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const DashboardContent = () => {
    const [searchParams] = useSearchParams();
    const viewParam = searchParams.get("view");
    const [activePage, setActivePage] = useState(viewParam || "dashboard");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (viewParam) setActivePage(viewParam);
    }, [viewParam]);

    return (
        <div className="min-h-screen bg-[#fafafa] flex font-sans text-zinc-900">
            <aside className="hidden lg:flex flex-col w-80 bg-white border-r border-zinc-100 sticky top-0 h-screen z-50">
                <div className="p-10 border-b border-zinc-50">
                    <Link to="/" className="flex items-center gap-3 group">
                        <Heart className="h-8 w-8 text-[#d81b60] fill-[#d81b60]/10" />
                        <h1 className="text-2xl font-bold text-zinc-900 uppercase tracking-tighter italic">Dashboard</h1>
                    </Link>
                </div>
                <nav className="flex-1 p-6 space-y-2">
                    {sideNav.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActivePage(item.id)}
                            className={`w-full flex items-center justify-between px-6 py-4 rounded-[1.5rem] font-bold text-sm transition-all ${activePage === item.id ? "bg-[#d81b60] text-white shadow-xl shadow-[#d81b60]/30" : "text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50"}`}
                        >
                            <div className="flex items-center gap-4">
                                <item.icon className="w-5 h-5 shrink-0" />
                                {item.label}
                            </div>
                            {item.badge && <span className={`h-6 w-6 rounded-lg text-[10px] flex items-center justify-center font-black ${activePage === item.id ? "bg-white/20 text-white" : "bg-[#d81b60] text-white"}`}>{item.badge}</span>}
                        </button>
                    ))}
                </nav>
                <div className="p-8 border-t border-zinc-50">
                    <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 font-bold transition-all">
                        <LogOut className="w-5 h-5" /> Sign Out
                    </button>
                </div>
            </aside>

            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-24 px-8 lg:px-14 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-zinc-50">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setMobileOpen(true)} className="lg:hidden text-zinc-600"><Menu className="w-6 h-6" /></button>
                        <h2 className="text-xl font-bold text-zinc-800 capitalize">{activePage.replace('_', ' ')}</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center p-1 bg-zinc-50 border border-zinc-100 rounded-2xl">
                            <span className="px-4 text-xs font-bold text-zinc-400">Search Workspace...</span>
                            <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-zinc-400">/</div>
                        </div>
                        <button className="relative h-12 w-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-all border border-zinc-100">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-3.5 right-3.5 h-2 w-2 rounded-full bg-[#d81b60] border-2 border-white" />
                        </button>
                        <div className="h-12 w-12 rounded-2xl bg-zinc-900 border-2 border-white shadow-xl shadow-black/10 overflow-hidden shrink-0">
                            <img src="/images/portrait_neon_1772046577948.png" className="w-full h-full object-cover" alt="Profile" />
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-8 lg:p-14 max-w-[1200px] mx-auto w-full">
                    {activePage === "dashboard" && <DashboardHome onNavigate={setActivePage} />}
                    {activePage !== "dashboard" && (
                        <div className="bg-white border border-zinc-100 rounded-[3rem] p-12 lg:p-20 shadow-2xl shadow-zinc-200/50 text-center flex flex-col items-center justify-center min-h-[500px] animate-in slide-in-from-bottom-6 duration-700">
                            <div className="h-24 w-24 rounded-full bg-[#d81b60]/5 text-[#d81b60] flex items-center justify-center mb-8">
                                {sideNav.find(n => n.id === activePage)?.icon({ className: "w-10 h-10" })}
                            </div>
                            <h3 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tighter">Content is currently Locked.</h3>
                            <p className="text-zinc-400 max-w-sm mb-10 font-medium leading-relaxed">The <span className="text-[#d81b60] font-bold">{activePage}</span> module is undergoing a structural update to support the new Flynax theme.</p>
                            <button onClick={() => setActivePage("dashboard")} className="px-10 py-4 rounded-2xl bg-zinc-900 text-white font-bold hover:bg-zinc-800 transition-all shadow-2xl shadow-zinc-900/20">Back to Overview</button>
                        </div>
                    )}
                </main>
            </div>

            {mobileOpen && (
                <div className="fixed inset-0 z-[100] lg:hidden">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
                    <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col p-8 animate-in slide-in-from-left duration-300">
                        <div className="flex items-center justify-between mb-12">
                            <Heart className="h-8 w-8 text-[#d81b60]" />
                            <button onClick={() => setMobileOpen(false)}><X className="w-6 h-6 text-zinc-400" /></button>
                        </div>
                        <nav className="flex-1 space-y-4">
                            {sideNav.map(n => (
                                <button key={n.id} onClick={() => { setActivePage(n.id); setMobileOpen(false); }} className={`w-full text-left px-6 py-4 rounded-2xl font-bold ${activePage === n.id ? "bg-[#d81b60] text-white" : "text-zinc-400"}`}>{n.label}</button>
                            ))}
                        </nav>
                    </aside>
                </div>
            )}
        </div>
    );
};

export default function Dashboard() {
    return (
        <Suspense fallback={<div className="p-8">Loading dashboard...</div>}>
            <DashboardContent />
        </Suspense>
    );
}
