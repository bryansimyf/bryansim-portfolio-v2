import { MapPin } from "lucide-react";
import { motion } from "motion/react";

import { PERSONAL_DETAILS, TRANSITIONS } from "@constants/index";

import { Separator } from "@components/ui/Separator";

import ProfilePic from "@assets/images/profile-pic.jpeg";

import BottomFadeOverlay from "../common/BottomFadeOverlay";
import Dither from "../ui/Dither";

const Profile = () => {
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
          initial="hidden"
          animate="visible"
          variants={TRANSITIONS.fadeUp}
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

              <div className="flex flex-col gap-1 self-center p-2 w-full items-center md:items-start">
                {/* <div className="px-4 py-2 rounded-2xl bg-midnight-blue">
              <span className="text-sm">{PERSONAL_DETAILS.greetMessage}</span>
            </div> */}

                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-responsive-8">
                    {PERSONAL_DETAILS.name}
                  </span>
                  <Separator orientation="vertical" className="h-8 bg-white " />
                  <span className="font-medium text-responsive-4">
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
