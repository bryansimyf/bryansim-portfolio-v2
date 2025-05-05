import { useEffect, useState } from "react";
import { motion } from "motion/react";

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
    }, 800);
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 60 - 2 * progress,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.4,
        // This tells children to stagger their animations
        // staggerChildren: 0.1, // Time delay between each child animation
        // delayChildren: 0.2, // Initial delay before first child animates
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (custom: number) => ({
      opacity: custom < progress ? 0 : 1,
      x: custom < progress ? -40 : 0,
      y: 0,
      scale: custom === progress ? 2 : 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.8,
      },
    }),
  };

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
    <div className="fixed flex-col inset-0 flex justify-center bg-charcoal-gray z-50 ">
      <motion.div
        className="flex flex-col gap-4 ml-[30%]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(loadingText).map(([key, text]) => {
          const keyNumber = Number(key);

          return (
            <motion.div
              key={key}
              custom={keyNumber} // Pass custom prop to use in variants
              variants={itemVariants}
              className="origin-left flex items-center gap-2"
            >
              <span>{text}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FullScreenLoader;
