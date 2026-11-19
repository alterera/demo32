// shadcn/ui Carousel (embla). Adapted: sharp corners, no arrow buttons built in
// (the hero places its own controls), exposes the embla api through context.
import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@evershop/evershop/lib/util/cn';
const CarouselContext = React.createContext(null);
function useCarousel() {
    const context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error('useCarousel must be used within a <Carousel />');
    }
    return context;
}
function Carousel({ opts, setApi, className, children, ...props }) {
    const [carouselRef, api] = useEmblaCarousel(opts);
    const scrollPrev = React.useCallback(() => api === null || api === void 0 ? void 0 : api.scrollPrev(), [api]);
    const scrollNext = React.useCallback(() => api === null || api === void 0 ? void 0 : api.scrollNext(), [api]);
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            scrollPrev();
        }
        else if (event.key === 'ArrowRight') {
            event.preventDefault();
            scrollNext();
        }
    };
    React.useEffect(() => {
        if (api && setApi)
            setApi(api);
    }, [api, setApi]);
    return (React.createElement(CarouselContext.Provider, { value: { carouselRef, api, scrollPrev, scrollNext } },
        React.createElement("div", { onKeyDownCapture: handleKeyDown, className: cn('relative', className), role: "region", "aria-roledescription": "carousel", ...props }, children)));
}
function CarouselContent({ className, ...props }) {
    const { carouselRef } = useCarousel();
    return (React.createElement("div", { ref: carouselRef, className: "overflow-hidden" },
        React.createElement("div", { className: cn('flex', className), ...props })));
}
function CarouselItem({ className, ...props }) {
    return (React.createElement("div", { role: "group", "aria-roledescription": "slide", className: cn('min-w-0 shrink-0 grow-0 basis-full', className), ...props }));
}
export { Carousel, CarouselContent, CarouselItem, useCarousel };
//# sourceMappingURL=carousel.js.map