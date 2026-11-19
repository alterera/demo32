import { useEffect, useRef, useState } from 'react';
/** Hidden while scrolling down past `offset`; shown again after a small scroll up. */
export function useHideOnScroll(offset = 80, delta = 8) {
    const [hidden, setHidden] = useState(false);
    const lastY = useRef(0);
    useEffect(() => {
        lastY.current = window.scrollY;
        let ticking = false;
        const update = () => {
            const y = window.scrollY;
            if (y <= offset)
                setHidden(false);
            else if (y - lastY.current > delta)
                setHidden(true);
            else if (lastY.current - y > delta)
                setHidden(false);
            if (Math.abs(y - lastY.current) > delta)
                lastY.current = y;
            ticking = false;
        };
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset, delta]);
    return hidden;
}
//# sourceMappingURL=useHideOnScroll.js.map