"use client";

import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import TrainerComponent from "@/components/TrainerComponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mb-40 overflow-x-hidden">
      <Hero />
      <Banner />
      <TrainerComponent />
    </div>
  );
}
