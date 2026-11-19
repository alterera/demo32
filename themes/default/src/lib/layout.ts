/**
 * Layout primitives shared by every theme component, so spacing stays consistent.
 * `shell` mirrors EverShop's `.page-width` column (--page-max-width / --page-gutter).
 */
export const shell =
  'mx-auto w-full max-w-[1200px] px-4 lg:px-6';

/** Vertical rhythm between homepage sections. */
export const sectionY = 'py-8 md:py-12';

/** Left/right padding that lines a full-bleed scroller up with the `shell` column edge. */
export const bleedInset = {
  paddingInline:
    'max(var(--page-gutter, 1rem), calc((100vw - var(--page-max-width, 1200px)) / 2 + var(--page-gutter, 1rem)))'
} as const;
