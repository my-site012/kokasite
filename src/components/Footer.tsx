"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Mail, ArrowRight, Sparkles, CheckCircle, Heart, Phone, Shield, BookOpen } from "lucide-react";
import DynamicWpContent, { useThemeSettings } from "./DynamicWpContent";

const topDirectoryCities = [
  { name: "Mumbai", stateSlug: "maharashtra", slug: "mumbai" },
  { name: "Delhi", stateSlug: "delhi-ncr", slug: "delhi" },
  { name: "Bangalore", stateSlug: "karnataka", slug: "bengaluru" },
  { name: "Goa", stateSlug: "goa", slug: "panaji" },
  { name: "Pune", stateSlug: "maharashtra", slug: "pune" },
  { name: "Hyderabad", stateSlug: "telangana", slug: "hyderabad" },
  { name: "Kolkata", stateSlug: "west-bengal", slug: "kolkata" },
  { name: "Chennai", stateSlug: "tamil-nadu", slug: "chennai" },
  { name: "Jaipur", stateSlug: "rajasthan", slug: "jaipur" },
  { name: "Ahmedabad", stateSlug: "gujarat", slug: "ahmedabad" },
  { name: "Chandigarh", stateSlug: "punjab", slug: "chandigarh" },
  { name: "Lucknow", stateSlug: "uttar-pradesh", slug: "lucknow" },
  { name: "Indore", stateSlug: "madhya-pradesh", slug: "indore" },
  { name: "Gurgaon", stateSlug: "haryana", slug: "gurgaon" },
  { name: "Noida", stateSlug: "uttar-pradesh", slug: "noida" },
  { name: "Surat", stateSlug: "gujarat", slug: "surat" },
  { name: "Nagpur", stateSlug: "maharashtra", slug: "nagpur" },
  { name: "Kochi", stateSlug: "kerala", slug: "kochi" },
  { name: "Patna", stateSlug: "bihar", slug: "patna" },
  { name: "Bhopal", stateSlug: "madhya-pradesh", slug: "bhopal" },
];

// ── Newsletter ──────────────────────────────────────────────────────────────
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 sm:p-10 mb-14 shadow-xl border border-zinc-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,184,39,0.08),transparent_60%)] pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/80 text-[#f4b827] text-xs font-bold uppercase tracking-widest mb-4 border border-zinc-700/50">
            <Sparkles className="w-3.5 h-3.5" /> New Listings Daily
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Get VIP Alerts in Your City
          </h3>
          <p className="text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0 text-sm">
            Subscribe for exclusive new listings, premium escort updates and private offers delivered to your inbox.
          </p>
        </div>
        {/* Right Form */}
        <div className="w-full lg:w-auto lg:min-w-[400px] shrink-0">
          {subscribed ? (
            <div className="flex flex-col items-center gap-3 py-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                <CheckCircle className="w-6 h-6 text-emerald-500" />
              </div>
              <p className="text-white font-bold text-lg">You're in! 🎉</p>
              <p className="text-gray-400 text-sm">We'll send new VIP listings straight to your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-zinc-900 border border-zinc-850 text-white text-sm placeholder:text-zinc-500 outline-none focus:border-[#f4b827] focus:ring-1 focus:ring-[#f4b827]/30 shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="h-12 px-6 rounded-xl bg-[#f4b827] text-black font-bold flex items-center justify-center gap-2 whitespace-nowrap hover:bg-amber-400 transition-all shrink-0 shadow-sm"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
          {!subscribed && (
            <p className="text-gray-500 text-[11px] mt-2 text-center sm:text-left">
              No spam. Unsubscribe anytime. By subscribing you agree to our{" "}
              <Link to="/info/privacy-policy" className="underline hover:text-gray-400 transition-colors">Privacy Policy</Link>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Footer ──────────────────────────────────────────────────────────────────
const companyLinks = [
  { label: "About Us", path: "/info/the-partners" },
  { label: "Service Areas", path: "/service-areas" },
  { label: "Advertise", path: "/info/monetization-policy" },
  { label: "Affiliate Program", path: "/info/affiliate-program" },
  { label: "Contact & Support", path: "/info/contact-support" },
  { label: "HTML Sitemap", path: "/sitemap-directory" },
  { label: "DMCA", path: "/info/dmca-withdrawal" },
];

const legalLinks = [
  { label: "Privacy Policy", slug: "privacy-policy" },
  { label: "Terms of Use", slug: "terms-of-use" },
  { label: "DMCA Policy", slug: "dmca-withdrawal" },
  { label: "Cookie Policy", slug: "cookie-policy" },
  { label: "Content Policy", slug: "content-policy" },
  { label: "Moderation Policy", slug: "moderation-policy" },
];

const Footer = () => {
  const settings = useThemeSettings();

  if (settings?.footer_template_id) {
    return <DynamicWpContent templateId={settings.footer_template_id} />;
  }

  return (
    <footer className="bg-zinc-950 text-gray-400 border-t border-zinc-900 text-[13px] font-body mt-20 relative z-20">

      {/* ── Newsletter ── */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 pt-14">
        <Newsletter />
      </div>

      {/* ── Main Links Grid ── */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 pb-10 border-b border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand & Left Info */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <Heart className="w-5 h-5 text-[#f4b827] fill-[#f4b827]/10" />
              <span className="text-xl font-display font-bold text-white italic uppercase">
                Koka Site
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-[13px] pr-4">
              Premium global verified directory. Real profiles, real photos, complete discretion. Available 24/7. We provide the most trusted portal to find elite, independent companions and massage providers near you.
            </p>
            {/* Trust tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <Shield className="w-3 h-3" /> 100% Verified
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                🔞 18+ Only
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                🔒 Discreet
              </span>
            </div>
            {/* Quick actions */}
            <div className="flex flex-col gap-2 pt-4">
              <a href="https://api.whatsapp.com/send?phone=+918003381511&text=Hello%20KokaSite" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[12px] font-bold text-[#f4b827] hover:underline">
                <Phone className="w-3.5 h-3.5" /> List Your Profile
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-[11px]">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-[#f4b827] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-[11px]">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map(l => (
                <li key={l.slug}>
                  <Link to={`/info/${l.slug}`} className="hover:text-[#f4b827] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Quick Links */}
          <div className="md:col-span-12 lg:col-span-4">
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-[11px]">Popular Searches</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-zinc-500">
              <Link to="/call-girls/maharashtra/mumbai" className="hover:text-[#f4b827] transition-colors">Mumbai Call Girls</Link>
              <Link to="/massage/maharashtra/mumbai" className="hover:text-[#f4b827] transition-colors">Mumbai Massage Services</Link>
              <Link to="/call-girls/delhi-ncr/delhi" className="hover:text-[#f4b827] transition-colors">Delhi Call Girls</Link>
              <Link to="/call-girls/karnataka/bengaluru" className="hover:text-[#f4b827] transition-colors">Bangalore Escorts</Link>
              <Link to="/call-girls/goa/calangute" className="hover:text-[#f4b827] transition-colors">Goa Call Girls</Link>
              <Link to="/call-girls/maharashtra/pune" className="hover:text-[#f4b827] transition-colors">Pune Escorts</Link>
              <Link to="/call-girls/telangana/hyderabad" className="hover:text-[#f4b827] transition-colors">Hyderabad Call Girls</Link>
              <Link to="/massage/west-bengal/kolkata" className="hover:text-[#f4b827] transition-colors">Kolkata Massage</Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Massive SEO City Directory ── */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-10 bg-zinc-950">
        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-[12px] flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#f4b827]" /> Complete India Companion & Massage Directory
        </h4>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-zinc-900 pb-2">
            <span>🇮🇳</span>
            <span className="font-bold text-zinc-300 text-[12px] uppercase tracking-wider">Top Indian Cities</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2">
            {topDirectoryCities.map(city => (
              <Link 
                key={city.slug} 
                to={`/call-girls/${city.stateSlug}/${city.slug}`}
                className="text-[12px] text-gray-400 hover:text-[#f4b827] hover:underline transition-all whitespace-nowrap"
              >
                {city.name} Call Girls
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Link 
              to="/service-areas" 
              className="text-[12px] text-[#f4b827] hover:underline font-semibold inline-flex items-center gap-1"
            >
              <span>Browse All 1,200+ Cities &amp; Local Areas &rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Disclaimer ── */}
      <div className="border-t border-zinc-900 bg-zinc-950/80 mt-4">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-8">
          <p className="text-[11px] text-zinc-650 leading-relaxed mb-4 max-w-5xl">
            <strong className="text-zinc-500">Disclaimer:</strong> Koka Site is an adult classified advertising platform. All advertisements are posted by independent adults aged 18 or older. We do not provide, organize, or facilitate any illegal services. The platform serves strictly as an informational directory and advertising medium. By accessing this web application, you confirm under penalty of perjury that you are of legal age (18+), it is legal in your jurisdiction to view adult material, and you agree to our comprehensive Terms of Use and Privacy Policy.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-zinc-500 border-t border-zinc-900/60 pt-6">
            <p>© {new Date().getFullYear()} <strong className="text-white">Koka Site</strong> — All rights reserved.</p>
            <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
              <span className="font-bold border border-zinc-800 bg-zinc-900 px-2 py-0.5 rounded text-[10px] text-zinc-400">🔞 18+ ADULTS ONLY</span>
              <Link to="/info/privacy-policy" className="hover:text-[#f4b827] transition-colors">Privacy</Link>
              <Link to="/info/terms-of-use" className="hover:text-[#f4b827] transition-colors">Terms</Link>
              <Link to="/info/dmca-withdrawal" className="hover:text-[#f4b827] transition-colors">DMCA</Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
