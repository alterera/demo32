import React from 'react';
interface Props {
    heroCategories?: {
        items: {
            name: string;
            url: string;
        }[];
    };
}
export default function Hero({ heroCategories }: Props): React.JSX.Element;
export declare const layout: {
    areaId: string;
    sortOrder: number;
};
export declare const query = "\n  query Query {\n    heroCategories: categories {\n      items {\n        name\n        url\n      }\n    }\n  }\n";
export {};
