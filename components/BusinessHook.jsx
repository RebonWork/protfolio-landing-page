const BusinessHook = () => {
  return (
    <div className="xl:grid xl:grid-flow-col flex flex-row max-sm:flex-wrap-reverse w-full py-20 items-center">
      <div className="flex flex-col lg:w-[500px] 2xl:w-[630px]">
        <h1 className="leading-tight text-balance">Work Flowlessly</h1>
        <h2 className="bg-gradient-to-r from-primary from-25% to-accent bg-clip-text text-transparent bg-300% animate-gradient">
          Unlock Project Harmony
        </h2>
        <span className="text-text text-xl font-light mt-3">
          Ditch the struggle, embrace ease. We offer intuitive tools that
          simplify tasks, automate processes, and foster smooth collaboration,
          freeing you to achieve more with less effort.
        </span>
      </div>
      <div className="w-[500px] lg:w-[700px] 2xl:w-[1000px] ">
        <img src="/flowlessly.svg" alt="business" />
      </div>
    </div>
  );
};

export default BusinessHook;
