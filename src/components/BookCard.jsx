// Recebe 'book' e 'onReserve'
export default function BookCard({ book, onReserve }) {
  return (
    <article className="book-card">
      <div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      
      {/* Agrupamos a etiqueta e o botão para ficarem alinhados */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span className={`badge ${book.available ? "badge-ok" : "badge-off"}`}>
          {book.available ? "Disponível" : "Reservado"}
        </span>
        
        {/* O botão que dispara o callback */}
        <button onClick={() => onReserve(book.id)}>
          Reservar
        </button>
      </div>
    </article>
  );
}