# atomic-design-course

Demo content for the Atomic Design Certification Course

# Atomic Design Certification Course Demos

Level 6 demo content for the Atomic Design Certification Course

## Overview and Directions

This demo builds on the Level 5 demo of adding [Storybook](https://storybook.js.org/) as the workshop environment by rearchitecting our design tokens, component library, and our application into their own projects. Many teams do this to allow for teams to work with the design tokens and components in tandem because they are interconnected. However, publishing these as separate packages is sometimes desired to allow for teams that just want the tokens and not the components to use the design tokens for their downstream applications. The `our-company-app` is usually another project altogether that consumes the design tokens and component library packages, but it lives in this monorepo to demonstrate how these things come together.

- Created `our-company-app` project that contains the application pages (e.g. `index.html`, `about.html`, etc.)
- Created `our-company-design-tokens` project to house our design tokens for our design system.
- Created `our-company-web-components` to house our component library for our design system.

We use workspaces in `npm` to allow for us to install the dependencies at the root of this project `atomic-design-course` and then run the scripts we need from there instead of having to navigate into those folders and back out for specific commands.

We've also added the application pages to Storybook in the `.storybook/pages` directory in `our-company-web-components` so that we can prototype the pages and navigate through the themes with the Storybook theme switcher to see how these pages feel without needing to be in the actual application. This allows for swifter development and testing for the design system to allow for the translation into the product to go smoother.

### Start the server

1. Install dependencies:

```
npm install
```

2. Convert the design token JSON files of all themes into CSS Custom Properties:

```
npm run build:tokens
```

3. To start the server to view the Storybook on localhost, run:

```
npm start
```

4. To start the server to view the pages in the app on localhost, run:

```
npm run start-app
```
