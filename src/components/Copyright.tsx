"use client";

export function Copyright() {
  const year = new Date().getFullYear();

  return <p className="text-sm text-white/60">© {year} ABN MOTOS. Todos os direitos reservados.</p>;
}
