import { motion } from "framer-motion";

interface CustomBtnProps {
  title: string;
}

const CustomBtn = ({ title }: CustomBtnProps) => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
    >
      {title}
    </motion.div>
  );
};

export default CustomBtn;
