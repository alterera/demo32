import * as React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { cn } from '@evershop/evershop/lib/util/cn';
const FROM = '#c8c8c4'; // unlit
const TO = '#39ff14'; // brand neon
function Word({ word, index, total, progress }) {
    const color = useTransform(progress, [index / total, (index + 1) / total], [FROM, TO]);
    return (React.createElement(motion.span, { style: { color, textShadow: '0 1px 1px rgba(0,0,0,0.22)' }, className: "inline-block" },
        word,
        "\u00A0"));
}
/**
 * Text whose words turn the brand neon, one by one, as it scrolls through the
 * viewport. Each entry in `lines` is its own line. With reduced motion the full
 * text is shown lit straight away.
 */
export function ScrollRevealText({ lines, className }) {
    const ref = React.useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.9', 'end 0.5']
    });
    const split = lines.map((l) => l.split(/\s+/).filter(Boolean));
    const total = split.reduce((n, w) => n + w.length, 0);
    let offset = 0;
    return (React.createElement("p", { ref: ref, className: cn(className), "aria-label": lines.join(' ') }, split.map((words, li) => {
        const start = offset;
        offset += words.length;
        return (React.createElement("span", { key: li, className: "block", "aria-hidden": "true" }, words.map((w, i) => reduce ? (React.createElement("span", { key: i, style: { color: TO, textShadow: '0 1px 1px rgba(0,0,0,0.22)' } },
            w,
            ' ')) : (React.createElement(Word, { key: `${w}-${i}`, word: w, index: start + i, total: total, progress: scrollYProgress })))));
    })));
}
//# sourceMappingURL=scroll-reveal-text.js.map