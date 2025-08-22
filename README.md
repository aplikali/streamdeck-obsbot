# OBSBOT Stream Deck Plugin

A Stream Deck plugin for controlling OBSBOT cameras, built by Aplikali. This plugin provides seamless integration between Elgato Stream Deck devices and OBSBOT cameras for enhanced streaming and content creation workflows.

## Overview

This plugin enables Stream Deck users to control their OBSBOT cameras directly from their Stream Deck device. Whether you're streaming, recording, or creating content, this plugin provides quick access to camera controls through customizable Stream Deck buttons.

## Technology Stack

### Core Technologies
- **TypeScript** - Primary development language for type safety and modern JavaScript features
- **Node.js 20** - Runtime environment for the plugin
- **Elgato Stream Deck SDK v2** - Official SDK for Stream Deck plugin development

### Build System
- **Rollup** - Module bundler for optimized builds
- **TypeScript Compiler** - Transpilation and type checking
- **Terser** - JavaScript minification for production builds

### UI Framework
- **HTML/CSS** - Property inspector interfaces
- **sdpi-components** - Elgato's UI component library for consistent Stream Deck styling

## Project Structure

```
streamdeck-obsbot/
├── src/                              # TypeScript source code
│   ├── plugin.ts                     # Main plugin entry point
│   └── actions/                      # Action implementations
│       └── increment-counter.ts      # Example counter action
├── com.aplikali.obsbot.sdPlugin/     # Plugin package directory
│   ├── manifest.json                 # Plugin metadata and configuration
│   ├── bin/                          # Compiled output
│   │   └── plugin.js                 # Built plugin bundle
│   ├── ui/                           # Property inspector HTML files
│   │   └── increment-counter.html    # Settings UI for counter action
│   └── imgs/                         # Plugin and action icons
│       ├── actions/counter/          # Counter action icons
│       └── plugin/                   # Plugin branding icons
├── package.json                      # Node.js dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
├── rollup.config.mjs                 # Build configuration
└── CLAUDE.md                         # Development guidelines
```

## Architecture

### Plugin Design Pattern
The plugin follows the Stream Deck SDK v2 architecture using a singleton action pattern:

- **Actions** extend `SingletonAction<SettingsType>` from `@elgato/streamdeck`
- **Decorators** use `@action({ UUID: "unique.identifier" })` for registration
- **Event Handlers** implement `onWillAppear()` and `onKeyDown()` for user interactions
- **State Management** uses `ev.action.setTitle()` and `ev.action.setSettings()` for persistence

### Action Lifecycle
1. **Registration** - Actions are registered in `src/plugin.ts`
2. **Appearance** - `onWillAppear()` sets initial display state
3. **Interaction** - `onKeyDown()` handles button presses
4. **Settings** - Property inspectors provide configuration interfaces

## Development

### Prerequisites
- Node.js 20 or later
- Elgato Stream Deck software
- Stream Deck CLI tools (`@elgato/cli`)

### Setup
```bash
# Install dependencies
npm install

# Build the plugin
npm run build

# Development with auto-reload
npm run watch
```

### Development Workflow
1. Modify TypeScript sources in `src/`
2. Use `npm run watch` for live development with automatic plugin reload
3. Test actions directly in Stream Deck software
4. Property inspector changes require Stream Deck software restart
5. Check logs in `com.aplikali.obsbot.sdPlugin/logs/` for debugging

### Build Process
- **Development**: Rollup builds with source maps and file watching
- **Production**: Minified bundle with Terser optimization
- **Auto-reload**: Watch mode includes `streamdeck restart com.aplikali.obsbot`

## Platform Support

### Supported Platforms
- **macOS** 12.0 or later
- **Windows** 10 or later

### Stream Deck Requirements
- Stream Deck software version 6.5 or later
- Compatible with all Stream Deck devices supporting SDK v2

## Configuration

### Manifest Configuration
The plugin is configured through `com.aplikali.obsbot.sdPlugin/manifest.json`:
- Plugin metadata (name, version, author)
- Action definitions with UUIDs and icons
- Platform compatibility requirements
- Node.js runtime configuration

### TypeScript Configuration
- Extends `@tsconfig/node20` for modern Node.js support
- ES2022 modules with bundler resolution
- Strict type checking enabled
- Custom path conditions for Node.js environment

## Contributing

When contributing to this project:

1. Follow the established TypeScript patterns
2. Maintain compatibility with Stream Deck SDK v2
3. Test changes with actual Stream Deck hardware
4. Ensure builds pass before submitting changes
5. Follow the coding conventions outlined in `CLAUDE.md`

## License

This project is developed by Aplikali for OBSBOT camera integration with Elgato Stream Deck devices.

## Support

For issues and support:
- Check the plugin logs in `com.aplikali.obsbot.sdPlugin/logs/`
- Verify Stream Deck software compatibility
- Ensure OBSBOT camera connectivity

---

*Built with ❤️ by Aplikali*