import React from 'react';
import { Headset, RotateCcw, ShieldCheck, Truck } from 'lucide-react';
import { SERVICE_ITEMS } from '../../content/home.js';
const ICONS = {
    support: Headset,
    shipping: Truck,
    returns: RotateCcw,
    secure: ShieldCheck
};
export default function ServiceStrip() {
    return (React.createElement("section", { "aria-label": "Our services", className: "pt-8 md:pt-12" },
        React.createElement("ul", { className: "grid grid-cols-2 gap-x-4 gap-y-8 border-t py-8 md:grid-cols-4 md:gap-x-8 md:py-10" }, SERVICE_ITEMS.map((item) => {
            const Icon = ICONS[item.icon];
            return (React.createElement("li", { key: item.title, className: "flex flex-col items-center gap-3 text-center" },
                React.createElement(Icon, { className: "size-7", strokeWidth: 1.5, "aria-hidden": "true" }),
                React.createElement("h3", { className: "text-sm font-semibold sm:text-base" }, item.title),
                React.createElement("p", { className: "max-w-[16rem] text-xs leading-relaxed text-muted-foreground sm:text-sm" }, item.text)));
        }))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 120
};
//# sourceMappingURL=ServiceStrip.js.map