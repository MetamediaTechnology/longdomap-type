"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongdoLayers = void 0;
// Export all interfaces and types
__exportStar(require("./src/Map"), exports);
__exportStar(require("./src/Event"), exports);
__exportStar(require("./src/Geometry"), exports);
__exportStar(require("./src/Marker"), exports);
__exportStar(require("./src/Popup"), exports);
// Longdo Map Layer constants and enums
var LongdoLayers;
(function (LongdoLayers) {
    LongdoLayers.NORMAL = 'NORMAL';
    LongdoLayers.SATELLITE = 'SATELLITE';
    LongdoLayers.HYBRID = 'HYBRID';
    LongdoLayers.TERRAIN = 'TERRAIN';
    LongdoLayers.DARK = 'DARK';
    LongdoLayers.TRAFFIC = 'TRAFFIC';
    LongdoLayers.POLITICAL = 'POLITICAL';
    LongdoLayers.POI = 'POI';
})(LongdoLayers || (exports.LongdoLayers = LongdoLayers = {}));
