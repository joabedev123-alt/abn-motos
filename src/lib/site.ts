import type { Metadata } from "next";

export function getSiteUrl(): string | null {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) return null;

  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: { src: string; alt: string; width: number; height: number };
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image,
}: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const fullTitle = absoluteTitle ? title : `${title} | ABN MOTOS`;
  const shareImage = image ?? {
    src: "/images/motos/preta-2-1.jpg",
    alt: "Motocicleta preta da ABN MOTOS vista de lado",
    width: 1200,
    height: 1600,
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: siteUrl ? { canonical: path } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      locale: "pt_BR",
      type: "website",
      siteName: "ABN MOTOS",
      url: siteUrl ? `${siteUrl}${path}` : undefined,
      images: siteUrl
        ? [
            {
              url: shareImage.src,
              width: shareImage.width,
              height: shareImage.height,
              alt: shareImage.alt,
            },
          ]
        : undefined,
    },
    twitter: siteUrl
      ? {
          card: "summary_large_image",
          title: fullTitle,
          description,
        }
      : undefined,
  };
}
