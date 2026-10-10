import React, { createContext, useContext, useState, useEffect } from "react";

export interface AppSettings {
    whatsappNumber: string;
    phoneNumber: string;
    homeTitle: string;
    homeDesc: string;
    categoryTitle: string;
    categoryDesc: string;
    searchTitle: string;
    searchDesc: string;
    blogTitle: string;
    blogDesc: string;
    isKvConnected?: boolean;

    // Rotated WhatsApp Numbers
    whatsappNumber1?: string;
    whatsappNumber2?: string;
    whatsappNumber3?: string;
    whatsappNumber4?: string;
    whatsappNumber5?: string;
    whatsappNumber6?: string;

    // Dedicated Call Boy Numbers
    callBoyNumber1?: string;
    callBoyNumber2?: string;
    callBoyNumber3?: string;
    callBoyNumber4?: string;
    callBoyNumber5?: string;
    callBoyNumber6?: string;
}

const defaultSettings: AppSettings = {
    whatsappNumber: "918905586425",
    phoneNumber: "918905586425",
    homeTitle: "Koka Site - India's Premium Escort Directory",
    homeDesc: "Find premium and verified escorts, call girls, and companions across India on Koka Site. 100% genuine profiles.",
    categoryTitle: "Category | Koka Site",
    categoryDesc: "Browse this category to find the best premium escorts and companions.",
    searchTitle: "Search Profiles | Koka Site",
    searchDesc: "Search and filter through our extensive directory of high-class independent escorts in India.",
    blogTitle: "Adult Dating Blog | Koka Site",
    blogDesc: "Read our latest articles on adult dating, tips, and companion reviews on Koka Site.",
    whatsappNumber1: "",
    whatsappNumber2: "",
    whatsappNumber3: "",
    whatsappNumber4: "",
    whatsappNumber5: "",
    whatsappNumber6: "",
    callBoyNumber1: "",
    callBoyNumber2: "",
    callBoyNumber3: "",
    callBoyNumber4: "",
    callBoyNumber5: "",
    callBoyNumber6: ""
};

const SettingsContext = createContext<{ settings: AppSettings, refreshSettings: () => void }>({
    settings: defaultSettings,
    refreshSettings: () => {},
});

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<AppSettings>(() => {
        if (typeof window !== "undefined") {
            try {
                const cached = localStorage.getItem("app_settings_cache");
                if (cached) {
                    return { ...defaultSettings, ...JSON.parse(cached) };
                }
            } catch (e) {
                // Ignore parse errors
            }
        }
        return defaultSettings;
    });

    const refreshSettings = async () => {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000); // 3s non-blocking timeout

            const res = await fetch("/api/admin-settings", { signal: controller.signal });
            clearTimeout(timeoutId);

            if (res.ok) {
                const data = await res.json();
                const merged = { ...defaultSettings, ...data };
                setSettings(merged);
                if (typeof window !== "undefined") {
                    localStorage.setItem("app_settings_cache", JSON.stringify(merged));
                }
            }
        } catch (error) {
            // Silently fall back to cached/default settings without blocking UI
        }
    };

    useEffect(() => {
        refreshSettings();
    }, []);

    return (
        <SettingsContext.Provider value={{ settings, refreshSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext);

// Dynamic Rotated Contact Number Helper
export function getRotatedWhatsappNumber(settings: AppSettings, profileId?: string, isCallBoy?: boolean): string {
    const mainList = [
        settings.whatsappNumber1,
        settings.whatsappNumber2,
        settings.whatsappNumber3,
        settings.whatsappNumber4,
        settings.whatsappNumber5,
        settings.whatsappNumber6
    ].filter(n => n && n.trim() !== "");

    const callBoyList = [
        settings.callBoyNumber1,
        settings.callBoyNumber2,
        settings.callBoyNumber3,
        settings.callBoyNumber4,
        settings.callBoyNumber5,
        settings.callBoyNumber6
    ].filter(n => n && n.trim() !== "");

    const list = isCallBoy && callBoyList.length > 0 ? callBoyList : mainList;

    if (list.length === 0) {
        return settings.whatsappNumber;
    }

    if (profileId) {
        // Deterministic hash based on profile id to route consistently
        let hash = 0;
        for (let i = 0; i < profileId.length; i++) {
            hash = profileId.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % list.length;
        return list[index];
    } else {
        // Fallback to random distribution for general floating links
        const index = Math.floor(Math.random() * list.length);
        return list[index];
    }
}
