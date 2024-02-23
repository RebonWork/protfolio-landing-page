"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="w-full px-80 border-b-1">
      <div className=" flex flex-row justify-between py-5">
        <div className="flex flex-row gap-2">
          <Image
            src="./logo.svg"
            width={200}
            height={200}
            className=" w-16 h-16 object-fill"
            alt="logo"
          />
          <h2>Flowify</h2>
        </div>
        <div className="space-x-10">
          <ThemeToggle />
          <Button className="bg-accent text-white">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
