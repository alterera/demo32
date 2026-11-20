import React from 'react';
import { type Product } from '../../components/product/ProductCard.js';
interface Props {
    bestSellers?: {
        products?: {
            items: Product[];
        };
    } | null;
    bsSetting?: {
        storeName?: string;
    };
}
export default function BestSellers({ bestSellers, bsSetting }: Props): React.JSX.Element;
export declare const layout: {
    areaId: string;
    sortOrder: number;
};
export declare const query = "\n  query Query {\n    bsSetting: setting {\n      storeName\n    }\n    bestSellers: collection(code: \"best-sellers\") {\n      products(filters: [{ key: \"limit\", operation: eq, value: \"4\" }]) {\n        items {\n          name\n          url\n          image {\n            url\n            alt\n          }\n          price {\n            regular {\n              value\n              text\n            }\n            special {\n              value\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n";
export {};
