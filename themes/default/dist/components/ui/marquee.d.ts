import * as React from 'react';
interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Seconds for one full loop. Higher is slower. */
    duration?: number;
    pauseOnHover?: boolean;
    reverse?: boolean;
    /** Gap between items, as a Tailwind gap class. */
    gap?: string;
}
/**
 * Infinite horizontal marquee. The children are rendered twice and the track
 * moves by exactly half its width, so the loop is seamless. Pure CSS animation
 * (no JS per frame) and it stops for visitors who prefer reduced motion.
 */
export declare function Marquee({ duration, pauseOnHover, reverse, gap, className, children, ...props }: MarqueeProps): React.JSX.Element;
export {};
