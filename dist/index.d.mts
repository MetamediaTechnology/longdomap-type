declare enum EventName {
    BeforeContextmenu = "beforeContextmenu",
    BeforeTagPopup = "beforeTagPopup",
    Click = "click",
    ConnectionError = "connectionError",
    Contextmenu = "contextmenu",
    DoubleClick = "doubleClick",
    Drag = "drag",
    DrawCreate = "drawCreate",
    DrawDelete = "drawDelete",
    Drop = "drop",
    Fullscreen = "fullscreen",
    Geolocation = "geolocation",
    GeolocationError = "geolocationError",
    GuideComplete = "guideComplete",
    GuideError = "guideError",
    Idle = "idle",
    LayerChange = "layerChange",
    Location = "location",
    Mousemove = "mousemove",
    OverlayChange = "overlayChange",
    OverlayClick = "overlayClick",
    OverlayDrag = "overlayDrag",
    OverlayDrop = "overlayDrop",
    OverlayHover = "overlayHover",
    OverlayLeave = "overlayLeave",
    OverlayLoad = "overlayLoad",
    OverlayUpdate = "overlayUpdate",
    PathAnimationEnd = "pathAnimationEnd",
    Pitch = "pitch",
    PopupClose = "popupClose",
    Ready = "ready",
    Repaint = "repaint",
    Resize = "resize",
    Rotate = "rotate",
    ToolbarChange = "toolbarChange",
    TooltipChange = "tooltipChange",
    Wheel = "wheel",
    Zoom = "zoom",
    ZoomRange = "zoomRange",
    loadTile = "loadTile"
}
declare enum LocationMode {
    Pointer = "POINTER",
    Geolocation = "GEOLOCATION"
}
interface GeoJSONGeometry {
    type: "Point" | "LineString" | "Polygon" | "MultiPoint" | "MultiLineString" | "MultiPolygon" | "GeometryCollection";
    coordinates: any;
}
interface GeoJSONFeature {
    type: "Feature";
    geometry: GeoJSONGeometry;
    properties: {
        clickable?: boolean;
        detail?: string;
        draggable?: boolean;
        icon?: {
            url: string;
            width: number;
            height: number;
            offset: [number, number];
        };
        title?: string;
        visibleMax?: number;
        visibleMin?: number;
        visibleRange?: number;
        [key: string]: any;
    };
    object?: any;
    [key: string]: any;
}
interface OverlaysClickEvent {
    _geojson: GeoJSONFeature;
}

/**
 * @interface Map
 * @description
 * Interface for interacting with the Longdo Map instance.
 * Provides methods and properties for controlling map view, overlays, events, layers, tags, UI, language, and more.
 */
interface Map {
    /**
     * @property zoom
     * @description
     * Zooms the map to a specified level or zooms in/out based on the boolean value.
     * If zoomLevel is a number, it sets the zoom level directly.
     * If zoomLevel is true, it zooms in by one level.
     * If zoomLevel is false, it zooms out by one level.
     * If zoomLevel is not provided, it defaults to zooming in by one level.
     * @param zoomLevel - The zoom level to set, or a boolean indicating zoom in/out.
     * @param zoomIn - A boolean indicating whether to zoom in (true) or out (false).
     * If zoomLevel is not provided, it defaults to zooming in.
     * @example
     * ```ts
     * map.zoom(5);
     * map.zoom(true,true); // Zooms in by one level
     * map.zoom(false,true); // Zooms out by one level
     * ```
     * @returns {void|number} Returns the current zoom level if called without arguments, otherwise void.
     */
    zoom: (zoomLevel?: number | boolean, zoomIn?: boolean) => void | number;
    /**
     * @property zoomRange
     * @description
     * Sets or gets the zoom range of the map.
     * If called with an argument, sets the min and max zoom levels.
     * If called without arguments, returns the current zoom range.
     * @param range - An object with min and max zoom levels.
     * @returns {void|{ min: number; max: number }} Returns the current zoom range if called without arguments, otherwise void.
     */
    zoomRange: (range?: {
        min: number;
        max: number;
    }) => void | {
        min: number;
        max: number;
    };
    /**
     * @property location
     * @description
     * Sets or gets the map's location.
     * If called with a location, sets the map's location to the specified longitude and latitude.
     * If animate is `true`, it animates the transition to the new location.
     * If animate is `false` or not provided, it sets the location immediately without animation.
     * If called without arguments, returns the current location.
     * @param location - An object containing longitude (lon) and latitude (lat), or a LocationMode.
     * @param animate - A boolean indicating whether to animate the transition.
     * @returns {void|{ lon: number; lat: number }} Returns the current location if called without arguments, otherwise void.
     */
    location: (location?: {
        lon: number;
        lat: number;
    } | LocationMode, animate?: boolean) => void | {
        lon: number;
        lat: number;
    };
    /**
     * @property bound
     * @description
     * Sets or gets the map's bounding box.
     * If called with a bounds object, sets the map's visible area to the specified bounds.
     * If called without arguments, returns the current bounds.
     * @param bounds - An object containing minLon, minLat, maxLon, and maxLat.
     * @returns {void|{ minLon: number; minLat: number; maxLon: number; maxLat: number }} Returns the current bounds if called without arguments, otherwise void.
     * @example
     * ```ts
     * map.bound({
     *   minLon: 100, minLat: 13,
     *   maxLon: 101, maxLat: 14
     * });
     * ```
     */
    bound: (bounds?: {
        minLon: number;
        minLat: number;
        maxLon: number;
        maxLat: number;
    }) => void | {
        minLon: number;
        minLat: number;
        maxLon: number;
        maxLat: number;
    };
    /**
     * @property resize
     * @description
     * Resizes the map to fit the current container size.
     * This method is useful when the map's container size changes, such as during window resizing.
     * It recalculates the map's dimensions and updates the view accordingly.
     * @example
     * ```ts
     * map.resize();
     * ```
     */
    resize: () => void;
    /**
     * @property Route
     * @description
     * Provides methods to manage routes on the map.
     * - `add(route: any)`: Adds a route to the map.
     * - `remove(route: any)`: Removes a route from the map.
     * - `clear()`: Clears all routes from the map.
     * @example
     * ```ts
     * map.Route.add(route);
     * map.Route.remove(route);
     * map.Route.clear();
     * ```
     */
    Route: {
        /**
         * @property add
         * @description Adds a route to the map.
         * @param route - The route object to add.
         */
        add: (route: any) => void;
        /**
         * @property remove
         * @description Removes a route from the map.
         * @param route - The route object to remove.
         */
        remove: (route: any) => void;
        /**
         * @property clear
         * @description Clears all routes from the map.
         */
        clear: () => void;
        /**
         *
         * @property mode
         * @description
         * Sets or gets the route mode.
         * If called with a mode, sets the route mode to the specified value.
         * If called without arguments, returns the current route mode.
         * @param mode - The route mode to set (e.g., "car", "walk", etc.).
         * @returns {void|string} Returns the current route mode if called without arguments, otherwise void.
         * @example
         * ```ts
         * map.Route.mode("car");
         * ```
         */
        mode: (mode?: string) => void | string;
        /**
         * @property list
         * @description
         * Lists all routes currently on the map.
         * @returns {any[]} An array of route objects currently on the map.
         */
        list: () => any[];
        /**
         * @property size
         * @description
         * Returns the number of routes currently on the map.
         * @returns {number} The number of routes.
         */
        size: () => number;
        /**
         *
         * @property distance
         * @description
         * Calculates the total distance of all routes currently on the map.
         * @returns {number} The total distance in meters.
         * @example
         * ```ts
         * const totalDistance = map.Route.distance();
         * ```
         */
        distance: () => number;
        /**
         * @property search
         * @description Performs a search operation related to routes on the map.
         * This method can be used to find routes based on specific criteria or parameters.
         * Before using this method, ensure added Map.Route.add(route) two points.
         * @example
         * ```ts
         * map.Route.search();
         * ```
         */
        search: () => void;
    };
    /**
     * @property Rotate
     * @description
     * Provides methods to manage the map's rotation.
     * - `rotate(angle: number, animate?: boolean)`: Rotates the map to the specified angle.
     * @example
     * ```ts
     * map.rotate(45, true);
     * ```
     */
    rotate: (angle: number, animate?: boolean) => void;
    /**
     * @property Pitch
     * @description
     * Provides methods to manage the map's pitch.
     * - `pitch(angle: number, animate?: boolean)`: Sets the map's pitch to the specified angle.
     * @example
     * ```ts
     * map.pitch(30, true);
     * ```
     */
    pitch: (angle: number, animate?: boolean) => void;
    /**
     *
     * @property Search
     * @description
     * Provides methods to perform search operations on the map.
     * @example
     * ```ts
     * map.Search();
     */
    Search: () => void;
    /**
     * @property Overlays
     * @description
     * Provides methods to manage overlays on the map.
     * - `add(overlay: any)`: Adds an overlay to the map.
     * - `remove(overlay: any)`: Removes an overlay from the map.
     * - `clear()`: Clears all overlays from the map.
     * @example
     * ```ts
     * map.Overlays.add(marker);
     * map.Overlays.remove(marker);
     * map.Overlays.clear();
     * ```
     */
    Overlays: {
        /**
         * @property add
         * @description Adds an overlay to the map.
         * @param overlay - The overlay object to add.
         */
        add: (overlay: any) => void;
        /**
         * @property remove
         * @description Removes an overlay from the map.
         * @param overlay - The overlay object to remove.
         */
        remove: (overlay: any) => void;
        /**
         * @property load
         * @description Loads predefined overlays and adds them to the map.
         * @param mode - Predefined overlays mode.
         */
        load: (mode: any) => void;
        /**
         * @property unload
         * @description Removes predefined overlays from the map.
         * @param mode - Predefined overlays mode.
         */
        unload: (mode: any) => void;
        /**
         * @property clear
         * @description Removes all overlays from the map.
         */
        clear: () => void;
        /**
         * @property list
         * @description Lists all overlays on the map.
         * @returns {any[]} List of overlays.
         */
        list: () => any[];
        /**
         * @property size
         * @description Returns the number of overlays on the map.
         * @returns {number} Size.
         */
        size: () => number;
        /**
         * @property drop
         * @description Adds a marker to the map with drop animation.
         * @param overlay - Marker overlay.
         */
        drop: (overlay: any) => void;
        /**
         * @property bounce
         * @description Shows bounce animation of a marker.
         * @param overlay - Marker overlay.
         */
        bounce: (overlay: any) => void;
        /**
         * @property lastOpenPopup
         * @description Gets the last open popup.
         * @returns {any} Last open popup.
         */
        lastOpenPopup: () => any;
        /**
         * @property pathAnimation
         * @description Moves marker along the line.
         * @param marker - The marker to move.
         * @param path - Motion path (Polyline).
         * @param speed - Speed (optional, default: 2^-zoom).
         */
        pathAnimation: (marker: any, path: any, speed?: number) => void;
    };
    /**
     * @property Event
     * @description
     * Provides methods to bind events to the map.
     * - `bind(eventName: EventName | string, callback: (event: any) => void)`: Binds an event to the map.
     * The `eventName` can be a predefined event name or a custom string.
     * The `callback` function is called when the event occurs.
     * @example
     * ```ts
     * map.Event.bind(EventName.Click, (event) => {
     *   console.log('Map clicked at:', event.location);
     * });
     * ```
     */
    Event: {
        /**
         * @property bind
         * @description Binds an event to the map.
         * @param eventName - The event name to bind.
         * @param callback - The callback function to execute when the event occurs.
         */
        bind: (eventName: EventName | string, callback: (event: any) => void) => void;
    };
    /**
     * @property Layers
     * @description
     * Provides methods to manage map layers.
     * - `setBase(layer: string)`: Sets the base layer of the map.
     * - `add(layer: string)`: Adds a layer to the map.
     * - `remove(layer: string)`: Removes a layer from the map.
     * @example
     * ```ts
     * map.Layers.setBase('baseLayerName');
     * map.Layers.add('additionalLayerName');
     * map.Layers.remove('layerToRemove');
     * ```
     */
    Layers: {
        /**
         * @property setBase
         * @description Sets the base layer of the map.
         * @param layer - The name of the base layer.
         */
        setBase: (layer: string | object | any) => void;
        /**
         * @property add
         * @description Adds a layer to the map.
         * @param layer - The name of the layer to add.
         */
        add: (layer: string | object | any) => void;
        /**
         *
         * @property insert
         * @description Inserts a layer at a specific index in the map's layer stack.
         * @param layer - The name of the layer to insert.
         * @param index - The index at which to insert the layer.
         * @example
         * ```ts
         * map.Layers.insert(1,layer1); // Inserts 'layerName' at index 2
         *
         */
        insert: (index: number, layer: string | object | any) => void;
        /**
         * @property remove
         * @description Removes a layer from the map.
         * @param layer - The name of the layer to remove.
         */
        remove: (layer: string | object | any) => void;
        /**
         * @property clear
         * @description Clears all layers from the map. Clear layer is not effective for a base layer.
         * This method removes all layers, including the base layer.
         */
        clear: () => void;
    };
    /**
     * @property Tags
     * @description
     * Provides methods to manage tags on the map.
     * - `add(tagName: string)`: Adds a tag to the map.
     * - `remove(tagName: string)`: Removes a tag from the map.
     * @example
     * ```ts
     * map.Tags.add('hotel');
     * map.Tags.remove('hotel');
     * ```
     */
    Tags: {
        /**
         * @function add
         * @description Adds a tag to the map.
         * @param tagName - The name of the tag to add.
         */
        add: (tagName: string) => void;
        /**
         * @function remove
         * @description Removes a tag from the map.
         * @param tagName - The name of the tag to remove.
         */
        remove: (tagName: string) => void;
    };
    /**
     * @property Ui
     * @description
     * Provides methods to control the visibility of various UI components on the map.
     */
    Ui: {
        /**
         * @property DPad
         * @description
         * Controls the visibility of the DPad on the map.
         * - `visible(show: boolean)`: Shows or hides the DPad.
         * @example
         * ```ts
         * map.Ui.DPad.visible(true); // Show DPad
         * map.Ui.DPad.visible(false); // Hide DPad
         * ```
         */
        DPad: {
            /**
             * @function visible
             * @description Shows or hides the DPad.
             * @param show - Whether to show (true) or hide (false) the DPad.
             */
            visible: (show: boolean) => void;
        };
        /**
         * @property Zoombar
         * @description
         * Controls the visibility of the Zoombar on the map.
         * - `visible(show: boolean)`: Shows or hides the Zoombar.
         * @example
         * ```ts
         * map.Ui.Zoombar.visible(true); // Show Zoombar
         * map.Ui.Zoombar.visible(false); // Hide Zoombar
         * ```
         */
        Zoombar: {
            /**
             * @function visible
             * @description Shows or hides the Zoombar.
             * @param show - Whether to show (true) or hide (false) the Zoombar.
             */
            visible: (show: boolean) => void;
        };
        /**
         * @property Geolocation
         * @description
         * Controls the visibility of the Geolocation button on the map.
         * - `visible(show: boolean)`: Shows or hides the Geolocation button.
         * @example
         * ```ts
         * map.Ui.Geolocation.visible(true); // Show Geolocation button
         * map.Ui.Geolocation.visible(false); // Hide Geolocation button
         * ```
         */
        Geolocation: {
            /**
             * @function visible
             * @description Shows or hides the Geolocation button.
             * @param show - Whether to show (true) or hide (false) the Geolocation button.
             */
            visible: (show: boolean) => void;
        };
        /**
         * @property Terrain
         * @description
         * Controls the visibility of the Terrain layer on the map.
         * - `visible(show: boolean)`: Shows or hides the Terrain layer.
         * @example
         * ```ts
         * map.Ui.Terrain.visible(true); // Show Terrain layer
         * map.Ui.Terrain.visible(false); // Hide Terrain layer
         * ```
         */
        Terrain: {
            /**
             * @function visible
             * @description Shows or hides the Terrain layer.
             * @param show - Whether to show (true) or hide (false) the Terrain layer.
             */
            visible: (show: boolean) => void;
        };
        /**
         * @property LayerSelector
         * @description Controls the visibility of the Layer Selector UI.
         */
        LayerSelector: {
            /**
             * @function visible
             * @description Shows or hides the Layer Selector.
             * @param show - Whether to show (true) or hide (false) the Layer Selector.
             */
            visible: (show: boolean) => void;
        };
        /**
         * @property Crosshair
         * @description Controls the visibility of the Crosshair UI.
         */
        Crosshair: {
            /**
             * @function visible
             * @description Shows or hides the Crosshair.
             * @param show - Whether to show (true) or hide (false) the Crosshair.
             */
            visible: (show: boolean) => void;
        };
        /**
         * @property Scale
         * @description Controls the visibility of the Scale UI.
         */
        Scale: {
            /**
             * @function visible
             * @description Shows or hides the Scale.
             * @param show - Whether to show (true) or hide (false) the Scale.
             */
            visible: (show: boolean) => void;
        };
        /**
         * @property ContextMenu
         * @description Controls the visibility of the Context Menu UI.
         */
        ContextMenu: {
            /**
             * @function visible
             * @description Shows or hides the Context Menu.
             * @param show - Whether to show (true) or hide (false) the Context Menu.
             */
            visible: (show: boolean) => void;
        };
        /**
         * @property FullScreen
         * @description Controls the visibility of the FullScreen UI.
         */
        FullScreen: {
            /**
             * @function visible
             * @description Shows or hides the FullScreen UI.
             * @param show - Whether to show (true) or hide (false) the FullScreen UI.
             */
            visible: (show: boolean) => void;
        };
    };
    /**
     * @function language
     * @description
     * Gets or sets the map's language.
     * - `language()`: Returns the current language code as a string.
     * - `language(lang: string)`: Sets the map's language to the specified code.
     * @param lang - The language code to set (optional).
     * @returns {void|string} Returns the current language code if called without arguments, otherwise void.
     * @example
     * ```ts
     * map.language(); // get current language
     * map.language("en"); // set language to English
     * ```
     */
    language: (lang?: string) => void | string;
    /**
     * @property lastview
     * @description
     * Indicates whether the map is in the last view state.
     * If `true`, it means the map is displaying the last viewed location and zoom level.
     * If `false`, it means the map is not in the last view state.
     * @default false
     */
    lastview?: boolean;
    /**
     * @property Renderer
     * @description
     * Provides access to the map's renderer for advanced customizations.
     */
    Renderer?: {
        [key: string]: any;
    };
}

interface PopupOptions {
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
    size?: ({
        width?: number;
        height?: number;
    } | 'auto');
    /**
     * Show close button.
     * @default true
     */
    closable?: boolean;
}

type CSSColor = string;
declare enum LineStyle {
    Solid = "solid",
    Dashed = "dashed",
    Dotted = "dotted"
}
interface Location {
    lat: number;
    lng: number;
    rotation?: number;
}
interface Range {
    minZoom: number;
    maxZoom: number;
}
interface MarkerOptions {
    labelOptions?: string;
}
interface Geometry {
    /**
     * @property title
     * The title of the geometry.
     */
    title?: string;
    /**
     * @property detail
     * The detail text of the geometry.
     * This is additional information displayed in the geometry.
     */
    detail?: string;
    /**
     * @property label
     * The label text of the geometry.
     * This is displayed at the pivot point of the geometry.
     */
    label?: string;
    /**
     * @property markerOptions
     * Options for the marker that shows at the pivot point of the geometry.
     * This can include custom icons, offsets, and other marker properties.
     * If not specified, the default marker will be used.
     * @default undefined
     * @example
     * {
     *   title: "My Geometry",
     *   icon: {
     *     url: "https://example.com/icon.png",
     *     offset: { x: 0, y: 0 },
     *     size: { width: 24, height: 24 }
     *   }
     * }
     */
    markerOptions?: MarkerOptions;
    /**
     * @property popup
     * Options for the popup that shows when the geometry is clicked.
     * This can include title, detail, and custom HTML content.
     * If not specified, the detail parameter will be used as the popup content.
     * @default undefined
     */
    popup?: PopupOptions;
    /**
     * @property style
     * Custom CSS styles for the geometry.
     * This can include colors, sizes, and other visual properties.
     * If not specified, default styles will be applied.
     * @default undefined
     */
    style?: any;
    visibleRange?: Range;
    /**
     * @property lineWidth
     * The width of the geometry's outline.
     * This is applicable for geometries like polygons and polylines.
     * @default 3
     */
    lineWidth?: number;
    /**
     * @property fillColor
     * The fill color of the geometry.
     * This is applicable for geometries like polygons.
     * If not specified, the geometry will not be filled.
     * @default undefined
     */
    lineColor?: CSSColor;
    /**
     *
     * @property fillColor
     * The fill color of the geometry.
     * This is applicable for geometries like polygons.
     * If not specified, the geometry will not be filled.
     * @default undefined
     *
     */
    fillColor?: CSSColor;
    /**
     *
     * @property lineStyle
     * The style of the geometry's outline.
     * This can be set to solid, dashed, or dotted.
     * If not specified, the default style is solid.
     * @default LineStyle.Solid
     */
    lineStyle?: LineStyle;
    pivot?: Location;
    clickable?: boolean;
    draggable?: boolean;
    pointer?: boolean;
    weight?: number;
}

interface LongdoMarkerProps {
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

declare namespace LongdoLayers {
    const NORMAL = "NORMAL";
    const SATELLITE = "SATELLITE";
    const HYBRID = "HYBRID";
    const TERRAIN = "TERRAIN";
    const DARK = "DARK";
    const TRAFFIC = "TRAFFIC";
    const POLITICAL = "POLITICAL";
    const POI = "POI";
}
declare namespace LongdoMap {
    interface MapConstructorOptions {
        placeholder: string | HTMLElement;
        options?: {
            lat?: number;
            lng?: number;
            zoom?: number;
            lastview?: boolean;
            language?: string;
        };
    }
    interface MapInstance extends Map {
    }
    interface Layers {
        NORMAL: string;
        SATELLITE: string;
        HYBRID: string;
        TERRAIN: string;
        DARK: string;
        TRAFFIC: string;
        POLITICAL: string;
        POI: string;
    }
    interface GeometryConstructor {
        new (data: any, options?: Geometry): any;
    }
    interface MarkerConstructor {
        new (location: {
            lon: number;
            lat: number;
        }, options?: LongdoMarkerProps): any;
    }
    interface PopupConstructor {
        new (options?: PopupOptions): any;
    }
}
interface LongdoGlobal {
    Map: {
        new (options: LongdoMap.MapConstructorOptions): LongdoMap.MapInstance;
    };
    Layers: LongdoMap.Layers;
    Geometry: LongdoMap.GeometryConstructor;
    Marker: LongdoMap.MarkerConstructor;
    Popup: LongdoMap.PopupConstructor;
    [key: string]: any;
}

export { type CSSColor, EventName, type GeoJSONFeature, type GeoJSONGeometry, type Geometry, LineStyle, type Location, LocationMode, type LongdoGlobal, LongdoLayers, LongdoMap, type LongdoMarkerProps, type Map, type MarkerOptions, type OverlaysClickEvent, type PopupOptions, type Range, LongdoMap as default };
