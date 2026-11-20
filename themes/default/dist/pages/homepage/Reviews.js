import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../../content/reviews.js';
import { sectionY } from '../../lib/layout.js';
function Stars({ value }) {
    return (React.createElement("span", { className: "flex gap-0.5", role: "img", "aria-label": `${value} out of 5 stars` }, [1, 2, 3, 4, 5].map((n) => (React.createElement(Star, { key: n, className: `size-4 ${n <= value ? 'fill-foreground' : 'fill-transparent text-muted-foreground/40'}`, "aria-hidden": "true" })))));
}
export default function Reviews() {
    const average = REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length;
    return (React.createElement("section", { "aria-labelledby": "reviews-title", className: sectionY },
        React.createElement("div", { className: "mb-6 flex flex-wrap items-end justify-between gap-3 md:mb-8" },
            React.createElement("h2", { id: "reviews-title", className: "text-xl font-bold md:text-2xl" }, "What customers say"),
            React.createElement("p", { className: "flex items-center gap-2 text-sm" },
                React.createElement(Stars, { value: Math.round(average) }),
                React.createElement("span", { className: "font-semibold" }, average.toFixed(1)),
                React.createElement("span", { className: "text-muted-foreground" },
                    "from ",
                    REVIEWS.length,
                    " reviews"))),
        React.createElement("ul", { className: "grid gap-3 md:grid-cols-3 md:gap-4" }, REVIEWS.map((r) => (React.createElement("li", { key: r.id, className: "flex flex-col gap-3 border p-5" },
            React.createElement(Stars, { value: r.rating }),
            React.createElement("h3", { className: "font-semibold" }, r.title),
            React.createElement("p", { className: "text-sm leading-relaxed text-muted-foreground" }, r.text),
            React.createElement("p", { className: "mt-auto text-sm font-medium" },
                r.name,
                React.createElement("span", { className: "font-normal text-muted-foreground" },
                    " \u00B7 ",
                    r.city))))))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 110
};
//# sourceMappingURL=Reviews.js.map