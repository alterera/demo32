import React from 'react';
export default function CategoryTiles({ homeCategories }) {
    var _a;
    const items = (_a = homeCategories === null || homeCategories === void 0 ? void 0 : homeCategories.items) !== null && _a !== void 0 ? _a : [];
    if (!items.length)
        return null;
    return (React.createElement("section", { className: "mb-14" },
        React.createElement("h2", { className: "mb-6 text-2xl font-bold" }, "Shop by category"),
        React.createElement("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-4" }, items.slice(0, 4).map((c) => (React.createElement("a", { key: c.url, href: c.url, className: "group relative flex aspect-square items-end overflow-hidden rounded-xl bg-muted p-4" },
            c.image && (React.createElement("img", { src: c.image.url, alt: c.image.alt || c.name, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" })),
            React.createElement("span", { className: "relative rounded-md bg-background/90 px-3 py-1 text-sm font-semibold" }, c.name)))))));
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
//# sourceMappingURL=CategoryTiles.js.map