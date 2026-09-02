import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom'; // Novo Import

export default function OportunidadeListItem({ oportunidade, origem }) {
  const [expandido, setExpandido] = useState(false);
  const textoAcao = origem === 'facilidades' ? 'Acessar site oficial' : 'Acessar site oficial';

  return (
    <div className="bg-surface border border-border mb-2 rounded-xl shadow-sm dark:shadow-none dark:border dark:border-border transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-0.5 hover:border-uem-verde/30 dark:hover:bg-surface-hover dark:hover:border-uem-verde/40">
      {/* Cabeçalho da Lista (Inalterado) */}
      <button
        onClick={() => setExpandido(!expandido)}
        className="w-full text-left p-4 flex flex-col gap-2 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        aria-expanded={expandido}
      >
        <div className="flex justify-between items-start w-full gap-4">
          <h3 className="text-[18px] font-bold text-text font-sans leading-tight">
            {oportunidade.titulo}
          </h3>
          <span className="text-text-muted shrink-0 mt-1">
            {expandido ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[12px] font-bold text-text-muted font-sans">
          {oportunidade.valor && (
            <span className="bg-bg px-2 py-1 border border-border">
              {oportunidade.valor}
            </span>
          )}
          {oportunidade.prazo && (
            <span className="text-text-muted">
              Prazo: {oportunidade.prazo}
            </span>
          )}
        </div>
      </button>

      {/* Corpo Expandido com Novos Botões */}
      {expandido && (
        <div className="p-4 pt-0">
          <div className="pt-3 border-t border-border">
            <p className="text-[15px] font-normal text-text-muted font-sans leading-relaxed mb-4">
              {oportunidade.descricao}
            </p>
            
            <div className="flex flex-wrap items-center gap-3">
              {/* Botão Secundário: Redireciona internamente para a página de detalhes */}
              <Link
                to={`/servico/${oportunidade.id}`}
                className="inline-block bg-bg hover:bg-surface-hover text-text text-[15px] font-bold py-2 px-6 transition-colors font-sans text-center border border-border outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Saber mais
              </Link>
              
              {/* Botão Principal: Apenas renderizado se o link externo existir */}
              {oportunidade.link && (
                <a
                  href={oportunidade.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-uem-verde hover:bg-uem-verde/90 text-text text-[15px] font-bold py-2 px-6 transition-colors font-sans text-center outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  {textoAcao}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}