import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { User } from 'lucide-react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { Separator } from '@evershop/evershop/components/common/ui/Separator';
import { useCustomer, useCustomerDispatch } from '@evershop/evershop/components/frontStore/customer/CustomerContext';
import { useHoverOpen } from './useHoverOpen.js';
const helpLinks = [
    { label: 'Track your Order', href: '/page/track-order' },
    { label: 'Store Locator', href: '/page/store-locator' },
    { label: 'Returns & Exchange', href: '/page/returns-exchange' },
    { label: 'Care', href: '/page/care' },
    { label: 'FAQ', href: '/page/faq' }
];
export function UserMenu({ accountUrl, loginUrl }) {
    const { customer } = useCustomer();
    const { logout } = useCustomerDispatch();
    const { open, bind } = useHoverOpen();
    return (React.createElement("div", { className: "relative flex items-center", ...bind },
        React.createElement("a", { href: customer ? accountUrl : loginUrl, "aria-label": customer ? 'My account' : 'Login or sign up', "aria-haspopup": "true", "aria-expanded": open, className: "flex h-10 w-10 items-center justify-center transition-colors hover:bg-muted" },
            React.createElement(User, { className: "h-5 w-5" })),
        React.createElement(AnimatePresence, null, open && (React.createElement(motion.div, { initial: { opacity: 0, y: 8, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 4, scale: 0.98 }, transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] }, style: { transformOrigin: 'top right' }, className: "absolute right-0 top-full z-50 w-72 border bg-background p-5 shadow-lg" },
            customer ? (React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" },
                    "Hello, ",
                    customer.fullName),
                React.createElement("p", { className: "mb-4 text-xs text-muted-foreground" }, "Manage your account and orders"),
                React.createElement("div", { className: "flex gap-2" },
                    React.createElement(Button, { className: "flex-1 rounded-none", render: React.createElement("a", { href: accountUrl }) }, "My account"),
                    React.createElement(Button, { variant: "outline", className: "rounded-none", onClick: () => logout() }, "Logout")))) : (React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "Welcome"),
                React.createElement("p", { className: "mb-4 text-xs text-muted-foreground" }, "To access account and manage orders"),
                React.createElement(Button, { variant: "outline", className: "w-full rounded-none border-foreground", render: React.createElement("a", { href: loginUrl }) }, "Login / Signup"))),
            React.createElement(Separator, { className: "my-4" }),
            React.createElement("ul", null, helpLinks.map((l) => (React.createElement("li", { key: l.label },
                React.createElement("a", { href: l.href, className: "block py-1.5 text-sm hover:underline" }, l.label))))))))));
}
//# sourceMappingURL=UserMenu.js.map