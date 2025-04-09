import { AnimatePresence, motion } from "motion/react";

import { useLoading } from "@providers/LoadingProviders";

import FullScreenLoader from "@components/common/FullScreenLoader";
import NavBar from "@components/NavBar";
import Experience from "@components/sections/Experience";
import Profile from "@components/sections/Profile";
import Projects from "@components/sections/Projects";
import { ShootingStars } from "@components/ui/ShootingStars";
import { StarsBackground } from "@components/ui/StarsBackground";

const App = () => {
  const { isLoading } = useLoading();

  return (
    <>
      <div className="box-border  text-white min-h-[100dvh] font-poppins">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} // Removed scale to avoid layout issues
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <FullScreenLoader />
            </motion.div>
          )}
        </AnimatePresence>

        <ShootingStars />
        <StarsBackground className="pointer-events-none" />
        <NavBar />
        <div className="relative z-1 flex flex-col gap-6 mx-auto w-full max-w-2xl pt-20 px-4">
          <Profile />
          <Experience />
          <Projects />
          <div className="h-[1280px]">Rest of the content</div>
        </div>
      </div>
    </>
  );
};

export default App;
