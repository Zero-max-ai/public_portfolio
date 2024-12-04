import useMenuStore from "../store/menuStore";
import { motion } from "framer-motion";

const HamburgerMenu = () => {
  const { isOpen, toggleMenu } = useMenuStore();
  return (
    <div className="flex flex-col gap-2 lg:hidden cursor-pointer" onClick={toggleMenu}>
      <motion.span
        className="bg-white block w-8 h-0.5"
        animate={{ rotate: isOpen ? 45 : 0, translateY: isOpen ? 5 : 0 }}
      ></motion.span>
      <motion.span
        className="bg-white block w-8 h-0.5"
        animate={{ rotate: isOpen ? 135 : 0, translateY: isOpen ? -4.5 : 0 }}
      ></motion.span>
    </div>
  );
};

export default HamburgerMenu;
