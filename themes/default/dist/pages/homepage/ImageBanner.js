import React from 'react';
import { BANNER } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';
export default function ImageBanner() {
    return (React.createElement("section", { "aria-label": "Promotion", className: sectionY },
        React.createElement("a", { href: BANNER.href, className: "block overflow-hidden" },
            React.createElement("img", { src: BANNER.image, alt: BANNER.alt, loading: "lazy", className: "aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:aspect-[16/9] lg:aspect-[16/7]" }))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 80
};
//# sourceMappingURL=ImageBanner.js.map