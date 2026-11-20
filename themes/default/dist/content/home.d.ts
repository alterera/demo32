/**
 * Homepage content in one place. Edit copy, images and collection codes here.
 * Product lists come from admin: Catalog -> Collections -> (code below).
 */
export declare const COLLECTIONS: {
    readonly bestSellers: 'best-sellers';
    readonly newArrivals: 'new-arrivals';
    readonly trending: 'trending';
    readonly promo: 'promo-picks';
};
export declare const TOPBAR_MESSAGES: string[];
export declare const HERO_SLIDES: {
    id: string;
    sub: string;
    title: string;
    image: string;
    mobileImage: string;
}[];
/** Category names the hero buttons look up in admin categories. */
export declare const HERO_BUTTONS: string[];
export declare const BEST_SELLERS: {
    paragraph: string;
    buttonLabel: string;
    buttonHref: string;
};
export declare const OFFER_BANNERS: {
    id: string;
    image: string;
    href: string;
    alt: string;
}[];
export declare const FEATURE_SPLIT: {
    title: string;
    buttonLabel: string;
    buttonHref: string;
    options: {
        label: string;
        image: string;
    }[];
};
export declare const BANNER: {
    image: string;
    href: string;
    alt: string;
};
export declare const TEXT_MARQUEE: string[];
export declare const SERVICE_ITEMS: readonly [{
    readonly icon: 'support';
    readonly title: 'Customer service';
    readonly text: 'Reach out to us via email or whatsapp for quick resolution.';
}, {
    readonly icon: 'shipping';
    readonly title: 'Fast Free Shipping';
    readonly text: 'Get free shipping on orders of ₹500 or more';
}, {
    readonly icon: 'returns';
    readonly title: 'Free Returns';
    readonly text: 'Return or exchange your product for free within 7 days';
}, {
    readonly icon: 'secure';
    readonly title: 'Secure payment';
    readonly text: 'Your payment information is processed securely';
}];
