import Layout from "../components/layout/Layout";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const Photography = () => {
  return (
    <Layout>
      {/*<div className="h-[80vh] flex flex-col gap-5 items-center justify-center">
        <div className="flex gap-5">
          <motion.div
            className="w-[20px] h-[20px] bg-white"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="w-[20px] h-[20px] bg-white"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <h1 className="geologica-bold text-xl">
          Capturing moments takes time—so does building this page. Coming soon!
        </h1>
      </div>*/}
      <div className="flex flex-col items-center justify-center h-screen">
        <motion.h1
          className="text-4xl geologica-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Photography section
        </motion.h1>

        <motion.h2
          className="text-xl geologica-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Under Construction
        </motion.h2>

        <Loader />
        <motion.p
          className="mt-4 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          I'm working hard to bring this section to life!
        </motion.p>
      </div>
    </Layout>
  );
};

export default Photography;
