import dayjs from "dayjs";

import getRanking from "@/database/events";
import { getEvent } from "@/directus/events";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Home({ params }: Props) {
  const { slug } = await params;

  const data = await getEvent(slug);
  const user = await getRanking(slug);

  //   console.log(user);
  return (
    <main className="flex flex-col gap-8 h-screen items-center justify-center">
      <div className="flex flex-col gap-4 w-[75%] mx-auto items-center">
        <span className="font-bold text-3xl">{data.name}</span>
        <span className="font-bold text-xl">
          Start: {dayjs(data.start_date).format("DD MMM YYYY HH:mm")}
        </span>
        <span className="font-bold text-xl">
          End: {dayjs(data.end_date).format("DD MMM YYYY HH:mm")}
        </span>
      </div>
      <div className="w-[85%] mx-auto items-center grid lg:grid-cols-3 gap-8">
        {user.map((user, index) => {
          if (index === 0) {
            return (
              <div
                key={user.playerName}
                className="flex flex-col bg-yellow-400 text-black py-4 px-8 gap-4 rounded-xl justify-between max-lg:items-center"
              >
                <span className="font-bold text-3xl text-left">
                  {index + 1}. {user.playerName}
                </span>
                <span className="font-bold text-4xl text-right">
                  {user.points} points
                </span>
              </div>
            );
          } else if (index === 1) {
            return (
              <div
                key={user.playerName}
                className="flex flex-col bg-gray-400 text-black py-4 px-8 gap-4 rounded-xl justify-between max-lg:items-center"
              >
                <span className="font-bold text-3xl text-left">
                  {index + 1}. {user.playerName}
                </span>
                <span className="font-bold text-4xl text-right">
                  {user.points} points
                </span>
              </div>
            );
          } else if (index === 2) {
            return (
              <div
                key={user.playerName}
                className="flex flex-col bg-orange-300 text-black py-4 px-8 gap-4 rounded-xl justify-between max-lg:items-center"
              >
                <span className="font-bold text-3xl text-left">
                  {index + 1}. {user.playerName}
                </span>
                <span className="font-bold text-4xl text-right">
                  {user.points} points
                </span>
              </div>
            );
          } else {
            return (
              <div
                key={user.playerName}
                className="lg:col-span-3 flex flex-row justify-between bg-white text-black py-4 px-8 gap-4 rounded-xl"
              >
                <span className="font-bold text-xl">
                  {index + 1}. {user.playerName}
                </span>
                <span className="font-bold text-2xl">
                  {" "}
                  {user.points} points
                </span>
              </div>
            );
          }
        })}
      </div>
    </main>
  );
}
