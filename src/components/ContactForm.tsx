"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { motorcycles } from "@/data/motorcycles";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

type FormState = {
  nome: string;
  cidade: string;
  moto: string;
  periodo: string;
  mensagem: string;
};

const initialState: FormState = {
  nome: "",
  cidade: "",
  moto: "",
  periodo: "",
  mensagem: "",
};

function buildMessage(values: FormState) {
  const lines = [whatsappMessages.general, "", `Nome: ${values.nome.trim()}`, `Cidade ou bairro: ${values.cidade.trim()}`];

  if (values.moto.trim()) lines.push(`Moto de interesse: ${values.moto.trim()}`);
  if (values.periodo.trim()) lines.push(`Período desejado: ${values.periodo.trim()}`);
  if (values.mensagem.trim()) lines.push(`Mensagem: ${values.mensagem.trim()}`);

  return lines.join("\n");
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<{ nome?: string; cidade?: string }>({});
  const [opening, setOpening] = useState(false);

  function update(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (field === "nome" || field === "cidade") {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: { nome?: string; cidade?: string } = {};
    if (!values.nome.trim()) nextErrors.nome = "Informe seu nome.";
    if (!values.cidade.trim()) nextErrors.cidade = "Informe sua cidade ou bairro.";
    setErrors(nextErrors);

    if (nextErrors.nome) {
      document.getElementById("nome")?.focus();
      return;
    }
    if (nextErrors.cidade) {
      document.getElementById("cidade")?.focus();
      return;
    }

    const url = buildWhatsAppUrl(buildMessage(values));
    setOpening(true);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = url;
    window.setTimeout(() => setOpening(false), 700);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="min-w-0 rounded-3xl border border-line bg-paper p-4 shadow-[0_12px_32px_rgba(17,17,17,0.04)] sm:p-5 md:p-7">
      <h2 className="font-display text-3xl font-semibold leading-none">Prepare sua mensagem</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Os campos montam o texto no seu navegador. Nada é enviado por este site.
      </p>

      <div className="mt-6 grid min-w-0 gap-5">
        <div className="min-w-0">
          <label htmlFor="nome" className="text-sm font-semibold text-ink">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            autoComplete="name"
            value={values.nome}
            maxLength={80}
            aria-required="true"
            aria-invalid={Boolean(errors.nome)}
            aria-describedby={errors.nome ? "nome-erro" : undefined}
            onChange={(event) => update("nome", event.target.value)}
            className="mt-2 min-h-12 w-full rounded-2xl border border-line bg-canvas px-4 text-base text-ink"
          />
          {errors.nome ? (
            <p id="nome-erro" className="mt-2 text-sm text-[#8a2e2e]">
              {errors.nome}
            </p>
          ) : null}
        </div>

        <div className="min-w-0">
          <label htmlFor="cidade" className="text-sm font-semibold text-ink">
            Cidade ou bairro
          </label>
          <input
            id="cidade"
            name="cidade"
            autoComplete="address-level2"
            value={values.cidade}
            maxLength={80}
            aria-required="true"
            aria-invalid={Boolean(errors.cidade)}
            aria-describedby={errors.cidade ? "cidade-erro" : undefined}
            onChange={(event) => update("cidade", event.target.value)}
            className="mt-2 min-h-12 w-full rounded-2xl border border-line bg-canvas px-4 text-base text-ink"
          />
          {errors.cidade ? (
            <p id="cidade-erro" className="mt-2 text-sm text-[#8a2e2e]">
              {errors.cidade}
            </p>
          ) : null}
        </div>

        <div className="min-w-0">
          <label htmlFor="moto" className="text-sm font-semibold text-ink">
            Moto de interesse <span className="font-normal text-muted">(opcional)</span>
          </label>
          <select
            id="moto"
            name="moto"
            value={values.moto}
            onChange={(event) => update("moto", event.target.value)}
            className="mt-2 min-h-12 w-full rounded-2xl border border-line bg-canvas px-4 text-base text-ink"
          >
            <option value="">Ainda não escolhi</option>
            {motorcycles.map((moto) => (
              <option key={moto.id} value={moto.nome}>
                {moto.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-0">
          <label htmlFor="periodo" className="text-sm font-semibold text-ink">
            Período desejado <span className="font-normal text-muted">(opcional)</span>
          </label>
          <input
            id="periodo"
            name="periodo"
            value={values.periodo}
            maxLength={80}
            onChange={(event) => update("periodo", event.target.value)}
            className="mt-2 min-h-12 w-full rounded-2xl border border-line bg-canvas px-4 text-base text-ink"
          />
        </div>

        <div className="min-w-0">
          <label htmlFor="mensagem" className="text-sm font-semibold text-ink">
            Mensagem <span className="font-normal text-muted">(opcional)</span>
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            maxLength={500}
            value={values.mensagem}
            onChange={(event) => update("mensagem", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-base leading-relaxed text-ink"
          />
        </div>
      </div>

      <Button type="submit" icon="whatsapp" busy={opening} disabled={opening} className="mt-6 w-full sm:w-auto">
        {opening ? "Abrindo WhatsApp…" : "Continuar no WhatsApp"}
      </Button>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Ao continuar, você será direcionado ao WhatsApp para enviar sua mensagem.
      </p>
    </form>
  );
}
