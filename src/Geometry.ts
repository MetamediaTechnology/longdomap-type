import { PopupOptions } from "./Popup";

export type CSSColor = string;

export enum LineStyle {
  Solid = "solid",
  Dashed = "dashed",
  Dotted = "dotted",
}

export interface Location {
  lat: number;
  lng: number;
  rotation?: number;
}

export interface Range {
  minZoom: number;
  maxZoom: number;
}

export interface MarkerOptions {
  labelOptions?: string;
}

export interface Geometry {
  /**
   * @property title
   * The title of the geometry.
   */
  title?: string; // Show title when hover
  /**
   * @property detail
   * The detail text of the geometry.
   * This is additional information displayed in the geometry.
   */
  detail?: string; // Show detail when click
  /**
   * @property label
   * The label text of the geometry.
   * This is displayed at the pivot point of the geometry.
   */
  label?: string; // Show label at pivot
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
  markerOptions?: MarkerOptions; // Show marker at pivot, override label parameter
  /**
   * @property popup
   * Options for the popup that shows when the geometry is clicked.
   * This can include title, detail, and custom HTML content.
   * If not specified, the detail parameter will be used as the popup content.
   * @default undefined
   */
  popup?: PopupOptions; // Show popup when click, override detail parameter
  /**
   * @property style
   * Custom CSS styles for the geometry.
   * This can include colors, sizes, and other visual properties.
   * If not specified, default styles will be applied.
   * @default undefined
   */
  style?: any; // Custom CSS styles
  visibleRange?: Range; // Visible range
  /**
   * @property lineWidth
   * The width of the geometry's outline.
   * This is applicable for geometries like polygons and polylines.
   * @default 3
   */
  lineWidth?: number; // Line width (default: 3)
  /**
   * @property fillColor
   * The fill color of the geometry.
   * This is applicable for geometries like polygons.
   * If not specified, the geometry will not be filled.
   * @default undefined
   */
  lineColor?: CSSColor; // Line color
  /**
   * 
   * @property fillColor
   * The fill color of the geometry.
   * This is applicable for geometries like polygons.
   * If not specified, the geometry will not be filled.
   * @default undefined
   * 
   */
  fillColor?: CSSColor; // Fill color
  /**
   *
   * @property lineStyle
   * The style of the geometry's outline.
   * This can be set to solid, dashed, or dotted.
   * If not specified, the default style is solid.
   * @default LineStyle.Solid
   */
  lineStyle?: LineStyle; // Line style (default: LineStyle.Solid)
  pivot?: Location; // Label location and rotation pivot
  clickable?: boolean; // Change cursor when hover (default: false)
  draggable?: boolean; // Allow user to drag this geometry (default: false)
  pointer?: boolean; // Show draggable pointer when hover (default: false)
  weight?: number; // Z height (default: 0)
}