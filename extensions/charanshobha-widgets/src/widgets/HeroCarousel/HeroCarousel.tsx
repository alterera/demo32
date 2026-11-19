import React, { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { cn } from '@evershop/evershop/lib/util/cn';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '../../components/ui/carousel.js';

interface Slide {
  id?: string;
  image?: string;
  mobileImage?: string;
  width?: number;
  height?: number;
  eyebrow?: string;
  headline?: string;
  subText?: string;
  buttonText?: string;
  buttonLink?: string | null;
}

interface Props {
  heroCarouselWidget?: {
    slides?: Slide[];
    autoplay?: boolean;
    autoplaySpeed?: number;
  };
}

export default function HeroCarousel({ heroCarouselWidget }: Props) {
  const slides = (heroCarouselWidget?.slides ?? []).filter((s) => s?.image);
  const autoplay = heroCarouselWidget?.autoplay ?? true;
  const speed = heroCarouselWidget?.autoplaySpeed ?? 5000;

  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || !autoplay || paused || slides.length < 2) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = window.setInterval(() => api.scrollNext(), speed);
    return () => window.clearInterval(id);
  }, [api, autoplay, paused, speed, slides.length]);

  const prev = useCallback(() => api?.scrollPrev(), [api]);
  const next = useCallback(() => api?.scrollNext(), [api]);

  if (slides.length === 0) return null;

  return (
    <section
      aria-label="Featured"
      // break out of the page-width container so the hero bleeds edge to edge
      className="relative left-1/2 mb-12 w-screen -translate-x-1/2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <style>{`html,body{overflow-x:clip}`}</style>
      <Carousel opts={{ loop: slides.length > 1 }} setApi={setApi}>
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={slide.id ?? i}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted sm:aspect-[16/10] lg:aspect-[16/7]">
                <picture>
                  {slide.mobileImage && (
                    <source media="(max-width: 639px)" srcSet={slide.mobileImage} />
                  )}
                  <img
                    src={slide.image}
                    alt={slide.headline || ''}
                    width={slide.width || undefined}
                    height={slide.height || undefined}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    fetchPriority={i === 0 ? 'high' : 'auto'}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </picture>
                {(slide.headline || slide.subText || slide.buttonText) && (
                  <>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent sm:bg-gradient-to-r sm:from-black/50 sm:via-black/10 sm:to-transparent"
                    />
                    <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-4 pb-20 text-white sm:justify-center sm:pb-0">
                      <div className="max-w-xl space-y-3 sm:space-y-4">
                        {slide.eyebrow && (
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
                            {slide.eyebrow}
                          </p>
                        )}
                        {slide.headline && (
                          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
                            {slide.headline}
                          </h2>
                        )}
                        {slide.subText && (
                          <p className="text-sm text-white/90 sm:text-base">
                            {slide.subText}
                          </p>
                        )}
                        {slide.buttonText && slide.buttonLink && (
                          <Button
                            size="lg"
                            variant="secondary"
                            className="rounded-none uppercase tracking-wide"
                            render={<a href={slide.buttonLink} />}
                          >
                            {slide.buttonText}
                          </Button>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {slides.length > 1 && (
          <>
            {/* dots: bottom centre */}
            <div
              className="absolute inset-x-0 bottom-5 flex justify-center gap-2"
              role="tablist"
              aria-label="Choose slide"
            >
              {slides.map((slide, i) => (
                <button
                  key={slide.id ?? i}
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

            {/* arrows: bottom right */}
            <div className="absolute bottom-4 right-4 flex gap-2 sm:bottom-6 sm:right-6">
              <Button
                type="button"
                variant="secondary"
                size="icon"
                aria-label="Previous slide"
                onClick={prev}
                className="rounded-full"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="icon"
                aria-label="Next slide"
                onClick={next}
                className="rounded-full"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </Carousel>
    </section>
  );
}

export const query = `
  query Query($slides: JSON, $autoplay: Boolean, $autoplaySpeed: Int) {
    heroCarouselWidget(slides: $slides, autoplay: $autoplay, autoplaySpeed: $autoplaySpeed) {
      slides
      autoplay
      autoplaySpeed
    }
  }
`;

export const variables = `{
  slides: getWidgetSetting("slides"),
  autoplay: getWidgetSetting("autoplay"),
  autoplaySpeed: getWidgetSetting("autoplaySpeed")
}`;
