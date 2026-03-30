import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import design tokens and fonts from the design system
import '@brad-frost/our-company-design-tokens/our-company/build/css/tokens.css'
import '@brad-frost/our-company-design-tokens/our-company/css/fonts.css'

// Import all web components (side-effect imports to register custom elements)
import '@brad-frost/our-company-web-components/components/header/header.js'
import '@brad-frost/our-company-web-components/components/footer/footer.js'
import '@brad-frost/our-company-web-components/components/hero/hero.js'
import '@brad-frost/our-company-web-components/components/band/band.js'
import '@brad-frost/our-company-web-components/components/layout-container/layout-container.js'
import '@brad-frost/our-company-web-components/components/heading/heading.js'
import '@brad-frost/our-company-web-components/components/text-passage/text-passage.js'
import '@brad-frost/our-company-web-components/components/card/card.js'
import '@brad-frost/our-company-web-components/components/grid/grid.js'
import '@brad-frost/our-company-web-components/components/button/button.js'
import '@brad-frost/our-company-web-components/components/text-field/text-field.js'
import '@brad-frost/our-company-web-components/components/textarea-field/textarea-field.js'
import '@brad-frost/our-company-web-components/components/page-header/page-header.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
