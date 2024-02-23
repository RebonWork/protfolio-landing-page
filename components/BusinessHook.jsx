const BusinessHook = () => {
  return (
      <div className="flex flex-row max-md:flex-col gap-6 w-full pb-20 mt-32 justify-between items-center">
        <div>
          <h1 className="leading-tight mb-12 text-balance">
            Work Flowlessly, <br /> Achieve Effortlessly. <br />
            <span className="bg-gradient-to-r from-primary from-25% to-danger bg-clip-text text-transparent bg-300% animate-gradient">
              Unlock Project Harmony.
            </span>
          </h1>
          <h4>
            Experience effortless work! Start your free trial and discover the
            joy of organized success.
          </h4>
          <span>
            Ditch the struggle, embrace ease. We offer intuitive tools that
            simplify tasks, automate processes, and foster smooth collaboration,
            freeing you to achieve more with less effort.
          </span>
        </div>
        <div className="w-[500px] h-[400px]">
          <img src="https://placehold.co/500x600?font=roboto" alt="business" />
        </div>
      </div>
  );
};

export default BusinessHook;
