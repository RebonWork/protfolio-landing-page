const BusinessHook = () => {
  return (
    <div className="grid grid-flow-col w-full justify-between py-20 items-center">
      <div className="flex flex-col w-[630px]">
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
      <div className="w-[1000px] ">
        <img src="/flowlessly.svg" alt="business" />
      </div>
    </div>
  );
};

export default BusinessHook;
