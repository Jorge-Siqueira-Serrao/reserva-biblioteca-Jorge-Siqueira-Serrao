// src/App.jsx
import "./App.css";
// 1. Importa os dados dos livros
import { books } from "./data/books";
// 2. Importa o componente que renderiza a lista
import BookList from "./components/BookList";
import Panel from "./components/Panel"; // Importa o novo componente

export default function App() {
  // Função de verdade (temporária por enquanto)
  function handleReserve(bookId) {
    window.alert(`Livro ${bookId} — ação ainda não implementada`);
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
      </header>

      {/* Envolvemos a lista com o Panel, dando um título a ela */}
      <Panel title="Acervo de Livros">
        {/* Passamos a função handleReserve como prop para a lista */}
        <BookList books={books} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}