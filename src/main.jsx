import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/main.css';

async function enableMocking() {
  try {
    const { worker } = await import('./mocks/browser');
    await worker.start({
      serviceWorker: {
        url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
      },
      onUnhandledRequest: 'bypass',
    });
  } catch (error) {
    console.error('Error al iniciar MSW:', error);
  }
}

enableMocking().finally(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});