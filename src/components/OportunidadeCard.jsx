import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, DollarSign, ArrowUpRight, Sparkles } from 'lucide-react';

const statusStyles = {
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
  warning: 'bg-amber-50 text-amber-700 border-amber-200/60',
  info: 'bg-sky-50 text-sky-700 border-sky-200/60',
};

export default function OportunidadeCard({ oportunidade }) {
  const {
    titulo,
    categoria,
    descricaoCurta,
    valor,
    prazo,
    status,
    statusVariant = 'success',
    link,
    destaque
  } = oportunidade;

  return (
    <div className={`group relative bg-white border rounded-2xl p-6 shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-sm flex flex-col justify-between ${
      destaque ? 'border-blue-200 ring-1 ring-blue-500/10' : 'border-slate-100 hover:border-slate-300'
    }`}>
      <div>
        {/* Cabeçalho do Card: Tag + Status Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/50">
              {categoria}
            </span>
            {destaque && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200/60">
                <Sparkles className="w-3 h-3 text-amber-500" /> Destaque
              </span>
            )}
          </div>

          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusStyles[statusVariant] || statusStyles.success}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />
            {status}
          </span>
        </div>

        {/* Conteúdo Principal */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 leading-snug mb-2">
          {titulo}
        </h3>

        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
          {descricaoCurta}
        </p>
      </div>

      {/* Rodapé / Metadados */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-4 text-slate-500">
          <div className="flex items-center gap-1 font-medium text-slate-700">
            <DollarSign className="w-3.5 h-3.5 text-slate-400" />
            <span>{valor}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{prazo}</span>
          </div>
        </div>

        <Link
          to={link}
          className="inline-flex items-center gap-1 font-semibold text-blue-900 group-hover:text-blue-700 transition-colors"
        >
          <span>Acessar</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}