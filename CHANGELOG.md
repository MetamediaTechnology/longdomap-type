# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-02

### Added

- Initial release of TypeScript definitions for Longdo Map
- Core interfaces: `Map`, `Event`, `Geometry`, `Marker`, `Popup`
- Global window declarations for `window.longdo`
- Event name enums and location mode types
- Comprehensive JSDoc documentation for all interfaces
- Support for both CommonJS and ES modules
- Layer constants and UI control interfaces
- Complete type coverage for map operations:
  - Zoom, location, and bound controls
  - Route management and search
  - Overlay management with animations
  - Event binding and handling
  - Layer and tag management
  - UI element visibility controls
  - Language settings

### Features

- Full TypeScript intellisense support
- Type-safe event handling
- Properly typed map constructor options
- Support for GeoJSON features
- Marker and popup configuration types
- Geometry styling and options
- Compatible with Vue, React, Angular frameworks

### Developer Experience

- Comprehensive README with usage examples
- Example files showing integration patterns
- Proper npm package structure with declaration files
- Support for both named and default imports
