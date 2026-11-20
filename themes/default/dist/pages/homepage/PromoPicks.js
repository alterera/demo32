import React from 'react';
import { ProductCarousel } from '../../components/product/ProductCarousel.js';
import { Bleed } from '../../components/ui/bleed.js';
import { sectionY } from '../../lib/layout.js';
export default function PromoPicks({ promoPicks }) {
    var _a;
    var _b;
    const items = (_b = (_a = promoPicks === null || promoPicks === void 0 ? void 0 : promoPicks.products) === null || _a === void 0 ? void 0 : _a.items) !== null && _b !== void 0 ? _b : [];
    if (!items.length)
        return null;
    return (React.createElement(Bleed, { "aria-label": "Picks for you", className: sectionY },
        React.createElement(ProductCarousel, { products: items, label: "Picks for you" })));
}
export const layout = {
    areaId: 'content',
    sortOrder: 90
};
export const query = `
  query Query {
    promoPicks: collection(code: "promo-picks") {
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
//# sourceMappingURL=PromoPicks.js.map