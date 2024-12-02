import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="flex mt-6 space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {[0, 0.4].map((delay, index) => (
        <motion.div
          key={index}
          className="w-3 h-3 bg-white rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
            delay,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Loader;
