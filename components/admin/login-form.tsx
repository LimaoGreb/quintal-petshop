"use client";

import { useActionState } from "react";
import { Lock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { loginAction } from "@/app/admin/actions";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, undefined);

  return (
    <section className="flex min-h-[70vh] items-center bg-cream py-24">
      <Container className="max-w-sm">
        <div className="rounded-[var(--radius-lg)] border border-ink/[0.07] bg-card p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-light text-forest-deep">
            <Lock className="h-5 w-5" />
          </div>
          <h1 className="mt-4 font-display text-2xl text-ink">Área administrativa</h1>
          <p className="mt-2 text-[0.9rem] text-ink-soft">
            Entre com a senha para editar o conteúdo do site.
          </p>

          <form action={formAction} className="mt-6 flex flex-col gap-3 text-left">
            <label htmlFor="password" className="text-[0.85rem] font-medium text-ink-soft">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="w-full rounded-[var(--radius-md)] border border-ink/12 bg-cream px-4 py-3 text-[0.95rem] text-ink focus:border-forest focus:outline-none"
            />
            {state?.error && <p className="text-[0.85rem] text-red-600">{state.error}</p>}
            <button
              type="submit"
              disabled={pending}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-[0.95rem] font-medium text-cream transition-colors hover:bg-forest-deep disabled:opacity-60"
            >
              {pending ? "Entrando…" : "Entrar"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
