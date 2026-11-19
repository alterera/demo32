import React from 'react';
import { type NavCategory } from '../../components/header/types.js';
interface Props {
    navCategories?: {
        items: NavCategory[];
    };
    headerSetting?: {
        storeName?: string;
        logo?: string;
        logoWidth?: number;
        logoHeight?: number;
    };
    searchUrl: string;
    cartUrl: string;
    accountUrl: string;
    loginUrl: string;
}
export default function SiteHeader({ navCategories, headerSetting, searchUrl, cartUrl, accountUrl, loginUrl, }: Props): React.JSX.Element;
export declare const layout: {
    areaId: string;
    sortOrder: number;
};
export declare const query = "\n  query Query {\n    navCategories: categories {\n      items {\n        name\n        url\n        parent {\n          name\n        }\n        children {\n          name\n          url\n          children {\n            name\n            url\n          }\n        }\n      }\n    }\n    headerSetting: setting {\n      storeName\n      logo\n      logoWidth\n      logoHeight\n    }\n    searchUrl: url(routeId: \"catalogSearch\")\n    cartUrl: url(routeId: \"cart\")\n    accountUrl: url(routeId: \"account\")\n    loginUrl: url(routeId: \"login\")\n  }\n";
export {};
