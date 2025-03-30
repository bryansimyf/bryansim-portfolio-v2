import BottomFadeOverlay from "./common/BottomFadeOverlay";
import Dither from "./Dither";

const ProfileCard = () => {
  return (
    <div>
      <div className="relative h-44 overflow-hidden">
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
    </div>
  );
};

export default ProfileCard;
