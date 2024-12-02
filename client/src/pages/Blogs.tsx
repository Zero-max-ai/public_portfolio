import Layout from "../components/layout/Layout";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <Layout>
      <motion.div className="h-[100vh] flex flex-col items-center justify-center">
        <motion.h1
          className="geologica-bold text-4xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Blogs Section
        </motion.h1>
        <motion.span
          className="geologica-medium text-xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          Under Construction
        </motion.span>
        <Loader />
        <motion.span
          className="text-gray-300 text-sm mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          I'm working hard to bring this section to life!
        </motion.span>
      </motion.div>
    </Layout>
  );
};

export default Blogs;
