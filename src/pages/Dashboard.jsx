import React, { useState } from 'react';
import SidebarAtalhos from '../components/SidebarAtalhos';
import OportunidadeCard from '../components/OportunidadeCard';
import { oportunidadesData, categorias } from '../data/oportunidades';
import { Search } from 'lucide-react';

export default function Dashboard() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  const [busca, setBusca] = useState('');

  // Lógica de Filtro Duplo (Por Categoria e Por Texto)
  const oportunidadesFiltradas = oportunidadesData.filter((oportunidade) => {
    const matchCategoria = categoriaAtiva === 'Todas' || oportunidade.categoria === categoriaAtiva;
    const matchBusca = oportunidade.titulo.toLowerCase().includes(busca.toLowerCase()) || 
                       oportunidade.descricaoCurta.toLowerCase().includes(busca.toLowerCase());
    return matchCategoria && matchBusca;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      
      {/* Cabeçalho do Dashboard */}
      <header className="mb-8 lg:mb-12">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Portal do Estudante</h1>
        <p className="text-slate-500 mt-2 text-base">Encontre bolsas, estágios e auxílios disponíveis para você.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Coluna Lateral - Atalhos (Ocupa 3 colunas no Desktop) */}
        <div className="lg:col-span-3 lg:sticky lg:top-8">
          <SidebarAtalhos />
        </div>

        {/* Coluna Principal - Feed de Oportunidades (Ocupa 9 colunas no Desktop) */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Barra de Ferramentas: Busca e Filtros */}
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            
            {/* Input de Busca */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por PIBIC, Bolsa, Estágio..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full bg-slate-50 border-none rounded-xl py-3 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-900/20 focus:outline-none transition-all"
              />
            </div>

            {/* Tags de Categoria (Scroll horizontal em telas menores) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaAtiva(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    categoriaAtiva === cat
                      ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Cards Refatorado */}
          {oportunidadesFiltradas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {oportunidadesFiltradas.map((item) => (
                <OportunidadeCard key={item.id} oportunidade={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl border-dashed">
              <p className="text-slate-500 font-medium">Nenhuma oportunidade encontrada para este filtro.</p>
              <button 
                onClick={() => { setCategoriaAtiva('Todas'); setBusca(''); }}
                className="mt-4 text-sm text-blue-900 font-bold hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}