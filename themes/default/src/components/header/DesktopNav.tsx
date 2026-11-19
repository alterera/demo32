import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { NavCategory } from './types.js';

export function DesktopNav({ items }: { items: NavCategory[] }) {
  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex h-full items-stretch gap-8">
        {items.map((cat) => {
          const subs = cat.children ?? [];
          return (
            <li key={cat.url} className="group relative flex items-stretch">
              <a
                href={cat.url}
                className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider hover:text-primary"
              >
                {cat.name}
                {subs.length > 0 && (
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                    aria-hidden="true"
                  />
                )}
              </a>
              {subs.length > 0 && (
                <div className="invisible absolute left-1/2 top-full z-50 min-w-56 -translate-x-1/2 border bg-background opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="py-2">
                    {subs.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          className="block px-5 py-2 text-sm hover:bg-muted"
                        >
                          {s.name}
                        </a>
                        {(s.children ?? []).length > 0 && (
                          <ul className="pb-1">
                            {s.children!.map((g) => (
                              <li key={g.url}>
                                <a
                                  href={g.url}
                                  className="block py-1.5 pl-9 pr-5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
                                >
                                  {g.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
