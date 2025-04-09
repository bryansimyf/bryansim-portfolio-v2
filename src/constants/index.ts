import { Briefcase, FolderOpen, User } from "lucide-react";

import GithubIcon from "@assets/icons/brand-github.svg?react";
import LinkedinIcon from "@assets/icons/brand-linkedin.svg?react";

// Layout
export const NAV_ITEMS = [
  { name: "About", href: "#profile", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderOpen },
];

export const SOCIAL_ITEMS = [
  { name: "Github", icon: GithubIcon, url: "https://github.com/SushiMeliodas" },
  {
    name: "Linkedin",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/bryansimyf/",
  },
];

// Personal
export const TECHSTACK_KEYS = {
  JAVASCRIPT: "Javascript",
  TYPESCRIPT: "Typescript",
  PHP: "PHP",
  REACT: "React",
  NEXTJS: "Next.js",
  REACT_NATIVE: "React Native",
  TAILWIND: "Tailwind CSS",
  MUI: "MUI",
  SHADCN: "Shadcn UI",
  // REACT_HOOK_FORM: "react-hook-form",
  REDUX: "Redux",
  ZUSTAND: "Zustand",
  VITE: "Vite.js",
  TANSTACK_QUERY: "Tanstack Query",
  LARAVEL: "Laravel",
  EXPRESS: "Express.js",
  MYSQL: "Mysql",
};

export const PERSONAL_DETAILS = {
  name: "Bryan Sim",
  position: "Software Engineer",
  location: "Kuala Lumpur & Petaling Jaya, Malaysia",
  greetMessage: "Hi, I'm Bryan Sim!",
  slogan: "Engineering the frontend, enhancing the experience.",
  description:
    "I'm a software engineer with 4 years of experience, specializing in frontend development. I build scalable and high-performance web applications with modern technologies. 🚀",
  experiences: [
    {
      startDate: "2023",
      endDate: "",
      logo: "",
      company: "Boost Credit",
      title: "Software Engineer",
      description:
        "Developed Boost PayFlex, enabling seamless payment flexibility for millions of merchants, while enhancing SME lending applications, internal management tools, and scalable admin panel templates. Focused on improving user experience, streamlining workflows, and optimizing application performance.",
      techStack: [
        TECHSTACK_KEYS.JAVASCRIPT,
        TECHSTACK_KEYS.TYPESCRIPT,
        TECHSTACK_KEYS.REACT,
        TECHSTACK_KEYS.NEXTJS,
        TECHSTACK_KEYS.MUI,
        TECHSTACK_KEYS.REDUX,
        TECHSTACK_KEYS.VITE,
        TECHSTACK_KEYS.MYSQL,
      ],
    },
    {
      startDate: "2020",
      endDate: "2023",
      logo: "",
      company: "Komaci Network",
      title: "Software Engineer",
      description:
        "Developed and improved Komaci (micro-influencing) and EZlife (social commerce, 250+ sellers, 210K+ transactions). Led UI/UX collaboration, built reusable components, designed APIs and database structures, and ensured seamless feature integrations. Worked on API consumption, dynamic state updates, and backend enhancements.",
      techStack: [
        TECHSTACK_KEYS.PHP,
        TECHSTACK_KEYS.JAVASCRIPT,
        TECHSTACK_KEYS.TYPESCRIPT,
        TECHSTACK_KEYS.REACT,
        TECHSTACK_KEYS.LARAVEL,
        TECHSTACK_KEYS.MYSQL,
      ],
    },
    {
      startDate: "2019",
      endDate: "2019",
      logo: "",
      company: "Eboss Group Holdings",
      title: "Intern, Software Developer",
      description: "Minor enhancements & bugs fixing backend logic.",
      techStack: [],
    },
  ],
};

export const PROJECTS_DETAILS = [{ name: "", repoUrl: "", techStack: [] }];

// Transitions
export const TRANSITIONS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.8,
      },
    },
  },
};
