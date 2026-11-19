import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search, X } from 'lucide-react';
import { Input } from '@evershop/evershop/components/common/ui/Input';
import { shell } from '../../lib/layout.js';
export function SearchToggle({ searchUrl }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        var _a;
        if (!open)
            return;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { type: "button", "aria-label": open ? 'Close search' : 'Search', "aria-expanded": open, onClick: () => setOpen((o) => !o), className: "flex h-10 w-10 items-center justify-center transition-colors hover:bg-muted" },
            React.createElement(AnimatePresence, { mode: "wait", initial: false },
                React.createElement(motion.span, { key: open ? 'x' : 's', initial: { opacity: 0, rotate: -45 }, animate: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: 45 }, transition: { duration: 0.12 } }, open ? React.createElement(X, { className: "h-5 w-5" }) : React.createElement(Search, { className: "h-5 w-5" })))),
        React.createElement(AnimatePresence, null, open && (React.createElement(motion.form, { action: searchUrl, method: "GET", role: "search", initial: { opacity: 0, y: -8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] }, className: "absolute inset-x-0 top-full z-40 border-t bg-background shadow-md" },
            React.createElement("div", { className: `${shell} flex items-center gap-3 py-3` },
                React.createElement(Search, { className: "h-5 w-5 shrink-0 text-muted-foreground", "aria-hidden": "true" }),
                React.createElement(Input, { ref: ref, name: "keyword", type: "search", placeholder: "Search for shoes, brands and more", className: "h-11 rounded-none border-0 px-0 shadow-none focus-visible:ring-0" })))))));
}
//# sourceMappingURL=SearchToggle.js.map