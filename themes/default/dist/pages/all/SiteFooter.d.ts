import React from 'react';
import { type NavCategory } from '../../components/header/types.js';
interface Props {
    footerCategories?: {
        items: NavCategory[];
    };
    footerSetting?: {
        storeName?: string;
    };
}
export default function SiteFooter({ footerCategories, footerSetting }: Props): React.JSX.Element;
export declare const layout: {
    areaId: string;
    sortOrder: number;
};
export declare const query = "\n  query Query {\n    footerCategories: categories {\n      items {\n        name\n        url\n        parent {\n          name\n        }\n      }\n    }\n    footerSetting: setting {\n      storeName\n    }\n  }\n";
export {};
