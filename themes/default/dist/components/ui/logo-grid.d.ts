import * as React from 'react';
export interface Logo {
    name: string;
    /** Image URL. Without it, the name is shown as a text wordmark. */
    image?: string;
}
/**
 * Responsive borderless grid of brand logos (2 / 3 / 6 columns).
 * Logos are muted and regain full colour on hover.
 */
export declare function LogoGrid({ logos, className }: {
    logos: Logo[];
    className?: string;
}): React.JSX.Element;
