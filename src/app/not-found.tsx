import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Página não encontrada",
  description: "A página solicitada não existe no site da ABN MOTOS.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-2xl">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-none">Página não encontrada</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          O endereço não corresponde a uma página da ABN MOTOS. Volte ao início ou veja as motos cadastradas.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" icon="arrow-left">
            Ir para o início
          </Button>
          <Button href="/motos" variant="secondary">
            Ver as motos
          </Button>
        </div>
      </Container>
    </section>
  );
}
