import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import OportunidadeListItem from '../components/OportunidadeListItem';
// import FacilidadeListItem from '../components/FacilidadeListItem'; 
import { oportunidadesData } from '../data/oportunidades';
import { facilidadesData } from '../data/facilidades';
import AtalhosLista from '../components/AtalhosLista';

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [abaAtiva, setAbaAtiva] = useState('oportunidades');

  // Lemos a URL: 'q' para busca, 'cat' para categorias (separadas por vírgula)
  const queryBusca = searchParams.get('q') || '';
  const queryCategorias = searchParams.get('cat') ? searchParams.get('cat').split(',') : [];

  // Função para atualizar a URL preservando os parâmetros
  const updateUrlParams = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, Array.isArray(value) ? value.join(',') : value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const dadosOriginais = abaAtiva === 'oportunidades' ? oportunidadesData : facilidadesData;
  
  // Extrai dinamicamente todas as categorias possíveis dos dados atuais
  const todasCategorias = useMemo(() => {
    const cats = new Set(dadosOriginais.map(item => item.categoria));
    return Array.from(cats).sort();
  }, [dadosOriginais]);

  // Filtra e Agrupa os dados
  const dadosFiltrados = useMemo(() => {
    const termo = queryBusca.toLowerCase();
    
    const filtrados = dadosOriginais.filter((item) => {
      // 1. Filtro por Categoria (Multi-seleção)
      if (queryCategorias.length > 0 && !queryCategorias.includes(item.categoria)) {
        return false;
      }
      // 2. Filtro Textual (Título, Descrição ou Tags)
      if (termo) {
        const tituloMatch = item.titulo?.toLowerCase().includes(termo);
        const descMatch = item.descricao?.toLowerCase().includes(termo);
        const tagsMatch = item.tags?.some(tag => tag.toLowerCase().includes(termo));
        return tituloMatch || descMatch || tagsMatch;
      }
      return true;
    });

    // Agrupa por categoria para renderização
    return filtrados.reduce((acc, item) => {
      if (!acc[item.categoria]) acc[item.categoria] = [];
      acc[item.categoria].push(item);
      return acc;
    }, {});
  }, [dadosOriginais, queryBusca, queryCategorias]);

  const categoriasAtivas = Object.keys(dadosFiltrados);

  return (
    <div className="min-h-screen bg-bg font-sans">
      
      {/* Nova Barra Superior Integrada */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <SearchBar 
              valorInicial={queryBusca} 
              onChangeDebounced={(val) => updateUrlParams('q', val)} 
            />
            <AtalhosLista />
          </div>
          
          <CategoryFilter 
            categorias={todasCategorias}
            selecionadas={queryCategorias}
            onChange={(cats) => updateUrlParams('cat', cats.length > 0 ? cats : null)}
          />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Abas */}
        <div className="flex border-b border-border mb-8">
          <button
            onClick={() => { setAbaAtiva('oportunidades'); updateUrlParams('cat', null); }}
            className={`pb-3 px-4 text-[15px] font-bold transition-colors border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
              abaAtiva === 'oportunidades' ? 'border-uem-verde text-uem-verde' : 'border-transparent text-text-muted hover:text-text'
            }`}
          >
            Bolsas e Editais
          </button>
          <button
            onClick={() => { setAbaAtiva('facilidades'); updateUrlParams('cat', null); }}
            className={`pb-3 px-4 text-[15px] font-bold transition-colors border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
              abaAtiva === 'facilidades' ? 'border-uem-verde text-uem-verde' : 'border-transparent text-text-muted hover:text-text'
            }`}
          >
            Locais e Serviços
          </button>
        </div>

        {/* Renderização condicional: Lista ou Empty State */}
        {categoriasAtivas.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            {/* SVG Inline de Estado Vazio */}
            <svg className="w-24 h-24 text-border mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-[18px] font-bold text-text mb-2">Nenhum resultado encontrado</h3>
            <p className="text-[15px] text-text-muted max-w-md">
              Não encontramos resultados para "{queryBusca}" com os filtros selecionados. Tente usar outras palavras-chave ou limpar os filtros.
            </p>
            <button 
              onClick={() => { updateUrlParams('q', null); updateUrlParams('cat', null); }}
              className="mt-6 text-[15px] font-bold text-uem-verde hover:underline outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Limpar todos os filtros
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {categoriasAtivas.map((categoria) => (
              <section key={categoria}>
                <h2 className="text-[18px] font-bold text-text mb-4 font-sans">{categoria}</h2>
                <div>
                  {dadosFiltrados[categoria].map((item) => (
                    abaAtiva === 'oportunidades' 
                      ? <OportunidadeListItem key={item.id} oportunidade={item} origem="oportunidades" />
                      : <OportunidadeListItem key={item.id} oportunidade={item} origem="facilidades" />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}