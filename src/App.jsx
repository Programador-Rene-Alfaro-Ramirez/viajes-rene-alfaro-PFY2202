import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DestinationDetail from './pages/DestinationDetail';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <HashRouter>
      <div className="app-layout">
        <Navbar />

        <main className="container main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destino/:id" element={<DestinationDetail />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container footer-content">
            <p>
              <strong>TWA a la Chilena</strong> · Desarrollo Frontend II (PFY2202)
            </p>
            <p className="footer-note">
              Backend simulado con MSW (API REST + API GraphQL)
            </p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}