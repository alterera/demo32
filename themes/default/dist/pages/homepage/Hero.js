import React, { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { cn } from '@evershop/evershop/lib/util/cn';
import { Bleed } from '../../components/ui/bleed.js';
import { Carousel, CarouselContent, CarouselItem } from '../../components/ui/carousel.js';
import { HERO_BUTTONS, HERO_SLIDES } from '../../content/home.js';
import { shell } from '../../lib/layout.js';
const AUTOPLAY_MS = 6000;
export default function Hero({ heroCategories }) {
    const [api, setApi] = useState();
    const [selected, setSelected] = useState(0);
    const [paused, setPaused] = useState(false);
    // hero buttons link to the admin category with the same name, else to search
    const links = HERO_BUTTONS.map((label) => { var _a; var _b; return ({
        label,
        href: (_b = (_a = heroCategories === null || heroCategories === void 0 ? void 0 : heroCategories.items.find((c) => c.name.toLowerCase() === label.toLowerCase())) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : `/search?keyword=${encodeURIComponent(label)}`
    }); });
    useEffect(() => {
        if (!api)
            return;
        const onSelect = () => setSelected(api.selectedScrollSnap());
        onSelect();
        api.on('select', onSelect);
        return () => {
            api.off('select', onSelect);
        };
    }, [api]);
    useEffect(() => {
        var _a;
        if (!api || paused)
            return;
        if ((_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-reduced-motion: reduce)').matches)
            return;
        const id = window.setInterval(() => api.scrollNext(), AUTOPLAY_MS);
        return () => window.clearInterval(id);
    }, [api, paused]);
    const prev = useCallback(() => api === null || api === void 0 ? void 0 : api.scrollPrev(), [api]);
    const next = useCallback(() => api === null || api === void 0 ? void 0 : api.scrollNext(), [api]);
    return (React.createElement(Bleed, { "aria-label": "Featured", onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false), onFocus: () => setPaused(true), onBlur: () => setPaused(false) },
        React.createElement(Carousel, { opts: { loop: true }, setApi: setApi },
            React.createElement(CarouselContent, null, HERO_SLIDES.map((slide, i) => (React.createElement(CarouselItem, { key: slide.id },
                React.createElement("div", { className: "relative aspect-[4/5] w-full overflow-hidden bg-muted sm:aspect-[16/10] lg:aspect-[16/7]" },
                    React.createElement("picture", null,
                        React.createElement("source", { media: "(max-width: 639px)", srcSet: slide.mobileImage }),
                        React.createElement("img", { src: slide.image, alt: "", loading: i === 0 ? 'eager' : 'lazy', fetchPriority: i === 0 ? 'high' : 'auto', className: "absolute inset-0 h-full w-full object-cover" })),
                    React.createElement("div", { "aria-hidden": "true", className: "absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent sm:bg-gradient-to-r sm:from-black/55 sm:via-black/15 sm:to-transparent" }),
                    React.createElement("div", { className: cn(shell, 'absolute inset-0 left-1/2 flex -translate-x-1/2 flex-col items-center justify-end pb-16 text-center text-white sm:items-start sm:justify-center sm:pb-0 sm:text-left') },
                        React.createElement("p", { className: "text-sm font-light tracking-wide text-white sm:text-xl lg:text-2xl" }, slide.sub),
                        React.createElement("h2", { className: "mt-1 max-w-xl text-2xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-7xl" }, slide.title),
                        React.createElement("div", { className: "mt-4 flex justify-center gap-5 sm:mt-8 sm:justify-start sm:gap-6" }, links.map((l) => (React.createElement("a", { key: l.label, href: l.href, className: "border-b-2 border-white pb-0.5 text-xs font-semibold tracking-wide text-white transition-opacity hover:opacity-70 sm:pb-1 sm:text-base" }, l.label)))))))))),
            React.createElement("div", { className: "absolute inset-x-0 bottom-5 flex justify-center gap-2", role: "tablist", "aria-label": "Choose slide" }, HERO_SLIDES.map((s, i) => (React.createElement("button", { key: s.id, type: "button", role: "tab", "aria-selected": i === selected, "aria-label": `Go to slide ${i + 1}`, onClick: () => api === null || api === void 0 ? void 0 : api.scrollTo(i), className: cn('h-2.5 rounded-full transition-all', i === selected ? 'w-6 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80') })))),
            React.createElement("div", { className: "absolute bottom-4 right-4 flex gap-2 sm:bottom-6 sm:right-6" },
                React.createElement(Button, { type: "button", variant: "secondary", size: "icon", "aria-label": "Previous slide", onClick: prev, className: "rounded-full" },
                    React.createElement(ArrowLeft, { className: "size-4" })),
                React.createElement(Button, { type: "button", variant: "secondary", size: "icon", "aria-label": "Next slide", onClick: next, className: "rounded-full" },
                    React.createElement(ArrowRight, { className: "size-4" }))))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    heroCategories: categories {
      items {
        name
        url
      }
    }
  }
`;
//# sourceMappingURL=Hero.js.map