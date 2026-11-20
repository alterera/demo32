import React, { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { cn } from '@evershop/evershop/lib/util/cn';
import { Bleed } from '../../components/ui/bleed.js';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '../../components/ui/carousel.js';
import { HERO_BUTTONS, HERO_SLIDES } from '../../content/home.js';
import { shell } from '../../lib/layout.js';

interface Props {
  heroCategories?: { items: { name: string; url: string }[] };
}

const AUTOPLAY_MS = 6000;

export default function Hero({ heroCategories }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  // hero buttons link to the admin category with the same name, else to search
  const links = HERO_BUTTONS.map((label) => ({
    label,
    href:
      heroCategories?.items.find(
        (c) => c.name.toLowerCase() === label.toLowerCase()
      )?.url ?? `/search?keyword=${encodeURIComponent(label)}`
  }));

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || paused) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => api.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [api, paused]);

  const prev = useCallback(() => api?.scrollPrev(), [api]);
  const next = useCallback(() => api?.scrollNext(), [api]);

  return (
    <Bleed
      aria-label="Featured"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Carousel opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {HERO_SLIDES.map((slide, i) => (
            <CarouselItem key={slide.id}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted sm:aspect-[16/10] lg:aspect-[16/7]">
                <picture>
                  <source media="(max-width: 639px)" srcSet={slide.mobileImage} />
                  <img
                    src={slide.image}
                    alt=""
                    loading={i === 0 ? 'eager' : 'lazy'}
                    fetchPriority={i === 0 ? 'high' : 'auto'}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </picture>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent sm:bg-gradient-to-r sm:from-black/50 sm:via-black/10 sm:to-transparent"
                />
                <div className={cn(shell, 'absolute inset-0 left-1/2 flex -translate-x-1/2 flex-col justify-end pb-20 text-white sm:justify-center sm:pb-0')}>
                  <p className="text-lg font-light tracking-wide sm:text-2xl">{slide.sub}</p>
                  <h2 className="mt-1 max-w-xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-7xl">
                    {slide.title}
                  </h2>
                  <div className="mt-6 flex gap-6 sm:mt-8">
                    {links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className="border-b-2 border-white pb-1 text-sm font-semibold tracking-wide transition-opacity hover:opacity-70 sm:text-base"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div
          className="absolute inset-x-0 bottom-5 flex justify-center gap-2"
          role="tablist"
          aria-label="Choose slide"
        >
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === selected}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                'h-2.5 rounded-full transition-all',
                i === selected ? 'w-6 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
              )}
            />
          ))}
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2 sm:bottom-6 sm:right-6">
          <Button type="button" variant="secondary" size="icon" aria-label="Previous slide"
            onClick={prev} className="rounded-full">
            <ArrowLeft className="size-4" />
          </Button>
          <Button type="button" variant="secondary" size="icon" aria-label="Next slide"
            onClick={next} className="rounded-full">
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Carousel>
    </Bleed>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    heroCategories: categories {
      items {
        name
        url
      }
    }
  }
`;
