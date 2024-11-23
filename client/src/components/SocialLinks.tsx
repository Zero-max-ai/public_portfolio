import { Link } from "react-router-dom";
import { TbFileCv, TbBrandGithub } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="max-lg:hidden flex gap-7 text-lg">
      <a
        href={"/resume.pdf"}
        target={"_blank"}
        rel="noopener noreferrer"
        className="cursor-pointer hover:drop-shadow-lg"
      >
        <TbFileCv />
      </a>
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
  );
};

export default SocialLinks;
