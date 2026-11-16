import { cx } from "@/lib/format";

type IconProps = {
  name: string;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  return <i className={cx("bi", `bi-${name}`, className)} aria-hidden="true" />;
}
