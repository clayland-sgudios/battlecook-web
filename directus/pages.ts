import { readItems } from "@directus/sdk";
import { directus } from "@/lib/directus";

export async function getPage(slug: string) {
  const data = await directus.request(
    readItems("pages", {
      fields: ["*"],
      filter: {
        slug: {
          _eq: slug,
        },
      },
    }),
  );

  return data[0];
}
