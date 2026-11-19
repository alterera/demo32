/**
 * Hover-intent open state for menus and popovers. A short close delay stops the
 * panel flickering when the pointer crosses the gap; focus and Escape work too.
 */
export declare function useHoverOpen(openDelay?: number, closeDelay?: number): {
    open: boolean;
    bind: {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
        onFocus: () => void;
        onBlur: (e: React.FocusEvent<HTMLElement>) => void;
        onKeyDown: (e: React.KeyboardEvent) => void;
    };
    close: () => void;
};
