import React from 'react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { ProductCard, type Product } from '../../components/product/ProductCard.js';
import { ScrollRevealText } from '../../components/ui/scroll-reveal-text.js';
import { BEST_SELLERS } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';

interface Props {
  bestSellers?: { products?: { items: Product[] } } | null;
}

export default function BestSellers({ bestSellers }: Props) {
  const products = bestSellers?.products?.items ?? [];

  return (
    <section aria-labelledby="best-sellers-copy" className={sectionY}>
      <div className="pb-6 md:pb-8">
        <ScrollRevealText
          lines={BEST_SELLERS.lines}
          className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl"
        />
        <span id="best-sellers-copy" className="sr-only">Best sellers</span>
        <div className="mt-5">
          <Button
            variant="outline"
            className="w-full rounded-none border-2 border-foreground bg-transparent px-8 hover:bg-foreground hover:text-background sm:w-auto"
            nativeButton={false}
            render={<a href={BEST_SELLERS.buttonHref} />}
          >
            {BEST_SELLERS.buttonLabel}
          </Button>
        </div>
      </div>

      {products.length > 0 && (
        <ul className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
          {products.slice(0, 4).map((p) => (
            <li key={p.url}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 30
};

export const query = `
  query Query {
    bestSellers: collection(code: "best-sellers") {
      products(filters: [{ key: "limit", operation: eq, value: "4" }]) {
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
