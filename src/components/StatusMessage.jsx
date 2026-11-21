export default function StatusMessage({ type = 'loading', message, onRetry }) {
  if (type === 'loading') {
    return (
      <div className="status-box status-loading" role="status" aria-live="polite">
        <div className="spinner" aria-hidden="true" />
        <p>{message || 'Cargando información...'}</p>
      </div>
    );
  }

  if (type === 'error') {
    return (
      <div className="status-box status-error" role="alert">
        <p className="status-title">Ocurrió un problema</p>
        <p>{message || 'No se pudieron obtener los datos solicitados.'}</p>
        {onRetry && (
          <button type="button" className="btn btn-primary" onClick={onRetry}>
            Reintentar
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="status-box status-empty">
      <p>{message || 'No se encontraron resultados.'}</p>
    </div>
  );
}