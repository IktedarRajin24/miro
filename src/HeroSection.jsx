import React from "react";
import Button from "./Layouts/Button";

const HeroSection = () => {
  return (
    <div className="lg:w-[85%] w-[95%] mx-auto py-20 flex lg:flex-row flex-col justify-center items-center lg:gap-0 gap-10">
      <div className="lg:w-1/2 w-[95%]">
        <h1 className="text-5xl font-bold lg:w-[60%] w-[95%] leading-[56px] pb-3">
          Take ideas from better to best
        </h1>
        <p className="text-xl lg:w-[60%] w-[95%] py-5 leading-6">
          Miro is your team's visual platform to connect, collaborate, and
          create — together.
        </p>
        <form className="mb-3 ">
          <input
            type="text"
            placeholder="Enter your work email"
            className="lg:w-[70%] w-[100%] border border-slate-500 px-3 py-2 rounded-full mb-3"
          />
          <Button children="Sign up free" width="lg:w-[70%] w-[100%]" />
        </form>
        <p className="text-slate-400 text-sm">
          Collaborate with your team within minutes
        </p>
      </div>
      <div className="lg:w-1/2 w-[95%]">
        <img src="images/hero-image.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
