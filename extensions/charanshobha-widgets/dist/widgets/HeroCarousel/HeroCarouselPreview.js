import React from 'react';
/** Static thumbnail shown in the page-builder widget picker. */
export default function HeroCarouselPreview() {
    return (React.createElement("div", { className: "flex h-[130px] flex-col gap-2 bg-white p-4" },
        React.createElement("div", { className: "relative flex-1 bg-[#d8dfd0]" },
            React.createElement("span", { className: "absolute bottom-1.5 right-2 flex gap-1" },
                React.createElement("span", { className: "h-3 w-3 rounded-full bg-white/90" }),
                React.createElement("span", { className: "h-3 w-3 rounded-full bg-white/90" }))),
        React.createElement("div", { className: "flex justify-center gap-2" }, [0, 1, 2].map((i) => (React.createElement("span", { key: i, className: `h-1.5 rounded-full ${i === 0 ? 'w-4 bg-[#2a2520]' : 'w-1.5 bg-[#d4cab5]'}` }))))));
}
