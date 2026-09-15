import { useContext } from "react"; // ETAPA 7: Importa useContext
import { BooksContext } from "../context/BooksContext"; // ETAPA 7: Importa o BooksContext
import BookCard from "./BookCard";

// ETAPA 7: Remove as props, pois agora lê do contexto
export default function BookList() {
  // ETAPA 7: Lê books e toggleBook do contexto
  const { books, toggleBook } = useContext(BooksContext);

  if (!books || books.length === 0) {
    return <p>Nenhum livro no acervo.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        // ETAPA 7: Passa toggleBook como onReserve para o BookCard
        <BookCard key={book.id} book={book} onReserve={toggleBook} />
      ))}
    </div>
  );
}
