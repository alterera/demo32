import * as React from 'react';
export interface ShowcaseItem {
    id: string;
    name: string;
    /** Price text, already formatted (e.g. "₹3,299.00"). */
    price: string;
    /** Original price text, shown struck through when on sale. */
    comparePrice?: string;
    image: string;
    url: string;
}
/**
 * Interactive product showcase: a large stage for the selected product and a row
 * of thumbnails. Hover (or tap / arrow keys) a thumbnail to switch. Product shots
 * should be transparent so they sit on the light stage. Sharp corners, light only.
 */
export declare function ProductHoverShowcase({ products, defaultIndex, autoplay, autoplayInterval, buttonText, className }: {
    products: ShowcaseItem[];
    defaultIndex?: number;
    autoplay?: boolean;
    autoplayInterval?: number;
    buttonText?: string;
    className?: string;
}): React.JSX.Element | null;
export default ProductHoverShowcase;
