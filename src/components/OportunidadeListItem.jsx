import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, ArrowRight, Tag, Calendar, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OportunidadeListItem({ oportunidade, origem }) {
  const [expandido, setExpandido] = useState(false);
  const textoAcao = origem === 'facilidades' ? 'Acessar site oficial' : 'Acessar edital';

  return (
    <div 
      className={`border rounded-xl transition-all duration-200 overflow-hidden ${
        expandido 
          ? 'bg-surface border-uem-verde/50 shadow-md' 
          : 'bg-surface/60 hover:bg-surface border-border hover:border-border/80'
      }`}
    >
      {/* Cabeçalho do Accordion */}
      <button
        onClick={() => setExpandido(!expandido)}
        className="w-full text-left p-4 flex items-center justify-between gap-4 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde"
        aria-expanded={expandido}
      >
        <div className="flex items-center gap-3 flex-wrap min-w-0">
          <h3 className="text-[16px] sm:text-[17px] font-bold text-text leading-snug">
            {oportunidade.titulo}
          </h3>

          {oportunidade.validado === false && (
            <span className="text-[11px] font-medium text-text-muted bg-bg border border-border/60 px-2.5 py-0.5 rounded-full">
              Em validação
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {!expandido && oportunidade.prazo && (
            <span className="hidden sm:inline-block text-[12px] font-medium text-text-muted bg-bg px-2.5 py-1 rounded-md border border-border/60">
              {oportunidade.prazo}
            </span>
          )}

          <span className={`p-1 rounded-lg transition-transform duration-200 ${expandido ? 'text-uem-verde' : 'text-text-muted'}`}>
            {expandido ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </div>
      </button>

      {/* Conteúdo Expandido */}
      {expandido && (
        <div className="px-4 pb-4 pt-2 border-t border-border/40 bg-bg/20 space-y-4">
          <p className="text-[14px] text-text-muted font-normal leading-relaxed">
            {oportunidade.descricao}
          </p>

          {/* Badges de Valor e Prazo */}
          {(oportunidade.valor || oportunidade.prazo) && (
            <div className="flex flex-wrap items-center gap-2 text-[12px] font-medium">
              {oportunidade.valor && (
                <span className="inline-flex items-center gap-1.5 bg-surface px-3 py-1 rounded-lg border border-border text-text">
                  <DollarSign size={13} className="text-uem-verde" />
                  {oportunidade.valor}
                </span>
              )}
              {oportunidade.prazo && (
                <span className="inline-flex items-center gap-1.5 bg-surface px-3 py-1 rounded-lg border border-border text-text-muted">
                  <Calendar size={13} />
                  Prazo: {oportunidade.prazo}
                </span>
              )}
            </div>
          )}

          {/* Tags do Item */}
          {oportunidade.tags && oportunidade.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 my-2">
              <Tag size={13} className="text-uem-verde shrink-0 mr-0.5" />
              {oportunidade.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-[11px] font-semibold text-text/90 bg-surface border border-border/80 px-2.5 py-0.5 rounded-md hover:border-uem-verde/50 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Ações / Botões */}
          <div className="pt-3 flex flex-wrap items-center gap-2.5">
            <Link
              to={`/servico/${oportunidade.id}`}
              className="inline-flex items-center gap-2 bg-surface hover:bg-surface-hover text-text text-[13px] font-bold py-2 px-4 rounded-xl transition-all duration-150 border border-border outline-none focus-visible:ring-2 focus-visible:ring-uem-verde"
            >
              Saber mais
              <ArrowRight size={14} />
            </Link>
            
            {oportunidade.link && (
              <a
                href={oportunidade.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-uem-verde hover:bg-uem-verde/90 text-text text-[13px] font-bold py-2 px-4 rounded-xl transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde"
              >
                {textoAcao}
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}