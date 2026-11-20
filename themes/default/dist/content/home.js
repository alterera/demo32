/**
 * Homepage content in one place. Edit copy, images and collection codes here.
 * Product lists come from admin: Catalog -> Collections -> (code below).
 */
export const COLLECTIONS = {
    bestSellers: 'best-sellers',
    newArrivals: 'new-arrivals',
    trending: 'trending',
    promo: 'promo-picks'
};
export const TOPBAR_MESSAGES = [
    'Cash on Delivery Available',
    'Free Delivery - Across India',
    'Easy 7-day Returns',
    'Free Shipping on Orders of ₹500+'
];
export const HERO_SLIDES = [
    {
        id: 'fw26-a',
        sub: 'FW26',
        title: 'Walk Your Way',
        image: '/images/hero/hero-1.svg',
        mobileImage: '/images/hero/hero-1-mobile.svg'
    },
    {
        id: 'fw26-b',
        sub: 'FW26',
        title: 'Built For Motion',
        image: '/images/hero/hero-2.svg',
        mobileImage: '/images/hero/hero-2-mobile.svg'
    }
];
/** Category names the hero buttons look up in admin categories. */
export const HERO_BUTTONS = ['Sneakers', 'Heels'];
export const BEST_SELLERS = {
    // {name} is replaced with the store name from admin settings
    paragraph: "Always keeping it simple, so you could make it yours. And that's why every {name} design feels effortless. We build thoughtfully for you to just show up and own it. From movements to unwinds, games to grind. For being always at play.",
    buttonLabel: 'Explore More',
    buttonHref: '/search?keyword='
};
export const OFFER_BANNERS = [
    { id: 'o1', image: '/images/offers/offer-1.svg', href: '/search?keyword=', alt: 'Flat 10% off on your first order' },
    { id: 'o2', image: '/images/offers/offer-2.svg', href: '/search?keyword=', alt: 'Free delivery on orders above ₹500' },
    { id: 'o3', image: '/images/offers/offer-3.svg', href: '/search?keyword=', alt: 'New arrivals are here' }
];
export const FEATURE_SPLIT = {
    title: 'Core Sneaker',
    buttonLabel: 'Explore Sneakers',
    buttonHref: '/search?keyword=sneaker',
    options: [
        { label: 'Glacier White', image: '/images/feature/feature-1.svg' },
        { label: 'Classic Black', image: '/images/feature/feature-2.svg' },
        { label: 'Sand Beige', image: '/images/feature/feature-3.svg' },
        { label: 'Brick Red', image: '/images/feature/feature-4.svg' }
    ]
};
export const BANNER = {
    image: '/images/banner/banner.svg',
    href: '/search?keyword=',
    alt: 'Shop the new collection'
};
export const TEXT_MARQUEE = [
    'Secure Payments',
    'Free Delivery',
    'Easy Returns',
    'Cash on Delivery'
];
export const SERVICE_ITEMS = [
    {
        icon: 'support',
        title: 'Customer service',
        text: 'Reach out to us via email or whatsapp for quick resolution.'
    },
    {
        icon: 'shipping',
        title: 'Fast Free Shipping',
        text: 'Get free shipping on orders of ₹500 or more'
    },
    {
        icon: 'returns',
        title: 'Free Returns',
        text: 'Return or exchange your product for free within 7 days'
    },
    {
        icon: 'secure',
        title: 'Secure payment',
        text: 'Your payment information is processed securely'
    }
];
//# sourceMappingURL=home.js.map