/**
 * Texto de privacidade organizado para revisão antes da publicação.
 * Ajuste estes parágrafos se o funcionamento do site mudar.
 * Não descreva armazenamento, exclusão ou encargos que o código não implementa.
 */
export const privacySections = [
  {
    id: "finalidade",
    titulo: "Para que este site existe",
    paragrafos: [
      "O site da ABN MOTOS apresenta a empresa, as motocicletas cadastradas e a região de atendimento, e facilita o contato pelo WhatsApp.",
      "As páginas podem ser lidas sem preencher dados e sem criar uma conta.",
    ],
  },
  {
    id: "formulario",
    titulo: "O que acontece com o formulário",
    paragrafos: [
      "O formulário da página de contato não envia as informações a um servidor da ABN MOTOS. Nome, cidade ou bairro, moto de interesse, período desejado e mensagem são usados apenas no seu navegador para montar o texto.",
      "Ao continuar, você é direcionado ao WhatsApp para enviar essa mensagem. Se a janela não abrir, o próprio navegador segue para o WhatsApp.",
      "O site não solicita CPF, documentos ou outros dados além dos campos exibidos no formulário.",
    ],
  },
  {
    id: "servicos",
    titulo: "Serviços externos",
    paragrafos: [
      "WhatsApp e Instagram são serviços externos. Quando você abre esses links, o atendimento passa a acontecer nesses aplicativos, conforme as condições de cada um deles.",
      "O Instagram da empresa é instagram.com/abn_motos. O WhatsApp usado no site é o número (31) 97148-9658.",
    ],
  },
  {
    id: "cookies",
    titulo: "Cookies e rastreamento",
    paragrafos: [
      "Este site não utiliza banner de cookies nem ferramentas de rastreamento. Não há área de login.",
    ],
  },
  {
    id: "contato",
    titulo: "Fale com a ABN MOTOS",
    paragrafos: [
      "Se quiser tratar de alguma informação enviada no atendimento, chame a ABN MOTOS pelo WhatsApp (31) 97148-9658.",
    ],
  },
] as const;
