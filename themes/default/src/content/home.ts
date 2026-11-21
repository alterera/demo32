/**
 * Homepage content in one place. Edit copy, images and collection codes here.
 * Product lists come from admin: Catalog -> Collections -> (code below).
 */
export const COLLECTIONS = {
  bestSellers: 'best-sellers',
  newArrivals: 'new-arrivals',
  trending: 'trending',
  showcase: 'showcase'
} as const;

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
    image: '/images/hero/q1.webp',
    mobileImage: '/images/hero/q1.webp'
  },
  {
    id: 'fw26-b',
    sub: 'FW26',
    title: 'Built For Motion',
    image: '/images/hero/q2.webp',
    mobileImage: '/images/hero/q2.webp'
  }
];

/** Category names the hero buttons look up in admin categories. */
export const HERO_BUTTONS = ['Sneakers', 'Heels'];

export const BEST_SELLERS = {
  // each entry is shown on its own line
  lines: [
    'Simple by design. Made to be yours.',
    'Every pair is crafted with care, built for comfort and made to move with you.'
  ],
  buttonLabel: 'Explore More',
  buttonHref: '/search?keyword='
};

export const OFFER_BANNERS = [
  { id: 'o1', image: '/images/offers/o1.webp', href: '/search?keyword=', alt: 'Flat 10% off on your first order' },
  { id: 'o2', image: '/images/offers/o2.webp', href: '/search?keyword=', alt: 'Free delivery on orders above ₹500' }
];

/**
 * Two full-bleed columns, each with a background image and overlaid text.
 * "images" holds 1 or more pictures: with 2+, hovering the column swaps to the
 * second one; with a single image the column simply stays as it is.
 */
export const FEATURE_COLUMNS = [
  {
    id: 'sneakers',
    title: 'Core Sneaker',
    subtitle: 'Glacier White • Classic Black • Sand Beige',
    buttonLabel: 'Explore Sneakers',
    buttonHref: '/search?keyword=sneaker',
    images: ['/images/feature/f1.webp', '/images/feature/f2.webp']
  },
  {
    id: 'everyday',
    title: 'Everyday Essentials',
    subtitle: 'Light, flexible and ready for every day',
    buttonLabel: 'Shop Now',
    buttonHref: '/search?keyword=',
    images: ['/images/feature/f3.webp']
  }
];

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
] as const;

/**
 * Brand / partner logos. Put image files in themes/default/public/images/logos/
 * and set `image`; without one the name is shown as a text wordmark.
 */
export const LOGOS: { name: string; image?: string }[] = [
  { name: 'Allegro', image: '/images/brands/allegro.svg' },
  { name: 'Bata', image: '/images/brands/bata.svg' },
  { name: 'ESPN', image: '/images/brands/espn.svg' },
  { name: 'Minnesota Wild', image: '/images/brands/minnesota-wild.svg' },
  { name: 'Pfizer', image: '/images/brands/pfizer.svg' },
  { name: 'Skechers', image: '/images/brands/skechers.svg' }
];
export const LOGOS_HEADING = 'Brands we work with';
