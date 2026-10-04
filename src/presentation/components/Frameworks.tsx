import { OrbitingCircles } from "./OrbitingCircles";

const skills = [
  "css3",
  "git",
  "github",
  "html5",
  "javascript",
  "typescript",
  "react",
  "vitejs",
  "postgresql",
  "mysql",
  "java",
  "springboot",
  "nextjs",
  "tailwindcss",
] as const;

const Icon = ({ skill }: { skill: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={`/assets/logos/${skill}.svg`}
    alt={skill}
    className="duration-200 rounded-sm hover:scale-110"
  />
);

export function Frameworks() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill) => (
          <Icon key={skill} skill={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill) => (
          <Icon key={skill} skill={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
