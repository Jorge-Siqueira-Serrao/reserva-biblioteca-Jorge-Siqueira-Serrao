import Panel from "../components/Panel";
import BookForm from "../components/BookForm";

export default function NovoLivroPage() {
  return (
    <>
      <h1>Novo livro</h1>
      <Panel title="Cadastrar livro">
        <BookForm />
      </Panel>
    </>
  );
}