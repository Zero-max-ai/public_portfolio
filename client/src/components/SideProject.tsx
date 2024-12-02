import { sideProjectProps } from "../utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SideProject = ({ image, title, description, cta }: sideProjectProps) => {
  return (
    <motion.div>
<motion.img src={image} /> <div>      <motion.h1>{title}</motion.h1>
      <motion.span>{description}</motion.span>
      <motion.span>
        <Link to={`/sideproject/${cta}`}>View More</Link>
      </motion.span></div>
    </motion.div>
  );
};

export default SideProject;
