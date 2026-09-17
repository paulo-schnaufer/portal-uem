import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles, ChevronRight, Compass } from 'lucide-react';
import { oportunidadesData } from '../data/oportunidades';
import { facilidadesData } from '../data/facilidades';
import categoriaIcones from '../utils/categoriaIcones';

export default function Home() {
  const todosItens = [...oportunidadesData, ...facilidadesData];

  // Coleta os itens marcados como destaque
  const itensDestaque = todosItens.filter(item => item.destaque);

  // Extrai dinamicamente as categorias únicas
  const todasCategorias = Array.from(
    new Set(todosItens.map(item => item.categoria))
  ).sort();

  return (
    <div className="bg-bg min-h-screen font-sans pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[420px] lg:min-h-[460px] bg-bg flex flex-col justify-end px-4 sm:px-6 lg:px-8 pb-12 pt-20 overflow-hidden border-b border-border">
        
        <img
          src="/hero-bg.webp"
          alt="Vista do campus sede da Universidade Estadual de Maringá"
          className="absolute inset-0 w-full h-full object-cover z-10 brightness-[0.75] contrast-[1.05]"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent z-20"></div>
        
        <div className="relative z-30 max-w-3xl flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface/90 border border-border/80 text-text-muted text-[13px] font-medium mb-4 backdrop-blur-sm">
            <Sparkles size={14} className="text-uem-verde" />
            <span>Projeto de Extensão — PET Economia UEM</span>
          </div>

          <h1 className="text-text text-[32px] sm:text-[44px] font-black tracking-tight leading-[1.1] mb-4">
            Encontre auxílios, bolsas e serviços da UEM em segundos.
          </h1>
          
          <p className="text-text-muted text-[16px] sm:text-[18px] max-w-2xl font-normal leading-relaxed mb-8">
            Sua central de informações acadêmicas. Acesse sem complicações as facilidades e oportunidades da UEM.
          </p>

          <Link
            to="/explorar"
            className="inline-flex items-center gap-2.5 bg-uem-verde hover:bg-uem-verde/90 text-text font-bold py-3.5 px-7 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-uem-verde/20 text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-uem-verde"
          >
            Explorar todas as opções
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 2. Seção "Em Destaque" - Grid no Desktop */}
      {itensDestaque.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[22px] sm:text-[24px] font-bold text-text">
              Em destaque
            </h2>
            <Link 
              to="/explorar" 
              className="text-[13px] font-bold text-uem-verde hover:underline inline-flex items-center gap-1"
            >
              Ver todos ({todosItens.length})
              <ChevronRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {itensDestaque.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                to={`/servico/${item.id}`}
                className="bg-surface border border-border hover:border-uem-verde/60 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md group/card outline-none focus-visible:ring-2 focus-visible:ring-uem-verde"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[12px] font-semibold text-uem-verde bg-uem-verde/10 border border-uem-verde/20 px-2.5 py-0.5 rounded-md">
                      {item.categoria}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-bold text-text group-hover/card:text-uem-verde transition-colors leading-snug mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-[13px] text-text-muted leading-relaxed line-clamp-3">
                    {item.descricao}
                  </p>
                </div>
                
                <div className="mt-6 pt-3 border-t border-border/60 flex items-center justify-between text-[13px] font-bold text-text group-hover/card:text-uem-verde">
                  <span>Ver detalhes</span>
                  <ArrowRight size={15} className="group-hover/card:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 3. Seção de Categorias - Grid de Cards Interativos */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-[22px] sm:text-[24px] font-bold text-text mb-6">
          Navegue por categoria
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {todasCategorias.map((cat) => {
            const IconeCategoria = categoriaIcones[cat] || Compass;
            const qtdItens = todosItens.filter(item => item.categoria === cat).length;

            return (
              <Link
                key={cat}
                to={`/explorar?cat=${encodeURIComponent(cat)}`}
                className="group flex items-center justify-between p-4 bg-surface hover:bg-surface-hover border border-border hover:border-uem-verde/50 rounded-xl transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-uem-verde/10 text-uem-verde group-hover:scale-105 transition-transform">
                    <IconeCategoria size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[15px] text-text group-hover:text-uem-verde transition-colors leading-snug">
                      {cat}
                    </h3>
                    <span className="text-[12px] text-text-muted block mt-0.5">
                      {qtdItens} {qtdItens === 1 ? 'item disponível' : 'itens disponíveis'}
                    </span>
                  </div>
                </div>

                <ChevronRight size={18} className="text-text-muted group-hover:text-uem-verde group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. Seção Final de CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="bg-surface border border-border p-8 lg:p-12 rounded-2xl relative overflow-hidden">
          <h2 className="text-[22px] sm:text-[26px] font-bold text-text mb-3">
            Sentiu falta de algum serviço ou edital?
          </h2>
          <p className="text-[15px] text-text-muted mb-8 max-w-xl mx-auto leading-relaxed">
            Nosso portal é mantido de forma colaborativa. Envie sua sugestão para atualizarmos a plataforma para toda a comunidade UEM.
          </p>
          <a
            href="https://forms.gle/yCVJKTALwQjKRLMy9"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-text hover:bg-uem-verde hover:text-bg text-bg font-bold py-3 px-8 rounded-xl transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde"
          >
            Sugerir facilidade ou oportunidade
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

    </div>
  );
}