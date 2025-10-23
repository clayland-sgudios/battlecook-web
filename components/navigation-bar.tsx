import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-700">
      <div className="flex justify-between px-8 py-4 items-center">
        <a href="/" className="text-2xl font-bold">
          Battlecook
        </a>
        <div className="flex max-lg:hidden lg:w-1/3 justify-end font-bold items-center">
          {/* <Link href="/features">Features</Link> */}
          {/* <Link href="/events">Events</Link> */}
          {/* <Link href="/news">News</Link> */}
          <Link
            className="bg-foreground px-8 py-4 text-black rounded-full"
            href="https://forms.gle/pGse1CMcUk8B8THc6"
            target="_blank"
          >
            Join Our Alpha!
          </Link>
        </div>
      </div>
    </div>
  );
}
