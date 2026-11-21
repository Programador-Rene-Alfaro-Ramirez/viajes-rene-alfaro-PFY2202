import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="page-section not-found">
      <h1>404 · Destino fuera de ruta</h1>
      <p>
        La página que buscas no existe o el destino ingresado no se encuentra
        disponible en TWA a la Chilena.
      </p>
      <Link to="/" className="btn btn-primary">
        Volver al catálogo de destinos
      </Link>
    </section>
  );
}