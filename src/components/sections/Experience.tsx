import { PERSONAL_DETAILS } from "@constants/index";

const Experience = () => {
  const { experiences } = PERSONAL_DETAILS;

  return (
    <section id="experience" className="scroll-mt-nav">
      <div id="experience-wrapper" className="flex flex-col gap-4 p-2">
        <p className="font-semibold text-lg">Experience</p>

        <div id="experience-timeline">
          {experiences.map((experience, index) => {
            const isCurrent = index === 0;

            return (
              <div
                key={index}
                id="experience-timeline-item"
                className="flex gap-10"
              >
                <div
                  id="experience-timeline-item-dot-line"
                  className="flex flex-col items-center"
                >
                  <div className="relative my-1.5">
                    {/* Pulsing background effect */}
                    {isCurrent && (
                      <div className="absolute w-4.5 h-4.5 -left-0.5 -top-0.5 rounded-full bg-cyan-400 opacity-30 animate-ping"></div>
                    )}
                    {/* Core dot */}
                    <div
                      className={`${
                        isCurrent ? "bg-cyan-300" : "bg-zinc-200"
                      } relative w-3.5 h-3.5 bg-cyan-300 rounded-full`}
                    ></div>
                  </div>
                  <div className="w-0.5 bg-gray-600 h-full"></div>
                </div>

                <div
                  id="experience-timeline-item-content"
                  className="flex flex-col gap-2 mt-1 mb-8 w-full"
                >
                  <span className="text-sm ">{experience.startDate}</span>
                  <p className="text-sm font-semibold">
                    {experience.title} - {experience.company}
                  </p>
                  <p className="text-gray-300 break-words">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((techStackItem, index) => (
                      <div
                        key={techStackItem}
                        className="px-2 py-0.5 rounded-full border border-white/20 min-w-14 text-center"
                      >
                        <span className="text-xs">{techStackItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
