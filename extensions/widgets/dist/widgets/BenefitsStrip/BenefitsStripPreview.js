import React from 'react';
/** Static thumbnail shown in the page-builder widget picker. */
export default function BenefitsStripPreview() {
    return (React.createElement("div", { className: "flex h-[130px] items-center bg-white p-4" },
        React.createElement("div", { className: "grid w-full grid-cols-4 border" }, [0, 1, 2, 3].map((i) => (React.createElement("div", { key: i, className: "flex flex-col items-center gap-1.5 border-r py-4 last:border-r-0" },
            React.createElement("span", { className: "size-4 bg-[#2a2520]" }),
            React.createElement("span", { className: "h-1 w-8 bg-[#d4cab5]" })))))));
}
