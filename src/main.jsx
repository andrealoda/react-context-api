import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as bootstrap from 'bootstrap';
// Supports weights 200-800
import '@fontsource-variable/plus-jakarta-sans/wght.css';
// Supports weights 100-900
import '@fontsource-variable/inter/wght.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
