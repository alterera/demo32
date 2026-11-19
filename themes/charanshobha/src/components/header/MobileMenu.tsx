import React from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@evershop/evershop/components/common/ui/Sheet';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@evershop/evershop/components/common/ui/Accordion';
import type { NavCategory } from './types.js';

export function MobileMenu({
  items,
  storeName
}: {
  items: NavCategory[];
  storeName: string;
}) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center hover:bg-muted lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[85vw] max-w-sm rounded-none p-0">
        <SheetHeader className="border-b p-4">
          <SheetTitle className="uppercase tracking-widest">{storeName}</SheetTitle>
        </SheetHeader>
        <Accordion className="px-4">
          {items.map((cat) => (
            <AccordionItem key={cat.url} value={cat.url}>
              <AccordionTrigger className="rounded-none text-sm font-semibold uppercase tracking-wider">
                {cat.name}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1 pb-2">
                  <li>
                    <a
                      href={cat.url}
                      className="block py-2 text-sm font-medium underline"
                    >
                      Shop all {cat.name}
                    </a>
                  </li>
                  {(cat.children ?? []).map((s) => (
                    <li key={s.url}>
                      <a href={s.url} className="block py-2 text-sm">
                        {s.name}
                      </a>
                      {(s.children ?? []).map((g) => (
                        <a
                          key={g.url}
                          href={g.url}
                          className="block py-1.5 pl-4 text-xs text-muted-foreground"
                        >
                          {g.name}
                        </a>
                      ))}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
