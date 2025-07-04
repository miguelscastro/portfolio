import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experiences } from "./sections/Experiences";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import { Projects } from "./sections/Projects";

export function App() {
  return (
    <>
      <div className="contaienr mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Contact />
      </div>
    </>
  );
}
