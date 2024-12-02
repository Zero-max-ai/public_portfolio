import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <div className="py-24 flex flex-col gap-3 items-center justify-center text-9xl max-lg:text-5xl">
      <motion.span
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="geologica-medium"
      >
        Hi, I'm Akshat Gangi
      </motion.span>
      <div className="flex max-xl:flex-col-reverse max-xl:flex-col sm:items-center justify-between gap-5">
        <motion.span
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="source-code-pro-medium text-xl max-lg:text-sm w-4/12 max-xl:w-full mx-auto"
        >
          With the knowledge of data science, web development, and bash, I like
          to cultivate such ideas that are data-driven.
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="geologica-bold"
        >
          A developer
        </motion.span>
      </div>
      <motion.span
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="geologica-medium"
      >
        lives by developing
      </motion.span>
    </div>
  );
};

export default HomeSection;
