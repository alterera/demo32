import React from 'react';
import { User } from 'lucide-react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { Separator } from '@evershop/evershop/components/common/ui/Separator';
import { useCustomer, useCustomerDispatch } from '@evershop/evershop/components/frontStore/customer/CustomerContext';
export function UserMenu({ accountUrl, loginUrl }) {
    const { customer } = useCustomer();
    const { logout } = useCustomerDispatch();
    const links = [
        { label: 'Track your Order', href: '/page/track-order' },
        { label: 'Store Locator', href: '/page/store-locator' },
        { label: 'Returns & Exchange', href: '/page/returns-exchange' },
        { label: 'Care', href: '/page/care' },
        { label: 'FAQ', href: '/page/faq' }
    ];
    return (React.createElement("div", { className: "group relative flex items-center" },
        React.createElement("a", { href: customer ? accountUrl : loginUrl, "aria-label": customer ? 'My account' : 'Login or sign up', className: "flex h-10 w-10 items-center justify-center hover:bg-muted" },
            React.createElement(User, { className: "h-5 w-5" })),
        React.createElement("div", { className: "invisible absolute right-0 top-full z-50 w-72 border bg-background p-5 opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100" },
            customer ? (React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" },
                    "Hello, ",
                    customer.fullName),
                React.createElement("p", { className: "mb-4 text-xs text-muted-foreground" }, "Manage your account and orders"),
                React.createElement("div", { className: "flex gap-2" },
                    React.createElement(Button, { className: "flex-1 rounded-none uppercase tracking-wide", render: React.createElement("a", { href: accountUrl }) }, "My account"),
                    React.createElement(Button, { variant: "outline", className: "rounded-none uppercase tracking-wide", onClick: () => logout() }, "Logout")))) : (React.createElement(React.Fragment, null,
                React.createElement("p", { className: "font-semibold" }, "Welcome"),
                React.createElement("p", { className: "mb-4 text-xs text-muted-foreground" }, "To access account and manage orders"),
                React.createElement(Button, { variant: "outline", className: "w-full rounded-none border-foreground uppercase tracking-wide", render: React.createElement("a", { href: loginUrl }) }, "Login / Signup"))),
            React.createElement(Separator, { className: "my-4" }),
            React.createElement("ul", { className: "space-y-1" }, links.map((l) => (React.createElement("li", { key: l.label },
                React.createElement("a", { href: l.href, className: "block py-1.5 text-sm hover:underline" }, l.label))))))));
}
//# sourceMappingURL=UserMenu.js.map