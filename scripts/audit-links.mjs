import fs from 'fs';
import path from 'path';
import * as esbuild from 'esbuild';

async function loadTsModule(filePath) {
  const tmpFile = path.resolve('scripts', `.tmp_${path.basename(filePath, path.extname(filePath))}.mjs`);
  await esbuild.build({
    entryPoints: [filePath],
    outfile: tmpFile,
    format: 'esm',
    bundle: true,
  });
  const mod = await import(`file://${tmpFile.replace(/\\/g, '/')}`);
  try { fs.unlinkSync(tmpFile); } catch (e) {}
  return mod;
}

async function audit() {
  console.log('=== Starting Comprehensive Link Audit ===\n');

  // 1. Load Data
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

  const validInfoSlugs = new Set(Object.keys(infoPagesData));
  const validBlogSlugs = new Set(cityBlogs.map(b => b.slug));

  const validStateSlugs = new Set();
  const validCitySlugsByState = new Map(); // stateSlug -> Set(citySlug)
  const allCitySlugs = new Set();
  const citySlugToStateMap = new Map();

  indiaStates.forEach(s => {
    validStateSlugs.add(s.slug);
    if (!validCitySlugsByState.has(s.slug)) validCitySlugsByState.set(s.slug, new Set());
    s.cities.forEach(c => {
      validCitySlugsByState.get(s.slug).add(c.slug);
      allCitySlugs.add(c.slug);
      citySlugToStateMap.set(c.slug, s.slug);
    });
  });

  rawCountries.forEach(c => {
    c.cities.forEach(cityName => {
      const citySlug = cityName.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      const lookupKey = (c.code + "_" + cityName).toLowerCase().trim();
      const mapped = cityToRegionMap[lookupKey];
      const rSlug = mapped ? mapped.slug : c.slug;

      validStateSlugs.add(rSlug);
      if (!validCitySlugsByState.has(rSlug)) validCitySlugsByState.set(rSlug, new Set());
      validCitySlugsByState.get(rSlug).add(citySlug);
      allCitySlugs.add(citySlug);
      citySlugToStateMap.set(citySlug, rSlug);
    });
  });

  console.log(`Loaded dataset:`);
  console.log(`- ${validInfoSlugs.size} info page slugs:`, Array.from(validInfoSlugs));
  console.log(`- ${validBlogSlugs.size} blog slugs`);
  console.log(`- ${validStateSlugs.size} valid state/region slugs`);
  console.log(`- ${allCitySlugs.size} unique city slugs`);

  // Static routes from App.tsx
  const staticRoutes = new Set([
    '/',
    '/service-areas',
    '/login',
    '/register',
    '/post-ad',
    '/dashboard',
    '/admin',
    '/create-profile',
    '/pricing',
    '/search',
    '/sitemap-directory',
    '/reviews',
    '/map',
    '/blog',
    '/agencies'
  ]);

  // Read all files in src/
  function getAllFiles(dir, exts = ['.ts', '.tsx', '.js', '.jsx', '.html']) {
    let files = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
          files = files.concat(getAllFiles(fullPath, exts));
        }
      } else if (exts.includes(path.extname(entry.name))) {
        files.push(fullPath);
      }
    }
    return files;
  }

  const srcFiles = getAllFiles('src');
  srcFiles.push(path.resolve('index.html'));

  const issues = [];

  // Helper to validate a specific path
  function validatePath(rawLink, sourceFile, context = '') {
    const trimmed = rawLink.trim();
    if (!trimmed) {
      issues.push({
        file: path.relative(process.cwd(), sourceFile),
        link: '""',
        severity: 'Warning',
        reason: `Empty link (${context})`
      });
      return;
    }
    if (trimmed === '#') {
      issues.push({
        file: path.relative(process.cwd(), sourceFile),
        link: '#',
        severity: 'Warning',
        reason: `Dead anchor link placeholder "#" (${context})`
      });
      return;
    }
    if (trimmed.startsWith('#') || trimmed.startsWith('tel:') || trimmed.startsWith('mailto:') || trimmed.startsWith('javascript:')) {
      return;
    }
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      if (trimmed.includes('localhost') || trimmed.includes('example.com') || trimmed.includes('919876543210')) {
        issues.push({
          file: path.relative(process.cwd(), sourceFile),
          link: trimmed,
          severity: 'Warning',
          reason: `Placeholder or dummy external link (${context})`
        });
      }
      return;
    }
    if (trimmed.includes('${')) return; // ignore un-evaluated templates

    let urlPath = trimmed.split('?')[0].split('#')[0];
    if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;

    // Check favicon/assets
    if (urlPath === '/favicon.png' || urlPath === '/favicon.ico') {
      const pubPath = path.join('public', urlPath.replace('/', ''));
      if (!fs.existsSync(pubPath)) {
        issues.push({
          file: path.relative(process.cwd(), sourceFile),
          link: trimmed,
          severity: 'Critical Broken Asset',
          reason: `Asset "${urlPath}" not found in public/ directory`
        });
      }
      return;
    }

    if (staticRoutes.has(urlPath)) return;

    // Check /info/:slug
    if (urlPath.startsWith('/info/')) {
      const slug = urlPath.replace('/info/', '').replace(/\/$/, '');
      if (!validInfoSlugs.has(slug)) {
        issues.push({
          file: path.relative(process.cwd(), sourceFile),
          link: trimmed,
          severity: 'Critical Broken Link (404)',
          reason: `Page /info/${slug} does not exist in infoPages (${context})`
        });
      }
      return;
    }

    // Check /blog/:slug
    if (urlPath.startsWith('/blog/')) {
      const slug = urlPath.replace('/blog/', '').replace(/\/$/, '');
      if (!validBlogSlugs.has(slug)) {
        issues.push({
          file: path.relative(process.cwd(), sourceFile),
          link: trimmed,
          severity: 'Critical Broken Link (404)',
          reason: `Article /blog/${slug} does not exist in blogs dataset (${context})`
        });
      }
      return;
    }

    // Check /call-girls/:stateSlug or /call-girls/:stateSlug/:citySlug
    if (urlPath.startsWith('/call-girls/')) {
      const parts = urlPath.replace('/call-girls/', '').split('/').filter(Boolean);
      if (parts.length === 1) {
        const stateSlug = parts[0];
        if (!validStateSlugs.has(stateSlug) && !allCitySlugs.has(stateSlug)) {
          issues.push({
            file: path.relative(process.cwd(), sourceFile),
            link: trimmed,
            severity: 'Critical Broken Link',
            reason: `"${stateSlug}" in /call-girls/${stateSlug} is neither a valid state nor city (${context})`
          });
        }
      } else if (parts.length === 2) {
        const [stateSlug, citySlug] = parts;
        if (!validStateSlugs.has(stateSlug)) {
          issues.push({
            file: path.relative(process.cwd(), sourceFile),
            link: trimmed,
            severity: 'Critical Broken Link',
            reason: `State "${stateSlug}" in /call-girls/${stateSlug}/${citySlug} does not exist (${context})`
          });
        } else if (!validCitySlugsByState.get(stateSlug)?.has(citySlug)) {
          issues.push({
            file: path.relative(process.cwd(), sourceFile),
            link: trimmed,
            severity: 'Critical Broken Link / Mismatch',
            reason: `City "${citySlug}" does not exist in state "${stateSlug}" (correct state: ${citySlugToStateMap.get(citySlug) || 'unknown'})`
          });
        }
      }
      return;
    }

    // Check /massage/:stateSlug or /massage/:stateSlug/:citySlug
    if (urlPath.startsWith('/massage/')) {
      const parts = urlPath.replace('/massage/', '').split('/').filter(Boolean);
      if (parts.length === 1) {
        const stateSlug = parts[0];
        if (!validStateSlugs.has(stateSlug) && !allCitySlugs.has(stateSlug)) {
          issues.push({
            file: path.relative(process.cwd(), sourceFile),
            link: trimmed,
            severity: 'Critical Broken Link',
            reason: `"${stateSlug}" in /massage/${stateSlug} is neither a valid state nor city (${context})`
          });
        }
      } else if (parts.length === 2) {
        const [stateSlug, citySlug] = parts;
        if (!validStateSlugs.has(stateSlug)) {
          issues.push({
            file: path.relative(process.cwd(), sourceFile),
            link: trimmed,
            severity: 'Critical Broken Link',
            reason: `State "${stateSlug}" in /massage/${stateSlug}/${citySlug} does not exist (${context})`
          });
        } else if (!validCitySlugsByState.get(stateSlug)?.has(citySlug)) {
          issues.push({
            file: path.relative(process.cwd(), sourceFile),
            link: trimmed,
            severity: 'Critical Broken Link / Mismatch',
            reason: `City "${citySlug}" does not exist in state "${stateSlug}" (correct state: ${citySlugToStateMap.get(citySlug) || 'unknown'})`
          });
        }
      }
      return;
    }

    if (urlPath.startsWith('/category/') || urlPath.startsWith('/profile/')) {
      return;
    }

    issues.push({
      file: path.relative(process.cwd(), sourceFile),
      link: trimmed,
      severity: 'Critical Broken Route',
      reason: `No route exists in App.tsx matching "${urlPath}" (${context})`
    });
  }

  // Scan all source files
  const linkRegex = /(?:href|to)=["']([^"']+)["']/g;
  const navigateRegex = /navigate\(["']([^"']+)["']\)/g;

  for (const file of srcFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      validatePath(match[1], file, 'href/to attribute');
    }
    while ((match = navigateRegex.exec(content)) !== null) {
      validatePath(match[1], file, 'navigate() call');
    }
  }

  // Check topDirectoryCities in Footer.tsx specifically
  const footerPath = path.resolve('src/components/Footer.tsx');
  const footerContent = fs.readFileSync(footerPath, 'utf8');
  const cityObjRegex = /\{\s*name:\s*["']([^"']+)["'],\s*stateSlug:\s*["']([^"']+)["'],\s*slug:\s*["']([^"']+)["']\s*\}/g;
  let cityMatch;
  while ((cityMatch = cityObjRegex.exec(footerContent)) !== null) {
    const [_, name, sSlug, cSlug] = cityMatch;
    const testUrl = `/call-girls/${sSlug}/${cSlug}`;
    validatePath(testUrl, footerPath, `Footer topDirectoryCities: ${name}`);
  }

  // Check sitemap
  const sitemapPath = path.resolve('scripts/generate-sitemap.js');
  const sitemapCode = fs.readFileSync(sitemapPath, 'utf8');
  const infoPagesMatch = sitemapCode.match(/const infoPages = \[\s*([\s\S]*?)\];/);
  if (infoPagesMatch) {
    const slugs = infoPagesMatch[1].replace(/['"\s]/g, '').split(',').filter(Boolean);
    for (const slug of slugs) {
      if (!validInfoSlugs.has(slug)) {
        issues.push({
          file: 'scripts/generate-sitemap.js',
          link: `/info/${slug}`,
          severity: 'Critical Sitemap Error',
          reason: `Slug "${slug}" included in sitemap_main.xml but missing from src/data/seoContent.ts`
        });
      }
    }
  }

  // Check prerender.mjs
  const prerenderPath = path.resolve('scripts/prerender.mjs');
  const prerenderCode = fs.readFileSync(prerenderPath, 'utf8');
  const prerenderInfoMatch = prerenderCode.match(/const infoSlugs = \[\s*([\s\S]*?)\];/);
  if (prerenderInfoMatch) {
    const slugs = prerenderInfoMatch[1].replace(/['"\s]/g, '').split(',').filter(Boolean);
    for (const slug of slugs) {
      if (!validInfoSlugs.has(slug)) {
        issues.push({
          file: 'scripts/prerender.mjs',
          link: `/info/${slug}`,
          severity: 'Critical Prerender Issue',
          reason: `Slug "${slug}" has no corresponding data entry in src/data/seoContent.ts`
        });
      }
    }
  }

  // Deduplicate issues by (link + file + reason)
  const uniqueIssues = [];
  const seen = new Set();
  for (const iss of issues) {
    const key = `${iss.severity}|${iss.file}|${iss.link}|${iss.reason}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueIssues.push(iss);
    }
  }

  console.log('\n========================================');
  console.log(`AUDIT RESULT: ${uniqueIssues.length} TOTAL ISSUES FOUND`);
  console.log('========================================\n');

  uniqueIssues.forEach((iss, idx) => {
    console.log(`[${idx + 1}] [${iss.severity}] Link: ${iss.link}`);
    console.log(`    File: ${iss.file}`);
    console.log(`    Reason: ${iss.reason}\n`);
  });
}

audit().catch(console.error);
