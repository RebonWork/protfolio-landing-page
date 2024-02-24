import DelayRevealAnimate from "@/Animations/DelayedRevealAnimation";

const Feature01 = () => {
  return (
    <div className="flex flex-row w-full h-auto justify-between py-20 items-center">
      <DelayRevealAnimate>
        <div className="w-[850px] h-auto">
          <img src="/hit-goals.svg" alt="business" />
        </div>
      </DelayRevealAnimate>
      <div>
        <h2>Slay Scope Creep</h2>
        <div>
          <h4 className="mt-3">Lock Down Goals, Crush Objectives.</h4>
          <p className="font-light mt-1">
            Sick of projects ballooning beyond control? Tame uncontrolled
            additions with robust scope management features. Define clear
            project boundaries, track scope changes transparently, and ensure
            your project stays on track, on budget, and on target.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature01;
