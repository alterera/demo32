import * as React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { cn } from '@evershop/evershop/lib/util/cn';
function Word({ word, index, total, progress }) {
    const start = index / total;
    const end = (index + 1) / total;
    const opacity = useTransform(progress, [start, end], [0.18, 1]);
    return (React.createElement(motion.span, { style: { opacity }, className: "inline-block" },
        word,
        "\u00A0"));
}
/**
 * Paragraph whose words light up one by one as it scrolls through the viewport.
 * With reduced motion the full text is shown straight away.
 */
export function ScrollRevealText({ text, className }) {
    const ref = React.useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.85', 'end 0.45']
    });
    const words = text.split(/\s+/).filter(Boolean);
    if (reduce) {
        return React.createElement("p", { className: className }, text);
    }
    return (React.createElement("p", { ref: ref, className: cn(className), "aria-label": text }, words.map((w, i) => (React.createElement(Word, { key: `${w}-${i}`, word: w, index: i, total: words.length, progress: scrollYProgress })))));
}
//# sourceMappingURL=scroll-reveal-text.js.map