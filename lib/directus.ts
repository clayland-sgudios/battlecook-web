import { createDirectus, rest } from "@directus/sdk";

// CLIENT WITH REST SUPPORT
export const directus = createDirectus(process.env.DIRECTUS_URL as string).with(
  rest({
    onRequest: () => ({ cache: "no-store" }),
  }),
);
