import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/lib/client";

/**
 * Chamado pelo painel (Presentation) quando alguém entra no modo de edição
 * visual — liga o "Draft Mode" do Next para o site passar a mostrar também
 * o que ainda não foi publicado, e habilita os contornos clicáveis.
 */
export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
});
