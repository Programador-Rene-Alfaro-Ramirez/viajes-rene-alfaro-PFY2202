import { useEffect, useState } from 'react';
import DestinationCard from '../components/DestinationCard';
import StatusMessage from '../components/StatusMessage';
import { fetchDestinos } from '../services/travelApi';

const REGIONES = ['Todas', 'Sudamérica', 'Norteamérica', 'Europa', 'Asia'];

export default function HomePage() {
  const [destinos, setDestinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [regionActiva, setRegionActiva] = useState('Todas');
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let activo = true;

    async function cargarDestinos() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchDestinos({
          signal: controller.signal,
          forceRefresh: reloadCount > 0,
        });
        if (activo) {
          setDestinos(data);
        }
      } catch (err) {
        if (err.name === 'AbortError') return;
        if (activo) {
          setError(err.message || 'No pudimos cargar los destinos.');
        }
      } finally {
        if (activo) {
          setLoading(false);
        }
      }
    }

    cargarDestinos();

    return () => {
      activo = false;
      controller.abort();
    };
  }, [reloadCount]);

  const destinosFiltrados = destinos.filter((destino) => {
    const coincideRegion =
      regionActiva === 'Todas' || destino.region === regionActiva;
    const texto = busqueda.trim().toLowerCase();
    const coincideTexto =
      !texto ||
      destino.ciudad.toLowerCase().includes(texto) ||
      destino.pais.toLowerCase().includes(texto) ||
      destino.actividadesPopulares.some((act) =>
        act.toLowerCase().includes(texto)
      );

    return coincideRegion && coincideTexto;
  });

  return (
    <section className="page-section">
      <div className="hero">
        <span className="hero-tag">API REST + GraphQL Mock · Salidas desde SCL</span>
        <h1>Planifica tu próxima aventura con TWA a la Chilena</h1>
        <p>
          Explora destinos internacionales y nacionales, revisa sus actividades
          imperdibles y arma tu combinación ideal de vuelo y hotel.
        </p>
      </div>

      <div className="controls-bar">
        <div className="search-wrapper">
          <label htmlFor="buscador-destinos" className="sr-only">
            Buscar por ciudad, país o actividad
          </label>
          <input
            id="buscador-destinos"
            type="search"
            className="search-input"
            placeholder="Buscar ciudad, país o actividad (ej: Tokio, playa, Louvre)..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-outline"
          onClick={() => setReloadCount((prev) => prev + 1)}
          disabled={loading}
        >
          Actualizar catálogo
        </button>
      </div>

      <div className="region-filters" role="group" aria-label="Filtrar por región">
        {REGIONES.map((region) => (
          <button
            key={region}
            type="button"
            className={`filter-chip ${regionActiva === region ? 'active' : ''}`}
            onClick={() => setRegionActiva(region)}
          >
            {region}
          </button>
        ))}
      </div>

      {loading && (
        <StatusMessage
          type="loading"
          message="Consultando destinos disponibles vía API REST..."
        />
      )}

      {!loading && error && (
        <StatusMessage
          type="error"
          message={error}
          onRetry={() => setReloadCount((prev) => prev + 1)}
        />
      )}

      {!loading && !error && destinosFiltrados.length === 0 && (
        <StatusMessage
          type="empty"
          message="No encontramos destinos con esos filtros. Prueba con otra búsqueda o región."
        />
      )}

      {!loading && !error && destinosFiltrados.length > 0 && (
        <div className="destinations-grid">
          {destinosFiltrados.map((destino) => (
            <DestinationCard key={destino.id} destino={destino} />
          ))}
        </div>
      )}
    </section>
  );
}