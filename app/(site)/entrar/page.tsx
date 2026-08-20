import type { Metadata } from "next";
import { LoginForm } from "@/components/admin/login-form";

// Página de acesso ao modo edição — não é conteúdo de vitrine, não indexar.
export const metadata: Metadata = {
  title: "Entrar",
  robots: { index: false, follow: false },
};

export default function EntrarPage() {
  return <LoginForm />;
}
