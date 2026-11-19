import React from 'react';
import { Badge } from '@evershop/evershop/components/common/ui/Badge';
import { sectionY } from '../../lib/layout.js';
export default function FeaturedProducts({ homeProducts }) {
    var _a;
    const items = (_a = homeProducts === null || homeProducts === void 0 ? void 0 : homeProducts.items) !== null && _a !== void 0 ? _a : [];
    if (!items.length)
        return null;
    return (React.createElement("section", { "aria-labelledby": "featured-shoes", className: sectionY },
        React.createElement("div", { className: "mb-5 flex items-end justify-between gap-4 md:mb-6" },
            React.createElement("h2", { id: "featured-shoes", className: "text-xl font-bold md:text-2xl" }, "Featured shoes"),
            React.createElement("a", { href: "/search?keyword=", className: "text-sm font-medium underline-offset-4 hover:underline" }, "View all")),
        React.createElement("ul", { className: "grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4" }, items.map((p) => {
            const sale = p.price.special.value > 0 && p.price.special.value < p.price.regular.value;
            const off = sale
                ? Math.round((1 - p.price.special.value / p.price.regular.value) * 100)
                : 0;
            return (React.createElement("li", { key: p.url },
                React.createElement("a", { href: p.url, className: "group block bg-[#f7f7f5]" },
                    React.createElement("div", { className: "relative aspect-[4/5] overflow-hidden" },
                        p.image && (React.createElement("img", { src: p.image.url, alt: p.image.alt || p.name, loading: "lazy", className: "absolute inset-0 h-full w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-105 sm:p-7" })),
                        sale && (React.createElement(Badge, { className: "absolute left-0 top-3 rounded-none px-2.5" },
                            off,
                            "% off"))),
                    React.createElement("div", { className: "space-y-1 px-3 pb-4 pt-3 sm:px-4" },
                        React.createElement("h3", { className: "line-clamp-1 text-sm font-medium sm:text-base" }, p.name),
                        React.createElement("p", { className: "flex items-baseline gap-2 text-sm" },
                            React.createElement("span", { className: "font-semibold" }, sale ? p.price.special.text : p.price.regular.text),
                            sale && (React.createElement("span", { className: "text-xs text-muted-foreground line-through" }, p.price.regular.text)))))));
        }))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 30
};
export const query = `
  query Query {
    homeProducts: products(filters: [{ key: "limit", operation: eq, value: "8" }]) {
      items {
        name
        url
        image {
          url
          alt
        }
        price {
          regular {
            value
            text
          }
          special {
            value
            text
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=FeaturedProducts.js.map