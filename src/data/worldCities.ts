import { indiaStates, StateEntry, CityEntry } from "./indiaCities";

export interface WorldCityEntry {
    name: string;
    slug: string;
    areas?: string[];
}

export interface WorldRegionEntry {
    name: string;
    slug: string;
    cities: WorldCityEntry[];
}

export interface CountryEntry {
    name: string;
    slug: string;
    code: string;
    emoji: string;
    regions: WorldRegionEntry[];
}

// Convert indiaStates to WorldRegionEntry
const indiaRegions: WorldRegionEntry[] = indiaStates.map(s => ({
    name: s.name,
    slug: s.slug,
    cities: s.cities.map(c => ({
        name: c.name,
        slug: c.slug,
        areas: c.areas
    }))
}));

const rawCountries = [];

const cityToRegionMap: Record<string, { name: string; slug: string }> = {};

export const worldCountries: CountryEntry[] = [
    {
        name: "India",
        slug: "india",
        code: "IN",
        emoji: "🇮🇳",
        regions: indiaRegions
    }
];

// Flat list of all city slugs across India
export const allCitySlugs = worldCountries.flatMap(country =>
    country.regions.flatMap(r => r.cities.map(c => c.slug))
);

// Helper to get city info from slug
export function getCityFromSlug(slug: string) {
    for (const country of worldCountries) {
        for (const region of country.regions) {
            const city = region.cities.find(c => c.slug === slug);
            if (city) return { city, state: region, country };
        }
    }
    return null;
}

// Helper to get state/region info from slug
export function getStateFromSlug(slug: string) {
    for (const country of worldCountries) {
        const region = country.regions.find(r => r.slug === slug);
        if (region) return region;
    }
    return null;
}

// Helper to check if state/city is in India
export function isIndiaLocation(stateSlug?: string, citySlug?: string): boolean {
    return true;
}
