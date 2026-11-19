import React from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@evershop/evershop/components/common/ui/Sheet';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@evershop/evershop/components/common/ui/Accordion';
export function MobileMenu({ items, storeName }) {
    return /*#__PURE__*/ React.createElement(Sheet, null, /*#__PURE__*/ React.createElement(SheetTrigger, {
        "aria-label": "Open menu",
        className: "flex h-10 w-10 items-center justify-center hover:bg-muted lg:hidden"
    }, /*#__PURE__*/ React.createElement(Menu, {
        className: "h-5 w-5"
    })), /*#__PURE__*/ React.createElement(SheetContent, {
        side: "left",
        className: "w-[85vw] max-w-sm rounded-none p-0"
    }, /*#__PURE__*/ React.createElement(SheetHeader, {
        className: "border-b p-4"
    }, /*#__PURE__*/ React.createElement(SheetTitle, {
        className: "uppercase tracking-widest"
    }, storeName)), /*#__PURE__*/ React.createElement(Accordion, {
        className: "px-4"
    }, items.map((cat)=>/*#__PURE__*/ React.createElement(AccordionItem, {
            key: cat.url,
            value: cat.url
        }, /*#__PURE__*/ React.createElement(AccordionTrigger, {
            className: "rounded-none text-sm font-semibold uppercase tracking-wider"
        }, cat.name), /*#__PURE__*/ React.createElement(AccordionContent, null, /*#__PURE__*/ React.createElement("ul", {
            className: "space-y-1 pb-2"
        }, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
            href: cat.url,
            className: "block py-2 text-sm font-medium underline"
        }, "Shop all ", cat.name)), (cat.children ?? []).map((s)=>/*#__PURE__*/ React.createElement("li", {
                key: s.url
            }, /*#__PURE__*/ React.createElement("a", {
                href: s.url,
                className: "block py-2 text-sm"
            }, s.name), (s.children ?? []).map((g)=>/*#__PURE__*/ React.createElement("a", {
                    key: g.url,
                    href: g.url,
                    className: "block py-1.5 pl-4 text-xs text-muted-foreground"
                }, g.name)))))))))));
}
