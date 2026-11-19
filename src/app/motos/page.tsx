import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FeaturedMotorcycle, MotorcycleCard } from "@/components/MotorcycleCard";
import { PageHero } from "@/components/PageHero";
import { getFeaturedMotorcycle, motorcycles } from "@/data/motorcycles";
import { createPageMetadata } from "@/lib/site";
import { whatsappGeneralUrl } from "@/lib/whatsapp";

export const metadata = createPageMetadata({
  title: "Nossas motos",
  description:
    "Veja as motocicletas cadastradas pela ABN MOTOS e consulte valores e disponibilidade para aluguel em Betim e região.",
  path: "/motos",
});

export default function MotorcyclesPage() {
  const destaque = getFeaturedMotorcycle();
  const demais = motorcycles.filter((moto) => moto.id !== destaque.id);

  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Conheça nossas motocicletas"
        description={
          <>
            Confira as motocicletas disponíveis para locação. Cada veículo possui fotos individuais e
            informações específicas para que você possa escolher a opção ideal.{" "}
            <strong className="font-semibold text-white">Escolha sua moto e fale conosco!</strong>
          </>
        }
        crumbs={[
          { href: "/", label: "Início" },
          { label: "Nossas motos" },
        ]}
      />

      <section className="py-12 md:py-20">
        <Container>
          <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            Conheça cada motocicleta por meio de fotos e informações completas, como marca, modelo, ano e características técnicas. Tudo para que você escolha a moto ideal para sua necessidade.
          </p>
          <div className="mt-10">
            <FeaturedMotorcycle moto={destaque} titleAs="h2" />
          </div>
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {demais.map((moto) => (
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
