import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '../../components/ui/carousel.js';
import { bleedInset, sectionY } from '../../lib/layout.js';

interface Category {
  name: string;
  url: string;
  image?: { url: string; alt: string } | null;
}

export default function CategoryTiles({
  homeCategories
}: {
  homeCategories?: { items: Category[] };
}) {
  const items = homeCategories?.items ?? [];
  if (!items.length) return null;

  return (
    <section
      aria-label="Shop by category"
      // full-bleed: break out of the content column, then re-align to its edge
      className={`relative left-1/2 w-screen -translate-x-1/2 ${sectionY}`}
    >
      <Carousel
        opts={{ align: 'start', dragFree: true, containScroll: 'trimSnaps' }}
        aria-label="Categories"
      >
        <CarouselContent style={{ ...bleedInset, paddingBlock: '0.5rem' }}>
          {items.map((c) => (
            <CarouselItem key={c.url} className="basis-auto pr-5 md:pr-8">
              <a
                href={c.url}
                draggable={false}
                className="group flex w-20 flex-col items-center gap-2.5 text-center sm:w-24 md:w-28"
              >
                <span className="block aspect-square w-full overflow-hidden rounded-full bg-muted ring-1 ring-border transition-shadow group-hover:ring-2 group-hover:ring-foreground">
                  {c.image ? (
                    <img
                      src={c.image.url}
                      alt=""
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-xl font-semibold text-muted-foreground">
                      {c.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </span>
                <span className="line-clamp-2 text-xs font-medium sm:text-sm">{c.name}</span>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 20
};

export const query = `
  query Query {
    homeCategories: categories {
      items {
        name
        url
        image {
          url
          alt
        }
      }
    }
  }
`;
