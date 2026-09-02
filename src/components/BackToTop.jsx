import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const alternarVisibilidade = () => {
      if (window.scrollY > 400) {
        setVisivel(true);
      } else {
        setVisivel(false);
      }
    };
    window.addEventListener('scroll', alternarVisibilidade);
    return () => window.removeEventListener('scroll', alternarVisibilidade);
  }, []);

  const subirParaTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visivel) return null;

  return (
    <button
      onClick={subirParaTopo}
      aria-label="Voltar ao topo da página"
      className="fixed bottom-6 right-6 p-3 bg-text hover:bg-uem-verde text-bg rounded-full shadow-lg transition-all duration-200 ease-in-out hover:-translate-y-0.5 z-50 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <ArrowUp size={24} />
    </button>
  );
}