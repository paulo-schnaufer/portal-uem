import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const categories = [
  { id: 'apoio', path: '/apoio', title: '1. Apoio e Permanência Estudantil', desc: 'Bolsas, RU, UPA, PROPAE e Empregabilidade.' },
  { id: 'academico', path: '/academico', title: '2. Pesquisa, Ensino e Extensão', desc: 'Iniciação Científica, Monitoria, PET, PIBEX e EJs.' },
  { id: 'internacional', path: '/internacional', title: '3. Internacionalização e Idiomas', desc: 'ECI, Intercâmbios, Celpe-Bras e Cursos de Línguas.' },
  { id: 'cultura', path: '/cultura', title: '4. Arte, Cultura e Bibliotecas', desc: 'Teatro, Coral, PIBIART e Bibliotecas Central e Digital.' },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      <section className="border-b border-gray-200 pb-6">
        <h2 className="text-2xl font-bold text-gray-900">Bem-vindo ao Portal Estudantil</h2>
        <p className="text-gray-600 text-sm mt-1">
          Selecione uma área abaixo para consultar regulamentos, contatos e formas de acesso aos serviços da UEM.
        </p>
      </section>

      {/* Grid de Seções Principais */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.path}
            className="block p-5 border border-gray-200 rounded hover:border-blue-900 hover:bg-gray-50 transition"
          >
            <h3 className="font-bold text-blue-950 text-base">{cat.title}</h3>
            <p className="text-gray-600 text-xs mt-1">{cat.desc}</p>
          </Link>
        ))}
      </section>

      {/* Lista Direta de Todos os Serviços Cadastrados */}
      <section className="pt-4">
        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
          Todos os Serviços Disponíveis
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {servicesData.map((item) => (
            <Link
              key={item.id}
              to={`/servico/${item.id}`}
              className="p-3 border border-gray-200 rounded hover:border-blue-800 text-sm block"
            >
              <span className="text-[10px] uppercase font-bold text-blue-900 block">{item.category}</span>
              <span className="font-semibold text-gray-800 block mt-0.5">{item.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}