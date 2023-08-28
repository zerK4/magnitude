"use client";

import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mb-40">
      <Hero />
      <Banner />
    </div>
  );
}
