import * as React from 'react';
/**
 * Text whose words turn the brand neon, one by one, as it scrolls through the
 * viewport. Each entry in `lines` is its own line. With reduced motion the full
 * text is shown lit straight away.
 */
export declare function ScrollRevealText({ lines, className }: {
    lines: string[];
    className?: string;
}): React.JSX.Element;
