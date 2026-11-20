import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { Carousel, CarouselContent, CarouselItem, useCarousel } from '../ui/carousel.js';
import { ProductCard } from './ProductCard.js';
function Arrows() {
    const { scrollPrev, scrollNext } = useCarousel();
    const base = 'absolute top-1/2 z-20 hidden size-11 -translate-y-1/2 rounded-full shadow-md lg:inline-flex';
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { type: "button", variant: "secondary", size: "icon", "aria-label": "Previous products", onClick: scrollPrev, className: `${base} left-4` },
            React.createElement(ChevronLeft, { className: "size-5" })),
        React.createElement(Button, { type: "button", variant: "secondary", size: "icon", "aria-label": "Next products", onClick: scrollNext, className: `${base} right-4` },
            React.createElement(ChevronRight, { className: "size-5" }))));
}
/**
 * Full-width product carousel. Large screens show 4 cards with arrows floating
 * over the sides; phones show ~2.5 cards so the last one is cut off to hint at
 * scrolling. Drag or swipe works everywhere.
 */
export function ProductCarousel({ products, label }) {
    if (!products.length)
        return null;
    return (React.createElement(Carousel, { opts: { align: 'start', dragFree: true, containScroll: 'trimSnaps' }, "aria-label": label },
        React.createElement(CarouselContent, { className: "-ml-2 sm:-ml-3" }, products.map((p) => (React.createElement(CarouselItem, { key: p.url, className: "basis-[42%] pl-2 sm:basis-[32%] sm:pl-3 md:basis-[26%] lg:basis-1/4" },
            React.createElement(ProductCard, { product: p }))))),
        React.createElement(Arrows, null)));
}
//# sourceMappingURL=ProductCarousel.js.map