import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <container className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </container>
    </main>
  );
}
