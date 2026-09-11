// src/App.jsx
import "./App.css";
// 1. Importa os dados dos livros
import { books } from "./data/books";
// 2. Importa o componente que renderiza a lista
import BookList from "./components/BookList";

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
      </header>

      <BookList books={books} />
    </main>
  );
}