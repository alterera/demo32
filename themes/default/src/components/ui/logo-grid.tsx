import * as React from 'react';
import { cn } from '@evershop/evershop/lib/util/cn';

export interface Logo {
  name: string;
  /** Image URL. Without it, the name is shown as a text wordmark. */
  image?: string;
}

/**
 * Responsive borderless grid of brand logos (2 / 3 / 6 columns).
 * Logos are muted and regain full colour on hover.
 */
export function LogoGrid({
  logos,
  className
}: {
  logos: Logo[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        'grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6',
        className
      )}
    >
      {logos.map((logo) => (
        <li
          key={logo.name}
          className="flex h-12 items-center justify-center px-4"
        >
          {logo.image ? (
            <img
              src={logo.image}
              alt={logo.name}
              loading="lazy"
              className="max-h-8 w-auto max-w-full object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 md:max-h-10"
            />
          ) : (
            <span className="text-center text-sm font-bold tracking-wide text-muted-foreground md:text-base">
              {logo.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
