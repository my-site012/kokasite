"use client";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Heart, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import DynamicWpContent, { useThemeSettings } from "./DynamicWpContent";

const navLinks: { label: string; href: string; items?: any[] }[] = [
  { label: "Home", href: "/" },
  { label: "Recently Added", href: "/search?sort=newest" },
  { label: "Search", href: "/search" },
  { label: "Blogs", href: "/blog" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = useThemeSettings();

  if (settings?.header_template_id) {
    return <DynamicWpContent templateId={settings.header_template_id} />;
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 font-body ${
        isScrolled 
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800 shadow-sm py-4" 
          : "bg-zinc-950/70 backdrop-blur-md py-6"
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center p-2 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-[#f4b827]/40 transition-colors">
              <Heart className="w-6 h-6 text-[#f4b827] fill-[#f4b827]/10 stroke-[2.5]" />
            </div>
            <span className="text-xl lg:text-2xl font-display font-bold tracking-tight text-white uppercase italic">
              Koka Site
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                <Link
                  to={link.href}
                  className="px-5 py-2 text-[13px] font-bold tracking-[0.05em] uppercase transition-all text-gray-400 hover:text-white"
                >
                  {link.label}
                </Link>
              </div>
            ))}

            <div className="h-4 w-[1px] bg-zinc-800 mx-4" />

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 mr-2 text-gray-400 hover:text-[#f4b827] transition-colors rounded-full hover:bg-zinc-900"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link
              to="/login"
              className="text-[13px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#f4b827] transition-colors mr-6"
            >
              Login
            </Link>

            <Link
              to="/post-ad"
              className="px-6 py-2.5 bg-[#f4b827] text-black rounded-full text-[12px] font-bold uppercase tracking-[0.15em] hover:bg-amber-400 transition-all shadow-lg shadow-[#f4b827]/10 active:scale-95"
            >
              Post Ad
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(true)} className="lg:hidden text-gray-300 p-2 hover:bg-zinc-900 rounded-lg transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[120] flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <aside className="relative w-[85%] max-w-[320px] h-full bg-zinc-950 border-l border-zinc-900 flex flex-col shadow-2xl z-10 animate-in slide-in-from-right duration-300 ml-auto p-6 text-white">
            <div className="p-6 border-b border-zinc-900 flex justify-between items-center">
              <span className="text-xl font-bold text-[#f4b827]">Menu</span>
              <button onClick={() => setOpen(false)} className="text-gray-400"><X className="w-6 h-6" /></button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label} className="space-y-1">
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-[16px] font-medium text-gray-300 hover:bg-zinc-900 rounded-lg group"
                  >
                    <span className="group-hover:text-[#f4b827] transition-colors">{link.label}</span>
                  </Link>
                </div>
              ))}
              <Link
                to="/post-ad"
                onClick={() => setOpen(false)}
                className="block px-4 py-4 text-center bg-[#f4b827] text-black font-bold rounded-xl mt-6 uppercase tracking-widest text-[14px] shadow-lg shadow-[#f4b827]/10"
              >
                Post Your Ad
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;
