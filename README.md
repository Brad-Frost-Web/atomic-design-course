# Atomic Design Certification Course — Level 5: Documentation

This level contains a hands-on demo for the [Atomic Design Certification Course](https://atomicdesigncourse.com/). This demo adds [Storybook](https://storybook.js.org/), a workshop environment where each component is developed, viewed, and documented in isolation — with its variants, usage, and themes — before it's packaged up for downstream users. This branch is **Level 5: Documentation.**

## The Levels

The table below lists every level in the course. ✅ marks the level demoed in this branch.

| Level | What it covers | Branch | Live demo | Figma file |
|-------|----------------|--------|-----------|------------|
| 1: Static Designs | Plain, hand-written HTML pages and CSS. The starting point. | `level-1` | https://level-1--atomic-design-course-demo.netlify.app/ | [Level 1: Static Designs](https://www.figma.com/design/oiBxJSHAsREpgj8IHTV3kU/Level-1--Static-Designs?node-id=0-1&t=aLSiLJR1JxBpyBt4-1) |
| 2: Introduce Components | The first reusable Web Component (a site header), built with [Lit](https://lit.dev/). | `level-2` | https://level-2--atomic-design-course-demo.netlify.app/ | [Level 2: Introduce Components](https://www.figma.com/design/QFxkGSD3xkbaNN3CBHId3v/Level-2--Introduce-Components?node-id=2002-3&t=mB9lLrrT5TeTnPt8-1) |
| 3: Full Component Adoption | The rest of the pages are broken down into a proper Web Component library. | `level-3` | https://level-3--atomic-design-course-demo.netlify.app/ | [Level 3: Full Component Adoption](https://www.figma.com/design/hvZcOmRivyv82NusmXJfDE/Level-3--Full-Component-Adoption?node-id=2002-3&t=GJUu7ByXNsK2ALcA-1) |
| 4: Design Token Adoption | Design tokens and theming via [Style Dictionary](https://styledictionary.com/) (multiple themes). | `level-4` | https://level-4--atomic-design-course-demo.netlify.app/ | [Level 4: Design Token Adoption](https://www.figma.com/design/qtAAqCXiiR1Dm1TbpgGm25/Level-4--Design-Token-Adoption?node-id=0-1&t=LK0xB3ICNG46Ggb0-1) |
| ✅ **5: Documentation** | A [Storybook](https://storybook.js.org/) workshop environment for developing and documenting components. | `level-5` | https://level-5--atomic-design-course-demo.netlify.app/ | [Level 5: Documentation](https://www.figma.com/design/Q0TZ2yuTj6uW6RX6eZLNeS/Level-5---Documentation?node-id=2-2&t=pHOLBRwIzHkzkVKM-1) |
| 6: Architecture | Tokens, components, and the app split into separate projects in an npm-workspaces monorepo. | `level-6` | https://level-6--atomic-design-course-demo.netlify.app/ | [Level 6: Consuming App](https://www.figma.com/design/M62oGTP8XjGn9J7cAqvCcF/Level-6---Consuming-App?node-id=6-379&t=BZEUYmFhoZQEYg50-1) |
| 7: Consumption | Three consuming apps — [Eleventy](https://www.11ty.dev/), [React](https://react.dev/), and PHP — using the same design system. | `level-7` | https://level-7--atomic-design-course-demo.netlify.app/ | — |

> To switch to another level, check out its branch — for example `git checkout level-6`. The `main` branch is a landing page that links out to every demo above.

## What this level covers

This level builds on the tokens from Level 4 by adding a [Storybook](https://storybook.js.org/) workshop environment around the component library.

- Storybook lets you view the components in an organized way, see their variants and usage, and test them in isolation before they get packaged up and installed by downstream users.
- It also serves as living **documentation** for the design system.
- Note: because Storybook uses [Vite](https://vite.dev/) as its build tool, the component CSS imports are adjusted to use `?inline` instead of the import style used in earlier levels.

## Running this level

This level runs two things: the Storybook workshop and the example app. Run these commands one at a time:

1. Download the project's code libraries (only needed once):

   ```
   npm install
   ```

2. Compile the design tokens for every theme from JSON into CSS Custom Properties:

   ```
   npm run build:tokens
   ```

3. Launch Storybook, the component workshop and documentation site:

   ```
   npm start
   ```

4. In a separate terminal, launch the example app:

   ```
   npm run start-app
   ```

Then open the URL printed in your terminal for each.
