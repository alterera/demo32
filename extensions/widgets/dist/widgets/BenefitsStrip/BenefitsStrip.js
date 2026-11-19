import React from 'react';
import { ICONS } from './icons.js';
export default function BenefitsStrip({ benefitsStripWidget }) {
    const items = (benefitsStripWidget?.items ?? []).filter((i) => i?.title);
    if (!items.length)
        return null;
    return (React.createElement("section", { "aria-label": "Why shop with us", className: "py-8 md:py-12" },
        React.createElement("ul", { className: "grid grid-cols-2 border md:grid-cols-4 md:divide-x" }, items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? ICONS.verified;
            return (React.createElement("li", { key: item.id ?? i, className: "flex items-center gap-3 p-4 max-md:[&:nth-child(n+3)]:border-t max-md:odd:border-r md:p-5" },
                React.createElement(Icon, { className: "size-6 shrink-0", strokeWidth: 1.5, "aria-hidden": "true" }),
                React.createElement("div", { className: "min-w-0" },
                    React.createElement("p", { className: "text-sm font-semibold" }, item.title),
                    item.text && (React.createElement("p", { className: "text-xs text-muted-foreground" }, item.text)))));
        }))));
}
export const query = `
  query Query($items: JSON) {
    benefitsStripWidget(items: $items) {
      items
    }
  }
`;
export const variables = `{
  items: getWidgetSetting("items")
}`;
