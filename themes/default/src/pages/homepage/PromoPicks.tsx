import React from 'react';
import { ProductCarousel } from '../../components/product/ProductCarousel.js';
import type { Product } from '../../components/product/ProductCard.js';
import { Bleed } from '../../components/ui/bleed.js';
import { sectionY } from '../../lib/layout.js';

export default function PromoPicks({
  promoPicks
}: {
  promoPicks?: { products?: { items: Product[] } } | null;
}) {
  const items = promoPicks?.products?.items ?? [];
  if (!items.length) return null;
  return (
    <Bleed aria-label="Picks for you" className={sectionY}>
      <ProductCarousel products={items} label="Picks for you" />
    </Bleed>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 90
};

export const query = `
  query Query {
    promoPicks: collection(code: "promo-picks") {
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
