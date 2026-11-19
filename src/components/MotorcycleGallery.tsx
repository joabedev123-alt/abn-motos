"use client";

import Image from "next/image";
import { useState } from "react";
import type { MotorcycleImage } from "@/data/motorcycles";
import { cx } from "@/lib/format";

type MotorcycleGalleryProps = {
  images: MotorcycleImage[];
  name: string;
};

export function MotorcycleGallery({ images, name }: MotorcycleGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-[#efefe8] sm:aspect-[4/3]">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-contain p-3 sm:p-6"
        />
      </div>
      {images.length > 1 ? (
        <ul
          className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {images.map((image, index) => {
            const selected = index === active;
            return (
              <li key={image.src}>
                <button
                  type="button"
                  className={cx(
                    "relative aspect-[4/3] min-h-16 w-full overflow-hidden rounded-2xl border bg-[#efefe8]",
                    selected ? "border-ink" : "border-line",
                  )}
                  aria-label={`Mostrar foto ${index + 1} de ${name}`}
                  aria-pressed={selected}
                  onClick={() => setActive(index)}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-contain p-1"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
