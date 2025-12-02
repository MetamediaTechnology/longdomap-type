import { Map } from './src/Map';
import { Geometry } from './src/Geometry';
import { LongdoMarkerProps } from './src/Marker';
import { PopupOptions } from './src/Popup';
export * from './src/Map';
export * from './src/Event';
export * from './src/Geometry';
export * from './src/Marker';
export * from './src/Popup';
export declare namespace LongdoLayers {
    const NORMAL = "NORMAL";
    const SATELLITE = "SATELLITE";
    const HYBRID = "HYBRID";
    const TERRAIN = "TERRAIN";
    const DARK = "DARK";
    const TRAFFIC = "TRAFFIC";
    const POLITICAL = "POLITICAL";
    const POI = "POI";
}
export declare namespace LongdoMap {
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
declare global {
    interface Window {
        longdo: LongdoGlobal;
    }
}
export default LongdoMap;
export type { Map } from './src/Map';
export type { EventName, LocationMode, GeoJSONFeature, OverlaysClickEvent } from './src/Event';
export type { Geometry, Location, Range, CSSColor, LineStyle } from './src/Geometry';
export type { LongdoMarkerProps } from './src/Marker';
export type { PopupOptions } from './src/Popup';
