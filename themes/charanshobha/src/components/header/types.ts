export interface NavCategory {
  name: string;
  url: string;
  parent?: { name: string } | null;
  children?: NavCategory[] | null;
}

export const NAV_NAMES = ['Men', 'Women', 'Kids'] as const;

/** Only top-level categories named exactly Men / Women / Kids, in that order. */
export function pickNavCategories(items: NavCategory[] = []): NavCategory[] {
  return NAV_NAMES.map((n) =>
    items.find((c) => c.name === n && !c.parent)
  ).filter(Boolean) as NavCategory[];
}
