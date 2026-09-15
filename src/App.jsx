// src/App.jsx
import { useContext } from "react"; // ETAPA 7: Importa useContext
import "./App.css";
import BookList from "./components/BookList";
import Panel from "./components/Panel";
import BookForm from "./components/BookForm";
import { BooksContext } from "./context/BooksContext"; // ETAPA 7: Importa o BooksContext

export default function App() {
  // ETAPA 7: Lê books e availableCount do contexto para o cabeçalho
  const { books, availableCount } = useContext(BooksContext);

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
        
        {/* No topo da página, mostre um contador */}
        <p style={{ marginTop: "12px", fontWeight: "bold", color: "var(--azul)" }}>
          {availableCount} de {books.length} livros disponíveis
        </p>
      </header>

      {/* ETAPA 7: Remove as props do BookForm e BookList */}
      <Panel title="Novo livro">
        <BookForm />
      </Panel>

      <Panel title="Acervo de Livros">
        <BookList />
      </Panel>
    </main>
  );
}