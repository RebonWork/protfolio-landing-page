"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="w-full px-80">
      <div className=" flex flex-row justify-between py-5">
        <Image
          src="./logo.svg"
          width={150}
          height={150}
          alt="logo"
        />
        <div>
        <ThemeToggle/>
        <Button className="bg-primary text-white">Get Started</Button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
