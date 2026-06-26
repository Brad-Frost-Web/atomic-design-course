# Atomic Design Certification Course — Demos

This repository contains the hands-on demo content for the [**Atomic Design Certification Course**](https://atomicdesigncourse.com/). This demo shows how the Atomic Design methodology is used to take a simple set of static HTML pages and transform them into a full design system that is documented, published, and consumed by real applications.

Each **level** lives on its own git branch and is deployed as its own live website. As you progress through the course, you can check out each branch to see the state of the project at that stage.

## The Levels

| Level | What it covers | Branch | Live demo | Figma file |
|-------|----------------|--------|-----------|------------|
| **1: Static Designs** | Plain, hand-written HTML pages and CSS. The starting point. | `level-1` | https://level-1--atomic-design-course-demo.netlify.app/ | [Level 1: Static Designs](https://www.figma.com/design/oiBxJSHAsREpgj8IHTV3kU/Level-1--Static-Designs?node-id=0-1&t=aLSiLJR1JxBpyBt4-1) |
| **2: Introduce Components** | The first reusable Web Component (a site header), built with [Lit](https://lit.dev/). | `level-2` | https://level-2--atomic-design-course-demo.netlify.app/ | [Level 2: Introduce Components](https://www.figma.com/design/QFxkGSD3xkbaNN3CBHId3v/Level-2--Introduce-Components?node-id=2002-3&t=mB9lLrrT5TeTnPt8-1) |
| **3: Full Component Adoption** | The rest of the pages are broken down into a proper Web Component library. | `level-3` | https://level-3--atomic-design-course-demo.netlify.app/ | [Level 3: Full Component Adoption](https://www.figma.com/design/hvZcOmRivyv82NusmXJfDE/Level-3--Full-Component-Adoption?node-id=2002-3&t=GJUu7ByXNsK2ALcA-1) |
| **4: Design Token Adoption** | Design tokens and theming via [Style Dictionary](https://styledictionary.com/) (multiple themes). | `level-4` | https://level-4--atomic-design-course-demo.netlify.app/ | [Level 4: Design Token Adoption](https://www.figma.com/design/qtAAqCXiiR1Dm1TbpgGm25/Level-4--Design-Token-Adoption?node-id=0-1&t=LK0xB3ICNG46Ggb0-1) |
| **5: Documentation** | A [Storybook](https://storybook.js.org/) workshop environment for developing and documenting components. | `level-5` | https://level-5--atomic-design-course-demo.netlify.app/ | [Level 5: Documentation](https://www.figma.com/design/Q0TZ2yuTj6uW6RX6eZLNeS/Level-5---Documentation?node-id=2-2&t=pHOLBRwIzHkzkVKM-1) |
| **6: Architecture** | Tokens, components, and the app split into separate projects in an npm-workspaces monorepo. | `level-6` | https://level-6--atomic-design-course-demo.netlify.app/ | [Level 6: Consuming App](https://www.figma.com/design/M62oGTP8XjGn9J7cAqvCcF/Level-6---Consuming-App?node-id=6-379&t=BZEUYmFhoZQEYg50-1) |
| **7: Consumption** | Three consuming apps — [Eleventy](https://www.11ty.dev/), [React](https://react.dev/), and PHP — using the same design system. | `level-7` | https://level-7--atomic-design-course-demo.netlify.app/ | — |

> The `main` branch (this one) is a landing page that links out to every demo above.

## Getting the Code onto Your Computer

You don't need to be a git expert to follow along. Below are step-by-step instructions. You only need to do the one-time setup once; after that, switching between levels takes a single command.

### One-time setup

1. **Install git** (if you don't already have it). Open your **Terminal** (macOS/Linux) or **Git Bash** (Windows) and type:

   ```
   git --version
   ```

   If you see a version number, you're all set. If not, download git from [git-scm.com/downloads](https://git-scm.com/downloads) and install it.

2. **Download (clone) this repository.** Pick a folder where you'd like the project to live, then run:

   ```
   git clone https://github.com/Brad-Frost-Web/atomic-design-course.git
   ```

3. **Move into the project folder in your Terminal(macOS/Linux) or Git Bash (Windows):**

   ```
   cd atomic-design-course
   ```

## Switching Between Levels (Branches)

Each level is a **branch**. Think of a branch as a separate snapshot in the timeline of the project. You switch to a level by "checking out" its branch.

1. **See all the available levels:**

   ```
   git branch -a
   ```

   You'll see entries like `remotes/origin/level-1`, `remotes/origin/level-2`, and so on.

2. **Switch to the level you want.** For example, to view Level 3:

   ```
   git checkout level-3
   ```

   (Replace `level-3` with `level-1` through `level-7` for any other level.)

3. **Confirm where you are** at any time:

   ```
   git branch
   ```

   The branch with the `*` next to it is the one you're currently on.

4. **Get the latest version of a level** (in case it was updated):

   ```
   git pull
   ```

> **Tip:** Before switching branches, make sure you don't have unsaved changes. If git won't let you switch, run `git stash` to set your changes aside, switch branches, and run `git stash pop` later to bring them back.

## Need to install Node.js?

Levels 2–7 use [Node.js](https://nodejs.org/) (which includes `npm`) to install dependencies and run their build and server commands. Level 1 is plain HTML and doesn't need it. If `npm install` doesn't work, download and install the **LTS** version of Node.js from [nodejs.org](https://nodejs.org/), then try again.

## Running a Level Locally

What you need to do depends on the level. First, **make sure you're on the branch for the level you want to run.** Check which branch you're currently on with:

```
git branch --show-current
```

The branch listed will be the one that you're on. If it's not the level you want, switch to it with a different level`git checkout level-3` (see [Switching Between Levels](#switching-between-levels-branches) above).

### Level 1 — open the files

Open `index.html` in your web browser (double-click the file, or drag it into a browser window). No installation or server needed.

### Levels 2–3 — start a small server

Levels 2 and 3 build the pages out of Web Components, which load as JavaScript modules that browsers won't load directly off the file system. They're best viewed through a small local server. Run these commands one at a time:

1. Download the project's code libraries into a `node_modules` folder (only needed once):

   ```
   npm install
   ```

2. Start a small local web server and serve the site:

   ```
   npm start
   ```

Then open the URL printed in your terminal.

### Level 4 — build the design tokens first

Level 4 adds design tokens (in a JSON format), which must be compiled into CSS before the site will display correctly. Run these commands one at a time:

1. Download the project's code libraries (only needed once):

   ```
   npm install
   ```

2. Compile the design tokens from JSON into CSS the components can use:

   ```
   npm run build:tokens
   ```

3. Start the local web server and serve the site:

   ```
   npm start
   ```

### Level 5 — add Storybook

Level 5 introduces [Storybook](https://storybook.js.org/), a workshop environment for developing and documenting components. Run the following commands to get it setup properly:

1. Download the project's code libraries (only needed once):

   ```
   npm install
   ```

2. Compile the design tokens from JSON into CSS the components can use:

   ```
   npm run build:tokens
   ```

3. Launch Storybook, the component workshop and documentation site:

   ```
   npm start
   ```

### Level 6 — separate projects in a monorepo

Level 6 splits the design tokens, the components, and the application into their own folders — `our-company-design-tokens`, `our-company-web-components`, and `our-company-app` — managed together as an npm-workspaces monorepo. Run these commands one at a time:

1. Download the code libraries for every project in the monorepo (only needed once):

   ```
   npm install
   ```

2. Build the design tokens. This must happen before you start Storybook so the components have the CSS they depend on:

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

#### Building and publishing the library

When you're ready to package everything up rather than just run it locally:

- Prepare everything for distribution (builds the tokens, components, and Storybook together):

  ```
  npm run build
  ```

- Publish the design system packages to npm:

  ```
  npm run publish
  ```

### Level 7 — multiple consuming apps

Level 7 adds three different applications that all consume the same design system. Run these commands one at a time:

1. Download the code libraries for every project in the monorepo (only needed once):

   ```
   npm install
   ```

2. Build all of the projects (compiles the tokens and the component library so the apps can use them):

   ```
   npm run build
   ```

Then start whichever app you'd like to view (each runs in its own terminal):

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

#### Building and publishing the library

When you're ready to package everything up rather than just run it locally:

- Prepare everything for distribution (builds the tokens, components, and Storybook together):

  ```
  npm run build
  ```

- Publish the design system packages to npm:

  ```
  npm run publish
  ```

> Every level has its own `README.md` with directions specific to that level. Once you've checked out a branch, read its README for the exact steps.
