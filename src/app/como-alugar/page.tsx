import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { rentalSteps } from "@/data/rental";
import { createPageMetadata } from "@/lib/site";
import { whatsappGeneralUrl } from "@/lib/whatsapp";

export const metadata = createPageMetadata({
  title: "Como alugar",
  description:
    "Entenda como solicitar uma locação na ABN MOTOS: escolha a moto, informe o período e a cidade e converse com a equipe pelo WhatsApp.",
  path: "/como-alugar",
});

const prepare = [
  {
    icon: "bicycle",
    title: "Moto de interesse",
    text: "Se já tiver escolhido uma moto no catálogo, diga o nome cadastrado. Se ainda estiver em dúvida, a equipe apresenta as opções.",
  },
  {
    icon: "calendar3",
    title: "Período",
    text: "Informe os dias ou o intervalo em que precisa da moto. O site não publica prazo mínimo nem máximo.",
  },
  {
    icon: "geo-alt",
    title: "Cidade ou bairro",
    text: "Diga onde você está. A ABN MOTOS atende Betim e região, e confirma outras localidades próximas na conversa.",
  },
];

export default function HowToRentPage() {
  return (
    <>
      <PageHero
        eyebrow="Consulta"
        title="A locação começa com uma conversa."
        description="O site organiza o primeiro contato. A reserva não é concluída por aqui: valores, disponibilidade e condições são confirmados pela equipe."
        crumbs={[
          { href: "/", label: "Início" },
          { label: "Como alugar" },
        ]}
      />

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[0.98] md:text-5xl">O caminho da consulta</h2>
          <ol className="mt-10 grid gap-4">
            {rentalSteps.map((step) => (
              <li key={step.id} className="grid gap-4 rounded-3xl border border-line bg-paper p-6 md:grid-cols-[auto_1fr] md:items-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow font-display text-2xl font-semibold text-ink">
                  {step.numero}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{step.titulo}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{step.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[0.98] md:text-5xl">O que enviar para a equipe</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {prepare.map((item) => (
              <li key={item.title} className="rounded-3xl border border-line bg-canvas p-6">
                <Icon name={item.icon} className="text-2xl text-ink" />
                <h3 className="mt-4 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-display text-4xl font-semibold leading-[0.98] md:text-5xl">O que a equipe esclarece</h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Documentação, requisitos e condições da locação são explicados no atendimento. Este site não publica idade mínima, categoria de habilitação, caução ou prazo mínimo, porque essas regras ainda não foram informadas para publicação.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Mandar uma mensagem abre a conversa. Só depois da confirmação da equipe a locação segue para os próximos passos.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Pronto para consultar um período?"
        description="Leve o nome da moto, os dias e a sua cidade. A ABN MOTOS responde com as condições daquela consulta."
        href={whatsappGeneralUrl}
        label="Quero consultar uma locação"
      />
    </>
  );
}
