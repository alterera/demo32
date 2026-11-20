import React from 'react';
interface ApiProduct {
    name: string;
    url: string;
    image?: {
        url: string;
    } | null;
    price: {
        regular: {
            value: number;
            text: string;
        };
        special: {
            value: number;
            text: string;
        };
    };
}
export default function ShowcaseSection({ showcase }: {
    showcase?: {
        products?: {
            items: ApiProduct[];
        };
    } | null;
}): React.JSX.Element | null;
export declare const layout: {
    areaId: string;
    sortOrder: number;
};
export declare const query = "\n  query Query {\n    showcase: collection(code: \"showcase\") {\n      products(filters: [{ key: \"limit\", operation: eq, value: \"6\" }]) {\n        items {\n          name\n          url\n          image {\n            url\n          }\n          price {\n            regular {\n              value\n              text\n            }\n            special {\n              value\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n";
export {};
