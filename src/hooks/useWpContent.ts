
import { useState } from "react";

export interface WpListing {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    featured_media: number;
    listing_tier?: string;
    listing_city?: string;
    listing_age?: string;
    listing_price?: string;
    listing_phone?: string;
    _embedded?: any;
}

// WordPress backend is not connected. The site uses static local listing data.
// To connect a WordPress backend in the future, set VITE_WP_API_URL env variable.
export const useWpListings = () => {
    const [listings] = useState<WpListing[]>([]);
    const loading = false;
    return { listings, loading };
};
