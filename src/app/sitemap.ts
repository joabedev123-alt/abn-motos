import type { MetadataRoute } from "next";
import { motorcycles } from "@/data/motorcycles";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];

  const paths = [
    "",
    "/sobre",
    "/motos",
    "/como-alugar",
    "/regiao-de-atendimento",
    "/duvidas-frequentes",
    "/contato",
    "/privacidade",
    ...motorcycles.map((moto) => `/motos/${moto.slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
