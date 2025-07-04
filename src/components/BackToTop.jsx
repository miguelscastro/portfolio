import { LucideArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      const reachedBottom = scrollTop + windowHeight >= documentHeight - 50; // margem de 50px
      setAtBottom(reachedBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-indigo text-white shadow-md hover:bg-royal cursor-pointer transition-all duration-300 ${
        atBottom ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-label="Voltar ao topo"
    >
      <LucideArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
