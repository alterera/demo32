/**
 * Homepage content in one place. Edit copy, images and collection codes here.
 * Product lists come from admin: Catalog -> Collections -> (code below).
 */
export declare const COLLECTIONS: {
    readonly bestSellers: 'best-sellers';
    readonly newArrivals: 'new-arrivals';
    readonly trending: 'trending';
    readonly promo: 'promo-picks';
    readonly showcase: 'showcase';
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
    lines: string[];
    buttonLabel: string;
    buttonHref: string;
};
export declare const OFFER_BANNERS: {
    id: string;
    image: string;
    href: string;
    alt: string;
}[];
/**
 * Two full-bleed columns, each with a background image and overlaid text.
 * "images" holds 1 or more pictures: with 2+, hovering the column swaps to the
 * second one; with a single image the column simply stays as it is.
 */
export declare const FEATURE_COLUMNS: {
    id: string;
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonHref: string;
    images: string[];
}[];
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
/**
 * Brand / partner logos. Put image files in themes/default/public/images/logos/
 * and set `image`; without one the name is shown as a text wordmark.
 */
export declare const LOGOS: {
    name: string;
    image?: string;
}[];
export declare const LOGOS_HEADING = "Brands we work with";
