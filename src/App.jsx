import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SkeletonCard from './components/SkeletonCard';

// Lazy loading das páginas
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard')); // Será a nossa página "Explorar"
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const Sobre = lazy(() => import('./pages/Sobre'));

export default function App() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('tema', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-bg flex items-center justify-center px-4"><SkeletonCard /></div>}>
        <Routes>
          <Route element={<Layout isDark={isDark} onToggleTheme={() => setIsDark((current) => !current)} />}>
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