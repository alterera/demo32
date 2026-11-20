import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../../components/ui/carousel.js';
import { OFFER_BANNERS } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';
const AUTOPLAY_MS = 4500;
export default function OfferSlideshow() {
    const [api, setApi] = useState();
    useEffect(() => {
        var _a;
        if (!api)
            return;
        if ((_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-reduced-motion: reduce)').matches)
            return;
        const id = window.setInterval(() => api.scrollNext(), AUTOPLAY_MS);
        return () => window.clearInterval(id);
    }, [api]);
    return (React.createElement("section", { "aria-label": "Offers", className: sectionY },
        React.createElement(Carousel, { opts: { loop: true }, setApi: setApi },
            React.createElement(CarouselContent, null, OFFER_BANNERS.map((b) => (React.createElement(CarouselItem, { key: b.id },
                React.createElement("a", { href: b.href, draggable: false, className: "block" },
                    React.createElement("img", { src: b.image, alt: b.alt, loading: "lazy", draggable: false, className: "aspect-[16/6] w-full object-cover sm:aspect-[16/4] lg:aspect-[16/3]" })))))))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 40
};
//# sourceMappingURL=OfferSlideshow.js.map