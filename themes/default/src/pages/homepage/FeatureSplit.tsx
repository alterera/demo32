import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { cn } from '@evershop/evershop/lib/util/cn';
import { FEATURE_SPLIT } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';

export default function FeatureSplit() {
  const [active, setActive] = useState(0);
  const { title, options, buttonLabel, buttonHref } = FEATURE_SPLIT;

  return (
    <section aria-label={title} className={sectionY}>
      {/* image stage: swaps to the option you hover (or tap on phones) */}
      <div className="relative aspect-square w-full overflow-hidden bg-muted sm:aspect-[4/3] lg:aspect-[16/9]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={options[active].image}
            src={options[active].image}
            alt={`${title} in ${options[active].label}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="mt-5 grid items-center gap-5 lg:grid-cols-[7fr_3fr] lg:gap-8">
        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">{title}</h2>
          <ul className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold sm:text-base">
            {options.map((o, i) => (
              <li key={o.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-muted-foreground">•</span>}
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={cn(
                    'border-b-2 pb-0.5 transition-colors',
                    i === active
                      ? 'border-foreground'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  )}
                >
                  {o.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:justify-self-end">
          <Button
            size="lg"
            variant="outline"
            className="w-full rounded-none border-foreground px-8 lg:w-auto"
            render={<a href={buttonHref} />}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 60
};
