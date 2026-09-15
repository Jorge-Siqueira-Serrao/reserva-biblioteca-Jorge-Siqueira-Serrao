// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ETAPA 8: Importa o BrowserRouter
import './index.css'
import App from './App.jsx'
import { BooksProvider } from './context/BooksContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ETAPA 8: BrowserRouter por fora do BooksProvider */}
    <BrowserRouter>
      <BooksProvider>
        <App />
      </BooksProvider>
    </BrowserRouter>
  </StrictMode>,
)