import { NavLink, Link, useLocation } from "react-router-dom";

import SocialLinks from "./SocialLinks";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const location = useLocation();

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWorkClick = () => {
    if (location.pathname === "/") {
      scrollToWork();
    }
  };

  return (
    <header className="relative border-b-2 border-black">
      <nav className="px-10 md:px-32 flex items-center justify-between py-6">
        <div className="flex items-center gap-12">
          <Link to={"/"} className="geologica-bold text-xl">
            Akshat Gangi
          </Link>
          <div className="max-lg:hidden flex gap-4 geologica-regular">
            <NavLink to={"/#work"} onClick={handleWorkClick}>
              Work
            </NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/photography"}>Photography</NavLink>
          </div>
        </div>
        <SocialLinks />
        <HamburgerMenu />
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Navbar;
