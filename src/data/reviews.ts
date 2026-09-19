export interface Review {
    id: string;
    listingName: string;
    reviewerName: string;
    rating: number;
    date: string;
    comment: string;
    listingImage: string;
}

export const reviews: Review[] = [
    {
        id: "r1",
        listingName: "Mel",
        reviewerName: "John D.",
        rating: 5,
        date: "2 days ago",
        comment: "An incredible experience. Mel is even more beautiful in person and very sweet. Highly recommended!",
        listingImage: "/images/portrait_neon_1772046577948.png"
    },
    {
        id: "r2",
        listingName: "TAINA",
        reviewerName: "Anonymous",
        rating: 5,
        date: "1 week ago",
        comment: "TAINA is a wonderful person. We had a great time together. Very professional and caring.",
        listingImage: "/images/portrait_red_1772046784094.png"
    },
    {
        id: "r3",
        listingName: "Emmaa",
        reviewerName: "Pierre",
        rating: 4,
        date: "3 days ago",
        comment: "Very nice girl, authentic GFE. A bit short on time but definitely worth it.",
        listingImage: "/images/portrait_pink_1772046703919.png"
    }
];
