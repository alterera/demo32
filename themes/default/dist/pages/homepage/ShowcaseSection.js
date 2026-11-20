import React from 'react';
import { ProductHoverShowcase } from '../../components/ui/product-hover-showcase.js';
import { sectionY } from '../../lib/layout.js';
export default function ShowcaseSection({ showcase }) {
    var _a;
    var _b;
    const items = ((_b = (_a = showcase === null || showcase === void 0 ? void 0 : showcase.products) === null || _a === void 0 ? void 0 : _a.items) !== null && _b !== void 0 ? _b : [])
        .filter((p) => { var _a; return (_a = p.image) === null || _a === void 0 ? void 0 : _a.url; })
        .map((p) => {
        const sale = p.price.special.value > 0 && p.price.special.value < p.price.regular.value;
        return {
            id: p.url,
            name: p.name,
            url: p.url,
            image: p.image.url,
            price: sale ? p.price.special.text : p.price.regular.text,
            comparePrice: sale ? p.price.regular.text : undefined
        };
    });
    if (!items.length)
        return null;
    return (React.createElement("section", { "aria-label": "Product showcase", className: sectionY },
        React.createElement(ProductHoverShowcase, { products: items })));
}
export const layout = {
    areaId: 'content',
    sortOrder: 80
};
export const query = `
  query Query {
    showcase: collection(code: "showcase") {
      products(filters: [{ key: "limit", operation: eq, value: "6" }]) {
        items {
          name
          url
          image {
            url
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
//# sourceMappingURL=ShowcaseSection.js.map