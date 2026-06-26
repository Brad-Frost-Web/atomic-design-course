# Atomic Design Certification Course — Level 7: Consumption

This level contains a hands-on demo for the [Atomic Design Certification Course](https://atomicdesigncourse.com/). This demo shows the finished design system being consumed by three separate applications — built with [Eleventy](https://www.11ty.dev/), [React](https://react.dev/), and PHP — each pulling in the same token and component packages a different way. This branch is **Level 7: Consumption.**

## The Levels

The table below lists every level in the course. ✅ marks the level demoed in this branch.

| Level | What it covers | Branch | Live demo | Figma file |
|-------|----------------|--------|-----------|------------|
| 1: Static Designs | Plain, hand-written HTML pages and CSS. The starting point. | `level-1` | https://level-1--atomic-design-course-demo.netlify.app/ | [Level 1: Static Designs](https://www.figma.com/design/oiBxJSHAsREpgj8IHTV3kU/Level-1--Static-Designs?node-id=0-1&t=aLSiLJR1JxBpyBt4-1) |
| 2: Introduce Components | The first reusable Web Component (a site header), built with [Lit](https://lit.dev/). | `level-2` | https://level-2--atomic-design-course-demo.netlify.app/ | [Level 2: Introduce Components](https://www.figma.com/design/QFxkGSD3xkbaNN3CBHId3v/Level-2--Introduce-Components?node-id=2002-3&t=mB9lLrrT5TeTnPt8-1) |
| 3: Full Component Adoption | The rest of the pages are broken down into a proper Web Component library. | `level-3` | https://level-3--atomic-design-course-demo.netlify.app/ | [Level 3: Full Component Adoption](https://www.figma.com/design/hvZcOmRivyv82NusmXJfDE/Level-3--Full-Component-Adoption?node-id=2002-3&t=GJUu7ByXNsK2ALcA-1) |
| 4: Design Token Adoption | Design tokens and theming via [Style Dictionary](https://styledictionary.com/) (multiple themes). | `level-4` | https://level-4--atomic-design-course-demo.netlify.app/ | [Level 4: Design Token Adoption](https://www.figma.com/design/qtAAqCXiiR1Dm1TbpgGm25/Level-4--Design-Token-Adoption?node-id=0-1&t=LK0xB3ICNG46Ggb0-1) |
| 5: Documentation | A [Storybook](https://storybook.js.org/) workshop environment for developing and documenting components. | `level-5` | https://level-5--atomic-design-course-demo.netlify.app/ | [Level 5: Documentation](https://www.figma.com/design/Q0TZ2yuTj6uW6RX6eZLNeS/Level-5---Documentation?node-id=2-2&t=pHOLBRwIzHkzkVKM-1) |
| 6: Architecture | Tokens, components, and the app split into separate projects in an npm-workspaces monorepo. | `level-6` | https://level-6--atomic-design-course-demo.netlify.app/ | [Level 6: Consuming App](https://www.figma.com/design/M62oGTP8XjGn9J7cAqvCcF/Level-6---Consuming-App?node-id=6-379&t=BZEUYmFhoZQEYg50-1) |
| ✅ **7: Consumption** | Three consuming apps — [Eleventy](https://www.11ty.dev/), [React](https://react.dev/), and PHP — using the same design system. | `level-7` | https://level-7--atomic-design-course-demo.netlify.app/ | — |

> To switch to another level, check out its branch — for example `git checkout level-1`. The `main` branch is a landing page that links out to every demo above.

## What this level covers

This level builds on the Level 6 monorepo architecture by adding three **consuming applications** that show how different teams and technologies integrate the same design system. The design system packages (`our-company-design-tokens` and `our-company-web-components`) don't change — what changes is how each app pulls them in and uses them.

### The consuming apps

- **`our-company-app-eleventy`** — An [Eleventy](https://www.11ty.dev/) static site that uses passthrough copy to include the pre-built component bundle and token CSS. Demonstrates Web Components in a static site generator.
- **`our-company-app-react`** — A [React](https://react.dev/) app using Vite that imports the Web Components from source. Demonstrates Web Components in a modern JS framework with a bundler.
- **`our-company-app-php`** — A vanilla PHP app with zero build tools that copies the pre-built assets to a `public/vendor/` directory. Demonstrates that Web Components work everywhere, including legacy and server-rendered environments.

### Key changes from Level 6

- Added an `index.js` entry point and `vite.build.config.js` to `our-company-web-components` so the component library can be built into a single distributable bundle (`dist/our-company-web-components.js`).
- Added `build` and `build:components` scripts.
- Three new consuming-app workspaces.

## Running this level

Install once at the root, build the libraries, then start whichever app(s) you want to view. Run these commands one at a time:

1. Download the code libraries for every project in the monorepo (only needed once):

   ```
   npm install
   ```

2. Build the design tokens and the component library (so the apps have a bundle to consume):

   ```
   npm run build
   ```

3. Launch Storybook, the component workshop and documentation site:

   ```
   npm start
   ```

4. In a separate terminal, launch the original app from Level 6:

   ```
   npm run start-app
   ```

Then start whichever consuming app you'd like to view (each runs in its own terminal):

- Eleventy static site:

  ```
  npm run start:eleventy
  ```

- React app:

  ```
  npm run start:react
  ```

- PHP app (requires PHP installed):

  ```
  npm run start:php
  ```

### Building and publishing the library

When you're ready to package everything up rather than just run it locally:

- Prepare everything for distribution (builds the tokens, components, and Storybook together):

  ```
  npm run build
  ```

- Publish the design system packages (tokens and components) to npm:

  ```
  npm run publish
  ```
