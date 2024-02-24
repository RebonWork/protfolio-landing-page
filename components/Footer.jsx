import { Copyright, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="flex flex-row max-sm:flex-col gap-4 text-text w-full h-16 max-sm:h-auto 2xl:px-56 lg:px-32 px-8 justify-between pb-1 items-center">
      <div className="flex w-full justify-between items-center md:justify-normal md:gap-4">
        <div className="flex flex-rows lg:gap-2 gap-0.5 items-center">
          <Copyright />
          <small className="text-xs">This Business {new Date().getFullYear()}</small>
        </div>
        <small className="text-xs">Privacy Policy</small>
        <small className="text-xs">Terms</small>
      </div>
      <div className="flex w-full justify-around pb-4 md:justify-end md:gap-8">
        <Button className={"rounded-full bg-secondary dark:bg-secondary p-2"}>
          <Facebook size={24} className="text-white" />
        </Button>
        <Button className={"rounded-full bg-secondary dark:bg-secondary p-2"}>
          <Twitter size={24} className="text-white" />
        </Button>
        <Button className={"rounded-full bg-secondary dark:bg-secondary p-2"}>
          <Instagram size={24} className="text-white" />
        </Button>
        <Button className={"rounded-full bg-secondary dark:bg-secondary p-2"}>
          <Youtube size={24} className="text-white" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
