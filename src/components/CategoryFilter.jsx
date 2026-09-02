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
            className={`px-4 py-1.5 rounded-full text-[13px] font-bold font-sans transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-uem-verde ${
              isAtivo
                ? 'bg-uem-verde text-uem-branco border border-uem-verde'
                : 'bg-uem-cinza-fundo text-uem-cinza-texto border border-uem-cinza-borda hover:border-uem-verde hover:text-uem-preto'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}