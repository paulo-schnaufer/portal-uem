import React from 'react';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-bg py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-surface border border-border p-8 lg:p-12 space-y-6">
        
        <h1 className="text-[32px] font-bold text-text leading-tight border-b border-border pb-4">
          Sobre o Projeto
        </h1>
        
        <p className="text-[15px] text-text-muted leading-relaxed">
          O <strong>Portal de Serviços UEM</strong> é uma iniciativa dedicada a centralizar e simplificar o acesso às oportunidades, editais e facilidades oferecidas pela Universidade Estadual de Maringá.
        </p>

        <p className="text-[15px] text-text-muted leading-relaxed">
          Nosso objetivo é garantir que os estudantes encontrem rapidamente as informações que precisam para sua permanência e desenvolvimento acadêmico, sem depender de múltiplas buscas em sites dispersos. O sistema foi desenhado focando em acessibilidade, velocidade e na preservação de dados perenes.
        </p>

        <div className="mt-8 pt-6 border-t border-border">
          <h2 className="text-[18px] font-bold text-text mb-3">Desenvolvimento</h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Este portal é mantido e atualizado pelos membros do <strong>PET Economia</strong>. Buscamos constantemente melhorar a experiência do usuário e a precisão das informações.
          </p>
        </div>

      </div>
    </div>
  );
}