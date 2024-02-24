import { Copyright, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="flex flex-row text-text w-full h-16 xl:px-80 px-5 justify-between pb-1 items-center">
      <div className="flex flex-rows lg:gap-2 gap-0.5 items-center">
        <Copyright />
        <small>This Business {new Date().getFullYear()}</small>
      </div>
      <small>Privacy Policy</small>
      <small>Terms</small>
      <div className="flex flex-row lg:gap-4 gap-0.5">
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
