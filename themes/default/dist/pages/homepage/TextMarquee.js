import React from 'react';
import { Bleed } from '../../components/ui/bleed.js';
import { Marquee } from '../../components/ui/marquee.js';
import { TEXT_MARQUEE } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';
export default function TextMarquee() {
    return (React.createElement(Bleed, { "aria-label": "Our promises", className: sectionY },
        React.createElement("div", { className: "border-y py-3 md:py-4" },
            React.createElement(Marquee, { duration: 28, gap: "gap-6 md:gap-8" }, TEXT_MARQUEE.map((t) => (React.createElement("span", { key: t, className: "flex items-center gap-6 md:gap-8" },
                React.createElement("span", { className: "whitespace-nowrap text-lg font-extrabold tracking-tight sm:text-2xl md:text-3xl" }, t),
                React.createElement("span", { "aria-hidden": "true", className: "text-base sm:text-xl md:text-2xl" }, "\u2731"))))))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 100
};
//# sourceMappingURL=TextMarquee.js.map