import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ valorInicial, onChangeDebounced, placeholder }) {
  const [valorLocal, setValorLocal] = useState(valorInicial || '');

  useEffect(() => {
    // Sincroniza caso o valor inicial mude pela URL
    setValorLocal(valorInicial || '');
  }, [valorInicial]);

  useEffect(() => {
    // Implementação do Debounce (300ms)
    const handler = setTimeout(() => {
      onChangeDebounced(valorLocal);
    }, 300);

    return () => clearTimeout(handler);
  }, [valorLocal, onChangeDebounced]);

  return (
    <div className="relative w-full max-w-lg shrink-0">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
      <input
        type="text"
        placeholder={placeholder || "Buscar por título, descrição ou tags..."}
        aria-label="Buscar por título, descrição ou tags"
        value={valorLocal}
        onChange={(e) => setValorLocal(e.target.value)}
        className="w-full bg-bg border border-border rounded-sm py-2.5 pl-10 pr-4 text-[15px] font-sans text-text placeholder:text-text-muted outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:border-transparent transition-all duration-200"
      />
    </div>
  );
}