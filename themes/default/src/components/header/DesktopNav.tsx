import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useHoverOpen } from './useHoverOpen.js';
import type { NavCategory } from './types.js';

function NavItem({
  cat,
  active,
  onActive
}: {
  cat: NavCategory;
  active: boolean;
  onActive: (on: boolean) => void;
}) {
  const subs = cat.children ?? [];
  const { open, bind } = useHoverOpen();

  return (
    <li
      className="relative flex items-stretch"
      {...bind}
      onMouseEnter={() => {
        bind.onMouseEnter();
        onActive(true);
      }}
      onMouseLeave={() => {
        bind.onMouseLeave();
        onActive(false);
      }}
    >
      <a
        href={cat.url}
        className="relative flex items-center gap-1.5 px-1 text-[13px] font-semibold uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
        aria-haspopup={subs.length > 0 ? 'true' : undefined}
        aria-expanded={subs.length > 0 ? open : undefined}
      >
        {cat.name}
        {subs.length > 0 && (
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
          </motion.span>
        )}
        {active && (
          <motion.span
            layoutId="nav-underline"
            className="absolute inset-x-1 bottom-3 h-[2px] bg-[#39ff14] shadow-[0_0_8px_#39ff14]"
            transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          />
        )}
      </a>

      <AnimatePresence>
        {open && subs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 border-t-2 border-[#39ff14] bg-background/95 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md"
          >
            <div className="flex min-w-[18rem] gap-10 px-8 py-7">
              {subs.map((s, i) => (
                <motion.div
                  key={s.url}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                  className="min-w-36"
                >
                  <a
                    href={s.url}
                    className="group/h flex items-center justify-between gap-3 border-b pb-2 text-[13px] font-bold uppercase tracking-[0.14em]"
                  >
                    {s.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover/h:translate-x-0.5 group-hover/h:opacity-100" aria-hidden="true" />
                  </a>
                  <ul className="mt-3 space-y-0.5">
                    {(s.children ?? []).map((g) => (
                      <li key={g.url}>
                        <a
                          href={g.url}
                          className="block py-1 text-sm text-muted-foreground transition-all hover:translate-x-1 hover:text-foreground"
                        >
                          {g.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <a
              href={cat.url}
              className="flex items-center justify-between bg-foreground px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-black/80"
            >
              Shop all {cat.name}
              <ArrowRight className="h-4 w-4 text-[#39ff14]" aria-hidden="true" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function DesktopNav({ items }: { items: NavCategory[] }) {
  const [activeUrl, setActiveUrl] = React.useState<string | null>(null);
  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex h-full items-stretch gap-10">
        {items.map((cat) => (
          <NavItem
            key={cat.url}
            cat={cat}
            active={activeUrl === cat.url}
            onActive={(on) => setActiveUrl((cur) => (on ? cat.url : cur === cat.url ? null : cur))}
          />
        ))}
      </ul>
    </nav>
  );
}
