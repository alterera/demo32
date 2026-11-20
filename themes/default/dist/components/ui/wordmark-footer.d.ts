import * as React from 'react';
export type FooterColumn = {
    title: string;
    links: {
        label: string;
        href: string;
    }[];
};
export interface WordmarkFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Store name: shown top left and set large at the bottom. */
    name: string;
    year: number;
    description?: string;
    /** Short line under the description, e.g. payment or delivery info. */
    note?: string;
    navLabel?: string;
    columns: FooterColumn[];
    /** Registered company details for the bottom bar. */
    legal: {
        name: string;
        gstin: string;
        address: string;
    };
    credit?: {
        label: string;
        href: string;
    };
}
/**
 * Dark footer in the brand's black and neon green: description, link columns
 * (an accordion on phones), registered-company details, and the store name set
 * large at the bottom. Sharp corners, like the rest of the storefront.
 */
export declare function WordmarkFooter({ name, year, description, note, navLabel, columns, legal, credit, className, ...props }: WordmarkFooterProps): React.JSX.Element;
export default WordmarkFooter;
