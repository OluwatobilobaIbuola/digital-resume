import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="sm:px-16 px-6 h-screen"
    >
      <div className="h-full xl:max-w-[1280px] mx-auto w-full">
        <div
          className="h-full flex flex-col md:flex-row relative text-left justify-center items-end
         max-w-full"
        >
          <h3 className="z-50 text-center w-full absolute left-0 top-16 sm:top-5 uppercase tracking-[20px] text-gray-500 text-2xl">
            Experience
          </h3>

          <div className="w-full h-full items-end flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2d8064]/80">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
