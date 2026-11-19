import React from 'react';
import { Card, CardContent } from '@evershop/evershop/components/common/ui/Card';
import { Badge } from '@evershop/evershop/components/common/ui/Badge';

interface Product {
  name: string;
  url: string;
  image?: { url: string; alt: string } | null;
  price: { regular: { text: string; value: number }; special: { text: string; value: number } };
}

export default function FeaturedProducts({
  homeProducts
}: {
  homeProducts?: { items: Product[] };
}) {
  const items = homeProducts?.items ?? [];
  if (!items.length) return null;
  return (
    <section className="mb-14">
      <h2 className="mb-6 text-2xl font-bold">Featured shoes</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((p) => {
          const onSale =
            p.price.special.value > 0 && p.price.special.value < p.price.regular.value;
          return (
            <a key={p.url} href={p.url} className="group">
              <Card className="overflow-hidden">
                <div className="relative aspect-square bg-muted">
                  {p.image && (
                    <img
                      src={p.image.url}
                      alt={p.image.alt || p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  {onSale && <Badge className="absolute left-3 top-3">Sale</Badge>}
                </div>
                <CardContent className="space-y-1 pt-4">
                  <h3 className="line-clamp-1 font-medium">{p.name}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">
                      {onSale ? p.price.special.text : p.price.regular.text}
                    </span>
                    {onSale && (
                      <span className="text-muted-foreground line-through">
                        {p.price.regular.text}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>
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
