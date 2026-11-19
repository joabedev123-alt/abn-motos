import Image from "next/image";
import { Button } from "@/components/Button";
import type { Motorcycle } from "@/data/motorcycles";
import { priceLabel } from "@/lib/format";
import { whatsappVehicleUrl } from "@/lib/whatsapp";

type MotorcycleCardProps = {
  moto: Motorcycle;
};

type FeaturedMotorcycleProps = MotorcycleCardProps & {
  titleAs?: "h2" | "h3";
};

export function FeaturedMotorcycle({ moto, titleAs = "h3" }: FeaturedMotorcycleProps) {
  const Title = titleAs;
  const cover = moto.imagens[0];

  return (
    <article className="grid min-w-0 overflow-hidden rounded-[28px] border border-line bg-paper shadow-[0_12px_32px_rgba(17,17,17,0.04)] nav:grid-cols-2">
      <div className="relative aspect-[4/3] bg-[#efefe8] nav:aspect-auto nav:min-h-[440px]">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(max-width: 1120px) 100vw, 620px"
          className="object-contain p-4 sm:p-8"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-center p-4 sm:p-6 md:p-10">
        <Title className="font-display text-[2rem] font-semibold leading-none text-ink sm:text-4xl md:text-5xl">{moto.nome}</Title>
        <p className="mt-4 text-base leading-relaxed text-muted">{moto.descricao}</p>
        <p className="mt-5 text-sm font-semibold text-ink">Consulte disponibilidade</p>
        <p className="mt-1 text-sm text-muted">{priceLabel(moto)}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={`/motos/${moto.slug}`} variant="secondary" icon="arrow-right">
            Ver detalhes
          </Button>
          <Button href={whatsappVehicleUrl(moto.nome)} external icon="whatsapp">
            Consultar esta moto
          </Button>
        </div>
      </div>
    </article>
  );
}

export function MotorcycleCard({ moto }: MotorcycleCardProps) {
  const cover = moto.imagens[0];

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_12px_32px_rgba(17,17,17,0.04)]">
      <div className="relative aspect-[5/4] bg-[#efefe8] sm:aspect-[4/3]">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
          className="object-contain p-3"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4 p-4 md:p-6">
        <div>
          <h3 className="font-display text-[1.75rem] font-semibold leading-none text-ink sm:text-3xl">{moto.nome}</h3>
          <p className="mt-3 text-sm font-medium text-ink">Consulte disponibilidade</p>
          <p className="mt-1 text-sm text-muted">{priceLabel(moto)}</p>
        </div>
        <div className="mt-auto grid gap-3 sm:grid-cols-2">
          <Button href={`/motos/${moto.slug}`} variant="secondary" icon="arrow-right">
            Ver detalhes
          </Button>
          <Button href={whatsappVehicleUrl(moto.nome)} external icon="whatsapp">
            Consultar esta moto
          </Button>
        </div>
      </div>
    </article>
  );
}
