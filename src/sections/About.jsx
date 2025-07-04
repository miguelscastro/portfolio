import { CopyEmailbutton } from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { Globe } from "../components/Globe";

export function About() {
  return (
    <section className="c-space section-spacing mb-70" id="about">
      <h2 className="text-heading">Sobre mim</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] "
          />
          <div className="z-10">
            <p className="headtext">Oi, eu sou o Miguel Castro</p>
            <p className="subtext">
              Pelos últimos 2 anos, venho aprimorando minhas habilidades de
              front-end e back-end para cada vez entregar melhores aplicações
              dinâmicas, performáticas e responsivas.
            </p>
          </div>

          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        <div className="grid-black-color grid-2">
          <div className="z-10 w-[50%]">
            <p className="headtext">Brasil</p>
            <p className="subtext">
              Eu moro em Santos - SP, mas estou disponível pra trabalho remoto
              ao redor do mundo.
            </p>
          </div>
          <figure className="absolute left-[40%] top-[-20%]">
            <Globe />
          </figure>
        </div>

        <div className="grid-special-color grid-3">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Que tal mandar uma mensagem?</p>
            <CopyEmailbutton />
          </div>
        </div>

        <div className="grid-special2-color grid-4">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              Sou familiar com uma variedade de linguagens, frameworks e
              ferramentas que me permitem construir aplicações robustas e
              escaláveis.
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
