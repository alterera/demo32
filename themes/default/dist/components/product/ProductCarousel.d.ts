import * as React from 'react';
import { type Product } from './ProductCard.js';
/**
 * Full-width product carousel. Large screens show 4 cards with arrows floating
 * over the sides; phones show ~2.5 cards so the last one is cut off to hint at
 * scrolling. Drag or swipe works everywhere.
 */
export declare function ProductCarousel({ products, label }: {
    products: Product[];
    label: string;
}): React.JSX.Element | null;
