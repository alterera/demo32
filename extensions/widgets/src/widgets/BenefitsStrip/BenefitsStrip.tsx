import React from 'react';
import { ICONS, type BenefitItem } from './icons.js';

interface Props {
  benefitsStripWidget?: { items?: BenefitItem[] };
}

export default function BenefitsStrip({ benefitsStripWidget }: Props) {
  const items = (benefitsStripWidget?.items ?? []).filter((i) => i?.title);
  if (!items.length) return null;

  return (
    <section aria-label="Why shop with us" className="py-8 md:py-12">
      <ul className="grid grid-cols-2 border md:grid-cols-4 md:divide-x">
        {items.map((item, i) => {
          const Icon = ICONS[item.icon] ?? ICONS.verified;
          return (
            <li
              key={item.id ?? i}
              className="flex items-center gap-3 p-4 max-md:[&:nth-child(n+3)]:border-t max-md:odd:border-r md:p-5"
            >
              <Icon className="size-6 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-sm font-semibold">{item.title}</p>
                {item.text && (
                  <p className="text-xs text-muted-foreground">{item.text}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export const query = `
  query Query($items: JSON) {
    benefitsStripWidget(items: $items) {
      items
    }
  }
`;

export const variables = `{
  items: getWidgetSetting("items")
}`;
