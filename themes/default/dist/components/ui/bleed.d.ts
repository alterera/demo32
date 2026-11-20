import * as React from 'react';
/**
 * Full-width bleed: breaks out of EverShop's page-width column so the content
 * spans the whole viewport. Pair with `shell` / `bleedInset` for inner alignment.
 */
export declare function Bleed({ className, ...props }: React.HTMLAttributes<HTMLElement> & {
    as?: 'section' | 'div';
}): React.JSX.Element;
