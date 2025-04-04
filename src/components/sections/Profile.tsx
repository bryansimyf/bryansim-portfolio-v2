import { MapPin } from "lucide-react";

import { PERSONAL_DETAILS } from "@constants/index";

import ProfilePic from "@assets/images/profile-pic.jpeg";

import BottomFadeOverlay from "../common/BottomFadeOverlay";
import Dither from "../ui/Dither";

const Profile = () => {
  return (
    <section id="profile" className="scroll-mt-nav">
      <div id="profile-wrapper">
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
        <div id="profile-content-wrapper" className="flex flex-col gap-6 p-2">
          <div id="profile-content-header" className="flex items-center gap-6">
            <img
              src={ProfilePic}
              alt="Profile Picture"
              className="w-23 h-23 rounded-3xl object-cover"
            />

            <div className="flex flex-col gap-1 self-center p-2">
              {/* <div className="px-4 py-2 rounded-2xl bg-midnight-blue">
              <span className="text-sm">{PERSONAL_DETAILS.greetMessage}</span>
            </div> */}

              <div>
                <span className="font-extrabold text-responsive-8">
                  {PERSONAL_DETAILS.name}
                </span>{" "}
                |{" "}
                <span className="font-medium">{PERSONAL_DETAILS.position}</span>
              </div>

              {/* <span className="font-light text-sm">
                Open to New Opportunities
              </span> */}

              <div className="flex items-center gap-1 font-light text-sm">
                <MapPin className="w-4.5 h-4.5" />
                <p>{PERSONAL_DETAILS.location}</p>
              </div>
            </div>
          </div>
          <div id="profile-content-desc" className="font-light text-gray-300">
            {PERSONAL_DETAILS.description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
