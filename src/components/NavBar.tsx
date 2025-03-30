import { NAV_ITEMS, PERSONAL_DETAILS } from "@constant/index";

const NavBar = () => {
  const handleNavSelect = () => {
    console.log("??");
  };

  return (
    <nav className="backdrop-blur-md fixed w-full z-10">
      <div className="flex justify-between w-full max-w-2xl mx-auto p-2">
        <a href="#" className="p-2">
          {PERSONAL_DETAILS.name}
        </a>
        <div className="flex gap-4">
          {NAV_ITEMS.map((navItem, index) => (
            <a
              key={`${navItem.name}-${index}`}
              href={navItem.href}
              onClick={handleNavSelect}
              className="p-2"
            >
              {navItem.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
