import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useHoverOpen } from './useHoverOpen.js';
function NavItem({ cat, active, onActive }) {
    var _a;
    const subs = (_a = cat.children) !== null && _a !== void 0 ? _a : [];
    const { open, bind } = useHoverOpen();
    return (React.createElement("li", { className: "relative flex items-stretch", ...bind, onMouseEnter: () => {
            bind.onMouseEnter();
            onActive(true);
        }, onMouseLeave: () => {
            bind.onMouseLeave();
            onActive(false);
        } },
        React.createElement("a", { href: cat.url, className: "relative flex items-center gap-1 px-1 text-sm font-semibold uppercase tracking-wider", "aria-haspopup": subs.length > 0 ? 'true' : undefined, "aria-expanded": subs.length > 0 ? open : undefined },
            cat.name,
            subs.length > 0 && (React.createElement(motion.span, { animate: { rotate: open ? 180 : 0 }, transition: { duration: 0.2 } },
                React.createElement(ChevronDown, { className: "h-3.5 w-3.5", "aria-hidden": "true" }))),
            active && (React.createElement(motion.span, { layoutId: "nav-underline", className: "absolute inset-x-0 bottom-3 h-0.5 bg-foreground", transition: { type: 'spring', stiffness: 500, damping: 40 } }))),
        React.createElement(AnimatePresence, null, open && subs.length > 0 && (React.createElement(motion.div, { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 4 }, transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] }, className: "absolute left-1/2 top-full z-50 min-w-56 -translate-x-1/2 border bg-background shadow-lg" },
            React.createElement("ul", { className: "py-2" }, subs.map((s) => { var _a; return (React.createElement("li", { key: s.url },
                React.createElement("a", { href: s.url, className: "block px-5 py-2 text-sm hover:bg-muted" }, s.name),
                ((_a = s.children) !== null && _a !== void 0 ? _a : []).map((g) => (React.createElement("a", { key: g.url, href: g.url, className: "block py-1.5 pl-9 pr-5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground" }, g.name))))); })))))));
}
export function DesktopNav({ items }) {
    const [activeUrl, setActiveUrl] = React.useState(null);
    return (React.createElement("nav", { "aria-label": "Main", className: "hidden lg:block" },
        React.createElement("ul", { className: "flex h-full items-stretch gap-8" }, items.map((cat) => (React.createElement(NavItem, { key: cat.url, cat: cat, active: activeUrl === cat.url, onActive: (on) => setActiveUrl((cur) => (on ? cat.url : cur === cat.url ? null : cur)) }))))));
}
//# sourceMappingURL=DesktopNav.js.map