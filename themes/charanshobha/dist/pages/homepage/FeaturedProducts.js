import React from 'react';
import { Card, CardContent } from '@evershop/evershop/components/common/ui/Card';
import { Badge } from '@evershop/evershop/components/common/ui/Badge';
export default function FeaturedProducts({ homeProducts }) {
    var _a;
    const items = (_a = homeProducts === null || homeProducts === void 0 ? void 0 : homeProducts.items) !== null && _a !== void 0 ? _a : [];
    if (!items.length)
        return null;
    return (React.createElement("section", { className: "mb-14" },
        React.createElement("h2", { className: "mb-6 text-2xl font-bold" }, "Featured shoes"),
        React.createElement("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-4" }, items.map((p) => {
            const onSale = p.price.special.value > 0 && p.price.special.value < p.price.regular.value;
            return (React.createElement("a", { key: p.url, href: p.url, className: "group" },
                React.createElement(Card, { className: "overflow-hidden" },
                    React.createElement("div", { className: "relative aspect-square bg-muted" },
                        p.image && (React.createElement("img", { src: p.image.url, alt: p.image.alt || p.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" })),
                        onSale && React.createElement(Badge, { className: "absolute left-3 top-3" }, "Sale")),
                    React.createElement(CardContent, { className: "space-y-1 pt-4" },
                        React.createElement("h3", { className: "line-clamp-1 font-medium" }, p.name),
                        React.createElement("div", { className: "flex items-center gap-2 text-sm" },
                            React.createElement("span", { className: "font-semibold" }, onSale ? p.price.special.text : p.price.regular.text),
                            onSale && (React.createElement("span", { className: "text-muted-foreground line-through" }, p.price.regular.text)))))));
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