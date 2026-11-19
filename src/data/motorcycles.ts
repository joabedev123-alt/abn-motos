export type MotorcycleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MotorcycleSpec = {
  rotulo: string;
  valor: string;
};

export type Motorcycle = {
  id: string;
  slug: string;
  nome: string;
  imagens: MotorcycleImage[];
  descricao: string;
  /** Somente características já confirmadas. Deixe vazio quando ainda não houver dado. */
  especificacoes: MotorcycleSpec[];
  /** Informe null enquanto o valor não estiver definido. Não use preço de exemplo. */
  preco: number | null;
  /** Exemplo, quando houver preço: "por dia". Deixe null se não houver preço. */
  unidadePreco: string | null;
  destaque: boolean;
};

/**
 * Cadastro das motos exibidas no site.
 *
 * Para incluir uma moto:
 * 1. Coloque as fotos em public/images/motos.
 * 2. Copie um bloco abaixo e preencha id, slug, nome, imagens e descrição.
 * 3. Publique modelo, ano, cilindrada ou preço somente depois da confirmação.
 *    Enquanto isso, mantenha o nome neutro, especificacoes sem o dado e preco null.
 *
 * Não reutilize as fotos de uma moto em outra. Cada lista de imagens pertence a um veículo.
 * Os nomes atuais distinguem as unidades pelas fotos recebidas, sem afirmar modelo.
 */
export const motorcycles: Motorcycle[] = [
  {
    id: "moto-preta-1",
    slug: "motocicleta-preta-1",
    nome: "Honda CG 160 Titan – Prata",
    destaque: true,
    preco: 350,
    unidadePreco: "por semana",
    especificacoes: [
      { rotulo: "Marca", valor: "Honda" },
      { rotulo: "Modelo", valor: "CG 160 Titan" },
      { rotulo: "Ano/modelo", valor: "2025/2025" },
      { rotulo: "Cor", valor: "Prata" },
      { rotulo: "Locação", valor: "R$ 350,00 por semana" },
    ],
    descricao:
      "Honda CG 160 Titan – Prata. Locação de R$ 350,00 por semana. Marca: Honda. Modelo: CG 160 Titan. Ano/modelo: 2025/2025. Cor: Prata. Disponibilidade sob consulta.",
    imagens: [
      {
        src: "/images/motos/titan-cinza-atualizada.jpeg",
        alt: "Honda CG 160 Titan cinza da ABN MOTOS vista de lado",
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    id: "moto-preta-2",
    slug: "motocicleta-preta-2",
    nome: "Honda CG 160 Titan – Preta",
    destaque: false,
    preco: 350,
    unidadePreco: "por semana",
    especificacoes: [
      { rotulo: "Marca", valor: "Honda" },
      { rotulo: "Modelo", valor: "CG 160 Titan" },
      { rotulo: "Ano/modelo", valor: "2026/2026" },
      { rotulo: "Cor", valor: "Preta" },
      { rotulo: "Locação", valor: "R$ 350,00 por semana" },
    ],
    descricao:
      "Honda CG 160 Titan – Preta. Locação de R$ 350,00 por semana. Marca: Honda. Modelo: CG 160 Titan. Ano/modelo: 2026/2026. Cor: Preta. Disponibilidade sob consulta.",
    imagens: [
      {
        src: "/images/motos/titan-preta-atualizada.jpeg",
        alt: "Honda CG 160 Titan preta da ABN MOTOS vista de frente em três quartos",
        width: 1599,
        height: 899,
      },
    ],
  },
  {
    id: "moto-azul",
    slug: "motocicleta-azul",
    nome: "Star 160 – Azul",
    destaque: false,
    preco: 320,
    unidadePreco: "por semana",
    especificacoes: [
      { rotulo: "Marca", valor: "Star" },
      { rotulo: "Modelo", valor: "160" },
      { rotulo: "Ano/modelo", valor: "2026/2026" },
      { rotulo: "Cor", valor: "Azul" },
      { rotulo: "Locação", valor: "R$ 320,00 por semana" },
    ],
    descricao:
      "Star 160 – Azul. Locação de R$ 320,00 por semana. Marca: Star. Modelo: 160. Ano/modelo: 2026/2026. Cor: Azul. Disponibilidade sob consulta.",
    imagens: [
      {
        src: "/images/motos/azul-1.jpg",
        alt: "Star 160 azul da ABN MOTOS vista de lado ao sol",
        width: 768,
        height: 1024,
      },
    ],
  },
  {
    id: "moto-cinza",
    slug: "motocicleta-cinza",
    nome: "Star 160 – Prata",
    destaque: false,
    preco: 320,
    unidadePreco: "por semana",
    especificacoes: [
      { rotulo: "Marca", valor: "Star" },
      { rotulo: "Modelo", valor: "160" },
      { rotulo: "Ano/modelo", valor: "2025/2025" },
      { rotulo: "Cor", valor: "Prata" },
      { rotulo: "Locação", valor: "R$ 320,00 por semana" },
    ],
    descricao:
      "Star 160 – Prata. Locação de R$ 320,00 por semana. Marca: Star. Modelo: 160. Ano/modelo: 2025/2025. Cor: Prata. Disponibilidade sob consulta.",
    imagens: [
      {
        src: "/images/motos/titan-cinza-atualizada.jpeg",
        alt: "Motocicleta prata da ABN MOTOS vista de lado",
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    id: "moto-vermelha",
    slug: "motocicleta-vermelha",
    nome: "Star 160 – Vermelha",
    destaque: false,
    preco: 320,
    unidadePreco: "por semana",
    especificacoes: [
      { rotulo: "Marca", valor: "Star" },
      { rotulo: "Modelo", valor: "160" },
      { rotulo: "Ano/modelo", valor: "2025/2025" },
      { rotulo: "Cor", valor: "Vermelha" },
      { rotulo: "Locação", valor: "R$ 320,00 por semana" },
    ],
    descricao:
      "Star 160 – Vermelha. Locação de R$ 320,00 por semana. Marca: Star. Modelo: 160. Ano/modelo: 2025/2025. Cor: Vermelha. Disponibilidade sob consulta.",
    imagens: [
      {
        src: "/images/motos/start-vermelha-atualizada.jpeg",
        alt: "Motocicleta vermelha da ABN MOTOS vista de lado",
        width: 3072,
        height: 4096,
      },
    ],
  },
  {
    id: "moto-preta-3",
    slug: "motocicleta-preta-3",
    nome: "Honda CG 160 Fan",
    destaque: false,
    preco: 330,
    unidadePreco: "por semana",
    especificacoes: [
      { rotulo: "Marca", valor: "Honda" },
      { rotulo: "Modelo", valor: "CG 160 Fan" },
      { rotulo: "Ano/modelo", valor: "2025/2026" },
      { rotulo: "Cor", valor: "Preto" },
      { rotulo: "Locação", valor: "R$ 330,00 por semana" },
    ],
    descricao:
      "Honda CG 160 Fan. Locação de R$ 330,00 por semana. Marca: Honda. Modelo: CG 160 Fan. Ano/modelo: 2025/2026. Cor: Preto. Disponibilidade sob consulta.",
    imagens: [
      {
        src: "/images/motos/fan-preta-atualizada.jpeg",
        alt: "Honda CG 160 Fan preta da ABN MOTOS vista de frente em três quartos",
        width: 960,
        height: 1280,
      },
    ],
  },
];

export function getMotorcycle(slug: string): Motorcycle | undefined {
  return motorcycles.find((moto) => moto.slug === slug);
}

export function getFeaturedMotorcycle(): Motorcycle {
  return motorcycles.find((moto) => moto.destaque) ?? motorcycles[0];
}
