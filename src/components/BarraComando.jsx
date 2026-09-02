import React from 'react';
import { Search } from 'lucide-react';
import AtalhosLista from './AtalhosLista';

export default function BarraComando({ busca, setBusca }) {
  return (
    <div className="bg-uem-branco border-b border-uem-cinza-borda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contêiner Flex: Empilhado no mobile, alinhado na mesma linha no desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center py-4 lg:py-5 gap-4 lg:gap-8">
          
          {/* Campo de Busca */}
          <div className="relative w-full lg:w-[400px] shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-uem-cinza-texto" />
            <input
              type="text"
              placeholder="Buscar bolsas, editais, estágios..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full bg-uem-cinza-fundo border border-uem-cinza-borda rounded-sm py-2.5 pl-10 pr-4 text-[15px] font-sans text-uem-preto placeholder:text-uem-cinza-texto outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:border-transparent transition-all"
            />
          </div>

          {/* Área de Atalhos (Alinhada à direita no desktop) */}
          <div className="w-full lg:flex-1 lg:flex lg:justify-end">
            <AtalhosLista />
          </div>

        </div>
      </div>
    </div>
  );
}