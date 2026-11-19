import React from 'react';
interface Category {
    name: string;
    url: string;
    image?: {
        url: string;
        alt: string;
    } | null;
}
export default function CategoryTiles({ homeCategories }: {
    homeCategories?: {
        items: Category[];
    };
}): React.JSX.Element | null;
export declare const layout: {
    areaId: string;
    sortOrder: number;
};
export declare const query = "\n  query Query {\n    homeCategories: categories {\n      items {\n        name\n        url\n        image {\n          url\n          alt\n        }\n      }\n    }\n  }\n";
export {};
