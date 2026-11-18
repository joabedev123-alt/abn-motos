import type { ReactNode } from "react";
import Link from "next/link";
import { cx } from "@/lib/format";
import { Icon } from "@/components/Icon";

type Variant = "primary" | "secondary" | "secondaryOnDark" | "dark";

const variants: Record<Variant, string> = {
  primary: "bg-yellow text-ink hover:bg-yellow-deep",
  secondary: "border border-ink/15 bg-paper text-ink hover:border-ink hover:bg-ink hover:text-white",
  secondaryOnDark:
    "border border-white/35 bg-transparent text-white hover:bg-white hover:text-ink",
  dark: "bg-ink text-white hover:bg-black",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: string;
};

type ButtonLinkProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
};

type ButtonNativeProps = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  busy?: boolean;
};

const baseClass =
  "inline-flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-full px-4 text-center text-base font-semibold leading-tight transition-colors duration-200 sm:px-5";

export function Button(props: ButtonLinkProps | ButtonNativeProps) {
  const className = cx(baseClass, variants[props.variant ?? "primary"], props.className);
  const content = (
    <>
      {props.icon ? <Icon name={props.icon} className="text-lg" /> : null}
      <span>{props.children}</span>
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
          onClick={props.onClick}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={props.href} className={className} onClick={props.onClick}>
        {content}
      </Link>
    );
  }

  const native = props as ButtonNativeProps;

  return (
    <button
      type={native.type ?? "button"}
      className={className}
      disabled={native.disabled}
      aria-busy={native.busy || undefined}
      onClick={native.onClick}
    >
      {content}
    </button>
  );
}
