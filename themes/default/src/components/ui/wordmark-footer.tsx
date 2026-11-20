import * as React from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@evershop/evershop/lib/util/cn';
import { shell } from '../../lib/layout.js';

// at least 44px tall wherever a finger taps it
const tap =
  'max-md:inline-flex max-md:min-h-11 max-md:items-center pointer-coarse:inline-flex pointer-coarse:min-h-11 pointer-coarse:items-center';
const serif = "var(--font-display, ui-serif, Georgia, 'Times New Roman', serif)";
const NEON = '#39ff14';

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export interface WordmarkFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Store name: shown top left and set large at the bottom. */
  name: string;
  year: number;
  description?: string;
  /** Short line under the description, e.g. payment or delivery info. */
  note?: string;
  navLabel?: string;
  columns: FooterColumn[];
  /** Registered company details for the bottom bar. */
  legal: { name: string; gstin: string; address: string };
  credit?: { label: string; href: string };
}

/**
 * Dark footer in the brand's black and neon green: description, link columns
 * (an accordion on phones), registered-company details, and the store name set
 * large at the bottom. Sharp corners, like the rest of the storefront.
 */
export function WordmarkFooter({
  name,
  year,
  description,
  note,
  navLabel = 'Footer',
  columns,
  legal,
  credit,
  className,
  ...props
}: WordmarkFooterProps) {
  return (
    <div
      className={cn('relative overflow-hidden bg-[#0e2a20] text-white', className)}
      {...props}
    >
      {/* neon rule ties the footer to the top bar */}
      <div aria-hidden="true" className="h-1" style={{ background: NEON }} />

      <div className={cn(shell, 'grid gap-10 pt-12 pb-8 max-md:gap-6 max-md:pt-10 max-md:pb-4 md:grid-cols-12 md:pt-16')}>
        <div className="md:col-span-5">
          <span
            className="block text-[25px] leading-none tracking-[-0.02em]"
            style={{ fontFamily: serif, fontWeight: 400 }}
          >
            {name}
          </span>
          {description && (
            <p className="mt-4 max-w-[320px] text-sm leading-[22px] text-white/60">
              {description}
            </p>
          )}
          {note && (
            <p className="mt-5 inline-flex items-center gap-2 text-[13px] text-white/80">
              <span className="size-1.5" style={{ background: NEON }} aria-hidden="true" />
              {note}
            </p>
          )}
        </div>

        {/* tablet and up: plain columns */}
        <nav
          aria-label={navLabel}
          className="grid grid-cols-2 gap-8 max-md:hidden md:col-span-7 lg:grid-cols-3"
        >
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold">{col.title}</p>
              <ul className="mt-4 grid gap-2.5 pointer-coarse:mt-2 pointer-coarse:gap-0">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={cn('text-sm text-white/60 transition-colors hover:text-[#39ff14]', tap)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* phones: each column folds away; tap a heading to open it */}
        <nav aria-label={navLabel} className="grid md:hidden">
          {columns.map((col) => (
            <details key={col.title} className="group border-b border-white/10 first:border-t">
              <summary className="flex h-14 cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-semibold">{col.title}</span>
                <Plus
                  className="size-4 text-white/60 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </summary>
              <ul className="pb-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="block py-2.5 text-[15px] text-white/60 hover:text-[#39ff14]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </nav>
      </div>

      {/* registered company + credit */}
      <div className="border-t border-white/10">
        <div
          className={cn(
            shell,
            'flex flex-col gap-4 py-6 text-[13px] text-white/60 md:flex-row md:items-start md:justify-between'
          )}
        >
          <div className="space-y-1">
            <p className="font-medium text-white/90">
              © {year} {legal.name}. All rights reserved.
            </p>
            <p>GSTIN: <span className="tabular-nums">{legal.gstin}</span></p>
            <p className="max-w-md leading-relaxed">Registered office: {legal.address}</p>
          </div>
          {credit && (
            <p className="md:text-right">
              Powered by{' '}
              <a
                href={credit.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn('font-semibold underline-offset-4 hover:underline', tap)}
                style={{ color: NEON }}
              >
                {credit.label}
              </a>
            </p>
          )}
        </div>
      </div>

      {/* the name, set large and fading into the background */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.18em] select-none whitespace-nowrap text-center leading-[0.9] tracking-[-0.04em] text-transparent [background-clip:text] [-webkit-background-clip:text]"
        style={{
          fontFamily: serif,
          fontWeight: 400,
          fontSize: 'clamp(3.5rem, 14vw, 13rem)',
          backgroundImage: `linear-gradient(to bottom, color-mix(in oklab, ${NEON} 38%, transparent), transparent 85%)`
        }}
      >
        {name}
      </p>
    </div>
  );
}

export default WordmarkFooter;
