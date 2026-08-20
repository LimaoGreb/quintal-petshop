/**
 * Layout raiz próprio para o painel (/studio) — de propósito SEM o
 * cabeçalho/rodapé do site. O Sanity Studio já vem com sua própria
 * interface completa; misturar com o layout do site institucional
 * ficava confuso e pouco profissional pra quem for editar o conteúdo.
 */
export const metadata = {
  metadataBase: new URL("https://www.quintalpetshop.com.br"),
  title: "Painel — Quintal Pet Shop",
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
