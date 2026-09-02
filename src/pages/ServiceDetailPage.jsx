import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Mail } from 'lucide-react';
import { oportunidadesData } from '../data/oportunidades';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const servico = oportunidadesData.find((s) => s.id === id) || oportunidadesData[0];

  // Verifica se há metadados suficientes para justificar a renderização da barra lateral (Aside)
  const temAside = servico.localizacao || servico.horario || servico.contato || servico.link;

  return (
    <div className="min-h-screen bg-uem-cinza-fundo py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[15px] text-uem-cinza-texto hover:text-uem-preto transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar para a lista
        </Link>

        <div className="mt-4 mb-8">
          <h1 className="text-[32px] font-bold text-uem-preto leading-tight">
            {servico.titulo}
          </h1>
          <p className="text-[15px] text-uem-preto-suave mt-3 leading-relaxed max-w-3xl">
            {servico.descricao}
          </p>
        </div>

        {/* Imagem (Se Existir) */}
        {servico.imagem && (
          <div className="mb-8">
            <img 
              src={servico.imagem} 
              alt={`Imagem ilustrativa de ${servico.titulo}`}
              className="w-full max-h-[400px] object-cover border border-uem-cinza-borda rounded-sm" 
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Coluna Principal: Se não houver barra lateral, expande para 3 colunas */}
          <div className={`space-y-8 bg-uem-branco border border-uem-cinza-borda p-6 lg:p-8 ${temAside ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
            
            {/* Mantido como fallback para a descrição caso não exista corpo de texto longo */}
            <section>
              <h2 className="text-[18px] font-bold text-uem-preto mb-3">Sobre o programa</h2>
              <p className="text-[15px] text-uem-preto-suave leading-relaxed">
                {servico.descricao}
              </p>
            </section>
            
            {/* Requisitos: Só renderiza se for um Array válido e contiver pelo menos 1 item */}
            {Array.isArray(servico.requisitos) && servico.requisitos.length > 0 && (
              <section>
                <h2 className="text-[18px] font-bold text-uem-preto mb-3">Principais requisitos</h2>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-uem-preto-suave leading-relaxed">
                  {servico.requisitos.map((requisito, index) => (
                    <li key={index}>{requisito}</li>
                  ))}
                </ul>
              </section>
            )}

          </div>

          {/* Coluna Lateral: Só renderiza se houver pelo menos um dado */}
          {temAside && (
            <aside className="bg-uem-branco border border-uem-cinza-borda p-6">
              <h2 className="text-[18px] font-bold text-uem-preto mb-5">Informações gerais</h2>
              
              <div className="space-y-5">
                {servico.localizacao && (
                  <div>
                    <span className="flex items-center gap-2 text-[12px] font-bold text-uem-cinza-texto mb-1">
                      <MapPin size={14} /> Localização
                    </span>
                    <span className="block text-[15px] text-uem-preto-suave">
                      {servico.localizacao}
                    </span>
                  </div>
                )}

                {servico.horario && (
                  <div>
                    <span className="flex items-center gap-2 text-[12px] font-bold text-uem-cinza-texto mb-1">
                      <Clock size={14} /> Horário de atendimento
                    </span>
                    <span className="block text-[15px] text-uem-preto-suave">
                      {servico.horario}
                    </span>
                  </div>
                )}

                {servico.contato && (
                  <div>
                    <span className="flex items-center gap-2 text-[12px] font-bold text-uem-cinza-texto mb-1">
                      <Mail size={14} /> Contato
                    </span>
                    {/* Validação inteligente: se o contato contiver @, cria um mailto clicável */}
                    {servico.contato.includes('@') ? (
                      <a href={`mailto:${servico.contato}`} className="block text-[15px] text-uem-verde hover:underline transition-all">
                        {servico.contato}
                      </a>
                    ) : (
                      <span className="block text-[15px] text-uem-preto-suave">
                        {servico.contato}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {servico.link && (
                <div className="mt-8 pt-6 border-t border-uem-cinza-borda">
                  <a 
                    href={servico.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="block w-full bg-uem-verde hover:bg-uem-verde/90 text-uem-branco text-[15px] font-bold py-3 text-center transition-colors"
                  >
                    Acessar Edital Oficial
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </div>
              )}
            </aside>
          )}

        </div>
      </div>
    </div>
  );
}