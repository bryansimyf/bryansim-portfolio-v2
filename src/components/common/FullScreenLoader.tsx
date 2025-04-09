import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { useLoading } from "@providers/LoadingProviders";

type Progress = 20 | 40 | 60 | 80 | 100;

const loadingText: { [key in Progress]: string } = {
  20: "Profile",
  40: "Experience",
  60: "Projects",
  80: "Finalizing",
  100: "Completed",
};

const FullScreenLoader = () => {
  const { setLoading } = useLoading();
  const [progress, setProgress] = useState<number>(0);

  if (progress === 100) {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 20;

        if (newProgress >= 100) {
          return 100;
        }

        return newProgress;
      });
    };

    const intervalId = setInterval(updateProgress, 1000); // Update every 1 second

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  return (
    <div className="fixed flex-col inset-0 flex justify-center items-center bg-charcoal-gray z-50 ">
      {/* <AnimatePresence> */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 60 - 2 * progress }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.4,
        }}
        className="flex flex-col gap-4"
      >
        {Object.entries(loadingText).map(([key, text]) => {
          const isActive = progress === Number(key);

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: isActive ? 2 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                mass: 0.8,
              }}
              className="origin-left"
            >
              {text}
            </motion.div>
          );
        })}
      </motion.div>

      {/* </AnimatePresence> */}
    </div>
  );
};

export default FullScreenLoader;
