import React from 'react';
import type { Product } from '../../components/product/ProductCard.js';
export default function PromoPicks({ promoPicks }: {
    promoPicks?: {
        products?: {
            items: Product[];
        };
    } | null;
}): React.JSX.Element | null;
export declare const layout: {
    areaId: string;
    sortOrder: number;
};
export declare const query = "\n  query Query {\n    promoPicks: collection(code: \"promo-picks\") {\n      products(filters: [{ key: \"limit\", operation: eq, value: \"12\" }]) {\n        items {\n          name\n          url\n          image {\n            url\n            alt\n          }\n          price {\n            regular {\n              value\n              text\n            }\n            special {\n              value\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n";
