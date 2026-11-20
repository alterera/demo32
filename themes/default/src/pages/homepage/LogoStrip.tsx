import React from 'react';
import { LogoGrid } from '../../components/ui/logo-grid.js';
import { LOGOS, LOGOS_HEADING } from '../../content/home.js';
import { sectionY } from '../../lib/layout.js';

export default function LogoStrip() {
  if (!LOGOS.length) return null;
  return (
    <section aria-labelledby="logos-title" className={sectionY}>
      <h2
        id="logos-title"
        className="mb-5 text-center text-sm font-medium text-muted-foreground"
      >
        {LOGOS_HEADING}
      </h2>
      <LogoGrid logos={LOGOS} />
    </section>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 115
};
