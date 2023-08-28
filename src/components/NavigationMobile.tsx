import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { components } from "@/lib/constants";
import Image from "next/image";

export function NavigationMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <GiHamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="h-screen h-screen-ios flex flex-col justify-end"
        side={"top"}
      >
        <SheetHeader className="w-full text-left mt-10 mb-4 px-4">
          <SheetTitle>Meniu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col w-full gap-2">
          {components.map((component) => (
            <Sheet key={component.name}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex justify-start bg-gray-100 py-10 hover:bg-mag hover:text-white"
                >
                  {component.name}
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-2 pt-10 justify-end">
                <div className="h-[50vh] w-full relative">
                  <Image
                    src={component.image}
                    fill
                    alt={`${component.name} navigation image`}
                    className="object-cover rounded-md shadow"
                  />
                </div>
                {component?.items?.map((item) => (
                  <Button
                    key={item.title}
                    variant={"ghost"}
                    className="hover:bg-mag w-full bg-gray-100 hover:text-white py-10 flex justify-start"
                  >
                    {item.title}
                  </Button>
                ))}
                <SheetClose asChild>
                  <Button className="bg-mag py-8">Close</Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          ))}
        </div>
        <SheetClose asChild>
          <Button className="bg-mag py-8">Close</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}