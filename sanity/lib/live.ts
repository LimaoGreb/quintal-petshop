// Querying com "sanityFetch" mantém o conteúdo atualizado automaticamente
// e, no modo de edição visual (draftMode), traz também os rascunhos ainda
// não publicados — necessário para o "clicar e editar" funcionar em tempo real.
import { defineLive } from "next-sanity/live";
import { client } from "./client";

const token = process.env.SANITY_API_READ_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken: token,
  serverToken: token,
});
