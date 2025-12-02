// src/Event.ts
var EventName = /* @__PURE__ */ ((EventName2) => {
  EventName2["BeforeContextmenu"] = "beforeContextmenu";
  EventName2["BeforeTagPopup"] = "beforeTagPopup";
  EventName2["Click"] = "click";
  EventName2["ConnectionError"] = "connectionError";
  EventName2["Contextmenu"] = "contextmenu";
  EventName2["DoubleClick"] = "doubleClick";
  EventName2["Drag"] = "drag";
  EventName2["DrawCreate"] = "drawCreate";
  EventName2["DrawDelete"] = "drawDelete";
  EventName2["Drop"] = "drop";
  EventName2["Fullscreen"] = "fullscreen";
  EventName2["Geolocation"] = "geolocation";
  EventName2["GeolocationError"] = "geolocationError";
  EventName2["GuideComplete"] = "guideComplete";
  EventName2["GuideError"] = "guideError";
  EventName2["Idle"] = "idle";
  EventName2["LayerChange"] = "layerChange";
  EventName2["Location"] = "location";
  EventName2["Mousemove"] = "mousemove";
  EventName2["OverlayChange"] = "overlayChange";
  EventName2["OverlayClick"] = "overlayClick";
  EventName2["OverlayDrag"] = "overlayDrag";
  EventName2["OverlayDrop"] = "overlayDrop";
  EventName2["OverlayHover"] = "overlayHover";
  EventName2["OverlayLeave"] = "overlayLeave";
  EventName2["OverlayLoad"] = "overlayLoad";
  EventName2["OverlayUpdate"] = "overlayUpdate";
  EventName2["PathAnimationEnd"] = "pathAnimationEnd";
  EventName2["Pitch"] = "pitch";
  EventName2["PopupClose"] = "popupClose";
  EventName2["Ready"] = "ready";
  EventName2["Repaint"] = "repaint";
  EventName2["Resize"] = "resize";
  EventName2["Rotate"] = "rotate";
  EventName2["ToolbarChange"] = "toolbarChange";
  EventName2["TooltipChange"] = "tooltipChange";
  EventName2["Wheel"] = "wheel";
  EventName2["Zoom"] = "zoom";
  EventName2["ZoomRange"] = "zoomRange";
  EventName2["loadTile"] = "loadTile";
  return EventName2;
})(EventName || {});
var LocationMode = /* @__PURE__ */ ((LocationMode2) => {
  LocationMode2["Pointer"] = "POINTER";
  LocationMode2["Geolocation"] = "GEOLOCATION";
  return LocationMode2;
})(LocationMode || {});

// src/Geometry.ts
var LineStyle = /* @__PURE__ */ ((LineStyle2) => {
  LineStyle2["Solid"] = "solid";
  LineStyle2["Dashed"] = "dashed";
  LineStyle2["Dotted"] = "dotted";
  return LineStyle2;
})(LineStyle || {});

// index.ts
var LongdoLayers;
((LongdoLayers2) => {
  LongdoLayers2.NORMAL = "NORMAL";
  LongdoLayers2.SATELLITE = "SATELLITE";
  LongdoLayers2.HYBRID = "HYBRID";
  LongdoLayers2.TERRAIN = "TERRAIN";
  LongdoLayers2.DARK = "DARK";
  LongdoLayers2.TRAFFIC = "TRAFFIC";
  LongdoLayers2.POLITICAL = "POLITICAL";
  LongdoLayers2.POI = "POI";
})(LongdoLayers || (LongdoLayers = {}));
export {
  EventName,
  LineStyle,
  LocationMode,
  LongdoLayers
};
//# sourceMappingURL=index.mjs.map