import * as React from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
type CarouselApi = UseEmblaCarouselType[1];
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];
type CarouselContextProps = {
    carouselRef: UseEmblaCarouselType[0];
    api: CarouselApi;
    scrollPrev: () => void;
    scrollNext: () => void;
};
declare function useCarousel(): CarouselContextProps;
declare function Carousel({ opts, setApi, className, children, ...props }: React.ComponentProps<'div'> & {
    opts?: CarouselOptions;
    setApi?: (api: CarouselApi) => void;
}): React.JSX.Element;
declare function CarouselContent({ className, ...props }: React.ComponentProps<'div'>): React.JSX.Element;
declare function CarouselItem({ className, ...props }: React.ComponentProps<'div'>): React.JSX.Element;
export { Carousel, CarouselContent, CarouselItem, useCarousel, type CarouselApi };
