import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = servicesData.find((item) => item.id === id);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-lg font-bold text-gray-900">Serviço não encontrado</h2>
        <Link to="/" className="text-sm text-blue-900 underline mt-2 block">Voltar ao início</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Navegação de Topo */}
      <div className="text-xs text-gray-500 mb-6">
        <Link to="/" className="hover:underline">Início</Link> / <span className="text-gray-800">{service.title}</span>
      </div>

      <header className="border-b border-gray-200 pb-4 mb-6">
        <span className="text-xs font-bold uppercase text-blue-900">{service.category}</span>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">{service.title}</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Conteúdo Principal */}
        <div className="md:col-span-2 space-y-6">
          <section>
            <h3 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-200 pb-1 mb-2">Descrição</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{service.description}</p>
          </section>

          {service.requisitos && service.requisitos.length > 0 && (
            <section>
              <h3 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-200 pb-1 mb-2">Requisitos</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {service.requisitos.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </section>
          )}

          {service.comoSolicitar && (
            <section>
              <h3 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-200 pb-1 mb-2">Como Solicitar</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{service.comoSolicitar}</p>
            </section>
          )}
        </div>

        {/* Sidebar Lateral */}
        <aside className="border border-gray-200 p-4 rounded bg-gray-50 text-xs space-y-4 h-fit">
          <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 text-sm">Informações Gerais</h3>

          {service.localizacao && (
            <div>
              <strong className="block text-gray-500 uppercase">Localização:</strong>
              <span className="text-gray-800">{service.localizacao}</span>
            </div>
          )}

          {service.horario && (
            <div>
              <strong className="block text-gray-500 uppercase">Horário:</strong>
              <span className="text-gray-800">{service.horario}</span>
            </div>
          )}

          {service.contatoEmail && (
            <div>
              <strong className="block text-gray-500 uppercase">E-mail:</strong>
              <a href={`mailto:${service.contatoEmail}`} className="text-blue-900 underline block">{service.contatoEmail}</a>
            </div>
          )}

          {service.contatoTelefone && (
            <div>
              <strong className="block text-gray-500 uppercase">Telefone:</strong>
              <span className="text-gray-800">{service.contatoTelefone}</span>
            </div>
          )}

          {service.linkOficial && (
            <div className="pt-2">
              <a
                href={service.linkOficial}
                target="_blank"
                rel="noreferrer"
                className="block text-center bg-blue-950 text-white font-semibold py-2 rounded hover:bg-blue-900"
              >
                Acessar Link Oficial
              </a>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}