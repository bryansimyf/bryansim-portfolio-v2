import { PERSONAL_DETAILS } from "@constant/index";

import ProfilePic from "@assets/images/profile-pic.jpeg";

import BottomFadeOverlay from "../common/BottomFadeOverlay";
import Dither from "../Dither";

const Profile = () => {
  return (
    <div id="profile-wrapper">
      <div
        id="profile-banner-wrapper"
        className="relative h-44 overflow-hidden"
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
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <img
            src={ProfilePic}
            alt="Profile Picture"
            className="w-23 h-23 rounded-3xl object-cover"
          />

          <div className="self-center">
            <div>
              <span className="font-extrabold">{PERSONAL_DETAILS.name}</span> |{" "}
              <span className="font-medium">{PERSONAL_DETAILS.position}</span>
            </div>
            <div className="font-light text-sm">
              <p>Based in {PERSONAL_DETAILS.location}</p>
            </div>
            <span className="font-light text-sm">
              Open to new opportunities
            </span>
          </div>
        </div>
        <div id="profile-desc" className="font-light">
          {PERSONAL_DETAILS.description}
        </div>
      </div>
    </div>
  );
};

export default Profile;
