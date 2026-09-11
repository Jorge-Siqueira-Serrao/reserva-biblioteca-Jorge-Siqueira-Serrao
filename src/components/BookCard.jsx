// Recebe 'book' e 'onReserve'
export default function BookCard({ book, onReserve }) {
  return (
    <article className="book-card">
      <div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Lógica da etiqueta: usa a propriedade 'available' do livro para definir a classe e o texto */}
        <span className={`badge ${book.available ? "badge-ok" : "badge-off"}`}>
          {book.available ? "Disponível" : "Reservado"}
        </span>
        
        {/* O texto do botão muda conforme a situação: Reservar quando disponível, Devolver quando reservado */}
        <button onClick={() => onReserve(book.id)}>
          {book.available ? "Reservar" : "Devolver"}
        </button>
      </div>
    </article>
  );
}
