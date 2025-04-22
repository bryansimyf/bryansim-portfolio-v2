import { useEffect } from "react";

import Footer from "@components/layouts/Footer";
import Header from "@components/layouts/Header";
import Experience from "@components/sections/Experience";
import Profile from "@components/sections/Profile";
import Projects from "@components/sections/Projects";
import { ShootingStars } from "@components/ui/ShootingStars";
import { StarsBackground } from "@components/ui/StarsBackground";

const App = () => {
  // Auto scroll back to main
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="box-border  text-white min-h-[100dvh] font-poppins">
        <ShootingStars />
        <StarsBackground className="pointer-events-none" />
        <Header />
        <div className="relative z-1 flex flex-col gap-6 mx-auto w-full max-w-2xl pt-20 px-4">
          <Profile />
          <Experience />
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
