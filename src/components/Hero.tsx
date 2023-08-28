import Image from "next/image";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";

const bGro = Bricolage_Grotesque({ subsets: ["latin"] });

function Hero() {
  return (
    <div className="w-full relative flex justify-center">
      <div className="controlledWidth relative">
        <div className="relative w-full h-[60vh] md:h-[90vh] lg:h-[90vh] z-10 translate-x-12">
          <Image
            src="/assets/hero-image.png"
            fill
            priority
            alt="Hero image"
            className="object-scale-down opacity-90"
          />
        </div>
        <div className="absolute left-0 top-20 md:top-60 h-full flex justify-center w-full">
          <div className={``}>
            <h1
              className={`${bGro} text-[4rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] xl:text-[15rem] text-[rgb(55,0,112)] leading-[100px]  font-bold flex flex-col w-full`}
            >
              <span
                className={`${bGro} drop-shadow-[0_1.2px_1.2px_rgb(0,0,0,.5)]`}
              >
                Magnitude
              </span>
              <span className="z-20 w-full text-end">dance</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
