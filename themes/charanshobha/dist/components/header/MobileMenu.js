import React from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@evershop/evershop/components/common/ui/Sheet';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@evershop/evershop/components/common/ui/Accordion';
export function MobileMenu({ items, storeName }) {
    return (React.createElement(Sheet, null,
        React.createElement(SheetTrigger, { "aria-label": "Open menu", className: "flex h-10 w-10 items-center justify-center hover:bg-muted lg:hidden" },
            React.createElement(Menu, { className: "h-5 w-5" })),
        React.createElement(SheetContent, { side: "left", className: "w-[85vw] max-w-sm rounded-none p-0" },
            React.createElement(SheetHeader, { className: "border-b p-4" },
                React.createElement(SheetTitle, { className: "uppercase tracking-widest" }, storeName)),
            React.createElement(Accordion, { className: "px-4" }, items.map((cat) => { var _a; return (React.createElement(AccordionItem, { key: cat.url, value: cat.url },
                React.createElement(AccordionTrigger, { className: "rounded-none text-sm font-semibold uppercase tracking-wider" }, cat.name),
                React.createElement(AccordionContent, null,
                    React.createElement("ul", { className: "space-y-1 pb-2" },
                        React.createElement("li", null,
                            React.createElement("a", { href: cat.url, className: "block py-2 text-sm font-medium underline" },
                                "Shop all ",
                                cat.name)),
                        ((_a = cat.children) !== null && _a !== void 0 ? _a : []).map((s) => { var _a; return (React.createElement("li", { key: s.url },
                            React.createElement("a", { href: s.url, className: "block py-2 text-sm" }, s.name),
                            ((_a = s.children) !== null && _a !== void 0 ? _a : []).map((g) => (React.createElement("a", { key: g.url, href: g.url, className: "block py-1.5 pl-4 text-xs text-muted-foreground" }, g.name))))); }))))); })))));
}
//# sourceMappingURL=MobileMenu.js.map