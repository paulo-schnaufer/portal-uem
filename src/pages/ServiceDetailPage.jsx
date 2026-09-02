import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Mail } from 'lucide-react';
import { oportunidadesData } from '../data/oportunidades'; // Ajuste o caminho se necessário

export default function ServiceDetailPage() {
  const { id } = useParams();
  
  // Busca o serviço ou pega o primeiro como fallback para não quebrar a tela
  const servico = oportunidadesData.find((s) => s.id === id) || oportunidadesData[0];

  return (
    <div className="min-h-screen bg-uem-cinza-fundo py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navegação - Voltar */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[15px] text-uem-cinza-texto hover:text-uem-preto transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar para a lista
        </Link>

        {/* Cabeçalho da Página */}
        <div className="mt-4 mb-8">
          {/* Título de Página: 32px, Bold, Preto UEM. Sem eyebrow acima. */}
          <h1 className="text-[32px] font-bold text-uem-preto leading-tight">
            {servico.titulo}
          </h1>
          {/* Corpo de Texto: 15px, Regular, Preto Suave */}
          <p className="text-[15px] text-uem-preto-suave mt-3 leading-relaxed max-w-3xl">
            {servico.descricao}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Coluna Principal: Conteúdo Detalhado */}
          <div className="lg:col-span-2 space-y-8 bg-uem-branco border border-uem-cinza-borda p-6 lg:p-8">
            
            <section>
              {/* Título de Seção/Card: 18px, Bold, Preto UEM */}
              <h2 className="text-[18px] font-bold text-uem-preto mb-3">Sobre o programa</h2>
              <p className="text-[15px] text-uem-preto-suave leading-relaxed">
                Este programa tem como objetivo principal apoiar a permanência de estudantes em situação 
                de vulnerabilidade socioeconômica, oferecendo suporte financeiro para auxiliar nas despesas 
                básicas e garantir a continuidade da graduação na Universidade Estadual de Maringá.
              </p>
            </section>
            
            <section>
              <h2 className="text-[18px] font-bold text-uem-preto mb-3">Principais requisitos</h2>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-uem-preto-suave leading-relaxed">
                <li>Estar regularmente matriculado em um curso de graduação presencial da UEM.</li>
                <li>Comprovar renda familiar per capita que se enquadre nos critérios do edital vigente.</li>
                <li>Não possuir vínculo empregatício que ultrapasse a carga horária permitida.</li>
                <li>Não acumular com outras bolsas de mesma natureza (exceto quando previsto em edital).</li>
              </ul>
            </section>

          </div>

          {/* Coluna Lateral: Informações Gerais */}
          <aside className="bg-uem-branco border border-uem-cinza-borda p-6">
            <h2 className="text-[18px] font-bold text-uem-preto mb-5">Informações gerais</h2>
            
            <div className="space-y-5">
              
              {/* Bloco de Informação */}
              <div>
                {/* Metadado/Label: 12px, Bold, Cinza Texto (Apenas primeira letra maiúscula) */}
                <span className="flex items-center gap-2 text-[12px] font-bold text-uem-cinza-texto mb-1">
                  <MapPin size={14} /> 
                  Localização
                </span>
                {/* Valor do Metadado: 15px, Regular, Preto Suave */}
                <span className="block text-[15px] text-uem-preto-suave">
                  Bloco 104 — Diretoria de Assuntos Estudantis (DAE)
                </span>
              </div>

              <div>
                <span className="flex items-center gap-2 text-[12px] font-bold text-uem-cinza-texto mb-1">
                  <Clock size={14} /> 
                  Horário de atendimento
                </span>
                <span className="block text-[15px] text-uem-preto-suave">
                  08h às 11h30 e 13h30 às 17h
                </span>
              </div>

              <div>
                <span className="flex items-center gap-2 text-[12px] font-bold text-uem-cinza-texto mb-1">
                  <Mail size={14} /> 
                  Contato
                </span>
                <a href="mailto:dae@uem.br" className="block text-[15px] text-uem-verde hover:underline transition-all">
                  dae@uem.br
                </a>
              </div>
            </div>

            {/* Ação Principal */}
            <div className="mt-8 pt-6 border-t border-uem-cinza-borda">
              <a 
                href={servico.link || "#"} 
                target="_blank" 
                rel="noreferrer"
                className="block w-full bg-uem-verde hover:bg-uem-verde/90 text-uem-branco text-[15px] font-bold py-3 text-center transition-colors"
              >
                Acessar Edital Oficial
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}