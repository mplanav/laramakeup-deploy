import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: 'z561d50t',   // 👈 tu projectId
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,     // queremos que siempre lea contenido fresco
});
