// shadcn/ui Carousel (embla). Adapted: sharp corners, no arrow buttons built in
// (the hero places its own controls), exposes the embla api through context.
import * as React from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType
} from 'embla-carousel-react';
import { cn } from '@evershop/evershop/lib/util/cn';

type CarouselApi = UseEmblaCarouselType[1];
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];

type CarouselContextProps = {
  carouselRef: UseEmblaCarouselType[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
}

function Carousel({
  opts,
  setApi,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  opts?: CarouselOptions;
  setApi?: (api: CarouselApi) => void;
}) {
  const [carouselRef, api] = useEmblaCarousel(opts);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollNext();
    }
  };

  React.useEffect(() => {
    if (api && setApi) setApi(api);
  }, [api, setApi]);

  return (
    <CarouselContext.Provider
      value={{ carouselRef, api, scrollPrev, scrollNext }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div className={cn('flex', className)} {...props} />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn('min-w-0 shrink-0 grow-0 basis-full', className)}
      {...props}
    />
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
  type CarouselApi
};
