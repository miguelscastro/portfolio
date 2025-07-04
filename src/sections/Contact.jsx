import { Particles } from "../components/Particles";
import { DownloadCV } from "../components/DownloadCV";
import BackToTop from "../components/BackToTop";
export const Contact = () => {
  return (
    <section className="relative flex flex-col items-center c-space h-60">
      <h2 className="text-heading mt-20">Thanks for coming this far!</h2>
      <DownloadCV />
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <BackToTop />
    </section>
  );
};
