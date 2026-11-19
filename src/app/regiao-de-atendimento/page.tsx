import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/site";
import { whatsappRegionUrl } from "@/lib/whatsapp";

export const metadata = createPageMetadata({
  title: "Região de atendimento",
  description:
    "A ABN MOTOS atende Betim e região, em Minas Gerais. Confirme se a sua cidade ou o seu bairro está na área de atendimento.",
  path: "/regiao-de-atendimento",
});

export default function RegionPage() {
  return (
    <>
      <PageHero
        eyebrow="Atendimento"
        title="Aluguel de motos em Betim e região."
        description="A área informada pela ABN MOTOS é Betim e as localidades próximas, em Minas Gerais. A confirmação do seu endereço faz parte da consulta."
        crumbs={[
          { href: "/", label: "Início" },
          { label: "Região de atendimento" },
        ]}
      />

      <section className="py-12 md:py-20">
        <Container className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[28px] bg-graphite p-8 text-white">
            <Icon name="geo-alt" className="text-2xl text-yellow" />
            <h2 className="mt-5 font-display text-[1.85rem] font-semibold leading-none sm:text-4xl">Atendimento em Betim</h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Atendemos Betim e seus bairros, oferecendo opções de motocicletas para locação. Entre em contato com nossa equipe para consultar a disponibilidade e as condições de atendimento na sua região.
            </p>
          </article>
          <article className="rounded-[28px] border border-line bg-paper p-8">
            <Icon name="signpost-2" className="text-2xl" />
            <h2 className="mt-5 font-display text-[1.85rem] font-semibold leading-none sm:text-4xl">Cidades próximas</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Também recebemos consultas de clientes de cidades próximas a Betim. Informe sua cidade ou bairro pelo WhatsApp para que nossa equipe possa confirmar a possibilidade de atendimento.
            </p>
            <p className="mt-4 text-base font-semibold leading-relaxed text-ink">
              ABN MOTOS – Locação de motocicletas com praticidade e atendimento direto.
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-paper py-12 md:py-20">
        <Container className="grid gap-8 nav:grid-cols-[1.1fr_0.9fr] nav:items-center">
          <div>
            <h2 className="font-display text-[1.85rem] font-semibold leading-[1.02] sm:text-4xl md:text-5xl">Consulte nossa área de atendimento</h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              A ABN MOTOS oferece locação de motocicletas para clientes de Betim e cidades próximas, em Minas Gerais.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              A retirada da motocicleta é realizada em Betim, independentemente da cidade onde o cliente reside.
            </p>
            <Button href={whatsappRegionUrl} external icon="whatsapp" className="mt-8 w-full sm:w-auto">
              Confirmar minha cidade
            </Button>
          </div>
          <div className="rounded-[28px] border border-dashed border-line bg-canvas p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">Área de atendimento</p>
            <p className="mt-3 font-display text-3xl font-semibold leading-tight">Betim e cidades próximas – Minas Gerais</p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.08em] text-muted">Local de retirada</p>
            <p className="mt-3 font-display text-3xl font-semibold leading-tight">Betim – MG</p>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Sua cidade fica perto de Betim?"
        description="Confirme com a equipe antes de combinar a locação. A resposta vale para a localidade que você informar."
        href={whatsappRegionUrl}
        label="Consultar minha região"
      />
    </>
  );
}
