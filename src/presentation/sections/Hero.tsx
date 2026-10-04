import { Background } from "../components/Background";
import { HeroText } from "../components/HeroText";

export function Hero() {
  return (
    <section
      id="home"
      className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <Background />
    </section>
  );
}
