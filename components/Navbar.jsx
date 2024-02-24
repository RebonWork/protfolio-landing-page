"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="w-full 2xl:px-56 lg:px-32 px-5 border-b-1">
      <div className=" flex flex-row justify-between py-5">
        <div className="flex flex-row gap-2">
          <Image
            src="./logo.svg"
            width={200}
            height={200}
            className=" w-16 h-16 max-sm:h-10 max-sm:w-10 object-fill"
            alt="logo"
          />
          <h2>Flowify</h2>
        </div>
        <div className="flex flex-row lg:gap-10 gap-2">
          <ThemeToggle />
          <Button className="bg-accent text-white max-sm:w-5 max-sm:text-xs ">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
