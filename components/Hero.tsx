import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The name's ${"Oluwatobiloba Ibuola"}`,
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative h-[100vh] space-y-8 overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-[50%]">
        {" "}
        <BackgroundCircles />
      </div>

      <div className="z-10">
        <img
          className="rounded-full h-32 w-32 mx-auto object-cover"
          src={urlFor(pageInfo?.heroImage).url()}
        />
        <h2 className="text-center tracking-[15px] text-sm uppercase text-gray-500 pb-2">
          Software <br className="sm:hidden inline-block" />
          Engineer
        </h2>
        <h1 className="text-center">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#2d8064" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
