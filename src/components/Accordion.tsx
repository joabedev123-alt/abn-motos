"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/Icon";
import type { FaqItem } from "@/data/faq";

type AccordionProps = {
  items: FaqItem[];
};

export function Accordion({ items }: AccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="border-y border-line">
      {items.map((item) => {
        const expanded = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div key={item.id} className="border-b border-line last:border-b-0">
            <h3 className="font-sans text-base font-semibold">
              <button
                id={buttonId}
                type="button"
                className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-ink"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpenId(expanded ? null : item.id)}
              >
                <span className="text-base leading-snug md:text-lg">{item.pergunta}</span>
                <Icon name={expanded ? "dash" : "plus-lg"} className="shrink-0 text-sm" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded}>
              <p className="max-w-3xl pb-5 text-base leading-relaxed text-muted">{item.resposta}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
