import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { company } from "@/data/company";
import { contacts } from "@/data/contacts";
import { footerInfo, footerNav } from "@/data/navigation";
import { whatsappGeneralUrl } from "@/lib/whatsapp";
import { Copyright } from "@/components/Copyright";

export function Footer() {
  return (
    <footer id="rodape" className="bg-graphite text-white">
      <Container className="grid gap-12 py-14 md:grid-cols-2 md:py-16 xl:grid-cols-4">
        <div>
          <Image src="/images/logo.png" alt="ABN Motos" width={720} height={784} className="h-16 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">{company.summary}</p>
          <a
            href={company.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-12 items-center gap-2 text-sm font-medium text-white"
          >
            <Icon name="instagram" className="text-lg text-yellow" />
            {company.instagramHandle}
          </a>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p className="font-display text-xl font-semibold text-yellow">Navegação</p>
          <ul className="mt-4 space-y-1">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-sm text-white/75 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Informações">
          <p className="font-display text-xl font-semibold text-yellow">Informações</p>
          <ul className="mt-4 space-y-1">
            {footerInfo.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-sm text-white/75 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-xl font-semibold text-yellow">Atendimento</p>
          <p className="mt-4 text-sm text-white/70">WhatsApp</p>
          <a
            href={whatsappGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex min-h-11 items-center text-base font-semibold text-white"
          >
            {contacts.whatsappDisplay}
          </a>
          <p className="mt-3 text-sm text-white/70">
            {company.region} — {company.stateAbbr}
          </p>
          <Button href={whatsappGeneralUrl} external icon="whatsapp" className="mt-5 w-full sm:w-auto">
            Consultar disponibilidade
          </Button>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 pr-20 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <Suspense fallback={<p className="text-sm text-white/60">© ABN MOTOS. Todos os direitos reservados.</p>}>
            <Copyright />
          </Suspense>
          <a
            href="https://camaly.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-fit items-center text-sm text-white/60 hover:text-white"
          >
            Produzida com 💚 por CAMALY
          </a>
        </Container>
      </div>
    </footer>
  );
}
