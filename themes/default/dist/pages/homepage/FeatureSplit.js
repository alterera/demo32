import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { cn } from '@evershop/evershop/lib/util/cn';
import { FEATURE_SPLIT } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';
export default function FeatureSplit() {
    const [active, setActive] = useState(0);
    const { title, options, buttonLabel, buttonHref } = FEATURE_SPLIT;
    return (React.createElement("section", { "aria-label": title, className: sectionY },
        React.createElement("div", { className: "relative aspect-square w-full overflow-hidden bg-muted sm:aspect-[4/3] lg:aspect-[16/9]" },
            React.createElement(AnimatePresence, { mode: "popLayout", initial: false },
                React.createElement(motion.img, { key: options[active].image, src: options[active].image, alt: `${title} in ${options[active].label}`, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.35 }, className: "absolute inset-0 h-full w-full object-cover" }))),
        React.createElement("div", { className: "mt-5 grid items-center gap-5 lg:grid-cols-[7fr_3fr] lg:gap-8" },
            React.createElement("div", null,
                React.createElement("h2", { className: "text-2xl font-extrabold sm:text-3xl" }, title),
                React.createElement("ul", { className: "mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold sm:text-base" }, options.map((o, i) => (React.createElement("li", { key: o.label, className: "flex items-center gap-2" },
                    i > 0 && React.createElement("span", { "aria-hidden": "true", className: "text-muted-foreground" }, "\u2022"),
                    React.createElement("button", { type: "button", onMouseEnter: () => setActive(i), onFocus: () => setActive(i), onClick: () => setActive(i), "aria-pressed": i === active, className: cn('border-b-2 pb-0.5 transition-colors', i === active
                            ? 'border-foreground'
                            : 'border-transparent text-muted-foreground hover:text-foreground') }, o.label)))))),
            React.createElement("div", { className: "lg:justify-self-end" },
                React.createElement(Button, { size: "lg", variant: "outline", className: "w-full rounded-none border-foreground px-8 lg:w-auto", render: React.createElement("a", { href: buttonHref }) }, buttonLabel)))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 60
};
//# sourceMappingURL=FeatureSplit.js.map