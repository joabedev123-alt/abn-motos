import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/company";
import { contacts } from "@/data/contacts";
import { createPageMetadata } from "@/lib/site";
import { whatsappGeneralUrl } from "@/lib/whatsapp";

export const metadata = createPageMetadata({
  title: "Contato",
  description:
    "Fale com a ABN MOTOS pelo WhatsApp para consultar aluguel de motos em Betim e região. Prepare sua mensagem e continue a conversa no aplicativo.",
  path: "/contato",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Atendimento"
        title="Fale com a ABN MOTOS."
        description="O contato do site é pelo WhatsApp. Você pode chamar direto ou montar a mensagem com os dados da sua consulta."
        crumbs={[
          { href: "/", label: "Início" },
          { label: "Contato" },
        ]}
      />

      <section className="py-12 md:py-20">
        <Container className="grid items-start gap-8 nav:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4">
            <article className="rounded-[28px] bg-graphite p-5 text-white sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-yellow">WhatsApp</p>
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-12 items-center font-display text-[1.7rem] font-semibold leading-none sm:text-4xl"
              >
                {contacts.whatsappDisplay}
              </a>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                O número abre uma conversa com a mensagem geral de consulta de valores e disponibilidade.
              </p>
            </article>

            <article className="rounded-[28px] border border-line bg-paper p-5 sm:p-7">
              <h2 className="font-display text-2xl font-semibold">Instagram</h2>
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-12 items-center gap-2 font-semibold"
              >
                <Icon name="instagram" />
                {company.instagramHandle}
              </a>
            </article>

            <article className="rounded-[28px] border border-line bg-paper p-5 sm:p-7">
              <h2 className="font-display text-2xl font-semibold">Região de atendimento</h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {company.region} — {company.state}. Se a sua cidade for próxima, confirme o atendimento na mensagem.
              </p>
            </article>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
