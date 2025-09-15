import { motion } from "motion/react";

import { PERSONAL_DETAILS } from "@constants/index";
import { TRANSITIONS } from "@constants/index";

import HoverCoverText from "@components/common/HoverCoverText";
import { Badge } from "@components/ui/Badge";

const Experience = () => {
  const { experiences } = PERSONAL_DETAILS;

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="experience"
      className="scroll-mt-nav"
      initial={TRANSITIONS.fadeUp.initial}
      animate={TRANSITIONS.fadeUp.animate}
      // whileInView={TRANSITIONS.fadeUp.animate}
      // viewport={{ once: true }}
      transition={{
        ...TRANSITIONS.fadeUp.transition,
        delay: 0.6,
      }}
    >
      <div id="experience-wrapper" className="flex flex-col gap-4 p-2">
        <p className="font-semibold text-responsive-4.5">Experience</p>

        <div id="experience-timeline">
          {experiences.map((experience, index) => {
            const isCurrent = index === 0;

            return (
              <div
                key={index}
                id="experience-timeline-item"
                className="flex gap-5 md:gap-10"
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
                  className="flex flex-col gap-2 pt-1 px-2 pb-8 w-full"
                >
                  <span className="text-responsive-3">
                    {`${experience.startDate} - ${
                      isCurrent ? "Present" : experience.endDate
                    }`}
                  </span>
                  <p className="text-responsive-3.25 font-semibold">
                    {`${experience.title} - ${experience.company}`}
                  </p>
                  <div className="text-responsive-3 text-gray-300 break-words mb-2">
                    {experience.description.map((desc, index) => {
                      if (typeof desc === "object") {
                        return (
                          <HoverCoverText
                            key={index}
                            className="font-bold text-gray-200"
                            onClick={() => openInNewTab(desc.url)}
                          >
                            {desc.name}
                          </HoverCoverText>
                        );
                      }

                      return <span key={index}>{desc}</span>;
                    })}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((techStackItem) => (
                      <Badge key={techStackItem} variant="secondary">
                        {techStackItem}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
