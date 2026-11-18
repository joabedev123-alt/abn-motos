import type { ReactNode } from "react";
import { cx } from "@/lib/format";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cx("mx-auto w-full max-w-[1240px] px-4 sm:px-5 md:px-8", className)}>
      {children}
    </div>
  );
}
