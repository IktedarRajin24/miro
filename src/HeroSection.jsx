import React from "react";
import Button from "./Layouts/Button";
import { LiaStarSolid, LiaStarHalfAltSolid } from "react-icons/lia";

const HeroSection = () => {
  return (
    <div className="lg:w-[85%] w-[95%] mx-auto py-20 flex lg:flex-row flex-col justify-center items-center lg:gap-0 gap-10">
      <div className="lg:w-1/2 w-[95%] lg:mx-0 mx-auto">
        <h1 className="2xl:text-5xl text-4xl font-bold lg:w-[60%] w-[95%] leading-[56px] mb-2">
          Take ideas from better to best
        </h1>
        <p className="2xl:text-xl lg:w-[60%] w-[95%] mb-10 leading-6">
          Miro is your team's visual platform to connect, collaborate, and
          create — together.
        </p>
        <form className="mb-3">
          <input
            type="text"
            placeholder="Enter your work email"
            className="lg:w-[70%] w-[100%] border border-slate-500 px-3 py-2 rounded-full mb-3"
          />
          <Button children="Sign up free" width="lg:w-[70%] w-[100%]" />
        </form>
        <p className="text-slate-400 text-sm mb-10">
          Collaborate with your team within minutes
        </p>
        <div className="bg-[#F5F5F7] 2xl:w-1/2 md:w-[75%] w-[95%] lg:mx-0 mx-auto px-4 py-3 flex items-center justify-between rounded-md">
          <div>
            <div className="flex items-center gap-1">
              <LiaStarSolid size={20} color="#FF9D48" />
              <LiaStarSolid size={20} color="#FF9D48" />
              <LiaStarSolid size={20} color="#FF9D48" />
              <LiaStarSolid size={20} color="#FF9D48" />
              <LiaStarHalfAltSolid size={20} color="#FF9D48" />
            </div>
            <p className="text-sm">Based on 5149+ reviews.</p>
          </div>
          <div className="flex items-center justify-end gap-4">
            <img src="images/brand.png" alt="brand" />
            <img src="images/getapp.png" alt="brand" />
            <img src="images/capterra.png" alt="brand" />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-[95%] lg:mx-0 mx-auto">
        <img src="images/hero-image.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
