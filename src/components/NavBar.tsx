import { NAV_ITEMS, PERSONAL_DETAILS } from "@constant/index";

const NavBar = () => {
  const handleNavSelect = () => {
    console.log("??");
  };

  return (
    <nav className="flex justify-between">
      <a href="#">{PERSONAL_DETAILS.name}</a>
      <div className="flex gap-4">
        {NAV_ITEMS.map((navItem, index) => (
          <a
            key={`${navItem.name}-${index}`}
            href={navItem.href}
            onClick={handleNavSelect}
          >
            {navItem.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
