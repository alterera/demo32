import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
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
        className="relative flex items-center gap-1 px-1 text-sm font-semibold uppercase tracking-wider"
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
            className="absolute inset-x-0 bottom-3 h-0.5 bg-foreground"
            transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          />
        )}
      </a>

      <AnimatePresence>
        {open && subs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 min-w-56 -translate-x-1/2 border bg-background shadow-lg"
          >
            <ul className="py-2">
              {subs.map((s) => (
                <li key={s.url}>
                  <a href={s.url} className="block px-5 py-2 text-sm hover:bg-muted">
                    {s.name}
                  </a>
                  {(s.children ?? []).map((g) => (
                    <a
                      key={g.url}
                      href={g.url}
                      className="block py-1.5 pl-9 pr-5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {g.name}
                    </a>
                  ))}
                </li>
              ))}
            </ul>
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
      <ul className="flex h-full items-stretch gap-8">
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
