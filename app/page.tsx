import type { Metadata } from "next";

import { getPage } from "@/directus/pages";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPage("home");
  const { title, meta_description } = pageData?.seo || {};

  return {
    title,
    description: meta_description,
  };
}

export default function Home() {
  return (
    <main className="flex flex-col gap-8 w-[85%] mx-auto items-center justify-center">
      <section className="flex flex-col gap-6 justify-center items-center h-screen lg:w-1/2">
        <span className="text-3xl lg:text-7xl font-bold">Battlecook</span>
        <span className="text-xl lg:text-4xl font-bold text-nowrap">
          where Combat Meets Cooking
        </span>
        <div className="text-md lg:text-xl text-center">
          Step into the battlegrounds and unleash your inner chef-warrior!
          Gather ingredients, master recipes, and duel with utensils in the most
          chaotic and adorable cooking battles ever.
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <a
            className="bg-foreground rounded-full py-4 px-8 text-black font-bold text-center"
            href="https://forms.gle/pGse1CMcUk8B8THc6"
            target="_blank"
            rel="noopener"
          >
            Sign up here!
          </a>
          <a
            className="border border-foreground rounded-full py-4 px-8 text-white font-bold"
            href="https://discord.gg/kwY4BSbD6d"
            target="_blank"
            rel="noopener"
          >
            Join our Discord!
          </a>
        </div>
      </section>
      <section className="flex flex-col gap-6 text-center">
        <span className="text-4xl font-bold">About the Game</span>
        In Battlecook, you’re not just cooking — you’re fighting for culinary
        glory!
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="flex flex-col bg-gray-300 text-black py-4 px-8 gap-4 rounded-xl justify-start">
            <span className="text-center text-2xl font-bold">Battle</span>
            <span className="text-left text-lg">
              Engage in fast-paced utensil duels where chefs clash in sizzling
              PvE and PvP battles. Use your best kitchen tools as weapons and
              unleash powerful attacks to dominate the battlegrounds!
            </span>
          </div>
          <div className="flex flex-col bg-gray-300 text-black py-4 px-8 gap-4 rounded-xl justify-start">
            <span className="text-center text-2xl font-bold">Cook</span>
            <span className="text-left text-lg">
              Collect ingredients from your adventures and craft delicious
              recipes. Mix and combine ingredients to create dishes that
              customers can purchase from your food truck.
            </span>
          </div>
          <div className="flex flex-col bg-gray-300 text-black py-4 px-8 gap-4 rounded-xl justify-start">
            <span className="text-center text-2xl font-bold">Serve</span>
            <span className="text-left text-lg">
              Run your own food truck and serve your signature dishes to hungry
              customers! Manage orders, earn coins, and grow your culinary
              reputation as the ultimate chef.
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <span className="text-center text-4xl font-bold">Main Features</span>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col bg-gray-300 text-black py-4 px-8 gap-4 rounded-xl justify-start">
            <span className="text-center text-2xl font-bold">
              Adventure System
            </span>
            <span className="text-left text-lg">
              Fight different worlds filled with enemies, and hidden tasks. Each
              adventure brings new challenges, loot, and opportunities to
              sharpen your cooking and combat skills.
            </span>
          </div>
          <div className="flex flex-col bg-gray-300 text-black py-4 px-8 gap-4 rounded-xl justify-start">
            <span className="text-center text-2xl font-bold">
              Cooking Dishes
            </span>
            <span className="text-left text-lg">
              Experiment in the kitchen to discover recipes. Combine ingredients
              strategically to cook dishes for your customers.
            </span>
          </div>
          <div className="flex flex-col bg-gray-300 text-black py-4 px-8 gap-4 rounded-xl justify-start">
            <span className="text-center text-2xl font-bold">
              Serve Customers
            </span>
            <span className="text-left text-lg">
              Between battles, open your food truck and serve mouthwatering
              meals to customers. Keep customers happy to boost your fame, earn
              rare equipments, and unlock upgrades!
            </span>
          </div>
          <div className="flex flex-col bg-gray-300 text-black py-4 px-8 gap-4 rounded-xl justify-start">
            <span className="text-center text-2xl font-bold">
              Quests & Progression
            </span>
            <span className="text-left text-lg">
              Take on quests that reward creativity and skill. Level up your
              chef, unlock new utensils, and progress through a flavorful story
              of friendship, rivalry, and culinary conquest.
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <span className="text-center text-4xl font-bold">Join Us</span>
        <div className="flex flex-col gap-4 items-center bg-gray-300 text-black py-8 px-4 lg:px-16 rounded-xl justify-center">
          <span className="text-center text-xl font-bold">
            "Whether you’re here to battle alone or with friends, cook, or
            simply collect ingredients — there’s always a seat in the truck for
            you. Join our community of chefs and serve your way to the top!"
          </span>
          <a
            className="border border-background rounded-full py-4 px-8 text-black font-bold w-fit"
            href="https://discord.gg/kwY4BSbD6d"
            target="_blank"
            rel="noopener"
          >
            Join our Discord!
          </a>
        </div>
      </section>
    </main>
  );
}
