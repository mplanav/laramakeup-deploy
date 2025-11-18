import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  apiVersion: import.meta.env.SANITY_API_VERSION || "2023-10-10",
  token: import.meta.env.SANITY_READ_TOKEN,  // 👈 NECESARIO PARA LEER TODO
  useCdn: false, // siempre datos frescos
});
