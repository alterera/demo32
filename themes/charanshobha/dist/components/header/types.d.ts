export interface NavCategory {
    name: string;
    url: string;
    parent?: {
        name: string;
    } | null;
    children?: NavCategory[] | null;
}
export declare const NAV_NAMES: readonly ['Men', 'Women', 'Kids'];
/** Only top-level categories named exactly Men / Women / Kids, in that order. */
export declare function pickNavCategories(items?: NavCategory[]): NavCategory[];
