// Componente que recebe um objeto 'book' via props
export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      
      {/* Lógica da etiqueta: usa a propriedade 'available' do livro para definir a classe e o texto */}
      <span className={`badge ${book.available ? "badge-ok" : "badge-off"}`}>
        {book.available ? "Disponível" : "Reservado"}
      </span>
    </article>
  );
}