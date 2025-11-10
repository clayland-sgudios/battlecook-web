import { readItems } from "@directus/sdk";
import { directus } from "@/lib/directus";

export async function getEvent(slug: string) {
  const data = await directus.request(
    readItems("tournaments", {
      fields: ["id", "name", "start_date", "end_date"],
      filter: {
        id: {
          _eq: slug,
        },
      },
    }),
  );

  return data[0];
}

export async function getEvents() {
  const data = await directus.request(
    readItems("tournaments", {
      fields: ["id", "name", "start_date", "end_date"],
    }),
  );

  return data;
}
