import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { Bleed } from '../../components/ui/bleed.js';
import { FEATURE_COLUMNS } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';
function FeatureColumn({ col }) {
    const [hover, setHover] = useState(false);
    // a second image is optional: without one the column keeps its single picture
    const image = hover && col.images.length > 1 ? col.images[1] : col.images[0];
    return (React.createElement("div", { className: "relative aspect-[4/5] overflow-hidden bg-neutral-200 sm:aspect-square", onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onFocus: () => setHover(true), onBlur: () => setHover(false) },
        React.createElement(AnimatePresence, { initial: false },
            React.createElement(motion.img, { key: image, src: image, alt: "", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.45 }, className: "absolute inset-0 h-full w-full object-cover" })),
        React.createElement("div", { "aria-hidden": "true", className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" }),
        React.createElement("div", { className: "absolute inset-x-0 bottom-0 p-5 text-white sm:p-8" },
            React.createElement("h2", { className: "text-xl font-bold text-white sm:text-2xl" }, col.title),
            React.createElement("p", { className: "mt-1 text-sm font-medium text-white/90" }, col.subtitle),
            React.createElement(Button, { variant: "outline", size: "sm", className: "mt-4 rounded-none border-white bg-transparent px-5 text-white hover:bg-white hover:text-black", nativeButton: false, render: React.createElement("a", { href: col.buttonHref }) }, col.buttonLabel))));
}
export default function FeatureSplit() {
    return (React.createElement(Bleed, { "aria-label": "Featured collections", className: sectionY },
        React.createElement("div", { className: "grid sm:grid-cols-2" }, FEATURE_COLUMNS.map((col) => (React.createElement(FeatureColumn, { key: col.id, col: col }))))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 60
};
//# sourceMappingURL=FeatureSplit.js.map