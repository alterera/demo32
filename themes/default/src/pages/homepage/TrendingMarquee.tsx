import React from 'react';
import { ProductCard, type Product } from '../../components/product/ProductCard.js';
import { Bleed } from '../../components/ui/bleed.js';
import { Marquee } from '../../components/ui/marquee.js';
import { sectionY } from '../../lib/layout.js';

export default function TrendingMarquee({
  trending
}: {
  trending?: { products?: { items: Product[] } } | null;
}) {
  const items = trending?.products?.items ?? [];
  if (!items.length) return null;
  return (
    <Bleed aria-label="Trending now" className={sectionY}>
      <Marquee duration={Math.max(40, items.length * 8)} gap="gap-2 sm:gap-3">
        {items.map((p) => (
          <div key={p.url} className="w-44 shrink-0 sm:w-56 lg:w-64">
            <ProductCard product={p} />
          </div>
        ))}
      </Marquee>
    </Bleed>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 70
};

export const query = `
  query Query {
    trending: collection(code: "trending") {
      products(filters: [{ key: "limit", operation: eq, value: "12" }]) {
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
  }
`;
