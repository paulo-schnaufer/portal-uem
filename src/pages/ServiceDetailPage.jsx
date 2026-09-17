import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ExternalLink, Tag } from 'lucide-react';
import { oportunidadesData } from '../data/oportunidades';
import { facilidadesData } from '../data/facilidades';
import iconesPorCategoria from '../utils/categoriaIcones';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const servico = [...oportunidadesData, ...facilidadesData].find((s) => s.id === id);
  const ehOportunidade = oportunidadesData.some((item) => item.id === id);

  if (!servico) {
    return (
      <div className="min-h-screen bg-bg py-8 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-text mb-6">
            Serviço não encontrado ou desativado.
          </h1>
          <Link to="/explorar" className="text-uem-verde hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Voltar para o diretório
          </Link>
        </div>
      </div>
    );
  }

  const IconeCategoria = iconesPorCategoria[servico.categoria] || BookOpen;

  return (
    <div className="min-h-screen bg-bg py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Banner do Ícone Compacto */}
        <div className="h-32 sm:h-40 bg-surface border border-border rounded-2xl flex items-center justify-center shadow-xs">
          <div className="p-4 rounded-2xl bg-uem-verde/10 text-uem-verde">
            <IconeCategoria size={48} strokeWidth={1.5} />
          </div>
        </div>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px] text-text-muted">
          <Link to="/" className="hover:text-uem-verde transition-colors">Início</Link>
          <span>/</span>
          <Link to="/explorar" className="hover:text-uem-verde transition-colors">Explorar</Link>
          <span>/</span>
          <span className="text-text font-medium">{servico.titulo}</span>
        </nav>

        {/* Título Principal */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text leading-snug">
          {servico.titulo}
        </h1>

        {/* Grid de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface border border-border p-6 rounded-2xl space-y-3">
            <h2 className="text-[16px] font-bold text-text">Sobre o serviço</h2>
            <p className="text-text-muted text-[15px] leading-relaxed">
              {servico.descricao}
            </p>
          </div>

          <div className="bg-surface border border-border p-6 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-[16px] font-bold text-text border-b border-border/60 pb-3">
                Acesso Direto
              </h3>
              
              <a
                href={servico.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-uem-verde hover:bg-uem-verde/90 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-xs"
              >
                {ehOportunidade ? 'Acessar edital' : 'Acessar site oficial'}
                <ExternalLink size={16} />
              </a>

              <div className="space-y-3 border-t border-border/60 pt-4 text-[13px]">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-text-muted">Categoria</span>
                  <span className="text-text font-semibold">{servico.categoria}</span>
                </div>

                {servico.tags?.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-text-muted block">Tags</span>
                    <div className="flex flex-wrap gap-1.5">
                      {servico.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-semibold text-text-muted bg-bg border border-border/60 px-2 py-0.5 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <p className="text-[12px] text-text-muted text-center">
              Você será redirecionado para o portal oficial da UEM.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}