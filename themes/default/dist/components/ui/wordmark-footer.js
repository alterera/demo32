import * as React from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@evershop/evershop/lib/util/cn';
import { shell } from '../../lib/layout.js';
// at least 44px tall wherever a finger taps it
const tap = 'max-md:inline-flex max-md:min-h-11 max-md:items-center pointer-coarse:inline-flex pointer-coarse:min-h-11 pointer-coarse:items-center';
const serif = "var(--font-display, ui-serif, Georgia, 'Times New Roman', serif)";
/**
 * Footer with a short description, link columns that fold into an accordion on
 * phones, and the store name set large and fading into the background.
 * Sharp corners to match the rest of the storefront.
 */
export function WordmarkFooter({ name, legalName, year, description, note, navLabel = 'Footer', columns, email, className, ...props }) {
    return (React.createElement("div", { className: cn('relative overflow-hidden border-t bg-background text-foreground', className), ...props },
        React.createElement("div", { className: cn(shell, 'grid gap-10 pt-12 pb-8 max-md:gap-6 max-md:pt-10 max-md:pb-4 md:grid-cols-12 md:pt-16') },
            React.createElement("div", { className: "md:col-span-5" },
                React.createElement("span", { className: "block text-[25px] leading-none tracking-[-0.02em]", style: { fontFamily: serif, fontWeight: 400 } }, name),
                description && (React.createElement("p", { className: "mt-4 max-w-[320px] text-sm leading-[22px] text-muted-foreground" }, description)),
                note && (React.createElement("p", { className: "mt-5 inline-flex items-center gap-2 text-[13px] text-muted-foreground" },
                    React.createElement("span", { className: "size-1.5 bg-foreground", "aria-hidden": "true" }),
                    note))),
            React.createElement("nav", { "aria-label": navLabel, className: "grid grid-cols-2 gap-8 max-md:hidden md:col-span-7 lg:grid-cols-3" }, columns.map((col) => (React.createElement("div", { key: col.title },
                React.createElement("p", { className: "text-sm font-semibold" }, col.title),
                React.createElement("ul", { className: "mt-4 grid gap-2.5 pointer-coarse:mt-2 pointer-coarse:gap-0" }, col.links.map((l) => (React.createElement("li", { key: l.label },
                    React.createElement("a", { href: l.href, className: cn('text-sm text-muted-foreground transition-colors hover:text-foreground', tap) }, l.label))))))))),
            React.createElement("nav", { "aria-label": navLabel, className: "grid md:hidden" }, columns.map((col) => (React.createElement("details", { key: col.title, className: "group border-b first:border-t" },
                React.createElement("summary", { className: "flex h-14 cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden" },
                    React.createElement("span", { className: "text-sm font-semibold" }, col.title),
                    React.createElement(Plus, { className: "size-4 text-muted-foreground transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none", strokeWidth: 1.75, "aria-hidden": "true" })),
                React.createElement("ul", { className: "pb-3" }, col.links.map((l) => (React.createElement("li", { key: l.label },
                    React.createElement("a", { href: l.href, className: "block py-2.5 text-[15px] text-muted-foreground" }, l.label)))))))))),
        React.createElement("div", { className: cn(shell, 'flex flex-col gap-2 pb-6 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:gap-6') },
            React.createElement("p", { className: "tabular-nums" },
                "\u00A9 ",
                year,
                " ", legalName !== null && legalName !== void 0 ? legalName : name),
            email && (React.createElement("a", { href: `mailto:${email}`, className: cn('hover:text-foreground', tap) }, email))),
        React.createElement("p", { "aria-hidden": "true", className: "pointer-events-none -mb-[0.18em] select-none whitespace-nowrap text-center leading-[0.9] tracking-[-0.04em] text-transparent [background-clip:text] [-webkit-background-clip:text] [background-image:linear-gradient(to_bottom,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_85%)]", style: {
                fontFamily: serif,
                fontWeight: 400,
                fontSize: 'clamp(3.5rem, 14vw, 13rem)'
            } }, name)));
}
export default WordmarkFooter;
//# sourceMappingURL=wordmark-footer.js.map