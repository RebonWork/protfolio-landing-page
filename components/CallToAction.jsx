import { Button } from "@nextui-org/react";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[450px] flex-wrap ">
      <h2 className="text-text">What Are You Waiting For. Join Us.</h2>
      <Button className="bg-accent text-white mt-5" size="lg">Get Started</Button>
    </div>
  );
};

export default CallToAction;
