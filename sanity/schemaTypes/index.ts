import { type SchemaTypeDefinition } from "sanity";

import siteSettings from "./siteSettings";
import service from "./service";
import differential from "./differential";
import testimonial from "./testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, service, differential, testimonial],
};
