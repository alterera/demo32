import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Hover-intent open state for menus and popovers. A short close delay stops the
 * panel flickering when the pointer crosses the gap; focus and Escape work too.
 */
export function useHoverOpen(openDelay = 40, closeDelay = 140) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const clear = () => {
    if (timer.current) clearTimeout(timer.current);
  };
  const show = useCallback(() => {
    clear();
    timer.current = setTimeout(() => setOpen(true), openDelay);
  }, [openDelay]);
  const hide = useCallback(() => {
    clear();
    timer.current = setTimeout(() => setOpen(false), closeDelay);
  }, [closeDelay]);
  const close = useCallback(() => {
    clear();
    setOpen(false);
  }, []);

  useEffect(() => clear, []);

  const bind = {
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) hide();
    },
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') close();
    }
  };

  return { open, bind, close };
}
