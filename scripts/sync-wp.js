import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const assetsDir = path.join(distDir, 'assets');
const wpThemeDir = path.join(rootDir, 'wordpress-theme');
const wpAssetsDir = path.join(wpThemeDir, 'assets');
const wpIndexPath = path.join(wpThemeDir, 'index.php');
const wpFunctionsPath = path.join(wpThemeDir, 'functions.php');

// 1. Ensure WordPress assets directory exists
if (!fs.existsSync(wpAssetsDir)) {
    fs.mkdirSync(wpAssetsDir, { recursive: true });
}

// 2. Clear old assets
console.log('🧹 Cleaning old WordPress assets...');
fs.readdirSync(wpAssetsDir).forEach(file => {
    fs.unlinkSync(path.join(wpAssetsDir, file));
});

// 3. Find newest build files
console.log('📦 Finding newest build assets...');
const files = fs.readdirSync(assetsDir);
const mainJs = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
const mainCss = files.find(f => f.startsWith('index-') && f.endsWith('.css'));

if (!mainJs || !mainCss) {
    console.error('❌ Could not find compiled index-*.js or index-*.css in /dist/assets');
    process.exit(1);
}

// 4. Copy all assets to WordPress theme
console.log(`🚀 Copying assets to ${wpAssetsDir}...`);
files.forEach(file => {
    fs.copyFileSync(path.join(assetsDir, file), path.join(wpAssetsDir, file));
});

// 5. Update functions.php with NEW hashes
console.log('📝 Updating wordpress-theme/functions.php with new hashes...');
let functionsContent = fs.readFileSync(wpFunctionsPath, 'utf8');

functionsContent = functionsContent.replace(
    /define\('CG4Y_JS_HASH', '.*?'\);/,
    `define('CG4Y_JS_HASH', '${mainJs}');`
);

functionsContent = functionsContent.replace(
    /define\('CG4Y_CSS_HASH', '.*?'\);/,
    `define('CG4Y_CSS_HASH', '${mainCss}');`
);

fs.writeFileSync(wpFunctionsPath, functionsContent);

console.log('✅ WordPress theme is now in sync with latest build!');
console.log(`   JS:  ${mainJs}`);
console.log(`   CSS: ${mainCss}`);
