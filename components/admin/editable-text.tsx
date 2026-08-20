"use client";

import { useState, useTransition } from "react";
import { Check, Pencil, X } from "lucide-react";
import { useAdminMode } from "./admin-provider";
import { updateFieldAction } from "@/app/admin/actions";
import { cn } from "@/lib/utils";

/**
 * Texto clicável-e-editável, só visível pra quem está logado como admin.
 * Pra visitante comum, isso renderiza só o texto puro — sem nenhum peso
 * ou marcação extra na página.
 *
 * `docId` é o documento no Sanity (ex: "siteSettings", ou o _id de um
 * serviço/depoimento/diferencial); `field` é o nome do campo lá dentro
 * (ex: "heroHeadlineLine1"). Sem `docId` (item que só existe no fallback
 * fixo, nunca salvo no Sanity), o texto aparece normal, sem edição.
 */
export function EditableText({
  docId,
  field,
  value,
  multiline = false,
  className,
}: {
  docId?: string;
  field: string;
  value: string;
  multiline?: boolean;
  className?: string;
}) {
  const isAdmin = useAdminMode();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  if (!isAdmin || !docId) {
    return <>{value}</>;
  }

  if (!editing) {
    return (
      <span
        role="button"
        tabIndex={0}
        onClick={() => {
          setDraft(value);
          setEditing(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setDraft(value);
            setEditing(true);
          }
        }}
        className={cn(
          "group/edit relative inline cursor-pointer rounded outline-dashed outline-1 outline-offset-2 outline-terracotta/0 transition-colors hover:bg-terracotta/[0.08] hover:outline-terracotta/50",
          className
        )}
        title="Clique para editar"
      >
        {value}
        <Pencil
          className="ml-1 inline-block h-[0.7em] w-[0.7em] -translate-y-[0.1em] text-terracotta opacity-0 transition-opacity group-hover/edit:opacity-100"
          strokeWidth={2}
        />
      </span>
    );
  }

  function save() {
    setError(null);
    startTransition(async () => {
      const result = await updateFieldAction(docId!, field, draft);
      if (result.ok) {
        setEditing(false);
      } else {
        setError(result.error);
      }
    });
  }

  return (
    <span className="relative inline-block align-baseline">
      <span className={cn(className, "invisible")} aria-hidden="true">
        {value || " "}
      </span>
      <span className="absolute left-0 top-0 z-50 w-max min-w-[260px] max-w-[min(90vw,480px)] rounded-[var(--radius-md)] border border-forest/30 bg-card p-3 text-left shadow-[0_20px_45px_-16px_rgba(27,31,34,0.35)]">
        {multiline ? (
          <textarea
            autoFocus
            rows={3}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="w-full resize-none rounded-[var(--radius-sm)] border border-ink/15 bg-cream px-2.5 py-2 font-sans text-[0.9rem] leading-snug text-ink focus:border-forest focus:outline-none"
          />
        ) : (
          <input
            autoFocus
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") save();
              if (e.key === "Escape") setEditing(false);
            }}
            className="w-full rounded-[var(--radius-sm)] border border-ink/15 bg-cream px-2.5 py-2 font-sans text-[0.9rem] text-ink focus:border-forest focus:outline-none"
          />
        )}
        {error && <p className="mt-1.5 text-[0.78rem] text-red-600">{error}</p>}
        <div className="mt-2 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => setEditing(false)}
            disabled={pending}
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-sans text-[0.8rem] text-ink-soft transition-colors hover:bg-ink/5"
          >
            <X className="h-3.5 w-3.5" />
            Cancelar
          </button>
          <button
            type="button"
            onClick={save}
            disabled={pending}
            className="inline-flex items-center gap-1 rounded-full bg-forest px-3 py-1 font-sans text-[0.8rem] font-medium text-cream transition-colors hover:bg-forest-deep disabled:opacity-60"
          >
            <Check className="h-3.5 w-3.5" />
            {pending ? "Salvando…" : "Salvar"}
          </button>
        </div>
      </span>
    </span>
  );
}
