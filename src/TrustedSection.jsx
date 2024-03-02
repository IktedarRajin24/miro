import React from "react";
import Button from "./Layouts/Button";

const TrustedSection = () => {
  return (
    <div className="lg:w-[85%] w-[95%] mx-auto py-40 flex flex-col justify-center items-center lg:gap-0 gap-10 relative">
      <p className="text-sm bg-[#ffd02f] px-3 py21 font-semibold uppercase rounded-md absolute top-[130px] 2xl:right-[33%] md:right-[25%] right-[1px] rotate-[12deg]">
        Your Idea Starts Here
      </p>
      <h1 className="md:text-5xl text-4xl font-bold text-center 2xl:w-[40%] md:w-[60%] w-[95%] leading-10 mx-auto mb-16 ">
        Collaborate without constraints
      </h1>
      <div className="md:w-11/12 w-[90%] mb-20 mx-auto flex md:flex-row flex-col justify-around items-start gap-3">
        <div className="flex flex-col gap-5 2xl:w-1/2 w-9/12 mx-auto">
          <h1 className="text-xl font-bold">Free forever</h1>
          <p className="text-slate-400 2xl:w-1/2 md:w-[90%]">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our{" "}
            <span className="text-[#4262ff] cursor-pointer hover:underline hover:text-[#264aff]  transition-all duration-300">
              pricing plans
            </span>{" "}
            for more features.
          </p>
        </div>
        <div className="flex flex-col gap-5 2xl:w-1/2 w-9/12 mx-auto">
          <h1 className="text-xl font-bold">Easy integrations</h1>
          <p className="text-slate-400 2xl:w-1/2 md:w-[90%]">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our{" "}
            <span className="text-[#4262ff] cursor-pointer hover:underline hover:text-[#264aff] transition-all duration-300">
              Marketplace
            </span>{" "}
            .
          </p>
        </div>
        <div className="flex flex-col gap-5 2xl:w-1/2 w-9/12 mx-auto">
          <h1 className="text-xl font-bold">Security first</h1>
          <p className="text-slate-400 2xl:w-1/2 md:w-[90%]">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our{" "}
            <span className="text-[#4262ff] cursor-pointer hover:underline hover:text-[#264aff]  transition-all duration-300">
              Trust Center
            </span>{" "}
            .
          </p>
        </div>
      </div>
      <Button children="Sign up free" />
    </div>
  );
};

export default TrustedSection;
