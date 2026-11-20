import React from 'react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { ProductCard } from '../../components/product/ProductCard.js';
import { ScrollRevealText } from '../../components/ui/scroll-reveal-text.js';
import { BEST_SELLERS } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';
export default function BestSellers({ bestSellers }) {
    var _a;
    var _b;
    const products = (_b = (_a = bestSellers === null || bestSellers === void 0 ? void 0 : bestSellers.products) === null || _a === void 0 ? void 0 : _a.items) !== null && _b !== void 0 ? _b : [];
    return (React.createElement("section", { "aria-labelledby": "best-sellers-copy", className: sectionY },
        React.createElement("div", { className: "pb-6 md:pb-8" },
            React.createElement(ScrollRevealText, { lines: BEST_SELLERS.lines, className: "text-xl font-bold leading-tight sm:text-2xl md:text-3xl" }),
            React.createElement("span", { id: "best-sellers-copy", className: "sr-only" }, "Best sellers"),
            React.createElement("div", { className: "mt-5" },
                React.createElement(Button, { className: "rounded-none px-6", nativeButton: false, render: React.createElement("a", { href: BEST_SELLERS.buttonHref }) }, BEST_SELLERS.buttonLabel))),
        products.length > 0 && (React.createElement("ul", { className: "grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 lg:gap-4" }, products.slice(0, 4).map((p) => (React.createElement("li", { key: p.url },
            React.createElement(ProductCard, { product: p }))))))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 30
};
export const query = `
  query Query {
    bestSellers: collection(code: "best-sellers") {
      products(filters: [{ key: "limit", operation: eq, value: "4" }]) {
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
  }
`;
//# sourceMappingURL=BestSellers.js.map