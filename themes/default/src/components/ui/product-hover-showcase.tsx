import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@evershop/evershop/lib/util/cn';

export interface ShowcaseItem {
  id: string;
  name: string;
  /** Price text, already formatted (e.g. "₹3,299.00"). */
  price: string;
  /** Original price text, shown struck through when on sale. */
  comparePrice?: string;
  image: string;
  url: string;
}

const NEON = '#39ff14';

/** "Core Sneaker Pro" -> ["Core Sneaker", "Pro"]; short names stay on one line. */
function splitName(name: string): [string, string] {
  const words = name.trim().split(/\s+/);
  if (words.length < 3) return [name, ''];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

/**
 * Interactive product showcase: a large stage for the selected product and a row
 * of thumbnails. Hover (or tap / arrow keys) a thumbnail to switch. Product shots
 * should be transparent so they sit on the light stage. Sharp corners, light only.
 */
export function ProductHoverShowcase({
  products,
  defaultIndex = 0,
  autoplay = false,
  autoplayInterval = 4000,
  buttonText = 'Shop now',
  className
}: {
  products: ShowcaseItem[];
  defaultIndex?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  buttonText?: string;
  className?: string;
}) {
  const [active, setActive] = React.useState(
    Math.min(defaultIndex, Math.max(products.length - 1, 0))
  );
  const [hovered, setHovered] = React.useState(false);
  const tabs = React.useRef<(HTMLButtonElement | null)[]>([]);

  React.useEffect(() => {
    if (!autoplay || hovered || products.length < 2) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % products.length),
      autoplayInterval
    );
    return () => window.clearInterval(id);
  }, [autoplay, autoplayInterval, hovered, products.length]);

  if (!products.length) return null;
  const product = products[active] ?? products[0];
  const [line1, line2] = splitName(product.name);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = products.length - 1;
    const next =
      e.key === 'ArrowRight' ? (i + 1) % products.length
      : e.key === 'ArrowLeft' ? (i - 1 + products.length) % products.length
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div
      role="region"
      aria-label="Product showcase"
      className={cn('relative w-full select-none overflow-hidden bg-[#f6f6f4]', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* soft neon glow behind the product */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: NEON }}
      />

      {/* name + price */}
      <div className="relative z-10 flex flex-col gap-4 p-5 sm:p-8 md:flex-row md:items-start md:justify-between">
        <div className="min-h-[3.5rem]">
          <AnimatePresence mode="wait">
            <motion.h2
              key={product.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="text-2xl font-extrabold leading-[0.95] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
            >
              <span className="block">{line1}</span>
              {line2 && <span className="block font-medium text-neutral-600">{line2}</span>}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={`${product.id}-price`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex items-baseline gap-2 tabular-nums"
            >
              <span className="text-2xl font-light text-neutral-900 sm:text-3xl">
                {product.price}
              </span>
              {product.comparePrice && (
                <span className="text-sm text-neutral-500 line-through">
                  {product.comparePrice}
                </span>
              )}
            </motion.p>
          </AnimatePresence>
          <a
            href={product.url}
            className="group inline-flex items-center gap-2 bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 sm:px-6 sm:py-3"
          >
            {buttonText}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* stage */}
      <div className="relative flex h-[240px] w-full items-center justify-center sm:h-[320px] md:h-[380px]">
        <div
          aria-hidden="true"
          className="absolute bottom-5 left-1/2 h-5 w-2/3 -translate-x-1/2 rounded-[50%] bg-neutral-900/10 blur-lg"
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.97, x: 16 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.97, x: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full w-full items-center justify-center px-4"
          >
            <motion.img
              src={product.image}
              alt={product.name}
              draggable={false}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="pointer-events-none max-h-[88%] w-auto max-w-full object-contain mix-blend-multiply"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* thumbnails */}
      <div className="relative z-10 px-3 pb-3 pt-6 sm:px-8 sm:pb-8">
        <div
          role="tablist"
          aria-label="Choose product"
          className="flex gap-2 overflow-x-auto pt-3 [scrollbar-width:none] sm:gap-3 [&::-webkit-scrollbar]:hidden"
        >
          {products.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                type="button"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  'relative min-w-[30%] shrink-0 border bg-white p-2 outline-none transition-[transform,box-shadow,border-color] duration-200 focus-visible:ring-2 focus-visible:ring-neutral-900 sm:min-w-0 sm:flex-1 sm:p-3',
                  isActive
                    ? 'z-10 -translate-y-2 border-neutral-300 shadow-lg'
                    : 'border-neutral-200 hover:border-neutral-300'
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="showcase-indicator"
                    className="absolute -top-px inset-x-0 h-0.5"
                    style={{ backgroundColor: NEON }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="flex h-14 items-center justify-center bg-[#f9f9f7] sm:h-16">
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    draggable={false}
                    className="h-full w-auto max-w-full object-contain mix-blend-multiply"
                  />
                </span>
                <span className="mt-2 block truncate text-center text-[11px] font-semibold sm:text-xs">
                  {p.name}
                </span>
                <span className="block text-center text-[10px] tabular-nums text-neutral-500 sm:text-[11px]">
                  {p.price}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductHoverShowcase;
