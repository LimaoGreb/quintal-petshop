"use server";

import { redirect } from "next/navigation";
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "@/sanity/env";
import {
  checkPassword,
  createAdminSession,
  destroyAdminSession,
  isAdminSession,
} from "@/lib/admin-session";

export type LoginState = { error?: string } | undefined;

export async function loginAction(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) {
    return { error: "Senha incorreta. Tente de novo." };
  }
  await createAdminSession();
  redirect("/");
}

export async function logoutAction() {
  await destroyAdminSession();
  redirect("/");
}

export async function updateFieldAction(
  docId: string,
  field: string,
  value: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  const authorized = await isAdminSession();
  if (!authorized) {
    return { ok: false, error: "Sua sessão expirou. Saia e entre de novo." };
  }

  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) {
    return { ok: false, error: "Faltou configurar a permissão de gravação no servidor." };
  }

  const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

  try {
    await client.patch(docId).set({ [field]: value }).commit({ autoGenerateArrayKeys: true });
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Erro ao salvar." };
  }
}
