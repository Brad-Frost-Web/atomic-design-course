# our-company-app-php

A dead-simple vanilla PHP app that demonstrates web components work everywhere.

## The Point

Web components are just HTML. They don't care what generates that HTML. Not React, not Vue, not Laravel — not even PHP.

This app consumes a design system (Lit-based web components + design tokens) in a vanilla PHP setup with **zero build tools**. After `npm install`, you have everything you need as static files. No webpack, no rollup, no bundler. Just PHP.

## Setup

```bash
npm install
```

That's it. The `postinstall` script runs `copy-assets.js`, which copies the design tokens CSS and component JS files from node_modules into `public/vendor/` where PHP can serve them.

## Run

```bash
php -S localhost:8000 -t public
```

Then visit `http://localhost:8000/`

## How It Works

1. **Design tokens** (CSS custom properties with `--oc-theme-` prefix) get loaded in the `<head>` via `public/includes/head.php`
2. **Web components** (Lit elements with `my-` prefix) get loaded as ES modules in the same `<head>`
3. **HTML templates** (`public/index.php`, `public/about.php`) use web components as plain custom elements
4. **PHP includes** keep boilerplate minimal (`header.php`, `footer.php`, `head.php`)

## Files

- `package.json` - Minimal deps, postinstall script
- `copy-assets.js` - Copies design system assets into `public/vendor/`
- `public/index.php` - Homepage with hero, cards, grid
- `public/about.php` - About page with text passage
- `public/includes/head.php` - Shared `<head>` content (CSS, JS links)
- `public/includes/header.php` - Just `<my-header></my-header>`
- `public/includes/footer.php` - Just `<my-footer></my-footer>`

## The Message

If you can serve static HTML and CSS/JS files, you can use a design system's web components. That's it:

- Plain PHP
- WordPress themes
- Laravel Blade templates
- Static site generators
- Anywhere HTML lives

Web components are the design system. The framework is irrelevant.
