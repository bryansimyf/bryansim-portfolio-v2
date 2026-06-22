import BryansimDevScreenShot from "@assets/images/projects/bryansim-dev.png";

import { TECHSTACK_KEYS } from "./techstack";

const currentUrl = window.location.href;

export const PROJECTS_DETAILS = [
  {
    name: "bryansim.dev",
    repoUrl: "https://github.com/bryansimyf/bryansim-portfolio-v2",
    url: currentUrl,
    image: BryansimDevScreenShot,
    description:
      "A personal web portfolio to showcase my projects, growth, and passion for building great user experiences.",
    techStack: [
      TECHSTACK_KEYS.TYPESCRIPT,
      TECHSTACK_KEYS.TAILWIND,
      TECHSTACK_KEYS.MOTION,
      TECHSTACK_KEYS.VITE,
    ],
  },
];
