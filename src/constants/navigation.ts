import { Briefcase, FolderOpen, User } from "lucide-react";

import GithubIcon from "@assets/icons/brand-github.svg?react";
import LinkedinIcon from "@assets/icons/brand-linkedin.svg?react";

export const NAV_ITEMS = [
  { name: "About", href: "#profile", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderOpen },
];

export const SOCIAL_ITEMS = [
  { name: "Github", icon: GithubIcon, url: "https://github.com/bryansimyf" },
  {
    name: "Linkedin",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/bryansimyf/",
  },
];
