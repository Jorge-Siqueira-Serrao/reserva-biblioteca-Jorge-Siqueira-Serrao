// src/App.jsx
import { useState, useEffect } from "react"; // Importa o useState e useEffect
import "./App.css";
// 1. Importa os dados dos livros (renomeando para initialBooks para não conflitar com o nome do estado)
import { books as initialBooks } from "./data/books";
// 2. Importa o componente que renderiza a lista
import BookList from "./components/BookList";
import Panel from "./components/Panel";
import BookForm from "./components/BookForm"; // Importa o novo formulário

// ETAPA 6: Constante com a chave do armazenamento
const STORAGE_KEY = "reserva-biblioteca:books";

// ETAPA 6: Função para carregar os livros do localStorage
function loadBooks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    // Se não houver nada, devolve o array books importado
    if (!stored) return initialBooks;
    
    const parsed = JSON.parse(stored);
    // Confirma que é um array, senão devolve o padrão
    return Array.isArray(parsed) ? parsed : initialBooks;
  } catch (error) {
    // Devolve books caso qualquer coisa dê errado
    return initialBooks;
  }
}

export default function App() {
  // No App, guarde a lista de livros em estado com useState
  // ETAPA 6: Troque useState(initialBooks) por useState(loadBooks) — sem parênteses (inicialização preguiçosa)
  const [books, setBooks] = useState(loadBooks);

  // ETAPA 6: useEffect que salva a lista no localStorage sempre que ela mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  // Troque o alerta por uma função que alterna o campo available do livro clicado
  function handleReserve(bookId) {
    // A atualização precisa ser imutável — nada de book.available = true nem push
    // Usamos o .map para criar um NOVO array, e o spread operator (...) para criar um NOVO objeto
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, available: !book.available } : book
      )
    );
  }

  // Função para adicionar um novo livro à lista
  function handleAddBook(newBook) {
    // Adiciona o novo livro ao final do array de forma imutável
    setBooks((prevBooks) => [...prevBooks, newBook]);
  }

  // O contador precisa ser calculado, não guardado em outro estado
  const availableCount = books.filter((book) => book.available).length;

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

      {/* Coloque o formulário dentro de um Panel com o título "Novo livro", acima da lista */}
      <Panel title="Novo livro">
        <BookForm onAddBook={handleAddBook} />
      </Panel>

      {/* Envolvemos a lista com o Panel, dando um título a ela */}
      <Panel title="Acervo de Livros">
        {/* Passamos a função handleReserve como prop para a lista */}
        <BookList books={books} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}