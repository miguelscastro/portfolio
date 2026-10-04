"use client";

import { DownloadIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function DownloadCV({
  resumePath,
  labels,
}: {
  resumePath: string;
  labels: { download: string; downloaded: string };
}) {
  const [downloading, setDownloading] = useState(false);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = resumePath.split("/").pop() ?? "resume.pdf";
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
        {downloading ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="downloading"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            {labels.downloaded}
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <DownloadIcon />
            {labels.download}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
