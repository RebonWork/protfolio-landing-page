const BusinessHook = () => {
  return (
    <div className="flex flex-row  gap-6 py-20 justify-between items-center">
      <div className="flex flex-col w-[800px]">
        <h1 className="leading-tight text-balance">Work Flowlessly</h1>
        <h2 className="bg-gradient-to-r from-primary from-25% to-accent bg-clip-text text-transparent bg-300% animate-gradient">
          Unlock Project Harmony
        </h2>
        <span className="text-text text-xl mt-3 w-[800px]">
          Ditch the struggle, embrace ease. We offer intuitive tools that
          simplify tasks, automate processes, and foster smooth collaboration,
          freeing you to achieve more with less effort.
        </span>
      </div>
      <div className="w-[500px] h-[600px]">
        <img src="https://placehold.co/500x600?font=roboto" alt="business" />
      </div>
    </div>
  );
};

export default BusinessHook;
