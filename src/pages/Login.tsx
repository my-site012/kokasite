import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import {  useNavigate  } from "react-router-dom";
import { useState } from "react";

import { Mail, Lock, User, Building, UserCircle2, ArrowRight, Heart } from "lucide-react";

import { SITE_URL } from "@/utils/config";

type LoginType = "user" | "professional" | "agency";

const Login = () => {
    const [loginType, setLoginType] = useState<LoginType>("user");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    const loginUrl = `${SITE_URL.replace(/\/$/, "")}/login`;
    const loginSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${loginUrl}#webpage`,
                "url": loginUrl,
                "name": "Member Login | Koka Site",
                "description": "Log into your Koka Site advertiser or user account."
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${loginUrl}#breadcrumb`,
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
                        "name": "Login",
                        "item": loginUrl
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col relative overflow-hidden font-sans">
            <SEO 
                title="Member Login | Koka Site" 
                description="Log into your advertiser or client account on Koka Site." 
                canonical={loginUrl}
                schema={loginSchema}
                noindex={true} 
            />

            {/* Soft decorative background circles */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#d81b60]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Header section matching main site */}
            <header className="w-full z-10 p-6 flex justify-between items-center bg-white border-b border-zinc-100">
                <Link to="/" className="flex items-center gap-2 group">
                    <Heart className="h-6 w-6 text-[#d81b60] fill-[#d81b60]/10 group-hover:scale-110 transition-transform" />
                    <h1 className="text-xl font-bold tracking-tight text-zinc-800 uppercase">
                        Koka Site
                    </h1>
                </Link>
                <Link to="/" className="text-zinc-400 hover:text-zinc-600 transition-colors text-sm font-medium">
                    ← Back to site
                </Link>
            </header>

            <main className="flex-1 flex items-center justify-center p-4 z-10">
                <div className="w-full max-w-md">
                    <div className="bg-white border border-zinc-100 shadow-2xl rounded-3xl p-8 lg:p-10 relative isolate overflow-hidden">

                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-zinc-800 mb-2 tracking-tight">Login</h2>
                            <p className="text-zinc-500 text-sm font-medium">Access your personal account</p>
                        </div>

                        {/* Role Selector Tabs - Light Style */}
                        <div className="flex bg-zinc-50 rounded-2xl p-1 mb-10 border border-zinc-100">
                            <button
                                onClick={() => setLoginType("user")}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[13px] font-bold transition-all ${loginType === "user" ? "bg-white text-[#d81b60] shadow-md" : "text-zinc-400 hover:text-zinc-600"}`}
                            >
                                <User className="w-4 h-4" /> Guest
                            </button>
                            <button
                                onClick={() => setLoginType("professional")}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[13px] font-bold transition-all ${loginType === "professional" ? "bg-white text-[#d81b60] shadow-md" : "text-zinc-400 hover:text-zinc-600"}`}
                            >
                                <UserCircle2 className="w-4 h-4" /> Escort
                            </button>
                            <button
                                onClick={() => setLoginType("agency")}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[13px] font-bold transition-all ${loginType === "agency" ? "bg-white text-[#d81b60] shadow-md" : "text-zinc-400 hover:text-zinc-600"}`}
                            >
                                <Building className="w-4 h-4" /> Agency
                            </button>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Email / Username</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#d81b60] transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        placeholder="example@site.com"
                                        className="w-full h-12 pl-11 pr-4 rounded-xl bg-white border border-zinc-200 focus:border-[#d81b60]/50 text-zinc-800 text-[15px] placeholder:text-zinc-300 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Password</label>
                                    <a href="#" className="text-xs text-[#d81b60] hover:underline transition-colors font-bold">Forgot?</a>
                                </div>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#d81b60] transition-colors">
                                        <Lock className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        className="w-full h-12 pl-11 pr-4 rounded-xl bg-white border border-zinc-200 focus:border-[#d81b60]/50 text-zinc-800 text-[15px] placeholder:text-zinc-300 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full h-14 bg-[#d81b60] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#c2185b] transition-all duration-300 shadow-lg shadow-[#d81b60]/20 group"
                            >
                                Secure Login <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-10 text-center border-t border-zinc-50 pt-8">
                            <p className="text-sm text-zinc-400 font-medium">
                                No account yet? <br />
                                <Link to="/register" className="text-[#d81b60] font-bold hover:underline mt-2 inline-block">Create your profile now</Link>
                            </p>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
