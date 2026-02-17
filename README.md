# Atomic Design Certification Course Demos

Level 4 demo content for the Atomic Design Certification Course

## Overview and Directions

This demo adds in another element of design systems: design tokens. We've added a `design-tokens` directory that contains:

- `core`: universal tokens that are used across themes
- `vanilla`: a neutral theme that demonstrates the white-labeling of the design system
- `our-company`: our company's branded design tokens
- `wowee-zowee`: a ridiculous theme to demonstrate that theming can be corporate or fun!

These are `.json` files that get converted via a tool called [Style Dictionary](https://styledictionary.com/). Style Dictionary can convert these JSON files into many different formats for different platforms (e.g. web, native/mobile, etc.). In this demo, we'll be converting these into CSS Custom Properties. The `config.js` file is what controls the output when you run the script `npm run build:tokens` in your terminal. There should be a `tokens.css` file that gets created in the `design-tokens/[theme]/build/css` file for each theme (e.g. vanilla, our-company, etc.). We also have the `fonts.css` file located alongside these themes since they are only needed for a specific theme and should only be imported when you use that theme's tokens.

We've also mapped these CSS Custom Properties to the appropriate web components within the CSS files inside the `components` directory.

### Start the server

1. Install dependencies:

```
npm install
```

2. Convert the design token JSON files of all themes into CSS Custom Properties:

```
npm run build:tokens
```

3. To start the server to view the pages in localhost, run:

```
npm start
```
