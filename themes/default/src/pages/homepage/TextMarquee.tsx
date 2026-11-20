import React from 'react';
import { Bleed } from '../../components/ui/bleed.js';
import { Marquee } from '../../components/ui/marquee.js';
import { TEXT_MARQUEE } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';

export default function TextMarquee() {
  return (
    <Bleed aria-label="Our promises" className={sectionY}>
      <div className="border-y py-3 md:py-4">
        <Marquee duration={28} gap="gap-6 md:gap-8">
          {TEXT_MARQUEE.map((t) => (
            <span key={t} className="flex items-center gap-6 md:gap-8">
              <span className="whitespace-nowrap text-lg font-extrabold tracking-tight sm:text-2xl md:text-3xl">
                {t}
              </span>
              <span aria-hidden="true" className="text-base sm:text-xl md:text-2xl">✱</span>
            </span>
          ))}
        </Marquee>
      </div>
    </Bleed>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 100
};
