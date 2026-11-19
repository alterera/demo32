import React from 'react';
import { ChevronDown } from 'lucide-react';
export function DesktopNav({ items }) {
    return (React.createElement("nav", { "aria-label": "Main", className: "hidden lg:block" },
        React.createElement("ul", { className: "flex h-full items-stretch gap-8" }, items.map((cat) => {
            var _a;
            const subs = (_a = cat.children) !== null && _a !== void 0 ? _a : [];
            return (React.createElement("li", { key: cat.url, className: "group relative flex items-stretch" },
                React.createElement("a", { href: cat.url, className: "flex items-center gap-1 text-sm font-semibold uppercase tracking-wider hover:text-primary" },
                    cat.name,
                    subs.length > 0 && (React.createElement(ChevronDown, { className: "h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180", "aria-hidden": "true" }))),
                subs.length > 0 && (React.createElement("div", { className: "invisible absolute left-1/2 top-full z-50 min-w-56 -translate-x-1/2 border bg-background opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100" },
                    React.createElement("ul", { className: "py-2" }, subs.map((s) => { var _a; return (React.createElement("li", { key: s.url },
                        React.createElement("a", { href: s.url, className: "block px-5 py-2 text-sm hover:bg-muted" }, s.name),
                        ((_a = s.children) !== null && _a !== void 0 ? _a : []).length > 0 && (React.createElement("ul", { className: "pb-1" }, s.children.map((g) => (React.createElement("li", { key: g.url },
                            React.createElement("a", { href: g.url, className: "block py-1.5 pl-9 pr-5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground" }, g.name)))))))); }))))));
        }))));
}
//# sourceMappingURL=DesktopNav.js.map