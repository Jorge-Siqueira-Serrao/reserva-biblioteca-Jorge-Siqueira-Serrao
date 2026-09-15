// src/App.jsx
import { Routes, Route, NavLink } from "react-router-dom"; // ETAPA 8: Importa componentes do Router
import "./App.css";
// ETAPA 8: Importa as páginas
import AcervoPage from "./pages/AcervoPage";
import NovoLivroPage from "./pages/NovoLivroPage";
import SobrePage from "./pages/SobrePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      {/* ETAPA 8: Cabeçalho fixo com nome e menu */}
      <header className="app-header">
        <strong>BIBLIOTECA ITEAM</strong>
        <nav>
          {/* ETAPA 8: O NavLink da raiz precisa da prop end */}
          <NavLink to="/" end>Acervo</NavLink>
          <NavLink to="/novo">Novo livro</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
      </header>

      <main className="app">
        {/* ETAPA 8: O que troca fica dentro do Routes */}
        <Routes>
          <Route path="/" element={<AcervoPage />} />
          <Route path="/novo" element={<NovoLivroPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          {/* Rota coringa para 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}