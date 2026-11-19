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
    legalName?: string;
    year: number;
    description?: string;
    /** Short line under the description, e.g. payment or delivery info. */
    note?: string;
    navLabel?: string;
    columns: FooterColumn[];
    email?: string;
}
/**
 * Footer with a short description, link columns that fold into an accordion on
 * phones, and the store name set large and fading into the background.
 * Sharp corners to match the rest of the storefront.
 */
export declare function WordmarkFooter({ name, legalName, year, description, note, navLabel, columns, email, className, ...props }: WordmarkFooterProps): React.JSX.Element;
export default WordmarkFooter;
