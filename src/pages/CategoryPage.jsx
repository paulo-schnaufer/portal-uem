import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

export default function CategoryPage({ categoryId }) {
  const items = servicesData.filter((item) => item.tabId === categoryId);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3 mb-6">
        Serviços da Seção
      </h2>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <Link
              key={item.id}
              to={`/servico/${item.id}`}
              className="p-5 border border-gray-200 rounded hover:border-blue-900 transition block bg-white"
            >
              <span className="text-xs font-semibold text-blue-900 uppercase">{item.category}</span>
              <h3 className="font-bold text-gray-900 text-base mt-1">{item.title}</h3>
              <p className="text-gray-600 text-xs mt-2 line-clamp-2">{item.description}</p>
              <span className="text-xs font-bold text-blue-900 mt-4 block">Acessar página →</span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 py-8">Nenhum serviço cadastrado nesta seção ainda.</p>
      )}
    </div>
  );
}