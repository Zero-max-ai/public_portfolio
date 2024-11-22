import { NavLink, Link } from "react-router-dom";
import { navigationUtils } from "../utils/";

import SocialLinks from "./SocialLinks";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="relative border-b-2 border-black">
      <nav className="px-10 md:px-32 flex items-center justify-between py-6">
        <div className="flex items-center gap-12">
          <Link to={"/"} className="geologica-bold text-xl">
            Akshat Gangi
          </Link>
          <div className="max-lg:hidden flex gap-4 geologica-regular">
            {navigationUtils.map(({ title, loc }) => {
              return (
                <NavLink key={title} to={loc}>
                  {title}
                </NavLink>
              );
            })}
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
