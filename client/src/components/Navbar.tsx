import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { navigationLinks, navigationLinksInterface } from "../utils/index";
import HamburgerMenu from "./HamburgerMenu";
import CurvedArrow from "../assets/curved-arrow.svg";

const Navbar = () => {
  const { scrollY } = useViewportScroll();
  const navbarHeight = useTransform(scrollY, [0, 120], ["100px", "60px"]);

  return (
    <motion.div
      style={{ height: navbarHeight }}
      initial={{opacity: 0, y: -20}}
      animate={{ opacity: 1 , y:0}}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full py-4 lg:px-32 md:px-20 px-5 flex items-center justify-between z-30 backdrop-blur-2xl"
    >
      <Link to={"/"} className="geologica-bold">
        Akshat Gangi
      </Link>
      <div className="max-lg:hidden flex items-center gap-6 source-code-pro-medium">
        {navigationLinks.map(
          ({ title, renderTo }: navigationLinksInterface) => {
            return (
              <NavLink
                key={title}
                to={renderTo}
                // className="group flex items-center gap-2 decoration-2 underline-offset-4 decoration-orange-400 hover:underline"
                className={({ isActive }) =>
                  `group flex items-center gap-2 decoration-2 underline-offset-4 decoration-orange-400 hover:underline p-2 ${isActive ? " source-code-pro-bold bg-orange-400 text-black" : ""}`
                }
              >
                {title}{" "}
                <img src={CurvedArrow} className="hidden group-hover:block" />
              </NavLink>
            );
          }
        )}
      </div>
      <HamburgerMenu />
    </motion.div>
  );
};

export default Navbar;
