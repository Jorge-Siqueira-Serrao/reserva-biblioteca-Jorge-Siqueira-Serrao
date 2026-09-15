import { createContext, useState, useEffect } from "react";
import { books as initialBooks } from "../data/books";

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

// ETAPA 7: Exporta o BooksContext criado com createContext(null)
export const BooksContext = createContext(null);

// ETAPA 7: Exporta o componente BooksProvider que recebe children e concentra a lógica
export function BooksProvider({ children }) {
  // ETAPA 6: Troque useState(initialBooks) por useState(loadBooks) — sem parênteses
  const [books, setBooks] = useState(loadBooks);

  // ETAPA 6: useEffect que salva a lista no localStorage sempre que ela mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  // ETAPA 7: Função que alterna a reserva
  function toggleBook(bookId) {
    // A atualização precisa ser imutável
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, available: !book.available } : book
      )
    );
  }

  // ETAPA 7: Função que adiciona um livro
  function addBook(newBook) {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  }

  // ETAPA 7: Contador de disponíveis
  const availableCount = books.filter((book) => book.available).length;

  // ETAPA 7: Monta o objeto que vai no value com: books, availableCount, toggleBook, addBook
  return (
    <BooksContext.Provider value={{ books, availableCount, toggleBook, addBook }}>
      {children}
    </BooksContext.Provider>
  );
}