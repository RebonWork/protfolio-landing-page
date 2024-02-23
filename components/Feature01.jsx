import DelayRevealAnimate from "@/Animations/DelayedRevealAnimation";

const Feature01 = () => {
  return (
    <div className="flex flex-row w-full h-auto justify-between py-20 items-center">
      <DelayRevealAnimate>
        <div className="w-[400px] h-[400px]">
          <img src="https://placehold.co/400x400?font=roboto" alt="business" />
        </div>
      </DelayRevealAnimate>
      <div>
        <h2>Slay Scope Creep</h2>
        <div>
          <h4>Lock Down Goals, Crush Objectives.</h4>
          <p>
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
