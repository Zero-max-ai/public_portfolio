import { Link } from "react-router-dom";
import {
  navigationLinks,
  socialLinks,
  socialLinksInterface,
  navigationLinksInterface,
} from "../utils/index";

const Footer = () => {
  return (
    <footer className="w-11/12 lg:w-10/12 mx-auto md:py-40 lg:px-32 max-md:py-10 max-lg:px-10 flex max-md:flex-col max-md:gap-14 md:items-center justify-between source-code-pro-medium">
      {/*navigation and social links*/}
      <div className="flex max-md:flex-col gap-20 max-md:gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="geologica-medium text-xl">Navigation</h1>
          {navigationLinks.map(
            ({ title, renderTo }: navigationLinksInterface) => {
              return (
                <Link
                  key={title}
                  to={renderTo}
                  className="group flex items-center gap-2"
                >
                  {title}
                </Link>
              );
            }
          )}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="geologica-medium text-xl">Social Links</h1>
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, renderTo }: socialLinksInterface) => {
              return (
                <Link
                  key={renderTo}
                  to={renderTo}
                  className=""
                >
                  {<Icon />}{" "}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* copyright section*/}
      <div className="flex flex-col gap-2">
        <span>
          Build by<span className="geologica-medium"> - Akshat Gangi</span>
        </span>
        <span>
          updated@29.11.2024 -{" "}
          <span className="text-gray-600 text-xs">akshat.gangi.v2</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
