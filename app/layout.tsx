import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Battlecook",
  description: "Foodtruck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-battlecook`}>
        <NavigationBar />
        <main className="mt-[80px] ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
