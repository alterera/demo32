import React from 'react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { ProductCard } from '../../components/product/ProductCard.js';
import { ScrollRevealText } from '../../components/ui/scroll-reveal-text.js';
import { BEST_SELLERS } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';
export default function BestSellers({ bestSellers, bsSetting }) {
    var _a;
    var _b;
    const products = (_b = (_a = bestSellers === null || bestSellers === void 0 ? void 0 : bestSellers.products) === null || _a === void 0 ? void 0 : _a.items) !== null && _b !== void 0 ? _b : [];
    const text = BEST_SELLERS.paragraph.replace('{name}', (bsSetting === null || bsSetting === void 0 ? void 0 : bsSetting.storeName) || 'our');
    return (React.createElement("section", { "aria-labelledby": "best-sellers-copy", className: sectionY },
        React.createElement("div", { className: "mx-auto max-w-4xl py-6 text-center md:py-10" },
            React.createElement(ScrollRevealText, { text: text, className: "text-2xl font-bold leading-snug sm:text-3xl md:text-4xl" }),
            React.createElement("span", { id: "best-sellers-copy", className: "sr-only" }, "Best sellers"),
            React.createElement("div", { className: "mt-8" },
                React.createElement(Button, { size: "lg", className: "rounded-none px-8", render: React.createElement("a", { href: BEST_SELLERS.buttonHref }) }, BEST_SELLERS.buttonLabel))),
        products.length > 0 && (React.createElement("ul", { className: "mt-6 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 lg:gap-4" }, products.slice(0, 4).map((p) => (React.createElement("li", { key: p.url },
            React.createElement(ProductCard, { product: p }))))))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 30
};
export const query = `
  query Query {
    bsSetting: setting {
      storeName
    }
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