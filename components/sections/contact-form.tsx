"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { business, services as defaultServices } from "@/lib/business";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-[var(--radius-md)] border border-ink/12 bg-cream px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint transition-colors duration-200 focus:border-forest focus:outline-none";

/**
 * Não há backend de agendamento. O formulário organiza os dados do tutor
 * e monta uma mensagem de WhatsApp pré-formatada — a interface permanece
 * totalmente funcional sem depender de um servidor.
 */
export function ContactForm({
  whatsappNumber = business.whatsappNumber,
  services = defaultServices,
}: {
  whatsappNumber?: string;
  services?: typeof defaultServices;
}) {
  const [values, setValues] = useState({
    nome: "",
    telefone: "",
    pet: "",
    servico: "",
    mensagem: "",
  });

  function update<K extends keyof typeof values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lines = [
      `Olá! Gostaria de agendar um horário no ${business.name}.`,
      "",
      `Nome: ${values.nome || "-"}`,
      `Telefone: ${values.telefone || "-"}`,
      `Pet: ${values.pet || "-"}`,
      `Serviço de interesse: ${values.servico || "-"}`,
      values.mensagem ? `Mensagem: ${values.mensagem}` : undefined,
    ].filter(Boolean);

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="nome" className="mb-1.5 block text-[0.85rem] font-medium text-ink-soft">
          Seu nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          value={values.nome}
          onChange={(e) => update("nome", e.target.value)}
          className={inputClass}
          placeholder="Como podemos te chamar?"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="telefone" className="mb-1.5 block text-[0.85rem] font-medium text-ink-soft">
          Telefone / WhatsApp
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          required
          autoComplete="tel"
          value={values.telefone}
          onChange={(e) => update("telefone", e.target.value)}
          className={inputClass}
          placeholder="(51) 9....-...."
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="pet" className="mb-1.5 block text-[0.85rem] font-medium text-ink-soft">
          Nome do pet
        </label>
        <input
          id="pet"
          name="pet"
          type="text"
          value={values.pet}
          onChange={(e) => update("pet", e.target.value)}
          className={inputClass}
          placeholder="Nome do seu companheiro"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="servico" className="mb-1.5 block text-[0.85rem] font-medium text-ink-soft">
          Serviço de interesse
        </label>
        <select
          id="servico"
          name="servico"
          value={values.servico}
          onChange={(e) => update("servico", e.target.value)}
          className={cn(inputClass, "appearance-none")}
        >
          <option value="">Selecione um serviço</option>
          {services.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="mensagem" className="mb-1.5 block text-[0.85rem] font-medium text-ink-soft">
          Mensagem (opcional)
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={3}
          value={values.mensagem}
          onChange={(e) => update("mensagem", e.target.value)}
          className={cn(inputClass, "resize-none")}
          placeholder="Conte um pouco sobre o que precisa"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[0.95rem] font-medium text-cream transition-all duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-forest-deep active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-terracotta sm:col-span-2 sm:w-fit"
      >
        Enviar pelo WhatsApp
        <Send className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
      </button>
      <p className="text-[0.8rem] text-ink-faint sm:col-span-2">
        Ao enviar, abrimos o WhatsApp com sua mensagem já preenchida — nada é enviado sem sua
        confirmação por lá.
      </p>
    </form>
  );
}
