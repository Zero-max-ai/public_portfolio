// import React from 'react'
import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  const parentVariants = {
    hover: {},
  };

  const childVariants = {
    horizontal1: {
      initial: { top: "0%", left: "0%" },
      hover: { top: "3%", left: "3%", backgroundColor: "black" },
    },
    vertical1: {
      initial: { bottom: "0%", left: "0%" },
      hover: { bottom: "3%", left: "3%", backgroundColor: "black" },
    },
    horizontal2: {
      initial: { top: "0%", right: "0%" },
      hover: { top: "3%", right: "3%", backgroundColor: "black" },
    },
    vertical2: {
      initial: { bottom: "0%", right: "0%" },
      hover: { bottom: "3%", right: "3%", backgroundColor: "black" },
    },
  };
  const childStyles = [
    { width: "10px", height: "3px" },
    { width: "3px", height: "10px" },
  ];
  const positionVariants = [
    "horizontal1",
    "vertical1",
    "horizontal2",
    "vertical2",
  ];
  return (
    <motion.div
      variants={parentVariants}
      initial="initial"
      whileHover="hover"
      className="relative py-5 px-8 text-sm w-fit bg-[rgba(255, 255, 255, 0.05)] hover:bg-[#f5f5f5] hover:text-black transition-all duration-500 ease-in-out"
    >
      {positionVariants.map((variant, index) => (
        <div key={index}>
          <motion.div
            style={{
              ...childStyles[0], // Horizontal bar style
              position: "absolute",
              backgroundColor: "white",
            }}
            variants={childVariants[variant]}
          />
          <motion.div
            style={{
              ...childStyles[1], // Vertical bar style
              position: "absolute",
              backgroundColor: "white",
            }}
            variants={childVariants[variant]}
          />
        </div>
      ))}
      {title}
    </motion.div>
  );
};

export default Button;
