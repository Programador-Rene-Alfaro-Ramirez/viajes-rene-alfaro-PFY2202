import { formatCLP } from '../services/travelApi';

export default function FlightCard({ vuelo, seleccionado, onSelect }) {
  return (
    <article className={`card option-card ${seleccionado ? 'option-selected' : ''}`}>
      <div className="option-header">
        <div>
          <h3>{vuelo.aerolinea}</h3>
          <p className="option-meta">
            Salida desde {vuelo.origen} · {vuelo.escalas}
          </p>
        </div>
        <span className={`badge ${vuelo.disponible ? 'badge-success' : 'badge-unavailable'}`}>
          {vuelo.disponible ? 'Disponible' : 'Agotado'}
        </span>
      </div>

      <div className="option-details">
        <div>
          <span className="detail-label">Ida</span>
          <strong>{vuelo.fechaSalida}</strong>
        </div>
        <div>
          <span className="detail-label">Regreso</span>
          <strong>{vuelo.fechaRegreso}</strong>
        </div>
      </div>

      <div className="option-footer">
        <div>
          <span className="detail-label">Precio ida y vuelta</span>
          <p className="price">{formatCLP(vuelo.precio)}</p>
        </div>

        <button
          type="button"
          className={`btn ${seleccionado ? 'btn-secondary' : 'btn-primary'}`}
          disabled={!vuelo.disponible}
          onClick={() => onSelect(vuelo)}
        >
          {!vuelo.disponible
            ? 'Sin cupos'
            : seleccionado
              ? 'Quitar vuelo'
              : 'Seleccionar'}
        </button>
      </div>
    </article>
  );
}