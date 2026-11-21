import { formatCLP } from '../services/travelApi';

export default function HotelCard({ hotel, seleccionado, onSelect }) {
  return (
    <article className={`card option-card ${seleccionado ? 'option-selected' : ''}`}>
      <div className="option-header">
        <div>
          <h3>{hotel.nombre}</h3>
          <p className="option-meta">
            {'★'.repeat(hotel.estrellas)} · {hotel.ubicacion}
          </p>
        </div>
        <span className={`badge ${hotel.disponible ? 'badge-success' : 'badge-unavailable'}`}>
          {hotel.disponible ? 'Disponible' : 'Sin habitaciones'}
        </span>
      </div>

      <div className="option-details">
        <div>
          <span className="detail-label">Check-in</span>
          <strong>{hotel.fechaCheckIn}</strong>
        </div>
        <div>
          <span className="detail-label">Check-out</span>
          <strong>{hotel.fechaCheckOut}</strong>
        </div>
      </div>

      <div className="option-footer">
        <div>
          <span className="detail-label">Tarifa por noche</span>
          <p className="price">{formatCLP(hotel.precioNoche)}</p>
        </div>

        <button
          type="button"
          className={`btn ${seleccionado ? 'btn-secondary' : 'btn-primary'}`}
          disabled={!hotel.disponible}
          onClick={() => onSelect(hotel)}
        >
          {!hotel.disponible
            ? 'Agotado'
            : seleccionado
              ? 'Quitar hotel'
              : 'Seleccionar'}
        </button>
      </div>
    </article>
  );
}