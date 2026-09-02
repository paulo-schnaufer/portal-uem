import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { oportunidadesData } from '../data/oportunidades';
import { facilidadesData } from '../data/facilidades';

export default function Home() {

  // Coleta todos os itens marcados com destaque: true nos arquivos de dados
  const itensDestaque = [...oportunidadesData, ...facilidadesData].filter(item => item.destaque);

  // Extrai dinamicamente as categorias únicas para gerar os cards
  const todasCategorias = Array.from(
    new Set([...oportunidadesData, ...facilidadesData].map(item => item.categoria))
  ).sort();

  return (
    <div className="bg-uem-cinza-fundo min-h-screen font-sans pb-16">
      
      {/* 1. Hero Section - Design Limpo e Direto */}
      <section className="relative w-full h-[400px] lg:h-[450px] bg-uem-cinza-fundo flex items-center justify-center overflow-hidden">
        
        <img
          src="/hero-bg.webp"
          alt="Vista do campus sede da Universidade Estadual de Maringá"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        
        <div className="absolute inset-0 bg-uem-preto/60 z-20"></div>
        
        <div className="relative z-30 text-center px-4 max-w-3xl mx-auto pt-4">
          <h1 className="text-uem-branco text-[36px] lg:text-[48px] font-extrabold tracking-tight leading-tight mb-4 drop-shadow-sm">
            O seu hub central de serviços acadêmicos
          </h1>
          <p className="text-gray-200 text-[18px] lg:text-[20px] font-medium mb-8 drop-shadow-sm max-w-2xl mx-auto">
            Bolsas, editais, locais e suportes da Universidade Estadual de Maringá centralizados para você.
          </p>
          <Link
            to="/explorar"
            className="inline-flex items-center gap-2 bg-uem-verde hover:bg-uem-verde/90 text-uem-branco font-bold py-3 px-8 rounded-sm transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md text-[16px] outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2"
          >
            Explorar o diretório
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* 2. Seção "Em Destaque" (Carrossel Horizontal com Scroll Snap) */}
      {itensDestaque.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <h2 className="text-[24px] font-bold text-uem-preto mb-6">Em destaque</h2>
          
          <div className="flex overflow-x-auto gap-6 pt-2 pb-6 hide-scrollbar snap-x snap-mandatory">
            {itensDestaque.map((item) => (
              <Link
                key={item.id}
                to={`/servico/${item.id}`}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] bg-uem-branco border border-uem-cinza-borda p-6 rounded-sm hover:border-uem-verde transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2"
              >
                <div>
                  <span className="inline-block bg-uem-verde/10 text-uem-verde text-[11px] font-bold px-2 py-1 rounded-sm mb-3 uppercase tracking-wider">
                    {item.categoria}
                  </span>
                  <h3 className="text-[18px] font-bold text-uem-preto mt-2 mb-3 leading-tight">
                    {item.titulo}
                  </h3>
                  <p className="text-[14px] text-uem-preto-suave line-clamp-3">
                    {item.descricao}
                  </p>
                </div>
                <div className="mt-6 text-[14px] font-bold text-uem-preto flex items-center gap-1 group">
                  Ver detalhes
                  <ArrowRight size={16} className="text-uem-cinza-texto group-hover:text-uem-verde transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 3. Seção de Categorias (Grid Responsivo) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-[24px] font-bold text-uem-preto mb-6">Navegue por categoria</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {todasCategorias.map((cat) => (
            /* ROTA ATUALIZADA AQUI */
            <Link
              key={cat}
              to={`/explorar?cat=${encodeURIComponent(cat)}`}
              className="bg-uem-branco border border-uem-cinza-borda shadow-sm p-6 text-center hover:bg-uem-cinza-fundo hover:border-uem-verde transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md group rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2"
            >
              <h3 className="text-[16px] font-bold text-uem-preto group-hover:text-uem-verde transition-colors">
                {cat}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Seção Final de CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center bg-uem-branco border border-uem-cinza-borda p-8 lg:p-12 rounded-sm">
        <h2 className="text-[24px] font-bold text-uem-preto mb-4">
          Não encontrou o que procurava?
        </h2>
        <p className="text-[16px] text-uem-preto-suave mb-8 max-w-2xl mx-auto">
          Nosso portal é colaborativo e construído para a comunidade. Se você sentiu falta de algum serviço, edital ou facilidade, nos avise!
        </p>
        <a
          href="https://forms.gle/yCVJKTALwQjKRLMy9"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-uem-preto hover:bg-uem-preto-suave text-uem-branco font-bold py-3 px-8 rounded-sm transition-colors text-[16px] outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2"
        >
          Sugerir uma facilidade
          <ExternalLink size={18} />
        </a>
      </section>

    </div>
  );
}