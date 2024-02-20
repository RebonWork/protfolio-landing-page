import { Copyright, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="mb-0 mt-auto flex flex-row text-textWeb-700 w-full h-16 px-80 py-20 justify-between pb-1 items-center">
      <div className="flex flex-rows gap-2 items-center">
        <Copyright />
        <small>This Business {new Date().getFullYear()}</small>
      </div>
      <small>Privacy Policy</small>
      <small>Terms</small>
      <div className="flex flex-row gap-4">
        <Button className={"rounded-full p-2"}>
          <Facebook size={24} />
        </Button>
        <Button className={"rounded-full p-2"}>
          <Twitter size={24} />
        </Button>
        <Button className={"rounded-full p-2"}>
          <Instagram size={24} />
        </Button>
        <Button className={"rounded-full p-2"}>
          <Youtube size={24} />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
