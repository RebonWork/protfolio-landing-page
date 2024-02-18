import { Copyright } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mb-0 mt-auto flex flex-row text-textWeb-700 w-full px-56 justify-between pb-1 items-center">
      <Image
        src="./logo.svg"
        width={100}
        height={100}
        className="mr-8"
        alt="logo"
      />
      <div className="flex flex-rows gap-2 items-center">
        <Copyright />
        <small>This Business {new Date().getFullYear()}</small>
      </div>
      <small>Footer</small>
      <small>Footer</small>
    </div>
  );
};

export default Footer;
