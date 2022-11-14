import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen sm:px-16 px-6"
    >
      <div className="xl:max-w-[1280px] mx-auto w-full h-full">
        <div className="h-full flex relative flex-col gap-y-[1rem] sm:gap-y-[1.5rem] text-center md:text-left md:flex-row justify-center items-center">
          <h1 className="z-50 absolute w-full text-center top-16 sm:top-5 uppercase tracking-[20px] text-gray-500 text-2xl ">
            About
          </h1>
          <motion.img
            initial={{
              x: -200,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://media-exp1.licdn.com/dms/image/D4D03AQGX0HFB4iOAUQ/profile-displayphoto-shrink_400_400/0/1665818566521?e=1673481600&v=beta&t=PXokv1h3OgCMIlFK5A271QXxQiz_107V7lBxk32QnS0"
            className="flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
          />
          <div className="space-y-8 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
              Here is a{" "}
              <span className="text-[#2d8064]/50 underline">little</span>{" "}
              background
            </h4>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, dolorem unde nemo quos praesentium eveniet tempora
              sit dolor tenetur non eaque quibusdam pariatur doloribus maxime.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ex
              tempore ducimus odio! Animi numquam voluptates odit perferendis
              ducimus voluptatibus pariatur ad harum quibusdam unde.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
