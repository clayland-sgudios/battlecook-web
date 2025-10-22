export default function Home() {
  return (
    <main className="flex flex-col gap-8 h-screen items-center justify-center">
      <span className="text-4xl font-bold">Join us on our journey!</span>
      <a
        className="bg-foreground rounded-full py-4 px-8 text-black"
        href="/join-us"
      >
        Sign up for our Alpha!
      </a>
    </main>
  );
}
