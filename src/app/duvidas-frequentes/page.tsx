import { Accordion } from "@/components/Accordion";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { faqItems } from "@/data/faq";
import { createPageMetadata } from "@/lib/site";
import { whatsappGeneralUrl } from "@/lib/whatsapp";

export const metadata = createPageMetadata({
  title: "Dúvidas frequentes",
  description:
    "Respostas sobre consulta de valores, disponibilidade, região atendida e contato com a ABN MOTOS.",
  path: "/duvidas-frequentes",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Ajuda"
        title="Dúvidas sobre a consulta de locação."
        description="As respostas usam apenas o que já está definido. Quando uma condição ainda não foi informada, a orientação é falar com a equipe."
        crumbs={[
          { href: "/", label: "Início" },
          { label: "Dúvidas frequentes" },
        ]}
      />

      <section className="py-12 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Perguntas</h2>
          <div className="mt-6">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Sua dúvida não está na lista?"
        description="Chame a ABN MOTOS e pergunte sobre a moto, o período ou a região. A equipe responde na conversa."
        href={whatsappGeneralUrl}
        label="Falar com a ABN MOTOS"
      />
    </>
  );
}
