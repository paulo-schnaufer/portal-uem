import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  ExternalLink,
  GraduationCap,
  Languages,
  Library,
  Search,
  Utensils,
} from 'lucide-react';
import { oportunidadesData } from '../data/oportunidades';
import { facilidadesData } from '../data/facilidades';

const iconesPorCategoria = {
  Alimentação: Utensils,
  'Assistência Estudantil': GraduationCap,
  Biblioteca: Library,
  Estágio: Search,
  Extensão: BookOpen,
  Idiomas: Languages,
  Intercâmbio: GraduationCap,
  Pesquisa: Search,
};

export default function ServiceDetailPage() {
  const { id } = useParams();
  const servico = [...oportunidadesData, ...facilidadesData].find((s) => s.id === id);

  if (!servico) {
    return (
      <div className="min-h-screen bg-bg py-8 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-6">
            Esse serviço não está mais disponível por aqui. Ele pode ter mudado de lugar — volte para o diretório e procure de novo.
          </h1>
          <Link to="/explorar" className="text-text-muted hover:text-uem-verde inline-flex items-center gap-2 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm">
            <ArrowLeft size={16} /> Voltar para o diretório
          </Link>
        </div>
      </div>
    );
  }

  const IconeCategoria = iconesPorCategoria[servico.categoria] || BookOpen;

  return (
    <div className="min-h-screen bg-bg py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 aspect-[16/9] bg-uem-verde-suave dark:bg-surface-hover rounded-xl flex items-center justify-center">
          <IconeCategoria className="text-uem-verde" size={96} strokeWidth={1.25} aria-hidden="true" />
        </div>

        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[14px] text-text-muted">
          <Link to="/" className="hover:text-uem-verde transition-colors outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm">
            Início
          </Link>
          <span aria-hidden="true">/</span>
          <Link to="/explorar" className="hover:text-uem-verde transition-colors outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm">
            Explorar
          </Link>
          <span aria-hidden="true">/</span>
          <Link to={`/explorar?cat=${encodeURIComponent(servico.categoria)}`} className="hover:text-uem-verde transition-colors outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm">
            {servico.categoria}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-text" aria-current="page">{servico.titulo}</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-uem-verde-suave dark:bg-surface-hover text-uem-verde px-3 py-1.5 rounded-full text-[13px] font-bold mb-4">
          <IconeCategoria size={16} aria-hidden="true" />
          {servico.categoria}
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-8">
          {servico.titulo}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface border border-border p-6 rounded-sm shadow-sm">
            <h2 className="text-xl font-bold text-text mb-4">Sobre o serviço</h2>
            <p className="text-text-muted text-[16px] leading-relaxed">
              {servico.descricao}
            </p>
          </div>

          <div className="bg-surface border border-border p-6 rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-text mb-4 border-b border-border pb-2">
                Acesso Direto
              </h3>
            </div>
            <div className="mt-4">
              <a
                href={servico.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-uem-verde hover:bg-uem-verde/90 text-text font-bold py-3 px-4 rounded-sm transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Acessar página oficial
                <ExternalLink size={18} />
              </a>
              <div className="mt-4 space-y-3 border-t border-border pt-4 text-[13px] text-text-muted">
                <div className="flex justify-between gap-4">
                  <span>Categoria</span>
                  <span className="text-text font-semibold text-right">{servico.categoria}</span>
                </div>
                {servico.prazo && (
                  <div className="flex justify-between gap-4">
                    <span>Prazo</span>
                    <span className="text-text font-semibold text-right">{servico.prazo}</span>
                  </div>
                )}
                {servico.tags?.length > 0 && (
                  <div className="flex justify-between gap-4">
                    <span>Tags</span>
                    <span className="text-text font-semibold text-right">{servico.tags.join(', ')}</span>
                  </div>
                )}
              </div>
              <p className="mt-3 text-[13px] text-text-muted text-center">
                Você será redirecionado para o portal oficial da UEM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}