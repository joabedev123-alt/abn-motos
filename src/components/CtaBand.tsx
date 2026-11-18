import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

type CtaBandProps = {
  title: string;
  description: string;
  href: string;
  label: string;
  external?: boolean;
};

export function CtaBand({ title, description, href, label, external = true }: CtaBandProps) {
  return (
    <section className="bg-yellow text-ink">
      <Container className="flex flex-col items-start gap-6 py-12 md:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-balance font-display text-[1.85rem] font-semibold leading-[1.02] sm:text-4xl md:text-5xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">{description}</p>
        </div>
        <Button href={href} external={external} variant="dark" icon={external ? "whatsapp" : undefined} className="w-full sm:w-auto">
          {label}
        </Button>
      </Container>
    </section>
  );
}
