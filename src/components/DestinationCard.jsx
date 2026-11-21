import { Link } from 'react-router-dom';

export default function DestinationCard({ destino }) {
  return (
    <article className="card destination-card">
      <div className="destination-image-wrapper">
        <img
          src={destino.imagen}
          alt={`Vista de ${destino.ciudad}, ${destino.pais}`}
          className="destination-image"
          loading="lazy"
        />
        <span className="badge badge-region">{destino.region}</span>
      </div>

      <div className="card-body">
        <div className="destination-header">
          <h3>{destino.ciudad}</h3>
          <span className="destination-country">{destino.pais}</span>
        </div>

        <p className="destination-description">{destino.descripcion}</p>

        <div className="activities-block">
          <h4>Actividades populares</h4>
          <ul className="activities-list">
            {destino.actividadesPopulares.map((actividad) => (
              <li key={actividad}>{actividad}</li>
            ))}
          </ul>
        </div>

        <Link to={`/destino/${destino.id}`} className="btn btn-primary btn-full">
          Ver vuelos y hoteles
        </Link>
      </div>
    </article>
  );
}