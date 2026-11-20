import React from 'react';
import { Bleed } from '../../components/ui/bleed.js';
import { Marquee } from '../../components/ui/marquee.js';
import { TEXT_MARQUEE } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';

export default function TextMarquee() {
  return (
    <Bleed aria-label="Our promises" className={sectionY}>
      <div className="border-y py-5 md:py-7">
        <Marquee duration={28} gap="gap-8 md:gap-12">
          {TEXT_MARQUEE.map((t) => (
            <span key={t} className="flex items-center gap-8 md:gap-12">
              <span className="whitespace-nowrap text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                {t}
              </span>
              <span aria-hidden="true" className="text-3xl sm:text-5xl md:text-6xl">✱</span>
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
