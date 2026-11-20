import React from 'react';
import { ProductCarousel } from '../../components/product/ProductCarousel.js';
import { Bleed } from '../../components/ui/bleed.js';
import { sectionY } from '../../lib/layout.js';
export default function NewArrivals({ newArrivals }) {
    var _a;
    var _b;
    const items = (_b = (_a = newArrivals === null || newArrivals === void 0 ? void 0 : newArrivals.products) === null || _a === void 0 ? void 0 : _a.items) !== null && _b !== void 0 ? _b : [];
    if (!items.length)
        return null;
    return (React.createElement(Bleed, { "aria-label": "New arrivals", className: sectionY },
        React.createElement(ProductCarousel, { products: items, label: "New arrivals" })));
}
export const layout = {
    areaId: 'content',
    sortOrder: 50
};
export const query = `
  query Query {
    newArrivals: collection(code: "new-arrivals") {
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
//# sourceMappingURL=NewArrivals.js.map