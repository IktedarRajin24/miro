import React from "react";
import LearnMore from "../Layouts/LearnMore";

const SectionOne = () => {
  return (
    <div className="lg:w-[85%] w-[95%] mx-auto py-20 flex lg:flex-row flex-col justify-center items-center lg:gap-0 gap-10">
      <div className="lg:w-1/2 w-[95%] lg:mx-0 mx-auto">
        <h1 className="2xl:text-5xl text-4xl font-bold lg:w-[60%] w-[95%] leading-[56px] mb-3">
          Work together, wherever you work
        </h1>
        <p className="2xl:text-xl lg:w-[60%] w-[95%] mb-10 leading-6">
          In the office, remote, or a mix of the two, with Miro, your team can
          connect, collaborate, and co-create in one space no matter where you
          are.
        </p>
        <LearnMore />
      </div>
      <div className="lg:w-1/2 w-[95%] lg:mx-0 mx-auto ">
        <img src="images/hybridwork.png" alt="hybrid-work" />
      </div>
    </div>
  );
};

export default SectionOne;
