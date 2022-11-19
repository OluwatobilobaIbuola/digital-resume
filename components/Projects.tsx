import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "../typings";

type Props = {
  projects: Project[];
};


function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden xl:max-w-[1280px] mx-auto flex-col text-left md:flex-row max-w-full h-screen justify-evenly items-center"
    >
      <div className="xl:max-w-[1280px] mx-auto">
        <h3 className="z-50 absolute w-full left-0 top-16 sm:top-5 text-center uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>
      </div>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2d8064]/80">
        {[1, 2, 3, 4, 5].map((project, i) => (
          <motion.div
            key={`${i}`}
            className="w-full flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="decoration-[#2d8064]/50 underline">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Modern website
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis ex recusandae modi eum cupiditate laborum earum, impedit
                maiores exercitationem quae nihil ducimus, blanditiis quasi
                excepturi!
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full h-[500px] bg-[#2d8064]/10 absolute top-[30%] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
