import { Link } from "react-router-dom";
import { socialLinks } from "../utils/";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-black geologica-regular">
      <div className="w-8/12 mx-auto flex items-center justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          {socialLinks.map((link, index) => {
            return (
              <Link key={index} to={link.to}>
                <span>{link.title}</span>{" "}
              </Link>
            );
          })}
        </div>
        <div>
          <span>Last updated @ 20.11.2024</span>
          <span className="flex items-center gap-4">
            Build by Akshat Gangi. 2024{" "}
            <Link
              to={"https://github.com/Zero-max-ai"}
              className="text-gray-400 text-xs hover:underline"
            >
              akshat.gangi.v1
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

/*
<header className="px-32 border-b-2 border-black dm-mono-medium">
      <nav className="flex items-center justify-between py-6">
        <div className=" flex items-center gap-12">
          <Link to={"/"} className="">
            Akshat Gangi
          </Link>
          <div className="flex gap-4 roboto-medium text-sm">
            {navigationUtils.map(({ title, loc }) => {
              return (
                <NavLink key={title} to={loc} className="">
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
*/

export default Footer;
