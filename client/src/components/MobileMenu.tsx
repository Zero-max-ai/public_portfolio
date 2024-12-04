import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  navigationLinks,
  navigationLinksInterface,
  socialLinks,
  socialLinksInterface,
} from "../utils/index";
import { motion, AnimatePresence } from "framer-motion";
import useMenuStore from "../store/menuStore";

const MobileMenu = () => {
  const { isOpen, toggleMenu } = useMenuStore();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);
  return (
    <motion.div
      className={`${isOpen ? "flex" : "hidden"} lg:hidden absolute top-20 left-0 w-full h-[100vh] items-center justify-center`}
    >
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="h-full w-full flex flex-col items-center justify-center gap-5 bg-[#2C3539]"
          >
            <motion.div className="flex flex-col items-center justify-center">
              {navigationLinks.map(
                ({ title, renderTo }: navigationLinksInterface) => {
                  return (
                    <Link
                      key={title}
                      onClick={toggleMenu}
                      className="text-3xl geologica-bold hover:underline underline-offset-4"
                      to={renderTo}
                    >
                      {title}
                    </Link>
                  );
                }
              )}
            </motion.div>
            <motion.div className="flex items-center justify-center gap-5">
              {" "}
              {socialLinks.map(({ Icon, renderTo }: socialLinksInterface) => {
                return (
                  <Link
                    key={renderTo}
                    className="underline underline-offset-4 source-code-pro-medium text-lg"
                    to={renderTo}
                  >
                    {<Icon />}
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

export default MobileMenu;
