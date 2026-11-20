import * as React from 'react';
import { cn } from '@evershop/evershop/lib/util/cn';
/**
 * Infinite horizontal marquee. The children are rendered twice and the track
 * moves by exactly half its width, so the loop is seamless. Pure CSS animation
 * (no JS per frame) and it stops for visitors who prefer reduced motion.
 */
export function Marquee({ duration = 30, pauseOnHover = true, reverse = false, gap = 'gap-8', className, children, ...props }) {
    return (React.createElement("div", { className: cn('group flex overflow-hidden', className), ...props },
        React.createElement("style", null, `
        @keyframes cs-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cs-marquee-track{animation:cs-marquee var(--cs-marquee-duration,30s) linear infinite}
        .cs-marquee-reverse{animation-direction:reverse}
        .group:hover .cs-marquee-pause{animation-play-state:paused}
        @media (prefers-reduced-motion:reduce){.cs-marquee-track{animation:none}}
      `),
        React.createElement("div", { className: cn('cs-marquee-track flex w-max shrink-0', gap, reverse && 'cs-marquee-reverse', pauseOnHover && 'cs-marquee-pause'), style: { ['--cs-marquee-duration']: `${duration}s` } },
            React.createElement("div", { className: cn('flex shrink-0 items-center', gap) }, children),
            React.createElement("div", { className: cn('flex shrink-0 items-center', gap), "aria-hidden": "true" }, children))));
}
//# sourceMappingURL=marquee.js.map