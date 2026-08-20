import type { StructureResolver } from "sanity/structure";

/**
 * Menu do painel. "Configurações do site" é um documento único (singleton)
 * — sempre abre o mesmo registro, sem opção de criar um segundo.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Conteúdo do site")
    .items([
      S.listItem()
        .title("Configurações do site")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      S.documentTypeListItem("service").title("Serviços"),
      S.documentTypeListItem("differential").title("Diferenciais"),
      S.documentTypeListItem("testimonial").title("Depoimentos"),
    ]);
