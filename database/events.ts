import { getDatabase } from "@/lib/mongodb";

export default async function getRanking(slug: string) {
  const db = await getDatabase();
  const users = await db
    .collection("tournaments")
    .find({ tournamentId: slug })
    .sort({ points: -1 })
    .toArray();

  return users;
}
