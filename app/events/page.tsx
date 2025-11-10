import dayjs from "dayjs";

import { getEvents } from "@/directus/events";

export default async function Home() {
  const data = await getEvents();
  return (
    <main className="flex flex-col gap-8 h-screen items-center justify-center">
      <div className="flex flex-col gap-4 w-[75%] mx-auto items-center">
        <span className="font-bold text-3xl">Events</span>
        <span className="font-bold text-xl">
          Click on the respective events to view details!
        </span>
      </div>
      {data.map((event) => {
        return (
          <a
            href={`/events/${event.id}`}
            key={event.id}
            className="flex flex-col gap-2 bg-white rounded-md p-4 text-black"
          >
            <span className="font-bold text-xl">{event.name}</span>
            <span>
              Start: {dayjs(event.start_date).format("DD MMM YYYY HH:mm")}
            </span>
            <span>
              End: {dayjs(event.end_date).format("DD MMM YYYY HH:mm")}
            </span>
          </a>
        );
      })}
    </main>
  );
}
