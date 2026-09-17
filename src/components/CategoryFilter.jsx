import React from 'react';

export default function CategoryFilter({ categorias, selecionadas, onChange }) {
  const toggleCategoria = (cat) => {
    if (selecionadas.includes(cat)) {
      onChange(selecionadas.filter((c) => c !== cat));
    } else {
      onChange([...selecionadas, cat]);
    }
  };

  return (
    <div className="flex items-center gap-2 py-2 overflow-x-auto sm:flex-wrap sm:overflow-visible hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
      {categorias.map((cat) => {
        const isAtivo = selecionadas.includes(cat);
        return (
          <button
            key={cat}
            onClick={() => toggleCategoria(cat)}
            aria-pressed={isAtivo}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-[13px] font-bold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-uem-verde ${
              isAtivo
                ? 'bg-uem-verde text-white border border-uem-verde shadow-xs'
                : 'bg-surface text-text-muted border border-border hover:bg-surface-hover hover:border-uem-verde/60 hover:text-text'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}