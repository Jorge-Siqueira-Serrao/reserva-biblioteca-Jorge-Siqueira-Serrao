import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// ETAPA 7: Importa o BooksProvider
import { BooksProvider } from './context/BooksContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ETAPA 7: Envolve o <App /> com <BooksProvider> */}
    <BooksProvider>
      <App />
    </BooksProvider>
  </StrictMode>,
)
