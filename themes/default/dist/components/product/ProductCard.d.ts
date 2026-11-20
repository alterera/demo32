import * as React from 'react';
export interface Product {
    name: string;
    url: string;
    image?: {
        url: string;
        alt?: string;
    } | null;
    price: {
        regular: {
            text: string;
            value: number;
        };
        special: {
            text: string;
            value: number;
        };
    };
}
/** Product tile: light image well (product shots are transparent), details below. */
export declare function ProductCard({ product: p }: {
    product: Product;
}): React.JSX.Element;
