import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react'; // Adicionado AlertCircle
import { Link } from 'react-router-dom';

export default function OportunidadeListItem({ oportunidade, origem }) {
  const [expandido, setExpandido] = useState(false);
  const textoAcao = origem === 'facilidades' ? 'Acessar site oficial' : 'Acessar edital';
  const prazoContemData = typeof oportunidade.prazo === 'string'
    && /\b(?:\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}[/-]\d{1,2}[/-]\d{1,2})\b/.test(oportunidade.prazo);

  return (
    <div className="surface-interactive bg-surface mb-2 rounded-xl dark:hover:bg-surface-hover dark:hover:border-uem-verde/40">
      {/* Cabeçalho da Lista */}
      <button
        onClick={() => setExpandido(!expandido)}
        className="w-full text-left p-4 flex flex-col gap-2 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        aria-expanded={expandido}
      >
        <div className="flex justify-between items-center w-full gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-[18px] font-bold text-text font-sans leading-tight">
              {oportunidade.titulo}
            </h3>

            {/* SELO DE NÃO VALIDADO / PENDENTE */}
            {oportunidade.validado === false && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-amber-500/10 text-amber-600 border border-amber-500/30 px-2 py-0.5 rounded-full">
                <AlertCircle size={12} />
                Em validação
              </span>
            )}
          </div>
          
          <span className="text-text-muted shrink-0">
            {expandido ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </span>
        </div>

        {(oportunidade.valor || oportunidade.prazo) && (
          <div className="flex flex-wrap items-center gap-3 text-[12px] font-bold text-text-muted font-sans">
            {oportunidade.valor && (
              <span className="bg-bg px-2 py-1 border border-border">
                {oportunidade.valor}
              </span>
            )}
            {oportunidade.prazo && (
              <span className={prazoContemData ? 'text-uem-vermelho' : 'text-text-muted'}>
                Prazo: {oportunidade.prazo}
              </span>
            )}
          </div>
        )}
      </button>

      {/* Corpo Expandido */}
      {expandido && (
        <div className="p-4 pt-0">
          <div className="pt-3 border-t border-border">
            {/* AVISO INFORMATIVO SE NÃO VALIDADO */}
            {oportunidade.validado === false && (
              <div className="mb-3 p-2.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-[13px]">
                ⚠️ <strong>Nota:</strong> Esta informação ainda está em processo de validação oficial com o setor responsável.
              </div>
            )}

            <p className="text-[15px] font-normal text-text-muted font-sans leading-relaxed mb-4">
              {oportunidade.descricao}
            </p>
            
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={`/servico/${oportunidade.id}`}
                className="inline-block bg-bg hover:bg-surface-hover text-text text-[15px] font-bold py-2 px-6 transition-colors font-sans text-center border border-border outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Saber mais
              </Link>
              
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