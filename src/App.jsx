import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ServiceDetailPage from './pages/ServiceDetailPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/servico/:id" element={<ServiceDetailPage />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-200 bg-white py-6 text-center">
          <p className="text-xs font-medium text-slate-500">
            © {new Date().getFullYear()} Universidade Estadual de Maringá - Portal de Serviços Estudantis
          </p>
        </footer>
      </div>
    </Router>
  );
}