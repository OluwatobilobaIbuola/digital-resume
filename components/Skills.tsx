import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="sm:px-16 px-6 h-screen"
    >
      <div className="h-full max-w-[2000px]  mx-auto w-full">
        <div className="h-full flex relative xl:px-10 justify-center xl:space-y-0 items-center">
          <h3 className="z-50 absolute top-16 sm:top-5 left-0 w-full text-center uppercase tracking-[20px] text-gray-500 text-2xl">
            Skills
          </h3>

          <div className=" grid grid-cols-4 gap-5">
            {/* Get first half of skills and map */}

            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />

            {/* Get second half of skills and map with direction left */}

            <Skill directionLeft />
            <Skill directionLeft />
            <Skill directionLeft />
            <Skill directionLeft />
            <Skill directionLeft />
            <Skill directionLeft />
            <Skill directionLeft />
            <Skill directionLeft />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
