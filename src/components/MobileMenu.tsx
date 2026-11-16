"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/Button";
import { mainNav } from "@/data/navigation";
import { cx } from "@/lib/format";
import { whatsappGeneralUrl } from "@/lib/whatsapp";

type MobileMenuProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu({ open, pathname, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();
  }, [open]);

  return (
    <div
      id="menu-mobile"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      hidden={!open}
      className={cx("nav:hidden", open ? "fixed inset-x-0 bottom-0 top-[72px] z-50 overflow-y-auto bg-paper" : undefined)}
    >
      <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
        {mainNav.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={active ? onClose : undefined}
              className={cx(
                "flex min-h-12 items-center border-b border-line text-lg",
                active ? "font-semibold text-ink" : "text-muted",
              )}
            >
              <span className={cx("mr-3 h-2 w-2 rounded-full", active ? "bg-yellow" : "bg-transparent")} aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/duvidas-frequentes"
          onClick={pathname === "/duvidas-frequentes" ? onClose : undefined}
          className="flex min-h-12 items-center border-b border-line text-lg text-muted"
        >
          Dúvidas frequentes
        </Link>
        <div className="pt-5">
          <Button
            href={whatsappGeneralUrl}
            external
            icon="whatsapp"
            className="w-full"
            onClick={() => window.setTimeout(onClose, 0)}
          >
            Consultar disponibilidade
          </Button>
        </div>
      </nav>
    </div>
  );
}
