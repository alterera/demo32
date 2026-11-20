import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../../content/reviews.js';
import { sectionY } from '../../lib/layout.js';

function Stars({ value }: { value: number }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`size-4 ${n <= value ? 'fill-foreground' : 'fill-transparent text-muted-foreground/40'}`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export default function Reviews() {
  const average = REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length;

  return (
    <section aria-labelledby="reviews-title" className={sectionY}>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 md:mb-8">
        <h2 id="reviews-title" className="text-xl font-bold md:text-2xl">
          What customers say
        </h2>
        <p className="flex items-center gap-2 text-sm">
          <Stars value={Math.round(average)} />
          <span className="font-semibold">{average.toFixed(1)}</span>
          <span className="text-muted-foreground">from {REVIEWS.length} reviews</span>
        </p>
      </div>
      <ul className="grid gap-3 md:grid-cols-3 md:gap-4">
        {REVIEWS.map((r) => (
          <li key={r.id} className="flex flex-col gap-3 border p-5">
            <Stars value={r.rating} />
            <h3 className="font-semibold">{r.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            <p className="mt-auto text-sm font-medium">
              {r.name}
              <span className="font-normal text-muted-foreground"> · {r.city}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 110
};
