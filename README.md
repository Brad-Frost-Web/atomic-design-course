# Atomic Design Certification Course Demos

Level 2 demo content for the Atomic Design Certification Course

## Overview and Directions

This demo introduces the concept of consumable components. We've started the process of breaking down the `.html` pages into a proper component library. We're using [Lit](https://lit.dev/) as the Web Component framework for our components. We chose this because Web Components are native to the web and are consumable by many frameworks (e.g. React, Angular, Vue, etc.). We've also introduced a proper `package.json` file that allows us to install dependencies and run a server to allow for the web components to be transpiled before showing up in the static `.html` files.

We've gone ahead and created a `header` Web Component to start this process. This web component lives as `header.js` within the `components` directory. It is imported into the project via a `<script>` tag within the `.html` files.
