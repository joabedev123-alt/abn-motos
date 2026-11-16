import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { FeaturedMotorcycle, MotorcycleCard } from "@/components/MotorcycleCard";
import { company } from "@/data/company";
import { homeFaq } from "@/data/faq";
import { getFeaturedMotorcycle, motorcycles } from "@/data/motorcycles";
import { rentalSteps } from "@/data/rental";
import { createPageMetadata } from "@/lib/site";
import { whatsappGeneralUrl, whatsappRegionUrl } from "@/lib/whatsapp";

export const metadata = createPageMetadata({
  title: "Aluguel de motos em Betim e região | ABN MOTOS",
  description:
    "Conheça as motos da ABN MOTOS e consulte disponibilidade, valores e condições de locação em Betim e região, Minas Gerais.",
  path: "/",
  absoluteTitle: true,
});

const introBlocks = [
  {
    icon: "bicycle",
    title: "Conheça as opções",
    text: "Veja as motos cadastradas com foto e as informações já confirmadas.",
  },
  {
    icon: "calendar3",
    title: "Consulte o período",
    text: "Diga quando você precisa da moto para a equipe orientar a locação.",
  },
  {
    icon: "chat-left-text",
    title: "Converse com a equipe",
    text: "Valores e condições são alinhados diretamente pelo WhatsApp.",
  },
];

const heroNotes = [
  { icon: "geo-alt", label: "Betim e região." },
  { icon: "whatsapp", label: "Atendimento pelo WhatsApp." },
  { icon: "card-list", label: "Consulta de valores e condições." },
];

export default function HomePage() {
  const destaque = getFeaturedMotorcycle();
  const heroImage = destaque.imagens[0];
  const demais = motorcycles.filter((moto) => moto.id !== destaque.id);

  return (
    <>
      <section className="relative overflow-hidden bg-graphite text-white">
        <div className="road-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-10 py-14 md:py-20 nav:grid-cols-[1.05fr_0.95fr] nav:py-24">
          <div className="rise">
            <p className="eyebrow">Aluguel de motos • Betim e região</p>
            <h1 className="mt-5 max-w-xl text-balance font-display text-[2.05rem] font-semibold leading-[0.95] min-[390px]:text-[2.35rem] sm:text-6xl nav:text-[4.4rem]">
              Sua próxima moto para alugar está aqui.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Conheça as motos da ABN MOTOS e consulte disponibilidade, valores e condições de locação em Betim e região.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappGeneralUrl} external icon="whatsapp" className="w-full sm:w-auto">
                Consultar disponibilidade
              </Button>
              <Button href="/motos" variant="secondaryOnDark" icon="arrow-right" className="w-full sm:w-auto">
                Conhecer as motos
              </Button>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroNotes.map((note) => (
                <li key={note.label} className="flex items-center gap-2 text-sm text-white/80">
                  <Icon name={note.icon} className="text-yellow" />
                  <span>{note.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] bg-[#1b1b1b] ring-1 ring-white/10">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                sizes="(max-width: 1120px) 100vw, 460px"
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-balance font-display text-4xl font-semibold leading-[0.98] md:text-5xl">
              Aluguel de motos com contato direto.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              A ABN MOTOS atende Betim e região com locação de motocicletas. Fale com nossa equipe para conhecer as opções e consultar as condições para o período que você precisa.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {introBlocks.map((block) => (
              <li key={block.title} className="rounded-3xl border border-line bg-paper p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow text-ink">
                  <Icon name={block.icon} className="text-xl" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{block.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-semibold leading-[0.98] md:text-5xl">Conheça nossas motos.</h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                Veja as opções cadastradas e fale com a ABN para confirmar valores e disponibilidade.
              </p>
            </div>
            <Link href="/motos" className="inline-flex min-h-12 items-center text-sm font-semibold text-ink underline-offset-4 hover:underline">
              Ver a página de motos
            </Link>
          </div>
          <div className="mt-10">
            <FeaturedMotorcycle moto={destaque} />
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

      <section className="py-16 md:py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-balance font-display text-4xl font-semibold leading-[0.98] md:text-5xl">
              Seu primeiro passo começa com uma conversa.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              O contato organiza a consulta. Ele não confirma uma reserva.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {rentalSteps.map((step) => (
              <li key={step.id} className="rounded-3xl border border-line bg-paper p-6">
                <span className="font-display text-3xl font-semibold text-yellow-deep">{step.numero}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">{step.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.texto}</p>
              </li>
            ))}
          </ol>
          <Button href={whatsappGeneralUrl} external icon="whatsapp" className="mt-8 w-full sm:w-auto">
            Quero consultar uma locação
          </Button>
        </Container>
      </section>

      <section className="bg-graphite py-16 text-white md:py-24 lg:py-28">
        <Container className="grid items-center gap-10 nav:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-balance font-display text-4xl font-semibold leading-[0.98] md:text-5xl">
              Aluguel de motos em Betim e região.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Está em Betim ou em uma cidade próxima? Entre em contato e confirme o atendimento para sua localização.
            </p>
            <Button href={whatsappRegionUrl} external icon="whatsapp" className="mt-8 w-full sm:w-auto">
              Consultar minha região
            </Button>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
            <p className="font-display text-5xl font-semibold leading-none">Betim</p>
            <p className="mt-3 text-lg text-white/80">e região — {company.state}</p>
            <p className="mt-6 text-sm leading-relaxed text-white/65">
              Outras localidades próximas são confirmadas na conversa. O site não publica endereço nem ponto de retirada.
            </p>
            <Link href="/regiao-de-atendimento" className="mt-6 inline-flex min-h-12 items-center text-sm font-semibold text-yellow">
              Entenda a região atendida
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 lg:py-28">
        <Container className="grid items-center gap-10 nav:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-[#efefe8]">
            <Image
              src="/images/motos/azul-1.jpg"
              alt="Motocicleta azul e preta da ABN MOTOS vista de lado ao sol"
              fill
              sizes="(max-width: 1120px) 100vw, 560px"
              className="object-contain p-4"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl font-semibold leading-[0.98] md:text-5xl">Conheça a ABN MOTOS.</h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              A ABN MOTOS trabalha com aluguel de motocicletas para quem está em Betim e região. O site apresenta as motos cadastradas e encaminha a consulta de valores, disponibilidade e condições para a equipe.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              O atendimento acontece pelo WhatsApp, com as informações do período e da localidade que você precisa.
            </p>
            <Button href="/sobre" variant="secondary" icon="arrow-right" className="mt-8 w-full sm:w-auto">
              Conhecer a empresa
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24 lg:py-28">
        <Container className="grid gap-8 nav:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-[0.98] md:text-5xl">Perguntas frequentes</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Respostas com o que já está definido. O que ainda depende da equipe é indicado na própria resposta.
            </p>
            <Link href="/duvidas-frequentes" className="mt-6 inline-flex min-h-12 items-center text-sm font-semibold underline-offset-4 hover:underline">
              Ver todas as dúvidas
            </Link>
          </div>
          <Accordion items={homeFaq} />
        </Container>
      </section>

      <CtaBand
        title="Vamos encontrar uma opção para o seu período?"
        description="Fale com a ABN MOTOS e consulte motos, valores e atendimento para sua região."
        href={whatsappGeneralUrl}
        label="Falar com a ABN MOTOS"
      />
    </>
  );
}
