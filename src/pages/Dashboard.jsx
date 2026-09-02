import React, { useState, useMemo } from 'react';
import BarraComando from '../components/BarraComando';
import OportunidadeListItem from '../components/OportunidadeListItem';
// import FacilidadeListItem from '../components/FacilidadeListItem'; // Crie este componente depois
import { oportunidadesData } from '../data/oportunidades';
import { facilidadesData } from '../data/facilidades';

export default function Dashboard() {
  const [busca, setBusca] = useState('');
  const [abaAtiva, setAbaAtiva] = useState('oportunidades'); // 'oportunidades' ou 'facilidades'

  // Agrupamento de Oportunidades (Filtrado)
  const oportunidadesAgrupadas = useMemo(() => {
    const filtradas = oportunidadesData.filter((item) =>
      item.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    return filtradas.reduce((acc, item) => {
      if (!acc[item.categoria]) acc[item.categoria] = [];
      acc[item.categoria].push(item);
      return acc;
    }, {});
  }, [busca, oportunidadesData]);

  // Agrupamento de Facilidades (Filtrado)
  const facilidadesAgrupadas = useMemo(() => {
    const filtradas = facilidadesData.filter((item) =>
      item.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    return filtradas.reduce((acc, item) => {
      if (!acc[item.categoria]) acc[item.categoria] = [];
      acc[item.categoria].push(item);
      return acc;
    }, {});
  }, [busca, facilidadesData]);

  // Define os dados da aba atual
  const dadosAtivos = abaAtiva === 'oportunidades' ? oportunidadesAgrupadas : facilidadesAgrupadas;
  const categoriasAtivas = Object.keys(dadosAtivos);

  return (
    <div className="min-h-screen bg-uem-cinza-fundo font-sans">
      <BarraComando busca={busca} setBusca={setBusca} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Navegação de Abas */}
        <div className="flex border-b border-uem-cinza-borda mb-8">
          <button
            onClick={() => setAbaAtiva('oportunidades')}
            className={`pb-3 px-4 text-[15px] font-bold transition-colors border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde ${
              abaAtiva === 'oportunidades' 
                ? 'border-uem-verde text-uem-verde' 
                : 'border-transparent text-uem-cinza-texto hover:text-uem-preto'
            }`}
          >
            Bolsas e Editais
          </button>
          <button
            onClick={() => setAbaAtiva('facilidades')}
            className={`pb-3 px-4 text-[15px] font-bold transition-colors border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-uem-verde ${
              abaAtiva === 'facilidades' 
                ? 'border-uem-verde text-uem-verde' 
                : 'border-transparent text-uem-cinza-texto hover:text-uem-preto'
            }`}
          >
            Locais e Serviços (Campus)
          </button>
        </div>

        {/* Listagem Dinâmica */}
        {categoriasAtivas.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[15px] text-uem-cinza-texto font-sans">
              Nenhum resultado encontrado para "{busca}" nesta aba.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {categoriasAtivas.map((categoria) => (
              <section key={categoria}>
                <h2 className="text-[18px] font-bold text-uem-preto mb-4 font-sans">
                  {categoria}
                </h2>
                
                <div>
                  {dadosAtivos[categoria].map((item) => (
                    abaAtiva === 'oportunidades' ? (
                      <OportunidadeListItem key={item.id} oportunidade={item} />
                    ) : (
                      <div key={item.id} className="p-4 bg-uem-branco border border-uem-cinza-borda mb-2">
                        {/* 
                          Substitua essa div pelo componente FacilidadeListItem.jsx 
                          que usa os dados de 'item.local' e 'item.horario'.
                        */}
                        <h3 className="text-[18px] font-bold text-uem-preto">{item.titulo}</h3>
                        <p className="text-[15px] text-uem-preto-suave mt-2">{item.descricao}</p>
                      </div>
                    )
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