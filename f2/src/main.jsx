import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Categories from './Categories/Categories.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Categories />
  </StrictMode>,
)
