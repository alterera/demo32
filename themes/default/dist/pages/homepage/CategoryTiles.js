import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../../components/ui/carousel.js';
import { bleedInset, sectionY, shell } from '../../lib/layout.js';
export default function CategoryTiles({ homeCategories }) {
    var _a;
    const items = (_a = homeCategories === null || homeCategories === void 0 ? void 0 : homeCategories.items) !== null && _a !== void 0 ? _a : [];
    if (!items.length)
        return null;
    return (React.createElement("section", { "aria-labelledby": "shop-by-category", 
        // full-bleed: break out of the content column, then re-align to its edge
        className: `relative left-1/2 w-screen -translate-x-1/2 ${sectionY}` },
        React.createElement("div", { className: shell },
            React.createElement("h2", { id: "shop-by-category", className: "mb-5 text-xl font-bold md:mb-6 md:text-2xl" }, "Shop by category")),
        React.createElement(Carousel, { opts: { align: 'start', dragFree: true, containScroll: 'trimSnaps' }, "aria-label": "Categories" },
            React.createElement(CarouselContent, { style: bleedInset }, items.map((c) => (React.createElement(CarouselItem, { key: c.url, className: "basis-auto pr-5 md:pr-8" },
                React.createElement("a", { href: c.url, draggable: false, className: "group flex w-20 flex-col items-center gap-2.5 text-center sm:w-24 md:w-28" },
                    React.createElement("span", { className: "block aspect-square w-full overflow-hidden rounded-full bg-muted ring-1 ring-border transition-shadow group-hover:ring-2 group-hover:ring-foreground" }, c.image ? (React.createElement("img", { src: c.image.url, alt: "", loading: "lazy", draggable: false, className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" })) : (React.createElement("span", { className: "flex h-full w-full items-center justify-center text-xl font-semibold text-muted-foreground" }, c.name.charAt(0).toUpperCase()))),
                    React.createElement("span", { className: "line-clamp-2 text-xs font-medium sm:text-sm" }, c.name)))))))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 20
};
export const query = `
  query Query {
    homeCategories: categories {
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