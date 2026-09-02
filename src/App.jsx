import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ServiceDetailPage from './pages/ServiceDetailPage';

export default function App() {
  return (
    <Router>
      {/* 
        Substituído: bg-slate-50 -> bg-uem-cinza-fundo 
        Substituído: text-slate-900 -> text-uem-preto 
      */}
      <div className="min-h-screen bg-uem-cinza-fundo text-uem-preto flex flex-col font-sans">
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/servico/:id" element={<ServiceDetailPage />} />
          </Routes>
        </main>

        {/* 
          Substituído: border-slate-200 -> border-uem-cinza-borda
          Substituído: bg-white -> bg-uem-branco
        */}
        <footer className="border-t border-uem-cinza-borda bg-uem-branco py-6 text-center">
          {/* 
            Aplicada a escala tipográfica de Metadados: 12px, Regular, Cinza Texto 
            Substituído: text-slate-500 -> text-uem-cinza-texto
          */}
          <p className="text-[12px] font-normal text-uem-cinza-texto font-sans">
            © {new Date().getFullYear()} Universidade Estadual de Maringá - Portal de Serviços Estudantis
          </p>
        </footer>
        
      </div>
    </Router>
  );
}