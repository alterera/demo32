import React from 'react';
import { ProductCarousel } from '../../components/product/ProductCarousel.js';
import type { Product } from '../../components/product/ProductCard.js';
import { Bleed } from '../../components/ui/bleed.js';
import { sectionY } from '../../lib/layout.js';

export default function NewArrivals({
  newArrivals
}: {
  newArrivals?: { products?: { items: Product[] } } | null;
}) {
  const items = newArrivals?.products?.items ?? [];
  if (!items.length) return null;
  return (
    <Bleed aria-label="New arrivals" className={sectionY}>
      <ProductCarousel products={items} label="New arrivals" />
    </Bleed>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 50
};

export const query = `
  query Query {
    newArrivals: collection(code: "new-arrivals") {
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
