import Image from "next/image";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

function Hero() {
  return (
    <div className="w-full relative flex justify-center">
      <div className="relative w-full h-[60vh] lg:h-[90vh] ">
        <Image
          src="/assets/hero-image.png"
          fill
          alt="Hero image"
          className="object-scale-down"
        />
      </div>
      <div className="absolute left-0 top-0 h-full flex items-center">
        <div className="flex flex-col gap-2">
          <BsFacebook className="text-3xl text-sky-600 hover:text-sky-800 ease-in-out duration-300" />
          <AiFillInstagram className="text-3xl text-[rgb(184,16,118)] hover:text-[rgb(184,16,218)] ease-in-out duration-300" />
          <AiFillYoutube className="text-3xl text-red-500 hover:text-red-700 ease-in-out duration-300" />
        </div>
        <div className="ml-14">
          <h1 className="text-5xl text-[rgb(55,0,112)] font-bold max-w-[5rem]">
            Magnitude dance
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
