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
    <div className="flex flex-wrap gap-2 py-4">
      {categorias.map((cat) => {
        const isAtivo = selecionadas.includes(cat);
        return (
          <button
            key={cat}
            onClick={() => toggleCategoria(cat)}
            aria-pressed={isAtivo}
            className={`px-4 py-1.5 rounded-full text-[13px] font-bold font-sans transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:ring-uem-verde ${
              isAtivo
                ? 'bg-uem-verde text-text border border-uem-verde'
                : 'bg-bg text-text-muted border border-border hover:bg-surface-hover hover:border-uem-verde hover:text-text'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}