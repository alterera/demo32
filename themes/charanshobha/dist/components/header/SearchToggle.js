import React, { useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@evershop/evershop/components/common/ui/Input';
export function SearchToggle({ searchUrl }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        var _a;
        if (open)
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { type: "button", "aria-label": "Search", "aria-expanded": open, onClick: () => setOpen((o) => !o), className: "flex h-10 w-10 items-center justify-center hover:bg-muted" }, open ? React.createElement(X, { className: "h-5 w-5" }) : React.createElement(Search, { className: "h-5 w-5" })),
        open && (React.createElement("form", { action: searchUrl, method: "GET", role: "search", className: "absolute inset-x-0 top-full z-40 border-b bg-background shadow-md" },
            React.createElement("div", { className: "mx-auto flex max-w-3xl items-center gap-3 px-4 py-4" },
                React.createElement(Search, { className: "h-5 w-5 shrink-0 text-muted-foreground", "aria-hidden": "true" }),
                React.createElement(Input, { ref: ref, name: "keyword", type: "search", placeholder: "Search for shoes, brands and more", className: "h-11 rounded-none border-0 shadow-none focus-visible:ring-0" }))))));
}
//# sourceMappingURL=SearchToggle.js.map