import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { privacySections } from "@/data/privacy";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacidade",
  description:
    "Como a ABN MOTOS trata as informações digitadas no site e o redirecionamento para WhatsApp e Instagram.",
  path: "/privacidade",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Como este site usa as informações."
        description="Um texto curto sobre o formulário de contato e os links para WhatsApp e Instagram."
        crumbs={[
          { href: "/", label: "Início" },
          { label: "Privacidade" },
        ]}
      />

      <section className="py-12 md:py-20">
        <Container className="max-w-3xl">
          <div className="grid gap-10">
            {privacySections.map((section) => (
              <article key={section.id}>
                <h2 className="font-display text-3xl font-semibold">{section.titulo}</h2>
                <div className="mt-4 grid gap-3">
                  {section.paragrafos.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
