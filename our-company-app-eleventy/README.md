# Consuming App — Eleventy + Web Components

This is a demonstration of how to build a static site with **Eleventy** that consumes a design system's **web components** and **design tokens**.

## Key Teaching Points

### No Framework Integration Required
Eleventy generates plain HTML files. The web components are just standard HTML custom elements — they work without any special integration or build-time transformation.

### Web Components Work Everywhere
Because custom elements are part of the platform, they work in static HTML, server-side rendered HTML, and anywhere else you can write HTML. No framework dependency.

### Simple Asset Pipeline
The build process:
1. **Tokens CSS** — Contains design system CSS custom properties (`--oc-theme-*`)
2. **Web Component JS** — A pre-built bundle of Lit components that register themselves as custom elements
3. **Eleventy HTML** — Uses the web components as HTML elements

The `eleventy.config.js` uses passthrough copy to pull the pre-built bundle and token CSS from `node_modules` into the final build.

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (watches for changes)
npm run start

# Build for production
npm run build

# Note: build the component library first from the root:
# npm run build:components
```

## What's Included

- **src/index.njk** — Homepage demonstrating header, hero, card grid, and footer components
- **src/pages/about.njk** — About page showing page-header and text-passage components
- **src/_includes/base.njk** — Base layout that loads tokens CSS and all component JavaScript

## Design System Dependencies

This app depends on:

- `@brad-frost-web/atomic-design-course-demo-web-components` — Lit-based custom elements
- `@brad-frost-web/atomic-design-course-demo-design-tokens` — CSS tokens and fonts

In a real-world setup, these would be installed from npm. In this monorepo demo, they resolve via npm workspaces.

## How It Works

1. **Build time** — Eleventy reads `.njk` templates, renders them to static `.html` files, and copies assets from `node_modules`
2. **Runtime** — The browser loads the resulting HTML, downloads the token CSS, and loads the web component modules
3. **Hydration** — Each component module registers its custom element with the browser, and the static HTML is now interactive

No client-side routing, no React/Vue integration — just the platform.
