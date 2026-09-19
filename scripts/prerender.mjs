import fs from 'fs';
import path from 'path';
import * as esbuild from 'esbuild';

const rawSiteUrl = process.env.VITE_SITE_URL || process.env.SITE_URL || 'https://in.kokasite.com';
const SITE_URL = rawSiteUrl.replace(/\/+$/, '') + '/';

// Helper to load TS modules dynamically via esbuild
async function loadTsModule(filePath) {
  const result = await esbuild.build({
    entryPoints: [filePath],
    write: false,
    format: 'esm',
    bundle: true,
  });
  const code = result.outputFiles[0].text;
  const dataUrl = `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
  return import(dataUrl);
}

function capitalize(str) {
  if (!str) return '';
  return str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function runPrerender() {
  const distDir = path.resolve('dist');
  const indexPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('Error: dist/index.html does not exist. Run vite build first.');
    process.exit(1);
  }

  const rawHtml = fs.readFileSync(indexPath, 'utf8');

  // Ensure clean template: strip any previously injected content inside body and head
  const templateHtml = rawHtml
    .replace(/<div id="root">[\s\S]*?<\/div>\s*<\/body>/i, '<div id="root"></div>\n</body>')
    .replace(/<title>.*?<\/title>/gi, '<title>__TITLE__</title>')
    .replace(/<meta name="description"[^>]*\/?>/gi, '')
    .replace(/<link rel="canonical"[^>]*\/?>/gi, '')
    .replace(/<meta property="og:[^"]*"[^>]*\/?>/gi, '')
    .replace(/<meta name="twitter:[^"]*"[^>]*\/?>/gi, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

  console.log(`Loading application data for rich pre-rendering (Site URL: ${SITE_URL})...`);
  const indiaCitiesMod = await loadTsModule('src/data/indiaCities.ts');
  const worldCitiesMod = await loadTsModule('src/data/worldCities.ts');
  const seoContentMod = await loadTsModule('src/data/seoContent.ts');
  const blogsMod = await loadTsModule('src/data/blogs.ts');

  const indiaStates = indiaCitiesMod.indiaStates || [];
  const rawCountries = worldCitiesMod.rawCountries || [];
  const cityToRegionMap = worldCitiesMod.cityToRegionMap || {};
  const citySEOData = seoContentMod.citySEOData || {};
  const stateSEOData = seoContentMod.stateSEOData || {};
  const infoPagesData = seoContentMod.infoPages || {};
  const cityBlogs = blogsMod.cityBlogs || [];

  const indiaRegions = indiaStates.map(s => ({
    name: s.name,
    slug: s.slug,
    cities: s.cities.map(c => ({
      name: c.name,
      slug: c.slug
    }))
  }));

  const worldCountries = [
    {
      name: "India",
      slug: "india",
      code: "IN",
      regions: indiaRegions
    },
    ...rawCountries.map(c => {
      const regionGroups = {};
      c.cities.forEach(cityName => {
        const citySlug = cityName.toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-");

        const lookupKey = (c.code + "_" + cityName).toLowerCase().trim();
        const mapped = cityToRegionMap[lookupKey];
        const rName = mapped ? mapped.name : c.name;
        const rSlug = mapped ? mapped.slug : c.slug;

        if (!regionGroups[rSlug]) {
          regionGroups[rSlug] = { name: rName, cities: [] };
        }
        regionGroups[rSlug].cities.push({ name: cityName, slug: citySlug });
      });

      const regions = Object.entries(regionGroups).map(([rSlug, group]) => ({
        name: group.name,
        slug: rSlug,
        cities: group.cities
      }));

      return {
        name: c.name,
        slug: c.slug,
        code: c.code,
        regions
      };
    })
  ];

  let generatedCount = 0;

  function writeRouteHtml(routePath, { title, description, h1Text, breadcrumbs, mainContent, schemaJson }) {
    const fullUrl = `${SITE_URL}${routePath}`.replace(/\/+/g, '/').replace(':/', '://');

    // Start with a clean copy of template
    let html = templateHtml;

    // Replace Title
    html = html.replace('<title>__TITLE__</title>', `<title>${escapeHtml(title)}</title>`);

    // Injections to <head>
    const headTags = [
      `<meta name="description" content="${escapeHtml(description)}" />`,
      `<link rel="canonical" href="${fullUrl}" />`,
      `<meta property="og:title" content="${escapeHtml(title)}" />`,
      `<meta property="og:description" content="${escapeHtml(description)}" />`,
      `<meta property="og:url" content="${fullUrl}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
      `<meta name="twitter:description" content="${escapeHtml(description)}" />`
    ];

    if (schemaJson) {
      headTags.push(`<script type="application/ld+json">\n${JSON.stringify(schemaJson, null, 2)}\n  </script>`);
    }

    html = html.replace('</head>', `  ${headTags.join('\n  ')}\n</head>`);

    // Build Breadcrumb HTML
    let breadcrumbHtml = '';
    if (breadcrumbs && breadcrumbs.length > 0) {
      const crumbsList = breadcrumbs.map((b, idx) => {
        if (idx === breadcrumbs.length - 1) {
          return `<span style="color: #f4b827;">${escapeHtml(b.name)}</span>`;
        }
        return `<a href="${b.url}" style="color: #a1a1aa; text-decoration: none;">${escapeHtml(b.name)}</a> &gt; `;
      }).join('');
      breadcrumbHtml = `<nav aria-label="Breadcrumb" style="font-size: 13px; margin-bottom: 20px; color: #71717a;">${crumbsList}</nav>`;
    }

    // Build 100% VISIBLE, SEMANTIC HTML inside <div id="root">
    // (React will hydrate and take over gracefully when JS loads, while search crawlers receive pure, rich HTML)
    const prerenderedRootHtml = `
<div id="root">
  <div style="min-height: 100vh; background-color: #09090b; color: #f4f4f5; font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; padding: 24px 20px; max-width: 1200px; margin: 0 auto;">
    <header style="border-bottom: 1px solid #27272a; padding-bottom: 18px; margin-bottom: 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
      <a href="/" style="font-size: 26px; font-weight: 800; color: #f4b827; text-decoration: none; letter-spacing: -0.5px;">Koka Site</a>
      <nav style="display: flex; gap: 18px; flex-wrap: wrap; font-size: 14px; font-weight: 500;">
        <a href="/" style="color: #e4e4e7; text-decoration: none;">Home</a>
        <a href="/call-girls/delhi-ncr" style="color: #e4e4e7; text-decoration: none;">Call Girls</a>
        <a href="/massage/delhi-ncr" style="color: #e4e4e7; text-decoration: none;">Body Massage</a>
        <a href="/service-areas" style="color: #e4e4e7; text-decoration: none;">Service Areas</a>
        <a href="/blog" style="color: #e4e4e7; text-decoration: none;">Blog</a>
        <a href="/sitemap-directory" style="color: #e4e4e7; text-decoration: none;">All Locations</a>
        <a href="/post-ad" style="background-color: #f4b827; color: #09090b; padding: 6px 14px; border-radius: 6px; text-decoration: none; font-weight: 700;">Post Free Ad</a>
      </nav>
    </header>

    <main>
      ${breadcrumbHtml}
      <article style="max-width: 900px; margin: 0 auto 40px auto;">
        <h1 style="font-size: 32px; font-weight: 800; color: #fafafa; margin-bottom: 20px; line-height: 1.25; letter-spacing: -0.5px;">${escapeHtml(h1Text || title)}</h1>
        <div style="font-size: 16px; color: #d4d4d8;">
          ${mainContent}
        </div>
      </article>
    </main>

    <footer style="margin-top: 60px; border-top: 1px solid #27272a; padding-top: 30px; text-align: center; color: #71717a; font-size: 13px;">
      <p style="margin-bottom: 8px;">© 2026 Koka Site. India's Verified Escorts, Call Girls & Body Massage Classified Directory. 18+ Only.</p>
      <p>
        <a href="/info/privacy-policy" style="color: #a1a1aa; text-decoration: underline; margin: 0 8px;">Privacy Policy</a> |
        <a href="/info/terms-of-use" style="color: #a1a1aa; text-decoration: underline; margin: 0 8px;">Terms of Use</a> |
        <a href="/info/contact-support" style="color: #a1a1aa; text-decoration: underline; margin: 0 8px;">Contact Support</a> |
        <a href="/sitemap-directory" style="color: #a1a1aa; text-decoration: underline; margin: 0 8px;">Sitemap Directory</a>
      </p>
    </footer>
  </div>
</div>
    `.trim();

    html = html.replace(/<div id="root"><\/div>/i, prerenderedRootHtml);

    // Save to dist/routePath/index.html
    const targetDir = routePath === '' ? distDir : path.join(distDir, routePath);
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
    generatedCount++;
  }

  const serviceAreasContent = `
    <p style="font-size: 16px; color: #e4e4e7; margin-bottom: 24px;">Explore all 36 Indian states and union territories where independent companions and body massage specialists provide classified listings across major cities and districts.</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; margin-bottom: 36px;">
      ${indiaRegions.map(reg => `
        <div style="background-color: #141416; border: 1px solid #27272a; border-radius: 12px; padding: 16px;">
          <h2 style="color: #fafafa; margin: 0 0 8px 0; font-size: 17px;">${escapeHtml(reg.name)}</h2>
          <p style="font-size: 13px; margin: 0 0 10px 0;">
            <a href="/call-girls/${reg.slug}" style="color: #f4b827; font-weight: 600; text-decoration: none; margin-right: 12px;">${escapeHtml(reg.name)} Call Girls &rarr;</a>
            <a href="/massage/${reg.slug}" style="color: #34d399; font-weight: 600; text-decoration: none;">Massage &rarr;</a>
          </p>
          <div style="font-size: 12px; color: #a1a1aa; line-height: 1.8;">
            ${reg.cities.map(c => `<a href="/call-girls/${reg.slug}/${c.slug}" style="color: #d4d4d8; text-decoration: none; margin-right: 8px;">${escapeHtml(c.name)}</a>`).join(' • ')}
          </div>
        </div>
      `).join('')}
    </div>
    <div style="margin-top: 24px; text-align: center;">
      <a href="/sitemap-directory" style="color: #f4b827; font-size: 18px; font-weight: 600; text-decoration: underline;">View Complete A-Z Location Sitemap Directory &rarr;</a>
    </div>
  `;

  const sitemapDirectoryContent = `
    <p style="font-size: 16px; color: #e4e4e7; margin-bottom: 24px;">Direct navigation index for every state, metropolitan city, and specialized service offered on Koka Site across India.</p>
    ${indiaRegions.map(reg => `
      <div style="margin-bottom: 28px; background-color: #141416; border: 1px solid #27272a; border-radius: 12px; padding: 20px;">
        <h2 style="color: #fafafa; font-size: 20px; margin-top: 0; margin-bottom: 8px; border-bottom: 1px solid #27272a; padding-bottom: 8px;">
          ${escapeHtml(reg.name)} Directory
          <span style="font-size: 13px; font-weight: normal; margin-left: 12px;">
            <a href="/call-girls/${reg.slug}" style="color: #f4b827; text-decoration: underline; margin-right: 12px;">${escapeHtml(reg.name)} Call Girls</a>
            <a href="/massage/${reg.slug}" style="color: #34d399; text-decoration: underline;">${escapeHtml(reg.name)} Massage</a>
          </span>
        </h2>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px;">
          ${reg.cities.map(c => `
            <span style="padding: 4px 8px; border-radius: 4px; background-color: #1c1c1f; font-size: 13px;">
              <a href="/call-girls/${reg.slug}/${c.slug}" style="color: #f4b827; text-decoration: none; margin-right: 6px;">${escapeHtml(c.name)} Call Girls</a>
              <span style="color: #52525b;">|</span>
              <a href="/massage/${reg.slug}/${c.slug}" style="color: #34d399; text-decoration: none; margin-left: 6px;">Massage</a>
            </span>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `;

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. Static Pages
  // ─────────────────────────────────────────────────────────────────────────────
  const staticPages = [
    {
      path: '',
      title: 'Koka Site — Independent Adult Companions & Massage Classifieds Directory',
      desc: 'Browse independent companion classifieds, adult escorts, and body massage directory across India on Koka Site. Direct contacts, transparent listings, and safety guidelines.',
      h1: 'Independent Adult Companions, Classifieds & Body Massage Directory',
      content: `
        <p style="font-size: 18px; color: #e4e4e7; margin-bottom: 24px;">Welcome to <strong>Koka Site</strong>, India's classifieds platform connecting adults with independent companions, escorts, and relaxing body massage specialists.</p>
        
        <div style="background-color: #18181b; border: 1px solid #27272a; border-radius: 10px; padding: 24px; margin-bottom: 32px;">
          <h2 style="font-size: 20px; color: #f4b827; margin-top: 0;">Community Moderated &amp; Transparent Directory</h2>
          <p style="margin-bottom: 0;">We prioritize client and advertiser safety. Profiles listed on our directory provide direct advertiser communication channels. For your safety, we strongly advise meeting in verified settings and avoiding any online advance deposits or booking fees.</p>
        </div>

        <h2 style="font-size: 22px; color: #fafafa; margin-bottom: 16px;">Top Service Cities in India</h2>
        <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; list-style: none; padding: 0; margin-bottom: 36px;">
          <li><a href="/call-girls/delhi-ncr" style="color: #f4b827; font-weight: 600; text-decoration: none;">Delhi NCR Call Girls</a></li>
          <li><a href="/call-girls/maharashtra/mumbai" style="color: #f4b827; font-weight: 600; text-decoration: none;">Mumbai Call Girls</a></li>
          <li><a href="/call-girls/karnataka/bengaluru" style="color: #f4b827; font-weight: 600; text-decoration: none;">Bengaluru Call Girls</a></li>
          <li><a href="/call-girls/telangana/hyderabad" style="color: #f4b827; font-weight: 600; text-decoration: none;">Hyderabad Call Girls</a></li>
          <li><a href="/call-girls/tamil-nadu/chennai" style="color: #f4b827; font-weight: 600; text-decoration: none;">Chennai Call Girls</a></li>
          <li><a href="/call-girls/west-bengal/kolkata" style="color: #f4b827; font-weight: 600; text-decoration: none;">Kolkata Call Girls</a></li>
          <li><a href="/call-girls/maharashtra/pune" style="color: #f4b827; font-weight: 600; text-decoration: none;">Pune Call Girls</a></li>
          <li><a href="/call-girls/gujarat/ahmedabad" style="color: #f4b827; font-weight: 600; text-decoration: none;">Ahmedabad Call Girls</a></li>
          <li><a href="/call-girls/rajasthan/jaipur" style="color: #f4b827; font-weight: 600; text-decoration: none;">Jaipur Call Girls</a></li>
          <li><a href="/call-girls/goa/panaji" style="color: #f4b827; font-weight: 600; text-decoration: none;">Goa Escorts &amp; Call Girls</a></li>
        </ul>

        <h2 style="font-size: 22px; color: #fafafa; margin-bottom: 16px;">Relaxing Body Massage Parlors &amp; Therapists</h2>
        <p>Unwind and soothe muscle tension with certified independent masseuses, Nuru massage, Swedish therapy, and full body wellness spas available 24/7 across prime metropolitan localities.</p>
        <p><a href="/service-areas" style="color: #f4b827; font-weight: 600;">Browse all service areas and states &rarr;</a></p>
      `
    },
    {
      path: 'service-areas',
      title: 'Service Areas & Locations Directory - Koka Site',
      desc: 'Browse our comprehensive list of states, union territories, and cities offering verified adult companion and body massage services.',
      h1: 'All India Service Areas & Locations',
      content: serviceAreasContent
    },
    {
      path: 'post-ad',
      title: 'Post Free Classified Ad - Koka Site Directory',
      desc: 'Post your independent companion or body massage advertisement on Koka Site. Reach verified clients 24/7 with zero posting hassle.',
      h1: 'Post Your Classified Advertisement',
      content: `
        <p>Are you an independent provider, agency, or certified massage therapist? Advertise your services on Koka Site to gain instant daily visibility among thousands of verified active clients.</p>
        <ul style="line-height: 1.8; margin-top: 16px;">
          <li>100% genuine verified client inquiries directly via phone and WhatsApp.</li>
          <li>Flexible free and VIP Diamond spotlight bump options.</li>
          <li>Complete privacy protection and encrypted profile control.</li>
        </ul>
      `
    },
    {
      path: 'pricing',
      title: 'VIP Listing Packages & Ad Pricing - Koka Site',
      desc: 'Explore affordable VIP advertising packages, top-spot bumps, and diamond verified badges on Koka Site.',
      h1: 'VIP Advertising Packages & Listing Rates',
      content: `
        <p>Maximize your bookings with Koka Site's top-tier promotional placements. Choose between Silver, Gold, and Diamond VIP packages to rank at the top of your city's search results.</p>
      `
    },
    {
      path: 'search',
      title: 'Search Verified Companions & Massage in Your City - Koka Site',
      desc: 'Filter verified independent call girls, adult escorts, and massage therapists by city, category, and service options.',
      h1: 'Search Verified Local Profiles',
      content: `
        <p>Use our advanced search filters to find companions by city, neighborhood, category, language, and services offered.</p>
      `
    },
    {
      path: 'reviews',
      title: 'Verified Client Reviews & Ratings - Koka Site',
      desc: 'Read authentic client testimonials, feedback, and service reviews for independent escorts and massage parlors.',
      h1: 'Client Reviews & Service Feedback',
      content: `
        <p>Check authentic client feedback before booking. All reviews are vetted by our moderation team to ensure real experiences and prevent fake ratings.</p>
      `
    },
    {
      path: 'blog',
      title: 'Escort Guides, Safety Tips & Nightlife Blog - Koka Site',
      desc: 'Explore insightful companion hiring tips, dating etiquette, nightlife recommendations, and city escort guides.',
      h1: 'Official Koka Site Blog & Guides',
      content: `
        <p>Stay informed with our comprehensive lifestyle guides, city nightlife insights, and essential tips for meeting independent companions safely.</p>
      `
    },
    {
      path: 'agencies',
      title: 'Verified Escort Agencies & Spas - Koka Site',
      desc: 'Explore reputable companion agencies and wellness massage centers operating across top Indian cities.',
      h1: 'Top Verified Agencies Directory',
      content: `
        <p>Discover reputable partner agencies offering high-profile companion services, celebrity escorts, and luxury spa packages.</p>
      `
    },
    {
      path: 'sitemap-directory',
      title: 'HTML Sitemap & Complete Location Directory - Koka Site',
      desc: 'Browse our complete directory of verified cities, states, and categories across India.',
      h1: 'Complete Location Directory & Sitemap',
      content: sitemapDirectoryContent
    }
  ];

  staticPages.forEach(p => {
    writeRouteHtml(p.path, {
      title: p.title,
      description: p.desc,
      h1Text: p.h1,
      breadcrumbs: p.path === '' ? [] : [{ name: 'Home', url: '/' }, { name: p.h1, url: `/${p.path}` }],
      mainContent: p.content,
      schemaJson: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": p.title,
        "description": p.desc,
        "url": `${SITE_URL}${p.path}`
      }
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. Info Pages (From seoContent.ts)
  // ─────────────────────────────────────────────────────────────────────────────
  const infoSlugs = ['about-us', 'advertise', 'affiliate', 'contact-support', 'privacy-policy', 'terms-of-use', 'dmca-policy', 'cookie-policy', 'content-policy', 'moderation-policy', 'the-partners', 'affiliate-program', 'banners', 'dmca-withdrawal'];

  infoSlugs.forEach(slug => {
    const infoData = infoPagesData[slug] || {};
    const titleName = infoData.title || `${capitalize(slug)} | Koka Site`;
    const metaDesc = infoData.metaDesc || `Read official documentation and policies regarding ${capitalize(slug)} on Koka Site.`;
    const formattedContent = (infoData.content || `
      <p>Official document for ${capitalize(slug)} on Koka Site.</p>
      <p>Koka Site is committed to maintaining top standards of user safety, privacy protection, and transparent moderation.</p>
    `).replace(/\n/g, '<br/>');

    writeRouteHtml(`info/${slug}`, {
      title: titleName,
      description: metaDesc,
      h1Text: capitalize(slug),
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Info', url: '/service-areas' },
        { name: capitalize(slug), url: `/info/${slug}` }
      ],
      mainContent: `<div>${formattedContent}</div>`,
      schemaJson: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": titleName,
        "description": metaDesc,
        "url": `${SITE_URL}info/${slug}`
      }
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. Blog Articles (All 100 blog posts pre-rendered)
  // ─────────────────────────────────────────────────────────────────────────────
  cityBlogs.forEach(blog => {
    const blogUrl = `${SITE_URL}blog/${blog.slug}`;
    writeRouteHtml(`blog/${blog.slug}`, {
      title: `${blog.title} | Koka Site Blog`,
      description: blog.excerpt,
      h1Text: blog.title,
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: blog.title, url: `/blog/${blog.slug}` }
      ],
      mainContent: `
        <div style="font-size: 14px; color: #a1a1aa; margin-bottom: 20px; display: flex; gap: 16px; flex-wrap: wrap;">
          <span>By <strong>${escapeHtml(blog.author || 'Editorial Team')}</strong></span>
          <span>Published: ${blog.date || '2026-08-11'}</span>
          <span>Category: <strong style="color: #f4b827;">${escapeHtml(blog.category || 'Nightlife Guide')}</strong></span>
        </div>
        <p style="font-size: 18px; line-height: 1.6; color: #f4f4f5; font-style: italic; margin-bottom: 24px;">${escapeHtml(blog.excerpt)}</p>
        <div style="line-height: 1.8; color: #d4d4d8; font-size: 16px; margin-bottom: 32px;">
          ${blog.content ? blog.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>') : `<p>${blog.excerpt}</p>`}
        </div>
        <div style="background-color: #18181b; border: 1px solid #27272a; padding: 20px; border-radius: 8px; margin-top: 30px;">
          <h3 style="color: #f4b827; margin-top: 0; font-size: 18px;">Looking for companions in this city?</h3>
          <p style="margin-bottom: 0;">Explore verified profiles in ${escapeHtml(capitalize(blog.featuredCitySlug || 'your city'))}: <a href="/call-girls/${blog.featuredCitySlug || 'delhi-ncr'}" style="color: #f4b827; font-weight: 600;">Browse local verified listings &rarr;</a></p>
        </div>
      `,
      schemaJson: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.excerpt,
        "datePublished": blog.date || "2026-08-11",
        "url": blogUrl,
        "author": {
          "@type": "Person",
          "name": blog.author || "Editorial Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Koka Site",
          "url": SITE_URL
        }
      }
    });
  });

  console.log(`Pre-rendered ${cityBlogs.length} rich blog posts.`);

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. Call Girls & Massage (State and City Pages)
  // ─────────────────────────────────────────────────────────────────────────────
  const categoryConfigs = [
    {
      prefix: 'call-girls',
      termSingular: 'Call Girl',
      termPlural: 'Call Girls',
      categoryTitle: 'Independent Call Girls & Escorts',
      typeDesc: 'verified independent call girls, adult escorts, and VIP companions'
    },
    {
      prefix: 'massage',
      termSingular: 'Body Massage Service',
      termPlural: 'Body Massage Services',
      categoryTitle: 'Body Massage & Spa Services',
      typeDesc: 'certified massage therapists, Nuru massage, Swedish therapy, and B2B body massage'
    }
  ];

  categoryConfigs.forEach(cfg => {
    const writtenRegions = new Set();
    const writtenCities = new Set();

    worldCountries.forEach(country => {
      country.regions.forEach(region => {
        const regionSlug = region.slug;
        const regionName = region.name;

        // ───────────────────────────────────────────────────────────────────────
        // State / Region Page
        // ───────────────────────────────────────────────────────────────────────
        if (!writtenRegions.has(regionSlug)) {
          writtenRegions.add(regionSlug);

          const customStateData = stateSEOData[regionSlug];
          const stateTitle = customStateData?.title || `${regionName} ${cfg.termPlural} — Independent Directory | Koka Site`;
          const stateDesc = customStateData?.metaDesc || `Explore independent ${cfg.termPlural.toLowerCase()} and wellness services in ${regionName}. Browse listings across major districts with direct advertiser contacts.`;
          const stateH1 = customStateData?.h1 || `${regionName} ${cfg.termPlural} & Companion Directory`;
          const stateIntro = customStateData?.intro
            ? customStateData.intro.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>')
            : `<p>Welcome to Koka Site's official ${regionName} ${cfg.termPlural.toLowerCase()} directory. Browse independent companions and ${cfg.typeDesc} operating across districts and cities in ${regionName}.</p><p>All listings provide direct contact options. We encourage users to verify arrangements directly and avoid sending any advance payments.</p>`;

          const citiesListHtml = region.cities.map(c =>
            `<li><a href="/${cfg.prefix}/${regionSlug}/${c.slug}" style="color: #f4b827; text-decoration: none; font-weight: 500; display: block; padding: 10px 14px; background: #18181b; border: 1px solid #27272a; border-radius: 6px; transition: border-color 0.2s;">${escapeHtml(c.name)} ${cfg.termPlural}</a></li>`
          ).join('');

          writeRouteHtml(`${cfg.prefix}/${regionSlug}`, {
            title: stateTitle,
            description: stateDesc,
            h1Text: stateH1,
            breadcrumbs: [
              { name: 'Home', url: '/' },
              { name: cfg.categoryTitle, url: `/${cfg.prefix}/${regionSlug}` },
              { name: regionName, url: `/${cfg.prefix}/${regionSlug}` }
            ],
            mainContent: `
              <div style="font-size: 16px; line-height: 1.8; margin-bottom: 30px;">
                <p>${stateIntro}</p>
              </div>

              <div style="background-color: #18181b; border: 1px solid #27272a; border-radius: 8px; padding: 20px; margin-bottom: 36px;">
                <h2 style="font-size: 20px; color: #f4b827; margin-top: 0;">Safety &amp; Booking Guidelines in ${escapeHtml(regionName)}</h2>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                  <li><strong>Zero Advance Deposit:</strong> Always make payments directly hand-to-hand upon meeting the companion.</li>
                  <li><strong>Discreet &amp; Private:</strong> Meetings can be arranged at top 3-star, 4-star, or 5-star hotels or client's private residences.</li>
                  <li><strong>Verified Contacts:</strong> Profiles are updated regularly with direct WhatsApp and telephone numbers.</li>
                </ul>
              </div>

              <h2 style="font-size: 22px; color: #fafafa; margin-bottom: 16px;">Top Cities &amp; Locations in ${escapeHtml(regionName)}</h2>
              <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; list-style: none; padding: 0; margin-bottom: 36px;">
                ${citiesListHtml}
              </ul>
            `,
            schemaJson: {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": stateTitle,
              "description": stateDesc,
              "url": `${SITE_URL}${cfg.prefix}/${regionSlug}`
            }
          });
        }

        // ───────────────────────────────────────────────────────────────────────
        // City Page
        // ───────────────────────────────────────────────────────────────────────
        region.cities.forEach(city => {
          const citySlug = city.slug;
          const cityName = city.name;
          const cityKey = `${regionSlug}/${citySlug}`;

          if (!writtenCities.has(cityKey)) {
            writtenCities.add(cityKey);

            // Check if human-written rich SEO data exists for this city
            const customCityData = citySEOData[citySlug];

            let pageTitle, pageDesc, h1Text, mainBodyHtml, faqs;

            if (customCityData && cfg.prefix === 'call-girls') {
              pageTitle = customCityData.title;
              pageDesc = customCityData.metaDesc;
              h1Text = customCityData.h1;
              const formattedCustomContent = customCityData.content
                .replace(/\n\n/g, '</p><p>')
                .replace(/\n/g, '<br/>');

              mainBodyHtml = `
                <div style="font-size: 16px; line-height: 1.8; margin-bottom: 28px;">
                  <p>${formattedCustomContent}</p>
                </div>
              `;
            } else {
              pageTitle = cfg.prefix === 'call-girls'
                ? `${cityName} Call Girls — Independent Companions in ${cityName} | Koka Site`
                : `${cityName} Body Massage — Independent Spas & Therapists in ${cityName} | Koka Site`;

              pageDesc = cfg.prefix === 'call-girls'
                ? `Explore independent call girls and adult companions in ${cityName}, ${regionName}. Browse local classifieds with direct contact details and safety guidance on Koka Site.`
                : `Discover independent body massage therapists and wellness spa listings in ${cityName}, ${regionName}. Transparent listings and direct contacts on Koka Site.`;

              h1Text = `${cityName} ${cfg.termPlural} — Independent Classifieds & Directory`;

              mainBodyHtml = `
                <p style="font-size: 17px; line-height: 1.8; color: #e4e4e7; margin-bottom: 20px;">
                  Welcome to the official <strong>${escapeHtml(cityName)}</strong> directory for ${escapeHtml(cfg.typeDesc)}. Whether you are a resident professional or visiting ${escapeHtml(cityName)}, ${escapeHtml(regionName)}, Koka Site connects you with local independent advertisers and classified listings.
                </p>

                <div style="background-color: #18181b; border: 1px solid #27272a; border-radius: 8px; padding: 22px; margin-bottom: 28px;">
                  <h2 style="font-size: 20px; color: #f4b827; margin-top: 0;">Directory Guidelines in ${escapeHtml(cityName)}</h2>
                  <p>In ${escapeHtml(cityName)}, independent advertisers provide classified listings directly. We advocate for transparency, mutual respect, and privacy.</p>
                  <ul style="line-height: 1.8; margin-bottom: 0; padding-left: 20px;">
                    <li><strong>Direct Communication:</strong> Communicate directly with listed providers via their published contact details.</li>
                    <li><strong>Safety First:</strong> Avoid paying upfront deposits or booking fees to unknown parties. Arrange meetings in safe, reputable locations.</li>
                    <li><strong>Adult Classifieds:</strong> All advertisers and users must be 18 years of age or older.</li>
                  </ul>
                </div>

                <h2 style="font-size: 20px; color: #fafafa; margin-bottom: 12px;">Market Pricing Overview in ${escapeHtml(cityName)}</h2>
                <div style="overflow-x: auto; margin-bottom: 28px;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left; background: #18181b; border-radius: 8px; overflow: hidden;">
                    <thead>
                      <tr style="border-bottom: 1px solid #27272a; color: #f4b827;">
                        <th style="padding: 12px 16px;">Duration</th>
                        <th style="padding: 12px 16px;">Service Category</th>
                        <th style="padding: 12px 16px;">Estimated Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="border-bottom: 1px solid #27272a;">
                        <td style="padding: 12px 16px;">1 Hour Session</td>
                        <td style="padding: 12px 16px;">Standard companionship / session</td>
                        <td style="padding: 12px 16px; color: #f4b827; font-weight: 600;">₹2,000 - ₹3,500</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #27272a;">
                        <td style="padding: 12px 16px;">2 Hours Session</td>
                        <td style="padding: 12px 16px;">Extended dinner or social date</td>
                        <td style="padding: 12px 16px; color: #f4b827; font-weight: 600;">₹3,500 - ₹6,000</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px;">Full Night (Overnight)</td>
                        <td style="padding: 12px 16px;">Extended companionship</td>
                        <td style="padding: 12px 16px; color: #f4b827; font-weight: 600;">₹7,000 - ₹12,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              `;
            }

            // FAQs for rich snippet inclusion
            faqs = [
              {
                q: `How do I find independent ${cfg.termPlural.toLowerCase()} in ${cityName}?`,
                a: `Browse through the classified ad profiles listed for ${cityName} on Koka Site and contact the advertiser directly via the phone number or messaging details on their profile.`
              },
              {
                q: `Is advance payment required for bookings in ${cityName}?`,
                a: `We advise users never to transfer online advance payments, wire transfers, or booking fees. For safety and fraud prevention, arrange meetings in person at verified venues.`
              },
              {
                q: `What areas and localities in ${cityName} are covered?`,
                a: `Independent advertisers in ${cityName} typically indicate their service radii, covering major hotel districts, central neighborhoods, and surrounding suburbs.`
              }
            ];

            const faqHtml = `
              <div style="margin-top: 36px; border-top: 1px solid #27272a; padding-top: 28px;">
                <h2 style="font-size: 22px; color: #fafafa; margin-bottom: 18px;">Frequently Asked Questions about ${escapeHtml(cityName)} ${escapeHtml(cfg.termPlural)}</h2>
                ${faqs.map(f => `
                  <div style="margin-bottom: 20px; background-color: #141416; border: 1px solid #27272a; border-radius: 8px; padding: 16px;">
                    <h3 style="font-size: 16px; color: #f4b827; margin-top: 0; margin-bottom: 8px;">${escapeHtml(f.q)}</h3>
                    <p style="margin: 0; font-size: 15px; color: #d4d4d8; line-height: 1.6;">${escapeHtml(f.a)}</p>
                  </div>
                `).join('')}
              </div>
            `;

            const nearbyHtml = `
              <div style="margin-top: 36px; background-color: #18181b; border: 1px solid #27272a; border-radius: 8px; padding: 20px;">
                <h3 style="color: #fafafa; margin-top: 0; font-size: 18px;">Explore More Locations in ${escapeHtml(regionName)}</h3>
                <p style="font-size: 14px; color: #a1a1aa; margin-bottom: 12px;">Discover verified independent companions and body massage services across nearby districts:</p>
                <p>
                  <a href="/${cfg.prefix}/${regionSlug}" style="color: #f4b827; font-weight: 600; text-decoration: underline;">View all cities in ${escapeHtml(regionName)} &rarr;</a> • 
                  <a href="/sitemap-directory" style="color: #f4b827; font-weight: 600; text-decoration: underline;">Full Location Directory</a>
                </p>
              </div>
            `;

            writeRouteHtml(`${cfg.prefix}/${regionSlug}/${citySlug}`, {
              title: pageTitle,
              description: pageDesc,
              h1Text: h1Text,
              breadcrumbs: [
                { name: 'Home', url: '/' },
                { name: cfg.categoryTitle, url: `/${cfg.prefix}/${regionSlug}` },
                { name: regionName, url: `/${cfg.prefix}/${regionSlug}` },
                { name: cityName, url: `/${cfg.prefix}/${regionSlug}/${citySlug}` }
              ],
              mainContent: `${mainBodyHtml}${faqHtml}${nearbyHtml}`,
              schemaJson: {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": pageTitle,
                "description": pageDesc,
                "url": `${SITE_URL}${cfg.prefix}/${regionSlug}/${citySlug}`,
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
                    { "@type": "ListItem", "position": 2, "name": cfg.categoryTitle, "item": `${SITE_URL}${cfg.prefix}/${regionSlug}` },
                    { "@type": "ListItem", "position": 3, "name": regionName, "item": `${SITE_URL}${cfg.prefix}/${regionSlug}` },
                    { "@type": "ListItem", "position": 4, "name": cityName, "item": `${SITE_URL}${cfg.prefix}/${regionSlug}/${citySlug}` }
                  ]
                }
              }
            });
          }
        });
      });
    });
  });

  console.log(`\n========================================`);
  console.log(`SUCCESS: Pre-rendered ${generatedCount} total static HTML pages into dist/!`);
  console.log(`- 100% visible, semantic HTML (No hidden text or cloaking)`);
  console.log(`- Full Schema.org JSON-LD (BreadcrumbList, BlogPosting, WebPage)`);
  console.log(`- Rich localized content, pricing tables, safety guidelines, and breadcrumbs`);
  console.log(`========================================\n`);
}

runPrerender().catch(err => {
  console.error("Error during pre-rendering:", err);
  process.exit(1);
});
