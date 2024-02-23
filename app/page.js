"use client";
import BusinessHook from "../components/BusinessHook";
import Feature01 from "../components/Feature01";
import Feature02 from "../components/Feature02";
import Feature03 from "../components/Feature03";
import Pricing from "../components/Pricing";
import Reviews from "../components/Reviews";
import CallToAction from "../components/CallToAction";
import RevealAnimate from "@/Animations/RevealWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col h-full w-full px-60">
        <RevealAnimate>
          <BusinessHook />
        </RevealAnimate>
        <RevealAnimate>
          <Feature01 />
        </RevealAnimate>
        <RevealAnimate>
          <Feature02 />
        </RevealAnimate>
        <RevealAnimate>
          <Feature03 />
        </RevealAnimate>
        <RevealAnimate>
          <Pricing />
        </RevealAnimate>
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
