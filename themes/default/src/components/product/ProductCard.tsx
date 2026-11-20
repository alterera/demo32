import * as React from 'react';
import { Badge } from '@evershop/evershop/components/common/ui/Badge';

export interface Product {
  name: string;
  url: string;
  image?: { url: string; alt?: string } | null;
  price: {
    regular: { text: string; value: number };
    special: { text: string; value: number };
  };
}

/** Product tile: light image well (product shots are transparent), details below. */
export function ProductCard({ product: p }: { product: Product }) {
  const sale =
    p.price.special.value > 0 && p.price.special.value < p.price.regular.value;
  const off = sale
    ? Math.round((1 - p.price.special.value / p.price.regular.value) * 100)
    : 0;

  return (
    <a href={p.url} draggable={false} className="group block bg-[#f7f7f5]">
      <div className="relative aspect-[4/5] overflow-hidden">
        {p.image && (
          <img
            src={p.image.url}
            alt={p.image.alt || p.name}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 h-full w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-105 sm:p-7"
          />
        )}
        {sale && (
          <Badge className="absolute left-0 top-3 rounded-none px-2.5">
            {off}% off
          </Badge>
        )}
      </div>
      <div className="space-y-1 px-3 pb-4 pt-3 sm:px-4">
        <h3 className="line-clamp-1 text-sm font-medium sm:text-base">{p.name}</h3>
        <p className="flex items-baseline gap-2 text-sm">
          <span className="font-semibold">
            {sale ? p.price.special.text : p.price.regular.text}
          </span>
          {sale && (
            <span className="text-xs text-muted-foreground line-through">
              {p.price.regular.text}
            </span>
          )}
        </p>
      </div>
    </a>
  );
}
