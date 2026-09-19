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

// Static pages
const staticPages = [
  '',
  'service-areas',
  'post-ad',
  'pricing',
  'search',
  'reviews',
  'map',
  'blog',
  'agencies',
  'sitemap-directory'
];

// Info pages
const infoPages = [
  "about-us",
  "advertise",
  "affiliate",
  "contact-support",
  "privacy-policy",
  "terms-of-use",
  "dmca-policy",
  "cookie-policy",
  "content-policy",
  "moderation-policy",
  "the-partners",
  "affiliate-program",
  "banners",
  "dmca-withdrawal"
];

function writeBoth(filename, content) {
  const publicPath = path.resolve('public', filename);
  fs.writeFileSync(publicPath, content, 'utf8');

  const distPath = path.resolve('dist', filename);
  if (fs.existsSync(path.resolve('dist'))) {
    fs.writeFileSync(distPath, content, 'utf8');
  }
}

async function run() {
  console.log(`Generating sitemaps with base URL: ${SITE_URL}`);

  const indiaCitiesMod = await loadTsModule('src/data/indiaCities.ts');
  const worldCitiesMod = await loadTsModule('src/data/worldCities.ts');
  const blogsMod = await loadTsModule('src/data/blogs.ts');
  const seoContentMod = await loadTsModule('src/data/seoContent.ts');

  const indiaStates = indiaCitiesMod.indiaStates || [];
  const rawCountries = worldCitiesMod.rawCountries || [];
  const cityToRegionMap = worldCitiesMod.cityToRegionMap || {};
  const cityBlogs = blogsMod.cityBlogs || [];
  const citySEOData = seoContentMod.citySEOData || {};

  const topPrioritySlugs = new Set([
    ...Object.keys(citySEOData),
    'mumbai', 'delhi', 'bengaluru', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune',
    'ahmedabad', 'jaipur', 'chandigarh', 'lucknow', 'indore', 'gurgaon', 'noida', 'surat',
    'nagpur', 'kochi', 'patna', 'bhopal', 'panaji', 'calangute', 'goa', 'guwahati', 'dehradun'
  ]);

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

  const currentDate = new Date().toISOString().split('T')[0];

  // 1. SITEMAP MAIN (Static + Info)
  let mainXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  mainXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  staticPages.forEach(p => {
    const loc = p === '' ? `${SITE_URL}` : `${SITE_URL}${p}`;
    mainXml += `  <url>\n`;
    mainXml += `    <loc>${loc}</loc>\n`;
    mainXml += `    <lastmod>${currentDate}</lastmod>\n`;
    mainXml += `    <changefreq>daily</changefreq>\n`;
    mainXml += `    <priority>${p === '' ? '1.0' : '0.8'}</priority>\n`;
    mainXml += `  </url>\n`;
  });

  infoPages.forEach(p => {
    mainXml += `  <url>\n`;
    mainXml += `    <loc>${SITE_URL}info/${p}</loc>\n`;
    mainXml += `    <lastmod>${currentDate}</lastmod>\n`;
    mainXml += `    <changefreq>monthly</changefreq>\n`;
    mainXml += `    <priority>0.5</priority>\n`;
    mainXml += `  </url>\n`;
  });

  mainXml += '</urlset>\n';
  writeBoth('sitemap_main.xml', mainXml);

  // Helper for category sitemaps
  const buildCategorySitemap = (prefixPath, filename) => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    const addedRegions = new Set();
    const addedCities = new Set();

    worldCountries.forEach(country => {
      country.regions.forEach(region => {
        if (!addedRegions.has(region.slug)) {
          addedRegions.add(region.slug);
          xml += `  <url>\n`;
          xml += `    <loc>${SITE_URL}${prefixPath}/${region.slug}</loc>\n`;
          xml += `    <lastmod>${currentDate}</lastmod>\n`;
          xml += `    <changefreq>weekly</changefreq>\n`;
          xml += `    <priority>0.8</priority>\n`;
          xml += `  </url>\n`;
        }

        region.cities.forEach(city => {
          const cityKey = `${region.slug}/${city.slug}`;
          if (!addedCities.has(cityKey)) {
            addedCities.add(cityKey);
            const isTopCity = topPrioritySlugs.has(city.slug);
            xml += `  <url>\n`;
            xml += `    <loc>${SITE_URL}${prefixPath}/${region.slug}/${city.slug}</loc>\n`;
            xml += `    <lastmod>${currentDate}</lastmod>\n`;
            xml += `    <changefreq>${isTopCity ? 'weekly' : 'monthly'}</changefreq>\n`;
            xml += `    <priority>${isTopCity ? '0.9' : '0.6'}</priority>\n`;
            xml += `  </url>\n`;
          }
        });
      });
    });

    xml += '</urlset>\n';
    writeBoth(filename, xml);
    return { regionsCount: addedRegions.size, citiesCount: addedCities.size };
  };

  // 2. SITEMAP CALL GIRLS
  const callGirlsStats = buildCategorySitemap('call-girls', 'sitemap_call_girls.xml');
  console.log(`Generated sitemap_call_girls.xml: ${callGirlsStats.regionsCount} regions, ${callGirlsStats.citiesCount} cities`);

  // 3. SITEMAP MASSAGE
  const massageStats = buildCategorySitemap('massage', 'sitemap_massage.xml');
  console.log(`Generated sitemap_massage.xml: ${massageStats.regionsCount} regions, ${massageStats.citiesCount} cities`);

  // 4. SITEMAP BLOGS
  let blogsXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  blogsXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  cityBlogs.forEach(blog => {
    blogsXml += `  <url>\n`;
    blogsXml += `    <loc>${SITE_URL}blog/${blog.slug}</loc>\n`;
    blogsXml += `    <lastmod>${blog.date || currentDate}</lastmod>\n`;
    blogsXml += `    <changefreq>weekly</changefreq>\n`;
    blogsXml += `    <priority>0.7</priority>\n`;
    blogsXml += `  </url>\n`;
  });
  blogsXml += '</urlset>\n';
  writeBoth('sitemap_blogs.xml', blogsXml);
  console.log(`Generated sitemap_blogs.xml: ${cityBlogs.length} articles`);

  // 5. SITEMAP INDEX
  let indexXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  indexXml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const subSitemaps = ['sitemap_main.xml', 'sitemap_call_girls.xml', 'sitemap_massage.xml', 'sitemap_blogs.xml'];
  subSitemaps.forEach(file => {
    indexXml += `  <sitemap>\n`;
    indexXml += `    <loc>${SITE_URL}${file}</loc>\n`;
    indexXml += `    <lastmod>${currentDate}</lastmod>\n`;
    indexXml += `  </sitemap>\n`;
  });
  indexXml += '</sitemapindex>\n';
  writeBoth('sitemap.xml', indexXml);

  // Update robots.txt with exact sitemap URLs
  let robotsTxt = `# robots.txt
User-agent: *
Allow: /
Allow: /call-girls/
Allow: /massage/
Allow: /blog/
Allow: /service-areas/
Allow: /assets/
Allow: /images/
Allow: /models/

# Block private / admin pages
Disallow: /admin/
Disallow: /dashboard/
Disallow: /login
Disallow: /register
Disallow: /create-profile
Disallow: /api/
Disallow: /search?
Disallow: /profile/
Disallow: /*?*

User-agent: Googlebot
Allow: /
Disallow: /admin/
Disallow: /dashboard/
Disallow: /api/

User-agent: Bingbot
Allow: /
Disallow: /admin/
Disallow: /dashboard/
Disallow: /api/

# Sitemaps
Sitemap: ${SITE_URL}sitemap.xml
Sitemap: ${SITE_URL}sitemap_main.xml
Sitemap: ${SITE_URL}sitemap_call_girls.xml
Sitemap: ${SITE_URL}sitemap_massage.xml
Sitemap: ${SITE_URL}sitemap_blogs.xml
`;
  writeBoth('robots.txt', robotsTxt);

  console.log("Successfully generated all sitemaps and synced robots.txt in public/ and dist/!");
}

run().catch(err => {
  console.error("Error generating sitemaps:", err);
  process.exit(1);
});
