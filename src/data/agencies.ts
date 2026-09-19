export interface Agency {
    id: string;
    name: string;
    registeredDate: string;
    location: string;
    description: string;
    images: string[];
    slug: string;
}

export const agencies: Agency[] = [
    {
        id: "a1",
        name: "Royal Touch Agency",
        registeredDate: "February 5, 2026",
        location: "Paris, France",
        description: "We are a premium companion agency based in Paris, offering elegant, discreet, and high-quality escort services for discerning clients. Our agency represents a carefully selected group of professional models who embody class, sophistication, and confidentiality.",
        images: [
            "/images/portrait_neon_1772046577948.png",
            "/images/portrait_pink_1772046703919.png",
            "/images/portrait_red_1772046784094.png",
            "/images/portrait_purple_1772046877354.png"
        ],
        slug: "royal-touch-agency"
    },
    {
        id: "a2",
        name: "Elite Companions",
        registeredDate: "January 15, 2026",
        location: "Lyon, France",
        description: "Providing high-end companionship services across France. Our models are verified and professional, ensuring a memorable experience for our clients.",
        images: [
            "/images/portrait_purple_1772046877354.png",
            "/images/portrait_red_1772046784094.png",
            "/images/portrait_pink_1772046703919.png",
            "/images/portrait_neon_1772046577948.png"
        ],
        slug: "elite-companions"
    }
];
