import React from 'react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { ProductCard, type Product } from '../../components/product/ProductCard.js';
import { ScrollRevealText } from '../../components/ui/scroll-reveal-text.js';
import { BEST_SELLERS } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';

interface Props {
  bestSellers?: { products?: { items: Product[] } } | null;
  bsSetting?: { storeName?: string };
}

export default function BestSellers({ bestSellers, bsSetting }: Props) {
  const products = bestSellers?.products?.items ?? [];
  const text = BEST_SELLERS.paragraph.replace('{name}', bsSetting?.storeName || 'our');

  return (
    <section aria-labelledby="best-sellers-copy" className={sectionY}>
      <div className="mx-auto max-w-4xl py-6 text-center md:py-10">
        <ScrollRevealText
          text={text}
          className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl"
        />
        <span id="best-sellers-copy" className="sr-only">Best sellers</span>
        <div className="mt-8">
          <Button
            size="lg"
            className="rounded-none px-8"
            render={<a href={BEST_SELLERS.buttonHref} />}
          >
            {BEST_SELLERS.buttonLabel}
          </Button>
        </div>
      </div>

      {products.length > 0 && (
        <ul className="mt-6 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
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
    bsSetting: setting {
      storeName
    }
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
