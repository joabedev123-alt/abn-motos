export type NavItem = {
  href: string;
  label: string;
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/motos", label: "Nossas motos" },
  { href: "/como-alugar", label: "Como alugar" },
  { href: "/regiao-de-atendimento", label: "Região atendida" },
  { href: "/contato", label: "Contato" },
];

export const footerNav: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/motos", label: "Nossas motos" },
  { href: "/como-alugar", label: "Como alugar" },
];

export const footerInfo: NavItem[] = [
  { href: "/regiao-de-atendimento", label: "Região de atendimento" },
  { href: "/duvidas-frequentes", label: "Dúvidas frequentes" },
  { href: "/contato", label: "Contato" },
  { href: "/privacidade", label: "Privacidade" },
];
