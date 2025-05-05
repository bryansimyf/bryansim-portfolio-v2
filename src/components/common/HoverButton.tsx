import { ReactNode } from "react";
import { motion } from "motion/react";

import { Button } from "@components/ui/Button";

interface HoverButton {
  children: ReactNode;
  className?: string;
  buttonClassName?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  [key: string]: any;
}

// TODO: enhance variant related style color
const HoverButton = (props: HoverButton) => {
  const {
    children,
    className,
    buttonClassName,
    // variant = "outline",
    ...rest
  } = props;

  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`absolute inset-0 bg-gray-300 rounded-lg`} />
      <motion.div
        whileTap={{ x: 0, y: 0 }}
        whileHover={{ x: -2.5, y: -2.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      >
        <Button
          variant="outline"
          className={`relative font-vt323 text-responsive-4 ${buttonClassName}`}
          {...rest}
        >
          {children}
        </Button>
      </motion.div>
    </div>
  );
};

export default HoverButton;
