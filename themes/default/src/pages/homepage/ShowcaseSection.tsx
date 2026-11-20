import React from 'react';
import {
  ProductHoverShowcase,
  type ShowcaseItem
} from '../../components/ui/product-hover-showcase.js';
import { sectionY } from '../../lib/layout.js';

interface ApiProduct {
  name: string;
  url: string;
  image?: { url: string } | null;
  price: {
    regular: { value: number; text: string };
    special: { value: number; text: string };
  };
}

export default function ShowcaseSection({
  showcase
}: {
  showcase?: { products?: { items: ApiProduct[] } } | null;
}) {
  const items: ShowcaseItem[] = (showcase?.products?.items ?? [])
    .filter((p) => p.image?.url)
    .map((p) => {
      const sale =
        p.price.special.value > 0 && p.price.special.value < p.price.regular.value;
      return {
        id: p.url,
        name: p.name,
        url: p.url,
        image: p.image!.url,
        price: sale ? p.price.special.text : p.price.regular.text,
        comparePrice: sale ? p.price.regular.text : undefined
      };
    });
  if (!items.length) return null;

  return (
    <section aria-label="Product showcase" className={sectionY}>
      <ProductHoverShowcase products={items} />
    </section>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 80
};

export const query = `
  query Query {
    showcase: collection(code: "showcase") {
      products(filters: [{ key: "limit", operation: eq, value: "6" }]) {
        items {
          name
          url
          image {
            url
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
