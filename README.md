# Atomic Design Certification Course — Demos

This repository contains the hands-on demo content for the **Atomic Design Certification Course**. It tells one continuous story: how a simple set of static HTML pages evolves, step by step, into a full design system that is documented, architected into separate packages, and consumed by real applications.

Each **level** lives on its own git branch and is deployed as its own live website. As you progress through the course, you can check out each branch to see — and run — the exact state of the project at that stage.

## The Levels

| Level | What it covers | Live demo | Figma file |
|-------|----------------|-----------|------------|
| **1: Static Designs** | Plain, hand-written HTML pages and CSS. The starting point. | https://level-1--atomic-design-course-demo.netlify.app/ | [Level 1: Static Designs](https://www.figma.com/design/oiBxJSHAsREpgj8IHTV3kU/Level-1--Static-Designs?node-id=0-1&t=aLSiLJR1JxBpyBt4-1) |
| **2: Introduce Components** | The first reusable Web Component (a site header), built with [Lit](https://lit.dev/). | https://level-2--atomic-design-course-demo.netlify.app/ | [Level 2: Introduce Components](https://www.figma.com/design/QFxkGSD3xkbaNN3CBHId3v/Level-2--Introduce-Components?node-id=2002-3&t=mB9lLrrT5TeTnPt8-1) |
| **3: Full Component Adoption** | The rest of the pages are broken down into a proper Web Component library. | https://level-3--atomic-design-course-demo.netlify.app/ | [Level 3: Full Component Adoption](https://www.figma.com/design/hvZcOmRivyv82NusmXJfDE/Level-3--Full-Component-Adoption?node-id=2002-3&t=GJUu7ByXNsK2ALcA-1) |
| **4: Design Token Adoption** | Design tokens and theming via [Style Dictionary](https://styledictionary.com/) (multiple themes). | https://level-4--atomic-design-course-demo.netlify.app/ | [Level 4: Design Token Adoption](https://www.figma.com/design/qtAAqCXiiR1Dm1TbpgGm25/Level-4--Design-Token-Adoption?node-id=0-1&t=LK0xB3ICNG46Ggb0-1) |
| **5: Documentation** | A [Storybook](https://storybook.js.org/) workshop environment for developing and documenting components. | https://level-5--atomic-design-course-demo.netlify.app/ | [Level 5: Documentation](https://www.figma.com/design/Q0TZ2yuTj6uW6RX6eZLNeS/Level-5---Documentation?node-id=2-2&t=pHOLBRwIzHkzkVKM-1) |
| **6: Architecture** | Tokens, components, and the app split into separate projects in an npm-workspaces monorepo. | https://level-6--atomic-design-course-demo.netlify.app/ | [Level 6: Consuming App](https://www.figma.com/design/M62oGTP8XjGn9J7cAqvCcF/Level-6---Consuming-App?node-id=6-379&t=BZEUYmFhoZQEYg50-1) |
| **7: Consumption** | Three consuming apps — [Eleventy](https://www.11ty.dev/), [React](https://react.dev/), and PHP — using the same design system. | https://level-7--atomic-design-course-demo.netlify.app/ | — |

> The `main` branch (this one) is a landing page that links out to every demo above.

## Getting the Code onto Your Computer

You don't need to be a git expert to follow along. Below are step-by-step instructions. You only need to do the one-time setup once; after that, switching between levels takes a single command.

### One-time setup

1. **Install git** (if you don't already have it). Open your **Terminal** (macOS/Linux) or **Git Bash** (Windows) and type:

   ```
   git --version
   ```

   If you see a version number, you're set. If not, download git from [git-scm.com/downloads](https://git-scm.com/downloads) and install it.

2. **Download (clone) this repository.** Pick a folder where you'd like the project to live, then run:

   ```
   git clone https://github.com/Brad-Frost-Web/atomic-design-course.git
   ```

3. **Move into the project folder:**

   ```
   cd atomic-design-course
   ```

## Switching Between Levels (Branches)

Each level is a **branch**. Think of a branch as a separate snapshot of the project. You switch to a level by "checking out" its branch.

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

## Running a Level Locally

What you need to do depends on the level:

### Levels 1–3 — open the files or start a small server

- **Level 1:** Open `index.html` in your web browser (double-click the file, or drag it into a browser window).
- **Levels 2–3:** These use Web Components that are best viewed through a small local server. Install the dependencies once, then start the server:

  ```
  npm install
  npm start
  ```

  Then open the URL printed in your terminal.

### Level 4 — build the design tokens first

```
npm install
npm run build:tokens
npm start
```

### Levels 5–7 — Storybook and/or apps

These levels add Storybook and, eventually, multiple applications.

```
npm install
npm run build:tokens   # Level 5   (use  npm run build  for Levels 6–7)
npm start              # launches Storybook
npm run start-app      # launches the example app
```

Level 7 also includes three consuming apps you can start individually:

```
npm run start:eleventy   # Eleventy static site
npm run start:react      # React app
npm run start:php        # PHP app (requires PHP installed)
```

> Every level has its own `README.md` with directions specific to that level. Once you've checked out a branch, read its README for the exact steps.

## Need to install Node.js?

Levels 2 and up use [Node.js](https://nodejs.org/) (which includes `npm`). If `npm install` doesn't work, download and install the **LTS** version of Node.js from [nodejs.org](https://nodejs.org/), then try again.
