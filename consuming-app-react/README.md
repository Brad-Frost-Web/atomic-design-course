# Consuming App — React + Web Components

A React application demonstrating how to consume web components from a design system. This shows the integration pattern for using Lit-based web components in a React app with Vite.

## Project Structure

```
src/
  main.jsx       - Entry point; imports tokens, fonts, and component JS files
  App.jsx        - React component using web components as custom elements
package.json     - Dependencies and scripts
vite.config.js   - Vite configuration (no special aliases needed)
index.html       - HTML entry point with root div and script tag
```

## Setup

```bash
npm install
npm run dev
```

## Integration Patterns

### Importing Web Components

Web components are registered globally through side-effect imports in `main.jsx`:

```javascript
import '@brad-frost/our-company-web-components/components/header/header.js'
```

Once imported, components are available as custom HTML elements throughout the app.

### Using Components in JSX

Web components work seamlessly in JSX as custom elements. Simple string attributes pass directly as props:

```jsx
<my-card
  heading="Component Title"
  description="Component description text"
  variant="elevated"
/>
```

This approach works well for:
- **String attributes** (`heading`, `description`, `variant`, `tag-name`, `type`, `placeholder`)
- **Standard HTML attributes** (`id`, `class`, `data-*`, `style`)
- **Event listeners** (attached to the custom element)

### Design Tokens

CSS custom properties (`--oc-theme-*` prefix) are automatically available through imported token CSS:

```javascript
import '@brad-frost/our-company-design-tokens/our-company/build/css/tokens.css'
import '@brad-frost/our-company-design-tokens/our-company/css/fonts.css'
```

Use tokens in inline styles or stylesheets:

```jsx
<div style={{ color: 'var(--oc-theme-primary)' }}>
  Text using design tokens
</div>
```

### What Works Easily

✓ String props and attributes
✓ CSS classes
✓ Inline styles with CSS custom properties
✓ Event listeners
✓ Conditional rendering
✓ Slots and nested content

### Points to Watch

For more complex scenarios (object props, complex state management with shadow DOM), consider:

- **Complex Props**: If components require object-based props, pass them via refs and imperative calls
- **Shadow DOM Styling**: Global styles don't pierce shadow DOM; use design tokens and component APIs
- **Two-way Binding**: For form components, attach change listeners and manage state in React

## Vite Configuration

The app uses standard Vite with the React plugin — no custom aliases or special handling needed. Web component packages are consumed directly from `node_modules` just like any npm package.

## Learn More

See the [web component design system documentation](../design-system-web-components/) for component APIs and customization options.
