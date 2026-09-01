export const servicesData = [
  {
    id: "bolsa-permanencia",
    tabId: "apoio",
    category: "Apoio e Permanência",
    title: "Bolsa Permanência e Bolsa de Trabalho",
    description: "Programa de assistência estudantil voltado ao atendimento de acadêmicos em situação de vulnerabilidade socioeconômica, visando garantir a permanência e a conclusão dos cursos de graduação.",
    
    // Detalhes da Página
    requisitos: [
      "Estar regularmente matriculado em curso de graduação presencial da UEM.",
      "Comprovar renda familiar per capita dentro dos limites estabelecidos no edital vigente.",
      "Não dispor de outra bolsa incompatível com os critérios do programa."
    ],
    comoSolicitar: "A solicitação deve ser feita mediante inscrição no edital de seleção anual publicado pela Diretoria de Assistência Estudantil. É necessária a entrega da documentação comprobatória de renda.",
    
    // Informações da Barra Lateral
    localizacao: "Bloco A-01 - Térreo, Campus Sede",
    horario: "Segunda a Sexta, das 08h às 11h30 e das 13h30 às 17h",
    contatoEmail: "atendimento-bolsa@uem.br",
    contatoTelefone: "(44) 3011-4000",
    linkOficial: "https://www.uem.br",
    editalLink: "https://www.uem.br/editais"
  },
  {
    id: "restaurante-universitario",
    tabId: "apoio",
    category: "Apoio e Permanência",
    title: "Restaurante Universitário (RU)",
    description: "Fornecimento de refeições nutricionalmente balanceadas para a comunidade acadêmica, com valores subsidiados para alunos de graduação e pós-graduação.",
    
    requisitos: [
      "Apresentar cartão estudantil ou documento oficial com foto no acesso.",
      "Realizar a compra de créditos prévios pelo sistema institucional."
    ],
    comoSolicitar: "Acesse o sistema de gestão do RU para recarregar o saldo do seu cartão institucional. O acesso ao restaurante é feito via validação de código ou cartão físico.",
    
    localizacao: "Bloco RU - Próximo à Biblioteca Central, Campus Sede",
    horario: "Almoço: 11h às 13h30 | Jantar: 17h30 às 19h30",
    contatoEmail: "ru@uem.br",
    contatoTelefone: "(44) 3011-4001",
    linkOficial: "https://ru.uem.br/",
    editalLink: ""
  }
  // Adicione os demais serviços seguindo exatamente esta mesma estrutura de chaves
];