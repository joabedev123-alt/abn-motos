import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
};

export function PageHero({ eyebrow, title, description, crumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-graphite text-white">
      <div className="road-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative py-12 md:py-16">
        <Breadcrumbs items={crumbs} tone="dark" />
        <p className="eyebrow mt-6">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-[2.05rem] font-semibold leading-[0.96] min-[390px]:text-[2.35rem] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">{description}</p>
      </Container>
    </section>
  );
}
