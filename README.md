# atomic-design-course

Demo content for the Atomic Design Certification Course

# Atomic Design Certification Course Demos

Level 7 demo content for the Atomic Design Certification Course

## Overview and Directions

This demo builds on the Level 6 monorepo architecture by adding three **consuming applications** that demonstrate how different teams and technologies integrate the design system. The design system packages (`our-company-design-tokens` and `our-company-web-components`) are the same — what changes is how each app pulls them in and uses them.

### The Consuming Apps

- **`consuming-app-eleventy`** — An [Eleventy](https://www.11ty.dev/) static site that uses passthrough copy to include the pre-built component bundle and token CSS. Demonstrates: web components in a static site generator.
- **`consuming-app-react`** — A [React](https://react.dev/) app using Vite that imports the web components from source. Demonstrates: web components in a modern JS framework with a bundler.
- **`consuming-app-php`** — A vanilla PHP app with zero build tools. Copies the pre-built assets to a `public/vendor/` directory. Demonstrates: web components work everywhere, including legacy and server-rendered environments.

### Key Changes from Level 6

- Added `index.js` entry point and `vite.build.config.js` to `our-company-web-components` so the component library can be built into a single distributable bundle (`dist/our-company-web-components.js`)
- Added `build` and `build:components` scripts
- Three new consuming app workspaces

### Start the server

1. Install dependencies:

```
npm install
```

2. Build the design tokens and component library:

```
npm run build
```

3. To start the Storybook for the component library:

```
npm start
```

4. To start the original app (from Level 6):

```
npm run start-app
```

5. To start the Eleventy consuming app:

```
npm run start:eleventy
```

6. To start the React consuming app:

```
npm run start:react
```

7. To start the PHP consuming app (requires PHP installed):

```
npm run start:php
```
