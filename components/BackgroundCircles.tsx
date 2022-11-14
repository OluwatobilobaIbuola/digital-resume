import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex items-center justify-center h-full"
      initial={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      whileInView={{ opacity: 1 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
    >
      <div className="rounded-full border border-[#333333] h-[200px] w-[200px] animate-ping absolute mt-[2rem]" />
      <div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-[2rem]" />
      <div className="rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-[2rem]" />
      <div className="rounded-full border border-[#2d8064]/50 h-[650px] w-[650px]  animate-pulse absolute mt-[2rem]" />
      <div className="rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-[2rem]" />
    </motion.div>
  );
}

export default BackgroundCircles;
