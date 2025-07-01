import { motion, useScroll, useTransform } from "motion/react";

export function Background() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 0.5], ["0%", "60%"]);
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        <motion.div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/village.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />
        <div />
        <div />
        <div />
        <div />
      </div>
    </section>
  );
}
