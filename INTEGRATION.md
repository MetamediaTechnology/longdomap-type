# Integration Guide for longdo-map-vue

This guide shows how to integrate `@longdomap/types` into the `longdo-map-vue` library.

## Step 1: Install as Dependency

In `longdo-map-vue/package.json`:

```json
{
  "name": "longdo-map-vue",
  "dependencies": {
    "@longdomap/types": "^1.0.0",
    "vue": "^3.0.0"
  }
}
```

## Step 2: Re-export Types

Create `longdo-map-vue/src/types.ts`:

```typescript
// Re-export all types from @longdomap/types
export type {
  Map,
  EventName,
  LocationMode,
  Geometry,
  LongdoMarkerProps,
  PopupOptions,
  LongdoGlobal,
  Location,
  Range,
  CSSColor,
  LineStyle,
  GeoJSONFeature,
  OverlaysClickEvent,
  LongdoMap,
  LongdoLayers,
} from "@longdomap/types";

// Add Vue-specific types if needed
export interface VueLongdoMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  apiKey?: string;
  onMapReady?: (map: Map) => void;
}
```

## Step 3: Update Main Export

In `longdo-map-vue/src/index.ts`:

```typescript
// Export components
export { default as LongdoMap } from "./components/LongdoMap.vue";

// Export composables
export { useLongdoMap } from "./composables/useLongdoMap";

// Re-export ALL types so users don't need to install @longdomap/types
export type * from "./types";

// Export specific commonly used types for convenience
export type { Map as LongdoMapInstance } from "./types";
```

## Step 4: Type-safe Composable

Update `longdo-map-vue/src/composables/useLongdoMap.ts`:

```typescript
import type { Map, EventName, LongdoMap as LongdoMapTypes } from "../types";

export function useLongdoMap() {
  const createMap = (options: LongdoMapTypes.MapConstructorOptions): Map => {
    return new window.longdo.Map(options);
  };

  return { createMap };
}
```

## Step 5: End User Experience

After integration, users can:

```typescript
// Only install longdo-map-vue
npm install longdo-map-vue

// Use with full type support
import { useLongdoMap, type Map } from "longdo-map-vue";

const { createMap } = useLongdoMap();
let mapInstance: Map | null = null;

function onMapLoad(map: Map) {
  // Full IntelliSense support
  map.Layers.setBase(window.longdo.Layers.DARK);
  map.Ui.DPad.visible(false);
}
```

## Benefits

1. **Single Installation**: Users only install `longdo-map-vue`
2. **Full Type Safety**: All Longdo Map types available
3. **IntelliSense**: Complete autocomplete and documentation
4. **Maintainable**: Types are centralized in `@longdomap/types`
5. **Consistent**: Same types across all Longdo Map framework libraries
