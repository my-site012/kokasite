export const SITE_URL = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_SITE_URL) 
  ? (import.meta.env.VITE_SITE_URL.replace(/\/+$/, "") + "/") 
  : "https://kokasite.com/";
