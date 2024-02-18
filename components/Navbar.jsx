import { Button } from "@nextui-org/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center mt-8 gap-4 w-full">
      <Image
        src="./logo.svg"
        width={150}
        height={150}
        className="mr-8"
        alt="logo"
      />
      <Button className="mr-0 ml-auto">Take Action</Button>
    </div>
  );
};

export default Navbar;
