import { NavLink, Link } from "react-router-dom";
import { navigationUtils } from "../utils/";
import { TbFileCv, TbBrandGithub } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";

// import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <header className="px-32 border-b-2 border-black">
      <nav className="flex items-center justify-between py-6">
        <div className="flex items-center gap-12">
          <Link to={"/"} className="geologica-bold text-xl">
            Akshat Gangi
          </Link>
          <div className="flex gap-4 geologica-regular">
            {navigationUtils.map(({ title, loc }) => {
              return (
                <NavLink key={title} to={loc}>
                  {title}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="flex gap-5 text-lg">
          <Link to={""} className="cursor-pointer hover:drop-shadow-lg">
            <TbFileCv />
          </Link>
          <Link
            to={"https://github.com/Zero-max-ai"}
            className="cursor-pointer hover:drop-shadow-lg"
          >
            <TbBrandGithub />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/akshat-gangi-b457a61ab"}
            className="cursor-pointer hover:drop-shadow-lg"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
