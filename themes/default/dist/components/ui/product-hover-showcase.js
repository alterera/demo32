import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@evershop/evershop/lib/util/cn';
const NEON = '#39ff14';
/** "Core Sneaker Pro" -> ["Core Sneaker", "Pro"]; short names stay on one line. */
function splitName(name) {
    const words = name.trim().split(/\s+/);
    if (words.length < 3)
        return [name, ''];
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}
/**
 * Interactive product showcase: a large stage for the selected product and a row
 * of thumbnails. Hover (or tap / arrow keys) a thumbnail to switch. Product shots
 * should be transparent so they sit on the light stage. Sharp corners, light only.
 */
export function ProductHoverShowcase({ products, defaultIndex = 0, autoplay = false, autoplayInterval = 4000, buttonText = 'Shop now', className }) {
    var _a;
    const [active, setActive] = React.useState(Math.min(defaultIndex, Math.max(products.length - 1, 0)));
    const [hovered, setHovered] = React.useState(false);
    const tabs = React.useRef([]);
    React.useEffect(() => {
        var _a;
        if (!autoplay || hovered || products.length < 2)
            return;
        if ((_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-reduced-motion: reduce)').matches)
            return;
        const id = window.setInterval(() => setActive((i) => (i + 1) % products.length), autoplayInterval);
        return () => window.clearInterval(id);
    }, [autoplay, autoplayInterval, hovered, products.length]);
    if (!products.length)
        return null;
    const product = (_a = products[active]) !== null && _a !== void 0 ? _a : products[0];
    const [line1, line2] = splitName(product.name);
    const onKeyDown = (e, i) => {
        var _a;
        const last = products.length - 1;
        const next = e.key === 'ArrowRight' ? (i + 1) % products.length
            : e.key === 'ArrowLeft' ? (i - 1 + products.length) % products.length
                : e.key === 'Home' ? 0
                    : e.key === 'End' ? last
                        : null;
        if (next === null)
            return;
        e.preventDefault();
        setActive(next);
        (_a = tabs.current[next]) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (React.createElement("div", { role: "region", "aria-label": "Product showcase", className: cn('relative w-full select-none overflow-hidden bg-[#f6f6f4]', className), onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) },
        React.createElement("div", { "aria-hidden": "true", className: "pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full opacity-20 blur-3xl", style: { backgroundColor: NEON } }),
        React.createElement("div", { className: "relative z-10 flex flex-col gap-4 p-5 sm:p-8 md:flex-row md:items-start md:justify-between" },
            React.createElement("div", { className: "min-h-[3.5rem]" },
                React.createElement(AnimatePresence, { mode: "wait" },
                    React.createElement(motion.h2, { key: product.id, initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -6 }, transition: { duration: 0.22, ease: 'easeOut' }, className: "text-2xl font-extrabold leading-[0.95] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl" },
                        React.createElement("span", { className: "block" }, line1),
                        line2 && React.createElement("span", { className: "block font-medium text-neutral-600" }, line2)))),
            React.createElement("div", { className: "flex items-center gap-4 sm:gap-6" },
                React.createElement(AnimatePresence, { mode: "wait" },
                    React.createElement(motion.p, { key: `${product.id}-price`, initial: { opacity: 0, y: 4 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -4 }, transition: { duration: 0.2 }, className: "flex items-baseline gap-2 tabular-nums" },
                        React.createElement("span", { className: "text-2xl font-light text-neutral-900 sm:text-3xl" }, product.price),
                        product.comparePrice && (React.createElement("span", { className: "text-sm text-neutral-500 line-through" }, product.comparePrice)))),
                React.createElement("a", { href: product.url, className: "group inline-flex items-center gap-2 bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 sm:px-6 sm:py-3" },
                    buttonText,
                    React.createElement(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-0.5" })))),
        React.createElement("div", { className: "relative flex h-[240px] w-full items-center justify-center sm:h-[320px] md:h-[380px]" },
            React.createElement("div", { "aria-hidden": "true", className: "absolute bottom-5 left-1/2 h-5 w-2/3 -translate-x-1/2 rounded-[50%] bg-neutral-900/10 blur-lg" }),
            React.createElement(AnimatePresence, { mode: "wait" },
                React.createElement(motion.div, { key: product.id, initial: { opacity: 0, scale: 0.97, x: 16 }, animate: { opacity: 1, scale: 1, x: 0 }, exit: { opacity: 0, scale: 0.97, x: -16 }, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, className: "flex h-full w-full items-center justify-center px-4" },
                    React.createElement(motion.img, { src: product.image, alt: product.name, draggable: false, animate: { y: [0, -5, 0] }, transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' }, className: "pointer-events-none max-h-[88%] w-auto max-w-full object-contain mix-blend-multiply" })))),
        React.createElement("div", { className: "relative z-10 px-3 pb-3 pt-6 sm:px-8 sm:pb-8" },
            React.createElement("div", { role: "tablist", "aria-label": "Choose product", className: "flex gap-2 overflow-x-auto pt-3 [scrollbar-width:none] sm:gap-3 [&::-webkit-scrollbar]:hidden" }, products.map((p, i) => {
                const isActive = i === active;
                return (React.createElement("button", { key: p.id, ref: (el) => {
                        tabs.current[i] = el;
                    }, role: "tab", type: "button", "aria-selected": isActive, tabIndex: isActive ? 0 : -1, onClick: () => setActive(i), onMouseEnter: () => setActive(i), onFocus: () => setActive(i), onKeyDown: (e) => onKeyDown(e, i), className: cn('relative min-w-[30%] shrink-0 border bg-white p-2 outline-none transition-[transform,box-shadow,border-color] duration-200 focus-visible:ring-2 focus-visible:ring-neutral-900 sm:min-w-0 sm:flex-1 sm:p-3', isActive
                        ? 'z-10 -translate-y-2 border-neutral-300 shadow-lg'
                        : 'border-neutral-200 hover:border-neutral-300') },
                    isActive && (React.createElement(motion.span, { layoutId: "showcase-indicator", className: "absolute -top-px inset-x-0 h-0.5", style: { backgroundColor: NEON }, transition: { type: 'spring', stiffness: 400, damping: 30 } })),
                    React.createElement("span", { className: "flex h-14 items-center justify-center bg-[#f9f9f7] sm:h-16" },
                        React.createElement("img", { src: p.image, alt: "", loading: "lazy", draggable: false, className: "h-full w-auto max-w-full object-contain mix-blend-multiply" })),
                    React.createElement("span", { className: "mt-2 block truncate text-center text-[11px] font-semibold sm:text-xs" }, p.name),
                    React.createElement("span", { className: "block text-center text-[10px] tabular-nums text-neutral-500 sm:text-[11px]" }, p.price)));
            })))));
}
export default ProductHoverShowcase;
//# sourceMappingURL=product-hover-showcase.js.map