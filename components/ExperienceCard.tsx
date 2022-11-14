import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="border border-[#2d8064]/70 h-[90%] flex flex-col md:flex-row rounded-lg items-stretch md:items-center
       justify-end space-y-7 w-[500px] md:w-[600px] xl:w-[900px] snap-start sm:snap-center bg-[#292929]
     p-10 hover:opacity-100 flex-shrink-0 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full flex-shrink-0 xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">FrontEnd Engineer</h4>
        <p className="font-bold text-2xl mt-1">Lorem ipsum dolor sit amet.</p>
        <div className="flex space-x-2 my-2"></div>

        <p className="uppercase py-5 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Lorem, ipsum dolors.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
