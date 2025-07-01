import { About } from "./sections/About";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";

export function App() {
  return (
    <>
      <div className="contaienr mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <section className="min-h-screen"></section>
        <section className="min-h-screen"></section>
        <section className="min-h-screen"></section>
      </div>
    </>
  );
}
