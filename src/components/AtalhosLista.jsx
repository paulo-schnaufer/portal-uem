import React from 'react';
import { GraduationCap, Monitor, BookOpen, LifeBuoy, ExternalLink } from 'lucide-react';

const atalhos = [
  { id: 'sigaa', nome: 'SIGAA', icone: GraduationCap, link: 'https://sigs.uem.br/sigaa/public/' },
  { id: 'moodle', nome: 'Moodle', icone: Monitor, link: 'https://ava.uem.br/login/' },
  { id: 'bce', nome: 'BCE', icone: BookOpen, link: 'https://bce.uem.br' },
  { id: 'sav', nome: 'SAV', icone: LifeBuoy, link: 'https://npd.uem.br/sav' },
];

export default function AtalhosLista() {
  return (
    <nav 
      className="flex items-center gap-5 overflow-x-auto lg:overflow-visible lg:gap-8 pb-2 lg:pb-0 hide-scrollbar w-full"
      aria-label="Atalhos rápidos"
    >
      {atalhos.map((item) => {
        const Icone = item.icone;
        return (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 shrink-0 rounded-sm text-uem-preto-suave hover:text-uem-verde outline-none focus-visible:text-uem-verde focus-visible:ring-2 focus-visible:ring-uem-verde focus-visible:ring-offset-2 transition-all"
          >
            <Icone className="w-5 h-5 transition-colors" />
            <span className="text-[15px] font-bold font-sans">
              {item.nome}
            </span>
            {/* Ícone sempre visível, mas com cor sutil que ganha destaque no hover/focus */}
            <ExternalLink className="w-3 h-3 text-uem-cinza-borda group-hover:text-uem-verde focus-visible:text-uem-verde transition-colors" />
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        );
      })}
    </nav>
  );
}