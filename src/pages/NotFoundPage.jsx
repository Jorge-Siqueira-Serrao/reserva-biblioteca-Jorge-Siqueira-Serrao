import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A página que você está procurando não existe.</p>
      {/* Link para voltar ao início */}
      <Link to="/" style={{ color: "var(--azul)", fontWeight: "bold" }}>Voltar para o Acervo</Link>
    </div>
  );
}
