import { company } from "@/data/company";
import { contacts } from "@/data/contacts";
import { getSiteUrl } from "@/lib/site";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.summary,
    telephone: contacts.whatsappE164,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${company.region}, ${company.state}`,
    },
    sameAs: [company.instagram],
  };

  if (siteUrl) data.url = siteUrl;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
