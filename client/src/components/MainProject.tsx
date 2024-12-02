import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { mainProjectProps } from "../utils/index";

const MainProject = ({
  image,
  title,
  badge,
  description,
  cta,
}: mainProjectProps) => {
  return (
    <motion.div className="flex flex-col gap-4 w-[400px] h-fit p-5 border source-code-pro-medium">
      <motion.img src={image} className="" />
      <motion.div className="flex flex-col gap-3">
        <motion.div className="flex items-center gap-3">
          <h1 className="geolociga-bold text-2xl">{title}</h1>
          <motion.span className="text-xs bg-gray-700 px-3 py-1 rounded-md">{badge}</motion.span>
        </motion.div>
        <motion.span>{description}</motion.span>
        <motion.span>
          <Link to={cta} className="bg-orange-500 text-black text-sm px-3 py-1 rounded-md">
            See Details
          </Link>
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default MainProject;
