# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stream Deck Plugin Architecture

This is an Elgato Stream Deck plugin for OBSBOT camera control. The plugin follows the Stream Deck SDK v2 architecture:

### Core Structure
- **Entry Point**: `src/plugin.ts` - Registers actions and connects to Stream Deck
- **Actions**: `src/actions/` - Individual button actions that extend `SingletonAction`
- **Plugin Package**: `com.aplikali.obsbot.sdPlugin/` - Contains compiled output, manifest, UI, and assets
- **Built Output**: `com.aplikali.obsbot.sdPlugin/bin/plugin.js` - Compiled TypeScript bundle

### Action Implementation Pattern
Actions are TypeScript classes that:
1. Extend `SingletonAction<SettingsType>` from `@elgato/streamdeck`
2. Use `@action({ UUID: "unique.identifier" })` decorator
3. Implement `onWillAppear()` for initial display setup
4. Implement `onKeyDown()` for button press handling
5. Use `ev.action.setTitle()` and `ev.action.setSettings()` for state management

### Property Inspector (Settings UI)
- HTML files in `com.aplikali.obsbot.sdPlugin/ui/` provide settings interfaces
- Uses `sdpi-components` library for consistent UI elements
- Settings are automatically synchronized between plugin and UI

## Development Commands

### Build and Development
```bash
npm run build          # Compile TypeScript to plugin bundle
npm run watch          # Build with file watching and auto-restart
```

The watch command includes `streamdeck restart com.aplikali.obsbot` for automatic plugin reload during development.

### Build System Details
- **Bundler**: Rollup with TypeScript, CommonJS, and Node.js resolution
- **Output**: ES modules with conditional source maps in development
- **Target**: Node.js 20 environment as specified in manifest
- **Optimization**: Terser minification in production builds

## Plugin Configuration

### Manifest Structure (`com.aplikali.obsbot.sdPlugin/manifest.json`)
- Plugin metadata and Stream Deck compatibility requirements
- Action definitions with UUIDs, icons, tooltips, and property inspector paths
- Node.js runtime configuration (v20 with debug enabled)
- Platform support for macOS 12+ and Windows 10+

### TypeScript Configuration
- Extends `@tsconfig/node20` baseline
- ES2022 modules with bundler resolution
- Includes all `src/**/*.ts` files
- Custom conditions for Node.js environment

## File Organization

```
src/
├── plugin.ts              # Main plugin entry point
└── actions/
    └── increment-counter.ts

com.aplikali.obsbot.sdPlugin/
├── manifest.json           # Plugin configuration
├── bin/plugin.js          # Compiled output
├── ui/                    # Property inspector HTML
└── imgs/                  # Plugin and action icons
```

## Development Workflow

1. Modify TypeScript sources in `src/`
2. Use `npm run watch` for live development with auto-reload
3. Test actions directly in Stream Deck software
4. Property inspector changes require Stream Deck restart
5. Check logs in `com.aplikali.obsbot.sdPlugin/logs/` for debugging