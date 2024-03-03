import React from "react";
import Button from "../Layouts/Button";

const Banner = () => {
  return (
    <div className="bg-[url('images/section-3.png')] bg-no-repeat bg-contain bg-center lg:w-[85%] w-[95%] h-[500px] mx-auto py-20 relative mb-20">
      <div className="absolute 2xl:right-[20%] md:right-[5%] right-0 md:left-auto left-0 mx-auto md:top-[40%] top-[70%] flex flex-col items-center gap-4">
        <h1 className="md:text-lg text:sm font-bold">The ways we work</h1>
        <p className="md:text-base text-xs">
          How has our relationship with work changed?
        </p>
        <Button children={"View the report"} />
      </div>
    </div>
  );
};

export default Banner;
