# Atomic Design Certification Course — Level 2: Introduce Components

This level contains a hands-on demo for the [Atomic Design Certification Course](https://atomicdesigncourse.com/). This demo takes the first step toward a design system: it pulls the site header out of the static HTML and rebuilds it as a single reusable Web Component, beginning the process of breaking the pages down into a component library. This branch is **Level 2: Introduce Components.**

## The Levels

The table below lists every level in the course. ✅ marks the level demoed in this branch.

| Level | What it covers | Branch | Live demo | Figma file |
|-------|----------------|--------|-----------|------------|
| 1: Static Designs | Plain, hand-written HTML pages and CSS. The starting point. | `level-1` | https://level-1--atomic-design-course-demo.netlify.app/ | [Level 1: Static Designs](https://www.figma.com/design/oiBxJSHAsREpgj8IHTV3kU/Level-1--Static-Designs?node-id=0-1&t=aLSiLJR1JxBpyBt4-1) |
| ✅ **2: Introduce Components** | The first reusable Web Component (a site header), built with [Lit](https://lit.dev/). | `level-2` | https://level-2--atomic-design-course-demo.netlify.app/ | [Level 2: Introduce Components](https://www.figma.com/design/QFxkGSD3xkbaNN3CBHId3v/Level-2--Introduce-Components?node-id=2002-3&t=mB9lLrrT5TeTnPt8-1) |
| 3: Full Component Adoption | The rest of the pages are broken down into a proper Web Component library. | `level-3` | https://level-3--atomic-design-course-demo.netlify.app/ | [Level 3: Full Component Adoption](https://www.figma.com/design/hvZcOmRivyv82NusmXJfDE/Level-3--Full-Component-Adoption?node-id=2002-3&t=GJUu7ByXNsK2ALcA-1) |
| 4: Design Token Adoption | Design tokens and theming via [Style Dictionary](https://styledictionary.com/) (multiple themes). | `level-4` | https://level-4--atomic-design-course-demo.netlify.app/ | [Level 4: Design Token Adoption](https://www.figma.com/design/qtAAqCXiiR1Dm1TbpgGm25/Level-4--Design-Token-Adoption?node-id=0-1&t=LK0xB3ICNG46Ggb0-1) |
| 5: Documentation | A [Storybook](https://storybook.js.org/) workshop environment for developing and documenting components. | `level-5` | https://level-5--atomic-design-course-demo.netlify.app/ | [Level 5: Documentation](https://www.figma.com/design/Q0TZ2yuTj6uW6RX6eZLNeS/Level-5---Documentation?node-id=2-2&t=pHOLBRwIzHkzkVKM-1) |
| 6: Architecture | Tokens, components, and the app split into separate projects in an npm-workspaces monorepo. | `level-6` | https://level-6--atomic-design-course-demo.netlify.app/ | [Level 6: Consuming App](https://www.figma.com/design/M62oGTP8XjGn9J7cAqvCcF/Level-6---Consuming-App?node-id=6-379&t=BZEUYmFhoZQEYg50-1) |
| 7: Consumption | Three consuming apps — [Eleventy](https://www.11ty.dev/), [React](https://react.dev/), and PHP — using the same design system. | `level-7` | https://level-7--atomic-design-course-demo.netlify.app/ | — |

> To switch to another level, check out its branch — for example `git checkout level-3`. The `main` branch is a landing page that links out to every demo above.

## What this level covers

This level introduces the concept of **consumable components** and starts breaking the static `.html` pages down into a proper component library.

- The components are built with [Lit](https://lit.dev/), a lightweight Web Component framework. Web Components were chosen because they're native to the web and can be consumed by many frameworks (React, Angular, Vue, etc.).
- A `package.json` is added so you can install dependencies and run a small local server. The server matters because the components are loaded as JavaScript modules, which browsers won't load directly off the file system (`file://`).
- The first component is a **site header**, which lives in the `components` directory and is pulled into each page with a `<script>` tag in the `.html` files.

## Running this level

Because this level loads its component as a JavaScript module, it needs a small local server rather than opening the file directly. Run these commands one at a time:

1. Download the project's code libraries into a `node_modules` folder (only needed once):

   ```
   npm install
   ```

2. Start a small local web server and serve the site:

   ```
   npm start
   ```

Then open the URL printed in your terminal.
