import React from "react";
import { AiFillStar, AiFillTrophy, AiFillLike } from "react-icons/ai";
import { BsAsterisk } from "react-icons/bs";
import { Separator } from "./ui/separator";

function Banner() {
  return (
    <div className="bg-mag min-h-[40vh] w-full relative my-10 z-10 flex justify-between items-center">
      <div className="absolute w-full hidden md:flex justify-center top-0">
        <div
          className="w-auto h-auto 
            border-l-[500px] border-l-transparent
            border-t-[100px] border-t-white
            border-r-[500px] border-r-transparent"
        />
      </div>
      <div className="absolute w-full hidden md:flex justify-center ">
        <div className="relative border-4 border-mag h-[450px] translate-y-4 w-[700px] flex flex-col justify-between items-center">
          <h2 className="uppercase text-mag font-bold bg-white h-fit -translate-y-9 p-4 text-2xl">
            Transpunem emotia in miscare
          </h2>
          <h2 className="uppercase text-mag font-bold bg-white h-fit translate-y-10 p-4 text-5xl">
            Cursuri
          </h2>
        </div>
      </div>
      <div
        className="flex p-10 md:p-2 gap-10 md:gap-4 xl:px-20 w-full justify-center 
            md:justify-between min-h-[40vh] md:items-end lg:pb-10 overflow-hidden flex-col md:flex-row"
      >
        <div className="w-full md:w-[30%] z-20 bg-mag flex flex-col items-center gap-4 md:-translate-y-12">
          <div className="w-full flex justify-center">
            <AiFillStar className="text-5xl text-white" />
          </div>
          <div className="uppercase font-semibold text-center text-white text-2xl">
            Servicii excelente
          </div>
          <div className="lg:w-[80%] text-center text-gray-300">
            Orice am face, punem calitatea pe primul loc, pentru că ne dorim să
            simți că valorifici din plin timpul petrecut la noi !
          </div>
          <div className="w-full flex md:hidden justify-center text-xl text-gray-400">
            <Separator className="bg-gray-400 w-4" />
          </div>
        </div>
        <div className="w-full md:w-[30%] z-20 bg-mag flex flex-col items-center gap-4">
          <div className="w-full flex justify-center">
            <AiFillTrophy className="text-5xl text-white" />
          </div>
          <div className="uppercase font-semibold text-center text-white text-2xl">
            Instructori Pasionați
          </div>
          <div className="lg:w-[80%] text-center text-gray-300">
            Dansul ne curge prin vene, iar cu fiecare generație de dansatori
            formată, reușim să contagiem și pe alții cu pasiunea noastră !
          </div>
          <div className="w-full flex md:hidden justify-center text-xl text-gray-400">
            <Separator className="bg-gray-400 w-4" />
          </div>
        </div>
        <div className="w-full md:w-[30%] z-20 bg-mag flex flex-col items-center gap-4 md:-translate-y-12">
          <div className="w-full flex justify-center">
            <AiFillLike className="text-5xl text-white" />
          </div>
          <div className="uppercase font-semibold text-center text-white text-2xl">
            Mediu Prietenos
          </div>
          <div className="lg:w-[80%] text-center text-gray-300">
            Suntem mai mult decât o școală, suntem o comunitate în mijlocul
            căreia oricine este binevenit și unde învățăm constant unii de la
            alții.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
