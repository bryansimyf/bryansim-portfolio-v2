import { Menu } from "lucide-react";

import { NAV_ITEMS, PERSONAL_DETAILS } from "@constants/index";

import { getInitials } from "@utils/index";

import { Button } from "../ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";

const Header = () => {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.slice(1));

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", // Align to the top of the viewport
      });
    }
  };

  return (
    <nav className="backdrop-blur-md fixed w-full z-10">
      <div className="max-w-2xl mx-auto px-4 py-2 md:p-2">
        <div className="flex justify-between">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              className="text-responsive-4.5 font-bold font-audiowide"
            >
              <span className="hidden md:inline">{PERSONAL_DETAILS.name}</span>
              <span className="md:hidden">
                {getInitials(PERSONAL_DETAILS.name)}
              </span>
            </a>
          </div>

          {/* Desktop Navigation - hidden on mobile, shown on md screens and up */}
          <div className="hidden md:flex items-center space-x-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-responsive-3 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  // onClick={() => {}}
                >
                  <Menu />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-30">
                <DropdownMenuGroup>
                  {NAV_ITEMS.map((item) => (
                    <DropdownMenuItem
                      key={item.name}
                      onClick={() => handleScrollToSection(item.href)}
                    >
                      <item.icon />
                      <span>{item.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
