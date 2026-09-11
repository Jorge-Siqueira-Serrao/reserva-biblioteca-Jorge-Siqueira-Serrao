import BookCard from "./BookCard";

// Componente que recebe o array de 'books' via props
export default function BookList({ books }) {
  // Verifica se a lista está vazia ou indefinida
  if (!books || books.length === 0) {
    return <p>Nenhum livro no acervo.</p>;
  }

  return (
    <section className="book-list" aria-label="Acervo">
      {/* Percorre o array com .map() e renderiza um BookCard para cada livro */}
      {books.map((book) => (
        // IMPORTANTE: A chave (key) deve ser o ID único do livro, nunca o índice do array.
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
}