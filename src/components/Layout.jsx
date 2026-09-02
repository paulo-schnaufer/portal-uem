import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import BackToTop from './BackToTop';

export default function Layout({ isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col font-sans">
      <header className={`sticky top-0 z-40 py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all duration-200 ${isScrolled ? 'backdrop-blur-md bg-surface/70 border-b border-border/50' : 'bg-surface border-b border-border'}`}>
        <Link to="/" className="text-[18px] font-bold text-uem-verde outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
          Portal de Serviços UEM
        </Link>
        <nav>
          <Link to="/sobre" className="text-[15px] font-bold text-text-muted hover:text-text transition-colors outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
            Sobre o Projeto
          </Link>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className="ml-4 inline-flex rounded p-1 text-text-muted transition-colors hover:text-text outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
        <BackToTop />
      </main>

      <footer className="border-t border-border bg-surface py-6 text-center">
        <p className="text-[12px] font-normal text-text-muted font-sans">
          © {new Date().getFullYear()} Universidade Estadual de Maringá - PET Economia
        </p>
      </footer>
    </div>
  );
}