import { useState } from "react";

// Recebe a função onAddBook via props
export default function BookForm({ onAddBook }) {
  // Estado para os campos do formulário
  const [form, setForm] = useState({ title: "", author: "" });
  // Estado para a mensagem de erro
  const [error, setError] = useState("");

  // Um único handleChange cuida dos dois campos (usa name e chave calculada)
  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    // Opcional: limpa o erro enquanto o usuário digita
    if (error) setError("");
  }

  function handleSubmit(event) {
    // No envio: event.preventDefault() para a página não recarregar
    event.preventDefault();

    // Se algum campo estiver vazio, mostre a mensagem e não cadastre
    if (!form.title.trim() || !form.author.trim()) {
      setError("Preencha o título e o autor.");
      return;
    }

    // Se estiver tudo certo, o livro entra na lista com id gerado e available: true
    onAddBook({
      id: crypto.randomUUID(), // Gera um ID único universal
      title: form.title.trim(),
      author: form.author.trim(),
      available: true,
    });

    // Depois de cadastrar, os campos limpam e a mensagem de erro some
    setForm({ title: "", author: "" });
    setError("");
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Título</label>
        <input
          id="title"
          name="title" // O name é crucial para o handleChange
          type="text"
          value={form.title}
          onChange={handleChange}
          placeholder="Ex: O Hobbit"
        />
      </div>

      <div className="field">
        <label htmlFor="author">Autor</label>
        <input
          id="author"
          name="author" // O name é crucial para o handleChange
          type="text"
          value={form.author}
          onChange={handleChange}
          placeholder="Ex: J.R.R. Tolkien"
        />
      </div>

      {/* Mostra a mensagem de erro se existir */}
      {error && <p className="form-error">{error}</p>}

      <button type="submit">Cadastrar livro</button>
    </form>
  );
}