import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import Panel from "../components/Panel";
import BookList from "../components/BookList";

export default function AcervoPage() {
  // ETAPA 7: Lê books e availableCount do contexto para o cabeçalho
  const { books, availableCount } = useContext(BooksContext);

  return (
    <>
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
        
        <p style={{ marginTop: "12px", fontWeight: "bold", color: "var(--azul)" }}>
          {availableCount} de {books.length} livros disponíveis
        </p>
      </header>

      <Panel title="Acervo de Livros">
        <BookList />
      </Panel>
    </>
  );
}