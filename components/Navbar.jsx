import { Button } from "@nextui-org/react";
import Image from "next/image";

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
        <Button>Take Action</Button>
      </div>
    </nav>
  );
};

export default Navbar;
