import { TECHSTACK_KEYS } from "./techstack";

export const PERSONAL_DETAILS = {
  name: "Bryan Sim",
  position: "Software Engineer",
  location: "Kuala Lumpur & Petaling Jaya, Malaysia",
  greetMessage: "Hi, I'm Bryan Sim!",
  slogan: "Engineering the frontend, enhancing the experience.",
  description:
    "👨‍💻 I'm a software engineer who's spent most of my career in fintech, turning complex financial flows into clean, usable web experiences. I care deeply about code quality, architecture decisions, and building things that actually scale — both for users and for the teams maintaining them.",
  currentStack: [
    TECHSTACK_KEYS.JAVASCRIPT,
    TECHSTACK_KEYS.TYPESCRIPT,
    TECHSTACK_KEYS.TAILWIND,
    TECHSTACK_KEYS.REACT,
    TECHSTACK_KEYS.MUI,
    TECHSTACK_KEYS.REDUX,
    // TECHSTACK_KEYS.MOTION,
    // TECHSTACK_KEYS.REACT_NATIVE,
  ],
  experiences: [
    {
      startDate: "2023",
      endDate: "",
      logo: "",
      company: "Boost Credit",
      title: "Software Engineer",
      description: [
        "At Boost Credit, I worked across several products including ",
        {
          name: "Boost PayFlex",
          url: "https://myboost.co/feature/boost-payflex",
        },
        " (a BNPL product live with 1.8M+ merchants) and ",
        {
          name: "PayFlex for Biz",
          url: "https://myboost.co/business/payflex-for-biz",
        },
        ". One of the things I'm most proud of is driving a full frontend overhaul — migrating to TypeScript, restructuring to a feature-based architecture, and pushing for a shared component library that cut duplicated effort across teams. I also took ownership of the frontend technical roadmap and helped establish the standards the team builds on today.",
      ],
      techStack: [
        TECHSTACK_KEYS.JAVASCRIPT,
        TECHSTACK_KEYS.TYPESCRIPT,
        TECHSTACK_KEYS.REACT,
        // TECHSTACK_KEYS.NEXTJS,
        TECHSTACK_KEYS.REDUX,
        TECHSTACK_KEYS.JOTAI,
        TECHSTACK_KEYS.TANSTACK_QUERY,
        TECHSTACK_KEYS.VITE,
        TECHSTACK_KEYS.MUI,
        TECHSTACK_KEYS.MYSQL,
      ],
    },
    {
      startDate: "2020",
      endDate: "2023",
      logo: "",
      company: "Komaci Network",
      title: "Software Engineer",
      description: [
        "At Komaci, I wore many hats. I worked on ",
        {
          name: "Komaci",
          url: "https://komacinetwork.com/my/brand",
        },
        ", a micro-influencer platform connecting brands with audiences, and helped scale ",
        {
          name: "EZlive",
          url: "https://ezlive.biz/my-en",
        },
        " — a social commerce platform that grew to support 250+ sellers and 210K+ transactions. I collaborated closely with designers and backend engineers, contributed to API design, and built reusable component libraries that kept the UI consistent across products. When needed, I'd jump into the Laravel backend too, which gave me a solid full-stack perspective.",
      ],
      techStack: [
        TECHSTACK_KEYS.JAVASCRIPT,
        TECHSTACK_KEYS.TYPESCRIPT,
        TECHSTACK_KEYS.REACT,
        TECHSTACK_KEYS.REDUX,
        TECHSTACK_KEYS.PHP,
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
      description: [
        "My first taste of professional development — I was thrown into a real production codebase and tasked with fixing backend bugs and making small but meaningful improvements. It was where I first learned to read code I didn't write and ship with care.",
      ],
      techStack: [],
    },
  ],
};
