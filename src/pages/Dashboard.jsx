import React, { useState, useMemo } from 'react';
import BarraComando from '../components/BarraComando';
import OportunidadeListItem from '../components/OportunidadeListItem';
import { oportunidadesData } from '../data/oportunidades';

export default function Dashboard() {
  const [busca, setBusca] = useState('');

  // Memoriza o resultado da filtragem e do agrupamento
  const oportunidadesAgrupadas = useMemo(() => {
    // 1. Filtrar oportunidades pelo título (case-insensitive)
    const filtradas = oportunidadesData.filter((item) =>
      item.titulo.toLowerCase().includes(busca.toLowerCase())
    );

    // 2. Agrupar as filtradas dinamicamente usando a propriedade 'categoria'
    return filtradas.reduce((acc, item) => {
      if (!acc[item.categoria]) {
        acc[item.categoria] = [];
      }
      acc[item.categoria].push(item);
      
      return acc;
    }, {});
  }, [busca, oportunidadesData]); // oportunidadesData adicionado aqui

  // Extrai apenas as chaves (nomes das categorias) para iterar no render
  const categorias = Object.keys(oportunidadesAgrupadas);

  return (
    <div className="min-h-screen bg-uem-cinza-fundo font-sans">
      
      {/* 1. Barra de Comando no topo, passando os estados de busca */}
      <BarraComando busca={busca} setBusca={setBusca} />

      {/* 2. Área principal com restrição de largura para leitura confortável */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Tratamento para "estado vazio" caso a busca não retorne nada */}
        {categorias.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[15px] text-uem-cinza-texto font-sans">
              Nenhum resultado encontrado para "{busca}".
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {categorias.map((categoria) => (
              <section key={categoria}>
                
                {/* Cabeçalho da Seção gerado a partir do nome da categoria */}
                <h2 className="text-[18px] font-bold text-uem-preto mb-4 font-sans">
                  {categoria}
                </h2>
                
                {/* Lista de itens da categoria atual */}
                <div>
                  {oportunidadesAgrupadas[categoria].map((oportunidade) => (
                    <OportunidadeListItem 
                      key={oportunidade.id} 
                      oportunidade={oportunidade} 
                    />
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