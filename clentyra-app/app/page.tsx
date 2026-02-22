import { Hero } from "@/components/sections/Hero";
import { OurClients } from "@/components/sections/OurClients";
import { SolvingProblems } from "@/components/sections/SolvingProblems";

export default function Home() {
  return (
    <>
      <Hero />
      <OurClients />
      <SolvingProblems />
      {/* Тут у майбутньому ви додасте інші секції: Переваги, Відгуки тощо */}
    </>
  );
}