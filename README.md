# TWA a la Chilena — Agencia de Viajes (PFY2202)

Aplicación web responsiva desarrollada en **React + Vite** para la actividad sumativa de la Semana 5 (*Integrando nuestro frontend con backend*) de **Desarrollo Frontend II (PFY2202)** en Duoc UC.

Permite explorar destinos nacionales e internacionales, revisar sus actividades populares y planificar un viaje consultando vuelos, hoteles, fechas, precios en CLP y disponibilidad.

## Enlace en vivo (GitHub Pages)
- **Demo desplegada:** [https://programador-rene-alfaro-ramirez.github.io/viajes-rene-alfaro-PFY2202/](https://programador-rene-alfaro-ramirez.github.io/viajes-rene-alfaro-PFY2202/)

## Arquitectura y tecnologías utilizadas
- **Frontend:** React 19, Vite, JavaScript (ES6+), HTML5 y CSS3 responsivo (Grid, Flexbox y Media Queries).
- **Enrutamiento:** React Router (`HashRouter`) con vistas de catálogo (`/`), detalle de destino (`/destino/:id`) y manejo de rutas inexistentes (`*`).
- **Backend Mock (MSW - Mock Service Worker):**
  - **API REST Mock:** `GET /api/destinos` y `GET /api/destinos/:id` para listar destinos, país, región y actividades populares.
  - **API GraphQL Mock:** `POST /graphql` (operación `GetOpcionesDestino`) para consultar vuelos y hoteles por destino con precios, fechas y disponibilidad.
- **Manejo de estado y optimización:** `useState` y `useEffect` con estados de carga, manejo de errores con reintento, caché en memoria y cancelación de solicitudes con `AbortController`.

## Estructura del proyecto
```text
src/
├── components/   # Navbar, DestinationCard, FlightCard, HotelCard, StatusMessage
├── mocks/        # data.js, handlers.js (REST + GraphQL), browser.js
├── pages/        # HomePage, DestinationDetail, NotFoundPage
├── services/     # travelApi.js (fetch REST/GraphQL, caché y formateo CLP)
├── styles/       # main.css (diseño responsivo con paleta TWA)
├── App.jsx       # Configuración de React Router
└── main.jsx      # Inicialización de MSW y montaje de React
```

## Instalación y ejecución local
```bash
# 1. Clonar el repositorio
git clone https://github.com/Programador-Rene-Alfaro-Ramirez/viajes-rene-alfaro-PFY2202.git
cd viajes-rene-alfaro-PFY2202

# 2. Instalar dependencias
npm install

# 3. Ejecutar servidor de desarrollo
npm run dev
```

## Despliegue en GitHub Pages
```bash
npm run deploy
```

## Pruebas de compatibilidad multi-navegador
Se verificó el correcto funcionamiento de la interfaz responsiva, navegación con React Router e intercepción de peticiones REST y GraphQL (MSW) en los siguientes navegadores:

| Navegador | Plataforma | REST (Destinos) | GraphQL (Vuelos/Hoteles) | React Router | Responsividad | Consola sin errores |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **Microsoft Edge** | Windows (Escritorio / DevTools Móvil) | OK | OK | OK | OK | OK |
| **Google Chrome** | Windows (Escritorio / DevTools Móvil) | OK | OK | OK | OK | OK |
| **Mozilla Firefox** | Windows (Escritorio / Vista Adaptable) | OK | OK | OK | OK | OK |

## Autor
- **René Alfaro Ramírez** — Desarrollo Frontend II (`PFY2202`)