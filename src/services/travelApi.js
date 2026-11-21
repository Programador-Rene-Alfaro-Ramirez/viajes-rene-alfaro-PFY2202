const BASE_URL = import.meta.env.BASE_URL;
const cache = new Map();

export function formatCLP(monto) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(monto);
}

export async function fetchDestinos({ signal, forceRefresh = false } = {}) {
  const cacheKey = 'rest:destinos';
  if (!forceRefresh && cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const response = await fetch(`${BASE_URL}api/destinos`, { signal });
  if (!response.ok) {
    throw new Error(`Error REST (${response.status}): No se pudieron cargar los destinos.`);
  }

  const data = await response.json();
  cache.set(cacheKey, data);
  return data;
}

export async function fetchDestinoPorId(id, { signal, forceRefresh = false } = {}) {
  const cacheKey = `rest:destino:${id}`;
  if (!forceRefresh && cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const response = await fetch(`${BASE_URL}api/destinos/${id}`, { signal });
  if (!response.ok) {
    throw new Error(`No encontramos el destino solicitado (${response.status}).`);
  }

  const data = await response.json();
  cache.set(cacheKey, data);
  return data;
}

export async function fetchOpcionesDestinoGraphQL(
  destinoId,
  { signal, forceRefresh = false } = {}
) {
  const cacheKey = `gql:opciones:${destinoId}`;
  if (!forceRefresh && cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const query = `
    query GetOpcionesDestino($destinoId: ID!) {
      vuelos(destinoId: $destinoId) {
        id
        aerolinea
        origen
        fechaSalida
        fechaRegreso
        precio
        disponible
        escalas
      }
      hoteles(destinoId: $destinoId) {
        id
        nombre
        estrellas
        fechaCheckIn
        fechaCheckOut
        precioNoche
        disponible
        ubicacion
      }
    }
  `;

  const response = await fetch(`${BASE_URL}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal,
    body: JSON.stringify({
      operationName: 'GetOpcionesDestino',
      query,
      variables: { destinoId },
    }),
  });

  if (!response.ok) {
    throw new Error(`Error de red GraphQL (${response.status}).`);
  }

  const result = await response.json();
  if (result.errors?.length) {
    throw new Error(result.errors[0].message);
  }

  cache.set(cacheKey, result.data);
  return result.data;
}