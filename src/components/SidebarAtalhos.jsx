import React from 'react';
import { GraduationCap, Monitor, BookOpen, LifeBuoy, ExternalLink } from 'lucide-react';

const atalhos = [
  { id: 'sigaa', nome: 'SIGAA', desc: 'Portal do Discente', icone: GraduationCap, link: 'https://sigaa.uem.br' },
  { id: 'moodle', nome: 'Moodle', desc: 'Ambiente Virtual (EAD)', icone: Monitor, link: 'https://moodle.uem.br' },
  { id: 'bce', nome: 'BCE', desc: 'Biblioteca Central', icone: BookOpen, link: 'https://bce.uem.br' },
  { id: 'sav', nome: 'SAV', desc: 'Atendimento Online', icone: LifeBuoy, link: 'https://npd.uem.br/sav' },
];

export default function SidebarAtalhos() {
  return (
    <aside className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
        Acesso Rápido
      </h3>
      
      <nav className="space-y-3">
        {atalhos.map((item) => {
          const Icone = item.icone;
          return (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-900 rounded-lg group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <Icone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-sm font-bold text-slate-800">{item.nome}</strong>
                  <span className="block text-xs text-slate-500">{item.desc}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-blue-900 transition-colors" />
            </a>
          );
        })}
      </nav>

      <div className="mt-6 pt-6 border-t border-slate-100">
        <div className="bg-blue-950 rounded-xl p-4 text-center">
          <span className="block text-xs font-semibold text-blue-200 uppercase mb-1">Precisa de Ajuda?</span>
          <p className="text-sm font-medium text-white mb-3">Fale com a Diretoria de Assistência Estudantil</p>
          <a href="mailto:dae@uem.br" className="inline-block w-full py-2 bg-white text-blue-950 text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors">
            Enviar E-mail
          </a>
        </div>
      </div>
    </aside>
  );
}