import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:tolu@gmail.com?subject=${"Love"}&body=Hi, my name is Tolu. ${"I love you"}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center sm:px-16 px-6 md:text-left max-w-7xl justify-center mx-auto items-center"
    >
      <h3 className="absolute w-full z-50 text-center uppercase left-0 top-16 sm:top-5 tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#2d8064]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#2d8064] h-7 w-7 animate-pulse" />
            <p className="text-2xl">12345678</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#2d8064] h-7 w-7 animate-pulse" />
            <a className="text-2xl" href={`mailto:${"ibuolatobi@gmail.com"}`}>
              {"ibuolatobi@gmail.com"}
            </a>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#2d8064] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{"Nigeria"}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              className="contactInput"
              placeholder="Name"
              type="text"
              {...register("name")}
            />
            <input
              className="contactInput"
              placeholder="Email"
              type="text"
              {...register("email")}
            />
          </div>
          <input
            className="contactInput"
            placeholder="Subject"
            type="text"
            {...register("subject")}
          />
          <textarea
            className="contactInput h-36"
            placeholder="Message"
            {...register("message")}
          />

          <button
            type="submit"
            className="
            bg-[#2d8064] py-5 px-10 rounded-md text-black font-bold text-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;
