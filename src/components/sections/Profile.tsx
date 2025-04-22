import { Download, MapPin } from "lucide-react";
import { motion } from "motion/react";

import { PERSONAL_DETAILS, SOCIAL_ITEMS, TRANSITIONS } from "@constants/index";

import HoverButton from "@components/common/HoverButton";
import { Separator } from "@components/ui/Separator";

import ProfilePic from "@assets/images/profile-pic.jpeg";

import BottomFadeOverlay from "../common/BottomFadeOverlay";
import Dither from "../ui/Dither";

const Profile = () => {
  const handleRedirectSocial = (url: string) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/bryan_sim_resume.pdf";
    link.download = "bryan_sim_resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="profile" className="scroll-mt-nav">
      <div id="profile-wrapper" className="relative">
        <motion.div
          layout
          id="profile-banner-wrapper"
          className="relative h-30 md:h-44 overflow-hidden"
          initial={{ ...TRANSITIONS.fadeUp.initial, filter: "blur(10px)" }}
          animate={{ ...TRANSITIONS.fadeUp.animate, filter: "blur(0px)" }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          <Dither
            // className="h-48"
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />

          <BottomFadeOverlay />
        </motion.div>

        <motion.div
          initial={TRANSITIONS.fadeUp.initial}
          // animate={isLoading ? {} : TRANSITIONS.fadeUp.animate}
          animate={TRANSITIONS.fadeUp.animate}
          transition={{ ...TRANSITIONS.fadeUp.transition, delay: 0.4 }}
        >
          <div
            id="profile-content-wrapper"
            className="flex flex-col gap-6 p-2 mt-[-5%] relative"
          >
            <div
              id="profile-content-header"
              className="flex flex-col md:flex-row items-center gap-2 md:gap-6"
            >
              <img
                src={ProfilePic}
                alt="Profile Picture"
                className="w-23 h-23 rounded-3xl object-cover"
              />

              <div className="flex flex-col gap-2 self-center p-2 w-full items-center md:items-start">
                {/* <div className="px-4 py-2 rounded-2xl bg-midnight-blue">
              <span className="text-sm">{PERSONAL_DETAILS.greetMessage}</span>
            </div> */}

                <div className="flex flex-col xs-max:flex-row items-center gap-1">
                  <span className="font-extrabold text-responsive-8">
                    {PERSONAL_DETAILS.name}
                  </span>

                  <Separator
                    orientation="vertical"
                    className="h-8 bg-white hidden xs-max:block"
                  />

                  <span className="font-medium text-responsive-5 font-vt323">
                    {PERSONAL_DETAILS.position}
                  </span>
                </div>

                {/* <span className="font-light text-sm">
                Open to New Opportunities
              </span> */}

                <div className="flex items-center gap-1 font-light text-responsive-3 md:mb-4">
                  <MapPin className="w-4.5 h-4.5" />
                  <p>{PERSONAL_DETAILS.location}</p>
                </div>

                <div className="flex gap-2 justify-center md:justify-end w-full">
                  <div className="flex gap-2">
                    {SOCIAL_ITEMS.map((socialItem) => (
                      <HoverButton
                        key={socialItem.name}
                        size="icon"
                        variant="outline"
                        onClick={() => handleRedirectSocial(socialItem.url)}
                      >
                        <socialItem.icon />
                      </HoverButton>
                    ))}
                  </div>
                  <Separator orientation="vertical" className="h-auto" />
                  <HoverButton onClick={handleDownloadResume}>
                    Resume <Download />
                  </HoverButton>
                </div>
              </div>
            </div>

            <div
              id="profile-content-desc"
              className="font-light text-gray-300 text-responsive-3.5 text-center md:text-left"
            >
              {PERSONAL_DETAILS.description}
            </div>

            {/* <div
              id="profile-content-recent-techs"
              className="relative  p-4 border rounded-lg"
            >
              <span className="absolute top-[-13px] left-1 z-10">
                Technologies I've recently worked with:
              </span>
              <div className="grid grid-rows-3 grid-flow-col auto-cols-[150px] gap-2 font-share-tech-mono">
                {PERSONAL_DETAILS.currentStack.map((stack, index) => (
                  <div key={index} className="flex gap-2">
                    <Award className="text-cyan-500" />
                    <span>{stack}</span>
                  </div>
                ))}
              </div>
            </div> */}
            <div className="font-vt323 text-responsive-4 px-4 py-2 border rounded-lg backdrop-blur-md bg-midnight-blue/30">
              Technologies I've recently worked with:
              <ul className="grid grid-rows-3 grid-flow-col auto-cols-auto gap-2">
                {PERSONAL_DETAILS.currentStack.map((stack, index) => (
                  <li key={index} className="flex gap-2">
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
