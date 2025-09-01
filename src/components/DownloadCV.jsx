import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, DownloadIcon } from "lucide-react";

export function DownloadCV() {
  const [donwloading, setDownloading] = useState(false);
  const resume = "/assets/files/miguelcastro_cv.pdf";

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "miguelcastro_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <motion.button
      onClick={downloadResume}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="w-[70%] sm:w-[50%] md:w-[45%] mt-5 px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-royal to-lavender hover:from-royal hover:to-indigo-600"
    >
      <AnimatePresence mode="wait">
        {donwloading ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="donwloading"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            Obrigado!
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="downloaded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <DownloadIcon />
            Baixar Currículo
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
