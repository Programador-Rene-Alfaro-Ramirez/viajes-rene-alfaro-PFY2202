import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FlightCard from '../components/FlightCard';
import HotelCard from '../components/HotelCard';
import StatusMessage from '../components/StatusMessage';
import {
  fetchDestinoPorId,
  fetchOpcionesDestinoGraphQL,
  formatCLP,
} from '../services/travelApi';

function calcularNoches(checkIn, checkOut) {
  const inicio = new Date(checkIn);
  const fin = new Date(checkOut);
  const diffMs = fin - inicio;
  const noches = Math.round(diffMs / (1000 * 60 * 60 * 24));
  return noches > 0 ? noches : 1;
}

export default function DestinationDetail() {
  const { id } = useParams();

  const [destino, setDestino] = useState(null);
  const [vuelos, setVuelos] = useState([]);
  const [hoteles, setHoteles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [vueloSeleccionado, setVueloSeleccionado] = useState(null);
  const [hotelSeleccionado, setHotelSeleccionado] = useState(null);
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    setVueloSeleccionado(null);
    setHotelSeleccionado(null);
  }, [id]);

  useEffect(() => {
    const controller = new AbortController();
    let activo = true;

    async function cargarDetalle() {
      setLoading(true);
      setError(null);

      try {
        const [infoDestino, opcionesGraphQL] = await Promise.all([
          fetchDestinoPorId(id, {
            signal: controller.signal,
            forceRefresh: reloadCount > 0,
          }),
          fetchOpcionesDestinoGraphQL(id, {
            signal: controller.signal,
            forceRefresh: reloadCount > 0,
          }),
        ]);

        if (activo) {
          setDestino(infoDestino);
          setVuelos(opcionesGraphQL.vuelos || []);
          setHoteles(opcionesGraphQL.hoteles || []);
        }
      } catch (err) {
        if (err.name === 'AbortError') return;
        if (activo) {
          setError(err.message || 'No se pudieron cargar las opciones de viaje.');
        }
      } finally {
        if (activo) {
          setLoading(false);
        }
      }
    }

    cargarDetalle();

    return () => {
      activo = false;
      controller.abort();
    };
  }, [id, reloadCount]);

  const vuelosVisibles = soloDisponibles
    ? vuelos.filter((v) => v.disponible)
    : vuelos;
  const hotelesVisibles = soloDisponibles
    ? hoteles.filter((h) => h.disponible)
    : hoteles;

  const nochesHotel = hotelSeleccionado
    ? calcularNoches(hotelSeleccionado.fechaCheckIn, hotelSeleccionado.fechaCheckOut)
    : 0;
  const totalHotel = hotelSeleccionado
    ? nochesHotel * hotelSeleccionado.precioNoche
    : 0;
  const totalEstimado = (vueloSeleccionado?.precio || 0) + totalHotel;

  function handleSelectVuelo(vuelo) {
    setVueloSeleccionado((actual) => (actual?.id === vuelo.id ? null : vuelo));
  }

  function handleSelectHotel(hotel) {
    setHotelSeleccionado((actual) => (actual?.id === hotel.id ? null : hotel));
  }

  if (loading) {
    return (
      <section className="page-section">
        <Link to="/" className="back-link">
          ← Volver a destinos
        </Link>
        <StatusMessage
          type="loading"
          message="Consultando vuelos y hoteles disponibles vía API GraphQL..."
        />
      </section>
    );
  }

  if (error || !destino) {
    return (
      <section className="page-section">
        <Link to="/" className="back-link">
          ← Volver a destinos
        </Link>
        <StatusMessage
          type="error"
          message={error || 'Destino no encontrado.'}
          onRetry={() => setReloadCount((prev) => prev + 1)}
        />
      </section>
    );
  }

  return (
    <section className="page-section">
      <Link to="/" className="back-link">
        ← Volver a todos los destinos
      </Link>

      <div className="detail-banner">
        <img
          src={destino.imagen}
          alt={`${destino.ciudad}, ${destino.pais}`}
          className="detail-banner-image"
        />
        <div className="detail-banner-content">
          <span className="badge badge-region">{destino.region}</span>
          <h1>
            {destino.ciudad}, {destino.pais}
          </h1>
          <p>{destino.descripcion}</p>

          <div className="detail-activities">
            {destino.actividadesPopulares.map((actividad) => (
              <span key={actividad} className="activity-pill">
                ✓ {actividad}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-toolbar">
        <label className="checkbox-filter">
          <input
            type="checkbox"
            checked={soloDisponibles}
            onChange={(e) => setSoloDisponibles(e.target.checked)}
          />
          <span>Mostrar solo vuelos y hoteles disponibles</span>
        </label>

        <button
          type="button"
          className="btn btn-outline"
          onClick={() => setReloadCount((prev) => prev + 1)}
        >
          Recargar opciones GraphQL
        </button>
      </div>

      {(vueloSeleccionado || hotelSeleccionado) && (
        <aside className="trip-summary" aria-label="Resumen de planificación de viaje">
          <div>
            <h2>Tu plan de viaje a {destino.ciudad}</h2>
            <ul className="summary-list">
              <li>
                <strong>Vuelo:</strong>{' '}
                {vueloSeleccionado
                  ? `${vueloSeleccionado.aerolinea} (${vueloSeleccionado.fechaSalida} al ${vueloSeleccionado.fechaRegreso}) — ${formatCLP(vueloSeleccionado.precio)}`
                  : 'Aún no seleccionado'}
              </li>
              <li>
                <strong>Hotel:</strong>{' '}
                {hotelSeleccionado
                  ? `${hotelSeleccionado.nombre} (${nochesHotel} noches) — ${formatCLP(totalHotel)}`
                  : 'Aún no seleccionado'}
              </li>
            </ul>
          </div>

          <div className="summary-total-box">
            <span className="detail-label">Presupuesto estimado</span>
            <p className="summary-total">{formatCLP(totalEstimado)}</p>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => {
                setVueloSeleccionado(null);
                setHotelSeleccionado(null);
              }}
            >
              Limpiar selección
            </button>
          </div>
        </aside>
      )}

      <div className="options-section">
        <div className="section-heading">
          <h2>Vuelos disponibles ({vuelosVisibles.length})</h2>
          <span className="api-tag">Fuente: GraphQL Mock</span>
        </div>

        {vuelosVisibles.length === 0 ? (
          <StatusMessage
            type="empty"
            message="No hay vuelos disponibles con el filtro actual."
          />
        ) : (
          <div className="options-grid">
            {vuelosVisibles.map((vuelo) => (
              <FlightCard
                key={vuelo.id}
                vuelo={vuelo}
                seleccionado={vueloSeleccionado?.id === vuelo.id}
                onSelect={handleSelectVuelo}
              />
            ))}
          </div>
        )}
      </div>

      <div className="options-section">
        <div className="section-heading">
          <h2>Hoteles recomendados ({hotelesVisibles.length})</h2>
          <span className="api-tag">Fuente: GraphQL Mock</span>
        </div>

        {hotelesVisibles.length === 0 ? (
          <StatusMessage
            type="empty"
            message="No hay hoteles disponibles con el filtro actual."
          />
        ) : (
          <div className="options-grid">
            {hotelesVisibles.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                seleccionado={hotelSeleccionado?.id === hotel.id}
                onSelect={handleSelectHotel}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}