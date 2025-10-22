import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between px-8 py-4 items-center">
        <span className="text-2xl font-bold">Battlecook</span>
        <div className="flex w-2/5 justify-between font-bold">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/events">Events</Link>
          <Link href="/news">News</Link>
          <Link href="/">Join Our Alpha!</Link>
        </div>
      </div>
    </div>
  );
}
