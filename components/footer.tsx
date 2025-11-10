import Link from "next/link";

export default function Footer() {
  return (
    <main className="w-full bg-footer py-16">
      <div className="mx-auto flex flex-col lg:flex-row gap-2 lg:gap-8 max-lg:pl-6 lg:items-center lg:w-2/3">
        <span className="text-3xl font-bold">Battlecook</span>
        <span className="text-xl font-bold">Quick Links:</span>
        <Link href="/">Home</Link>
        {/* <Link href="/features">Features</Link> */}
        <Link href="/events">Events</Link>
      </div>
    </main>
  );
}
