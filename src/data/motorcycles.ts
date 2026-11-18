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
    nome: "Motocicleta preta 1",
    destaque: true,
    preco: null,
    unidadePreco: null,
    especificacoes: [{ rotulo: "Cor", valor: "Preta" }],
    descricao:
      "Motocicleta preta fotografada em área externa. As imagens mostram o mesmo veículo em ângulos diferentes. Valor, período e disponibilidade são confirmados com a equipe da ABN MOTOS.",
    imagens: [
      {
        src: "/images/motos/preta-2-1.jpg",
        alt: "Motocicleta preta da ABN MOTOS vista de lado, sobre piso de paralelepípedo",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/motos/preta-2-2.jpg",
        alt: "Motocicleta preta da ABN MOTOS vista de frente em três quartos",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/motos/preta-2-3.jpg",
        alt: "Motocicleta preta da ABN MOTOS estacionada junto à calçada",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/motos/preta-2-4.jpg",
        alt: "Motocicleta preta da ABN MOTOS vista de frente em ambiente claro",
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    id: "moto-preta-2",
    slug: "motocicleta-preta-2",
    nome: "Motocicleta preta 2",
    destaque: false,
    preco: null,
    unidadePreco: null,
    especificacoes: [{ rotulo: "Cor", valor: "Preta" }],
    descricao:
      "Outra motocicleta preta, distinta da Motocicleta preta 1, fotografada em ambiente coberto. Use esta página para consultar esta unidade específica.",
    imagens: [
      {
        src: "/images/motos/preta-1-1.jpg",
        alt: "Segunda motocicleta preta da ABN MOTOS vista de lado em ambiente coberto",
        width: 1599,
        height: 899,
      },
      {
        src: "/images/motos/preta-1-2.jpg",
        alt: "Segunda motocicleta preta da ABN MOTOS vista de frente",
        width: 899,
        height: 1599,
      },
      {
        src: "/images/motos/preta-1-3.jpg",
        alt: "Segunda motocicleta preta da ABN MOTOS vista pela lateral traseira",
        width: 1599,
        height: 899,
      },
    ],
  },
  {
    id: "moto-azul",
    slug: "motocicleta-azul",
    nome: "Motocicleta azul",
    destaque: false,
    preco: null,
    unidadePreco: null,
    especificacoes: [{ rotulo: "Cor", valor: "Azul e preta" }],
    descricao:
      "Motocicleta com tanque azul e partes pretas. As fotos correspondem a este veículo. Condições de locação, valor e disponibilidade ficam sob consulta.",
    imagens: [
      {
        src: "/images/motos/azul-1.jpg",
        alt: "Motocicleta azul e preta da ABN MOTOS vista de lado ao sol",
        width: 768,
        height: 1024,
      },
      {
        src: "/images/motos/azul-2.jpg",
        alt: "Motocicleta azul e preta da ABN MOTOS em outro ângulo",
        width: 768,
        height: 1024,
      },
    ],
  },
  {
    id: "moto-cinza",
    slug: "motocicleta-cinza",
    nome: "Motocicleta cinza",
    destaque: false,
    preco: null,
    unidadePreco: null,
    especificacoes: [{ rotulo: "Cor", valor: "Cinza" }],
    descricao:
      "Motocicleta cinza com uma fotografia cadastrada. Peça à equipe os valores e a disponibilidade para o período desejado.",
    imagens: [
      {
        src: "/images/motos/cinza-1.jpg",
        alt: "Motocicleta cinza da ABN MOTOS vista pela lateral traseira",
        width: 1600,
        height: 900,
      },
    ],
  },
  {
    id: "moto-vermelha",
    slug: "motocicleta-vermelha",
    nome: "Motocicleta vermelha",
    destaque: false,
    preco: null,
    unidadePreco: null,
    especificacoes: [{ rotulo: "Cor", valor: "Vermelha e preta" }],
    descricao:
      "Motocicleta com tanque vermelho e partes pretas. As imagens mostram este veículo. O atendimento confirma período, valor e condições.",
    imagens: [
      {
        src: "/images/motos/vermelha-1.jpg",
        alt: "Motocicleta vermelha da ABN MOTOS vista de frente em três quartos",
        width: 900,
        height: 1600,
      },
      {
        src: "/images/motos/vermelha-2.jpg",
        alt: "Motocicleta vermelha da ABN MOTOS vista pela lateral",
        width: 900,
        height: 1600,
      },
    ],
  },
  {
    id: "moto-preta-3",
    slug: "motocicleta-preta-3",
    nome: "Motocicleta preta 3",
    destaque: false,
    preco: null,
    unidadePreco: null,
    especificacoes: [{ rotulo: "Cor", valor: "Preta, com detalhes prata e vermelho" }],
    descricao:
      "Motocicleta preta com detalhes prata e vermelho, fotografada em ambiente coberto. As imagens mostram o mesmo veículo em ângulos diferentes. Valor, período e disponibilidade são confirmados com a equipe da ABN MOTOS.",
    imagens: [
      {
        src: "/images/motos/preta-3-1.jpg",
        alt: "Motocicleta preta com detalhes prata e vermelho da ABN MOTOS vista de lado",
        width: 960,
        height: 1280,
      },
      {
        src: "/images/motos/preta-3-2.jpg",
        alt: "Motocicleta preta com detalhes prata e vermelho da ABN MOTOS em outro ângulo",
        width: 960,
        height: 1280,
      },
      {
        src: "/images/motos/preta-3-3.jpg",
        alt: "Motocicleta preta com detalhes prata e vermelho da ABN MOTOS vista de frente",
        width: 960,
        height: 1280,
      },
    ],
  },
  {
    id: "moto-preta-4",
    slug: "motocicleta-preta-4",
    nome: "Motocicleta preta 4",
    destaque: false,
    preco: null,
    unidadePreco: null,
    especificacoes: [{ rotulo: "Cor", valor: "Preta" }],
    descricao:
      "Motocicleta preta fotografada em ambiente interno, distinta das outras motos pretas do cadastro. As imagens mostram este veículo. Valor, período e disponibilidade são confirmados com a equipe da ABN MOTOS.",
    imagens: [
      {
        src: "/images/motos/preta-4-1.jpg",
        alt: "Motocicleta preta da ABN MOTOS vista de frente em ambiente interno",
        width: 1138,
        height: 1280,
      },
      {
        src: "/images/motos/preta-4-2.jpg",
        alt: "Motocicleta preta da ABN MOTOS em ambiente interno, em ângulo próximo",
        width: 1139,
        height: 1280,
      },
    ],
  },
  {
    id: "moto-preta-5",
    slug: "motocicleta-preta-5",
    nome: "Motocicleta preta 5",
    destaque: false,
    preco: null,
    unidadePreco: null,
    especificacoes: [{ rotulo: "Cor", valor: "Preta" }],
    descricao:
      "Motocicleta preta com uma fotografia cadastrada, distinta das demais motos pretas. Peça à equipe os valores e a disponibilidade para o período desejado.",
    imagens: [
      {
        src: "/images/motos/preta-5-1.jpg",
        alt: "Motocicleta preta da ABN MOTOS vista de lado junto a uma parede",
        width: 960,
        height: 1280,
      },
    ],
  },
  {
    id: "moto-azul-2",
    slug: "motocicleta-azul-2",
    nome: "Motocicleta azul 2",
    destaque: false,
    preco: null,
    unidadePreco: null,
    especificacoes: [{ rotulo: "Cor", valor: "Azul e preta" }],
    descricao:
      "Outra motocicleta com tanque azul e partes pretas, distinta da Motocicleta azul. As fotos correspondem a este veículo. Condições de locação, valor e disponibilidade ficam sob consulta.",
    imagens: [
      {
        src: "/images/motos/azul-2-1.jpg",
        alt: "Segunda motocicleta azul da ABN MOTOS vista de lado em ambiente coberto",
        width: 960,
        height: 1280,
      },
      {
        src: "/images/motos/azul-2-2.jpg",
        alt: "Segunda motocicleta azul da ABN MOTOS vista de frente",
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
