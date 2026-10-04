import { BackToTop } from "../components/BackToTop";
import { DownloadCV } from "../components/DownloadCV";
import { Particles } from "../components/Particles";
import type { Dictionary } from "../i18n";

export function Resume({
  resumePath,
  dict,
}: {
  resumePath: string;
  dict: Dictionary["resume"];
}) {
  return (
    <section className="relative flex flex-col items-center c-space min-h-60 w-full mb-10 mt-20 pb-10">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      <h2 className="text-heading mt-20">{dict.thanks}</h2>
      <DownloadCV resumePath={resumePath} labels={dict} />
      <BackToTop />
    </section>
  );
}
