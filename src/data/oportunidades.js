export const categorias = [
  'Todas',
  'Permanência',
  'Pesquisa',
  'Extensão',
  'Internacional',
  'Estágio & Carreira',
  'Cultura'
];

export const oportunidadesData = [
  {
    id: 'bolsa-permanencia-2026',
    titulo: 'Bolsa Permanência Estudantil 2026',
    categoria: 'Permanência',
    descricaoCurta: 'Auxílio financeiro mensal para acadêmicos em situação de vulnerabilidade socioeconômica comprovada.',
    valor: 'R$ 700,00 / mês',
    prazo: 'Inscrições até 20/Mai',
    status: 'Aberto',
    statusVariant: 'success', // success | warning | info
    link: '/servico/bolsa-permanencia',
    destaque: true
  },
  {
    id: 'pibic-inovacao',
    titulo: 'PIBIC & PIBITI — Iniciação Científica e Tecnológica',
    categoria: 'Pesquisa',
    descricaoCurta: 'Bolsas de pesquisa para desenvolvimento de projetos em novas tecnologias, inovação e ciências aplicadas.',
    valor: 'R$ 700,00 / mês',
    prazo: 'Edital abre em 10/Jun',
    status: 'Em breve',
    statusVariant: 'info',
    link: '/servico/iniciacao-cientifica',
    destaque: false
  },
  {
    id: 'ru-refeicao-subsidiada',
    titulo: 'Isenção / Subsídio de Refeição no RU',
    categoria: 'Permanência',
    descricaoCurta: 'Acesso gratuito ou subsidiado ao Restaurante Universitário para café, almoço e jantar nos dois turnos.',
    valor: 'Subsídio Integral',
    prazo: 'Fluxo Contínuo',
    status: 'Aberto',
    statusVariant: 'success',
    link: '/servico/restaurante-universitario',
    destaque: false
  },
  {
    id: 'pfi-ingles-academico',
    titulo: 'Paraná Fala Idiomas (PFI) — Inglês Acadêmico',
    categoria: 'Internacional',
    descricaoCurta: 'Cursos virtuais e presenciais de nivelamento em inglês técnico para submissão de artigos e intercâmbio.',
    valor: 'Gratuito',
    prazo: 'Últimas 5 vagas',
    status: 'Últimos dias',
    statusVariant: 'warning',
    link: '/servico/idiomas-pfi',
    destaque: true
  },
  {
    id: 'pibex-extensao-comunitaria',
    titulo: 'PIBEX — Projetos de Extensão Universitária',
    categoria: 'Extensão',
    descricaoCurta: 'Atuação prática junto à comunidade local em projetos sociais, ambientais e tecnológicos.',
    valor: 'R$ 500,00 / mês',
    prazo: 'Inscrições até 30/Mai',
    status: 'Aberto',
    statusVariant: 'success',
    link: '/servico/extensao-sociedade',
    destaque: false
  },
  {
    id: 'central-estagios-uem',
    titulo: 'Vagas de Estágio Supervisionado — Central de Empregabilidade',
    categoria: 'Estágio & Carreira',
    descricaoCurta: 'Oportunidades de estágio de nível superior em empresas conveniadas e órgãos públicos da região.',
    valor: 'Até R$ 1.800,00',
    prazo: 'Vagas Semanais',
    status: 'Aberto',
    statusVariant: 'success',
    link: '/servico/empregabilidade',
    destaque: false
  }
];