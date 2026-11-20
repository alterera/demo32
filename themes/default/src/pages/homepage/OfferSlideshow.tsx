import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '../../components/ui/carousel.js';
import { OFFER_BANNERS } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';

const AUTOPLAY_MS = 4500;

export default function OfferSlideshow() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => api.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <section aria-label="Offers" className={sectionY}>
      <Carousel opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {OFFER_BANNERS.map((b) => (
            <CarouselItem key={b.id}>
              <a href={b.href} draggable={false} className="block">
                <img
                  src={b.image}
                  alt={b.alt}
                  loading="lazy"
                  draggable={false}
                  className="aspect-[16/6] w-full object-cover sm:aspect-[16/4] lg:aspect-[16/3]"
                />
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
  sortOrder: 40
};
