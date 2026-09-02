import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { oportunidadesData } from '../data/oportunidades';
import { facilidadesData } from '../data/facilidades';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const servico = [...oportunidadesData, ...facilidadesData].find((s) => s.id === id);

  if (!servico) {
    return (
      <div className="min-h-screen bg-uem-cinza-fundo py-8 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-uem-preto mb-6">
            Serviço não encontrado
          </h1>
          <Link to="/explorar" className="text-uem-cinza-texto hover:text-uem-verde inline-flex items-center gap-2 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-uem-verde rounded-sm">
            <ArrowLeft size={16} /> Voltar para a lista
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-uem-cinza-fundo py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/explorar" className="text-uem-cinza-texto hover:text-uem-verde inline-flex items-center gap-2 mb-8 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-uem-verde rounded-sm">
          <ArrowLeft size={16} /> Voltar para a lista
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold text-uem-preto mb-2">
          {servico.titulo}
        </h1>
        <span className="inline-block text-uem-verde font-semibold mb-8">
          {servico.categoria}
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-uem-branco border border-uem-cinza-borda p-6 rounded-sm shadow-sm">
            <h2 className="text-xl font-bold text-uem-preto mb-4">Sobre o serviço</h2>
            <p className="text-uem-cinza-texto text-[16px] leading-relaxed">
              {servico.descricao}
            </p>
          </div>

          <div className="bg-uem-branco border border-uem-cinza-borda p-6 rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-uem-preto mb-4 border-b border-uem-cinza-borda pb-2">
                Acesso Direto
              </h3>
            </div>
            <div className="mt-4">
              <a
                href={servico.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-uem-verde hover:bg-uem-verde/90 text-uem-branco font-bold py-3 px-4 rounded-sm transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2"
              >
                Acessar página oficial
                <ExternalLink size={18} />
              </a>
              <p className="mt-3 text-[13px] text-uem-cinza-texto text-center">
                Você será redirecionado para o portal oficial da UEM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}