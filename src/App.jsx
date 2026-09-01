import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ServiceDetailPage from './pages/ServiceDetailPage'; // Import do Template

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apoio" element={<CategoryPage categoryId="apoio" />} />
            <Route path="/academico" element={<CategoryPage categoryId="academico" />} />
            <Route path="/internacional" element={<CategoryPage categoryId="internacional" />} />
            <Route path="/cultura" element={<CategoryPage categoryId="cultura" />} />
            
            {/* Rota Dinâmica que atende todas as 15+ páginas de detalhes */}
            <Route path="/servico/:id" element={<ServiceDetailPage />} />
          </Routes>
        </div>

        <footer className="border-t border-gray-200 bg-gray-50 py-4 text-center text-xs text-gray-500">
          Universidade Estadual de Maringá - Portal de Serviços Estudantis
        </footer>
      </div>
    </Router>
  );
}