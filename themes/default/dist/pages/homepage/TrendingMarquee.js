import React from 'react';
import { ProductCard } from '../../components/product/ProductCard.js';
import { Bleed } from '../../components/ui/bleed.js';
import { Marquee } from '../../components/ui/marquee.js';
import { sectionY } from '../../lib/layout.js';
export default function TrendingMarquee({ trending }) {
    var _a;
    var _b;
    const items = (_b = (_a = trending === null || trending === void 0 ? void 0 : trending.products) === null || _a === void 0 ? void 0 : _a.items) !== null && _b !== void 0 ? _b : [];
    if (!items.length)
        return null;
    return (React.createElement(Bleed, { "aria-label": "Trending now", className: sectionY },
        React.createElement(Marquee, { duration: Math.max(40, items.length * 8), gap: "gap-2 sm:gap-3" }, items.map((p) => (React.createElement("div", { key: p.url, className: "w-44 shrink-0 sm:w-56 lg:w-64" },
            React.createElement(ProductCard, { product: p })))))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 70
};
export const query = `
  query Query {
    trending: collection(code: "trending") {
      products(filters: [{ key: "limit", operation: eq, value: "12" }]) {
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
//# sourceMappingURL=TrendingMarquee.js.map