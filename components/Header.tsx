import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
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
            <SocialIcon
              url="https://www.linkedin.com/in/oluwatobiloba-ibuola-1578765a/"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/OluwatobilobaIbuola"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://www.instagram.com/oluwatobilobaibuola"
              fgColor="gray"
              bgColor="transparent"
            />
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
          >
            <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
            <Link href="#contact">
              <p className="whitespace-nowrap hidden sm:inline-flex  uppercase text-sm text-gray-400">
                Get in touch
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Header;
