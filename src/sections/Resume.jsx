import { Particles } from "../components/Particles";
import { DownloadCV } from "../components/DownloadCV";
import BackToTop from "../components/BackToTop";
export const Resume = () => {
  return (
    <section className="relative flex flex-col items-center c-space h-60 w-full mb-10 lg:mt-200 sm:mt-140 mt-550">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <h2 className="text-heading mt-20">Obrigado pela visita!</h2>
      <DownloadCV />

      <BackToTop />
    </section>
  );
};
