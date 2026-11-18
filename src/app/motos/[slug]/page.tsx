import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { MotorcycleGallery } from "@/components/MotorcycleGallery";
import { getMotorcycle, motorcycles } from "@/data/motorcycles";
import { priceLabel } from "@/lib/format";
import { createPageMetadata } from "@/lib/site";
import { whatsappVehicleUrl } from "@/lib/whatsapp";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return motorcycles.map((moto) => ({ slug: moto.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const moto = getMotorcycle(slug);
  if (!moto) return { title: "Moto não encontrada" };

  const cover = moto.imagens[0];
  return createPageMetadata({
    title: moto.nome,
    description: moto.descricao,
    path: `/motos/${moto.slug}`,
    image: cover,
  });
}

export default async function MotorcyclePage({ params }: PageProps) {
  const { slug } = await params;
  const moto = getMotorcycle(slug);
  if (!moto) notFound();

  return (
    <>
      <section className="py-8 md:py-12">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Início" },
              { href: "/motos", label: "Nossas motos" },
              { label: moto.nome },
            ]}
          />
          <div className="mt-8 grid items-start gap-10 nav:grid-cols-[1.05fr_0.95fr]">
            <MotorcycleGallery images={moto.imagens} name={moto.nome} />
            <div>
              <p className="eyebrow">Consulta de locação</p>
              <h1 className="mt-4 font-display text-[2rem] font-semibold leading-[1.02] sm:text-4xl md:text-6xl">{moto.nome}</h1>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{moto.descricao}</p>

              <dl className="mt-6 grid gap-4 rounded-3xl border border-line bg-paper p-5">
                <div>
                  <dt className="text-sm text-muted">Valor</dt>
                  <dd className="mt-1 text-lg font-semibold text-ink">{priceLabel(moto)}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Disponibilidade</dt>
                  <dd className="mt-1 text-lg font-semibold text-ink">Consulte disponibilidade</dd>
                </div>
                {moto.especificacoes.map((spec) => (
                  <div key={spec.rotulo}>
                    <dt className="text-sm text-muted">{spec.rotulo}</dt>
                    <dd className="mt-1 text-lg font-semibold text-ink">{spec.valor}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-5 text-base leading-relaxed text-muted">
                A disponibilidade desta moto depende de confirmação com a equipe. O contato pelo site não reserva o veículo.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={whatsappVehicleUrl(moto.nome)} external icon="whatsapp" className="w-full sm:w-auto">
                  Consultar esta moto
                </Button>
                <Button href="/motos" variant="secondary" icon="arrow-left" className="w-full sm:w-auto">
                  Voltar ao catálogo
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="rounded-[28px] border border-line bg-paper p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold">O que informar nesta consulta</h2>
            <ul className="mt-4 grid gap-3 text-base leading-relaxed text-muted md:grid-cols-3">
              <li className="rounded-2xl bg-canvas p-4">A moto: {moto.nome}.</li>
              <li className="rounded-2xl bg-canvas p-4">O período em que você precisa dela.</li>
              <li className="rounded-2xl bg-canvas p-4">A cidade ou o bairro em Betim e região.</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Requisitos e condições da locação são explicados pela equipe. Esta página não lista documentos nem regras que ainda não foram informadas.
            </p>
            <Link href="/como-alugar" className="mt-4 inline-flex min-h-12 items-center text-sm font-semibold underline-offset-4 hover:underline">
              Ver como funciona a consulta
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand
        title={`Quer consultar a ${moto.nome}?`}
        description="A mensagem já chega com o nome desta moto. A equipe confirma valor, período e disponibilidade."
        href={whatsappVehicleUrl(moto.nome)}
        label="Consultar esta moto"
      />
    </>
  );
}
