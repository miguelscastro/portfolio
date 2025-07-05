import { HeroText } from "../components/HeroText";
import { Background } from "../components/Background";

export function Hero() {
  return (
    <section
      id="home"
      className="flex - items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <Background />
    </section>
  );
}
