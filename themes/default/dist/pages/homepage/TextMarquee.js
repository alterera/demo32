import React from 'react';
import { Bleed } from '../../components/ui/bleed.js';
import { Marquee } from '../../components/ui/marquee.js';
import { TEXT_MARQUEE } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';
export default function TextMarquee() {
    return (React.createElement(Bleed, { "aria-label": "Our promises", className: sectionY },
        React.createElement("div", { className: "border-y py-5 md:py-7" },
            React.createElement(Marquee, { duration: 28, gap: "gap-8 md:gap-12" }, TEXT_MARQUEE.map((t) => (React.createElement("span", { key: t, className: "flex items-center gap-8 md:gap-12" },
                React.createElement("span", { className: "whitespace-nowrap text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" }, t),
                React.createElement("span", { "aria-hidden": "true", className: "text-3xl sm:text-5xl md:text-6xl" }, "\u2731"))))))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 100
};
//# sourceMappingURL=TextMarquee.js.map