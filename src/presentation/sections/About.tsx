import { CopyEmailButton } from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { Globe } from "../components/Globe";
import type { Dictionary } from "../i18n";

export function About({
  email,
  dict,
}: {
  email: string;
  dict: Dictionary["about"];
}) {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">{dict.title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/coding-pov.png"
            alt=""
            className="absolute scale-[1.75] -right-[5rem] top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">{dict.greeting}</p>
            <p className="subtext">
              {dict.intro}
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        <div className="grid-black-color grid-2">
          <div className="z-10 w-[50%]">
            <p className="headtext">{dict.countryTitle}</p>
            <p className="subtext">
              {dict.countryText}
            </p>
          </div>
          <figure className="absolute left-[40%] top-[-20%]">
            <Globe />
          </figure>
        </div>

        <div className="grid-special-color grid-3">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">{dict.contactTitle}</p>
            <CopyEmailButton email={email} />
          </div>
        </div>

        <div className="grid-special2-color grid-4">
          <div className="z-10 w-[50%]">
            <p className="headtext">{dict.stackTitle}</p>
            <p className="subtext">
              {dict.stackText}
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
}
