import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { SITE_URL } from "@/utils/config";
import { cityBlogs } from "@/data/blogs";
import { Calendar, User, ChevronRight, BookOpen } from "lucide-react";
import { useSettings } from "@/context/SettingsContext";

const BlogPage = () => {
    const { settings } = useSettings();
    const blogUrl = `${SITE_URL.replace(/\/$/, "")}/blog`;

    const blogSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Blog",
                "@id": `${blogUrl}#blog`,
                "url": blogUrl,
                "name": "Koka Site Premium City Guides and Escort Blog",
                "description": "Discover local guides, tips, and insights about independent escort services across Indian cities on Koka Site.",
                "publisher": {
                    "@type": "Organization",
                    "name": "Koka Site",
                    "url": SITE_URL
                },
                "blogPost": cityBlogs.map(blog => ({
                    "@type": "BlogPosting",
                    "headline": blog.title,
                    "url": `${blogUrl}/${blog.slug}`,
                    "datePublished": blog.date,
                    "author": {
                        "@type": "Person",
                        "name": blog.author
                    }
                }))
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${blogUrl}#breadcrumb`,
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
                        "item": blogUrl
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-zinc-900 font-sans leading-relaxed">
            
            <SEO 
                title="Local Guides and Escort Industry Blogs | Koka Site" 
                description="Discover hidden gems, cultural insights, safety advice, and news about premium companion services in Indian cities." 
                canonical={blogUrl}
                schema={blogSchema}
            />
            <Header />

            <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
                {/* Hero Section */}
                <div className="mb-20 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D91E18]/5 border border-[#D91E18]/10 text-[#D91E18] text-[10px] font-black uppercase tracking-widest mb-6">
                        <BookOpen className="w-4 h-4" /> Indian City Guides
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 tracking-tighter mb-6 underline decoration-[#D91E18]/20 underline-offset-8">
                        Our <span className="text-[#D91E18]">Blogs.</span>
                    </h1>
                    <p className="text-zinc-500 text-lg font-medium max-w-2xl">
                        Discover hidden gems, cultural insights, and the best local experiences across India's most vibrant cities.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {cityBlogs.map((blog) => (
                        <article key={blog.id} className="group flex flex-col h-full bg-white border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-zinc-200/40 hover:shadow-2xl transition-all hover:translate-y-[-8px]">
                            <Link to={`/blog/${blog.slug}`} className="relative h-48 sm:h-64 overflow-hidden block">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    loading="lazy"
                                    decoding="async"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#D91E18] text-[10px] font-black uppercase tracking-widest shadow-lg">
                                    {blog.category}
                                </div>
                            </Link>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" /> {blog.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5" /> By {blog.author}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-[#D91E18] transition-colors leading-tight">
                                    <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                </h2>
                                <p className="text-zinc-500 text-[15px] font-medium leading-relaxed mb-8 flex-1">
                                    {blog.excerpt}
                                </p>
                                <Link
                                    to={`/blog/${blog.slug}`}
                                    className="inline-flex items-center gap-2 text-[#D91E18] font-bold text-sm hover:underline group-hover:gap-3 transition-all"
                                >
                                    Read Article <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter Shortcut / Call to Action */}
                <div className="mt-32 p-12 lg:p-20 bg-zinc-900 rounded-[4rem] text-center relative overflow-hidden shadow-2xl shadow-zinc-900/10">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D91E18]/10 rounded-full blur-[100px] -mr-20 -mt-20" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-6">Want more city guides?</h2>
                        <p className="text-zinc-400 text-lg font-medium mb-10">Sign up for our regular updates and be the first to know about new locations and hidden gems.</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 h-16 px-8 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D91E18]/50 transition-all font-medium"
                            />
                            <button className="h-16 px-10 rounded-2xl bg-[#D91E18] text-white font-bold hover:bg-[#c2185b] transition-all shadow-xl shadow-[#D91E18]/20">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage;
