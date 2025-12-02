export interface LongdoMarkerProps {
    /**
      * The Longdo map instance where the popup will be displayed.
      * This is required to add the popup overlay to the map.
     */
    map?: any;
    /**
     * @property position
     * The position of the popup on the map.
     * It should be an object with `lon` and `lat` properties.
     */
    position: {
        lon: number;
        lat: number;
    };
    /**
    * The title of the marker.
    * @default Null
    * The title is displayed at the top of the marker.
    */
    title?: string;
    /**
     * The icon of the marker.
     * This can be a URL to an image or an object with `url` and optional `offset`.
     * @default Null
     */
    icon?: {
        url: string;
        offset?: {
            x: number;
            y: number;
        };
    };
    /**
     * The detail text of the marker.
     * This is additional information displayed in the marker.
     * @default Null
     */
    detail?: string;
    /**
     * The visible range of the marker.
     * This is an object with `min` and `max` properties, defining the zoom levels at which the marker is visible.
     * @default Null
     */
    visibleRange?: {
        min: number;
        max: number;
    };
    /**
     * Determines whether the marker is draggable.
     * If set to `true`, the marker can be moved by the user.
     * @default false
     */
    draggable?: boolean;
}
