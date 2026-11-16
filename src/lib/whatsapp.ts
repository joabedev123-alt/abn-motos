import { contacts } from "@/data/contacts";

export const whatsappMessages = {
  general:
    "Olá! Vim pelo site da ABN MOTOS e gostaria de consultar valores e disponibilidade para aluguel de moto.",
  vehicle: (nome: string) =>
    `Olá! Vim pelo site da ABN MOTOS e gostaria de consultar valores e disponibilidade da moto ${nome}.`,
  region: "Olá! Gostaria de confirmar se a ABN MOTOS atende minha cidade ou bairro.",
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `${contacts.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export const whatsappGeneralUrl = buildWhatsAppUrl(whatsappMessages.general);
export const whatsappRegionUrl = buildWhatsAppUrl(whatsappMessages.region);

export function whatsappVehicleUrl(nome: string): string {
  return buildWhatsAppUrl(whatsappMessages.vehicle(nome));
}
