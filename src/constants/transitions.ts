// https://motion.dev/docs/react-transitions
// Transitions
export const TRANSITIONS = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      // duration: 0.4,
      type: "spring" as const,
      stiffness: 100, // default 1 resistance to movement
      damping: 20, // default 10 bounce factor
      mass: 0.5, // default 1
    },
  },
};
