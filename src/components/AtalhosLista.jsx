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
      className="flex items-center gap-4 overflow-x-auto hide-scrollbar py-1"
      aria-label="Atalhos rápidos UEM"
    >
      {atalhos.map((item) => {
        const Icone = item.icone;
        return (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1.5 shrink-0 text-[13px] font-bold text-text-muted hover:text-uem-verde transition-colors outline-none focus-visible:ring-2 focus-visible:ring-uem-verde rounded-md px-1.5 py-0.5"
          >
            <Icone className="w-4 h-4 text-text-muted group-hover:text-uem-verde transition-colors" />
            <span>{item.nome}</span>
            <ExternalLink className="w-3 h-3 text-border group-hover:text-uem-verde transition-colors" />
          </a>
        );
      })}
    </nav>
  );
}