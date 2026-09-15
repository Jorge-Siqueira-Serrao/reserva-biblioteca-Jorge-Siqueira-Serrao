import { useState, useContext } from "react"; // ETAPA 7: Importa useContext
import { BooksContext } from "../context/BooksContext"; // ETAPA 7: Importa o BooksContext

// ETAPA 7: Remove as props, pois agora lê do contexto
export default function BookForm() {
  // ETAPA 7: Lê addBook do contexto
  const { addBook } = useContext(BooksContext);
  
  const [form, setForm] = useState({ title: "", author: "" });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    if (error) setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title.trim() || !form.author.trim()) {
      setError("Preencha o título e o autor.");
      return;
    }

    // ETAPA 7: Usa addBook do contexto em vez da prop
    addBook({
      id: crypto.randomUUID(),
      title: form.title.trim(),
      author: form.author.trim(),
      available: true,
    });

    setForm({ title: "", author: "" });
    setError("");
  }

  // ... (O restante do JSX do formulário continua exatamente igual)
  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Título</label>
        <input id="title" name="title" type="text" value={form.title} onChange={handleChange} placeholder="Ex: O Hobbit" />
      </div>
      <div className="field">
        <label htmlFor="author">Autor</label>
        <input id="author" name="author" type="text" value={form.author} onChange={handleChange} placeholder="Ex: J.R.R. Tolkien" />
      </div>
      {error && <p className="form-error">{error}</p>}
      <button type="submit">Cadastrar livro</button>
    </form>
  );
}