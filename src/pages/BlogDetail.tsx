import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { SITE_URL } from "@/utils/config";
import { cityBlogs } from "@/data/blogs";
import { User, ChevronLeft, Calendar as CalendarIcon, Tag, Clock } from "lucide-react";

import { indianCityListings } from "@/data/indianCityListings";

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const blog = cityBlogs.find((b) => b.slug === slug);

    if (!blog) return <Navigate to="/blog" replace />;

    // Fetch the featured profile for this city
    const featuredListings = indianCityListings[blog.featuredCitySlug] || [];

    const detailUrl = `${SITE_URL.replace(/\/$/, "")}/blog/${blog.slug}`;
    const absoluteImage = blog.image.startsWith("http") ? blog.image : `${SITE_URL.replace(/\/$/, "")}${blog.image.startsWith("/") ? "" : "/"}${blog.image}`;

    const blogDetailSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": `${detailUrl}#entry`,
                "headline": blog.title,
                "description": blog.excerpt,
                "image": absoluteImage,
                "datePublished": blog.date,
                "url": detailUrl,
                "author": {
                    "@type": "Person",
                    "name": blog.author
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Koka Site",
                    "url": SITE_URL
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${detailUrl}#breadcrumb`,
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
                        "name": "Blog",
                        "item": `${SITE_URL.replace(/\/$/, "")}/blog`
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": blog.title,
                        "item": detailUrl
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-zinc-900 font-sans leading-relaxed">
            
            <SEO 
                title={`${blog.title} - City Guide | Koka Site`} 
                description={blog.excerpt} 
                canonical={detailUrl}
                schema={blogDetailSchema}
            />
            <Header />

            <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
                {/* Back Link */}
                <div className="mb-12">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-400 font-black uppercase tracking-widest text-[10px] hover:text-[#d81b60] transition-colors group">
                        <ChevronLeft className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform" /> Back to Guides
                    </Link>
                </div>

                {/* Hero Section */}
                <header className="mb-20 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d81b60]/5 border border-[#d81b60]/10 text-[#d81b60] text-[10px] font-black uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        {blog.category}
                    </div>
                    <h1 className="text-4xl lg:text-7xl font-bold text-zinc-900 tracking-tighter mb-8 leading-none animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {blog.title}<span className="text-[#d81b60]">.</span>
                    </h1>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-12 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#d81b60]">
                                <User className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Written by</p>
                                <p className="text-sm font-bold text-zinc-900">{blog.author}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400">
                                <CalendarIcon className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Published</p>
                                <p className="text-sm font-bold text-zinc-900">{blog.date}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Read Time</p>
                                <p className="text-sm font-bold text-zinc-900">4 min read</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="relative mb-16 sm:mb-24 rounded-[2rem] sm:rounded-[4rem] overflow-hidden shadow-2xl shadow-zinc-200/50 aspect-[16/9] sm:aspect-[21/9] animate-in fade-in zoom-in-95 duration-1000">
                    <img src={blog.image} alt={blog.title} loading="lazy" decoding="async" sizes="100vw" className="w-full h-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-12">
                        {(() => {
                            const paragraphs = blog.content.split('\n\n').filter(p => p.trim());
                            const cityName = blog.tags[0] || '';
                            
                            // H2 subheadings for the blog
                            const h2Headings = [
                                `Why ${cityName} Is a Top Destination for Premium Escorts`,
                                `Services & Experiences Available in ${cityName}`,
                                `How to Book the Best Call Girls in ${cityName}`,
                                `Safety & Discretion in ${cityName}'s Escort Scene`,
                                `What Makes ${cityName} Escorts Stand Out`,
                            ];
                            
                            let h2Index = 0;
                            return paragraphs.map((para, idx) => {
                                const elements: React.ReactNode[] = [];
                                
                                // Insert H2 heading every 3 paragraphs
                                if (idx > 0 && idx % 3 === 0 && h2Index < h2Headings.length) {
                                    elements.push(
                                        <h2 key={`h2-${idx}`} className="text-2xl lg:text-3xl font-bold text-zinc-900 mt-12 mb-4 tracking-tight">
                                            {h2Headings[h2Index]}
                                        </h2>
                                    );
                                    h2Index++;
                                }
                                
                                elements.push(
                                    <p 
                                        key={`bp-${idx}`} 
                                        className="mb-6 text-zinc-600 font-medium leading-[1.8] text-[16px] lg:text-[17px]"
                                        dangerouslySetInnerHTML={{ __html: para }}
                                    />
                                );
                                
                                return elements;
                            });
                        })()}

                        {/* Featured Profiles from this City — same style as Profile Page */}
                        {featuredListings.length > 0 && (
                            <div className="my-12">
                                <h2 className="text-2xl font-black text-[#D91E18] mb-8 uppercase tracking-tight flex items-center gap-3">
                                    ✨ Related Profiles in {blog.tags[0]}
                                </h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                    {featuredListings.slice(0, 5).map((profile, pIdx) => (
                                        <Link 
                                            key={profile.id || pIdx} 
                                            to={`/profile/${profile.id}`}
                                            className="relative group rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-100"
                                        >
                                            {profile.image && (
                                                <img 
                                                    src={profile.image.startsWith('http') || profile.image.startsWith('/') ? profile.image : `/${profile.image}`}
                                                    alt={`${profile.name} Call Girl in ${profile.city}`}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            )}
                                            <div className="absolute inset-x-0 bottom-0 p-3 pt-16 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                                                <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 mb-1 drop-shadow-md">
                                                    {profile.name}
                                                </h3>
                                                <p className="text-zinc-300 text-[11px] font-medium flex items-center gap-1.5 truncate">
                                                    <span>{profile.age} Yrs</span>
                                                    <span>•</span>
                                                    <span className="truncate">{(profile.city || '').split(' –')[0]}</span>
                                                </p>
                                            </div>
                                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500 rounded-2xl transition-colors duration-300" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Social Share / Tags */}
                        <div className="flex flex-wrap items-center gap-4 py-12 border-t border-zinc-200 mt-20">
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                                <Tag className="w-4 h-4" /> Posted in:
                            </span>
                            {blog.tags.map((tag) => (
                                <Link key={tag} to={`/search?q=${encodeURIComponent(tag)}`} className="px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-sm font-bold text-zinc-700 hover:text-[#D91E18] hover:border-pink-300 transition-colors capitalize">
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Related */}
                    <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12 animate-in fade-in duration-1000 delay-500">
                        <div className="bg-zinc-50 border border-zinc-200 rounded-[3rem] p-10 shadow-xl shadow-zinc-200/30">
                            <h3 className="text-xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-[#D91E18]" /> More City Guides
                            </h3>
                            <div className="space-y-8">
                                {cityBlogs.filter(b => b.id !== blog.id).slice(0, 5).map(related => (
                                    <Link key={related.id} to={`/blog/${related.slug}`} className="group flex flex-col">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{related.category}</p>
                                        <h4 className="font-bold text-zinc-800 group-hover:text-[#D91E18] transition-all leading-tight">
                                            {related.title}
                                        </h4>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="bg-zinc-900 rounded-[3rem] p-10 text-white shadow-2xl shadow-zinc-900/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#d81b60]/20 rounded-full blur-[80px] -mr-10 -mt-10" />
                            <h3 className="text-xl font-bold mb-4 relative z-10">Local Assistance</h3>
                            <p className="text-zinc-400 text-sm mb-8 leading-relaxed relative z-10">Need a professional guide or assistant across India's top cities?</p>
                            <Link to="/search" className="inline-flex h-12 px-6 items-center justify-center rounded-2xl bg-[#d81b60] text-white font-bold hover:bg-[#c2185b] transition-all relative z-10 shadow-xl shadow-[#d81b60]/20">
                                Contact Experts
                            </Link>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogDetail;
