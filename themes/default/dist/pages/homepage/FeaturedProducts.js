import React from 'react';
import { Card, CardContent } from '@evershop/evershop/components/common/ui/Card';
import { Badge } from '@evershop/evershop/components/common/ui/Badge';
export default function FeaturedProducts({ homeProducts }) {
    const items = homeProducts?.items ?? [];
    if (!items.length) return null;
    return /*#__PURE__*/ React.createElement("section", {
        className: "mb-14"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "mb-6 text-2xl font-bold"
    }, "Featured shoes"), /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-2 gap-4 md:grid-cols-4"
    }, items.map((p)=>{
        const onSale = p.price.special.value > 0 && p.price.special.value < p.price.regular.value;
        return /*#__PURE__*/ React.createElement("a", {
            key: p.url,
            href: p.url,
            className: "group"
        }, /*#__PURE__*/ React.createElement(Card, {
            className: "overflow-hidden"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "relative aspect-square bg-muted"
        }, p.image && /*#__PURE__*/ React.createElement("img", {
            src: p.image.url,
            alt: p.image.alt || p.name,
            loading: "lazy",
            className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        }), onSale && /*#__PURE__*/ React.createElement(Badge, {
            className: "absolute left-3 top-3"
        }, "Sale")), /*#__PURE__*/ React.createElement(CardContent, {
            className: "space-y-1 pt-4"
        }, /*#__PURE__*/ React.createElement("h3", {
            className: "line-clamp-1 font-medium"
        }, p.name), /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center gap-2 text-sm"
        }, /*#__PURE__*/ React.createElement("span", {
            className: "font-semibold"
        }, onSale ? p.price.special.text : p.price.regular.text), onSale && /*#__PURE__*/ React.createElement("span", {
            className: "text-muted-foreground line-through"
        }, p.price.regular.text)))));
    })));
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
