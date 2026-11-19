import Link from "next/link";
import { cx } from "@/lib/format";

export type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
  tone?: "light" | "dark";
};

export function Breadcrumbs({ items, tone = "light" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Trilha de navegação">
      <ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        {items.map((item, index) => {
          const current = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className={tone === "dark" ? "text-white/35" : "text-muted"}>
                  /
                </span>
              ) : null}
              {item.href && !current ? (
                <Link
                  href={item.href}
                  className={cx(
                    "inline-flex min-h-11 items-center underline-offset-4 hover:underline",
                    tone === "dark" ? "text-white/75 hover:text-white" : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={current ? "page" : undefined} className={cx("min-w-0 break-words", tone === "dark" ? "text-white" : "text-ink")}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
