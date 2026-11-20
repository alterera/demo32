import * as React from 'react';
import { Badge } from '@evershop/evershop/components/common/ui/Badge';
/** Product tile: light image well (product shots are transparent), details below. */
export function ProductCard({ product: p }) {
    const sale = p.price.special.value > 0 && p.price.special.value < p.price.regular.value;
    const off = sale
        ? Math.round((1 - p.price.special.value / p.price.regular.value) * 100)
        : 0;
    return (React.createElement("a", { href: p.url, draggable: false, className: "group block" },
        React.createElement("div", { className: "relative aspect-square overflow-hidden bg-[#f9f9f7]" },
            p.image && (React.createElement("img", { src: p.image.url, alt: p.image.alt || p.name, loading: "lazy", draggable: false, className: "absolute inset-0 h-full w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-105 sm:p-6" })),
            sale && (React.createElement(Badge, { className: "absolute left-0 top-3 rounded-none px-2.5" },
                off,
                "% off"))),
        React.createElement("div", { className: "space-y-0.5 pb-1 pt-3" },
            React.createElement("h3", { className: "line-clamp-1 text-sm font-medium sm:text-base" }, p.name),
            React.createElement("p", { className: "flex items-baseline gap-2 text-sm" },
                React.createElement("span", { className: "font-semibold" }, sale ? p.price.special.text : p.price.regular.text),
                sale && (React.createElement("span", { className: "text-xs text-muted-foreground line-through" }, p.price.regular.text))))));
}
//# sourceMappingURL=ProductCard.js.map