"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { components } from "@/lib/constants";

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {components.map((component) => (
          <NavigationMenuItem key={component.name} className="relative">
            <NavigationMenuTrigger className="">
              {component.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent asChild className="absolute left-0">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[550px] lg:grid-cols-[1fr_1fr]">
                <NavigationMenuLink asChild>
                  <div className="w-full h-60 relative">
                    <Image
                      src={component.image}
                      alt="Trainer image"
                      fill
                      className="object-cover object-left"
                    />
                  </div>
                </NavigationMenuLink>
                <ul className="flex gap-2 flex-col">
                  {component.items?.length !== 0 &&
                    component?.items?.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href as string}
                        className="hover:bg-mag hover:text-white ease-in-out duration-300"
                      />
                    ))}
                </ul>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href as string}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
