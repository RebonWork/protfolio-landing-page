import DelayRevealAnimate from "@/Animations/DelayedRevealAnimation";

const Feature03 = () => {
  return (
    <div className="flex flex-row w-full h-auto justify-between py-20 items-center max-sm:flex-wrap max-sm:justify-center">
      <DelayRevealAnimate>
        <div className="w-[800px] max-2xl:w-[500px] max-sm:w-[350px] h-auto">
          <img src="/time-tracking.svg" alt="business" />
        </div>
      </DelayRevealAnimate>
      <div>
        <h2>Time Tracking Triumph</h2>
        <h4 className="mt-3"> Master Hours, Maximize Output.</h4>
        <p className="font-light mt-1">
          Stop guessing where your time goes! Gain laser-sharp insights into
          team effort with precise time tracking. Optimize resource allocation,
          identify areas for improvement, and boost overall project efficiency.
          Time tracking - your key to maximizing output and profitability.
        </p>
      </div>
    </div>
  );
};

export default Feature03;
