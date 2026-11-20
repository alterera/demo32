import * as React from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@evershop/evershop/lib/util/cn';
import { shell } from '../../lib/layout.js';
// at least 44px tall wherever a finger taps it
const tap = 'max-md:inline-flex max-md:min-h-11 max-md:items-center pointer-coarse:inline-flex pointer-coarse:min-h-11 pointer-coarse:items-center';
const serif = "var(--font-display, ui-serif, Georgia, 'Times New Roman', serif)";
const NEON = '#39ff14';
/**
 * Dark footer in the brand's black and neon green: description, link columns
 * (an accordion on phones), registered-company details, and the store name set
 * large at the bottom. Sharp corners, like the rest of the storefront.
 */
export function WordmarkFooter({ name, year, description, note, navLabel = 'Footer', columns, legal, credit, className, ...props }) {
    return (React.createElement("div", { className: cn('relative overflow-hidden bg-[#0e2a20] text-white', className), ...props },
        React.createElement("div", { "aria-hidden": "true", className: "h-1", style: { background: NEON } }),
        React.createElement("div", { className: cn(shell, 'grid gap-10 pt-12 pb-8 max-md:gap-6 max-md:pt-10 max-md:pb-4 md:grid-cols-12 md:pt-16') },
            React.createElement("div", { className: "md:col-span-5" },
                React.createElement("span", { className: "block text-[25px] leading-none tracking-[-0.02em]", style: { fontFamily: serif, fontWeight: 400 } }, name),
                description && (React.createElement("p", { className: "mt-4 max-w-[320px] text-sm leading-[22px] text-white/60" }, description)),
                note && (React.createElement("p", { className: "mt-5 inline-flex items-center gap-2 text-[13px] text-white/80" },
                    React.createElement("span", { className: "size-1.5", style: { background: NEON }, "aria-hidden": "true" }),
                    note))),
            React.createElement("nav", { "aria-label": navLabel, className: "grid grid-cols-2 gap-8 max-md:hidden md:col-span-7 lg:grid-cols-3" }, columns.map((col) => (React.createElement("div", { key: col.title },
                React.createElement("p", { className: "text-sm font-semibold" }, col.title),
                React.createElement("ul", { className: "mt-4 grid gap-2.5 pointer-coarse:mt-2 pointer-coarse:gap-0" }, col.links.map((l) => (React.createElement("li", { key: l.label },
                    React.createElement("a", { href: l.href, className: cn('text-sm text-white/60 transition-colors hover:text-[#39ff14]', tap) }, l.label))))))))),
            React.createElement("nav", { "aria-label": navLabel, className: "grid md:hidden" }, columns.map((col) => (React.createElement("details", { key: col.title, className: "group border-b border-white/10 first:border-t" },
                React.createElement("summary", { className: "flex h-14 cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden" },
                    React.createElement("span", { className: "text-sm font-semibold" }, col.title),
                    React.createElement(Plus, { className: "size-4 text-white/60 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none", strokeWidth: 1.75, "aria-hidden": "true" })),
                React.createElement("ul", { className: "pb-3" }, col.links.map((l) => (React.createElement("li", { key: l.label },
                    React.createElement("a", { href: l.href, className: "block py-2.5 text-[15px] text-white/60 hover:text-[#39ff14]" }, l.label)))))))))),
        React.createElement("div", { className: "border-t border-white/10" },
            React.createElement("div", { className: cn(shell, 'flex flex-col gap-4 py-6 text-[13px] text-white/60 md:flex-row md:items-start md:justify-between') },
                React.createElement("div", { className: "space-y-1" },
                    React.createElement("p", { className: "font-medium text-white/90" },
                        "\u00A9 ",
                        year,
                        " ",
                        legal.name,
                        ". All rights reserved."),
                    React.createElement("p", null,
                        "GSTIN: ",
                        React.createElement("span", { className: "tabular-nums" }, legal.gstin)),
                    React.createElement("p", { className: "max-w-md leading-relaxed" },
                        "Registered office: ",
                        legal.address)),
                credit && (React.createElement("p", { className: "md:text-right" },
                    "Powered by",
                    ' ',
                    React.createElement("a", { href: credit.href, target: "_blank", rel: "noopener noreferrer", className: cn('font-semibold underline-offset-4 hover:underline', tap), style: { color: NEON } }, credit.label))))),
        React.createElement("p", { "aria-hidden": "true", className: "pointer-events-none -mb-[0.18em] select-none whitespace-nowrap text-center leading-[0.9] tracking-[-0.04em] text-transparent [background-clip:text] [-webkit-background-clip:text]", style: {
                fontFamily: serif,
                fontWeight: 400,
                fontSize: 'clamp(3.5rem, 14vw, 13rem)',
                backgroundImage: `linear-gradient(to bottom, color-mix(in oklab, ${NEON} 38%, transparent), transparent 85%)`
            } }, name)));
}
export default WordmarkFooter;
//# sourceMappingURL=wordmark-footer.js.map