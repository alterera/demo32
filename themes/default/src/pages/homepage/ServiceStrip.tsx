import React from 'react';
import { Headset, RotateCcw, ShieldCheck, Truck, type LucideIcon } from 'lucide-react';
import { SERVICE_ITEMS } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';

const ICONS: Record<string, LucideIcon> = {
  support: Headset,
  shipping: Truck,
  returns: RotateCcw,
  secure: ShieldCheck
};

export default function ServiceStrip() {
  return (
    <section aria-label="Our services" className={sectionY}>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 border-y py-8 md:grid-cols-4 md:gap-x-8 md:py-12">
        {SERVICE_ITEMS.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <li key={item.title} className="flex flex-col items-center gap-3 text-center">
              <Icon className="size-7" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-sm font-semibold sm:text-base">{item.title}</h3>
              <p className="max-w-[16rem] text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.text}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 120
};
