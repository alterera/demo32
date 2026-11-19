import React, { useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@evershop/evershop/components/common/ui/Input';

export function SearchToggle({ searchUrl }: { searchUrl: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) ref.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Search"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center hover:bg-muted"
      >
        {open ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
      </button>
      {open && (
        <form
          action={searchUrl}
          method="GET"
          role="search"
          className="absolute inset-x-0 top-full z-40 border-b bg-background shadow-md"
        >
          <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-4">
            <Search
              className="h-5 w-5 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              ref={ref}
              name="keyword"
              type="search"
              placeholder="Search for shoes, brands and more"
              className="h-11 rounded-none border-0 shadow-none focus-visible:ring-0"
            />
          </div>
        </form>
      )}
    </>
  );
}
