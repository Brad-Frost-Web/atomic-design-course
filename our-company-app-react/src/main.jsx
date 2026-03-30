import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import design tokens and fonts from the design system
import '@brad-frost-web/atomic-design-course-demo-design-tokens/our-company/css/tokens.css'
import '@brad-frost-web/atomic-design-course-demo-design-tokens/our-company/css/fonts.css'

// Global styles
import './styles.css'

// Import the pre-built web components bundle (registers all custom elements)
import '@brad-frost-web/atomic-design-course-demo-web-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
