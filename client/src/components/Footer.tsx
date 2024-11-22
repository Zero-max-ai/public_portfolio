import { Link } from "react-router-dom";
import { socialLinks } from "../utils/";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-black geologica-regular">
      <div className="w-8/12 mx-auto flex max-lg:flex-col gap-4 lg:items-center justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          {socialLinks.map((link, index) => {
            return (
              <Link key={index} to={link.to}>
                <span>{link.title}</span>{" "}
              </Link>
            );
          })}
        </div>
        <div className="border-b border-black lg:hidden"></div>
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

export default Footer;
