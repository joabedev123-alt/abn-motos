export type FaqItem = {
  id: string;
  pergunta: string;
  resposta: string;
  home?: boolean;
};

export const faqItems: FaqItem[] = [
  {
    id: "disponibilidade",
    home: true,
    pergunta: "Como consultar a disponibilidade?",
    resposta:
      "A disponibilidade não aparece em tempo real neste site. Escolha a moto de interesse, se já tiver uma, e fale com a equipe pelo WhatsApp informando o período. A confirmação é feita pela ABN MOTOS.",
  },
  {
    id: "valor",
    home: true,
    pergunta: "Como saber o valor da locação?",
    resposta:
      "Quando um valor estiver cadastrado, ele aparece na página da moto. Se a página indicar “Valor sob consulta”, o preço e as condições são informados pela equipe no WhatsApp.",
  },
  {
    id: "regiao",
    home: true,
    pergunta: "Quais regiões são atendidas?",
    resposta:
      "A ABN MOTOS atende Betim e região, em Minas Gerais. Para uma cidade ou um bairro específico, confirme o atendimento pelo WhatsApp.",
  },
  {
    id: "conhecer",
    home: true,
    pergunta: "Como conhecer as motos?",
    resposta:
      "As motos com fotos cadastradas estão na página Nossas motos, cada uma com a sua página de detalhes. Modelo, ano e outras características só são publicados quando estiverem confirmados.",
  },
  {
    id: "reserva",
    home: true,
    pergunta: "O contato pelo site confirma uma reserva?",
    resposta:
      "Não. A mensagem inicia uma consulta. A locação só segue depois da conversa com a equipe e da confirmação das condições.",
  },
  {
    id: "o-que-informar",
    pergunta: "Quais informações devo enviar na consulta?",
    resposta:
      "Informe seu nome, a cidade ou o bairro, a moto de interesse — se já souber — e o período desejado. Com isso, a equipe consegue orientar a consulta.",
  },
  {
    id: "documentos",
    pergunta: "Quais documentos ou requisitos são necessários?",
    resposta:
      "Os requisitos da locação são esclarecidos pela equipe no atendimento. Este site não publica uma lista de documentos, idade, categoria de habilitação ou caução.",
  },
  {
    id: "periodo",
    pergunta: "Como consultar um período específico?",
    resposta:
      "Descreva os dias ou o intervalo em que você precisa da moto. O site não define prazo mínimo nem máximo: isso é conversado com a equipe.",
  },
  {
    id: "estoque",
    pergunta: "O site mostra se a moto está disponível agora?",
    resposta:
      "Não. A indicação “Consulte disponibilidade” significa que a confirmação depende da equipe. Não há consulta automática de estoque.",
  },
  {
    id: "cidade-proxima",
    pergunta: "Posso consultar uma cidade próxima de Betim?",
    resposta:
      "Sim. Envie o nome da cidade ou do bairro para a equipe confirmar se o atendimento alcança essa localidade. O site não lista outras cidades além de Betim.",
  },
  {
    id: "canais",
    pergunta: "Como falar com a ABN MOTOS?",
    resposta:
      "O atendimento do site é pelo WhatsApp (31) 97148-9658. O Instagram @abn_motos também está disponível para acompanhar a empresa.",
  },
];

export const homeFaq = faqItems.filter((item) => item.home);
