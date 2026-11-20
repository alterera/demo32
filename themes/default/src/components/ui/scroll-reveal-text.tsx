import * as React from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue
} from 'motion/react';
import { cn } from '@evershop/evershop/lib/util/cn';

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
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  );
}

/**
 * Paragraph whose words light up one by one as it scrolls through the viewport.
 * With reduced motion the full text is shown straight away.
 */
export function ScrollRevealText({
  text,
  className
}: {
  text: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45']
  });
  const words = text.split(/\s+/).filter(Boolean);

  if (reduce) {
    return <p className={className}>{text}</p>;
  }
  return (
    <p ref={ref} className={cn(className)} aria-label={text}>
      {words.map((w, i) => (
        <Word
          key={`${w}-${i}`}
          word={w}
          index={i}
          total={words.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
