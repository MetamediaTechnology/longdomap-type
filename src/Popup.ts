export interface PopupOptions {
    /**
     * HTML title of the popup.
     * @default undefined (No title)
     */
    title?: string;

    /**
     * HTML detail content of the popup.
     * @default undefined (No detail)
     */
    detail?: string;

    /**
     * Delegate function to set detail content.
     * @param element The element to populate with detail.
     * @default undefined (Load nothing)
     */
    loadDetail?: (element: Element) => void;

    /**
     * Custom HTML content, overrides detail parameter.
     * @default undefined (As detail)
     */
    html?: string;

    /**
     * Delegate function to set custom HTML content.
     * @param element The element to populate with custom content.
     * @default undefined (Load nothing)
     */
    loadHtml?: (element: Element) => void;

    /**
     * Size of the popup.
     * @default 'auto'
     */
    size?: ({ width?: number; height?: number } | 'auto');

    /**
     * Show close button.
     * @default true
     */
    closable?: boolean;
}