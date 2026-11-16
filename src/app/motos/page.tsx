import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { MotorcycleCard } from "@/components/MotorcycleCard";
import { PageHero } from "@/components/PageHero";
import { motorcycles } from "@/data/motorcycles";
import { createPageMetadata } from "@/lib/site";
import { whatsappGeneralUrl } from "@/lib/whatsapp";

export const metadata = createPageMetadata({
  title: "Nossas motos",
  description:
    "Veja as motocicletas cadastradas pela ABN MOTOS e consulte valores e disponibilidade para aluguel em Betim e região.",
  path: "/motos",
});

export default function MotorcyclesPage() {
  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="As motos cadastradas para consulta."
        description="Cada card corresponde a um veículo com fotos próprias. Valores aparecem quando estiverem definidos. A disponibilidade é confirmada com a equipe."
        crumbs={[
          { href: "/", label: "Início" },
          { label: "Nossas motos" },
        ]}
      />

      <section className="py-16 md:py-24">
        <Container>
          <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            Os nomes identificam as motos pelas fotos recebidas. Modelo, ano e outras características permanecem com a equipe até serem confirmados para publicação.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {motorcycles.map((moto) => (
              <li key={moto.id}>
                <MotorcycleCard moto={moto} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title="Não encontrou o que precisa na página?"
        description="Chame a ABN MOTOS e pergunte sobre as motos cadastradas, o período e a sua região."
        href={whatsappGeneralUrl}
        label="Consultar disponibilidade"
      />
    </>
  );
}
