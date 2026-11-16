"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { MobileMenu } from "@/components/MobileMenu";
import { mainNav } from "@/data/navigation";
import { cx } from "@/lib/format";
import { whatsappGeneralUrl } from "@/lib/whatsapp";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1120px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const main = document.getElementById("conteudo");
    const footer = document.getElementById("rodape");
    const float = document.getElementById("whatsapp-flutuante");

    if (!open) {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      float?.removeAttribute("inert");
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    float?.setAttribute("inert", "");

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = document.getElementById("menu-mobile");
      const nodes = [
        buttonRef.current,
        ...(panel ? Array.from(panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")) : []),
      ].filter((node): node is HTMLElement => Boolean(node));

      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      float?.removeAttribute("inert");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header id="site-header" className="sticky top-0 z-50 border-b border-line bg-paper">
      <Container className="flex h-[72px] items-center gap-6 nav:h-[88px]">
        <Link href="/" className="shrink-0" aria-label="ABN MOTOS, ir para o início">
          <Image
            src="/images/logo.png"
            alt=""
            width={720}
            height={784}
            priority
            className="h-14 w-auto nav:h-[4.25rem]"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 nav:flex" aria-label="Principal">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cx(
                  "relative text-[15px] font-medium",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
                {active ? <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-yellow" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden nav:block">
          <Button href={whatsappGeneralUrl} external icon="whatsapp">
            Consultar disponibilidade
          </Button>
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink nav:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "x-lg" : "list"} className="text-xl" />
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        </button>
      </Container>
      <MobileMenu open={open} pathname={pathname} onClose={() => setOpen(false)} />
    </header>
  );
}
