export const NAV_NAMES = ['Men', 'Women', 'Kids'];
/** Only top-level categories named exactly Men / Women / Kids, in that order. */
export function pickNavCategories(items = []) {
    return NAV_NAMES.map((n) => items.find((c) => c.name === n && !c.parent)).filter(Boolean);
}
//# sourceMappingURL=types.js.map