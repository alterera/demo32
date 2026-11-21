import * as React from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue
} from 'motion/react';
import { cn } from '@evershop/evershop/lib/util/cn';

const FROM = '#c8c8c4'; // unlit
const TO = '#000000';

function Word({
  word,
  index,
  total,
  progress
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const color = useTransform(progress, [index / total, (index + 1) / total], [FROM, TO]);
  return (
    <motion.span
      style={{ color, textShadow: 'none' }}
      className="inline-block"
    >
      {word}&nbsp;
    </motion.span>
  );
}

/**
 * Text whose words turn black, one by one, as it scrolls through the
 * viewport. Each entry in `lines` is its own line. With reduced motion the full
 * text is shown lit straight away.
 */
export function ScrollRevealText({
  lines,
  className
}: {
  lines: string[];
  className?: string;
}) {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.5']
  });
  const split = lines.map((l) => l.split(/\s+/).filter(Boolean));
  const total = split.reduce((n, w) => n + w.length, 0);
  let offset = 0;

  return (
    <p ref={ref} className={cn(className)} aria-label={lines.join(' ')}>
      {split.map((words, li) => {
        const start = offset;
        offset += words.length;
        return (
          <span key={li} className="block" aria-hidden="true">
            {words.map((w, i) =>
              reduce ? (
                <span
                  key={i}
                  style={{ color: TO }}
                >
                  {w}{' '}
                </span>
              ) : (
                <Word
                  key={`${w}-${i}`}
                  word={w}
                  index={start + i}
                  total={total}
                  progress={scrollYProgress}
                />
              )
            )}
          </span>
        );
      })}
    </p>
  );
}
