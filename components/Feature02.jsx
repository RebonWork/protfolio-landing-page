import DelayRevealAnimate from "@/Animations/DelayedRevealAnimation";

const Feature02 = () => {
  return (
    <div className="flex flex-row w-full h-auto justify-between py-20 items-center">
      <div>
        <h2>Risk Radar</h2>
        <h4 className="mt-3">Predict Problems, Proactively Prepare.</h4>
        <p className="font-light mt-1">
          Don&apos;t be caught off guard! Identify potential risks before they
          derail your project. Utilize built-in risk management tools to assess
          threats, develop mitigation strategies, and react proactively.
          Navigate challenges with confidence and safeguard your project&apos;s
          success.
        </p>
      </div>
      <DelayRevealAnimate>
        <div className="w-[800px] h-auto">
          <img src="/risk-radar.svg" alt="business" />
        </div>
      </DelayRevealAnimate>
    </div>
  );
};

export default Feature02;
