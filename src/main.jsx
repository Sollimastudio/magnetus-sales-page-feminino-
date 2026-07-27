import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ConversionContinuityLayer from './components/ConversionContinuityLayer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ConversionContinuityLayer />
  </StrictMode>,
)
