import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function DownloadCV() {
  const [donwloading, setDownloading] = useState(false);
  const resume = "/assets/files/miguelcastro-cv.pdf";

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "miguelcastro-cv.pdf";
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
      className="w-[35%] h-[30%] mt-5 px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-royal to-lavender"
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
            <img
              src="assets/copy-done.svg"
              className="w-5"
              alt="download-icon"
            />
            Thanks :)
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
            <img src="assets/copy.svg" className="w-5" alt="download-icon" />
            Download CV
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
