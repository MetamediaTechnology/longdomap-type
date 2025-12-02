// Export all interfaces and types
export * from './src/Map';
export * from './src/Event';
export * from './src/Geometry';
export * from './src/Marker';
export * from './src/Popup';
// Longdo Map Layer constants and enums
export var LongdoLayers;
(function (LongdoLayers) {
    LongdoLayers.NORMAL = 'NORMAL';
    LongdoLayers.SATELLITE = 'SATELLITE';
    LongdoLayers.HYBRID = 'HYBRID';
    LongdoLayers.TERRAIN = 'TERRAIN';
    LongdoLayers.DARK = 'DARK';
    LongdoLayers.TRAFFIC = 'TRAFFIC';
    LongdoLayers.POLITICAL = 'POLITICAL';
    LongdoLayers.POI = 'POI';
})(LongdoLayers || (LongdoLayers = {}));
