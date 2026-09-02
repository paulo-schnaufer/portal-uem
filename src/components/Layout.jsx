import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import BackToTop from './BackToTop';

export default function Layout() {
  return (
    <div className="min-h-screen bg-uem-cinza-fundo text-uem-preto flex flex-col font-sans">
      <header className="bg-uem-branco border-b border-uem-cinza-borda py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-[18px] font-bold text-uem-verde outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2">
          Portal de Serviços UEM
        </Link>
        <nav>
          <Link to="/sobre" className="text-[15px] font-bold text-uem-cinza-texto hover:text-uem-preto transition-colors">
            Sobre o Projeto
          </Link>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
        <BackToTop />
      </main>

      <footer className="border-t border-uem-cinza-borda bg-uem-branco py-6 text-center">
        <p className="text-[12px] font-normal text-uem-cinza-texto font-sans">
          © {new Date().getFullYear()} Universidade Estadual de Maringá - PET Economia
        </p>
      </footer>
    </div>
  );
}