# Atomic Design Certification Course Demos

Level 3 demo content for the Atomic Design Certification Course

## Overview and Directions

This demo rounds out the creation of the design system component library. We've converted the rest of the HTML on the `.html` pages into proper Web Components. We're using [Lit](https://lit.dev/) as the Web Component framework for our components. We chose this because Web Components are native to the web and are consumable by many frameworks (e.g. React, Angular, Vue, etc.). We've also introduced a proper `package.json` file that allows us to install dependencies and run a server to allow for the web components to be transpiled before showing up in the static `.html` files.

### Start the server

1. Install dependencies:

```
npm install
```

2. To start the server to view the pages in localhost, run:

```
npm start
```
