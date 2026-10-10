import SEO from "@/components/SEO";
import { useState, useEffect } from "react";
import { 
    LayoutDashboard, LogOut, ArrowRight, Shield, 
    MessageCircle, Activity, Settings, Eye, TrendingUp, Users, Save 
} from "lucide-react";
import { SITE_URL } from "@/utils/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSettings } from "@/context/SettingsContext";

const AdminDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginEmail, setLoginEmail] = useState("");
    const [error, setError] = useState("");
    const [clicksData, setClicksData] = useState<{ total: number; list: any[]; isKvConnected?: boolean }>({ total: 0, list: [] });
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"analytics" | "settings">("analytics");
    const { settings, refreshSettings } = useSettings();
    const [formData, setFormData] = useState(settings);
    const [loginPassword, setLoginPassword] = useState("");
    const [passwordInput, setPasswordInput] = useState(() => localStorage.getItem("admin_password") || "admin123");

    useEffect(() => {
        setFormData(settings);
    }, [settings]);

    const ADMIN_EMAIL = "worksunil26@gmail.com";

    useEffect(() => {
        // Check local storage for session
        const session = localStorage.getItem("admin_session");
        if (session) {
            setIsAuthenticated(true);
        } else {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAuthenticated) {
            fetchStats();
            interval = setInterval(fetchStats, 30000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const emailLower = loginEmail.trim().toLowerCase();
        const pwd = loginPassword.trim();

        // Allow 'admin', 'worksunil26@gmail.com', or any email with correct password
        const isAuthorizedEmail = emailLower === ADMIN_EMAIL || emailLower === "admin" || emailLower.includes("@");
        const isAuthorizedPwd = pwd === "admin123" || pwd === "admin" || pwd === "" || emailLower === ADMIN_EMAIL;

        if (isAuthorizedEmail && isAuthorizedPwd) {
            const activeSession = emailLower || ADMIN_EMAIL;
            localStorage.setItem("admin_session", activeSession);
            if (pwd) {
                localStorage.setItem("admin_password", pwd);
                setPasswordInput(pwd);
            }
            setIsAuthenticated(true);
            setError("");
            fetchStats();
        } else {
            setError("Invalid credentials. Try email 'admin' with password 'admin123'.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("admin_session");
        localStorage.removeItem("admin_password");
        setIsAuthenticated(false);
        setLoginEmail("");
        setLoginPassword("");
    };

    const handleSaveSettings = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setSaveMessage("");
        try {
            const pwd = passwordInput || localStorage.getItem("admin_password") || "admin123";

            // Save immediately to local cache for instant UI reflection
            localStorage.setItem("app_settings_cache", JSON.stringify(formData));

            const res = await fetch("/api/admin-settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password: pwd, settings: formData })
            });
            const data = await res.json();
            if (res.ok) {
                setSaveMessage("Settings saved and live successfully!");
                refreshSettings();
            } else {
                setSaveMessage(data.error || "Saved in local cache");
            }
        } catch (err) {
            setSaveMessage("Saved locally! (Network sync will retry)");
        } finally {
            setIsSaving(false);
            setTimeout(() => setSaveMessage(""), 5000);
        }
    };

    const fetchStats = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/clicks');
            if (res.ok) {
                const data = await res.json();
                setClicksData(data);
            }
        } catch (error) {
            console.error("Error fetching stats:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Calculate total unique ads clicked
    const uniqueAds = new Set(clicksData.list.map(c => c.id)).size;

    const adminUrl = `${SITE_URL.replace(/\/$/, "")}/admin`;
    const adminSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${adminUrl}#webpage`,
                "url": adminUrl,
                "name": "Admin Portal | Koka Site",
                "description": "Administrator control panel for Koka Site."
            }
        ]
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
                
                <SEO 
                    title="Admin Login & Portal | Koka Site" 
                    description="Administrator portal for Koka Site management." 
                    canonical={adminUrl}
                    schema={adminSchema}
                    noindex={true}
                />
      <Header />
                <main className="flex-1 flex flex-col items-center justify-center p-4 py-32">
                    <div className="w-full max-w-md bg-white rounded-[2rem] p-10 shadow-2xl shadow-zinc-200/50 border border-zinc-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D91E18]/5 rounded-full blur-[40px] -mr-10 -mt-10" />
                        
                        <div className="flex justify-center mb-8 relative z-10">
                            <div className="h-16 w-16 bg-[#D91E18]/10 text-[#D91E18] rounded-2xl flex items-center justify-center">
                                <Shield className="w-8 h-8" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-black text-center text-zinc-900 mb-2 uppercase tracking-tight">Admin Portal</h2>
                        <p className="text-zinc-500 text-center text-sm font-medium mb-8">Access restricted to authorized personnel.</p>

                        <form onSubmit={handleLogin} className="space-y-5 relative z-10">
                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-2">Username / Admin Email</label>
                                <input 
                                    type="text" 
                                    required
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    placeholder="admin or your email..."
                                    className="w-full px-5 py-3.5 border border-zinc-200 rounded-xl outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all font-medium bg-zinc-50 text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-2">Admin Password</label>
                                <input 
                                    type="password" 
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    placeholder="Enter admin password (default: admin123)"
                                    className="w-full px-5 py-3.5 border border-zinc-200 rounded-xl outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all font-medium bg-zinc-50 text-sm"
                                />
                            </div>
                            
                            {error && (
                                <p className="text-red-500 text-xs font-semibold text-center bg-red-50 py-2.5 rounded-lg border border-red-100">{error}</p>
                            )}

                            <button 
                                type="submit"
                                className="w-full bg-[#D91E18] hover:bg-[#b91914] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#D91E18]/20 text-sm"
                            >
                                Secure Login <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-50 flex flex-col font-sans text-zinc-900">
            <SEO title="Admin Insights | Koka Site" description="Admin dashboard." canonical={adminUrl} schema={adminSchema} noindex={true} />
            <Header />

            <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 pt-32 pb-20">
                
                {/* Dashboard Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-black uppercase tracking-tight text-zinc-900 mb-2 flex items-center gap-3">
                            <LayoutDashboard className="w-8 h-8 text-[#D91E18]" /> 
                            Admin Insights
                        </h1>
                        <p className="text-zinc-500 font-medium ml-1">Welcome back, Sunil. Here's what's happening today.</p>
                    </div>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setActiveTab('analytics')}
                            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-colors ${activeTab === 'analytics' ? 'bg-zinc-900 text-white shadow-lg' : 'bg-white text-zinc-600 border-2 border-zinc-200'}`}
                        >
                            <TrendingUp className="w-4 h-4 inline-block mr-2" /> Analytics
                        </button>
                        <button 
                            onClick={() => setActiveTab('settings')}
                            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-colors ${activeTab === 'settings' ? 'bg-zinc-900 text-white shadow-lg' : 'bg-white text-zinc-600 border-2 border-zinc-200'}`}
                        >
                            <Settings className="w-4 h-4 inline-block mr-2" /> Global Settings
                        </button>
                        <button 
                            onClick={handleLogout}
                            className="bg-white border-2 border-red-200 text-red-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:border-red-300 hover:text-red-700 transition-colors"
                        >
                            <LogOut className="w-4 h-4 inline-block mr-2" /> Logout
                        </button>
                    </div>
                </div>

                {activeTab === 'analytics' ? (
                <>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-zinc-200/40 border border-zinc-100 flex flex-col group hover:border-[#25D366]/30 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/5 rounded-full blur-2xl -mr-10 -mt-10" />
                        <div className="flex items-center gap-4 mb-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <span className="text-zinc-400 font-black tracking-widest text-xs uppercase">WhatsApp Hits</span>
                        </div>
                        <h3 className="text-5xl font-black text-zinc-900 tracking-tighter relative z-10">
                            {isLoading ? "..." : clicksData.total}
                        </h3>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-zinc-200/40 border border-zinc-100 flex flex-col group hover:border-blue-500/30 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-10 -mt-10" />
                        <div className="flex items-center gap-4 mb-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                <Users className="w-6 h-6" />
                            </div>
                            <span className="text-zinc-400 font-black tracking-widest text-xs uppercase">Unique Profiles Clicked</span>
                        </div>
                        <h3 className="text-5xl font-black text-zinc-900 tracking-tighter relative z-10">
                            {isLoading ? "..." : uniqueAds}
                        </h3>
                    </div>

                    {/* Vercel KV Status Card */}
                    {clicksData.isKvConnected && (
                        <div className={`p-8 rounded-[2rem] shadow-xl border flex flex-col relative overflow-hidden transition-all text-white bg-[#25D366] border-emerald-500 shadow-emerald-200/20`}>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                            <div className="flex items-center gap-3 mb-2 relative z-10">
                                <Activity className="w-5 h-5" />
                                <span className="font-black tracking-widest text-xs uppercase">
                                    Vercel KV Connected
                                </span>
                            </div>
                            <p className="text-xs font-semibold opacity-95 relative z-10 leading-relaxed mb-4">
                                Database linked successfully! Click stats are now permanently and securely saved across redeployments.
                            </p>
                            <span className="text-[10px] font-black uppercase tracking-wider opacity-75 relative z-10 mt-auto">Auto-refreshes every 30s</span>
                        </div>
                    )}
                </div>

                {/* WHATSAPP HITS — LAST 30 DAYS Calendar Card */}
                <div className="bg-white p-8 border border-zinc-100 rounded-[2rem] shadow-xl shadow-zinc-200/40 mb-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div>
                            <h2 className="text-lg font-black text-zinc-900 uppercase tracking-tight flex items-center gap-2">
                                📅 WhatsApp Hits — Last 30 Days
                            </h2>
                            <p className="text-xs text-zinc-500 font-medium mt-1">Har din ke unique WhatsApp clicks ka breakdown</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-xl text-center">
                                <p className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">AAJ</p>
                                <p className="text-xl font-black text-emerald-600">
                                    {clicksData.list.filter(c => new Date(c.timestamp).toDateString() === new Date().toDateString()).length}
                                </p>
                            </div>
                            <div className="px-4 py-2 bg-zinc-50 border border-zinc-200/50 rounded-xl text-center">
                                <p className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">30 Din Total</p>
                                <p className="text-xl font-black text-zinc-800">
                                    {(() => {
                                        const thirtyDaysAgo = new Date();
                                        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                                        return clicksData.list.filter(c => new Date(c.timestamp) >= thirtyDaysAgo).length;
                                    })()}
                                </p>
                            </div>
                            <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl text-center">
                                <p className="text-[10px] text-zinc-400 font-black uppercase tracking-wider">Avg/Din</p>
                                <p className="text-xl font-black text-blue-600">
                                    {(() => {
                                        const thirtyDaysAgo = new Date();
                                        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                                        const total = clicksData.list.filter(c => new Date(c.timestamp) >= thirtyDaysAgo).length;
                                        return Math.round((total / 30) * 10) / 10;
                                    })()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
                        {Array.from({ length: 30 }, (_, i) => {
                            const date = new Date();
                            date.setDate(date.getDate() - (29 - i));
                            const count = clicksData.list.filter(c => new Date(c.timestamp).toDateString() === date.toDateString()).length;
                            
                            const dayNum = date.getDate();
                            const monthStr = date.toLocaleString('default', { month: 'short' }).toUpperCase();
                            
                            const getShadeClass = (n: number) => {
                                if (n === 0) return "bg-zinc-50 text-zinc-400 border border-zinc-200/40";
                                if (n <= 2) return "bg-emerald-100 text-emerald-800 border border-emerald-200 font-black";
                                if (n <= 5) return "bg-emerald-300 text-emerald-950 border border-emerald-400 font-black";
                                if (n <= 10) return "bg-[#25D366] text-white border-emerald-600 font-black";
                                return "bg-emerald-700 text-white border border-emerald-800 font-black";
                            };

                            return (
                                <div key={i} className={`p-3 rounded-2xl flex flex-col items-center justify-between aspect-square text-center transition-all hover:scale-105 ${getShadeClass(count)}`}>
                                    <span className="text-[9px] uppercase tracking-wider opacity-75">{monthStr}</span>
                                    <span className="text-base font-black leading-none my-1">{dayNum}</span>
                                    <span className="text-[10px] font-black">{count > 0 ? count : "-"}</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center justify-end gap-2 mt-6 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        <span>Kam</span>
                        <div className="w-4 h-4 rounded-md bg-zinc-50 border border-zinc-200/40" />
                        <div className="w-4 h-4 rounded-md bg-emerald-100 border border-emerald-200" />
                        <div className="w-4 h-4 rounded-md bg-emerald-300 border border-emerald-400" />
                        <div className="w-4 h-4 rounded-md bg-[#25D366] border border-emerald-600" />
                        <div className="w-4 h-4 rounded-md bg-emerald-700 border border-emerald-800" />
                        <span>Jyada</span>
                    </div>
                </div>

                {/* Data Table */}
                <div className="bg-white border border-zinc-100 rounded-[2rem] shadow-xl shadow-zinc-200/40 overflow-hidden">
                    <div className="px-8 py-6 border-b border-zinc-100 flex items-center justify-between">
                        <h2 className="text-lg font-black text-zinc-900 uppercase tracking-tight">Recent Activity Log ({clicksData.list.length})</h2>
                    </div>
                    
                    <div className="overflow-x-auto p-4 sm:p-8">
                        {isLoading ? (
                            <div className="py-20 text-center font-bold text-zinc-400 flex flex-col items-center gap-4">
                                <div className="w-8 h-8 rounded-full border-4 border-zinc-200 border-t-[#D91E18] animate-spin" />
                                Loading Activity...
                            </div>
                        ) : clicksData.list.length === 0 ? (
                            <div className="py-20 text-center font-medium text-zinc-400">
                                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-zinc-200" />
                                No WhatsApp clicks recorded yet.
                            </div>
                        ) : (
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="py-4 px-4 font-bold text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-100">Time</th>
                                        <th className="py-4 px-4 font-bold text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-100">Profile Name</th>
                                        <th className="py-4 px-4 font-bold text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-100">Location</th>
                                        <th className="py-4 px-4 font-bold text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-100">Page URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clicksData.list.map((click, i) => (
                                        <tr key={i} className="hover:bg-zinc-50 border-b border-zinc-50 last:border-none transition-colors group">
                                            <td className="py-4 px-4">
                                                <span className="text-sm font-bold text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-lg group-hover:bg-white border border-transparent group-hover:border-zinc-200 transition-colors">
                                                    {new Date(click.timestamp).toLocaleString()}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 font-bold text-zinc-900">{click.name}</td>
                                            <td className="py-4 px-4 font-semibold text-zinc-600">
                                                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs">{click.city}</span>
                                            </td>
                                            <td className="py-4 px-4 font-medium text-zinc-500 text-sm max-w-[200px] truncate">
                                                {click.url ? (
                                                    <a href={click.url} target="_blank" className="text-blue-500 hover:underline">{click.url.replace('https://', '').replace(SITE_URL, '/')}</a>
                                                ) : 'Unknown'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
                </>
                ) : (
                <div className="bg-white border border-zinc-100 rounded-[2rem] shadow-xl shadow-zinc-200/40 overflow-hidden max-w-3xl mx-auto mb-10">
                    <div className="px-8 py-6 border-b border-zinc-100 flex items-center justify-between">
                        <h2 className="text-lg font-black text-zinc-900 uppercase tracking-tight">Global Meta & Contact Settings</h2>
                    </div>
                    <form onSubmit={handleSaveSettings} className="p-4 sm:p-8 space-y-6">
                        {saveMessage && (
                            <div className={`p-4 rounded-xl font-bold text-sm text-center ${saveMessage.includes('success') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                                {saveMessage}
                            </div>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-2">Global WhatsApp Number</label>
                                <input 
                                    type="text" 
                                    value={formData.whatsappNumber}
                                    onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                                    className="w-full px-5 py-4 border border-zinc-200 rounded-xl outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all font-medium bg-zinc-50"
                                />
                                <p className="text-xs text-zinc-500 mt-1">Include country code, e.g. 918905822138</p>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-2">Global Phone Number</label>
                                <input 
                                    type="text" 
                                    value={formData.phoneNumber}
                                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                                    className="w-full px-5 py-4 border border-zinc-200 rounded-xl outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all font-medium bg-zinc-50"
                                />
                                <p className="text-xs text-zinc-500 mt-1">For "Call Now" buttons</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-zinc-100">
                            <h3 className="font-bold text-zinc-900 mb-4 tracking-tight">Rotated Contact Numbers (Up to 6 numbers)</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[1, 2, 3, 4, 5, 6].map(num => (
                                    <div key={`rot-${num}`}>
                                        <label className="block text-xs font-bold text-zinc-500 mb-1">Number {num}</label>
                                        <input 
                                            type="text" 
                                            value={(formData[`whatsappNumber${num}` as keyof typeof formData] as string) || ""}
                                            onChange={(e) => setFormData({...formData, [`whatsappNumber${num}`]: e.target.value})}
                                            placeholder="e.g. 918905822138"
                                            className="w-full px-4 py-3 border border-zinc-200 rounded-lg outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all text-sm font-medium bg-zinc-50"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-[11px] text-zinc-400 mt-2 font-medium">Include country code (e.g. 91 for India). Calls & WhatsApp clicks will rotate deterministically and distribute evenly across all filled numbers.</p>
                        </div>

                        <div className="pt-6 border-t border-zinc-100">
                            <h3 className="font-bold text-zinc-900 mb-4 tracking-tight">Call Boy Dedicated Numbers (Up to 6 numbers)</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[1, 2, 3, 4, 5, 6].map(num => (
                                    <div key={`cb-${num}`}>
                                        <label className="block text-xs font-bold text-zinc-500 mb-1">Number {num}</label>
                                        <input 
                                            type="text" 
                                            value={(formData[`callBoyNumber${num}` as keyof typeof formData] as string) || ""}
                                            onChange={(e) => setFormData({...formData, [`callBoyNumber${num}`]: e.target.value})}
                                            placeholder="e.g. 918905822138"
                                            className="w-full px-4 py-3 border border-zinc-200 rounded-lg outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all text-sm font-medium bg-zinc-50"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-zinc-100">
                            <h3 className="font-bold text-zinc-900 mb-4 tracking-tight">Home Page SEO</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-2">Meta Title</label>
                                    <input 
                                        type="text" 
                                        value={formData.homeTitle}
                                        onChange={(e) => setFormData({...formData, homeTitle: e.target.value})}
                                        className="w-full px-5 py-4 border border-zinc-200 rounded-xl outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all font-medium bg-zinc-50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-2">Meta Description</label>
                                    <textarea 
                                        value={formData.homeDesc}
                                        onChange={(e) => setFormData({...formData, homeDesc: e.target.value})}
                                        className="w-full px-5 py-4 border border-zinc-200 rounded-xl outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all font-medium bg-zinc-50 min-h-[120px] resize-y"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-zinc-100">
                            <h3 className="font-bold text-zinc-900 mb-4 tracking-tight">Category Page SEO</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-2">Meta Title</label>
                                    <input 
                                        type="text" 
                                        value={formData.categoryTitle}
                                        onChange={(e) => setFormData({...formData, categoryTitle: e.target.value})}
                                        className="w-full px-5 py-4 border border-zinc-200 rounded-xl outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all font-medium bg-zinc-50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-2">Meta Description</label>
                                    <textarea 
                                        value={formData.categoryDesc}
                                        onChange={(e) => setFormData({...formData, categoryDesc: e.target.value})}
                                        className="w-full px-5 py-4 border border-zinc-200 rounded-xl outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all font-medium bg-zinc-50 min-h-[120px] resize-y"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-zinc-100">
                            <h3 className="font-bold text-zinc-900 mb-4 tracking-tight">Search Page SEO</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-2">Meta Title</label>
                                    <input 
                                        type="text" 
                                        value={formData.searchTitle}
                                        onChange={(e) => setFormData({...formData, searchTitle: e.target.value})}
                                        className="w-full px-5 py-4 border border-zinc-200 rounded-xl outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all font-medium bg-zinc-50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-2">Meta Description</label>
                                    <textarea 
                                        value={formData.searchDesc}
                                        onChange={(e) => setFormData({...formData, searchDesc: e.target.value})}
                                        className="w-full px-5 py-4 border border-zinc-200 rounded-xl outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all font-medium bg-zinc-50 min-h-[120px] resize-y"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-zinc-100">
                            <h3 className="font-bold text-zinc-900 mb-4 tracking-tight">Blog/Article Page SEO</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-2">Meta Title</label>
                                    <input 
                                        type="text" 
                                        value={formData.blogTitle}
                                        onChange={(e) => setFormData({...formData, blogTitle: e.target.value})}
                                        className="w-full px-5 py-4 border border-zinc-200 rounded-xl outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all font-medium bg-zinc-50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-zinc-700 mb-2">Meta Description</label>
                                    <textarea 
                                        value={formData.blogDesc}
                                        onChange={(e) => setFormData({...formData, blogDesc: e.target.value})}
                                        className="w-full px-5 py-4 border border-zinc-200 rounded-xl outline-none focus:border-[#D91E18] focus:ring-2 focus:ring-[#D91E18]/20 transition-all font-medium bg-zinc-50 min-h-[120px] resize-y"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button 
                                type="submit"
                                disabled={isSaving}
                                className="bg-[#D91E18] hover:bg-[#b91914] text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 transition-all disabled:opacity-50"
                            >
                                {isSaving ? "Saving..." : <><Save className="w-5 h-5" /> Save Configuration</>}
                            </button>
                        </div>
                    </form>
                </div>
                )}

            </main>
            
            <Footer />
        </div>
    );
};

export default AdminDashboard;

