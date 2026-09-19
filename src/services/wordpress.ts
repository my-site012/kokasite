/**
 * WordPress API Service
 * 
 * This file connects your React app to the WordPress REST API.
 * It uses window.WP_CONFIG which is injected by the WordPress theme (index.php).
 * 
 * For local development, set VITE_WP_API_URL in your .env file:
 *   VITE_WP_API_URL=http://localhost/your-wordpress-site/wp-json
 */

// Get the WordPress API URL - works in both WP theme and standalone dev mode
const API_BASE =
    (window as any).WP_CONFIG?.apiUrl ||
    process.env.NEXT_PUBLIC_WP_API_URL ||
    "http://localhost/wordpress/wp-json";

const NONCE = (window as any).WP_CONFIG?.nonce || "";

// ============================================================
// Generic Fetch Helper
// ============================================================
async function wpFetch(path: string, options: RequestInit = {}) {
    const res = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            "X-WP-Nonce": NONCE,
            ...(options.headers || {}),
        },
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: "Unknown error" }));
        throw new Error(err.message || `API error ${res.status}`);
    }
    return res.json();
}

// ============================================================
// LISTINGS
// Fetches listings from WordPress Custom Post Type
// GET /wp-json/wp/v2/listings
// ============================================================
export async function fetchListings(params?: {
    tier?: string;
    city?: string;
    per_page?: number;
}) {
    const query = new URLSearchParams({
        per_page: String(params?.per_page ?? 12),
        ...(params?.tier ? { "meta_key": "listing_tier", "meta_value": params.tier } : {}),
        ...(params?.city ? { "meta_key": "listing_city", "meta_value": params.city } : {}),
    });
    return wpFetch(`/wp/v2/listings?${query}`);
}

// ============================================================
// AUTHENTICATION (requires JWT Auth plugin)
// POST /wp-json/jwt-auth/v1/token
// Plugin: "JWT Authentication for WP REST API"
// Install from: https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
// ============================================================
export async function loginUser(username: string, password: string) {
    return wpFetch("/jwt-auth/v1/token", {
        method: "POST",
        body: JSON.stringify({ username, password }),
    });
}

export async function validateToken(token: string) {
    return wpFetch("/jwt-auth/v1/token/validate", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
    });
}

// ============================================================
// USER REGISTRATION (via custom endpoint in functions.php)
// POST /wp-json/EscortServiceGBRoad/v1/register
// ============================================================
export async function registerUser(data: {
    username: string;
    email: string;
    password: string;
    role: "subscriber" | "model" | "agency";
}) {
    return wpFetch("/EscortServiceGBRoad/v1/register", {
        method: "POST",
        body: JSON.stringify(data),
    });
}

// ============================================================
// CONTACT / EMAIL (uses WP Mail SMTP plugin automatically)
// POST /wp-json/EscortServiceGBRoad/v1/contact
// ============================================================
export async function sendContactEmail(data: {
    name: string;
    email: string;
    message: string;
}) {
    return wpFetch("/EscortServiceGBRoad/v1/contact", {
        method: "POST",
        body: JSON.stringify(data),
    });
}

// ============================================================
// ASSETS & IMAGES
// Resolves paths for local images to work in both Dev and WP Theme
// ============================================================
export function getAssetUrl(path: string) {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const themeUrl = (window as any).WP_CONFIG?.themeUrl || "";
    const cleanPath = path.startsWith("/") ? path.substring(1) : path;
    return themeUrl ? `${themeUrl}/${cleanPath}` : `/${cleanPath}`;
}

// ============================================================
// PAGES
// Fetches a standard WordPress page by its slug
// GET /wp-json/wp/v2/pages?slug=...
// ============================================================
export async function fetchPageBySlug(slug: string) {
    const pages = await wpFetch(`/wp/v2/pages?slug=${slug}`);
    return pages && pages.length > 0 ? pages[0] : null;
}

// ============================================================
// GET CURRENT USER (if logged in via WordPress)
// ============================================================
export function getCurrentUser() {
    return (window as any).WP_CONFIG?.currentUser || null;
}
