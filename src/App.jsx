import { About } from "./sections/About";
import { Resume } from "./sections/Resume";
import { Experiences } from "./sections/Experiences";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import { Projects } from "./sections/Projects";
import { Footer } from "./sections/Footer";

export function App() {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Resume />
        <Footer />
      </div>
    </>
  );
}
