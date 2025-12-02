# Longdo Map TypeScript Definitions

Internal TypeScript type definitions for Longdo Map libraries. This package provides shared types for longdo-map-vue, longdo-map-react and other Longdo Map framework integrations.

> **Note**: This is an internal package used by Longdo Map framework libraries. End users should install framework-specific packages like `longdo-map-vue` instead of this package directly.

## For Library Developers

If you're developing a Longdo Map integration library, you can use this package as a dependency:

```bash
npm install longdomap-type
```

## Usage in Libraries

### Integration Example (for longdo-map-vue)

```typescript
// In your library's types file
export type {
  Map,
  EventName,
  LongdoGlobal,
  LongdoMarkerProps,
  PopupOptions,
} from "longdomap-type";

// In your composable/hook
import type { Map, EventName } from "longdomap-type";

export function useLongdoMap() {
  const createMap = (options: any): Map => {
    return new window.longdo.Map(options);
  };

  const bindEvent = (map: Map, event: EventName, callback: Function) => {
    map.Event.bind(event, callback);
  };

  return { createMap, bindEvent };
}
```

### Re-exporting Types

```typescript
// In your library's main index file
export type {
  Map as LongdoMapInstance,
  EventName as LongdoEventName,
  LongdoMarkerProps,
  PopupOptions,
} from "longdomap-type";
```

## Usage

### Basic Usage

```typescript
import { Map, EventName, LongdoLayers } from "longdomap-type";

let mapInstance: Map | null = null;

function onMapLoad(map: Map) {
  mapInstance = map;

  // Set dark theme
  map.Layers.setBase(window.longdo.Layers.DARK);

  // Hide UI elements
  map.Ui.DPad.visible(false);
  map.Ui.Zoombar.visible(false);
  map.Ui.LayerSelector.visible(false);
  map.Ui.Geolocation.visible(false);
  map.Ui.Crosshair.visible(false);

  // Bind events with proper typing
  map.Event.bind(EventName.Click, (event) => {
    console.log("Map clicked at:", event.location);
  });
}
```

## End User Experience

When you integrate this into your library (e.g., longdo-map-vue), end users will get:

```typescript
// End users only install longdo-map-vue
import { useLongdoMap } from "longdo-map-vue";
import type { Map } from "longdo-map-vue"; // Types come from your library

const { createMap } = useLongdoMap();
let mapInstance: Map | null = null;

function onMapLoad(map: Map) {
  mapInstance = map;

  // Full TypeScript support
  map.Layers.setBase(window.longdo.Layers.DARK);
  map.Ui.DPad.visible(false);
  map.zoom(15);
  map.location({ lon: 100.5, lat: 13.7 });
}
```

### Global Window Types

The package automatically extends the global `window` object:

```typescript
// window.longdo is now fully typed
const map = new window.longdo.Map({
  placeholder: "map-container",
  options: {
    lat: 13.7,
    lng: 100.5,
    zoom: 10,
  },
});
```

## Available Types

### Core Interfaces

- `Map` - Main map interface with all methods and properties
- `EventName` - Enum of all available map events
- `LocationMode` - Location mode options
- `Geometry` - Geometry interface for shapes and overlays
- `LongdoMarkerProps` - Marker properties interface
- `PopupOptions` - Popup configuration interface

### Utility Types

- `Location` - Lat/lng coordinate interface
- `Range` - Min/max range interface
- `CSSColor` - CSS color type
- `LineStyle` - Line style options
- `GeoJSONFeature` - GeoJSON feature interface

### Namespaces

- `LongdoMap` - Main namespace with constructors and options
- `LongdoLayers` - Layer constants
- `LongdoGlobal` - Global window.longdo interface

## Example Usage in Libraries

For library developers integrating Longdo Map with frameworks:

```typescript
// your-longdo-wrapper.ts
import type { Map, EventName } from "longdomap-type";

export interface MapWrapperProps {
  onMapReady?: (map: Map) => void;
  center?: { lat: number; lng: number };
  zoom?: number;
}

export class MapWrapper {
  private map: Map | null = null;

  constructor(private options: MapWrapperProps) {
    this.initMap();
  }

  private initMap() {
    this.map = new window.longdo.Map({
      placeholder: "map-container",
      options: {
        lat: this.options.center?.lat || 13.7,
        lng: this.options.center?.lng || 100.5,
        zoom: this.options.zoom || 10,
      },
    });

    if (this.options.onMapReady) {
      this.options.onMapReady(this.map);
    }
  }

  public getMap(): Map | null {
    return this.map;
  }
}
```

## License

ISC

## Contributing

This package provides TypeScript definitions for the Longdo Map JavaScript library. If you find missing or incorrect type definitions, please submit an issue or pull request.
