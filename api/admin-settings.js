import { Redis } from '@upstash/redis';
import fs from 'fs';
import path from 'path';

const SETTINGS_KEY = 'app_settings';
const settingsFilePath = path.join(process.cwd(), 'app_settings.json');

const defaultSettings = {
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

function getRedis() {
    const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
    if (!url || !token) return null;
    return new Redis({ url, token });
}

function readLocalSettings() {
    try {
        if (fs.existsSync(settingsFilePath)) {
            const data = fs.readFileSync(settingsFilePath, 'utf8');
            return JSON.parse(data);
        }
    } catch (e) {
        console.error('Error reading local settings:', e);
    }
    return {};
}

function writeLocalSettings(data) {
    try {
        fs.writeFileSync(settingsFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (e) {
        console.error('Error writing local settings:', e);
    }
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const redis = getRedis();

    if (req.method === 'GET') {
        try {
            if (redis) {
                const stored = await redis.get(SETTINGS_KEY);
                const merged = { ...defaultSettings, ...(stored || {}), isKvConnected: true };
                return res.status(200).json(merged);
            } else {
                const stored = readLocalSettings();
                const merged = { ...defaultSettings, ...stored, isKvConnected: false };
                return res.status(200).json(merged);
            }
        } catch (error) {
            console.error('Settings GET error:', error);
            const stored = readLocalSettings();
            const merged = { ...defaultSettings, ...stored, isKvConnected: false };
            return res.status(200).json(merged);
        }
    }

    if (req.method === 'POST') {
        const { password, settings } = req.body || {};
        const correctPassword = process.env.ADMIN_PASSWORD;
        if (!correctPassword) {
            return res.status(500).json({ error: "Server Configuration Error: ADMIN_PASSWORD environment variable is not configured" });
        }
        if (password !== correctPassword) {
            return res.status(401).json({ error: "Unauthorized: Incorrect Password" });
        }

        try {
            if (redis && settings) {
                const toSave = { ...defaultSettings, ...settings };
                await redis.set(SETTINGS_KEY, toSave);
                return res.status(200).json({ success: true, isKvConnected: true });
            } else {
                const toSave = { ...defaultSettings, ...settings };
                writeLocalSettings(toSave);
                return res.status(200).json({ success: true, isKvConnected: false });
            }
        } catch (error) {
            console.error('Settings POST error:', error);
            return res.status(500).json({ error: "Failed to save settings" });
        }
    }

    res.setHeader('Allow', ['GET', 'POST', 'OPTIONS']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
