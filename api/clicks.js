import { Redis } from '@upstash/redis';
import fs from 'fs';
import path from 'path';

const CLICKS_KEY = 'clicks_data';
const MAX_CLICKS = 1000;
const clicksFilePath = path.join(process.cwd(), 'clicks_data.json');

function getRedis() {
    const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
    if (!url || !token) return null;
    return new Redis({ url, token });
}

function readLocalClicks() {
    try {
        if (fs.existsSync(clicksFilePath)) {
            const data = fs.readFileSync(clicksFilePath, 'utf8');
            return JSON.parse(data);
        }
    } catch (e) {
        console.error('Error reading local clicks:', e);
    }
    return { total: 0, list: [] };
}

function writeLocalClicks(data) {
    try {
        fs.writeFileSync(clicksFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (e) {
        console.error('Error writing local clicks:', e);
    }
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') { res.status(200).end(); return; }

    const redis = getRedis();

    if (req.method === 'POST') {
        try {
            const { adId, adName, adCity, source, url } = req.body || {};
            const newClick = {
                id: adId || 'Unknown',
                name: adName || 'Unknown',
                city: adCity || 'Unknown',
                source: source || 'WhatsApp',
                url: url || '',
                timestamp: new Date().toISOString()
            };

            if (redis) {
                const existing = await redis.get(CLICKS_KEY) || { total: 0, list: [] };
                existing.total++;
                existing.list.unshift(newClick);
                if (existing.list.length > MAX_CLICKS) existing.list = existing.list.slice(0, MAX_CLICKS);
                await redis.set(CLICKS_KEY, existing);
                return res.status(200).json({ success: true, total: existing.total, isKvConnected: true });
            } else {
                const existing = readLocalClicks();
                existing.total++;
                existing.list.unshift(newClick);
                if (existing.list.length > MAX_CLICKS) existing.list = existing.list.slice(0, MAX_CLICKS);
                writeLocalClicks(existing);
                return res.status(200).json({ success: true, total: existing.total, isKvConnected: false });
            }
        } catch (error) {
            console.error('Click tracking error:', error);
            return res.status(500).json({ error: "Failed to record click" });
        }
    }

    if (req.method === 'GET') {
        try {
            if (redis) {
                const data = await redis.get(CLICKS_KEY) || { total: 0, list: [] };
                return res.status(200).json({ ...data, isKvConnected: true });
            } else {
                const data = readLocalClicks();
                return res.status(200).json({ ...data, isKvConnected: false });
            }
        } catch (error) {
            console.error('Redis read error:', error);
            const data = readLocalClicks();
            return res.status(200).json({ ...data, isKvConnected: false });
        }
    }

    res.status(405).end(`Method ${req.method} Not Allowed`);
}
