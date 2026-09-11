// Recebe 'title' e 'children' via desestruturação
export default function Panel({ title, children }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <h2>{title}</h2>
      </div>
      <div className="panel-content">
        {children} {/* É aqui que a lista de livros será renderizada */}
      </div>
    </section>
  );
}
