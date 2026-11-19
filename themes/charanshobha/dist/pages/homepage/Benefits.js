import React from 'react';
import { Truck, RotateCcw, Banknote, ShieldCheck } from 'lucide-react';
const items = [
    { icon: Truck, title: 'Fast delivery', text: 'Across the country' },
    { icon: RotateCcw, title: 'Easy returns', text: '7-day size exchange' },
    { icon: Banknote, title: 'Cash on delivery', text: 'Pay when it arrives' },
    { icon: ShieldCheck, title: 'Quality assured', text: 'Durable materials' }
];
export default function Benefits() {
    return (React.createElement("section", { className: "mb-14 grid grid-cols-2 gap-6 rounded-xl border p-6 md:grid-cols-4" }, items.map(({ icon: Icon, title, text }) => (React.createElement("div", { key: title, className: "flex items-center gap-3" },
        React.createElement(Icon, { className: "h-6 w-6 shrink-0", "aria-hidden": "true" }),
        React.createElement("div", null,
            React.createElement("p", { className: "text-sm font-semibold" }, title),
            React.createElement("p", { className: "text-xs text-muted-foreground" }, text)))))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 40
};
//# sourceMappingURL=Benefits.js.map