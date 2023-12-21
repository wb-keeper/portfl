import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
// 1 50
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
