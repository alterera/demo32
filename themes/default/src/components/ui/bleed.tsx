import * as React from 'react';
import { cn } from '@evershop/evershop/lib/util/cn';

/**
 * Full-width bleed: breaks out of EverShop's page-width column so the content
 * spans the whole viewport. Pair with `shell` / `bleedInset` for inner alignment.
 */
export function Bleed({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement> & { as?: 'section' | 'div' }) {
  return (
    <section
      className={cn('relative left-1/2 w-screen -translate-x-1/2', className)}
      {...props}
    />
  );
}
