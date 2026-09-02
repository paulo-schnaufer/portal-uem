import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function OportunidadeListItem({ oportunidade }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className="bg-uem-branco border border-uem-cinza-borda mb-2 transition-colors hover:border-uem-verde">
      {/* Cabeçalho da Lista - Clicável para expandir */}
      <button
        onClick={() => setExpandido(!expandido)}
        className="w-full text-left p-4 flex flex-col gap-2 focus:outline-none focus:ring-2 focus:ring-uem-verde focus:ring-offset-1"
        aria-expanded={expandido}
      >
        <div className="flex justify-between items-start w-full gap-4">
          {/* Título: Arial Bold, 18px, Preto UEM */}
          <h3 className="text-[18px] font-bold text-uem-preto font-sans leading-tight">
            {oportunidade.titulo}
          </h3>
          
          <span className="text-uem-preto-suave shrink-0 mt-1">
            {expandido ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </span>
        </div>

        {/* Metadados: Arial Bold, 12px, Cinza Texto */}
        <div className="flex flex-wrap items-center gap-3 text-[12px] font-bold text-uem-cinza-texto font-sans">
          {/* Valor */}
          <span className="bg-uem-cinza-fundo px-2 py-1 border border-uem-cinza-borda">
            {oportunidade.valor}
          </span>
          
          {/* Prazo Estático */}
          {oportunidade.prazo && (
            <span className="text-uem-preto-suave">
              Prazo: {oportunidade.prazo}
            </span>
          )}
        </div>
      </button>

      {/* Corpo Expandido */}
      {expandido && (
        <div className="p-4 pt-0">
          <div className="pt-3 border-t border-uem-cinza-borda">
            {/* Corpo de Texto: Arial Regular, 15px, Preto Suave */}
            <p className="text-[15px] font-normal text-uem-preto-suave font-sans leading-relaxed mb-4">
              {oportunidade.descricao}
            </p>
            
            {/* Botão de Ação: Verde UEM, Texto Branco UEM */}
            <a
              href={oportunidade.link || '#'}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-uem-verde hover:bg-uem-verde/90 text-uem-branco text-[15px] font-bold py-2 px-6 transition-colors font-sans text-center"
            >
              Acessar Edital / Serviço
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}