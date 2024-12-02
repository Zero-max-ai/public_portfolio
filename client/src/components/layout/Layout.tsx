import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="md:pt-24 max-md:pt-10" />
      <Navbar />
      {children}
      <Footer />
    </motion.div>
  );
};

export default Layout;
