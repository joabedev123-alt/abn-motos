import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/company";
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

      <section className="py-16 md:py-24">
        <Container className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[28px] bg-graphite p-8 text-white">
            <Icon name="geo-alt" className="text-2xl text-yellow" />
            <h2 className="mt-5 font-display text-4xl font-semibold">Betim</h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Betim, em {company.state}, é a referência de atendimento da ABN MOTOS. Se você está na cidade, informe o bairro ao chamar a equipe.
            </p>
          </article>
          <article className="rounded-[28px] border border-line bg-paper p-8">
            <Icon name="signpost-2" className="text-2xl" />
            <h2 className="mt-5 font-display text-4xl font-semibold">Cidades próximas</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Localidades da região podem ser atendidas, mas o site não lista outras cidades. Envie o nome da cidade ou do bairro para a equipe confirmar.
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container className="grid gap-8 nav:grid-cols-[1.1fr_0.9fr] nav:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-[0.98] md:text-5xl">Como confirmar a sua localidade</h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Na mensagem, diga a cidade e, se puder, o bairro. A ABN MOTOS responde se consegue atender aquele ponto para o período da locação.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Não há mapa, endereço comercial nem ponto de retirada publicado neste site.
            </p>
            <Button href={whatsappRegionUrl} external icon="whatsapp" className="mt-8 w-full sm:w-auto">
              Confirmar minha cidade
            </Button>
          </div>
          <div className="rounded-[28px] border border-dashed border-line bg-canvas p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">Consulta</p>
            <p className="mt-4 font-display text-3xl font-semibold leading-tight">
              {company.region}
              <span className="mt-2 block text-xl font-medium text-muted">{company.state}</span>
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              A mensagem pronta pergunta se a ABN MOTOS atende a sua cidade ou o seu bairro. Você pode completar o nome do lugar antes de enviar.
            </p>
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
