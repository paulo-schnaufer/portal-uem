import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchX, Compass, ExternalLink } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import OportunidadeListItem from '../components/OportunidadeListItem';
import { oportunidadesData } from '../data/oportunidades';
import { facilidadesData } from '../data/facilidades';
import AtalhosLista from '../components/AtalhosLista';
import categoriaIcones from '../utils/categoriaIcones';

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [abaAtiva, setAbaAtiva] = useState('oportunidades');

  const queryBusca = searchParams.get('q') || '';
  const categoriaParam = searchParams.get('cat') || '';
  const queryCategorias = useMemo(
    () => (categoriaParam ? categoriaParam.split(',') : []),
    [categoriaParam]
  );

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
  
  const todasCategorias = useMemo(() => {
    const cats = new Set(dadosOriginais.map(item => item.categoria));
    return Array.from(cats).sort();
  }, [dadosOriginais]);

  const dadosFiltrados = useMemo(() => {
    const termo = queryBusca.toLowerCase();
    
    const filtrados = dadosOriginais.filter((item) => {
      if (queryCategorias.length > 0 && !queryCategorias.includes(item.categoria)) {
        return false;
      }
      if (termo) {
        const tituloMatch = item.titulo?.toLowerCase().includes(termo);
        const descMatch = item.descricao?.toLowerCase().includes(termo);
        const tagsMatch = item.tags?.some(tag => tag.toLowerCase().includes(termo));
        return tituloMatch || descMatch || tagsMatch;
      }
      return true;
    });

    return filtrados.reduce((acc, item) => {
      if (!acc[item.categoria]) acc[item.categoria] = [];
      acc[item.categoria].push(item);
      return acc;
    }, {});
  }, [dadosOriginais, queryBusca, queryCategorias]);

  const categoriasAtivas = Object.keys(dadosFiltrados);

  return (
    <div className="min-h-screen bg-bg font-sans">
      
      {/* Topo de Busca e Filtros */}
      <div className="bg-surface border-b border-border shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-4">
          
          {/* Bloco Integrado: Acesso Rápido UEM */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-border/40">
            <span className="text-[11px] font-extrabold text-text-muted uppercase tracking-wider shrink-0">
              Acesso Rápido UEM
            </span>
            <AtalhosLista />
          </div>

          {/* Campo de Busca Principal em 100% */}
          <SearchBar 
            key={queryBusca}
            valorInicial={queryBusca} 
            onChangeDebounced={(val) => updateUrlParams('q', val)} 
          />
          
          {/* Carrossel de Categorias */}
          <CategoryFilter 
            categorias={todasCategorias}
            selecionadas={queryCategorias}
            onChange={(cats) => updateUrlParams('cat', cats.length > 0 ? cats : null)}
          />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Seletor de Abas em Cápsula */}
        <div className="inline-flex items-center p-1 bg-surface border border-border rounded-xl mb-8">
          <button
            onClick={() => { setAbaAtiva('oportunidades'); updateUrlParams('cat', null); }}
            className={`px-5 py-2.5 rounded-lg text-[14px] font-bold transition-all duration-150 outline-none ${
              abaAtiva === 'oportunidades' 
                ? 'bg-uem-verde text-white shadow-xs' 
                : 'text-text-muted hover:text-text'
            }`}
          >
            Bolsas e Editais
          </button>
          <button
            onClick={() => { setAbaAtiva('facilidades'); updateUrlParams('cat', null); }}
            className={`px-5 py-2.5 rounded-lg text-[14px] font-bold transition-all duration-150 outline-none ${
              abaAtiva === 'facilidades' 
                ? 'bg-uem-verde text-white shadow-xs' 
                : 'text-text-muted hover:text-text'
            }`}
          >
            Locais e Serviços
          </button>
        </div>

        {/* Lista ou Estado Vazio */}
        {categoriasAtivas.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-16 bg-surface/40 border border-border rounded-2xl p-8">
            <div className="p-4 rounded-full bg-surface border border-border mb-4 text-text-muted">
              <SearchX size={32} />
            </div>
            <h3 className="text-[18px] font-bold text-text mb-2">Nenhum resultado encontrado</h3>
            <p className="text-[14px] text-text-muted max-w-md leading-relaxed">
              {queryBusca
                ? `Não encontramos resultados para "${queryBusca}".`
                : 'Nenhum item encontrado com os filtros selecionados.'}
            </p>
            <button 
              onClick={() => { updateUrlParams('q', null); updateUrlParams('cat', null); }}
              className="mt-6 text-[14px] font-bold text-uem-verde hover:underline"
            >
              Limpar todos os filtros
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {categoriasAtivas.map((categoria) => {
              const IconeCategoria = categoriaIcones[categoria] || Compass;
              const itens = dadosFiltrados[categoria];

              return (
                <section key={categoria} className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-border/80">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-md bg-uem-verde/10 text-uem-verde">
                        <IconeCategoria size={18} />
                      </div>
                      <h2 className="text-[18px] font-bold text-text tracking-tight">
                        {categoria}
                      </h2>
                    </div>
                    <span className="text-[12px] font-medium text-text-muted bg-surface px-2.5 py-0.5 rounded-full border border-border">
                      {itens.length} {itens.length === 1 ? 'item' : 'itens'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {itens.map((item) => (
                      <OportunidadeListItem 
                        key={item.id} 
                        oportunidade={item} 
                        origem={abaAtiva === 'oportunidades' ? 'oportunidades' : 'facilidades'} 
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}