import React from 'react';

const FONT_URL =
  'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap';

/** Loads Public Sans and makes it the storefront's sans-serif font. */
export default function Fonts() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href={FONT_URL} />
      <style>{`
        :root{--font-sans:'Public Sans',ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif}
        html,body{font-family:var(--font-sans)}
        button,input,select,textarea{font-family:inherit}
      `}</style>
    </>
  );
}

export const layout = {
  areaId: 'head',
  sortOrder: 10
};
