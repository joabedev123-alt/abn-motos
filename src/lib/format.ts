import type { Motorcycle } from "@/data/motorcycles";

export function priceLabel(moto: Pick<Motorcycle, "preco" | "unidadePreco">): string {
  if (moto.preco == null) return "Valor sob consulta";

  const formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(moto.preco);

  return moto.unidadePreco ? `${formatted} ${moto.unidadePreco}` : formatted;
}

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
