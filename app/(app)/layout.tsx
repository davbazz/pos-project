import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import MainScreen from "@/components/organisms/MainScreen";
import AppNavBar from "@/components/organisms/AppNavBar";
import TopBar from "@/components/organisms/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={inter.className}>
      <TopBar />
      <AppNavBar />
      <MainScreen children={children} />
    </main>
  );
}
