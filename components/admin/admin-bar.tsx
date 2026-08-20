"use client";

import { Pencil } from "lucide-react";
import { logoutAction } from "@/app/admin/actions";

/** Barra fixa que só aparece pra quem está logado — deixa claro que o site está em "modo edição". */
export function AdminBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex items-center justify-center gap-3 border-t border-forest/20 bg-night px-4 py-3 text-cream shadow-[0_-8px_24px_-8px_rgba(27,31,34,0.35)]">
      <Pencil className="h-4 w-4 text-terracotta" />
      <span className="text-[0.85rem]">
        Modo edição ativo — clique em qualquer texto marcado para alterá-lo.
      </span>
      <form action={logoutAction}>
        <button
          type="submit"
          className="ml-2 rounded-full border border-cream/25 px-3.5 py-1.5 text-[0.8rem] font-medium text-cream transition-colors hover:bg-cream/10"
        >
          Sair do modo edição
        </button>
      </form>
    </div>
  );
}
