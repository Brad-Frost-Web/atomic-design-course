# atomic-design-course

Demo content for the Atomic Design Certification Course

# Atomic Design Certification Course Demos

Level 5 demo content for the Atomic Design Certification Course

## Overview and Directions

This demo builds on the Level 4 demo of adding tokens by building a [Storybook](https://storybook.js.org/) infrastructure around the components for the workshop environment of the component library. This tool allows you to view your components in an organized fashion, view the variants and usage around these components, and test your components before they get packaged up and installed by downstream users.

Note: Because this tool uses `vite` as the build tool for the Storybook server to spin up, we need to adjust our CSS imports to use `?inline` instead of the previous level demos imports.

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
