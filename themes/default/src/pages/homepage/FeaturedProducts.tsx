import React from 'react';
import { Badge } from '@evershop/evershop/components/common/ui/Badge';
import { sectionY } from '../../lib/layout.js';

interface Product {
  name: string;
  url: string;
  image?: { url: string; alt: string } | null;
  price: {
    regular: { text: string; value: number };
    special: { text: string; value: number };
  };
}

export default function FeaturedProducts({
  homeProducts
}: {
  homeProducts?: { items: Product[] };
}) {
  const items = homeProducts?.items ?? [];
  if (!items.length) return null;

  return (
    <section aria-labelledby="featured-shoes" className={sectionY}>
      <div className="mb-5 flex items-end justify-between gap-4 md:mb-6">
        <h2 id="featured-shoes" className="text-xl font-bold md:text-2xl">
          Featured shoes
        </h2>
        <a
          href="/search?keyword="
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          View all
        </a>
      </div>

      <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4">
        {items.map((p) => {
          const sale =
            p.price.special.value > 0 && p.price.special.value < p.price.regular.value;
          const off = sale
            ? Math.round((1 - p.price.special.value / p.price.regular.value) * 100)
            : 0;
          return (
            <li key={p.url}>
              <a href={p.url} className="group block bg-[#f7f7f5]">
                {/* image well: product shots are transparent, so the light tint shows through */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  {p.image && (
                    <img
                      src={p.image.url}
                      alt={p.image.alt || p.name}
                      loading="lazy"
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
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 30
};

export const query = `
  query Query {
    homeProducts: products(filters: [{ key: "limit", operation: eq, value: "8" }]) {
      items {
        name
        url
        image {
          url
          alt
        }
        price {
          regular {
            value
            text
          }
          special {
            value
            text
          }
        }
      }
    }
  }
`;
