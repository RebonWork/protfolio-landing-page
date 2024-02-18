import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BusinessHook from "../components/BusinessHook";
import Feature01 from "../components/Feature01";
import Feature02 from "../components/Feature02";
import Feature03 from "../components/Feature03";
import Pricing from "../components/Pricing";
import Reviews from "../components/Reviews";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-44">
      <Navbar />
      <div className="flex flex-col gap-12 h-full w-full mt-24">
        <BusinessHook />
        <Feature01 />
        <Feature02 />
        <Feature03 />
        <Pricing />
        <Reviews />
        <CallToAction />
      </div>
      <Footer />
    </main>
  );
}
