import Image from "next/image";
import { Button } from "@/components/Button";
import type { Motorcycle } from "@/data/motorcycles";
import { priceLabel } from "@/lib/format";
import { whatsappVehicleUrl } from "@/lib/whatsapp";

type MotorcycleCardProps = {
  moto: Motorcycle;
};

export function MotorcycleCard({ moto }: MotorcycleCardProps) {
  const cover = moto.imagens[0];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_12px_32px_rgba(17,17,17,0.04)]">
      <div className="relative aspect-[4/3] bg-[#efefe8]">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
          className="object-contain p-3"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div>
          <h3 className="font-display text-3xl font-semibold leading-none text-ink">{moto.nome}</h3>
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
