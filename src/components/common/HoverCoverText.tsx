import { ReactNode } from "react";
import { motion } from "motion/react";

interface HoverCoverTextProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

const HoverCoverText = (props: HoverCoverTextProps) => {
  const { children, className, ...rest } = props;

  const coverVariants = {
    rest: { width: "0%" },
    hover: {
      width: "100%",
      transition: {
        type: "tween",
        duration: 0.6, // now duration works
        ease: "easeInOut",
      },
    },
  };

  const lineVariants = {
    rest: { scaleX: 0, originX: 0 },
    hover: {
      scaleX: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`relative inline-block cursor-pointer w-fit ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      {...rest}
    >
      <span>{children}</span>
      <motion.span
        className="absolute left-0 top-0 overflow-hidden whitespace-nowrap text-cyan-300"
        variants={coverVariants}
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-300"
        variants={lineVariants}
      />
    </motion.div>
  );
};

export default HoverCoverText;
