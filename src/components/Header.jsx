import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Início' },
  { path: '/apoio', label: '1. Apoio e Permanência' },
  { path: '/academico', label: '2. Pesquisa, Ensino e Extensão' },
  { path: '/internacional', label: '3. Internacionalização' },
  { path: '/cultura', label: '4. Arte, Cultura e Bibliotecas' },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-blue-950 text-white border-b border-blue-900">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <Link to="/" className="text-left">
          <span className="text-xs uppercase tracking-wider text-blue-300 block">Universidade Estadual de Maringá</span>
          <h1 className="text-xl font-bold">Portal de Serviços Estudantis</h1>
        </Link>
      </div>

      <nav className="bg-blue-900 border-t border-blue-800">
        <div className="max-w-6xl mx-auto px-4 flex space-x-1 overflow-x-auto py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-1.5 rounded text-xs sm:text-sm font-medium whitespace-nowrap transition ${
                  isActive ? 'bg-blue-800 text-white font-bold' : 'text-blue-200 hover:bg-blue-800/60'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}