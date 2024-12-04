export interface mainProjectProps {
  image: string;
  title: string;
  badge: string;
  description: string;
  cta: string;
}

export const mainProject: mainProjectProps[] = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1676139292936-a2958a0d7177?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bento Box",
    badge: "web",
    description:
      "A single application which help users to manage there content at one single space.",
    cta: "bento_box",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1676139292936-a2958a0d7177?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Anytime pixel",
    badge: "web",
    description:
      "An application used to generate 32x32 pixel pfp image, where people can create there own anything from there imagination",
    cta: "anytime_pixel",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1676139292936-a2958a0d7177?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "",
    badge: "",
    description: "",
    cta: "",
  },
];

export interface sideProjectProps {
  image: string;
  title: string;
  description: string;
  cta: string;
}

export const sideProject: sideProjectProps[] = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1676139292936-a2958a0d7177?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdl    fHx8fGVufDB8fHx8fA%3D%3D",
    title: "ChronoCLI",
    description:
      "A shell script which is used to set alarm or timer on the terminal itself.",
    cta: "chrono_cli",
  },
];

export interface navigationLinksInterface {
  title: string;
  renderTo: string;
}

export const navigationLinks: navigationLinksInterface[] = [
  { title: "About", renderTo: "/about-me" },
  { title: "Photography", renderTo: "/photography" },
  { title: "Blogs", renderTo: "/my-blogs" },
];

import { IconType } from "react-icons";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export interface socialLinksInterface {
  Icon: IconType;
  renderTo: string;
}

export const socialLinks: socialLinksInterface[] = [
  { Icon: FaInstagram, renderTo: "" },
  {
    Icon: FaGithub,
    renderTo: "https://github.com/Zero-max-ai",
  },
  { Icon: FaLinkedin, renderTo: "https://linkedin.com/in/akshat-gangi-b457a61ab" },
];
