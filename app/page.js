"use client";
import BusinessHook from "../components/BusinessHook";
import Feature01 from "../components/Feature01";
import Feature02 from "../components/Feature02";
import Feature03 from "../components/Feature03";
import Pricing from "../components/Pricing";
import Reviews from "../components/Reviews";
import CallToAction from "../components/CallToAction";
import RevealAnimate from "@/Animations/RevealWrapper";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col h-full w-full px-56">
        <RevealAnimate>
          <BusinessHook />
        </RevealAnimate>
        <Divider className="w-[1200px] ml-auto mr-auto my-2"/>
        <RevealAnimate>
          <Feature01 />
        </RevealAnimate>
        <Divider className="w-72 ml-auto mr-auto my-2"/>
        <RevealAnimate>
          <Feature02 />
        </RevealAnimate>
        <Divider className="w-72 ml-auto mr-auto my-2"/>
        <RevealAnimate>
          <Feature03 />
        </RevealAnimate>
        <Divider className="w-[1200px] ml-auto mr-auto my-2"/>
        <RevealAnimate>
          <Pricing />
        </RevealAnimate>
        <Divider className="w-[1200px] ml-auto mr-auto my-2"/>
        <RevealAnimate>
          <Reviews />
        </RevealAnimate>
        <RevealAnimate>
          <CallToAction />
        </RevealAnimate>

      </div>
    </main>
  );
}
