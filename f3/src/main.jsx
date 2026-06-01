import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PopularCategories from './PopularCategories/PopularCategories.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PopularCategories />
  </StrictMode>,
)
