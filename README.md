# Atomic Design Certification Course — Level 6: Architecture

This level contains a hands-on demo for the [Atomic Design Certification Course](https://atomicdesigncourse.com/). This demo re-architects the project into a monorepo: the design tokens, the component library, and the application are split into three separate, independently publishable projects managed with npm workspaces. This branch is **Level 6: Architecture.**

## The Levels

The table below lists every level in the course. ✅ marks the level demoed in this branch.

| Level | What it covers | Branch | Live demo | Figma file |
|-------|----------------|--------|-----------|------------|
| 1: Static Designs | Plain, hand-written HTML pages and CSS. The starting point. | `level-1` | https://level-1--atomic-design-course-demo.netlify.app/ | [Level 1: Static Designs](https://www.figma.com/design/oiBxJSHAsREpgj8IHTV3kU/Level-1--Static-Designs?node-id=0-1&t=aLSiLJR1JxBpyBt4-1) |
| 2: Introduce Components | The first reusable Web Component (a site header), built with [Lit](https://lit.dev/). | `level-2` | https://level-2--atomic-design-course-demo.netlify.app/ | [Level 2: Introduce Components](https://www.figma.com/design/QFxkGSD3xkbaNN3CBHId3v/Level-2--Introduce-Components?node-id=2002-3&t=mB9lLrrT5TeTnPt8-1) |
| 3: Full Component Adoption | The rest of the pages are broken down into a proper Web Component library. | `level-3` | https://level-3--atomic-design-course-demo.netlify.app/ | [Level 3: Full Component Adoption](https://www.figma.com/design/hvZcOmRivyv82NusmXJfDE/Level-3--Full-Component-Adoption?node-id=2002-3&t=GJUu7ByXNsK2ALcA-1) |
| 4: Design Token Adoption | Design tokens and theming via [Style Dictionary](https://styledictionary.com/) (multiple themes). | `level-4` | https://level-4--atomic-design-course-demo.netlify.app/ | [Level 4: Design Token Adoption](https://www.figma.com/design/qtAAqCXiiR1Dm1TbpgGm25/Level-4--Design-Token-Adoption?node-id=0-1&t=LK0xB3ICNG46Ggb0-1) |
| 5: Documentation | A [Storybook](https://storybook.js.org/) workshop environment for developing and documenting components. | `level-5` | https://level-5--atomic-design-course-demo.netlify.app/ | [Level 5: Documentation](https://www.figma.com/design/Q0TZ2yuTj6uW6RX6eZLNeS/Level-5---Documentation?node-id=2-2&t=pHOLBRwIzHkzkVKM-1) |
| ✅ **6: Architecture** | Tokens, components, and the app split into separate projects in an npm-workspaces monorepo. | `level-6` | https://level-6--atomic-design-course-demo.netlify.app/ | [Level 6: Consuming App](https://www.figma.com/design/M62oGTP8XjGn9J7cAqvCcF/Level-6---Consuming-App?node-id=6-379&t=BZEUYmFhoZQEYg50-1) |
| 7: Consumption | Three consuming apps — [Eleventy](https://www.11ty.dev/), [React](https://react.dev/), and PHP — using the same design system. | `level-7` | https://level-7--atomic-design-course-demo.netlify.app/ | — |

> To switch to another level, check out its branch — for example `git checkout level-7`. The `main` branch is a landing page that links out to every demo above.

## What this level covers

This level builds on the Storybook workshop from Level 5 by **re-architecting** the design tokens, component library, and application into three separate projects, managed together as an npm-workspaces monorepo:

- **`our-company-design-tokens`** — houses the design system's design tokens.
- **`our-company-web-components`** — houses the component library.
- **`our-company-app`** — the application pages (`index.html`, `about.html`, etc.). In the real world this app would usually be a separate project that *consumes* the token and component packages; it lives in the monorepo here to demonstrate how the pieces come together.

Splitting them apart lets teams work on the interconnected tokens and components in tandem, while still being able to publish them as separate packages — so a downstream team that wants only the tokens (and not the components) can take just those.

[npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces) let you install dependencies once at the root of `atomic-design-course` and run each project's scripts from there, instead of navigating in and out of folders. The application pages are also added to Storybook (in `.storybook/pages` inside `our-company-web-components`) so you can prototype the pages and switch themes with the Storybook theme switcher without running the real app — making design-system development and testing faster.

## Running this level

Because the tokens and components now live in their own workspaces, install once at the root and the design tokens are built before Storybook starts. Run these commands one at a time:

1. Download the code libraries for every project in the monorepo (only needed once):

   ```
   npm install
   ```

2. Compile the design tokens for every theme from JSON into CSS Custom Properties. This must happen before you start Storybook so the components have the CSS they depend on:

   ```
   npm run build:tokens
   ```

3. Launch Storybook, the component workshop and documentation site:

   ```
   npm start
   ```

4. In a separate terminal, launch the consuming application:

   ```
   npm run start-app
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
