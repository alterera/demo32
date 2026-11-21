import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel
} from '../ui/carousel.js';
import { bleedInset } from '../../lib/layout.js';
import { ProductCard, type Product } from './ProductCard.js';

function Arrows() {
  const { scrollPrev, scrollNext } = useCarousel();
  const base =
    'pointer-events-auto absolute top-1/2 z-30 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-black shadow-[0_4px_16px_rgba(0,0,0,0.18)] backdrop-blur transition hover:scale-105 hover:bg-black hover:text-white active:scale-95 sm:size-11';
  return (
    <>
      <button type="button" aria-label="Previous products" onClick={scrollPrev}
        className={`${base} left-2 sm:left-4`}>
        <ChevronLeft className="size-5" />
      </button>
      <button type="button" aria-label="Next products" onClick={scrollNext}
        className={`${base} right-2 sm:right-4`}>
        <ChevronRight className="size-5" />
      </button>
    </>
  );
}

/**
 * Full-width product carousel. Large screens show 4 cards with arrows floating
 * over the sides; phones show ~2.5 cards so the last one is cut off to hint at
 * scrolling. Drag or swipe works everywhere.
 */
export function ProductCarousel({
  products,
  label
}: {
  products: Product[];
  label: string;
}) {
  if (!products.length) return null;
  return (
    <Carousel
      opts={{ align: 'start', dragFree: true, containScroll: 'trimSnaps' }}
      aria-label={label}
    >
      <CarouselContent style={bleedInset}>
        {products.map((p) => (
          <CarouselItem
            key={p.url}
            className="basis-[44%] pr-2 sm:basis-[32%] sm:pr-3 md:basis-[26%] lg:basis-1/4 lg:pr-4"
          >
            <ProductCard product={p} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <Arrows />
    </Carousel>
  );
}
