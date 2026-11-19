import React from 'react';
export default function CategoryTiles({ homeCategories }) {
    const items = homeCategories?.items ?? [];
    if (!items.length) return null;
    return /*#__PURE__*/ React.createElement("section", {
        className: "mb-14"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "mb-6 text-2xl font-bold"
    }, "Shop by category"), /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-2 gap-4 md:grid-cols-4"
    }, items.slice(0, 4).map((c)=>/*#__PURE__*/ React.createElement("a", {
            key: c.url,
            href: c.url,
            className: "group relative flex aspect-square items-end overflow-hidden rounded-xl bg-muted p-4"
        }, c.image && /*#__PURE__*/ React.createElement("img", {
            src: c.image.url,
            alt: c.image.alt || c.name,
            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        }), /*#__PURE__*/ React.createElement("span", {
            className: "relative rounded-md bg-background/90 px-3 py-1 text-sm font-semibold"
        }, c.name)))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 20
};
export const query = `
  query Query {
    homeCategories: categories(filters: [{ key: "limit", operation: eq, value: "4" }]) {
      items {
        name
        url
        image {
          url
          alt
        }
      }
    }
  }
`;
