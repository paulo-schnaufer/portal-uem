import React, { useState } from 'react';
import { servicesData } from './servicesData';
import {
  Wallet, Utensils, HeartPulse, Accessibility, Briefcase,
  FlaskConical, GraduationCap, Users, Globe, Languages,
  BookOpen, Palette, Library, Search, X, ChevronRight, Info
} from 'lucide-react';

// Mapeamento dinâmico de ícones importados da lucide-react
const iconMap = {
  Wallet, Utensils, HeartPulse, Accessibility, Briefcase,
  FlaskConical, GraduationCap, Users, Globe, Languages,
  BookOpen, Palette, Library
};

const tabs = [
  { id: 'all', label: 'Todos os Serviços' },
  { id: 'apoio', label: '1. Apoio e Permanência' },
  { id: 'academico', label: '2. Pesquisa e Ensino' },
  { id: 'internacional', label: '3. Internacionalização' },
  { id: 'cultura', label: '4. Arte, Cultura e Bibliotecas' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  // Lógica de filtragem simultânea (Aba + Campo de Busca)
  const filteredServices = servicesData.filter((item) => {
    const matchesTab = activeTab === 'all' || item.tabId === activeTab;
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.shortDesc.toLowerCase().includes(query) ||
      item.fullDesc.toLowerCase().includes(query);

    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Bar / Header Institucional */}
      <header className="bg-blue-950 text-white border-b border-blue-900 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Guia Universitário</span>
            <h1 className="text-2xl font-bold tracking-tight">Portal do Estudante UEM</h1>
          </div>

          {/* Barra de Busca Global */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar bolsas, RU, programas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-blue-900/50 border border-blue-700/60 rounded-lg text-sm text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-blue-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Navegação por Abas (Filtros Principais) */}
      <nav className="bg-white border-b border-slate-200 sticky top-[73px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 overflow-x-auto py-3 no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Grid de Serviços */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500">
            Exibindo <span className="font-semibold text-slate-800">{filteredServices.length}</span> {filteredServices.length === 1 ? 'recurso' : 'recursos'}
            {searchTerm && <span> para "<span className="text-blue-900 font-medium">{searchTerm}</span>"</span>}
          </p>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((item) => {
              const IconComponent = iconMap[item.iconName] || Info;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedService(item)}
                  className="group bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-md">
                        {item.category}
                      </span>
                      <div className="p-2.5 bg-slate-100 text-blue-900 rounded-lg group-hover:bg-blue-900 group-hover:text-white transition-colors duration-200">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-700 group-hover:text-blue-900">
                    <span>Saber mais</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300 p-8">
            <Info className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">Nenhum serviço encontrado</h3>
            <p className="text-sm text-slate-500 mt-1">Tente pesquisar por outros termos ou trocar de aba.</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveTab('all'); }}
              className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition"
            >
              Limpar busca e filtros
            </button>
          </div>
        )}
      </main>

      {/* Modal / Card Expansível para Detalhes */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute right-4 top-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-md">
                {selectedService.category}
              </span>
              <span className="text-xs text-slate-400">• {selectedService.tabName}</span>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              {selectedService.title}
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Como ter acesso</h4>
              <p className="text-sm text-slate-700">
                Acompanhe as chamadas públicas no portal oficial da UEM ou procure o setor responsável durante o expediente acadêmico.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}