import React from 'react';
import { User } from 'lucide-react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { Separator } from '@evershop/evershop/components/common/ui/Separator';
import {
  useCustomer,
  useCustomerDispatch
} from '@evershop/evershop/components/frontStore/customer/CustomerContext';

interface Props {
  accountUrl: string;
  loginUrl: string;
}

export function UserMenu({ accountUrl, loginUrl }: Props) {
  const { customer } = useCustomer();
  const { logout } = useCustomerDispatch();
  const links = [
    { label: 'Track your Order', href: '/page/track-order' },
    { label: 'Store Locator', href: '/page/store-locator' },
    { label: 'Returns & Exchange', href: '/page/returns-exchange' },
    { label: 'Care', href: '/page/care' },
    { label: 'FAQ', href: '/page/faq' }
  ];
  return (
    <div className="group relative flex items-center">
      <a
        href={customer ? accountUrl : loginUrl}
        aria-label={customer ? 'My account' : 'Login or sign up'}
        className="flex h-10 w-10 items-center justify-center hover:bg-muted"
      >
        <User className="h-5 w-5" />
      </a>
      <div className="invisible absolute right-0 top-full z-50 w-72 border bg-background p-5 opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {customer ? (
          <>
            <p className="font-semibold">Hello, {customer.fullName}</p>
            <p className="mb-4 text-xs text-muted-foreground">
              Manage your account and orders
            </p>
            <div className="flex gap-2">
              <Button
                className="flex-1 rounded-none uppercase tracking-wide"
                render={<a href={accountUrl} />}
              >
                My account
              </Button>
              <Button
                variant="outline"
                className="rounded-none uppercase tracking-wide"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </div>
          </>
        ) : (
          <>
            <p className="font-semibold">Welcome</p>
            <p className="mb-4 text-xs text-muted-foreground">
              To access account and manage orders
            </p>
            <Button
              variant="outline"
              className="w-full rounded-none border-foreground uppercase tracking-wide"
              render={<a href={loginUrl} />}
            >
              Login / Signup
            </Button>
          </>
        )}
        <Separator className="my-4" />
        <ul className="space-y-1">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="block py-1.5 text-sm hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
