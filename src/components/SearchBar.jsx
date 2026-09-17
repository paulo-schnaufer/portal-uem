import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ valorInicial, onChangeDebounced, placeholder }) {
  const [valorLocal, setValorLocal] = useState(valorInicial || '');

  useEffect(() => {
    // Implementação do Debounce (300ms)
    const handler = setTimeout(() => {
      onChangeDebounced(valorLocal);
    }, 300);

    return () => clearTimeout(handler);
  }, [valorLocal, onChangeDebounced]);

  // Atualiza caso o estado inicial seja alterado externamente (ex: botão de limpar filtros)
  useEffect(() => {
    setValorLocal(valorInicial || '');
  }, [valorInicial]);

  const limparBusca = () => {
    setValorLocal('');
    onChangeDebounced('');
  };

  return (
    <div className="relative w-full">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
      
      <input
        type="text"
        placeholder={placeholder || "Buscar por título, descrição ou tags..."}
        aria-label="Buscar por título, descrição ou tags"
        value={valorLocal}
        onChange={(e) => setValorLocal(e.target.value)}
        className="w-full bg-surface border border-border text-text rounded-xl py-3 pl-10 pr-10 text-[14px] font-sans placeholder:text-text-muted outline-none focus:border-uem-verde focus:ring-2 focus:ring-uem-verde/20 shadow-xs transition-all duration-200"
      />

      {/* Botão sutil para limpar o texto rapidamente */}
      {valorLocal && (
        <button
          onClick={limparBusca}
          type="button"
          aria-label="Limpar texto da busca"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text p-1 rounded-md transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}