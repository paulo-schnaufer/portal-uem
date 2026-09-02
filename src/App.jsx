import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy loading das páginas
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard')); // Será a nossa página "Explorar"
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const Sobre = lazy(() => import('./pages/Sobre'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-uem-verde font-bold">Carregando...</div>}>
        <Routes>
          <Route element={<Layout />}>
            {/* A nova Vitrine fica na raiz */}
            <Route path="/" element={<Home />} />
            
            {/* O motor de busca e filtros fica em /explorar */}
            <Route path="/explorar" element={<Dashboard />} />
            
            <Route path="/servico/:id" element={<ServiceDetailPage />} />
            <Route path="/sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}