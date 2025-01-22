import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './Counter.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Counter />
  </StrictMode>,
)



