import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { oportunidadesData } from '../data/oportunidades';
import { facilidadesData } from '../data/facilidades';
import categoriaIcones from '../utils/categoriaIcones';

export default function Home() {

  // Coleta todos os itens marcados com destaque: true nos arquivos de dados
  const itensDestaque = [...oportunidadesData, ...facilidadesData].filter(item => item.destaque);

  // Extrai dinamicamente as categorias únicas para gerar os cards
  const todasCategorias = Array.from(
    new Set([...oportunidadesData, ...facilidadesData].map(item => item.categoria))
  ).sort();

  return (
    <div className="bg-bg min-h-screen font-sans pb-16">
      
      {/* 1. Hero Section - Design Limpo e Direto */}
      <section className="relative w-full h-[400px] lg:h-[450px] bg-bg flex flex-col items-start justify-end px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 overflow-hidden">
        
        <img
          src="/hero-bg.webp"
          alt="Vista do campus sede da Universidade Estadual de Maringá"
          className="absolute inset-0 w-full h-full object-cover z-10 saturate-[0.85] contrast-[1.05]"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10 z-20"></div>
        
        <div className="relative z-30 w-full max-w-xl flex flex-col items-start text-left">
          <h1 className="font-display text-white text-[36px] lg:text-[48px] font-bold tracking-tight leading-tight mb-4 drop-shadow-md">
            Sua UEM, com facilidades e oportunidades.
          </h1>
          <p className="text-white/90 text-[18px] lg:text-[20px] font-medium mb-8 drop-shadow-sm">
            Bolsas, editais, locais e suportes da universidade, tudo num só lugar.
          </p>
          <Link
            to="/explorar"
            className="relative z-30 inline-flex items-center gap-2 bg-uem-verde text-text font-bold py-3 px-8 rounded-none transition-all duration-200 hover:brightness-110 text-[16px] outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Ver o que a UEM oferece
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 2. Seção "Em Destaque" (Carrossel Horizontal com Scroll Snap) */}
      {itensDestaque.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <h2 className="font-display text-[24px] font-bold text-text mb-6">Em destaque</h2>
          
          <div className="flex overflow-x-auto gap-6 pt-2 pb-6 hide-scrollbar snap-x snap-mandatory">
            {itensDestaque.map((item) => (
              <Link
                key={item.id}
                to={`/servico/${item.id}`}
                className="border border-border border-b-2 border-b-uem-verde snap-start shrink-0 w-[280px] sm:w-[320px] bg-surface p-6 rounded-sm flex flex-col justify-between transition-colors duration-200 hover:bg-surface-hover outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <div>
                  <span className="border-l-2 border-uem-verde pl-2 text-uem-verde text-[11px] font-bold uppercase tracking-wider">
                    {item.categoria}
                  </span>
                  <h3 className="text-[19px] font-extrabold text-text mt-2 mb-3 leading-tight">
                    {item.titulo}
                  </h3>
                  <p className="text-[13px] text-text-muted/80 leading-relaxed line-clamp-3">
                    {item.descricao}
                  </p>
                </div>
                <div className="mt-6 text-[14px] font-bold text-text hover:underline hover:underline-offset-4 hover:text-uem-verde">
                  Ver detalhes
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 3. Seção de Categorias (Grid Responsivo) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h2 className="font-display text-[24px] font-bold text-text mb-6">Navegue por categoria</h2>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {todasCategorias.map((cat, index) => {
            const IconeCategoria = categoriaIcones[cat];

            return (
              <React.Fragment key={cat}>
                {index > 0 && <span aria-hidden="true" className="text-border">|</span>}
                <Link
                  to={`/explorar?cat=${encodeURIComponent(cat)}`}
                  className="inline-flex items-center gap-1 text-[15px] font-bold text-text hover:underline hover:underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <IconeCategoria size={14} aria-hidden="true" />
                  {cat}
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* 4. Seção Final de CTA */}
      <section className="surface-outline max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center bg-surface p-8 lg:p-12 rounded-sm">
        <h2 className="text-[24px] font-bold text-text mb-4">
          Não encontrou o que procurava?
        </h2>
        <p className="text-[16px] text-text-muted mb-8 max-w-2xl mx-auto">
          Nosso portal é colaborativo e construído para a comunidade. Se você sentiu falta de algum serviço, edital ou facilidade, nos avise!
        </p>
        <a
          href="https://forms.gle/yCVJKTALwQjKRLMy9"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-text hover:bg-uem-verde text-bg font-bold py-3 px-8 rounded-sm transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Sugerir uma facilidade
          <ExternalLink size={18} />
        </a>
      </section>

    </div>
  );
}