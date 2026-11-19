import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search, X } from 'lucide-react';
import { Input } from '@evershop/evershop/components/common/ui/Input';
import { shell } from '../../lib/layout.js';

export function SearchToggle({ searchUrl }: { searchUrl: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Close search' : 'Search'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-muted"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'x' : 's'}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.12 }}
          >
            {open ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.form
            action={searchUrl}
            method="GET"
            role="search"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full z-40 border-t bg-background shadow-md"
          >
            <div className={`${shell} flex items-center gap-3 py-3`}>
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <Input
                ref={ref}
                name="keyword"
                type="search"
                placeholder="Search for shoes, brands and more"
                className="h-11 rounded-none border-0 px-0 shadow-none focus-visible:ring-0"
              />
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </>
  );
}
