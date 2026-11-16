import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/company";
import { contacts } from "@/data/contacts";
import { createPageMetadata } from "@/lib/site";
import { whatsappGeneralUrl } from "@/lib/whatsapp";

export const metadata = createPageMetadata({
  title: "Sobre",
  description:
    "A ABN MOTOS faz locação de motocicletas em Betim e região. Saiba como a empresa apresenta as motos e como falar com a equipe.",
  path: "/sobre",
});

const points = [
  {
    icon: "bicycle",
    title: "Locação de motos",
    text: "O serviço da ABN MOTOS é o aluguel de motocicletas. As opções com foto cadastrada podem ser vistas antes da conversa.",
  },
  {
    icon: "geo-alt",
    title: "Betim e região",
    text: "O atendimento informado é em Betim e região, Minas Gerais. Cidades e bairros próximos são confirmados no contato.",
  },
  {
    icon: "whatsapp",
    title: "Contato direto",
    text: "Valores, disponibilidade e condições são tratados com a equipe pelo WhatsApp, sem reserva automática pelo site.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="A empresa"
        title="Locação de motos com atendimento direto."
        description="A ABN MOTOS apresenta suas motocicletas e recebe consultas de quem precisa alugar em Betim e região."
        crumbs={[
          { href: "/", label: "Início" },
          { label: "Sobre" },
        ]}
      />

      <section className="py-16 md:py-24">
        <Container className="grid items-center gap-10 nav:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-[0.98] md:text-5xl">O que a ABN MOTOS faz</h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              A empresa atua no aluguel de motocicletas. Este site existe para mostrar as motos cadastradas, explicar como pedir uma consulta e indicar a região de atendimento.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Não há reserva concluída pelo formulário. A equipe confirma disponibilidade, valores e os próximos passos na conversa.
            </p>
            <Button href="/motos" variant="secondary" icon="arrow-right" className="mt-8 w-full sm:w-auto">
              Ver as motos cadastradas
            </Button>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-[#efefe8]">
            <Image
              src="/images/motos/preta-2-2.jpg"
              alt="Motocicleta preta da ABN MOTOS vista de frente em três quartos"
              fill
              sizes="(max-width: 1120px) 100vw, 560px"
              className="object-contain p-4"
            />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[0.98] md:text-5xl">
            Serviço, região e conversa
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {points.map((point) => (
              <li key={point.title} className="rounded-3xl border border-line bg-canvas p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow text-ink">
                  <Icon name={point.icon} className="text-xl" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-8 rounded-[28px] border border-line bg-paper p-6 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Como entrar em contato</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              O canal de consulta é o WhatsApp {contacts.whatsappDisplay}. O Instagram {company.instagramHandle} também apresenta a ABN MOTOS.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Button href={whatsappGeneralUrl} external icon="whatsapp" className="w-full sm:w-auto">
              Chamar no WhatsApp
            </Button>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold"
            >
              <Icon name="instagram" />
              {company.instagramHandle}
            </a>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Quer consultar uma moto da ABN?"
        description="Fale com a equipe, informe o período e a região e veja as opções cadastradas para a sua consulta."
        href={whatsappGeneralUrl}
        label="Consultar opções"
      />
    </>
  );
}
