import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import SpringModal from "./Modal";
import { Social } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="sticky top-0 filter z-20 py-5 flex items-center sm:px-16 px-6 h-[70px]">
      <div className="xl:max-w-[1280px] mx-auto w-full">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5 }}
            className=""
          >
            {socials?.map((item) => {
              return (
                <SocialIcon
                  key={item._id}
                  url={item?.url}
                  fgColor="gray"
                  bgColor="transparent"
                />
              );
            })}
          </motion.div>

          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1 }}
            className="flex items-center text-gray-300 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <SocialIcon network="email" fgColor="gray" bgColor="transparent" />

            <p className="whitespace-nowrap hidden sm:inline-flex  uppercase text-sm text-gray-400">
              Get in touch
            </p>
          </motion.div>
          <SpringModal isOpen={isOpen} setOpen={() => setOpen(false)}>
            {/* <div className="border relative overflow-x-hidden pl-[32px] mb-[15px]">
              Hello bro
            </div> */}
          </SpringModal>
        </div>
      </div>
    </div>
  );
}

export default Header;
