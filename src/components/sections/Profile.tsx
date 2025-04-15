import { Download, MapPin } from "lucide-react";
import { motion } from "motion/react";

import { PERSONAL_DETAILS, SOCIAL_ITEMS, TRANSITIONS } from "@constants/index";

import { useLoading } from "@providers/LoadingProviders";

import { Button } from "@components/ui/Button";
import { Separator } from "@components/ui/Separator";

import ProfilePic from "@assets/images/profile-pic.jpeg";

import BottomFadeOverlay from "../common/BottomFadeOverlay";
import Dither from "../ui/Dither";

const Profile = () => {
  const { isLoading } = useLoading();

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
        <div
          id="profile-banner-wrapper"
          className="relative h-30 md:h-44 overflow-hidden"
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
        </div>

        <motion.div
          initial={TRANSITIONS.fadeUp.initial}
          animate={isLoading ? {} : TRANSITIONS.fadeUp.animate}
          transition={TRANSITIONS.fadeUp.transition}
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

                <div className="flex items-center gap-1 font-light text-responsive-3">
                  <MapPin className="w-4.5 h-4.5" />
                  <p>{PERSONAL_DETAILS.location}</p>
                </div>

                <div className="flex gap-2 justify-center md:justify-end w-full">
                  <div className="flex gap-2">
                    {SOCIAL_ITEMS.map((socialItem) => (
                      <Button
                        key={socialItem.name}
                        size="icon"
                        variant="outline"
                        onClick={() => handleRedirectSocial(socialItem.url)}
                      >
                        <socialItem.icon />
                      </Button>
                    ))}
                  </div>
                  <Separator orientation="vertical" className="h-auto" />
                  <Button variant="outline" onClick={handleDownloadResume}>
                    Resume <Download />
                  </Button>
                </div>
              </div>
            </div>
            <div
              id="profile-content-desc"
              className="font-light text-gray-300 text-responsive-3.5"
            >
              {PERSONAL_DETAILS.description}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
