import { useEffect, useRef, useState } from "react";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";

import useResponsive from "@hooks/useResponsive";

import { PROJECTS_DETAILS } from "@constants/index";

import HoverButton from "@components/common/HoverButton";

interface PreviewCardProps {
  previewData: {
    name: string;
    image: string;
    repoUrl: string;
    url: string;
    description: string;
    techStack: string[];
  };
}

const ProjectTab = (props: PreviewCardProps) => {
  const { previewData } = props;
  const { name, image, repoUrl, url, description, techStack } = previewData;

  const { windowWidth } = useResponsive();

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const handleRedirect = (source: "github" | "project") => {
    window.open(
      source === "github" ? repoUrl : url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const contentVariant = {
    initial: {
      opacity: 0,
      height: 0,
      marginTop: 0,
    },
    hover: {
      opacity: 1,
      height: contentHeight,
      marginTop: "12px",
      // transition: { type: "spring", stiffness: 300, damping: 30 },
      transition: {
        // duration: 0.4,
        // ease: [0.4, 0, 0.2, 1],
        // type: "tween",
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.25, delay: 0.05 },
      },
    },
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [description]);

  return (
    <motion.div
      className="relative"
      initial="initial"
      {...(windowWidth <= 786
        ? { whileInView: "hover", viewport: { once: true } }
        : { whileHover: "hover" })}
    >
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover bg-gray-700 rounded-lg overflow-hidden border"
        // variants={bgVariant}
      />

      <div className=" mt-24 backdrop-blur-md bg-gray-700/15 rounded-lg p-4 overflow-hidden">
        <div className="flex justify-between flex-col md:flex-row md:items-center">
          <span className="text-responsive-3.5 font-bold">{name}</span>
          <div className="flex gap-2 text-responsive-3.5 font-vt323 flex-wrap">
            {techStack.map((stack, index) => (
              <span key={index}>{stack}</span>
            ))}
          </div>
        </div>

        <motion.div
          ref={contentRef}
          className="text-responsive-3 p-1 text-gray-300"
          variants={contentVariant}
        >
          {description}
        </motion.div>

        <div className="flex justify-end gap-2 mt-3">
          <HoverButton onClick={() => handleRedirect("github")}>
            Source <FolderGit2 />
          </HoverButton>
          <HoverButton
            // variant="ghost"
            onClick={() => handleRedirect("project")}
          >
            Link <ExternalLink />
          </HoverButton>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-nav">
      <div id="projects-wrapper" className="flex flex-col gap-4 p-2">
        <p className="font-semibold text-responsive-4.5">Projects</p>

        <div className="grid grid-cols-1 gap-3">
          {PROJECTS_DETAILS.map((project, index) => (
            <ProjectTab key={index} previewData={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
