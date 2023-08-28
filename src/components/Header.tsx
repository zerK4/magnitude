import Link from "next/link";
import React from "react";
import { Navigation } from "./Navigation";
import Image from "next/image";
import { NavigationMobile } from "./NavigationMobile";

function Header() {
  return (
    <div className="flex justify-center">
      <div className="controlledWidth flex justify-between items-center h-24">
        <div className="relative w-20 h-20">
          <Image
            src="/assets/logo.png"
            alt="Logo image"
            fill
            className="object-cover"
          />
        </div>
        <Navigation />
        <div className="flex md:hidden">
          <NavigationMobile />
        </div>
      </div>
    </div>
  );
}

export default Header;
