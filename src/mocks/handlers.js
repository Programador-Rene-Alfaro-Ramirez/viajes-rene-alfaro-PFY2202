import { http, HttpResponse, delay } from 'msw';
import { destinos, vuelosPorDestino, hotelesPorDestino } from './data';

const API_BASE = import.meta.env.BASE_URL;

export const handlers = [
  // API REST Mock: Listar todos los destinos disponibles
  http.get(`${API_BASE}api/destinos`, async () => {
    await delay(250);
    return HttpResponse.json(destinos, { status: 200 });
  }),

  // API REST Mock: Obtener detalle de un destino específico
  http.get(`${API_BASE}api/destinos/:id`, async ({ params }) => {
    await delay(200);
    const destino = destinos.find((d) => d.id === params.id);

    if (!destino) {
      return HttpResponse.json(
        { message: 'Destino no encontrado' },
        { status: 404 }
      );
    }

    return HttpResponse.json(destino, { status: 200 });
  }),

  // API GraphQL Mock: Consultar vuelos y hoteles del destino seleccionado
  http.post(`${API_BASE}graphql`, async ({ request }) => {
    await delay(300);
    const body = await request.json();
    const { operationName, query = '', variables = {} } = body || {};

    if (
      operationName === 'GetOpcionesDestino' ||
      query.includes('GetOpcionesDestino')
    ) {
      const { destinoId } = variables;
      const existeDestino = destinos.some((d) => d.id === destinoId);

      if (!existeDestino) {
        return HttpResponse.json(
          {
            errors: [
              {
                message: `No existen vuelos ni hoteles para el destino "${destinoId}"`,
              },
            ],
          },
          { status: 200 }
        );
      }

      return HttpResponse.json(
        {
          data: {
            vuelos: vuelosPorDestino[destinoId] || [],
            hoteles: hotelesPorDestino[destinoId] || [],
          },
        },
        { status: 200 }
      );
    }

    return HttpResponse.json(
      {
        errors: [
          { message: `Operación GraphQL no soportada: ${operationName}` },
        ],
      },
      { status: 400 }
    );
  }),
];