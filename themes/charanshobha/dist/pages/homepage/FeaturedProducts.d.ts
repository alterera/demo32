import React from 'react';
interface Product {
    name: string;
    url: string;
    image?: {
        url: string;
        alt: string;
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
export default function FeaturedProducts({ homeProducts }: {
    homeProducts?: {
        items: Product[];
    };
}): React.JSX.Element | null;
export declare const layout: {
    areaId: string;
    sortOrder: number;
};
export declare const query = "\n  query Query {\n    homeProducts: products(filters: [{ key: \"limit\", operation: eq, value: \"8\" }]) {\n      items {\n        name\n        url\n        image {\n          url\n          alt\n        }\n        price {\n          regular {\n            value\n            text\n          }\n          special {\n            value\n            text\n          }\n        }\n      }\n    }\n  }\n";
export {};
