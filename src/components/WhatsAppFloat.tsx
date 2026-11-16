"use client";

import { usePathname } from "next/navigation";
import { Icon } from "@/components/Icon";
import { whatsappGeneralUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const pathname = usePathname();

  if (pathname === "/contato") return null;

  return (
    <a
      id="whatsapp-flutuante"
      href={whatsappGeneralUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar disponibilidade no WhatsApp"
      className="fixed z-40 flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-ink shadow-[0_10px_24px_rgba(17,17,17,0.18)] right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] hover:bg-yellow-deep"
    >
      <Icon name="whatsapp" className="text-2xl" />
    </a>
  );
}
