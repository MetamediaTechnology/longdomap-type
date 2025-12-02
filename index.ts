// Import types to use in interfaces
import { Map } from './src/Map';
import { Geometry } from './src/Geometry';
import { LongdoMarkerProps } from './src/Marker';
import { PopupOptions } from './src/Popup';

// Export all interfaces and types
export * from './src/Map';
export * from './src/Event';
export * from './src/Geometry';
export * from './src/Marker';
export * from './src/Popup';

// Longdo Map Layer constants and enums
export namespace LongdoLayers {
  export const NORMAL = 'NORMAL';
  export const SATELLITE = 'SATELLITE';
  export const HYBRID = 'HYBRID';
  export const TERRAIN = 'TERRAIN';
  export const DARK = 'DARK';
  export const TRAFFIC = 'TRAFFIC';
  export const POLITICAL = 'POLITICAL';
  export const POI = 'POI';
}

// Main Longdo Map namespace that matches window.longdo
export namespace LongdoMap {
  export interface MapConstructorOptions {
    placeholder: string | HTMLElement;
    options?: {
      lat?: number;
      lng?: number;
      zoom?: number;
      lastview?: boolean;
      language?: string;
    };
  }

  export interface MapInstance extends Map {
    // Additional properties specific to Map instance
  }

  export interface Layers {
    NORMAL: string;
    SATELLITE: string; 
    HYBRID: string;
    TERRAIN: string;
    DARK: string;
    TRAFFIC: string;
    POLITICAL: string;
    POI: string;
  }

  export interface GeometryConstructor {
    new (data: any, options?: Geometry): any;
  }

  export interface MarkerConstructor {
    new (location: { lon: number; lat: number }, options?: LongdoMarkerProps): any;
  }

  export interface PopupConstructor {
    new (options?: PopupOptions): any;
  }
}

// Global window declaration for Longdo Map  
export interface LongdoGlobal {
  Map: {
    new (options: LongdoMap.MapConstructorOptions): LongdoMap.MapInstance;
  };
  Layers: LongdoMap.Layers;
  Geometry: LongdoMap.GeometryConstructor;
  Marker: LongdoMap.MarkerConstructor; 
  Popup: LongdoMap.PopupConstructor;
  [key: string]: any;
}

// Extend global window with proper typing
declare global {
  interface Window {
    longdo: LongdoGlobal;
  }
}

// Default export for common usage
export default LongdoMap;

// Re-export commonly used types for convenience
export type { Map } from './src/Map';
export type { EventName, LocationMode, GeoJSONFeature, OverlaysClickEvent } from './src/Event';
export type { Geometry, Location, Range, CSSColor, LineStyle } from './src/Geometry';
export type { LongdoMarkerProps } from './src/Marker';
export type { PopupOptions } from './src/Popup';
